import Link from "next/link";
import styles from "./placeholder.module.css";

export const metadata = { title: "SEO" };

export default function SeoPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <span className={styles.eyebrow}>Phase 2 · Coming soon</span>
        <h2 className={styles.heading}>SEO Dashboard</h2>
        <p className={styles.lede}>
          Live keyword tracking, indexing status, and position trends will live
          here. Powered by Google Search Console + a curated{" "}
          <code>KeywordTargets</code> collection in Payload.
        </p>
        <ul className={styles.list}>
          <li>KPI: clicks 7/30d, impressions, top-10 count, avg position</li>
          <li>Keyword target table with action suggestions (write / quick win / push)</li>
          <li>Discovered keywords (queries Google shows but we don&apos;t target)</li>
          <li>Pages not indexed (URL Inspection API)</li>
          <li>Trend chart 30d (Recharts area)</li>
        </ul>
        <p className={styles.lede}>
          Setup required: Google Cloud service account with Search Console
          access + verified property for <strong>moveasttrading.com</strong>.
        </p>
        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.btnSecondary}>
            ← Back to Overview
          </Link>
          <Link href="/dashboard/generate" className={styles.btnPrimary}>
            Generate an article
          </Link>
        </div>
      </div>
    </div>
  );
}
