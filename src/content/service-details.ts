/**
 * Dettagli per le sotto-pagine /services/[slug].
 * Keyed by slug. Struttura: processo, features, FAQ — tutti data-driven.
 *
 * REGOLA: niente numeri specifici (% commission, $ minimum, settimane esatte,
 * "~200 supplier") senza fonte. Niente claim straordinari ("0% rejection").
 * Vendere processo e capability, non promesse non sostenibili.
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
      { n: "03", title: "Audit", desc: "Factory inspections in Shenzhen, Guangdong, Zhejiang — quality and compliance." },
      { n: "04", title: "Negotiation", desc: "Pricing, IP clauses, quality SLAs, delivery schedules managed on your behalf." },
      { n: "05", title: "Contract", desc: "Bilingual agreements, payment milestones, dispute resolution." },
    ],
    featuresTitle: "What you get",
    featuresLede: "Every engagement includes end-to-end documentation and direct Shenzhen team access.",
    features: [
      { title: "Verified supplier network", desc: "Pre-audited manufacturers across the Pearl River Delta and other key Chinese provinces." },
      { title: "On-site factory audits", desc: "Our Shenzhen team visits factories in person — no reliance on photos or video." },
      { title: "Compliance preflight", desc: "CE, FDA, MDR, RoHS screening before contract — avoid rework and rejections." },
      { title: "Bilingual contracts", desc: "EN and ZH versions, with arbitration clauses suited to international enforcement." },
      { title: "Price benchmarking", desc: "Multi-supplier quotes with cost breakdown (materials, labor, margin, logistics)." },
      { title: "Single point of contact", desc: "One English/Italian-speaking project manager throughout the engagement." },
    ],
    faqs: [
      {
        question: "How do you choose suppliers?",
        answer: "From a network of pre-qualified Chinese manufacturers, we shortlist a small group for each brief, conduct factory audits, verify certifications, and benchmark pricing before presenting options.",
      },
      {
        question: "What are your fees?",
        answer: "Fees depend on scope and complexity — typically commission-based for one-off procurement, or a retainer for ongoing sourcing. Discovery calls and initial shortlists are free.",
      },
      {
        question: "Do you handle logistics and customs?",
        answer: "Yes — supply chain management is a separate service line we often bundle. EXW, FOB, CIF, or DDP terms handled end-to-end from Shenzhen.",
      },
      {
        question: "How long does the sourcing process take?",
        answer: "Timing depends on the technical complexity, certifications required, and the number of suppliers to qualify. We commit to a project plan during the brief and update milestones weekly.",
      },
      {
        question: "What happens if there is a quality issue post-delivery?",
        answer: "All contracts include quality SLAs with remedies — replacement, credit, or refund. Our on-site team handles disputes and coordinates with the supplier until resolution.",
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
      { n: "02", title: "Partner", desc: "Chinese technology owner qualification and host-country integrator selection." },
      { n: "03", title: "Alignment", desc: "Spec translation, regulatory gap analysis, local adaptation roadmap." },
      { n: "04", title: "Pilot", desc: "Proof-of-concept deployment with on-site Chinese engineer support." },
      { n: "05", title: "Scale", desc: "Training, documentation handover, full production rollout." },
    ],
    featuresTitle: "What the service covers",
    featuresLede:
      "Not just technology — we move know-how, documentation, and production capability with auditable milestones.",
    features: [
      { title: "IP framework", desc: "Licensing agreements, royalty models, and patent due diligence under EU and Chinese law." },
      { title: "Regulatory bridge", desc: "CE/FDA/UKCA mapping from Chinese GB standards — compliance roadmap." },
      { title: "Engineer deployment", desc: "Chinese technical staff dispatched to the destination country for pilot and training." },
      { title: "Local manufacturing support", desc: "Joint-venture structures, BOT schemes, local assembly line setup." },
      { title: "Documentation translation", desc: "Technical manuals, training materials, SOPs — IT/EN/ZH." },
      { title: "Ongoing technical support", desc: "Retainer model for post-deployment updates, upgrades, and escalations." },
    ],
    faqs: [
      {
        question: "What kind of technology transfer have you delivered?",
        answer: "Our flagship case is the Ethiopia-Djibouti Railway, where we have facilitated technology transfer from Chinese rail OEMs to Ethiopian operators since 2018, including engineer deployment, on-site training, and bilingual documentation.",
      },
      {
        question: "How do you handle IP protection?",
        answer: "We structure agreements with explicit IP clauses (licensing vs. co-development vs. JV), dual-jurisdiction arbitration (HKIAC / CIETAC), and staged knowledge transfer to protect both sides.",
      },
      {
        question: "What is a typical timeline for a tech transfer project?",
        answer: "Timelines depend on complexity, regulatory requirements, and the scope of local assembly. We define and commit a project plan during the scoping phase.",
      },
      {
        question: "Do you support local assembly or only export?",
        answer: "Both. Many clients — especially in Africa — prefer local assembly for cost and local-content reasons. We manage the complete Build-Operate-Transfer process where required.",
      },
      {
        question: "Is there a typical project size?",
        answer: "Technology transfer engagements typically involve a meaningful capital commitment from the client side. For smaller scopes, a sourcing engagement is usually more appropriate — we will tell you which fits best during the discovery call.",
      },
    ],
    relatedSectors: ["mobility", "energy", "industrial"],
  },

  "supply-chain": {
    processTitle: "How we manage supply chains",
    processLede:
      "End-to-end coordination from Shenzhen — one of the world's busiest container ports — across logistics, customs, quality, and delivery.",
    steps: [
      { n: "01", title: "Plan", desc: "Demand forecasting, supplier capacity matching, route optimization." },
      { n: "02", title: "Consolidate", desc: "Multi-supplier cargo consolidation through our Shenzhen operations." },
      { n: "03", title: "Inspect", desc: "Pre-shipment quality check, documentation review, packaging verification." },
      { n: "04", title: "Ship", desc: "Sea or air freight booking, customs clearance, real-time tracking." },
      { n: "05", title: "Deliver", desc: "Last-mile coordination, POD management, invoice reconciliation." },
    ],
    featuresTitle: "Capabilities",
    featuresLede: "Logistics isn't an afterthought — it's how we protect margin and reliability for our clients.",
    features: [
      { title: "Shenzhen port access", desc: "Operational presence near Yantian, Shekou, and Hong Kong gateways." },
      { title: "Multi-supplier consolidation", desc: "Orders from multiple Chinese vendors consolidated into single shipments." },
      { title: "All Incoterms supported", desc: "EXW, FCA, FOB, CIF, CIP, DDP — we adapt to your preferred risk/cost profile." },
      { title: "Real-time tracking", desc: "Shipment visibility dashboard, milestone notifications, ETA updates." },
      { title: "Customs + compliance", desc: "HS code classification, duty optimization, FTA usage where applicable." },
      { title: "Quality gate at dispatch", desc: "Pre-shipment inspection on every shipment, with photo documentation and report before release." },
    ],
    faqs: [
      {
        question: "Can you manage shipments under different Incoterms?",
        answer: "Yes — from EXW (you take full risk from the supplier) to DDP (we deliver to your door). Most European clients prefer FOB Shenzhen or CIF destination.",
      },
      {
        question: "How do you handle customs clearance?",
        answer: "At origin: export customs via our Shenzhen forwarding partners. At destination: coordination with your broker, or via our network in Italy (Rome), Ethiopia (Addis Ababa), and other markets.",
      },
      {
        question: "What is your pre-shipment inspection process?",
        answer: "Quantity count, quality sample check, packaging verification, and photo documentation, with a report issued before dispatch.",
      },
      {
        question: "Do you offer warehousing in destination countries?",
        answer: "Through partner networks in Italy and Ethiopia. For other markets we coordinate with 3PL providers on your behalf.",
      },
      {
        question: "How do you handle damaged or lost shipments?",
        answer: "All shipments are covered by cargo insurance. Claims are filed on your behalf and we coordinate the claim process through to reimbursement.",
      },
    ],
    relatedSectors: ["energy", "medical", "industrial"],
  },
};
