import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "User", plural: "Users" },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "role", "updatedAt"],
    group: "System",
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7, // 7 giorni
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000, // 10 minuti
    useAPIKey: false,
    verify: false,
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => req.user?.role === "admin",
    update: ({ req, id }) => {
      if (req.user?.role === "admin") return true;
      return req.user?.id === id;
    },
    delete: ({ req }) => req.user?.role === "admin",
    admin: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "Viewer", value: "viewer" },
      ],
      access: {
        update: ({ req }) => req.user?.role === "admin",
      },
    },
  ],
};
