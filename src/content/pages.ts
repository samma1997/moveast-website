/**
 * SSOT delle route del sito pubblico — usato da:
 *  - sitemap.ts (auto-generazione)
 *  - metadata robots (indexable)
 *  - menu navigation
 *  - schema JSON-LD (SiteNavigationElement)
 */

export type StaticPage = {
  path: string;
  label: string;
  indexable: boolean;
  priority: number; // sitemap priority 0–1
  changefreq: "daily" | "weekly" | "monthly" | "yearly" | "never";
  inNav?: boolean; // appare nel nav principale
  navGroup?: "primary" | "services" | "sectors";
};

export const staticPages: readonly StaticPage[] = [
  { path: "/", label: "Home", indexable: true, priority: 1.0, changefreq: "weekly", inNav: false },
  { path: "/about", label: "About", indexable: true, priority: 0.9, changefreq: "monthly", inNav: true, navGroup: "primary" },
  { path: "/services", label: "Services", indexable: true, priority: 0.9, changefreq: "monthly", inNav: true, navGroup: "primary" },
  { path: "/services/sourcing", label: "Strategic Sourcing", indexable: true, priority: 0.8, changefreq: "monthly", navGroup: "services" },
  { path: "/services/technology-transfer", label: "Technology Transfer", indexable: true, priority: 0.8, changefreq: "monthly", navGroup: "services" },
  { path: "/services/supply-chain", label: "Supply Chain Management", indexable: true, priority: 0.8, changefreq: "monthly", navGroup: "services" },
  { path: "/sectors", label: "Sectors", indexable: true, priority: 0.9, changefreq: "monthly", inNav: true, navGroup: "primary" },
  { path: "/sectors/mobility", label: "Mobility & Smart Transport", indexable: true, priority: 0.8, changefreq: "monthly", navGroup: "sectors" },
  { path: "/sectors/renewable-energy", label: "Renewable Energy & Storage", indexable: true, priority: 0.8, changefreq: "monthly", navGroup: "sectors" },
  { path: "/sectors/medical-devices", label: "Medical Devices & Healthcare", indexable: true, priority: 0.8, changefreq: "monthly", navGroup: "sectors" },
  { path: "/sectors/industrial-machinery", label: "Industrial Machinery & Smart Devices", indexable: true, priority: 0.8, changefreq: "monthly", navGroup: "sectors" },
  { path: "/blog", label: "Blog", indexable: true, priority: 0.9, changefreq: "daily", inNav: true, navGroup: "primary" },
  { path: "/contact", label: "Contact", indexable: true, priority: 0.7, changefreq: "yearly" },
  { path: "/privacy", label: "Privacy Policy", indexable: true, priority: 0.1, changefreq: "yearly" },
  { path: "/terms", label: "Terms & Conditions", indexable: true, priority: 0.1, changefreq: "yearly" },
];

export const navItems = staticPages.filter((p) => p.inNav);
export const servicesNav = staticPages.filter((p) => p.navGroup === "services");
export const sectorsNav = staticPages.filter((p) => p.navGroup === "sectors");
