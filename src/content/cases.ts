/**
 * Case studies — metric cards usate in Home (Results) + aggregate page /case-studies.
 * Al momento statici; il case study EDR ha pagina dedicata con narrativa estesa.
 */

export type CaseCard = {
  slug: string;
  client: string;
  short: string;
  href?: string;
  metrics: readonly { value: string; label: string }[];
};

export const cases: readonly CaseCard[] = [
  {
    slug: "ethiopia-railway",
    client: "Ethiopia-Djibouti Railway",
    short: "Official outsourcing agent in China",
    href: "/case-studies/ethiopia-railway",
    metrics: [
      { value: "752.7 km", label: "Railway length — Addis Ababa to Djibouti" },
      { value: "0%", label: "Quality rejection rate on delivered components" },
    ],
  },
  {
    slug: "covid-medical",
    client: "COVID Medical Supply",
    short: "Emergency procurement for EU partners",
    metrics: [
      { value: "100%", label: "Delivery rate under emergency conditions" },
      { value: "48h", label: "Average response time to European partners" },
    ],
  },
  {
    slug: "solar-procurement",
    client: "Solar Panel Procurement",
    short: "Tier 1 manufacturers, full supply chain",
    metrics: [
      { value: "5 MW", label: "Total capacity sourced from Tier 1 manufacturers" },
      { value: "30%", label: "Cost reduction vs European suppliers" },
    ],
  },
  {
    slug: "byd-transfer",
    client: "BYD Technology Transfer",
    short: "Production lines & local training",
    metrics: [
      { value: "3", label: "Production lines transferred to East Africa" },
      { value: "120+", label: "Local engineers trained on Chinese equipment" },
    ],
  },
  {
    slug: "cicc-industrial",
    client: "CICC Industrial Mission",
    short: "Multi-country industrial connect",
    metrics: [
      { value: "40+", label: "Enterprises connected across Italy and China" },
      { value: "4", label: "Countries involved in procurement operations" },
    ],
  },
] as const;

export const featuredCase = cases[0];
