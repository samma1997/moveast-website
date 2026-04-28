/**
 * Instagram semantic index builder (Gemini 2.0 Flash — free tier)
 *
 * Usage:
 *   PATH=/opt/homebrew/opt/node@22/bin:$PATH npx tsx scripts/analyze-instagram.ts
 *
 * Reads instagram-scrape.json, filters posts last 2 years, classifies each with
 * Gemini 2.0 Flash (structured JSON). Writes incrementally to
 * instagram-analysis.json so the run is resumable.
 *
 * Rate limit: 15 req/min free tier → sleep 4.2s between calls.
 */

import { readFile, writeFile, readdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

loadEnv({ path: join(ROOT, ".env.local") });

const SRC = join(ROOT, "instagram-scrape.json");
const OUT = join(ROOT, "instagram-analysis.json");
const IMG_DIR = join(ROOT, "instagram-images");
const CUTOFF_DATE = "2000-01-01"; // tutti i post
const SLEEP_MS = 4200; // 15 req/min free tier
const MODEL_NAME = "gemini-2.5-flash";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

type IgPost = {
  id: string;
  shortcode: string;
  date: string;
  timestamp: number;
  type: string;
  caption: string;
  likes: number;
  comments: number;
  location: string | null;
  carousel_images?: string[];
  is_video?: boolean;
};

type Analysis = {
  id: string;
  shortcode: string;
  date: string;
  location: string | null;
  is_professional: boolean;
  sector: "mobility" | "renewable-energy" | "medical-devices" | "industrial-machinery" | "institutional" | "other";
  event_type:
    | "trade_fair"
    | "institutional_meeting"
    | "factory_visit"
    | "conference_speech"
    | "business_dinner"
    | "travel_logistics"
    | "media_interview"
    | "personal"
    | "other";
  topic_tags: string[];
  people_context: "solo" | "small_group" | "crowd" | "unknown";
  english_summary: string;
  italian_caption_short: string;
  blog_relevance_score: number;
  image_files: string[];
};

const responseSchema = {
  type: SchemaType.OBJECT,
  properties: {
    is_professional: {
      type: SchemaType.BOOLEAN,
      description:
        "True if the post is about business, China trade, institutional events, factory visits, trade fairs, industry conferences, official meetings. False if purely personal (family, leisure without business context).",
    },
    sector: {
      type: SchemaType.STRING,
      enum: ["mobility", "renewable-energy", "medical-devices", "industrial-machinery", "institutional", "other"],
    },
    event_type: {
      type: SchemaType.STRING,
      enum: [
        "trade_fair",
        "institutional_meeting",
        "factory_visit",
        "conference_speech",
        "business_dinner",
        "travel_logistics",
        "media_interview",
        "personal",
        "other",
      ],
    },
    topic_tags: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description:
        "3-6 short tags: event names (CMEF, CICC, UNGM, Belt & Road), locations (Shenzhen, Shanghai, Guangzhou, Addis Ababa), companies mentioned (BYD, CATL, Huawei), regulatory frames (MDR, CE, FDA).",
    },
    people_context: {
      type: SchemaType.STRING,
      enum: ["solo", "small_group", "crowd", "unknown"],
    },
    english_summary: {
      type: SchemaType.STRING,
      description: "One English sentence (20-40 words) describing what the post is about, suitable as an image alt text for a B2B site.",
    },
    italian_caption_short: {
      type: SchemaType.STRING,
      description: "1 short Italian phrase (max 12 words) summarizing the post — reuses the original caption tone.",
    },
    blog_relevance_score: {
      type: SchemaType.INTEGER,
      description:
        "0-10. How relevant this post is to produce a China-focused B2B blog article for moveasttrading.com. 10 = perfect case study material. 0 = not usable.",
    },
  },
  required: [
    "is_professional",
    "sector",
    "event_type",
    "topic_tags",
    "people_context",
    "english_summary",
    "italian_caption_short",
    "blog_relevance_score",
  ],
} as const;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: MODEL_NAME,
  generationConfig: {
    responseMimeType: "application/json",
    // @ts-expect-error SDK types lag behind runtime support
    responseSchema,
    temperature: 0.2,
  },
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function loadExisting(): Promise<Record<string, Analysis>> {
  if (!(await fileExists(OUT))) return {};
  const raw = await readFile(OUT, "utf8");
  try {
    const arr = JSON.parse(raw) as Analysis[];
    return Object.fromEntries(arr.map((a) => [a.shortcode, a]));
  } catch {
    return {};
  }
}

async function loadPosts(): Promise<IgPost[]> {
  const raw = await readFile(SRC, "utf8");
  return JSON.parse(raw) as IgPost[];
}

