"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactPage.module.css";

type StepKey =
  | "name"
  | "email"
  | "company"
  | "country"
  | "sector"
  | "request"
  | "budget"
  | "timeline"
  | "message";

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
  { key: "name", bot: "Hi. Thanks for reaching out to Move East Trading. What is your full name?", input: { kind: "text", placeholder: "Jane Doe" } },
  { key: "email", bot: (a) => `Nice to meet you, ${(a.name ?? "").split(" ")[0]}. What email should we reply to?`, input: { kind: "email", placeholder: "name@company.com" } },
  { key: "company", bot: "Which company or organisation are you writing from?", input: { kind: "text", placeholder: "ACME Infrastructure Ltd." } },
  { key: "country", bot: "Where is your organisation based, or where will the procurement be delivered?", input: { kind: "text", placeholder: "Italy, Ethiopia, Germany, Kenya, UAE…" } },
  { key: "sector", bot: "Which sector is closest to your request?", input: { kind: "chips", options: ["Railway & Mobility", "Renewable Energy & Storage", "Medical Devices & Healthcare", "Industrial Machinery & Smart Devices", "Government & Infrastructure", "Other"] } },
  { key: "request", bot: "What type of request is this?", input: { kind: "chips", options: ["Strategic Sourcing & Procurement", "Technology Transfer & Project Integration", "Supply Chain Management", "Consultation / exploratory call", "Media or partnership inquiry"] } },
  { key: "budget", bot: "Estimated budget? (Optional — helps us route your request.)", input: { kind: "chips", options: ["Under $50,000", "$50,000–$250,000", "$250,000–$1,000,000", "$1,000,000–$10,000,000", "Over $10,000,000", "Prefer not to say"] } },
  { key: "timeline", bot: "Timeline?", input: { kind: "chips", options: ["Within 30 days", "1–3 months", "3–6 months", "6–12 months", "Over 12 months", "Exploratory — no fixed timeline"] } },
  { key: "message", bot: "Last one — describe the project, the products or systems involved, and any specific technical or compliance requirements.", input: { kind: "textarea", placeholder: "The more specific you are, the faster we can route your request to the right person on the team." } },
];

type Msg = { role: "bot" | "user"; text: string; time: string };

const SECTOR_MAP: Record<string, string> = {
  "Railway & Mobility": "mobility",
  "Renewable Energy & Storage": "renewable-energy",
  "Medical Devices & Healthcare": "medical-devices",
  "Industrial Machinery & Smart Devices": "industrial-machinery",
  "Government & Infrastructure": "other",
  "Other": "other",
};
const VOLUME_MAP: Record<string, string> = {
  "Under $50,000": "small",
  "$50,000–$250,000": "small",
  "$250,000–$1,000,000": "medium",
  "$1,000,000–$10,000,000": "large",
  "Over $10,000,000": "enterprise",
};

const now = () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

