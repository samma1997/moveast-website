/**
 * Dettagli per le sotto-pagine /sectors/[slug].
 * Struttura parallela a service-details ma con "sub-areas" invece di process steps.
 *
 * REGOLA: niente brand di terzi citati come partner senza MOU pubblico.
 * Niente numeri specifici (timeline, prezzi, % di successo) senza fonte.
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
      "Our Shenzhen base puts us within reach of the largest mobility manufacturing ecosystem in the world — and our CICC institutional network helps open doors.",
    capabilities: [
      { title: "Tier-1 manufacturer access", desc: "Sourcing from established Chinese OEMs across rail, EV, batteries, and drones." },
      { title: "EU homologation support", desc: "CE marking, TSI compliance, R&TTE, RED — coordination with notified bodies." },
      { title: "Spare parts continuity", desc: "Long-term parts availability planning for procured equipment." },
      { title: "Financing introduction", desc: "Network of Chinese export-credit banks for infrastructure deals." },
    ],
    faqs: [
      {
        question: "Which railway components have you sourced?",
        answer: "Signaling systems, traction transformers, overhead catenary, rolling stock, and maintenance equipment for the Ethiopia-Djibouti Railway (752.7 km, $4B project, operating since 2018).",
      },
      {
        question: "Can you source from leading Chinese rail and EV manufacturers?",
        answer: "Yes — we work with established Chinese OEMs across the rail, EV, and drone supply base. We facilitate RFQs, contract negotiation, factory audits, and after-sales coordination.",
      },
      {
        question: "How do you handle EU homologation for Chinese EVs?",
        answer: "We coordinate between Chinese manufacturers and EU notified bodies (TÜV, DEKRA) for CE marking, ECE R10 EMC, R100 battery safety, and WVTA approvals.",
      },
      {
        question: "What is your experience with industrial drones?",
        answer: "Industrial and mapping drones for survey, inspection, and agriculture, sourced and shipped to EU and African operators with EASA/CAA compliance documentation.",
      },
    ],
    relatedServices: ["sourcing", "technology-transfer", "supply-chain"],
  },

  energy: {
    areasTitle: "Sub-areas we cover",
    areasLede:
      "Renewable generation and storage — China is the dominant supply base and we channel it into structured projects.",
    subAreas: [
      { title: "Solar PV modules", desc: "Tier-1 monocrystalline, TOPCon, and HJT modules from Chinese manufacturers." },
      { title: "Wind components", desc: "Towers, blades, gearboxes, and converters from leading Chinese wind OEMs." },
      { title: "BESS (battery storage)", desc: "Utility-scale and C&I battery energy storage systems with LFP chemistry." },
      { title: "Inverters + BoS", desc: "String, central, hybrid inverters and balance-of-system components." },
    ],
    capabilitiesTitle: "Why China for renewables",
    capabilitiesLede:
      "China is the largest manufacturing base for solar, batteries, and wind components. Move East helps clients access it through structured procurement.",
    capabilities: [
      { title: "Tier-1 module selection", desc: "Bankable modules with PID-free certification and standard linear warranty." },
      { title: "LCOE optimization", desc: "Multi-scenario pricing across module + inverter + BoS to support target LCOE." },
      { title: "BESS system engineering", desc: "From C&I to utility scale — cell-to-pack and pack-to-rack optimization." },
      { title: "End-to-end project logistics", desc: "Container consolidation, customs, insurance for utility-scale solar shipments." },
    ],
    faqs: [
      {
        question: "Which solar manufacturers do you work with?",
        answer: "We source from Tier-1 bankable Chinese solar manufacturers, verifying IEC 61215/61730 certification and BNEF Tier-1 status before recommending.",
      },
      {
        question: "How do you scope BESS (battery storage) projects?",
        answer: "We break down quotes into cells, BMS, PCS, containers, EMS, and integration, and provide multi-vendor comparisons to support engineering decisions.",
      },
      {
        question: "How do you address tariff and trade-policy issues?",
        answer: "We structure shipments to comply with applicable import rules in EU, US, and other destination markets, and route through Move East's Hong Kong and EU offices for documentation continuity.",
      },
      {
        question: "What wind components can you source?",
        answer: "Towers, blades, and complete gearbox + converter packages. We typically do not source full turbines, since most markets impose local-content rules on the nacelle.",
      },
    ],
    relatedServices: ["sourcing", "supply-chain"],
  },

  medical: {
    areasTitle: "Sub-areas we cover",
    areasLede:
      "Medical devices and healthcare equipment from Chinese manufacturers with the certifications required for EU, FDA, and Gulf markets.",
    subAreas: [
      { title: "Diagnostic imaging", desc: "Ultrasound, X-ray, and CT systems from established Chinese OEMs." },
      { title: "Hospital equipment", desc: "Patient monitors, infusion pumps, defibrillators, surgical tables." },
      { title: "IVD & lab", desc: "Chemistry analyzers, hematology, and molecular diagnostics (PCR)." },
      { title: "PPE & consumables", desc: "Medical-grade gloves, masks, syringes — EN/ISO compliant." },
    ],
    capabilitiesTitle: "Regulatory + supply reliability",
    capabilitiesLede:
      "Medical is our most regulated vertical. We prefilter manufacturers for MDR readiness before any RFQ.",
    capabilities: [
      { title: "MDR/CE pre-qualification", desc: "We verify supplier MDR technical documentation, UDI, and PMS procedures upfront." },
      { title: "Traceability on delivery", desc: "Batch-level UDI documentation attached to every shipment." },
      { title: "Crisis-tested supply", desc: "Operating through the 2020-2022 COVID-19 emergency, sourcing PPE and medical equipment for European partners." },
      { title: "ECREP / UK RP coordination", desc: "Introductions to European Authorized Reps and UK Responsible Persons for market access." },
    ],
    faqs: [
      {
        question: "Are your medical suppliers MDR-compliant?",
        answer: "Active suppliers in our medical network are pre-screened for MDR readiness under EU 2017/745. We verify certificate validity, UDI-DI, and post-market surveillance procedures before recommending.",
      },
      {
        question: "How do you handle ECREP (European Authorized Representative)?",
        answer: "For clients without an existing ECREP, we make introductions to established firms. We do not act as ECREP ourselves — that would conflict with our procurement role.",
      },
      {
        question: "What was your role during COVID-19?",
        answer: "We sourced and delivered PPE, ventilators, and test kits to European partners under emergency conditions, coordinating air freight and Chinese export protocols when most channels were disrupted.",
      },
      {
        question: "Can you source IVD (in-vitro diagnostics) equipment?",
        answer: "Yes — chemistry analyzers, hematology, and PCR systems. We verify IVDR 2017/746 compliance for EU-bound shipments.",
      },
    ],
    relatedServices: ["sourcing", "technology-transfer"],
  },

  industrial: {
    areasTitle: "Sub-areas we cover",
    areasLede:
      "Heavy machinery and smart-factory equipment from the heartland of Chinese industry.",
    subAreas: [
      { title: "CNC machines", desc: "Turning centers, machining centers, 5-axis — from joint-venture and domestic Chinese OEMs." },
      { title: "Industrial robotics", desc: "6-axis arms, SCARA, AGVs, and collaborative robots from Chinese producers." },
      { title: "Automation lines", desc: "End-to-end lines: assembly, packaging, inspection, palletizing." },
      { title: "Sensors & IoT", desc: "Industrial sensors, machine vision, edge computing devices." },
    ],
    capabilitiesTitle: "Factory-to-factory engineering",
    capabilitiesLede:
      "We speak PLC. Industrial projects are delivered with code ready to run — not just hardware in crates.",
    capabilities: [
      { title: "System integration support", desc: "Chinese system integrators familiar with Siemens / Rockwell standards for EU deployment." },
      { title: "Spare parts programs", desc: "Staged spare parts delivery and EU warehouse options for critical components." },
      { title: "Commissioning on-site", desc: "Chinese engineers deployed to your facility for installation and acceptance testing." },
      { title: "Safety compliance", desc: "CE Machinery Directive (2006/42/EC), ATEX where applicable, TÜV inspection coordination." },
    ],
    faqs: [
      {
        question: "Can you source complete automation lines turnkey?",
        answer: "Yes — design, supply, installation, factory acceptance testing at the supplier, site acceptance testing at the client, and handover with training. Scope and timeline are sized to the project.",
      },
      {
        question: "Which CNC brands do you recommend?",
        answer: "It depends on the application. We typically quote two or three options with a spec comparison before recommending — covering both joint-venture and domestic Chinese OEMs.",
      },
      {
        question: "How do Chinese industrial robots compare to Western brands?",
        answer: "Chinese industrial robots have closed much of the reliability gap and offer competitive pricing. For high-criticality or high-throughput applications we still discuss whether a Western brand is the right choice.",
      },
      {
        question: "Do you handle CE Machinery Directive compliance?",
        answer: "Yes. We coordinate with Chinese manufacturers to produce Declaration of Conformity, technical file, and EC type-examination where applicable (Annex IV), with TÜV SÜD or DEKRA where notified-body involvement is required.",
      },
    ],
    relatedServices: ["sourcing", "technology-transfer", "supply-chain"],
  },
};
