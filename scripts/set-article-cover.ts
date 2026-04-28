import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

const ARTICLE_SLUG = "china-railway-procurement-africa-case-study";
const COVER_SRC = "/tmp/freight.jpg";
const ALT = "Freight train crossing the East Africa railway corridor";

(async () => {
  const { getPayload } = await import("payload");
  const config = (await import(join(ROOT, "payload.config.ts"))).default;
  const payload = await getPayload({ config });

  // 1. Upload image to Media
  console.log("→ Uploading cover to Media...");
  const buf = await readFile(COVER_SRC);
  const media = await payload.create({
    collection: "media",
    data: { alt: ALT, caption: "Pexels — freight train corridor", credit: "pexels.com" },
    file: { data: buf, mimetype: "image/jpeg", name: "edr-article-cover.jpg", size: buf.byteLength },
  });
  console.log(`  ✓ Media id=${media.id}`);

  // 2. Find article and set cover
  const { docs } = await payload.find({
    collection: "articles",
    where: { slug: { equals: ARTICLE_SLUG } },
    limit: 1,
  });
  const article = docs[0];
  if (!article) {
    console.error(`Article '${ARTICLE_SLUG}' not found`);
    process.exit(1);
  }
  await payload.update({
    collection: "articles",
    id: article.id,
    data: { cover: media.id },
  });
  console.log(`  ✓ article id=${article.id} cover set to media id=${media.id}`);
  process.exit(0);
})();
