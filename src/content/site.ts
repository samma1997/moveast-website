/**
 * Site-wide configuration (fallback statico)
 * Questi dati vivono ANCHE in Payload CMS (collection "Globals.Site")
 * e possono essere modificati da admin. Questo file è fallback per
 * SSR iniziale + type source of truth.
 */

export const site = {
  name: "Move East Trading",
  tagline: "Your Bridge to China's Industrial Power",
  description:
    "Strategic sourcing, technology transfer, and supply chain management from Shenzhen. CICC Board Member, UNGM Registered Vendor.",
  url: "https://moveasttrading.com",
  founded: 2018,
  email: "info@moveasttrading.com",
  phone: "+39 06 4200 1212",
  social: {
    instagram: "https://www.instagram.com/petrini.alex/",
    linkedin: "https://www.linkedin.com/company/moveeasttrading",
  },
  offices: [
    { city: "Shenzhen", label: "HQ", country: "China", region: "Guangdong Province" },
    { city: "Hong Kong", label: "Branch", country: "Hong Kong SAR" },
    { city: "Rome", label: "Europe", country: "Italy" },
    { city: "Addis Ababa", label: "Africa", country: "Ethiopia" },
  ],
  credentials: [
    { label: "CICC Board Member", year: 2024, description: "China-Italy Chamber of Commerce" },
    { label: "UNGM Registered Vendor", year: 2024, description: "United Nations Global Marketplace" },
    { label: "ISO 9001", year: 2025, description: "Quality Management certified" },
  ],
} as const;

export type Site = typeof site;
