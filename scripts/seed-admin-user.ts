/**
 * Seed/upsert admin user for the Move East Payload + Dashboard.
 *
 * Run:
 *   npx tsx scripts/seed-admin-user.ts
 *
 * Idempotent: if the email already exists, the role is bumped to "admin"
 * and the password is reset (only if RESET_PASSWORD=true is in env).
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

const TARGET = {
  email: "lucasamm97@gmail.com",
  password: "Postino1997",
  name: "Luca Sammarco",
  role: "admin" as const,
};

async function run() {
  const { getPayloadClient } = await import("@/lib/payload");
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "users",
    where: { email: { equals: TARGET.email } },
    limit: 1,
  });

  const existing = docs[0];

  if (existing) {
    const updated = await payload.update({
      collection: "users",
      id: existing.id,
      data: {
        role: TARGET.role,
        name: TARGET.name,
        ...(process.env.RESET_PASSWORD === "true"
          ? { password: TARGET.password }
          : {}),
      },
    });
    console.log(
      `Updated existing user → id=${updated.id}, role=admin, name=${TARGET.name}`
    );
    if (process.env.RESET_PASSWORD !== "true") {
      console.log(
        "Note: password was NOT reset. Set RESET_PASSWORD=true to also reset password."
      );
    }
    return;
  }

  const created = await payload.create({
    collection: "users",
    data: {
      email: TARGET.email,
      password: TARGET.password,
      name: TARGET.name,
      role: TARGET.role,
    },
  });
  console.log(
    `Created admin user → id=${created.id}, email=${TARGET.email}, role=admin`
  );
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("[seed-admin-user] error:", e);
    process.exit(1);
  });
