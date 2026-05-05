/**
 * Schema.org JSON-LD builders per tutti i tipi di pagina.
 * Output: oggetti da serializzare con JSON.stringify e incapsulare in <script type="application/ld+json">.
 */

import { site } from "@/content/site";
import { team } from "@/content/team";
import { services } from "@/content/services";
import { sectors } from "@/content/sectors";

/** Organization schema — usato in tutte le pagine */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: "MoveEast",
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.description,
    foundingDate: String(site.founded),
    foundingLocation: {
      "@type": "Place",
      name: "Shenzhen, China",
    },
    email: site.email,
    telephone: site.phone,
    address: site.offices.map((o) => ({
      "@type": "PostalAddress",
      addressLocality: o.city,
      addressCountry: o.countryCode,
      ...("region" in o && o.region ? { addressRegion: o.region } : {}),
    })),
    sameAs: [site.social.linkedin].filter(Boolean),
    knowsAbout: [
      ...services.map((s) => s.title),
      ...sectors.map((s) => s.title),
    ],
    memberOf: [
      { "@type": "Organization", name: "China-Italy Chamber of Commerce (CICC)" },
      { "@type": "Organization", name: "United Nations Global Marketplace (UNGM)" },
    ],
  } as const;
}

/** WebSite schema — root */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  } as const;
}

/** BreadcrumbList schema — per ogni pagina interna */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${site.url}${item.url}`,
    })),
  } as const;
}

/** AboutPage schema + team Persons */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${site.url}/about`,
    name: `About — ${site.name}`,
    description: "Leadership team, company timeline, and global offices of Move East Trading — connecting markets, technologies, and people.",
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      employee: team.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
        knowsLanguage: m.languages,
        worksFor: { "@id": `${site.url}/#organization` },
      })),
    },
  } as const;
}

/** Service schema — per ogni pagina servizio */
export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: ["Europe", "Africa", "Asia", "Middle East"],
    serviceType: s.shortLabel,
    url: `${site.url}/services/${s.slug}`,
  } as const;
}

/** FAQPage schema — per articles + pagine con FAQ */
export function faqPageSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } as const;
}

/** DefinedTermSet schema — pagina /glossary, ottimo per AI/GEO citation */
export function definedTermSetSchema(terms: Array<{ term: string; definition: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${site.url}/glossary#termset`,
    name: "Move East Procurement Glossary",
    description:
      "Definitions of key terms in China procurement, technology transfer, supply chain, compliance, and industrial verticals.",
    url: `${site.url}/glossary`,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${site.url}/glossary#termset`,
    })),
  } as const;
}

/** LocalBusiness schema — uno per ogni ufficio, da iniettare su /contact */
export function localBusinessSchemas() {
  return site.offices.map((o) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#office-${o.city.toLowerCase().replace(/\s+/g, "-")}`,
    name: `${site.name} — ${o.city}`,
    parentOrganization: { "@id": `${site.url}/#organization` },
    url: `${site.url}/contact`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: o.city,
      addressCountry: o.countryCode,
      ...("region" in o && o.region ? { addressRegion: o.region } : {}),
    },
    areaServed: [
      { "@type": "Continent", name: "Europe" },
      { "@type": "Continent", name: "Africa" },
      { "@type": "Continent", name: "Asia" },
    ],
  }));
}

/** Helper: serializza uno o più schemas in stringa safe per <script type="application/ld+json"> */
export function jsonLd(...schemas: Array<unknown>) {
  return JSON.stringify(schemas.filter(Boolean).length === 1 ? schemas[0] : schemas);
}
