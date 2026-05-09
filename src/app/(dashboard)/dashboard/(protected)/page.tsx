import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import styles from "./overview.module.css";

async function getStats() {
  try {
    const payload = await getPayloadClient();
    const [articles, drafts, leads] = await Promise.all([
      payload.count({ collection: "articles", where: { status: { equals: "published" } } }),
      payload.count({ collection: "articles", where: { status: { equals: "draft" } } }),
      payload.count({ collection: "leads" }),
    ]);
    return {
      articlesPublished: articles.totalDocs,
      articlesDrafts: drafts.totalDocs,
      leadsTotal: leads.totalDocs,
    };
  } catch {
    return { articlesPublished: 0, articlesDrafts: 0, leadsTotal: 0 };
  }
}

async function getRecentArticles() {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      limit: 5,
      sort: "-updatedAt",
      depth: 0,
    });
    return docs.map((d) => ({
      id: String(d.id),
      slug: String(d.slug ?? ""),
      title: String(d.title ?? ""),
      status: String(d.status ?? "draft"),
      updatedAt: d.updatedAt ? String(d.updatedAt) : null,
    }));
  } catch {
    return [];
  }
}

export default async function DashboardOverview() {
  const [stats, recentArticles] = await Promise.all([
    getStats(),
    getRecentArticles(),
  ]);

  return (
    <div className={styles.overview}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Welcome back.</h2>
        <p className={styles.subheading}>
          Quick snapshot of content and pipeline state.
        </p>
      </div>

      <div className={styles.kpiGrid}>
        <KpiCard
          label="Published articles"
          value={stats.articlesPublished}
          href="/dashboard/articles"
        />
        <KpiCard
          label="Drafts"
          value={stats.articlesDrafts}
          href="/dashboard/articles"
        />
        <KpiCard
          label="Leads (total)"
          value={stats.leadsTotal}
          href="/admin/collections/leads"
          external
        />
        <KpiCard
          label="Quick action"
          value="Generate"
          href="/dashboard/generate"
          highlight
        />
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h3 className={styles.sectionTitle}>Recent articles</h3>
          <Link href="/dashboard/articles" className={styles.sectionLink}>
            View all →
          </Link>
        </div>
        {recentArticles.length === 0 ? (
          <div className={styles.empty}>
            No articles yet. <Link href="/dashboard/generate">Generate your first article</Link>.
          </div>
        ) : (
          <ul className={styles.articleList}>
            {recentArticles.map((a) => (
              <li key={a.id} className={styles.articleItem}>
                <div className={styles.articleMain}>
                  <span
                    className={`${styles.statusPill} ${
                      a.status === "published" ? styles.published : styles.draft
                    }`}
                  >
                    {a.status}
                  </span>
                  <Link
                    href={`/dashboard/articles/${a.id}`}
                    className={styles.articleTitle}
                  >
                    {a.title}
                  </Link>
                </div>
                <span className={styles.articleDate}>
                  {a.updatedAt
                    ? new Date(a.updatedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h3 className={styles.sectionTitle}>Quick links</h3>
        </div>
        <div className={styles.quickLinks}>
          <QuickLink
            href="/dashboard/generate"
            title="Generate a new article"
            desc="Paste raw notes or a brief — AI creates a structured, SEO-ready post."
          />
          <QuickLink
            href="/admin/collections/articles"
            title="Edit articles in Payload"
            desc="Full CMS editor with versions, drafts, scheduled publishing."
          />
          <QuickLink
            href="/dashboard/seo"
            title="SEO performance"
            desc="Keyword tracking, position trends, indexing status. (coming soon)"
          />
        </div>
      </section>
    </div>
  );
}

function KpiCard({
  label,
  value,
  href,
  external,
  highlight,
}: {
  label: string;
  value: string | number;
  href: string;
  external?: boolean;
  highlight?: boolean;
}) {
  const content = (
    <div className={`${styles.kpi} ${highlight ? styles.kpiHighlight : ""}`}>
      <span className={styles.kpiLabel}>{label}</span>
      <span className={styles.kpiValue}>{value}</span>
    </div>
  );
  if (external) {
    return (
      <a href={href} className={styles.kpiLink}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={styles.kpiLink}>
      {content}
    </Link>
  );
}

function QuickLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link href={href} className={styles.quickLink}>
      <span className={styles.quickLinkTitle}>{title}</span>
      <span className={styles.quickLinkDesc}>{desc}</span>
    </Link>
  );
}
