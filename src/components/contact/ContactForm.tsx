"use client";

import { useState } from "react";
import { sectors } from "@/content/sectors";
import { ArrowUpRight } from "@/components/ui/ArrowIcon";
import styles from "./ContactForm.module.css";

type FieldErrors = Partial<Record<string, string[]>>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setGlobalError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      role: String(fd.get("role") ?? ""),
      sector: String(fd.get("sector") ?? ""),
      volume: String(fd.get("volume") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      consent: fd.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (res.status === 400 && data.issues) {
        setErrors(data.issues as FieldErrors);
      } else if (res.status === 429) {
        setGlobalError("Too many submissions. Please try again later.");
      } else {
        setGlobalError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setGlobalError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className={styles.success}>
        <h3>Message <em>received.</em></h3>
        <p>
          Thank you. Our team in Shenzhen has received your request and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {globalError && <div className={styles.globalError}>{globalError}</div>}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-name" className={`${styles.label} ${styles.required}`}>Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={styles.input}
            disabled={submitting}
          />
          {errors.name && <span className={styles.error}>{errors.name[0]}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="cf-email" className={`${styles.label} ${styles.required}`}>Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={styles.input}
            disabled={submitting}
          />
          {errors.email && <span className={styles.error}>{errors.email[0]}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-company" className={styles.label}>Company</label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={styles.input}
            disabled={submitting}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-role" className={styles.label}>Role</label>
          <input
            id="cf-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            className={styles.input}
            disabled={submitting}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-sector" className={styles.label}>Sector of interest</label>
          <select id="cf-sector" name="sector" className={styles.select} disabled={submitting} defaultValue="">
            <option value="">Select…</option>
            {sectors.map((s) => (
              <option key={s.slug} value={s.slug}>{s.shortLabel}</option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-volume" className={styles.label}>Estimated volume</label>
          <select id="cf-volume" name="volume" className={styles.select} disabled={submitting} defaultValue="">
            <option value="">Select…</option>
            <option value="small">&lt; $50k</option>
            <option value="medium">$50k – $500k</option>
            <option value="large">$500k – $5M</option>
            <option value="enterprise">&gt; $5M</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={`${styles.label} ${styles.required}`}>Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={20}
          maxLength={4000}
          className={styles.textarea}
          disabled={submitting}
          placeholder="Tell us about your project — target market, technical specs, timeline."
        />
        {errors.message && <span className={styles.error}>{errors.message[0]}</span>}
      </div>

      {/* Honeypot */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          If you&apos;re a human leave this blank:
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required disabled={submitting} />
        <span>
          I consent to Move East Trading processing my data to reply to this inquiry, as described in the{" "}
          <a href="/privacy">Privacy Policy</a>. No marketing emails without explicit opt-in.
        </span>
      </label>
      {errors.consent && <span className={styles.error}>{errors.consent[0]}</span>}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
          <span className={styles.arrow} aria-hidden="true"><ArrowUpRight /></span>
        </button>
        <span className={styles.help}>Routed directly to the Shenzhen team</span>
      </div>
    </form>
  );
}
