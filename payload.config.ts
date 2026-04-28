import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { resendAdapter } from "@payloadcms/email-resend";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";

import { Users } from "./src/collections/Users";
import { Media } from "./src/collections/Media";
import { Articles } from "./src/collections/Articles";
import { Pages } from "./src/collections/Pages";
import { Leads } from "./src/collections/Leads";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3004",
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — Move East Admin",
      icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
    },
    components: {},
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 812 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  collections: [Users, Media, Articles, Pages, Leads],
  editor: lexicalEditor({}),
  sharp,
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-in-prod",
  typescript: {
    outputFile: path.resolve(dirname, "./src/types/payload.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
    migrationDir: path.resolve(dirname, "./migrations"),
  }),
  email: process.env.RESEND_API_KEY
    ? resendAdapter({
        defaultFromAddress: process.env.RESEND_FROM_ADDRESS || "noreply@moveasttrading.com",
        defaultFromName: "Move East Trading",
        apiKey: process.env.RESEND_API_KEY,
      })
    : undefined,
  plugins: [
    seoPlugin({
      collections: ["articles", "pages"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `${doc?.title ?? "Untitled"} — Move East`,
      generateDescription: ({ doc }) => doc?.excerpt || "",
    }),
    redirectsPlugin({
      collections: ["articles", "pages"],
    }),
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: { media: true },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3004",
    "https://moveasttrading.com",
    "https://www.moveasttrading.com",
  ].filter(Boolean),
  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3004",
    "https://moveasttrading.com",
  ].filter(Boolean),
});
