"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { CloseIcon } from "@/components/ui/ArrowIcon";
import styles from "./ChatLauncher.module.css";

type StepKey = "name" | "email" | "company" | "sector" | "message";
type StepInput =
  | { kind: "text"; placeholder: string }
  | { kind: "email"; placeholder: string }
  | { kind: "textarea"; placeholder: string }
  | { kind: "chips"; options: readonly string[] };

type Step = {
  key: StepKey;
  bot: string | ((a: Partial<Record<StepKey, string>>) => string);
  input: StepInput;
};

const steps: readonly Step[] = [
  {
    key: "name",
    bot: "Hi 👋 — I'm Move East. What is your full name?",
    input: { kind: "text", placeholder: "Jane Doe" },
  },
  {
    key: "email",
    bot: (a) => `Nice to meet you, ${(a.name ?? "").split(" ")[0]}. What email should we reply to?`,
    input: { kind: "email", placeholder: "name@company.com" },
  },
  {
    key: "company",
    bot: "Which company or organisation are you writing from?",
    input: { kind: "text", placeholder: "ACME Infrastructure Ltd." },
  },
  {
    key: "sector",
    bot: "Which sector is closest to your request?",
    input: {
      kind: "chips",
      options: [
        "Mobility & Railway",
        "Renewable Energy",
        "Medical Devices",
        "Industrial Machinery",
        "Other",
      ],
    },
  },
  {
    key: "message",
    bot: "Briefly, what do you need? (Project, products, timeline)",
    input: {
      kind: "textarea",
      placeholder: "We are looking to source...",
    },
  },
];

const SECTOR_MAP: Record<string, string> = {
  "Mobility & Railway": "mobility",
  "Renewable Energy": "renewable-energy",
  "Medical Devices": "medical-devices",
  "Industrial Machinery": "industrial-machinery",
  Other: "other",
};

type Msg = { role: "bot" | "user"; text: string };