export function ContactChat() {
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [messages, setMessages] = useState<Msg[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [textValue, setTextValue] = useState("");
  const [phase, setPhase] = useState<"chat" | "summary" | "sent">("chat");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const currentStep = steps[stepIdx];

  const scrollLog = () => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  // emit initial bot message
  useEffect(() => {
    setShowTyping(true);
    const t = setTimeout(() => {
      setShowTyping(false);
      const first = steps[0];
      if (first) {
        const text = typeof first.bot === "function" ? first.bot({}) : first.bot;
        setMessages([{ role: "bot", text, time: now() }]);
      }
    }, 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollLog();
  }, [messages, showTyping]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 60);
  }, [stepIdx]);

  const submitValue = (value: string) => {
    if (!currentStep) return;
    setAnswers((prev) => ({ ...prev, [currentStep.key]: value }));
    setMessages((prev) => [...prev, { role: "user", text: value, time: now() }]);
    setSelectedChip(null);
    setTextValue("");

    const nextIdx = stepIdx + 1;
    if (nextIdx >= steps.length) {
      // show summary
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text:
              "Thank you. Here is what we have. Hit Send to Shenzhen and a member of the Move East team will get back to you. By submitting you consent to Move East Trading Co., Ltd. processing this information to respond to your request under EU GDPR.",
            time: now(),
          },
        ]);
        setPhase("summary");
      }, 700);
      setStepIdx(nextIdx);
      return;
    }

    setStepIdx(nextIdx);
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      const next = steps[nextIdx];
      if (!next) return;
      const text = typeof next.bot === "function" ? next.bot({ ...answers, [currentStep.key]: value }) : next.bot;
      setMessages((prev) => [...prev, { role: "bot", text, time: now() }]);
    }, 700);
  };

  const reset = () => {
    setAnswers({});
    setMessages([]);
    setStepIdx(0);
    setSelectedChip(null);
    setTextValue("");
    setPhase("chat");
    setSubmitError(null);
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      const first = steps[0];
      if (first) {
        const text = typeof first.bot === "function" ? first.bot({}) : first.bot;
        setMessages([{ role: "bot", text, time: now() }]);
      }
    }, 400);
  };

  const sendToBackend = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const payload = {
        name: answers.name ?? "",
        email: answers.email ?? "",
        company: answers.company ?? "",
        role: answers.request ?? "",
        sector: SECTOR_MAP[answers.sector ?? ""] ?? "other",
        volume: VOLUME_MAP[answers.budget ?? ""] ?? "",
        message: [
          `Country: ${answers.country ?? "—"}`,
          `Request type: ${answers.request ?? "—"}`,
          `Budget: ${answers.budget ?? "—"}`,
          `Timeline: ${answers.timeline ?? "—"}`,
          "",
          answers.message ?? "",
        ].join("\n"),
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
      setMessages((prev) => [...prev, { role: "user", text: "Message sent.", time: now() }]);
      setPhase("sent");
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text:
              "Thank you. Your message is on its way to Shenzhen. A member of the Move East team will get back to you. If urgent, email info@moveasttrading.com with subject line Urgent.",
            time: now(),
          },
        ]);
      }, 500);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const renderInputArea = () => {
    if (phase === "summary") {
      return (
        <>
          <dl className={styles.summary}>
            {[
              ["Full name", answers.name],
              ["Email", answers.email],
              ["Company or organisation", answers.company],
              ["Country or region", answers.country],
              ["Sector", answers.sector],
              ["Type of request", answers.request],
              ["Estimated budget", answers.budget],
              ["Timeline", answers.timeline],
              ["Message", answers.message],
            ].map(([k, v]) => (
              <div key={k as string} className={styles.summaryRow}>
                <dt>{k}</dt>
                <dd>{v || "—"}</dd>
              </div>
            ))}
          </dl>
          {submitError ? (
            <p style={{ color: "#ff8080", fontSize: 12, margin: "4px 4px 0" }}>{submitError}</p>
          ) : null}
          <div className={styles.finalActions}>
            <button type="button" className={styles.actionSend} onClick={sendToBackend} disabled={submitting}>
              {submitting ? "Sending…" : "Send to Shenzhen"}
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M1 9L9 1" />
                <path d="M3 1h6v6" />
              </svg>
            </button>
            <a className={styles.actionCall} href="mailto:info@moveasttrading.com">
              Email directly
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <rect x="2" y="3" width="8" height="7" rx="1" />
                <path d="M2 5h8M5 1v3M7 1v3" />
              </svg>
            </a>
          </div>
        </>
      );
    }

    if (phase === "sent" || !currentStep) return null;

    const s = currentStep;
    if (s.input.kind === "chips") {
      return (
        <div className={styles.chips}>
          {s.input.options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`${styles.chip} ${selectedChip === opt ? styles.on : ""}`}
              onClick={() => {
                setSelectedChip(opt);
                setTimeout(() => submitValue(opt), 120);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }
    if (s.input.kind === "textarea") {
      return (
        <div className={styles.inline}>
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            placeholder={s.input.placeholder}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                const v = textValue.trim();
                if (v) submitValue(v);
              }
            }}
          />
          <button
            type="button"
            className={styles.send}
            onClick={() => {
              const v = textValue.trim();
              if (v) submitValue(v);
            }}
          >
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 9L9 1" />
              <path d="M3 1h6v6" />
            </svg>
            Send
          </button>
        </div>
      );
    }
    return (
      <div className={styles.inline}>
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={s.input.kind}
          placeholder={s.input.placeholder}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const v = textValue.trim();
              if (v) submitValue(v);
            }
          }}
        />
        <button
          type="button"
          className={styles.send}
          onClick={() => {
            const v = textValue.trim();
            if (v) submitValue(v);
          }}
        >
          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 9L9 1" />
            <path d="M3 1h6v6" />
          </svg>
          Send
        </button>
      </div>
    );
  };

  return (
    <aside className={styles.chat} aria-label="Contact chat">
      <header className={styles.chatHead}>
        <div className={styles.chatHeadLeft}>
          <span className={styles.avatar} aria-hidden="true">M</span>
          <div className={styles.user}>
            <b>Move East Trading</b>
            <span>
              <span className={styles.dotLive} aria-hidden="true" />
              Shenzhen · GMT+8
            </span>
          </div>
        </div>
        <button type="button" className={styles.reset} onClick={reset} aria-label="Restart chat">
          Restart
        </button>
      </header>

      <div className={styles.log} ref={logRef} aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`${styles.msg} ${m.role === "bot" ? styles.bot : styles.userMsg}`}>
            <div className={styles.bubble}>{m.text}</div>
            <div className={styles.meta}>{m.role === "bot" ? `MoveEast · ${m.time}` : m.time}</div>
          </div>
        ))}
        {showTyping ? (
          <div className={styles.typing} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        ) : null}
      </div>

      <div className={styles.inputArea} aria-live="polite">
        {renderInputArea()}
      </div>
    </aside>
  );
}
