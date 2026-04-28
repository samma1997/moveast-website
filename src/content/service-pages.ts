/**
 * Service subpages — content 1:1 con service-*.html originali
 * (hero, blog preview, 5-step process track, FAQ featured + 3 articles)
 *
 * REGOLA: niente numeri specifici (% rejection, % delivery, ore exact response,
 * "X engineers trained") senza fonte. Niente brand di terzi citati come partner.
 */

import type { ReactNode } from "react";

export type ServiceHero = {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lede: string;
  blogCard: {
    kicker: string;
    title: string;
    meta: string;
    href: string;
    ariaLabel: string;
  };
};

export type ProcessStep = {
  label: string;
  metrics: readonly { val: string; lbl: string }[];
  href: string;
};

export type ProcessBlock = {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lede: string;
  steps: readonly ProcessStep[];
};

export type FaqArticle = {
  chip: string;
  title: string;
  meta: string;
  href: string;
};

export type FaqBlock = {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lede: string;
  ctaLabel: string;
  featured: {
    chip: string;
    title: string;
    meta: string;
    readLabel: string;
    href: string;
    tag: string;
  };
  articles: readonly FaqArticle[];
};

export type ServicePage = {
  hero: ServiceHero;
  process: ProcessBlock;
  faq: FaqBlock;
};

