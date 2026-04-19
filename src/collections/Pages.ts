import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: { singular: "Page", plural: "Pages" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "updatedAt"],
    group: "Content",
  },
  versions: { drafts: { autosave: { interval: 2000 } }, maxPerDoc: 10 },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return { status: { equals: "published" } };
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor({}),
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "SEO",
          fields: [
            { name: "seoTitle", type: "text" },
            { name: "seoDescription", type: "textarea", maxLength: 170 },
            { name: "ogImage", type: "upload", relationTo: "media" },
            { name: "noIndex", type: "checkbox", defaultValue: false },
          ],
        },
      ],
    },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      admin: { position: "sidebar" },
    },
  ],
};
