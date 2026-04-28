import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sectors, getSector } from "@/content/sectors";
import { sectorPages } from "@/content/sector-pages";
import { site } from "@/content/site";
import { SectorHero } from "@/components/sectors/SectorHero";
import { SectorPartners } from "@/components/sectors/SectorPartners";
import {
  ServiceBlogRelated,
  type RelatedArticle,
} from "@/components/services/ServiceBlogRelated";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getPayloadClient } from "@/lib/payload";

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) return {};
  return {
    title: s.seo.title,
    description: s.seo.description,
    alternates: { canonical: `/sectors/${s.slug}` },
    keywords: [...s.seo.keywords],
    openGraph: {
      title: s.seo.title,
      description: s.seo.description,
      url: `${site.url}/sectors/${s.slug}`,
      type: "website",
    },
  };
}

async function getRelatedArticles(sectorSlug: string, keywords: readonly string[]): Promise<RelatedArticle[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: {
        and: [
          { status: { equals: "published" } },
          {
            or: [
              { keywords: { in: [...keywords, sectorSlug] } },
              { primaryKeyword: { in: [...keywords] } },
            ],
          },
        ],
      },
      limit: 4,
      sort: "-publishedAt",
      depth: 0,
    });
    return docs.map((d) => ({
      slug: String(d.slug),
      title: String(d.title ?? ""),
      excerpt: String(d.excerpt ?? ""),
      primaryKeyword: typeof d.primaryKeyword === "string" ? d.primaryKeyword : undefined,
      publishedLabel: d.publishedAt
        ? new Date(String(d.publishedAt)).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : undefined,
    }));
  } catch {
    return [];
  }
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSector(slug);
  const page = sectorPages[slug];
  if (!s || !page) notFound();

  const related = await getRelatedArticles(slug, s.seo.keywords);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: `${site.url}/sectors/${s.slug}`,
            name: s.seo.title,
            description: s.seo.description,
            isPartOf: { "@id": `${site.url}/#website` },
            about: { "@type": "Thing", name: s.title },
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sectors", url: "/sectors" },
            { name: s.shortLabel, url: `/sectors/${s.slug}` },
          ]),
        ]}
      />

      <SectorHero hero={page.hero} slug={s.slug} />
      <SectorPartners partners={page.partners} />
      <ServiceBlogRelated
        eyebrow="From the blog"
        titlePre="How Move East sources "
        titleEm={s.shortLabel.toLowerCase()}
        titlePost=" from China."
        lede={`Product scope, certification, and process — sourcing ${s.shortLabel.toLowerCase()} from Shenzhen.`}
        ctaLabel="All articles"
        articles={related}
      />
    </>
  );
}
