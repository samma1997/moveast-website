/**
 * Replace cover of china-sourcing-agent article with the dedicated AI-generated cover.
 *
 * Run:
 *   npx tsx scripts/replace-china-sourcing-cover.ts
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

async function run() {
  const { getPayloadClient } = await import("@/lib/payload");
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "articles",
    where: { slug: { equals: "china-sourcing-agent" } },
    limit: 1,
  });
  const article = docs[0];
  if (!article) {
    console.log("Article china-sourcing-agent not found.");
    return;
  }

  const filePath = join(
    ROOT,
    "public",
    "images",
    "blog",
    "china-sourcing-agent-cover.webp"
  );

  const media = await payload.create({
    collection: "media",
    data: {
      alt: "China sourcing agent — supplier verification with technical drawings, sample component, audit checklist, Shenzhen skyline at dusk",
    },
    filePath,
  });

  await payload.update({
    collection: "articles",
    id: article.id,
    data: { cover: media.id },
  });

  console.log(
    `Updated cover for china-sourcing-agent → media id=${media.id} (was: ${
      typeof article.cover === "object" && article.cover !== null && "id" in article.cover
        ? (article.cover as { id: unknown }).id
        : article.cover
    })`
  );
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
