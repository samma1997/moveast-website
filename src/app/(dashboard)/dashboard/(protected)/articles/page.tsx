import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import styles from "./articles.module.css";

export const metadata = {
  title: "Articles",
};

type ArticleRow = {
  id: string;
  slug: string;
  title: string;
  status: "draft" | "published";
  primaryKeyword?: string;
  readingTime?: number;
  updatedAt: string | null;
  publishedAt: string | null;
};

async function getArticles(): Promise<ArticleRow[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      limit: 100,
      sort: "-updatedAt",
      depth: 0,
    });
    return docs.map((d) => ({
      id: String(d.id),
      slug: String(d.slug ?? ""),
      title: String(d.title ?? "Untitled"),
      status: (d.status === "published" ? "published" : "draft") as
        | "draft"
        | "published",
      primaryKeyword:
        typeof d.primaryKeyword === "string" ? d.primaryKeyword : undefined,
      readingTime: typeof d.readingTime === "number" ? d.readingTime : undefined,
      updatedAt: d.updatedAt ? String(d.updatedAt) : null,
      publishedAt: d.publishedAt ? String(d.publishedAt) : null,
    }));
  } catch {
    return [];
  }
}

function fmt(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>Articles</h2>
          <p className={styles.subheading}>
            All articles in Payload — published and drafts. Use the AI generator
            for new pieces or open Payload to fine-tune.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/dashboard/generate" className={styles.btnPrimary}>
            + Generate article
          </Link>
          <a href="/admin/collections/articles" className={styles.btnSecondary}>
            Open in Payload
          </a>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className={styles.empty}>
          No articles yet. <Link href="/dashboard/generate">Generate the first one</Link>.
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Primary keyword</th>
                <th>Reading</th>
                <th>Last updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.id}>
                  <td className={styles.titleCell}>
                    <span className={styles.title}>{a.title}</span>
                    <span className={styles.slug}>/blog/{a.slug}</span>
                  </td>
                  <td>
                    <span
                      className={`${styles.pill} ${
                        a.status === "published"
                          ? styles.published
                          : styles.draft
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className={styles.kwCell}>
                    {a.primaryKeyword || <span className={styles.muted}>—</span>}
                  </td>
                  <td>
                    {a.readingTime ? `${a.readingTime} min` : "—"}
                  </td>
                  <td>{fmt(a.updatedAt)}</td>
                  <td className={styles.actionsCell}>
                    {a.status === "published" && (
                      <Link
                        href={`/blog/${a.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkAction}
                      >
                        View
                      </Link>
                    )}
                    <a
                      href={`/admin/collections/articles/${a.id}`}
                      className={styles.linkAction}
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
