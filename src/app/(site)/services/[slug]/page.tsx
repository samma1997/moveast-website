import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/content/services";
import { servicePages } from "@/content/service-pages";
import { site } from "@/content/site";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceProcessTrack } from "@/components/services/ServiceProcessTrack";
import {
  ServiceBlogRelated,
  type RelatedArticle,
} from "@/components/services/ServiceBlogRelated";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";
import { getPayloadClient } from "@/lib/payload";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seo.title,
    description: s.seo.description,
    alternates: { canonical: `/services/${s.slug}` },
    keywords: [...s.seo.keywords],
    openGraph: {
      title: s.seo.title,
      description: s.seo.description,
      url: `${site.url}/services/${s.slug}`,
      type: "website",
    },
  };
}

async function getRelatedArticles(serviceSlug: string, keywords: readonly string[]): Promise<RelatedArticle[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: {
        and: [
          { status: { equals: "published" } },
          {
            or: [
              { keywords: { in: [...keywords, serviceSlug] } },
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  const page = servicePages[slug];
  if (!s || !page) notFound();

  const related = await getRelatedArticles(slug, s.seo.keywords);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s.slug),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: s.shortLabel, url: `/services/${s.slug}` },
          ]),
        ].filter(Boolean)}
      />

      <ServiceDetailHero hero={page.hero} slug={s.slug} />
      <ServiceProcessTrack process={page.process} />
      <ServiceBlogRelated
        eyebrow={`Insights · ${s.shortLabel}`}
        titlePre="Related "
        titleEm="articles"
        titlePost={` on ${s.shortLabel.toLowerCase()}.`}
        lede={`In-depth guides and case studies related to ${s.shortLabel.toLowerCase()} — sourced from our work across Europe, Africa, and the Gulf.`}
        ctaLabel="See all articles"
        articles={related}
      />
    </>
  );
}
