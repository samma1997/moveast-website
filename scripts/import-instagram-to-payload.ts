/**
 * Import Instagram main photos (professional posts) into Payload Media.
 *
 *   PATH=/opt/homebrew/opt/node@22/bin:$PATH npx tsx scripts/import-instagram-to-payload.ts
 *
 * Reads instagram-analysis.json, for each `is_professional: true` record:
 *   - picks the _main.jpg from image_files
 *   - uploads it to Payload Media with alt/caption from index
 *   - saves shortcode→media_id map in instagram-media-map.json
 *
 * Resume-safe: skips entries already in the map.
 */

import { readFile, writeFile, readFile as fsReadFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

const ANALYSIS = join(ROOT, "instagram-analysis.json");
const MAP_OUT = join(ROOT, "instagram-media-map.json");
const IMG_DIR = join(ROOT, "instagram-images");

type Analysis = {
  id: string;
  shortcode: string;
  date: string;
  location: string | null;
  is_professional: boolean;
  sector: string;
  event_type: string;
  topic_tags: string[];
  english_summary: string;
  italian_caption_short: string;
  blog_relevance_score: number;
  image_files: string[];
};

type Mapping = Record<string, { mediaId: number; filename: string; alt: string }>;

async function loadMap(): Promise<Mapping> {
  if (!existsSync(MAP_OUT)) return {};
  return JSON.parse(await fsReadFile(MAP_OUT, "utf8")) as Mapping;
}

async function main() {
  const getPayload = (await import("payload")).getPayload;
  const config = (await import(join(ROOT, "payload.config.ts"))).default;

  console.log("→ Booting Payload local API...");
  const payload = await getPayload({ config });

  const arr = JSON.parse(await readFile(ANALYSIS, "utf8")) as Analysis[];
  const pro = arr.filter((a) => a.is_professional && a.image_files.length > 0);
  console.log(`  ${pro.length} professional posts to import`);

  const map = await loadMap();
  console.log(`  ${Object.keys(map).length} already imported (resume)`);

  const todo = pro.filter((p) => !map[p.shortcode]);
  console.log(`  ${todo.length} to do`);

  let done = 0;
  for (const p of todo) {
    const mainFile = p.image_files.find((f) => f.endsWith("_main.jpg")) ?? p.image_files[0];
    if (!mainFile) continue;
    const fullPath = join(IMG_DIR, mainFile);
    if (!existsSync(fullPath)) {
      console.log(`  ✗ missing file: ${mainFile}`);
      continue;
    }

    const alt = p.english_summary.slice(0, 200);
    const caption = [
      p.date,
      p.location,
      p.topic_tags.slice(0, 4).join(", "),
    ].filter(Boolean).join(" · ");

    try {
      const fileBuffer = await readFile(fullPath);
      const stat = fileBuffer.byteLength;

      const created = await payload.create({
        collection: "media",
        data: {
          alt,
          caption,
          credit: "@petrini.alex",
        },
        file: {
          data: fileBuffer,
          mimetype: "image/jpeg",
          name: mainFile,
          size: stat,
        },
      });

      map[p.shortcode] = {
        mediaId: Number(created.id),
        filename: mainFile,
        alt,
      };
      done++;
      console.log(`  ✓ [${done}/${todo.length}] ${p.date} ${p.shortcode.slice(0, 10)} → media_id=${created.id}`);

      if (done % 10 === 0) {
        await writeFile(MAP_OUT, JSON.stringify(map, null, 2));
      }
    } catch (err) {
      console.error(`  ✗ failed ${p.shortcode}:`, err instanceof Error ? err.message : err);
    }
  }

  await writeFile(MAP_OUT, JSON.stringify(map, null, 2));
  console.log("");
  console.log(`Done. Imported ${done} new, ${Object.keys(map).length} total.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
