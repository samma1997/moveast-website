"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import styles from "./CoverImageDrop.module.css";

type Cover = { id: string | number; url?: string | null };

type Props = {
  value: Cover | null;
  onChange: (cover: Cover | null) => void;
};

export function CoverImageDrop({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  async function uploadFile(file: File) {
    if (!alt.trim()) {
      setError("Add alt text first (briefly describe the image for SEO).");
      return;
    }
    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("alt", alt.trim());
      const res = await fetch("/api/admin/articles/upload-image", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? "Upload failed");
      }
      onChange({ id: data.id, url: data.url ?? data.sizes?.card?.url });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      setError(msg);
    } finally {
      setUploading(false);
    }
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }

  function onSelect(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
    e.target.value = "";
  }

  function clearCover() {
    onChange(null);
    setAlt("");
    setError(null);
  }

  if (value) {
    return (
      <div className={styles.preview}>
        {value.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value.url} alt="" className={styles.previewImg} />
        )}
        <div className={styles.previewBody}>
          <span className={styles.previewLabel}>Cover uploaded</span>
          <span className={styles.previewMeta}>Media id: {value.id}</span>
          <button
            type="button"
            className={styles.removeBtn}
            onClick={clearCover}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <input
        type="text"
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
        placeholder="Alt text (required, max 130 chars) — what's in the image"
        maxLength={130}
        className={styles.altInput}
      />

      <div
        className={`${styles.drop} ${dragging ? styles.dropActive : ""} ${
          uploading ? styles.dropDisabled : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => !uploading && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={onSelect}
          className={styles.fileInput}
        />
        {uploading ? (
          <span>Uploading…</span>
        ) : (
          <>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span className={styles.dropHint}>
              <strong>Drop an image</strong> or click to browse · max 8 MB
            </span>
          </>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
