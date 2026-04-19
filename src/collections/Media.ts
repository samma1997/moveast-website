import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Media", plural: "Media" },
  admin: {
    group: "Content",
    defaultColumns: ["filename", "alt", "mimeType", "updatedAt"],
  },
  access: {
    read: () => true, // pubblico (serve via URL Blob)
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => req.user?.role === "admin",
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 768, height: 576, position: "centre" },
      { name: "og", width: 1200, height: 630, position: "centre" },
      { name: "hero", width: 1920, height: 1080, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
    formatOptions: {
      format: "webp",
      options: { quality: 85 },
    },
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: { description: "Descrizione accessibile — obbligatoria per SEO e a11y" },
    },
    { name: "caption", type: "text" },
    { name: "credit", type: "text", admin: { description: "Autore/fonte (opzionale)" } },
  ],
};
