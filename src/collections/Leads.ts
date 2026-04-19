import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",
  labels: { singular: "Lead", plural: "Leads" },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "company", "sector", "score", "status", "createdAt"],
    group: "CRM",
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true, // pubblico — form contact senza auth
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true, index: true },
    { name: "company", type: "text" },
    { name: "role", type: "text" },
    {
      name: "sector",
      type: "select",
      options: [
        { label: "Mobility & Transport", value: "mobility" },
        { label: "Renewable Energy", value: "energy" },
        { label: "Medical Devices", value: "medical" },
        { label: "Industrial Machinery", value: "industrial" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "volume",
      type: "select",
      options: [
        { label: "< $50k", value: "small" },
        { label: "$50k – $500k", value: "medium" },
        { label: "$500k – $5M", value: "large" },
        { label: "> $5M", value: "enterprise" },
      ],
    },
    { name: "message", type: "textarea", required: true },
    {
      name: "source",
      type: "select",
      defaultValue: "contact-form",
      options: [
        { label: "Contact form", value: "contact-form" },
        { label: "Chat launcher", value: "chat" },
        { label: "Email direct", value: "email" },
        { label: "LinkedIn", value: "linkedin" },
        { label: "Referral", value: "referral" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Qualified", value: "qualified" },
        { label: "In conversation", value: "conversation" },
        { label: "Proposal", value: "proposal" },
        { label: "Won", value: "won" },
        { label: "Lost", value: "lost" },
        { label: "Spam", value: "spam" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "score",
      type: "number",
      admin: {
        position: "sidebar",
        readOnly: true,
        description: "Auto-calcolato da form + settore + volume",
      },
    },
    {
      name: "ipHash",
      type: "text",
      admin: { position: "sidebar", readOnly: true, description: "Rate-limit key" },
    },
    {
      name: "userAgent",
      type: "text",
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "notes",
      type: "textarea",
      admin: { description: "Note interne (non visibili al lead)" },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          // Lead scoring automatico
          let score = 20; // base (form compilato)
          if (data.company) score += 10;
          if (data.volume === "large" || data.volume === "enterprise") score += 25;
          else if (data.volume === "medium") score += 15;
          if (["mobility", "energy", "medical", "industrial"].includes(data.sector)) score += 15;
          if (data.message && data.message.length > 200) score += 10;
          data.score = score;
        }
        return data;
      },
    ],
  },
};
