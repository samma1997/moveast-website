import type { CollectionConfig } from "payload";
import { lexicalEditor, FixedToolbarFeature, HeadingFeature, LinkFeature, BlockquoteFeature, UnorderedListFeature, OrderedListFeature, UploadFeature } from "@payloadcms/richtext-lexical";

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: { singular: "Article", plural: "Articles" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt", "updatedAt"],
    group: "Content",
    livePreview: {
      url: ({ data }) => (data?.slug ? `/blog/${data.slug}` : "/blog"),
    },
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },
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
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            { name: "title", type: "text", required: true, maxLength: 120 },
            { name: "slug", type: "text", required: true, unique: true, index: true, admin: { description: "kebab-case URL segment" } },
            {
              name: "excerpt",
              type: "textarea",
              required: true,
              maxLength: 280,
              admin: { description: "Usato come description SEO e preview card (160-280 char)" },
            },
            {
              name: "cover",
              type: "upload",
              relationTo: "media",
              admin: { description: "Hero cover immagine (1920×1080 minimo)" },
            },
            {
              name: "body",
              type: "richText",
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
                  FixedToolbarFeature(),
                  LinkFeature({ enabledCollections: ["articles"] }),
                  BlockquoteFeature(),
                  UnorderedListFeature(),
                  OrderedListFeature(),
                  UploadFeature({ collections: { media: { fields: [] } } }),
                ],
              }),
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            { name: "seoTitle", type: "text", admin: { description: "Override meta title (lasciar vuoto = usa title)" } },
            { name: "seoDescription", type: "textarea", maxLength: 170, admin: { description: "Override meta description (lasciar vuoto = usa excerpt)" } },
            { name: "ogImage", type: "upload", relationTo: "media", admin: { description: "Override OG image (lasciar vuoto = usa cover)" } },
            { name: "primaryKeyword", type: "text" },
            { name: "keywords", type: "text", hasMany: true },
            { name: "noIndex", type: "checkbox", defaultValue: false },
          ],
        },
        {
          label: "FAQ (optional)",
          fields: [
            {
              name: "faqs",
              type: "array",
              labels: { singular: "FAQ", plural: "FAQs" },
              admin: { description: "Schema.org FAQPage auto-generato per queste domande" },
              fields: [
                { name: "question", type: "text", required: true },
                { name: "answer", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "AI Assistance",
          fields: [
            {
              name: "rawPaste",
              type: "textarea",
              admin: {
                description: "Incolla qui il testo sorgente fornito dal cliente. Verrà usato dal workflow 'Generate' per produrre l'articolo strutturato con Claude.",
                rows: 14,
              },
            },
            {
              name: "aiModel",
              type: "select",
              defaultValue: "claude-sonnet-4-6",
              options: [
                { label: "Haiku 4.5 — fast/cheap (meta, titles)", value: "claude-haiku-4-5" },
                { label: "Sonnet 4.6 — balanced (default)", value: "claude-sonnet-4-6" },
                { label: "Opus 4.7 — premium quality", value: "claude-opus-4-7" },
              ],
            },
            {
              name: "aiLastGeneratedAt",
              type: "date",
              admin: { readOnly: true, position: "sidebar" },
            },
          ],
        },
      ],
    },
    // sidebar fields
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
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
    },
    {
      name: "readingTime",
      type: "number",
      admin: { position: "sidebar", description: "Minuti (auto-calcolato)" },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: { position: "sidebar" },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-calcolo reading time
        if (data.body) {
          const text = JSON.stringify(data.body);
          const words = text.split(/\s+/).length;
          data.readingTime = Math.max(1, Math.ceil(words / 230));
        }
        // Auto-slug se vuoto
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .slice(0, 90);
        }
        // Set publishedAt on first publish
        if (data.status === "published" && !data.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }
        return data;
      },
    ],
  },
};