/** Given a shortcode, find local jpg filenames matching that shortcode. */
async function findLocalFiles(shortcode: string, allFiles: string[]): Promise<string[]> {
  // Filename format: `YYYY-MM-DD_{shortcode}_(main|c1|c2…).jpg`
  // Shortcode itself may contain underscores so we match the full substring.
  if (shortcode.length < 10) return [];
  return allFiles
    .filter((f) => f.includes(shortcode))
    .sort((a, b) => {
      if (a.endsWith("_main.jpg")) return -1;
      if (b.endsWith("_main.jpg")) return 1;
      return a.localeCompare(b);
    });
}

function buildPrompt(post: IgPost): string {
  return [
    "You analyze Instagram posts by Alessandro Petrini, founder of Move East Trading,",
    "a Shenzhen-based China procurement company. Serves governments, EPC contractors,",
    "industrial buyers. Active in mobility/rail, renewable energy, medical devices,",
    "industrial machinery. Board member of CICC (Italian Chamber of Commerce in China),",
    "UNGM vendor, outsourcing agent for Ethiopia-Djibouti Railway.",
    "",
    "Classify the following post. Return ONLY the JSON matching the schema.",
    "",
    `Post date: ${post.date}`,
    `Location: ${post.location ?? "unknown"}`,
    `Type: ${post.type}`,
    `Caption:`,
    post.caption,
  ].join("\n");
}

async function classify(post: IgPost, imageFiles: string[]): Promise<Analysis | null> {
  try {
    const res = await model.generateContent(buildPrompt(post));
    const text = res.response.text();
    const parsed = JSON.parse(text) as Omit<Analysis, "id" | "shortcode" | "date" | "location" | "image_files">;
    return {
      id: post.id,
      shortcode: post.shortcode,
      date: post.date,
      location: post.location,
      image_files: imageFiles,
      ...parsed,
    };
  } catch (err) {
    console.error(`  ✗ classify failed for ${post.shortcode}:`, err instanceof Error ? err.message : err);
    return null;
  }
}

async function main() {
  console.log(`→ Loading posts from ${SRC}...`);
  const allPosts = await loadPosts();
  console.log(`  total posts in JSON: ${allPosts.length}`);

  const filtered = allPosts.filter((p) => p.date >= CUTOFF_DATE);
  console.log(`  filtered (date >= ${CUTOFF_DATE}): ${filtered.length}`);

  console.log(`→ Listing local images...`);
  const allFiles = await readdir(IMG_DIR);
  console.log(`  ${allFiles.length} local jpgs`);

  const existing = await loadExisting();
  const existingCount = Object.keys(existing).length;
  console.log(`→ Resuming: ${existingCount} already classified`);

  const todo = filtered.filter((p) => !existing[p.shortcode]);
  console.log(`  to process: ${todo.length}`);
  console.log(`  est. duration: ${Math.ceil((todo.length * SLEEP_MS) / 60000)} min`);
  console.log("");

  const results: Record<string, Analysis> = { ...existing };
  let idx = 0;

  for (const post of todo) {
    idx++;
    const imageFiles = await findLocalFiles(post.shortcode, allFiles);
    const snippet = post.caption.slice(0, 70).replace(/\s+/g, " ");
    console.log(`[${idx}/${todo.length}] ${post.date} ${post.shortcode.slice(0, 12)} — ${snippet}`);

    const analysis = await classify(post, imageFiles);
    if (analysis) {
      results[post.shortcode] = analysis;
      const proBadge = analysis.is_professional ? "✓ pro" : "· personal";
      console.log(`  ${proBadge}  ${analysis.sector}/${analysis.event_type}  score=${analysis.blog_relevance_score}  imgs=${imageFiles.length}`);

      // write incrementally every 10 posts
      if (idx % 10 === 0 || idx === todo.length) {
        const arr = Object.values(results).sort((a, b) => b.date.localeCompare(a.date));
        await writeFile(OUT, JSON.stringify(arr, null, 2));
      }
    }

    if (idx < todo.length) await sleep(SLEEP_MS);
  }

  // final write
  const arr = Object.values(results).sort((a, b) => b.date.localeCompare(a.date));
  await writeFile(OUT, JSON.stringify(arr, null, 2));

  const pro = arr.filter((a) => a.is_professional);
  console.log("");
  console.log(`Done. Saved ${arr.length} total, ${pro.length} professional.`);
  console.log(`Top-scoring posts (blog_relevance_score ≥ 7):`);
  const top = arr
    .filter((a) => a.is_professional && a.blog_relevance_score >= 7)
    .slice(0, 10);
  for (const t of top) {
    console.log(`  ${t.date}  [${t.blog_relevance_score}] ${t.sector}/${t.event_type}  ${t.english_summary.slice(0, 80)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
