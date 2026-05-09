"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingPulse.module.css";

type Props = {
  model: string;
  status: "draft" | "published";
};

const STEPS = [
  "Reading your brief…",
  "Pulling brand context (CICC, UNGM, EDR, services, sectors)…",
  "Drafting H1 and primary keyword strategy…",
  "Writing 4–8 sections with bullets and FAQs…",
  "Validating Zod structured schema…",
  "Converting to Lexical state for Payload…",
  "Saving article…",
];

export function LoadingPulse({ model, status }: Props) {
  const [step, setStep] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const sInterval = setInterval(() => setSeconds((s) => s + 1), 1000);
    const stepInterval = setInterval(() => {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    }, model === "haiku" ? 2500 : model === "sonnet" ? 5000 : 8000);

    return () => {
      clearInterval(sInterval);
      clearInterval(stepInterval);
    };
  }, [model]);

  return (
    <div className={styles.wrap}>
      <div className={styles.spinner} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h3 className={styles.title}>
        Generating with {model}…
      </h3>
      <p className={styles.subtitle}>
        Status: <strong>{status === "published" ? "publish on completion" : "save as draft"}</strong>
      </p>
      <div className={styles.steps}>
        {STEPS.map((s, i) => (
          <div
            key={i}
            className={`${styles.step} ${
              i < step ? styles.stepDone : i === step ? styles.stepActive : ""
            }`}
          >
            <span className={styles.stepDot} aria-hidden="true">
              {i < step ? "✓" : i === step ? "·" : ""}
            </span>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <div className={styles.timer}>
        Elapsed: {Math.floor(seconds / 60)}m {seconds % 60}s ·{" "}
        {model === "opus"
          ? "Opus typically takes 60–90s"
          : model === "sonnet"
            ? "Sonnet typically takes 25–50s"
            : "Haiku typically takes 10–20s"}
      </div>
    </div>
  );
}
