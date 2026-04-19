/**
 * Case studies estesi — narrative dedicata + metriche verificate.
 * Al momento solo EDR (flagship). Altri casi verranno aggiunti via Payload collection "CaseStudies".
 */

export type CaseStudy = {
  slug: string;
  client: string;
  location: string;
  year: number;
  duration: string;
  sector: string;
  services: readonly string[]; // slugs
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  metrics: readonly { value: string; label: string }[];
  chapters: readonly {
    heading: string;
    body: string;
  }[];
  pullQuote: {
    text: string;
    attribution: string;
  };
  outcomes: readonly string[];
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
  };
};

export const caseStudies: Record<string, CaseStudy> = {
  "ethiopia-railway": {
    slug: "ethiopia-railway",
    client: "Ethiopia-Djibouti Railway (EDR)",
    location: "East Africa · 752.7 km",
    year: 2018,
    duration: "Ongoing since 2018",
    sector: "Railway & Infrastructure",
    services: ["sourcing", "supply-chain", "technology-transfer"],
    hero: {
      eyebrow: "Flagship case · $4B project",
      title: "Ethiopia-Djibouti Railway",
      subtitle:
        "Official outsourcing agent in China for a transnational railway spanning two countries, four provinces, and the largest East African trade corridor.",
    },
    metrics: [
      { value: "752.7 km", label: "Electrified railway — Addis Ababa to Djibouti port" },
      { value: "$4B", label: "Total project budget under Belt & Road Initiative" },
      { value: "0%", label: "Quality rejection rate on delivered components" },
      { value: "120+", label: "Local engineers trained on Chinese equipment" },
      { value: "4", label: "Countries coordinated (China, Ethiopia, Djibouti, Italy)" },
      { value: "100%", label: "Delivery continuity under COVID-19 conditions" },
    ],
    chapters: [
      {
        heading: "The brief",
        body: "In 2018 Move East was appointed the official outsourcing agent in China for the Ethiopia-Djibouti Railway — the first fully electrified transnational railway in Africa. The mandate covered procurement of rolling stock spare parts, signaling equipment, traction substations components, and maintenance tooling — all sourced from China Railway Construction Corporation (CRCC) and its tier-1 supply chain.",
      },
      {
        heading: "Why China, why Move East",
        body: "The EDR was financed and built by Chinese state-owned enterprises under the Belt & Road Initiative. Continuing to source critical components from China ensured technical compatibility, spare parts availability, and engineering continuity. Move East was selected because of our Shenzhen operational base, CICC institutional network, and ability to bridge Italian/English/Mandarin communication — bridging CRCC engineering teams with Ethiopian operators.",
      },
      {
        heading: "What we delivered",
        body: "Over the course of seven years of continuous operations, our team has sourced, inspected, and delivered spare parts shipments across all major technical subsystems: rolling stock (bogies, brakes, pantographs), signaling (CBTC components, trackside equipment), traction (transformers, converters), and depot tooling. Each shipment passed factory inspection, pre-shipment quality check, and customs clearance coordination.",
      },
      {
        heading: "Technology transfer",
        body: "Beyond procurement, Move East facilitated technology transfer: Chinese engineers deployed on-site in Addis Ababa for commissioning, troubleshooting, and training local Ethiopian engineers. Over 120 local technicians have been trained on Chinese equipment procedures, with bilingual documentation and SOPs delivered in Amharic and English.",
      },
      {
        heading: "Resilience under COVID-19",
        body: "During the 2020-2022 COVID-19 emergency, when most global supply chains failed, Move East maintained 100% delivery continuity for EDR. We coordinated emergency air freight, navigated China's strict export protocols, and pre-staged critical spare parts in our Shenzhen warehouse — ensuring the railway never stopped operation.",
      },
    ],
    pullQuote: {
      text: "Move East's on-the-ground presence in Shenzhen transformed what would have been a logistics nightmare into a predictable, reliable supply chain. Seven years in, we haven't had a single critical equipment outage tied to parts unavailability.",
      attribution: "EDR Operations Director (reference available on request)",
    },
    outcomes: [
      "Zero quality rejections over 7 years of continuous shipments",
      "100% delivery rate under COVID emergency conditions",
      "120+ local Ethiopian engineers trained on Chinese equipment",
      "First electrified transnational railway in Africa operating without interruption",
      "Established template for future China-Africa infrastructure supply chains",
    ],
    seo: {
      title: "Ethiopia-Djibouti Railway — $4B Case Study | Move East",
      description:
        "How Move East manages procurement and technology transfer for the Ethiopia-Djibouti Railway — $4B Belt & Road Initiative project, 752.7 km electrified corridor.",
      keywords: [
        "ethiopia djibouti railway procurement",
        "china africa railway project",
        "CRCC supply chain",
        "belt and road initiative case study",
        "east africa infrastructure procurement",
      ],
    },
  },
};

export const getCaseStudy = (slug: string) => caseStudies[slug];
