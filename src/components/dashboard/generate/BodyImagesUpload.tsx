"use client";

import { useState, useRef, type ChangeEvent } from "react";
import styles from "./BodyImagesUpload.module.css";

export type BodyImage = {
  id: string | number;
  url?: string | null;
  alt: string;
  description?: string;
};

type Props = {
  value: BodyImage[];
  onChange: (next: BodyImage[]) => void;
  max?: number;
};

const MAX = 5;
const ACCEPT = "image/png,image/jpeg,image/webp,image/gif";

export function BodyImagesUpload({ value, onChange, max = MAX }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [draftAlt, setDraftAlt] = useState("");
  const [draftDesc, setDraftDesc] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canAddMore = value.length < max;

  async function uploadFile(file: File) {
    if (!draftAlt.trim()) {
      setError("Add alt text first.");
      return;
    }
    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("alt", draftAlt.trim());
      const res = await fetch("/api/admin/articles/upload-image", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Upload failed");
      const newImage: BodyImage = {
        id: data.id,
        url: data.url ?? data.sizes?.card?.url,
        alt: draftAlt.trim(),
        description: draftDesc.trim() || undefined,
      };
      onChange([...value, newImage]);
      setDraftAlt("");
      setDraftDesc("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      setError(msg);
    } finally {
      setUploading(false);
    }
  }

  function onSelect(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
    e.target.value = "";
  }

  function removeImage(idx: number) {
    onChange(value.filter((_, i) => i !== idx));
  }

  return (
    <div className={styles.wrap}>
      {value.length > 0 && (
        <ul className={styles.list}>
          {value.map((img, i) => (
            <li key={`${img.id}-${i}`} className={styles.item}>
              <span className={styles.marker}>[IMG:{i}]</span>
              {img.url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={img.url} alt="" className={styles.thumb} />
              )}
              <div className={styles.itemBody}>
                <span className={styles.itemAlt}>{img.alt}</span>
                {img.description && (
                  <span className={styles.itemDesc}>{img.description}</span>
                )}
                <span className={styles.itemMeta}>
                  Media id: {img.id}
                </span>
              </div>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => removeImage(i)}
                aria-label="Remove image"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {canAddMore && (
        <div className={styles.adder}>
          <input
            type="text"
            value={draftAlt}
            onChange={(e) => setDraftAlt(e.target.value)}
            placeholder="Alt text — what's in the image (required)"
            maxLength={200}
            className={styles.input}
            disabled={uploading}
          />
          <input
            type="text"
            value={draftDesc}
            onChange={(e) => setDraftDesc(e.target.value)}
            placeholder="Optional context — helps the AI place the image"
            maxLength={400}
            className={styles.input}
            disabled={uploading}
          />
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPT}
            onChange={onSelect}
            className={styles.fileInput}
          />
          <button
            type="button"
            className={styles.addBtn}
            onClick={() => inputRef.current?.click()}
            disabled={uploading || !draftAlt.trim()}
          >
            {uploading
              ? "Uploading..."
              : value.length === 0
                ? "+ Add first body image"
                : `+ Add another image (${value.length}/${max})`}
          </button>
        </div>
      )}

      {!canAddMore && (
        <span className={styles.maxHint}>
          Max {max} body images reached.
        </span>
      )}

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
