"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import styles from "./DocumentUpload.module.css";

type Props = {
  onExtracted: (text: string, meta: { filename: string; format: string; pages?: number; truncated: boolean }) => void;
};

const ACCEPT = ".pdf,.docx,.txt,.md,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown";

export function DocumentUpload({ onExtracted }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [parsing, setParsing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFile, setLastFile] = useState<{ name: string; format: string; pages?: number; truncated: boolean } | null>(null);

  async function handleFile(file: File) {
    setParsing(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/articles/upload-document", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Parse failed");
      onExtracted(data.text, {
        filename: data.filename ?? file.name,
        format: data.format,
        pages: data.pages,
        truncated: data.truncated,
      });
      setLastFile({
        name: data.filename ?? file.name,
        format: data.format,
        pages: data.pages,
        truncated: data.truncated,
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Parse failed";
      setError(msg);
    } finally {
      setParsing(false);
    }
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  function onSelect(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  }

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.drop} ${dragging ? styles.dropActive : ""} ${parsing ? styles.dropDisabled : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => !parsing && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT}
          onChange={onSelect}
          className={styles.fileInput}
        />
        {parsing ? (
          <span>Parsing document…</span>
        ) : lastFile ? (
          <div className={styles.parsedInfo}>
            <span className={styles.parsedLabel}>
              ✓ {lastFile.name} parsed ({lastFile.format.toUpperCase()}
              {lastFile.pages ? `, ${lastFile.pages} pages` : ""}
              {lastFile.truncated ? ", truncated to 28k chars" : ""})
            </span>
            <span className={styles.parsedHint}>
              Drop another file to replace, or edit the text below.
            </span>
          </div>
        ) : (
          <>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="15" y2="17" />
            </svg>
            <span className={styles.dropHint}>
              <strong>Drop a document</strong> or click to browse · PDF, Word
              (.docx), TXT, MD · max 10 MB
            </span>
            <span className={styles.dropSubhint}>
              Extracted text will auto-fill the input below. Scanned PDFs (OCR)
              are not supported.
            </span>
          </>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
