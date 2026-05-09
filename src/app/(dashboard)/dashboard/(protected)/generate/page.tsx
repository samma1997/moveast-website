import { ArticleGeneratorForm } from "@/components/dashboard/generate/ArticleGeneratorForm";
import styles from "./generate.module.css";

export const metadata = {
  title: "Generate Article",
};

export default function GeneratePage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Generate a new article</h2>
        <p className={styles.subheading}>
          Paste a brief, raw notes, transcripts, or competitive insights —
          Claude will produce a structured, SEO-ready article. The output
          aligns with Move East&apos;s editorial voice (institutional, no personal
          mentions, fact-based).
        </p>
      </div>
      <ArticleGeneratorForm />
    </div>
  );
}
