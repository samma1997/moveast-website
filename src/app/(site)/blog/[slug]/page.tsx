import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { site } from "@/content/site";
import { getPayloadClient } from "@/lib/payload";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo/schema";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import styles from "@/components/blog/BlogPost.module.css";
import hubStyles from "@/components/blog/BlogHub.module.css";

export const revalidate = 600;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: { status: { equals: "published" } },
      limit: 200,
      depth: 0,
    });
    return docs
      .filter((d) => typeof d.slug === "string" && d.slug)
      .map((d) => ({ slug: String(d.slug) }));
  } catch {
    return [];
  }
}

async function getArticle(slug: string) {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: "published" } },
        ],
      },
      limit: 1,
      depth: 1,
    });
    return docs[0] ?? null;
  } catch {
    return null;
  }
}

async function getRelated(currentSlug: string, keywords: readonly string[]) {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: {
        and: [
          { status: { equals: "published" } },
          { slug: { not_equals: currentSlug } },
          keywords.length > 0
            ? { keywords: { in: [...keywords] } }
            : { status: { equals: "published" } },
        ],
      },
      limit: 3,
      sort: "-publishedAt",
      depth: 0,
    });
    return docs.map((d) => ({
      slug: String(d.slug),
      title: String(d.title ?? ""),
      primaryKeyword: typeof d.primaryKeyword === "string" ? d.primaryKeyword : undefined,
      date: d.publishedAt
        ? new Date(String(d.publishedAt)).toLocaleDateString("en-US", { month: "short", year: "numeric" })
        : "",
      readingTime: typeof d.readingTime === "number" ? d.readingTime : undefined,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return {};
  const title = (typeof a.seoTitle === "string" && a.seoTitle) || String(a.title);
  const description = (typeof a.seoDescription === "string" && a.seoDescription) || String(a.excerpt ?? "");
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    keywords: Array.isArray(a.keywords) ? (a.keywords as string[]) : undefined,
    robots: a.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: `${site.url}/blog/${slug}`,
      type: "article",
      publishedTime: a.publishedAt ? String(a.publishedAt) : undefined,
    },
  };
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

function extractHeadings(body: SerializedEditorState | null): { text: string; slug: string }[] {
  if (!body) return [];
  const out: { text: string; slug: string }[] = [];
  const walk = (node: { type?: string; tag?: string; children?: unknown[]; text?: string }): string => {
    if (typeof node.text === "string") return node.text;
    if (!Array.isArray(node.children)) return "";
    return node.children
      .map((c) => walk(c as typeof node))
      .join("");
  };
  const root = body.root as { children?: unknown[] };
  if (!Array.isArray(root.children)) return [];
  for (const child of root.children) {
    const n = child as { type?: string; tag?: string; children?: unknown[] };
    if (n.type === "heading" && n.tag === "h2") {
      const text = walk(n).trim();
      if (text) out.push({ text, slug: slugify(text) });
    }
  }
  return out;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) notFound();

  const faqs = Array.isArray(a.faqs)
    ? (a.faqs as { question: string; answer: string }[]).filter((f) => f.question && f.answer)
    : [];

  const bodyData = a.body as SerializedEditorState | null;
  const headings = extractHeadings(bodyData);
  const headingSlugs = headings.map((h) => h.slug);

  const related = await getRelated(
    slug,
    Array.isArray(a.keywords) ? (a.keywords as string[]) : []
  );

  const eyebrowText = typeof a.primaryKeyword === "string" && a.primaryKeyword.length > 0
    ? `${a.primaryKeyword} · Move East Trading${
        a.publishedAt
          ? ` · Updated ${new Date(String(a.publishedAt)).toLocaleDateString("en-US", { month: "long", year: "numeric" })}`
          : ""
      }`
    : "Insights · Move East Trading";

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: String(a.title),
            description: String(a.excerpt ?? ""),
            datePublished: a.publishedAt ? String(a.publishedAt) : undefined,
            dateModified: a.updatedAt ? String(a.updatedAt) : undefined,
            author: { "@id": `${site.url}/#organization` },
            publisher: { "@id": `${site.url}/#organization` },
            mainEntityOfPage: `${site.url}/blog/${slug}`,
            url: `${site.url}/blog/${slug}`,
            keywords: Array.isArray(a.keywords) ? (a.keywords as string[]).join(", ") : undefined,
          },
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: String(a.title), url: `/blog/${slug}` },
          ]),
        ].filter(Boolean)}
      />

      {/* BACK LINK */}
      <section className={styles.backSec}>
        <div className={styles.container}>
          <Link className={styles.back} href="/blog">
            Back to blog
            <span className={styles.backArrow} aria-hidden="true">
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M2 8L8 2" />
                <path d="M3 2h5v5" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ARTICLE HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.eyebrow}>
                <span className={styles.dot} aria-hidden="true" />
                <span>{eyebrowText}</span>
              </div>
              <h1 className={styles.title}>{String(a.title)}</h1>
              <div className={styles.author}>
                <span className={styles.authorAvatar} aria-hidden="true" />
                <div className={styles.authorMeta}>
                  <b>Alessandro Petrini</b>
                  <span>Founder &amp; Director · Move East Trading · Board Member, CICC</span>
                </div>
              </div>
            </div>
            <div className={styles.heroMedia} aria-hidden="true">
              {(() => {
                const cov = a.cover as { url?: string; sizes?: { hero?: { url?: string }; og?: { url?: string } } } | null;
                const url = cov?.sizes?.hero?.url ?? cov?.sizes?.og?.url ?? cov?.url;
                if (url) {
                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={url}
                      alt=""
                      loading="eager"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  );
                }
                return <div className="ph" />;
              })()}
              {a.primaryKeyword ? (
                <span className={styles.heroMediaTag}>{String(a.primaryKeyword)}</span>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className={styles.bodySec}>
        <div className={styles.container}>
          <div className={styles.bodyGrid}>
            {headings.length > 0 ? (
              <aside className={styles.toc} aria-label="In this article">
                <h2 className={styles.tocTitle}>In this article</h2>
                <ul className={styles.tocList}>
                  {headings.map((h, i) => (
                    <li key={h.slug}>
                      <a href={`#${h.slug}`}>
                        <span>
                          <span className={styles.tocNum}>{String(i + 1).padStart(2, "0")}</span>
                          {h.text}
                        </span>
                        <span className={styles.tocArrow} aria-hidden="true">
                          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                            <path d="M2 8L8 2" />
                            <path d="M3 2h5v5" />
                          </svg>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}

            <article className={styles.content}>
              {typeof a.excerpt === "string" && a.excerpt ? (
                <p className={styles.lede}>{a.excerpt}</p>
              ) : null}
              {bodyData ? <BlogPostBody data={bodyData} headingSlugs={headingSlugs} /> : null}
              {faqs.length > 0 ? (
                <>
                  <h2 id="faq">Frequently asked questions</h2>
                  {faqs.map((f, i) => (
                    <div key={i}>
                      <h3>{f.question}</h3>
                      <p>{f.answer}</p>
                    </div>
                  ))}
                </>
              ) : null}
            </article>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 ? (
        <section className={styles.relatedSec}>
          <div className={styles.container}>
            <div className={styles.relatedHead}>
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>Keep reading</span>
                </div>
                <h2 className={styles.relatedTitle}>
                  More <em>insights</em> from Shenzhen.
                </h2>
              </div>
              <Link href="/blog" className={styles.relatedAll}>
                All articles
                <span className="arrow" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 8L8 2" />
                    <path d="M3 2h5v5" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((r, i) => {
                const variant = (["c2", "c3", "c4"] as const)[i % 3]!;
                return (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className={hubStyles.card}>
                    <div className={`${hubStyles.media} ${hubStyles[variant]}`} aria-hidden="true">
                      <div className="ph" />
                    </div>
                    <div className={hubStyles.body}>
                      <span className={hubStyles.tag}>{r.primaryKeyword ?? "Insights"}</span>
                      <h3 className={hubStyles.cardTitle}>{r.title}</h3>
                      <div className={hubStyles.meta}>
                        <span>{r.date}</span>
                        {r.readingTime ? (
                          <>
                            <span className={hubStyles.metaDot} aria-hidden="true" />
                            <span>{r.readingTime} min read</span>
                          </>
                        ) : null}
                      </div>
                      <div className={hubStyles.foot}>
                        <span className={hubStyles.cta}>
                          Read article
                          <span className={hubStyles.ctaArrow} aria-hidden="true">
                            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                              <path d="M2 8L8 2" />
                              <path d="M3 2h5v5" />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
