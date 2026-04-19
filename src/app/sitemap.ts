import type { MetadataRoute } from "next";
import { staticPages } from "@/content/pages";
import { site } from "@/content/site";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 3600; // rigenera ogni ora

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages
    .filter((p) => p.indexable)
    .map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changefreq,
      priority: p.priority,
    }));

  // Articoli blog dinamici da Payload (published only)
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: { status: { equals: "published" } },
      limit: 1000,
      depth: 0,
      sort: "-publishedAt",
    });
    blogEntries = docs
      .filter((a) => typeof a.slug === "string" && a.slug)
      .map((a) => ({
        url: `${site.url}/blog/${a.slug}`,
        lastModified: a.updatedAt ? new Date(a.updatedAt) : now,
        changeFrequency: "monthly" as const,
        priority: 0.75,
      }));
  } catch (err) {
    // DB non disponibile in build — non rompere la sitemap static
    console.warn("[sitemap] could not fetch articles:", err);
  }

  return [...staticEntries, ...blogEntries];
}
