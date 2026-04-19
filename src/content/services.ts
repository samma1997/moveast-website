/**
 * Servizi — 3 linee di servizio (SSOT per seed Payload + fallback statico)
 * Slug corti usati live: /services/sourcing, /services/technology-transfer, /services/supply-chain
 */

export type Service = {
  slug: string;
  order: number;
  title: string;
  shortLabel: string; // per mega menu
  eyebrow: string;
  headline: string;
  description: string;
  miniDescription: string; // per mega menu hint
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
    primaryKeyword: string;
  };
};

export const services: readonly Service[] = [
  {
    slug: "sourcing",
    order: 1,
    title: "Strategic Sourcing & Procurement",
    shortLabel: "Strategic sourcing",
    eyebrow: "01 / Strategic sourcing",
    headline: "Verified access to China's industrial supply base.",
    description:
      "We identify, vet, and manage Chinese manufacturers on your behalf — ensuring quality, compliance, and competitive pricing through a structured, transparent process.",
    miniDescription: "Discovery, audits, contracts",
    seo: {
      title: "Strategic Sourcing from China — Verified Suppliers | Move East",
      description:
        "Structured supplier discovery, factory audits, and contract management across Shenzhen and Guangdong. CICC Board-level access.",
      keywords: ["strategic sourcing china", "china sourcing services", "china sourcing agent", "factory audit shenzhen"],
      primaryKeyword: "strategic sourcing china",
    },
  },
  {
    slug: "technology-transfer",
    order: 2,
    title: "Technology Transfer & Project Integration",
    shortLabel: "Technology transfer",
    eyebrow: "02 / Technology transfer",
    headline: "Bringing Chinese innovation into international infrastructure.",
    description:
      "From specification alignment to regulatory compliance, we facilitate the transfer of advanced Chinese technology into international infrastructure and industrial projects.",
    miniDescription: "Project integration, local assembly",
    seo: {
      title: "Technology Transfer from China — Shenzhen Integration | Move East",
      description:
        "Specification alignment, regulatory compliance, and local assembly for tech transfer from Chinese manufacturers to international projects.",
      keywords: ["technology transfer china", "shenzhen technology transfer", "chinese technology integration"],
      primaryKeyword: "shenzhen technology transfer",
    },
  },
  {
    slug: "supply-chain",
    order: 3,
    title: "Trading & Supply Chain Management",
    shortLabel: "Supply chain management",
    eyebrow: "03 / Supply chain management",
    headline: "End-to-end coordination from Shenzhen's port.",
    description:
      "End-to-end coordination from the world's 4th busiest port — managing logistics, customs, quality control, and delivery with full visibility at every stage.",
    miniDescription: "Trading, freight, consolidation",
    seo: {
      title: "Supply Chain Management from China to Europe | Move East",
      description:
        "End-to-end trading, freight, consolidation, customs, and delivery — managed from Shenzhen port with full visibility.",
      keywords: ["supply chain management china", "china europe supply chain", "shenzhen logistics"],
      primaryKeyword: "supply chain management china",
    },
  },
] as const;

export const getService = (slug: string) => services.find((s) => s.slug === slug);
