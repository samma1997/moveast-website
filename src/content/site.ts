/**
 * Site-wide configuration (fallback statico)
 * Questi dati vivono ANCHE in Payload CMS (collection "Globals.Site")
 * e possono essere modificati da admin. Questo file è fallback per
 * SSR iniziale + type source of truth.
 */

export const site = {
  name: "Move East Trading",
  tagline: "Connecting Markets, Technologies, and People",
  description:
    "Shenzhen-based China procurement company. Strategic sourcing, technology transfer, and supply chain management for EU, Africa, and Gulf buyers. CICC Member.",
  url: "https://moveasttrading.com",
  founded: 2018,
  email: "info@moveasttrading.com",
  phone: "+39 06 4200 1212",
  social: {
    linkedin: "https://www.linkedin.com/company/moveeasttrading",
  },
  offices: [
    { city: "Shenzhen", label: "HQ", country: "China", countryCode: "CN", region: "Guangdong Province" },
    { city: "Hong Kong", label: "Branch", country: "Hong Kong SAR", countryCode: "HK" },
    { city: "Rome", label: "Europe", country: "Italy", countryCode: "IT" },
    { city: "Addis Ababa", label: "Africa", country: "Ethiopia", countryCode: "ET" },
  ],
  credentials: [
    { label: "CICC Member", year: 2024, description: "China-Italy Chamber of Commerce" },
    { label: "UNGM Registered Vendor", year: 2024, description: "United Nations Global Marketplace" },
  ],
} as const;

export type Site = typeof site;
