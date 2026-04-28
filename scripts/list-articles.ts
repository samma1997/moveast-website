import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

(async () => {
  const { getPayload } = await import("payload");
  const config = (await import(join(ROOT, "payload.config.ts"))).default;
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "articles", limit: 20, depth: 0 });
  for (const d of docs) {
    console.log(`slug: ${d.slug}`);
    console.log(`  id: ${d.id}`);
    console.log(`  title: ${d.title}`);
    console.log(`  status: ${d.status}`);
    console.log(`  cover: ${d.cover ?? "(none)"}`);
    console.log(`  publishedAt: ${d.publishedAt}`);
    console.log(`  readingTime: ${d.readingTime}`);
    console.log();
  }
  process.exit(0);
})();
