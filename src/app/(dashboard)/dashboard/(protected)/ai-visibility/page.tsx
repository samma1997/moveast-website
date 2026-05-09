import Link from "next/link";
import styles from "../seo/placeholder.module.css";

export const metadata = { title: "AI Visibility" };

export default function AiVisibilityPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <span className={styles.eyebrow}>Phase 3 · Coming soon</span>
        <h2 className={styles.heading}>AI Visibility tracker</h2>
        <p className={styles.lede}>
          Weekly run measuring how often Move East gets cited by Claude, GPT,
          and Perplexity for tracked B2B procurement queries — the AI search
          equivalent of GSC tracking.
        </p>
        <ul className={styles.list}>
          <li>Mention rate % across providers (Anthropic, OpenAI, Perplexity)</li>
          <li>Trend line: last 12 runs (8–12 weeks)</li>
          <li>Per-query expandable rows with response excerpt</li>
          <li>Cron weekly Monday 06:00 UTC, ~$3.5/month total</li>
        </ul>
        <p className={styles.lede}>
          Setup required: <code>OPENAI_API_KEY</code> +{" "}
          <code>PERPLEXITY_API_KEY</code> in Vercel env (Anthropic already
          configured for the article generator).
        </p>
        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.btnSecondary}>
            ← Back to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
