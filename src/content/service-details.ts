/**
 * Dettagli per le sotto-pagine /services/[slug].
 * Keyed by slug. Struttura: processo, features, FAQ — tutti data-driven.
 */

export type Step = { n: string; title: string; desc: string };
export type Feature = { title: string; desc: string };
export type Faq = { question: string; answer: string };

export type ServiceDetail = {
  processTitle: string;
  processLede: string;
  steps: Step[];
  featuresTitle: string;
  featuresLede: string;
  features: Feature[];
  faqs: Faq[];
  relatedSectors: string[]; // slugs
};

export const serviceDetails: Record<string, ServiceDetail> = {
  sourcing: {
    processTitle: "How we source",
    processLede:
      "A transparent five-step process from opportunity brief to contract execution — backed by on-the-ground Shenzhen operations.",
    steps: [
      { n: "01", title: "Brief", desc: "Discovery call, technical requirements, target markets, compliance needs." },
      { n: "02", title: "Shortlist", desc: "Qualified supplier pool from our verified Chinese manufacturer network." },
      { n: "03", title: "Audit", desc: "Factory inspections in Shenzhen, Guangdong, Zhejiang — quality + compliance." },
      { n: "04", title: "Negotiation", desc: "Pricing, IP clauses, quality SLAs, delivery schedules managed on your behalf." },
      { n: "05", title: "Contract", desc: "Bilingual agreements, payment milestones, dispute resolution — EU-enforceable." },
    ],
    featuresTitle: "What you get",
    featuresLede: "Every engagement includes end-to-end documentation and direct Shenzhen team access.",
    features: [
      { title: "Verified supplier network", desc: "Access to pre-audited manufacturers across 4 key provinces (Guangdong, Zhejiang, Jiangsu, Fujian)." },
      { title: "On-site factory audits", desc: "Our Shenzhen team visits factories in person — no reliance on photos or video." },
      { title: "Compliance preflight", desc: "CE, FDA, MDR, RoHS screening before contract — avoid rework and rejections." },
      { title: "Bilingual contracts", desc: "IT/EN and ZH versions signed, EU-enforceable with arbitration clause." },
      { title: "Price benchmarking", desc: "Multi-supplier quotes with cost breakdown (materials, labor, margin, logistics)." },
      { title: "Single point of contact", desc: "One English/Italian-speaking project manager throughout the engagement." },
    ],
    faqs: [
      {
        question: "How do you choose suppliers?",
        answer: "We maintain a proprietary network of ~200 pre-qualified Chinese manufacturers across key sectors. For each brief we shortlist 3–5, conduct factory audits, verify certifications, and benchmark pricing. Only then we present options.",
      },
      {
        question: "What are your fees?",
        answer: "Either commission-based (5–12% of contract value, scale-dependent) or retainer (monthly fee for continuous sourcing). Discovery calls and initial shortlist are always free.",
      },
      {
        question: "Do you handle logistics and customs?",
        answer: "Yes — supply chain management is a separate service line we often bundle. EXW, FOB, CIF, or DDP terms handled end-to-end from Shenzhen port.",
      },
      {
        question: "How long does the sourcing process take?",
        answer: "From brief to signed contract: typically 4–8 weeks. Complex products with certification requirements (medical, aerospace) can take 10–14 weeks.",
      },
      {
        question: "What happens if there's a quality issue post-delivery?",
        answer: "All contracts include quality SLAs with remedies: replacement, credit, or refund. Our on-site team handles disputes and coordinates with the supplier until resolution.",
      },
    ],
    relatedSectors: ["mobility", "industrial", "medical"],
  },

  "technology-transfer": {
    processTitle: "How we transfer technology",
    processLede:
      "Structured approach to bringing Chinese industrial innovation into international markets — spec alignment, local assembly, and regulatory compliance.",
    steps: [
      { n: "01", title: "Scope", desc: "Technology mapping, target market requirements, IP framework." },
      { n: "02", title: "Partner", desc: "Chinese tech owner qualification + host country integrator selection." },
      { n: "03", title: "Alignment", desc: "Spec translation, regulatory gap analysis, local adaptation roadmap." },
      { n: "04", title: "Pilot", desc: "Proof-of-concept deployment with on-site Chinese engineer support." },
      { n: "05", title: "Scale", desc: "Training, documentation handover, full production rollout." },
    ],
    featuresTitle: "What the service covers",
    featuresLede:
      "Not just technology — we move know-how, documentation, and production capability with auditable milestones.",
    features: [
      { title: "IP framework", desc: "Licensing agreements, royalty models, patent due diligence — EU and Chinese law." },
      { title: "Regulatory bridge", desc: "CE/FDA/UKCA mapping from Chinese GB standards — compliance roadmap." },
      { title: "Engineer deployment", desc: "Chinese technical staff dispatched to destination country for pilot + training." },
      { title: "Local manufacturing support", desc: "Joint-venture structures, BOT schemes, local assembly line setup." },
      { title: "Documentation translation", desc: "Technical manuals, training materials, SOPs — IT/EN/ZH." },
      { title: "Ongoing technical support", desc: "Retainer model for post-deployment updates, upgrades, and escalations." },
    ],
    faqs: [
      {
        question: "What kind of technologies have you transferred?",
        answer: "Railway systems (Ethiopia-Djibouti), solar panel manufacturing lines, medical imaging equipment, automation cells, and BESS systems. Our track record spans mobility, energy, and industrial sectors.",
      },
      {
        question: "How do you handle IP protection?",
        answer: "We structure agreements with explicit IP clauses (licensing vs. co-development vs. JV), dual-jurisdiction arbitration (HKIAC / CIETAC), and staged knowledge transfer to protect both sides.",
      },
      {
        question: "What's the typical timeline for a tech transfer project?",
        answer: "6–18 months depending on complexity. Pilot phase is typically 3–4 months, full production rollout another 6–12.",
      },
      {
        question: "Do you support local assembly or only export?",
        answer: "Both. Many of our clients (especially in Africa) prefer local assembly for cost reasons and local content rules — we manage the complete BOT (Build-Operate-Transfer) process.",
      },
      {
        question: "What's the minimum project size?",
        answer: "We focus on projects with $500k+ transferable technology value. Below that, a sourcing engagement is usually more appropriate.",
      },
    ],
    relatedSectors: ["mobility", "energy", "industrial"],
  },

  "supply-chain": {
    processTitle: "How we manage supply chains",
    processLede:
      "End-to-end coordination from Shenzhen port — the world's 4th busiest — across logistics, customs, quality, and delivery.",
    steps: [
      { n: "01", title: "Plan", desc: "Demand forecasting, supplier capacity matching, route optimization." },
      { n: "02", title: "Consolidate", desc: "Multi-supplier cargo consolidation in our Shenzhen warehouse." },
      { n: "03", title: "Inspect", desc: "Pre-shipment quality check, documentation review, packaging verification." },
      { n: "04", title: "Ship", desc: "Sea/air freight booking, customs clearance, real-time tracking." },
      { n: "05", title: "Deliver", desc: "Last-mile coordination, POD management, invoice reconciliation." },
    ],
    featuresTitle: "Capabilities",
    featuresLede: "Logistics isn't an afterthought — it's how we protect margin and reliability for our clients.",
    features: [
      { title: "Shenzhen port access", desc: "Direct relationships with Yantian, Shekou, Hong Kong ports for priority slots." },
      { title: "Multi-supplier consolidation", desc: "Warehouse in Shenzhen consolidates orders from multiple Chinese vendors into single shipments." },
      { title: "All Incoterms supported", desc: "EXW, FCA, FOB, CIF, CIP, DDP — we adapt to your preferred risk/cost profile." },
      { title: "Real-time tracking", desc: "Shipment visibility dashboard, milestone notifications, ETA updates." },
      { title: "Customs + compliance", desc: "HS code classification, duty optimization, FTA usage (China-EU, China-AfCFTA)." },
      { title: "Quality gate at dispatch", desc: "Pre-shipment inspection (PSI) on every shipment, photos + report before release." },
    ],
    faqs: [
      {
        question: "Can you manage shipments under different Incoterms?",
        answer: "Yes — from EXW (you take full risk from supplier) to DDP (we deliver to your door). Most European clients prefer FOB Shenzhen or CIF destination.",
      },
      {
        question: "How do you handle customs clearance?",
        answer: "At origin: export customs via our Shenzhen forwarding partners. At destination: coordination with your broker or use of our network in Italy (Rome), Ethiopia (Addis), and other markets.",
      },
      {
        question: "What's your pre-shipment inspection process?",
        answer: "On every shipment we do: quantity count, quality sample check (AQL 2.5 standard), packaging verification, and photo documentation. Report issued within 48h before dispatch.",
      },
      {
        question: "Do you offer warehousing in destination countries?",
        answer: "Through partner networks in Italy and Ethiopia. For other markets we coordinate with 3PL providers on your behalf.",
      },
      {
        question: "How do you handle damaged or lost shipments?",
        answer: "All shipments are insured (cargo insurance at 110% CIF value). Claims are filed on your behalf; reimbursement typically within 4–8 weeks.",
      },
    ],
    relatedSectors: ["energy", "medical", "industrial"],
  },
};
