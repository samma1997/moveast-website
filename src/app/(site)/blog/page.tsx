import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { PageHero } from "@/components/pages/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { ArrowUpRight } from "@/components/ui/ArrowIcon";
import { getPayloadClient } from "@/lib/payload";
import styles from "@/components/blog/Blog.module.css";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Blog",
  description: `Sourcing insights, China-Africa corridor analysis, and procurement guides from ${site.name} — written on the ground in Shenzhen.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${site.name}`,
    description:
      "Guides, case narratives, and field reports on China sourcing, technology transfer, and industrial supply chains.",
    url: `${site.url}/blog`,
    type: "website",
  },
};

type ArticlePreview = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string | null;
  readingTime?: number;
  primaryKeyword?: string;
};

async function getArticles(): Promise<ArticlePreview[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: { status: { equals: "published" } },
      limit: 30,
      sort: "-publishedAt",
      depth: 0,
    });
    return docs.map((d) => ({
      id: String(d.id),
      slug: String(d.slug),
      title: String(d.title ?? ""),
      excerpt: String(d.excerpt ?? ""),
      publishedAt: d.publishedAt ? String(d.publishedAt) : null,
      readingTime: typeof d.readingTime === "number" ? d.readingTime : undefined,
      primaryKeyword: typeof d.primaryKeyword === "string" ? d.primaryKeyword : undefined,
    }));
  } catch {
    return [];
  }
}

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default async function BlogHubPage() {
  const articles = await getArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            url: `${site.url}/blog`,
            name: `${site.name} Blog`,
            description: "Sourcing insights and procurement guides from Shenzhen.",
            publisher: { "@id": `${site.url}/#organization` },
            blogPost: articles.slice(0, 10).map((a) => ({
              "@type": "BlogPosting",
              url: `${site.url}/blog/${a.slug}`,
              headline: a.title,
              description: a.excerpt,
              datePublished: a.publishedAt ?? undefined,
            })),
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Insights"
        title={<>Sourcing insights, <em>from the ground.</em></>}
        lede="Guides, data reports, and field notes on China sourcing, technology transfer, and China-Africa industrial corridors. Written on the ground in Shenzhen."
      />

      <section className={styles.hub}>
        <div className={styles.hubInner}>
          {featured ? (
            <>
              <Link href={`/blog/${featured.slug}`} className={styles.featured}>
                <div className={styles.featMedia}>
                  <div className="ph" />
                  <span className={styles.featMediaTag}>Featured</span>
                </div>
                <div className={styles.featBody}>
                  <div>
                    <span className={styles.featMeta}>
                      {formatDate(featured.publishedAt)}
                      {featured.readingTime ? ` · ${featured.readingTime} min read` : ""}
                    </span>
                    <h2 className={styles.featTitle}>{featured.title}</h2>
                    <p className={styles.featExcerpt}>{featured.excerpt}</p>
                  </div>
                  <div className={styles.featFoot}>
                    <span className={styles.readMore}>
                      Read article
                      <span className="arrow" aria-hidden="true"><ArrowUpRight /></span>
                    </span>
                  </div>
                </div>
              </Link>

              {rest.length > 0 && (
                <div className={styles.grid}>
                  {rest.map((a) => (
                    <Link key={a.id} href={`/blog/${a.slug}`} className={styles.card}>
                      <div className={styles.cardMedia}>
                        <div className="ph" />
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.cardChip}>{formatDate(a.publishedAt)}</span>
                        <h3 className={styles.cardTitle}>{a.title}</h3>
                        <p className={styles.cardExcerpt}>{a.excerpt}</p>
                        <div className={styles.cardMeta}>
                          <span>{a.readingTime ? `${a.readingTime} min read` : ""}</span>
                          <span className={styles.cardArrow} aria-hidden="true"><ArrowUpRight /></span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className={styles.empty}>
              <h3>First articles coming soon.</h3>
              <p>
                Our Shenzhen team is working on a series of sourcing guides, case narratives, and China-Africa corridor reports.
                Subscribe by emailing <a href={`mailto:${site.email}`} style={{ color: "var(--accent)" }}>{site.email}</a>.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