export const servicePages: Record<string, ServicePage> = {
  sourcing: {
    hero: {
      eyebrow: "Service 01 · Strategic Sourcing & Procurement",
      titlePre: "Strategic ",
      titleEm: "Sourcing",
      titlePost: " in China, run from the factory floor.",
      lede: "Move East Trading identifies, verifies, and contracts Chinese manufacturers on behalf of global buyers — with physical teams in Shenzhen, Hong Kong, Rome, and Addis Ababa. Backed by CICC Board membership, UNGM vendor status, and procurement operations for the $4 billion Ethiopia-Djibouti Railway.",
      blogCard: {
        kicker: "Pillar guide · Shenzhen",
        title: "How to choose a china sourcing agent — the full 2026 guide",
        meta: "Request a sourcing scoping call",
        href: "/blog/china-sourcing-agent",
        ariaLabel: "Read pillar guide",
      },
    },
    process: {
      eyebrow: "Our Process · 5 steps",
      titlePre: "From written ",
      titleEm: "brief",
      titlePost: " to signed contract.",
      lede: "Requirements brief, supplier shortlist, on-site factory audits, sampling, contract negotiation in Mandarin, quality control, and handover. Every scope is priced and documented — no “we will figure it out later”.",
      steps: [
        {
          label: "Step 1 · Requirements brief",
          metrics: [
            { val: "Written spec", lbl: "Product, market, volume, timeline, compliance requirements" },
            { val: "CE · MDR · FDA · GCC", lbl: "Compliance targets fixed before supplier outreach begins" },
          ],
          href: "/contact",
        },
        {
          label: "Step 2 · Supplier shortlist",
          metrics: [
            { val: "Shortlist", lbl: "Pre-qualified manufacturers from our direct Chinese network" },
            { val: "Spec · capacity · price", lbl: "Each candidate scored before audit" },
          ],
          href: "/contact",
        },
        {
          label: "Step 3 · On-site factory audit",
          metrics: [
            { val: "Pearl River Delta", lbl: "Physical audits across Guangdong, Jiangsu, Zhejiang, Shandong" },
            { val: "Photo + video", lbl: "Scored risk matrix — not a desk review" },
          ],
          href: "/contact",
        },
        {
          label: "Step 4 · Contract negotiation",
          metrics: [
            { val: "Mandarin", lbl: "Contracts drafted with international arbitration clauses" },
            { val: "1", lbl: "Buyer contract — Move East manages all upstream Chinese contracts" },
          ],
          href: "/contact",
        },
        {
          label: "EDR Railway · proof",
          metrics: [
            { val: "$4B", lbl: "Belt & Road programme, 752.7 km of rolling stock procurement" },
            { val: "Since 2018", lbl: "Official outsourcing agent in China for the Ethiopia-Djibouti Railway" },
          ],
          href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ · Strategic Sourcing China",
      titlePre: "Strategic sourcing ",
      titleEm: "questions",
      titlePost: " buyers ask us.",
      lede: "The recurring questions from European companies, African governments, EPC contractors, and distributors when they first scope a structured sourcing engagement in China.",
      ctaLabel: "Book a sourcing call",
      featured: {
        chip: "Q1 · Sourcing vs Alibaba",
        title: "Strategic sourcing in China is a structured procurement function — not a marketplace search. Move East delivers physical factory audits in Shenzhen and Guangdong, Mandarin-language contracts, third-party lab testing, and pre-shipment inspection — none of which Alibaba provides.",
        meta: "Supplier discovery · verification · negotiation · QC",
        readLabel: "Read the pillar guide",
        href: "/blog/china-sourcing-agent",
        tag: "EDR Railway · $4B reference",
      },
      articles: [
        {
          chip: "Q2 · Supplier verification",
          title: "Four parallel checks: SAIC/AIC business registry, export customs records, on-site factory audit by Move East engineers, and buyer reference checks.",
          meta: "Photos, video walkthroughs, scored risk matrix",
          href: "/contact",
        },
        {
          chip: "Q4 · Lead time",
          title: "Lead time depends on category and certifications required. Standard categories move faster; highly regulated products such as medical devices, railway, and energy storage require more upfront verification.",
          meta: "Verified manufacturers · capacity & price band",
          href: "/contact",
        },
        {
          chip: "Q6 · IP protection",
          title: "Three layers: NNN clauses enforceable in Chinese courts, tooling owned by the buyer or held in escrow, and segmented release of technical drawings to audited suppliers only.",
          meta: "Mandarin contracts · Chinese trademarks & patents",
          href: "/services/technology-transfer",
        },
      ],
    },
  },

  "technology-transfer": {
    hero: {
      eyebrow: "Service 02 · Technology Transfer & Project Integration",
      titlePre: "Technology ",
      titleEm: "Transfer",
      titlePost: " from China, structured as a service.",
      lede: "Move East Trading delivers technology transfer china programmes from Shenzhen — specification alignment, IP governance, regulatory compliance, and on-site training — so Chinese industrial technology deploys safely into European, African, and Gulf projects. Built on the team that runs procurement in China for the Ethiopia-Djibouti Railway.",
      blogCard: {
        kicker: "EDR Railway · Belt & Road",
        title: "Technology transfer for the Ethiopia-Djibouti Railway — engineer training, bilingual documentation, on-site commissioning",
        meta: "Plan a technology transfer programme",
        href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        ariaLabel: "Read the EDR case study",
      },
    },
    process: {
      eyebrow: "Our Process · 5 steps",
      titlePre: "From scouting to ",
      titleEm: "commissioning",
      titlePost: ", documented.",
      lede: "Technology scouting, specification alignment, IP and legal structure, regulatory compliance path, FAT/SAT, training, and after-sales. Priced, documented, delivered against milestones — not a by-product of procurement.",
      steps: [
        {
          label: "Step 1 · Technology scouting",
          metrics: [
            { val: "Pearl River Delta", lbl: "Chinese OEMs mapped within reach of our Shenzhen base" },
            { val: "Feasibility", lbl: "Technology readiness, export-control, licensing, regulatory view" },
          ],
          href: "/contact",
        },
        {
          label: "Step 2 · Specification alignment",
          metrics: [
            { val: "Spec lock", lbl: "Tolerances, protocols & acceptance criteria aligned upfront" },
            { val: "ZH · EN · IT", lbl: "Documentation in the languages the engineers actually speak" },
          ],
          href: "/contact",
        },
        {
          label: "Step 3 · IP & legal structure",
          metrics: [
            { val: "NNN", lbl: "Non-use, Non-disclosure, Non-circumvention — enforceable in China" },
            { val: "CN + DEST", lbl: "Patent & trademark filings before drawings are shared" },
          ],
          href: "/contact",
        },
        {
          label: "Step 4 · Regulatory compliance",
          metrics: [
            { val: "CE · MDR · FDA · GCC", lbl: "Compliance paths mapped per destination market" },
            { val: "SGS · TUV · Intertek", lbl: "Third-party conformity assessment coordinated" },
          ],
          href: "/contact",
        },
        {
          label: "EDR Railway · proof",
          metrics: [
            { val: "$4B", lbl: "Belt & Road programme, transferred and operating since 2018" },
            { val: "Bilingual", lbl: "Engineer training and SOPs delivered in Amharic and English" },
          ],
          href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ · Technology Transfer China",
      titlePre: "Transfer ",
      titleEm: "questions",
      titlePost: " from engineering-led buyers.",
      lede: "The recurring questions from European industrial groups, African governments, EPC contractors, and multilateral agencies scoping a structured technology transfer from Shenzhen.",
      ctaLabel: "Plan a transfer programme",
      featured: {
        chip: "Q1 · What is technology transfer?",
        title: "The managed process of moving Chinese industrial technology — machinery, production lines, system specifications, and operational know-how — into the buyer's environment with full regulatory, IP, and operational governance. It explicitly includes specification alignment, IP licensing, compliance certification, and engineer training.",
        meta: "Shenzhen · structured as a service, not a by-product",
        readLabel: "Read the EDR case study",
        href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        tag: "EDR Railway · Belt & Road · $4B",
      },
      articles: [
        {
          chip: "Q2 · Why Shenzhen",
          title: "The largest concentration of advanced manufacturing in the world is within reach of our Shenzhen office — mobility, energy storage, medical devices, and industrial automation OEMs all in the same supply ecosystem.",
          meta: "Mobility · energy storage · medical · industrial automation",
          href: "/contact",
        },
        {
          chip: "Q4 · Certifications",
          title: "CE (EU), MDR (medical), FDA (US), ISO, GCC (Gulf), and national approvals for African markets — technical files assembled to destination standard, not translated from Chinese templates.",
          meta: "Coordinated with SGS, TUV, Intertek, Bureau Veritas",
          href: "/contact",
        },
        {
          chip: "Q6 · Engineer training",
          title: "Chinese OEM engineers onboard the buyer's team in Shenzhen, then travel to destination for commissioning. Materials in English, Italian, Mandarin — Amharic or Arabic where relevant.",
          meta: "EDR Railway: bilingual training and SOPs delivered to Ethiopian operators",
          href: "/contact",
        },
      ],
    },
  },

  "supply-chain": {
    hero: {
      eyebrow: "Service 03 · Trading & Supply Chain Management",
      titlePre: "Supply Chain ",
      titleEm: "Management",
      titlePost: " from China, end-to-end.",
      lede: "Move East Trading runs supply chain management china from Shenzhen — one of the world's busiest container ports — coordinating logistics, customs, compliance, and delivery into Europe, Africa, and the Gulf. One contract for the buyer, one operation for the project.",
      blogCard: {
        kicker: "EDR Railway · Belt & Road",
        title: "Continuous procurement and logistics for the Ethiopia-Djibouti Railway since 2018",
        meta: "Map your supply chain from Shenzhen",
        href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        ariaLabel: "Read EDR case study",
      },
    },
    process: {
      eyebrow: "Our Process · 5 steps",
      titlePre: "From Chinese PO to ",
      titleEm: "in-market",
      titlePost: " delivery.",
      lede: "PO management, quality control, export documentation, multi-modal freight, customs clearance at origin and destination, trade finance via Hong Kong, and last-mile delivery. One operator, four offices, three continents.",
      steps: [
        {
          label: "Step 1 · Production oversight & QC",
          metrics: [
            { val: "3 gates", lbl: "Pre-production, in-line, pre-shipment inspection from Shenzhen" },
            { val: "Photo · video", lbl: "Documentation released before dispatch" },
          ],
          href: "/contact",
        },
        {
          label: "Step 2 · Multi-modal freight",
          metrics: [
            { val: "Sea · Rail · Air", lbl: "Yantian, Shekou, HKG, SZX — China-Europe Railway Express" },
            { val: "Duisburg · Madrid · Milan", lbl: "European rail hubs from Chengdu, Chongqing, Yiwu" },
          ],
          href: "/contact",
        },
        {
          label: "Step 3 · Customs clearance",
          metrics: [
            { val: "Rome", lbl: "EU customs — HS classification, anti-dumping, VAT positioning" },
            { val: "Addis Ababa", lbl: "African customs, local duty, Horn of Africa last-mile" },
          ],
          href: "/contact",
        },
        {
          label: "Step 4 · Trade finance · Hong Kong",
          metrics: [
            { val: "USD · L/C", lbl: "Settlement, letters of credit, escrow via Hong Kong office" },
            { val: "Government", lbl: "Structures suited to government and multilateral buyers" },
          ],
          href: "/contact",
        },
        {
          label: "EDR Railway · proof",
          metrics: [
            { val: "Since 2018", lbl: "Continuous procurement and logistics into Ethiopia" },
            { val: "Crisis-tested", lbl: "Operating through the 2020-2022 disruption" },
          ],
          href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ · Supply Chain Management China",
      titlePre: "Logistics ",
      titleEm: "questions",
      titlePost: " EPC and distributor buyers ask us.",
      lede: "The recurring questions from European companies, African governments, EPC contractors, and distributors when they move from single-category sourcing to a full end-to-end supply chain programme.",
      ctaLabel: "Request a scoping call",
      featured: {
        chip: "Q1 · End-to-end scope",
        title: "PO management with Chinese manufacturers, production oversight, QC, export documentation, freight across sea/air/rail, customs at origin and destination, trade finance, and in-market delivery. One buyer contract — upstream Chinese contracts, freight forwarders, and customs brokers coordinated by Shenzhen and Hong Kong.",
        meta: "Europe · Africa · Gulf",
        readLabel: "Read the EDR reference",
        href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        tag: "Shenzhen Yantian · major container gateway",
      },
      articles: [
        {
          chip: "Q2 · China-Europe routes",
          title: "Sea from Yantian, Shekou, Hong Kong to Rotterdam, Antwerp, Genoa, Gioia Tauro; rail from Chengdu, Chongqing, Yiwu to Duisburg, Madrid, Milan; air from SZX or HKG for time-critical cargo.",
          meta: "Route selection driven by cargo value, weight, time, Incoterms",
          href: "/contact",
        },
        {
          chip: "Q3 · China-Africa corridor",
          title: "Sea from Shenzhen to Djibouti, Mombasa, Lagos, Durban; inland transport with local partners. Addis Ababa office handles customs, local duty, and Horn-of-Africa last-mile delivery.",
          meta: "China-Africa trade corridor — structured end-to-end",
          href: "/contact",
        },
        {
          chip: "Q6 · Trade finance",
          title: "USD settlement, letters of credit, and escrow via the Hong Kong office — including for government and multilateral buyers under UN procurement frameworks. Structure agreed at contract stage, not mid-shipment.",
          meta: "Forex and payment-term risk priced into the engagement",
          href: "/contact",
        },
      ],
    },
  },
};

// suppress unused-type warning in flat config
export type _SvcPagePlaceholder = ReactNode;
