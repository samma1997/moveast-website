"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CoverImageDrop } from "./CoverImageDrop";
import { DocumentUpload } from "./DocumentUpload";
import { BodyImagesUpload, type BodyImage } from "./BodyImagesUpload";
import { ArticlePreview } from "./ArticlePreview";
import { LoadingPulse } from "./LoadingPulse";
import styles from "./ArticleGeneratorForm.module.css";

type GenResult = {
  ok: true;
  id: string | number;
  slug: string;
  title: string;
  readingTime: number;
  sectionCount: number;
  faqCount: number;
  previewUrl: string;
  status: "draft" | "published";
};

const ANGLE_OPTIONS = [
  { value: "guide", label: "Pillar guide", desc: "Long-form 2k+ words, progressive how-to" },
  { value: "case-study", label: "Case study", desc: "Narrative + concrete metrics" },
  { value: "data-report", label: "Data report", desc: "Tables, stats, sourced figures" },
  { value: "comparison", label: "Comparison", desc: "Factual feature parity, no denigration" },
] as const;

const MODEL_OPTIONS = [
  { value: "haiku", label: "Haiku 4.5", cost: "≈$0.10/article", desc: "Fastest, lower depth" },
  { value: "sonnet", label: "Sonnet 4.6", cost: "≈$0.30/article", desc: "Recommended default" },
  { value: "opus", label: "Opus 4.7", cost: "≈$0.80/article", desc: "Highest quality, slow" },
] as const;

type Cover = { id: string | number; url?: string | null } | null;

export function ArticleGeneratorForm() {
  const router = useRouter();

  const [rawPaste, setRawPaste] = useState("");
  const [targetKeyword, setTargetKeyword] = useState("");
  const [angle, setAngle] = useState<(typeof ANGLE_OPTIONS)[number]["value"]>("guide");
  const [model, setModel] = useState<(typeof MODEL_OPTIONS)[number]["value"]>("sonnet");
  const [cover, setCover] = useState<Cover>(null);
  const [bodyImages, setBodyImages] = useState<BodyImage[]>([]);

  const [submitStatus, setSubmitStatus] = useState<"draft" | "published">("draft");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GenResult | null>(null);

  const charCount = rawPaste.length;
  const charLimit = 30_000;
  const canSubmit = charCount >= 100 && !loading;

  async function onSubmit(e: FormEvent, status: "draft" | "published") {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitStatus(status);
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/admin/articles/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rawPaste,
          targetKeyword: targetKeyword.trim() || undefined,
          angle,
          model,
          status,
          coverImageId: cover?.id,
          bodyImages: bodyImages.length > 0
            ? bodyImages.map((img) => ({
                id: img.id,
                alt: img.alt,
                description: img.description,
              }))
            : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data?.error ?? "Generation failed";
        const issues = data?.issues
          ? Object.entries(data.issues)
              .map(([k, v]) => `${k}: ${(v as string[]).join(", ")}`)
              .join(" · ")
          : null;
        throw new Error(issues ? `${msg} — ${issues}` : msg);
      }

      setResult({ ...data, status });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setRawPaste("");
    setTargetKeyword("");
    setAngle("guide");
    setModel("sonnet");
    setCover(null);
    setBodyImages([]);
    setResult(null);
    setError(null);
  }

  if (loading) {
    return <LoadingPulse model={model} status={submitStatus} />;
  }

  if (result) {
    return (
      <ArticlePreview
        result={result}
        onReset={reset}
        onEdit={() => router.push(`/admin/collections/articles/${result.id}`)}
      />
    );
  }

  return (
    <form className={styles.form}>
      <section className={styles.section}>
        <div className={styles.fieldHead}>
          <span className={styles.label}>Source — paste text or upload document</span>
        </div>
        <span className={styles.help}>
          Paste a brief / notes / transcript directly, or upload a document
          (PDF, Word, TXT, MD) and we extract the text for you. Either path
          lands in the same input below — you can edit before generating.
        </span>

        <DocumentUpload
          onExtracted={(text) => {
            setRawPaste(text.slice(0, charLimit));
          }}
        />

        <label className={styles.field} style={{ marginTop: 6 }}>
          <div className={styles.fieldHead}>
            <span className={styles.label}>Raw text</span>
            <span
              className={`${styles.counter} ${
                charCount < 100
                  ? styles.counterError
                  : charCount > charLimit * 0.9
                    ? styles.counterWarn
                    : ""
              }`}
            >
              {charCount.toLocaleString()} / {charLimit.toLocaleString()} chars
            </span>
          </div>
          <textarea
            value={rawPaste}
            onChange={(e) => setRawPaste(e.target.value.slice(0, charLimit))}
            className={styles.textarea}
            rows={12}
            placeholder="Or paste here directly — A senior procurement manager at an Italian energy company is sourcing BESS units from China. They need to understand: bankability of Chinese tier-1 suppliers, EU-grid certification requirements, typical lead times, and how to structure a multi-year supply agreement..."
            required
          />
        </label>
      </section>

      <section className={styles.section}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Primary keyword (optional)</span>
            <span className={styles.help}>
              Anchor keyword the article should rank for.
            </span>
            <input
              type="text"
              value={targetKeyword}
              onChange={(e) => setTargetKeyword(e.target.value)}
              className={styles.input}
              maxLength={140}
              placeholder="e.g. china BESS procurement"
            />
          </label>
        </div>

        <div className={styles.row}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Angle</legend>
            <div className={styles.optionGrid}>
              {ANGLE_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`${styles.option} ${
                    angle === opt.value ? styles.optionActive : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="angle"
                    value={opt.value}
                    checked={angle === opt.value}
                    onChange={() => setAngle(opt.value)}
                  />
                  <span className={styles.optionTitle}>{opt.label}</span>
                  <span className={styles.optionDesc}>{opt.desc}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className={styles.row}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Model</legend>
            <div className={styles.optionGrid}>
              {MODEL_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`${styles.option} ${
                    model === opt.value ? styles.optionActive : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="model"
                    value={opt.value}
                    checked={model === opt.value}
                    onChange={() => setModel(opt.value)}
                  />
                  <span className={styles.optionTitle}>
                    {opt.label}
                    <span className={styles.optionPill}>{opt.cost}</span>
                  </span>
                  <span className={styles.optionDesc}>{opt.desc}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.fieldHead}>
          <span className={styles.label}>Cover image (optional)</span>
        </div>
        <span className={styles.help}>
          Upload an image to set as article cover. Recommend 16:9, 1600px+
          wide, JPG/PNG/WebP.
        </span>
        <CoverImageDrop value={cover} onChange={setCover} />
      </section>

      <section className={styles.section}>
        <div className={styles.fieldHead}>
          <span className={styles.label}>Body images (optional, max 5)</span>
        </div>
        <span className={styles.help}>
          The AI will place these inline using <code>[IMG:0]</code>,{" "}
          <code>[IMG:1]</code> markers wherever they fit best in the article.
          Add alt text + optional context (e.g.{" "}
          &quot;solar panels at JinkoSolar plant in Jiangsu&quot;) so the AI
          knows where to position them.
        </span>
        <BodyImagesUpload value={bodyImages} onChange={setBodyImages} />
      </section>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={(e) => onSubmit(e, "draft")}
          disabled={!canSubmit}
        >
          Generate as draft
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={(e) => onSubmit(e, "published")}
          disabled={!canSubmit}
        >
          Generate &amp; publish
        </button>
      </div>
    </form>
  );
}
