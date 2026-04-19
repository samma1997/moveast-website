import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { site } from "@/content/site";
import { getPayloadClient } from "@/lib/payload";
import { Cta } from "@/components/ui/Cta";
import { PillBtn } from "@/components/ui/PillBtn";
import { FaqList } from "@/components/pages/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo/schema";
import styles from "@/components/blog/Blog.module.css";

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

function formatDate(iso: unknown) {
  if (!iso || typeof iso !== "string") return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) notFound();

  const faqs = Array.isArray(a.faqs)
    ? (a.faqs as { question: string; answer: string }[]).filter((f) => f.question && f.answer)
    : [];

  const bodyData = a.body as SerializedEditorState | null;

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

      <article>
        {/* HERO */}
        <header className={styles.articleHero}>
          <div className={styles.articleHeroInner}>
            <span className={styles.articleEyebrow}>
              <a href="/blog">Blog</a>
              {a.primaryKeyword ? <>· {String(a.primaryKeyword)}</> : null}
            </span>
            <h1 className={styles.articleTitle}>{String(a.title)}</h1>
            <p className={styles.articleExcerpt}>{String(a.excerpt ?? "")}</p>
            <div className={styles.articleMeta}>
              <span>{formatDate(a.publishedAt)}</span>
              {typeof a.readingTime === "number" ? <span>{a.readingTime} min read</span> : null}
            </div>
          </div>
        </header>

        {/* COVER */}
        <div className={styles.articleCover} aria-hidden="true">
          <div className="ph" />
        </div>

        {/* BODY */}
        <div className={styles.articleBody}>
          {bodyData ? <RichText data={bodyData} /> : null}
        </div>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className={styles.faqSection}>
            <h2 className={styles.faqSectionTitle}>Frequently <em>asked.</em></h2>
            <FaqList items={faqs} />
          </section>
        )}

        {/* CTA */}
        <section>
          <div className={styles.ctaBand}>
            <div>
              <h2>Ready to start <em>sourcing?</em></h2>
              <p style={{
                fontSize: 15,
                lineHeight: 1.55,
                color: "color-mix(in oklab, var(--bg) 80%, transparent)",
                margin: 0,
                maxWidth: "48ch",
              }}>
                If this article was relevant, our Shenzhen team can turn the insight into a concrete shortlist for your project.
              </p>
            </div>
            <div style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", justifySelf: "end" }}>
              <Cta href="/contact">Talk to our team</Cta>
              <PillBtn href="/blog">More articles</PillBtn>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
