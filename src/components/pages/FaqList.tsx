"use client";

import { useState } from "react";
import styles from "./ServiceDetail.module.css";

type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className={styles.faq}>
      {items.map((f, i) => (
        <div key={i} className={`${styles.faqItem} ${openIdx === i ? styles.open : ""}`}>
          <button
            type="button"
            className={styles.faqHead}
            aria-expanded={openIdx === i}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <span className={styles.faqQ}>{f.question}</span>
            <span className={styles.faqToggle} aria-hidden="true">
              {openIdx === i ? "–" : "+"}
            </span>
          </button>
          <div className={styles.faqBody}>
            <p className={styles.faqA}>{f.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
