import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";
import { site } from "@/content/site";

export const revalidate = 600;

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}

export async function GET() {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: { status: { equals: "published" } },
      limit: 50,
      sort: "-publishedAt",
      depth: 0,
    });

    const items = docs
      .map((a) => {
        const slug = String(a.slug ?? "");
        const title = escapeXml(String(a.title ?? ""));
        const excerpt = escapeXml(String(a.excerpt ?? ""));
        const date = a.publishedAt ? new Date(String(a.publishedAt)).toUTCString() : new Date().toUTCString();
        return `
    <item>
      <title>${title}</title>
      <link>${site.url}/blog/${slug}</link>
      <guid isPermaLink="true">${site.url}/blog/${slug}</guid>
      <description>${excerpt}</description>
      <pubDate>${date}</pubDate>
    </item>`;
      })
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} Blog</title>
    <link>${site.url}/blog</link>
    <description>${escapeXml(site.description)}</description>
    <language>en-US</language>
    <atom:link href="${site.url}/blog/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
      },
    });
  } catch {
    return new NextResponse("<error>Feed unavailable</error>", { status: 500 });
  }
}
