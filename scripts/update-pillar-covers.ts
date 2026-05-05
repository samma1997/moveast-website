/**
 * Assigns cover images (Payload Media) to the 2 pillar articles.
 *
 * Idempotent: skips articles that already have a cover assigned.
 *
 * Run:
 *   npx tsx scripts/update-pillar-covers.ts
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

const COVERS = [
  {
    slug: "china-sourcing-agent",
    file: "smart-manufacturing.webp",
    alt: "China smart manufacturing — Move East strategic sourcing from Shenzhen",
  },
  {
    slug: "ethiopia-djibouti-railway-china-africa-procurement",
    file: "edr-corridor.webp",
    alt: "Ethiopia-Djibouti Railway crossing the East African highlands at sunset",
  },
];

async function run() {
  const { getPayloadClient } = await import("@/lib/payload");
  const payload = await getPayloadClient();

  for (const c of COVERS) {
    const { docs } = await payload.find({
      collection: "articles",
      where: { slug: { equals: c.slug } },
      limit: 1,
    });
    const article = docs[0];
    if (!article) {
      console.log(`Article not found: ${c.slug}`);
      continue;
    }
    if (article.cover) {
      console.log(`Skipping ${c.slug} (already has cover)`);
      continue;
    }

    const filePath = join(ROOT, "public", "images", "about", c.file);
    const media = await payload.create({
      collection: "media",
      data: { alt: c.alt },
      filePath,
    });

    await payload.update({
      collection: "articles",
      id: article.id,
      data: { cover: media.id },
    });

    console.log(`Updated cover: ${c.slug} → media id=${media.id}`);
  }
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
