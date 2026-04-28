/**
 * Rimappa image_files in instagram-analysis.json con matching corretto (shortcode substring).
 * PATH=/opt/homebrew/opt/node@22/bin:$PATH npx tsx scripts/remap-instagram-images.ts
 */
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "instagram-analysis.json");
const IMG_DIR = join(ROOT, "instagram-images");

type Analysis = {
  shortcode: string;
  image_files: string[];
  [k: string]: unknown;
};

async function main() {
  const [raw, allFiles] = await Promise.all([
    readFile(OUT, "utf8"),
    readdir(IMG_DIR),
  ]);
  const arr = JSON.parse(raw) as Analysis[];

  let changed = 0;
  for (const a of arr) {
    const matched = allFiles
      .filter((f) => f.includes(a.shortcode))
      .sort((x, y) => {
        if (x.endsWith("_main.jpg")) return -1;
        if (y.endsWith("_main.jpg")) return 1;
        return x.localeCompare(y);
      });
    if (JSON.stringify(matched) !== JSON.stringify(a.image_files)) {
      a.image_files = matched;
      changed++;
    }
  }

  await writeFile(OUT, JSON.stringify(arr, null, 2));
  console.log(`Remapped ${changed} / ${arr.length} records.`);

  const stats = {
    total: arr.length,
    withImages: arr.filter((a) => a.image_files.length > 0).length,
    avgImages: Math.round((arr.reduce((s, a) => s + a.image_files.length, 0) / arr.length) * 10) / 10,
  };
  console.log(stats);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
