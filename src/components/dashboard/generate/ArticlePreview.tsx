"use client";

import Link from "next/link";
import styles from "./ArticlePreview.module.css";

type Props = {
  result: {
    id: string | number;
    slug: string;
    title: string;
    readingTime: number;
    sectionCount: number;
    faqCount: number;
    previewUrl: string;
    status: "draft" | "published";
  };
  onReset: () => void;
  onEdit: () => void;
};

export function ArticlePreview({ result, onReset, onEdit }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.headerCard}>
        <span
          className={`${styles.statusPill} ${
            result.status === "published" ? styles.published : styles.draft
          }`}
        >
          {result.status === "published" ? "Published" : "Saved as draft"}
        </span>
        <h2 className={styles.title}>{result.title}</h2>
        <div className={styles.meta}>
          <span>
            <strong>{result.sectionCount}</strong> sections
          </span>
          <span className={styles.dot} aria-hidden="true" />
          <span>
            <strong>{result.faqCount}</strong> FAQ
          </span>
          <span className={styles.dot} aria-hidden="true" />
          <span>
            <strong>{result.readingTime}</strong> min read
          </span>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.slug}>/blog/{result.slug}</span>
        </div>
      </div>

      <div className={styles.actions}>
        {result.status === "published" ? (
          <Link
            href={result.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            View live article →
          </Link>
        ) : (
          <a
            href={`/admin/collections/articles/${result.id}`}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Open draft in Payload →
          </a>
        )}
        <button
          type="button"
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={onEdit}
        >
          Edit in Payload
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnGhost}`}
          onClick={onReset}
        >
          Generate another
        </button>
      </div>

      <div className={styles.tip}>
        💡 The article is now in the database. Open it in Payload to
        fine-tune, schedule publishing, or attach a custom cover. Internal
        links and FAQ schema are already structured.
      </div>
    </div>
  );
}