export function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [phase, setPhase] = useState<"chat" | "sent" | "error">("chat");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const currentStep = steps[stepIdx];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    if (!started) return;
    setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      const first = steps[0];
      if (first) {
        const text = typeof first.bot === "function" ? first.bot({}) : first.bot;
        setMessages([{ role: "bot", text }]);
      }
    }, 400);
    return () => clearTimeout(t);
  }, [started]);

  useEffect(() => {
    if (!started) return;
    setTimeout(() => inputRef.current?.focus(), 60);
  }, [stepIdx, started]);

  const startChat = () => {
    setStarted(true);
    setStepIdx(0);
    setAnswers({});
    setMessages([]);
    setPhase("chat");
    setErrorMsg(null);
  };

  const submitValue = async (value: string) => {
    if (!currentStep) return;
    const next = { ...answers, [currentStep.key]: value };
    setAnswers(next);
    setMessages((m) => [...m, { role: "user", text: value }]);
    setSelectedChip(null);
    setTextValue("");

    const nextIdx = stepIdx + 1;
    if (nextIdx >= steps.length) {
      // Submit
      setSubmitting(true);
      setTyping(true);
      try {
        const payload = {
          name: next.name ?? "",
          email: next.email ?? "",
          company: next.company ?? "",
          role: "Chat — quick inquiry",
          sector: SECTOR_MAP[next.sector ?? ""] ?? "other",
          volume: "",
          message: next.message ?? "",
          website: "",
          consent: true,
        };
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error ?? "Submission failed");
        }
        setTyping(false);
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: "Thank you. Your message is on its way to Shenzhen. The Move East team will get back to you.",
          },
        ]);
        setPhase("sent");
      } catch (err) {
        setTyping(false);
        setErrorMsg(err instanceof Error ? err.message : "Submission failed");
        setPhase("error");
      } finally {
        setSubmitting(false);
      }
      setStepIdx(nextIdx);
      return;
    }

    setStepIdx(nextIdx);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const nx = steps[nextIdx];
      if (!nx) return;
      const text = typeof nx.bot === "function" ? nx.bot(next) : nx.bot;
      setMessages((m) => [...m, { role: "bot", text }]);
    }, 500);
  };

  const reset = () => {
    setStarted(false);
    setStepIdx(0);
    setAnswers({});
    setMessages([]);
    setTextValue("");
    setSelectedChip(null);
    setPhase("chat");
    setErrorMsg(null);
  };

  return (
    <div className={`${styles.launcher} ${open ? styles.open : ""} ${started ? styles.chat : ""}`} aria-label="Contact chat">
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
              Shenzhen · GMT+8
            </span>
          </div>
          {started && (
            <button type="button" className={styles.resetBtn} onClick={reset} aria-label="Restart chat">
              Restart
            </button>
          )}
        </header>

        <div className={styles.log} ref={logRef} aria-live="polite">
          {!started ? (
            <>
              <div className={styles.bubble}>
                Hi 👋 — looking to source or manufacture in China? Tell us what you need.
              </div>
              <div className={styles.bubble}>
                We handle procurement, factory audits, quality control and logistics across
                healthcare, energy, railway and industrial sectors.
              </div>
            </>
          ) : (
            <>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`${styles.bubble} ${m.role === "user" ? styles.userBubble : ""}`}
                >
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className={styles.typing} aria-hidden="true">
                  <i /><i /><i />
                </div>
              )}
            </>
          )}
        </div>

        {!started ? (
          <div className={styles.cta}>
            <button type="button" onClick={startChat} className={styles.startBtn}>
              Start chat
            </button>
            <a href={`mailto:${site.email}`} className={styles.primary}>
              Email us →
            </a>
          </div>
        ) : phase === "sent" ? (
          <div className={styles.cta}>
            <button type="button" onClick={reset} className={styles.startBtn}>
              New conversation
            </button>
            <a href={`mailto:${site.email}`} className={styles.primary}>
              Email us →
            </a>
          </div>
        ) : phase === "error" ? (
          <div className={styles.cta}>
            <span style={{ color: "#ef4444", fontSize: 12, padding: "0 4px", flex: 1 }}>
              {errorMsg ?? "Submission failed"}
            </span>
            <button type="button" onClick={reset} className={styles.primary}>
              Retry
            </button>
          </div>
        ) : currentStep?.input.kind === "chips" ? (
          <div className={styles.chips}>
            {currentStep.input.options.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`${styles.chip} ${selectedChip === opt ? styles.chipOn : ""}`}
                onClick={() => {
                  setSelectedChip(opt);
                  setTimeout(() => submitValue(opt), 120);
                }}
                disabled={submitting}
              >
                {opt}
              </button>
            ))}
          </div>
        ) : currentStep?.input.kind === "textarea" ? (
          <div className={styles.inline}>
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              className={styles.textarea}
              placeholder={currentStep.input.placeholder}
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  e.preventDefault();
                  const v = textValue.trim();
                  if (v) submitValue(v);
                }
              }}
              disabled={submitting}
              rows={2}
            />
            <button
              type="button"
              className={styles.sendBtn}
              onClick={() => {
                const v = textValue.trim();
                if (v) submitValue(v);
              }}
              disabled={submitting || !textValue.trim()}
              aria-label="Send"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 10L10 2" />
                <path d="M4 2h6v6" />
              </svg>
            </button>
          </div>
        ) : currentStep ? (
          <div className={styles.inline}>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={currentStep.input.kind}
              className={styles.input}
              placeholder={currentStep.input.placeholder}
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const v = textValue.trim();
                  if (v) submitValue(v);
                }
              }}
              disabled={submitting}
            />
            <button
              type="button"
              className={styles.sendBtn}
              onClick={() => {
                const v = textValue.trim();
                if (v) submitValue(v);
              }}
              disabled={submitting || !textValue.trim()}
              aria-label="Send"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 10L10 2" />
                <path d="M4 2h6v6" />
              </svg>
            </button>
          </div>
        ) : null}
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
