import type { Metadata } from "next";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getPayloadClient } from "@/lib/payload";
import { BlogHub, type BlogArticle } from "@/components/blog/BlogHub";

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

const VARIANTS: readonly ("c2" | "c3" | "c4" | undefined)[] = [undefined, "c2", "c3", "c4"];

function inferCategory(primary?: string): string {
  const p = (primary ?? "").toLowerCase();
  if (p.includes("case") || p.includes("edr") || p.includes("railway")) return "Case Studies";
  if (p.includes("data") || p.includes("report")) return "Data Reports";
  if (p.includes("compliance") || p.includes("mdr") || p.includes("ce ")) return "Policy & Compliance";
  if (p.includes("africa") || p.includes("corridor")) return "China-Africa";
  return "Sourcing Guides";
}

function extractCoverUrl(cover: unknown): { url?: string; alt?: string } {
  if (!cover || typeof cover !== "object") return {};
  const c = cover as { url?: unknown; sizes?: { card?: { url?: unknown } }; alt?: unknown };
  const cardUrl = c.sizes?.card && typeof c.sizes.card.url === "string" ? c.sizes.card.url : undefined;
  const mainUrl = typeof c.url === "string" ? c.url : undefined;
  const alt = typeof c.alt === "string" ? c.alt : undefined;
  return { url: cardUrl ?? mainUrl, alt };
}

async function getArticles(): Promise<BlogArticle[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: { status: { equals: "published" } },
      limit: 30,
      sort: "-publishedAt",
      depth: 1,
    });
    return docs.map((d, i): BlogArticle => {
      const category = inferCategory(typeof d.primaryKeyword === "string" ? d.primaryKeyword : undefined);
      const publishedAt = d.publishedAt ? new Date(String(d.publishedAt)) : null;
      const cov = extractCoverUrl(d.cover);
      return {
        slug: String(d.slug),
        title: String(d.title ?? ""),
        tag: typeof d.primaryKeyword === "string" && d.primaryKeyword.length > 0
          ? `${category} · ${d.primaryKeyword}`
          : category,
        date: publishedAt
          ? publishedAt.toLocaleDateString("en-US", { month: "short", year: "numeric" })
          : "",
        readingTime: typeof d.readingTime === "number" ? d.readingTime : undefined,
        category,
        variant: VARIANTS[i % VARIANTS.length],
        coverUrl: cov.url,
        coverAlt: cov.alt,
      };
    });
  } catch {
    return [];
  }
}

export default async function BlogHubPage() {
  const articles = await getArticles();

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
            })),
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
        ]}
      />

      <BlogHub articles={articles} />
    </>
  );
}
