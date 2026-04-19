/**
 * Dettagli per le sotto-pagine /sectors/[slug].
 * Struttura parallela a service-details ma con "sub-areas" invece di process steps.
 */

export type SubArea = { title: string; desc: string };
export type Faq = { question: string; answer: string };
export type SectorDetail = {
  areasTitle: string;
  areasLede: string;
  subAreas: SubArea[];
  capabilitiesTitle: string;
  capabilitiesLede: string;
  capabilities: SubArea[];
  faqs: Faq[];
  relatedServices: string[]; // slugs
};

export const sectorDetails: Record<string, SectorDetail> = {
  mobility: {
    areasTitle: "Sub-areas we cover",
    areasLede:
      "From heavy rail infrastructure to last-mile urban mobility — Move East operates across the full mobility spectrum.",
    subAreas: [
      { title: "Railway systems", desc: "Rolling stock, signaling, power substations — flagship: Ethiopia-Djibouti Railway." },
      { title: "Electric vehicles", desc: "Commercial EVs, e-buses, charging infrastructure components." },
      { title: "Drones & UAS", desc: "Industrial drones, survey platforms, autonomous aerial systems." },
      { title: "Urban mobility", desc: "BRT systems, smart traffic lights, IoT transit infrastructure." },
    ],
    capabilitiesTitle: "What we bring to mobility projects",
    capabilitiesLede:
      "Our Shenzhen proximity to CRRC, BYD, Hikvision, and DJI gives clients direct access to the world's largest mobility manufacturing base.",
    capabilities: [
      { title: "Tier-1 manufacturer access", desc: "Direct relationships with CRRC (railway), BYD (EV), CATL (batteries), DJI (drones)." },
      { title: "EU homologation support", desc: "CE marking, TSI compliance, R&TTE, RED — coordination with notified bodies." },
      { title: "Spare parts continuity", desc: "15-year parts availability guarantees on procured equipment." },
      { title: "Financing introduction", desc: "Network of Chinese export-credit banks (Exim Bank, CDB) for infrastructure deals." },
    ],
    faqs: [
      {
        question: "Which railway components have you sourced?",
        answer: "Signaling systems, traction transformers, overhead catenary, rolling stock, and maintenance equipment for the Ethiopia-Djibouti Railway (752.7 km, $4B project, operational since 2018).",
      },
      {
        question: "Can you source from specific Chinese brands like CRRC or BYD?",
        answer: "Yes — we have direct commercial relationships with CRRC (via CICC network) and BYD (via multiple factory visits and strategic meetings). We facilitate RFQs, contracts, and after-sales.",
      },
      {
        question: "How do you handle EU homologation for Chinese EVs?",
        answer: "We coordinate with Chinese manufacturers and EU notified bodies (TÜV, DEKRA) for CE marking, ECE R10 EMC, R100 battery safety, and WVTA approvals. Typically 6–12 months from engineering freeze.",
      },
      {
        question: "What's your experience with drones?",
        answer: "Industrial and mapping drones (DJI Enterprise, Autel) for survey, inspection, agriculture — sourced and shipped to EU and African operators with EASA/CAA compliance documentation.",
      },
    ],
    relatedServices: ["sourcing", "technology-transfer", "supply-chain"],
  },

  energy: {
    areasTitle: "Sub-areas we cover",
    areasLede:
      "Renewable generation + storage. China dominates this supply chain — we channel it.",
    subAreas: [
      { title: "Solar PV modules", desc: "Tier-1 monocrystalline, TOPCon, HJT from JinkoSolar, LONGi, Trina, JA Solar." },
      { title: "Wind components", desc: "Towers, blades, gearboxes, converters — from leading Chinese wind OEMs." },
      { title: "BESS (battery storage)", desc: "Utility-scale and C&I battery energy storage systems with LFP chemistry." },
      { title: "Inverters + BoS", desc: "String, central, hybrid inverters + balance-of-system components." },
    ],
    capabilitiesTitle: "Why China for renewables",
    capabilitiesLede:
      "Eight of the top-10 solar manufacturers worldwide, six of the top-10 battery makers, and the largest wind turbine factory — all within our supply chain radius.",
    capabilities: [
      { title: "Tier-1 module selection", desc: "Bankable modules with PID-free certification, 25-year linear warranty." },
      { title: "LCOE optimization", desc: "Multi-scenario pricing (module + inverter + BoS) to hit target LCOE for solar projects." },
      { title: "BESS system engineering", desc: "From 100kWh C&I to 100MWh utility — cell-to-pack, pack-to-rack optimization." },
      { title: "End-to-end project logistics", desc: "Container consolidation, customs, insurance for 5+ MW solar project shipments." },
    ],
    faqs: [
      {
        question: "Which solar brands do you source?",
        answer: "JinkoSolar, LONGi, Trina, JA Solar, Canadian Solar, Risen Energy — all Tier-1 bankable manufacturers. We verify IEC 61215/61730 certification and BNEF Tier-1 status.",
      },
      {
        question: "How do you quote BESS (battery storage) projects?",
        answer: "We break down quotes into cells, BMS, PCS, containers, EMS, and integration. Typical LFP BESS pricing range: $100–180/kWh DC, $180–280/kWh AC (2026).",
      },
      {
        question: "Do you handle tariff avoidance strategies for EU/US markets?",
        answer: "We structure shipments compliant with UFLPA (US) and EU solar tariff rules. For US: transhipment through Southeast Asia suppliers we qualify. For EU: direct Chinese import is currently duty-free.",
      },
      {
        question: "What wind components can you source?",
        answer: "Towers (Chinese Tier-1 like Titan Wind, Shandong Iraeta), blades (LM/Aeolon), and complete gearbox+converter packages. We typically do not source full turbines due to local-content rules in most markets.",
      },
    ],
    relatedServices: ["sourcing", "supply-chain"],
  },

  medical: {
    areasTitle: "Sub-areas we cover",
    areasLede:
      "CE/MDR/FDA-compliant medical devices from certified Chinese manufacturers — the largest medical supply base outside the US.",
    subAreas: [
      { title: "Diagnostic imaging", desc: "Ultrasound, X-ray, CT — Mindray, Neusoft, United Imaging." },
      { title: "Hospital equipment", desc: "Patient monitors, infusion pumps, defibrillators, surgical tables." },
      { title: "IVD & lab", desc: "Chemistry analyzers, hematology, molecular diagnostics (PCR)." },
      { title: "PPE & consumables", desc: "Medical-grade gloves, masks, syringes — EN/ISO compliant." },
    ],
    capabilitiesTitle: "Regulatory + supply reliability",
    capabilitiesLede:
      "The medical sector is our most regulated — we prefilter for MDR-ready suppliers only.",
    capabilities: [
      { title: "MDR/CE pre-qualification", desc: "Only MDR-ready manufacturers in our network — we verify DOC, UDI, PMS procedures." },
      { title: "Traceability on delivery", desc: "Batch-level UDI documentation attached to every shipment." },
      { title: "Emergency response", desc: "Proven during COVID-19: 100% delivery rate under crisis conditions." },
      { title: "ECREP / UK RP coordination", desc: "We introduce to European Authorized Reps and UK Responsible Persons for market access." },
    ],
    faqs: [
      {
        question: "Are your medical suppliers MDR-compliant?",
        answer: "All suppliers in our active medical network have MDR technical documentation ready (or are actively compliant per 2021/745). We verify certificate validity, UDI-DI, and PMS procedures before recommending.",
      },
      {
        question: "How do you handle ECREP (European Authorized Representative)?",
        answer: "For clients without existing ECREP relationships, we introduce to established firms (MDSS, Qserve, Obelis). We don't act as ECREP ourselves — it's a conflict with our role.",
      },
      {
        question: "What was your role during COVID-19?",
        answer: "We sourced and delivered PPE, ventilators, and test kits to European partners under emergency conditions in 2020, with a 100% on-time delivery rate documented across 48h turnaround cycles.",
      },
      {
        question: "Can you source IVD (in-vitro diagnostics) equipment?",
        answer: "Yes — chemistry analyzers (Mindray, Dirui), hematology (Sysmex OEM partners, Mindray), PCR (BGI, Tianlong). We verify IVDR 2017/746 compliance for EU-bound shipments.",
      },
    ],
    relatedServices: ["sourcing", "technology-transfer"],
  },

  industrial: {
    areasTitle: "Sub-areas we cover",
    areasLede:
      "Heavy machinery + smart factory equipment from the heartland of Chinese industry.",
    subAreas: [
      { title: "CNC machines", desc: "Turning centers, machining centers, 5-axis — DMG Mori JV, Haas-licensees, domestic OEMs." },
      { title: "Industrial robotics", desc: "6-axis arms, SCARA, AGVs, cobots — from Estun, Inovance, Siasun." },
      { title: "Automation lines", desc: "End-to-end lines: assembly, packaging, inspection, palletizing." },
      { title: "Sensors & IoT", desc: "Industrial sensors, machine vision, edge computing devices." },
    ],
    capabilitiesTitle: "Factory-to-factory engineering",
    capabilitiesLede:
      "We speak PLC. Our industrial projects get delivered with code ready to run — not hardware in crates.",
    capabilities: [
      { title: "System integration support", desc: "Chinese system integrators trained on Siemens / Rockwell standards for EU deployment." },
      { title: "Spare parts programs", desc: "Staged spare parts delivery + EU warehouse options for critical components." },
      { title: "Commissioning on-site", desc: "Chinese engineers deployed to your facility for installation + acceptance testing." },
      { title: "Safety compliance", desc: "CE Machinery Directive (2006/42/EC), ATEX where applicable, TÜV inspection coordination." },
    ],
    faqs: [
      {
        question: "Can you source complete automation lines turnkey?",
        answer: "Yes — we've done it for automotive component plants and FMCG packaging lines. Scope: design, supply, installation, FAT at supplier, SAT at client, handover with training. Typical 6–9 months.",
      },
      {
        question: "Which CNC brands do you recommend?",
        answer: "Depends on application. For high precision: DMTG, Friendcnc (DMG JV). For general turning/milling: Dalian, Zhongjie. We quote 2–3 options with spec comparison before recommending.",
      },
      {
        question: "How do Chinese robots compare to FANUC/ABB?",
        answer: "Price: 30–50% lower. Reliability: gap closed in last 5 years. Estun, Inovance and Siasun are production-proven. For critical, high-throughput automotive lines we still recommend Western brands.",
      },
      {
        question: "Do you handle CE Machinery Directive compliance?",
        answer: "Yes. We coordinate with Chinese manufacturers to produce Declaration of Conformity, technical file, EC type-examination (for Annex IV machines). TÜV SÜD or DEKRA typically involved.",
      },
    ],
    relatedServices: ["sourcing", "technology-transfer", "supply-chain"],
  },
};
