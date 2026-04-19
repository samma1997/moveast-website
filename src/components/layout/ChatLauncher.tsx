"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { CloseIcon } from "@/components/ui/ArrowIcon";
import styles from "./ChatLauncher.module.css";

export function ChatLauncher() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={`${styles.launcher} ${open ? styles.open : ""}`} aria-label="Contact chat">
      <div
        className={styles.panel}
        role="dialog"
        aria-labelledby="chat-panel-title"
        aria-hidden={!open}
      >
        <header className={styles.head}>
          <span className={styles.avatar} aria-hidden="true">M</span>
          <div className={styles.id}>
            <b id="chat-panel-title">{site.name}</b>
            <span>
              <span className={styles.dotLive} aria-hidden="true" />
              Online · replies in 24–48h
            </span>
          </div>
        </header>
        <div className={styles.log} aria-live="polite">
          <div className={styles.bubble}>
            Hi 👋 — looking to source or manufacture in China? Tell us what you need.
          </div>
          <div className={styles.bubble}>
            We handle procurement, factory audits, quality control and logistics across
            healthcare, energy, railway and industrial sectors.
          </div>
        </div>
        <div className={styles.cta}>
          <Link href="/contact">Start chat</Link>
          <a href={`mailto:${site.email}`} className={styles.primary}>
            Email us →
          </a>
        </div>
      </div>

      <button
        type="button"
        className={styles.btn}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.btnIco} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
        <span className={styles.btnLabel}>Let&apos;s talk</span>
        <span className={styles.btnClose} aria-hidden="true"><CloseIcon /></span>
      </button>
    </div>
  );
}
