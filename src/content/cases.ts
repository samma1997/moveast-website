/**
 * Case studies — sezione Results (home + services).
 * SOLO progetti documentati. NIENTE testi inventati.
 */

export type CaseCard = {
  slug: string;
  client: string;
  short: string;
  href?: string;
  image?: string;
  metrics: readonly { value: string; label: string }[];
};

export const cases: readonly CaseCard[] = [
  {
    slug: "ethiopia-railway",
    client: "Ethiopia-Djibouti Railway",
    short: "Official outsourcing agent in China",
    href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
    image: "/images/hero-edr-railway.webp",
    metrics: [
      { value: "752.7 km", label: "Electrified railway — Addis Ababa to Djibouti" },
      { value: "$4B", label: "Belt & Road Initiative project — operating since 2018" },
    ],
  },
] as const;

export const featuredCase = cases[0];
