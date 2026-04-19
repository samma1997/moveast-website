"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const SECTORS = [
  "Railway & Mobility",
  "Renewable Energy & Storage",
  "Medical Devices & Healthcare",
  "Industrial Machinery & Smart Devices",
  "Government & Infrastructure",
  "Other — please specify in the message",
];

const REQUEST_TYPES = [
  "Strategic Sourcing & Procurement",
  "Technology Transfer & Project Integration",
  "Supply Chain Management",
  "Consultation / exploratory call",
  "Media or partnership inquiry",
];

const BUDGETS = [
  "Under $50,000",
  "$50,000 – $250,000",
  "$250,000 – $1,000,000",
  "$1,000,000 – $10,000,000",
  "Over $10,000,000",
  "Prefer not to say",
];

const TIMELINES = [
  "Within 30 days",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "Over 12 months",
  "Exploratory — no fixed timeline",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      payload[key] = value.toString();
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok && res.status !== 501) {
        throw new Error("Submission failed");
      }
      setSubmitted(true);
      form.reset();
    } catch {
      const subject = encodeURIComponent(
        `New inquiry from ${payload.name || "website"}`
      );
      const lines = Object.entries(payload)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      const body = encodeURIComponent(lines);
      window.location.href = `mailto:info@moveasttrading.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 lg:p-10">
        <div className="w-12 h-12 rounded-full bg-[var(--brand)]/10 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-[var(--brand)]" />
        </div>
        <h3 className="mt-6 font-[family-name:var(--font-heading)] text-[1.5rem] font-semibold text-[var(--text)]">
          Thank you. Your message is on its way to Shenzhen.
        </h3>
        <p className="mt-4 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
          A member of the Move East team will reply within 24 to 48 working hours. If your request is time-sensitive, you can also write directly to{" "}
          <a
            href="mailto:info@moveasttrading.com"
            className="text-[var(--brand)] hover:underline"
          >
            info@moveasttrading.com
          </a>{" "}
          or reach Alessandro Petrini on{" "}
          <a
            href="https://www.linkedin.com/in/alessandropetrini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand)] hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 lg:p-10 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Full name"
          name="name"
          required
          placeholder="Jane Doe"
          helper="Who should we address the reply to?"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="name@company.com"
          helper="We will reply within 24 to 48 working hours."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Company or organisation"
          name="company"
          placeholder="ACME Infrastructure Ltd."
          helper="Legal entity or project name. Optional."
        />
        <Field
          label="Country or region"
          name="country"
          placeholder="Italy, Ethiopia, Germany, Kenya, UAE…"
          helper="Where is your organisation based, or where will the procurement be delivered?"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select label="Sector" name="sector" required options={SECTORS} />
        <Select
          label="Type of request"
          name="request_type"
          required
          options={REQUEST_TYPES}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select label="Estimated budget" name="budget" options={BUDGETS} />
        <Select label="Timeline" name="timeline" options={TIMELINES} />
      </div>

      <div>
        <label className="block text-[0.8125rem] font-medium text-[var(--text)] mb-2">
          Your message <span className="text-[var(--brand)]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe the project, the products or systems involved, and any specific technical or compliance requirements."
          className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[0.9375rem] text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--brand)] transition-colors resize-none"
        />
        <p className="mt-2 text-[0.75rem] text-[var(--text-secondary)]">
          The more specific you are, the faster we can route your request to the right person on the team.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 py-3 text-[0.875rem] font-semibold bg-[var(--text)] text-[var(--bg)] rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending…" : "Send to Shenzhen"}
          <Send className="w-3.5 h-3.5" />
        </button>
        <p className="mt-5 text-[0.75rem] text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          By submitting this form you consent to Move East Trading Co., Ltd. processing the information provided in order to respond to your request. Data is stored securely, is never sold, and is handled in line with EU GDPR requirements. You can request access, correction, or deletion of your data at any time by writing to info@moveasttrading.com.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  helper,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  helper?: string;
}) {
  return (
    <div>
      <label className="block text-[0.8125rem] font-medium text-[var(--text)] mb-2">
        {label} {required && <span className="text-[var(--brand)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[0.9375rem] text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--brand)] transition-colors"
      />
      {helper && (
        <p className="mt-2 text-[0.75rem] text-[var(--text-secondary)]">{helper}</p>
      )}
    </div>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[0.8125rem] font-medium text-[var(--text)] mb-2">
        {label} {required && <span className="text-[var(--brand)]">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[0.9375rem] text-[var(--text)] focus:outline-none focus:border-[var(--brand)] transition-colors appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
