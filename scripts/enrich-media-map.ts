/**
 * Arricchisce instagram-media-map.json con URL Vercel Blob + metadata
 * attingendo sia da Payload Media sia da instagram-analysis.json.
 *
 *   PATH=/opt/homebrew/opt/node@22/bin:$PATH npx tsx scripts/enrich-media-map.ts
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

const MAP_FILE = join(ROOT, "instagram-media-map.json");
const ANALYSIS_FILE = join(ROOT, "instagram-analysis.json");

type EnrichedEntry = {
  mediaId: number;
  filename: string;
  alt: string;
  url: string;
  sizes?: {
    thumbnail?: string;
    card?: string;
    og?: string;
    hero?: string;
  };
  date: string;
  location: string | null;
  sector: string;
  event_type: string;
  topic_tags: string[];
  blog_relevance_score: number;
  people_context: string;
  italian_caption_short: string;
};

async function main() {
  const getPayload = (await import("payload")).getPayload;
  const config = (await import(join(ROOT, "payload.config.ts"))).default;
  const payload = await getPayload({ config });

  const mapRaw = JSON.parse(await readFile(MAP_FILE, "utf8")) as Record<
    string,
    { mediaId: number; filename: string; alt: string }
  >;
  const analysisArr = JSON.parse(await readFile(ANALYSIS_FILE, "utf8")) as Array<{
    shortcode: string;
    date: string;
    location: string | null;
    sector: string;
    event_type: string;
    topic_tags: string[];
    blog_relevance_score: number;
    people_context: string;
    italian_caption_short: string;
  }>;
  const analysisIdx = Object.fromEntries(analysisArr.map((a) => [a.shortcode, a]));

  const enriched: Record<string, EnrichedEntry> = {};
  let count = 0;
  for (const [shortcode, entry] of Object.entries(mapRaw)) {
    const analysis = analysisIdx[shortcode];
    if (!analysis) continue;
    const media = (await payload.findByID({
      collection: "media",
      id: entry.mediaId,
      depth: 0,
    })) as { url?: string; sizes?: Record<string, { url?: string }> } | null;
    if (!media) continue;
    enriched[shortcode] = {
      ...entry,
      url: media.url ?? "",
      sizes: {
        thumbnail: media.sizes?.thumbnail?.url,
        card: media.sizes?.card?.url,
        og: media.sizes?.og?.url,
        hero: media.sizes?.hero?.url,
      },
      date: analysis.date,
      location: analysis.location,
      sector: analysis.sector,
      event_type: analysis.event_type,
      topic_tags: analysis.topic_tags,
      blog_relevance_score: analysis.blog_relevance_score,
      people_context: analysis.people_context,
      italian_caption_short: analysis.italian_caption_short,
    };
    count++;
    if (count % 20 === 0) console.log(`  ${count}/${Object.keys(mapRaw).length}`);
  }

  await writeFile(MAP_FILE, JSON.stringify(enriched, null, 2));
  console.log(`Done. Enriched ${count} entries.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
