/**
 * Seed 2 pillar articles into Payload CMS.
 *
 *  1) china-sourcing-agent (pillar guide, ~2 000 words)
 *  2) ethiopia-djibouti-railway-china-africa-procurement (case study, ~1 800 words)
 *
 * Idempotent: if an article with the same slug already exists, it is skipped.
 *
 * Run:
 *   npx tsx scripts/seed-pillar-articles.ts
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

import {
  articleToLexicalState,
  type ArticleGeneration,
} from "@/lib/ai/article-generator";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

/* =========================================================================
   ARTICLE 1 — CHINA SOURCING AGENT (PILLAR GUIDE)
   ========================================================================= */

const article1: ArticleGeneration = {
  slug: "china-sourcing-agent",
  title:
    "How to Choose a China Sourcing Agent — The Complete 2026 Guide",
  seoTitle: "China Sourcing Agent — How to Choose (2026 Guide)",
  primaryKeyword: "china sourcing agent",
  keywords: [
    "china sourcing agent",
    "china sourcing agent for european companies",
    "strategic sourcing china",
    "china supplier verification",
    "factory audit shenzhen",
    "china sourcing company shenzhen",
    "china procurement company",
    "china sourcing services",
    "china sourcing for italian companies",
    "china sourcing agent vs trading company",
  ],
  readingTimeMin: 10,
  excerpt:
    "A china sourcing agent is the on-ground operator that turns Chinese manufacturing capacity into a procurement programme European, African, and Gulf buyers can defend. This 2026 guide explains scope, cost, and how to verify credibility.",
  sections: [
    {
      heading: "What is a china sourcing agent — and what it is not",
      paragraphs: [
        "A china sourcing agent is a procurement operator physically based in China that identifies, qualifies, contracts, and supervises Chinese manufacturers on behalf of an international buyer. The mandate typically covers the full path from supplier discovery through factory audit, contract negotiation, quality control, and outbound logistics — not the placement of a single order on a marketplace. For European, African, and Gulf companies, the agent functions as the institutional counterpart inside China's industrial ecosystem, with the legal presence, language capability, and on-site mobility that remote buyers cannot replicate from headquarters.",
        "It is equally important to define what a serious china sourcing agent is not. It is not a marketplace listing aggregator that forwards quotes from unverified sellers. It is not a freight forwarder that quotes only on shipping. It is not a single-factory representative whose interests align with one supplier rather than the buyer. The distinction matters because the procurement risks that fail projects — counterfeit certification, undisclosed subcontracting, IP leakage, port-side document mismatches — are exactly the risks that a marketplace or a forwarder cannot absorb on the buyer's behalf.",
        "Move East operates as a sourcing agent under this institutional definition: a Shenzhen-headquartered procurement company with offices in Hong Kong, Rome, and Addis Ababa, a CICC membership, and UNGM registration that anchor the company inside both the Chinese industrial network and the international procurement framework.",
      ],
    },
    {
      heading:
        "China sourcing agent vs Alibaba vs trading company — the factual comparison",
      paragraphs: [
        "Three operating models are routinely confused in B2B procurement conversations: a sourcing agent, a marketplace such as Alibaba or Made-in-China, and a trading company. They solve different problems, and the choice has direct consequences on price, risk, and delivery quality.",
        "A marketplace is a discovery layer. It surfaces a wide catalogue of self-listed suppliers, but verification of factory existence, certification authenticity, and order fulfilment remains the buyer's responsibility. A trading company is a Chinese-registered intermediary that buys from one or more factories and resells under its own invoice — it concentrates margin, often at the cost of transparency on the underlying manufacturer. A sourcing agent works on the buyer's mandate: the agent does not own the goods, the buyer contracts directly with the qualified factory, and the agent's compensation is structured as a service fee or a transparent commission rather than a hidden margin.",
        "For projects above a few hundred thousand euros, for technically complex equipment, or for any procurement that touches certification regimes such as CE, MDR, FDA, or GCC, the sourcing-agent model is the operational standard because it preserves the buyer's contractual relationship with the actual manufacturer.",
      ],
      bullets: [
        "Marketplace — broad discovery, zero verification, buyer absorbs all risk.",
        "Trading company — owns the goods, opaque on factory identity, concentrated margin.",
        "Sourcing agent — buyer-side mandate, transparent fee, direct contract with the qualified factory.",
      ],
    },
    {
      heading:
        "The five services a serious china sourcing agent must deliver",
      paragraphs: [
        "Across hundreds of B2B procurement conversations, the same five services define a credible china sourcing agent. A provider that cannot demonstrate operational depth in all five is not a sourcing agent — it is a fragment of one.",
        "The five services are tightly interdependent. Supplier discovery without factory audit is a marketplace. Factory audit without contract management is a tour. Contract management without quality control is a paper exercise. Quality control without consolidated logistics leaves the buyer exposed at the port. Logistics without compliance documentation gets containers held at customs. The competitive advantage of an established agent comes from running all five inside a single operating model, with documented hand-offs between teams and a single counterpart for the buyer.",
      ],
      bullets: [
        "Supplier discovery and qualification — pre-screened shortlists from Pearl River Delta, Yangtze River Delta, and Bohai Rim manufacturing hubs.",
        "Factory audit at source — process capability, ISO traceability, certification authenticity, and corrective-action history.",
        "Contract negotiation and IP protection — bilingual contracts under Chinese commercial law, NNN agreements, mould ownership clauses.",
        "Quality control across the production cycle — pre-production, in-line, and pre-shipment inspections with documented evidence.",
        "Consolidated logistics and compliance — Shenzhen and Hong Kong outbound, full export documentation pack pre-validated against destination customs.",
      ],
    },
    {
      heading: "How to verify a china sourcing agent's credibility",
      paragraphs: [
        "Credibility in china sourcing cannot be inferred from a website. It is verified through a finite set of institutional signals that can be cross-checked from outside China. Before signing a mandate, a buyer should expect to confirm each of the following points using independent sources.",
        "First, registration and physical presence. A serious china sourcing agent has a Chinese-registered company with a verifiable office address, ideally in a recognised manufacturing hub such as Shenzhen, Shanghai, or Guangzhou. On-site visits are routinely accommodated. Second, institutional memberships. Membership of recognised chambers — for example the China-Italy Chamber of Commerce, with more than 800 Italian companies in network — and registration on procurement frameworks such as the United Nations Global Marketplace are verifiable signals of compliance posture. Third, references on comparable mandates, including project value, sector, and destination market.",
        "Move East's institutional profile is structured around exactly these signals: incorporated in 2018 in Shenzhen, four offices across Asia, Europe, and Africa, CICC membership, UNGM registration, and a flagship reference on the Ethiopia-Djibouti Railway corridor.",
      ],
      bullets: [
        "Verifiable Chinese company registration and physical office address.",
        "Membership in a recognised bilateral chamber (e.g. CICC, EUCCC).",
        "Registration on institutional procurement frameworks (e.g. UNGM).",
        "References on comparable mandates with project value, sector, and destination disclosed.",
        "Documented quality and compliance methodology, not a slide deck.",
      ],
    },
    {
      heading:
        "Strategic sourcing methodology — the five-step process",
      paragraphs: [
        "A defensible china sourcing engagement is built on a documented process. The structure that has emerged as the institutional standard inside Move East and across comparable procurement companies is a five-step strategic-sourcing methodology, repeated identically for every mandate regardless of sector.",
        "Step one is requirement definition. The buyer's technical specification, certification regime, target landed cost, and lead-time tolerance are codified in a sourcing brief signed by both parties. Step two is supplier mapping. Drawing on Guangdong, Jiangsu, Zhejiang, Shandong, and other industrial provinces, the agent builds a long-list of candidate manufacturers and narrows it through documentary screening to a qualified short-list. Step three is factory audit. On-site visits, capability assessments, and certification verification are conducted on every short-listed supplier before any commercial discussion. Step four is contract and pilot. A bilingual contract is negotiated, with NNN protection, mould-ownership and exclusivity clauses where relevant, and a pilot order is placed to validate process capability under live conditions. Step five is series production with continuous quality control and consolidated logistics through Shenzhen or Hong Kong.",
        "Each step produces a documented deliverable that travels with the procurement file. That documentation is what the buyer's audit, finance, and compliance teams use back at headquarters — and what regulators, banks, and insurers will request if the project ever needs to be defended.",
      ],
    },
    {
      heading:
        "Sector specialisation matters — why generalist agents fail technical mandates",
      paragraphs: [
        "Move East operates across four sector verticals: mobility and smart transport, renewable energy and storage, medical devices and healthcare, and industrial machinery and smart devices. The verticals are deliberate. A china sourcing agent without sector specialisation handles components but cannot interpret specification, certification, or interoperability. On a railway project, that means missing the difference between EN 45545 fire compliance and a generic flammability rating. On a battery storage project, it means treating UL 9540A and IEC 62619 as interchangeable.",
        "Mobility procurement covers railway components, rolling-stock parts, EV systems, drones, and urban transport equipment, with reference to interoperability standards and to electrified-railway operating conditions of the type the Ethiopia-Djibouti corridor has demonstrated since 2018. Renewable-energy procurement covers solar PV modules, battery energy storage systems, inverters, and balance-of-system equipment from the Chinese clean-energy supply base. Medical-device procurement focuses on equipment that must enter the European market under MDR or the United States market under FDA 510(k), with documented technical files and notified-body involvement. Industrial-machinery procurement covers CNC, robotics, automation lines, and smart industrial devices for European and Gulf manufacturers.",
        "A buyer should expect a sourcing agent to demonstrate dedicated supplier rosters, recurring audit history, and reference deliveries inside the relevant sector — not a single generalist contact list.",
      ],
    },
    {
      heading:
        "China sourcing for European, African, and Gulf buyers — the four-office model",
      paragraphs: [
        "Geography is not a detail in china sourcing. Buyers from different regions face different documentation regimes, financing instruments, and destination-port practices, and a sourcing agent that operates only out of one office struggles to absorb that diversity.",
        "Move East operates a four-office model: Shenzhen as the supply-side headquarters, Hong Kong for trade-finance and documentation, Rome for European buyer relationships, and Addis Ababa for African infrastructure programmes. The Rome office is the institutional counterpart for Italian and EU industrial companies, including the more than 800 Italian companies inside the China-Italy Chamber of Commerce ecosystem. The Hong Kong office anchors letters of credit, export documentation, and consolidated outbound logistics. The Addis Ababa office gives African ministries, EPC contractors, and operators a physically present demand-side counterpart for the Ethiopia-Djibouti corridor and adjacent African infrastructure programmes.",
        "For Gulf buyers, the same architecture is reused: Shenzhen-side supplier qualification is paired with destination-aware compliance preparation against GCC standards, and Hong Kong handles the trade-finance leg. The model works because the buyer never needs to translate between countries — the agent does it.",
      ],
    },
    {
      heading: "When to engage a china sourcing agent",
      paragraphs: [
        "Not every Chinese purchase justifies a sourcing-agent engagement. The decision is driven by three factors: project size, technical complexity, and compliance exposure. A few thousand euros of standard components from a known supplier rarely needs an agent. A six- or seven-figure procurement of certified equipment, a multi-supplier project requiring consolidation, or any purchase touching a regulated certification regime needs one.",
        "The trigger conditions are well established. Any procurement above roughly €100 000 with a new supplier, any equipment crossing a CE, MDR, FDA, or GCC certification regime, any infrastructure project with multi-jurisdiction logistics, and any technology-transfer or joint-development arrangement with a Chinese manufacturer should be run through a sourcing-agent engagement. The cost of the mandate is recovered from the avoided cost of a single failed shipment, a single misclassified container, or a single non-conforming production batch.",
      ],
      bullets: [
        "First procurement above ~€100 000 from a new Chinese supplier.",
        "Any equipment subject to CE, MDR, FDA, or GCC certification.",
        "Multi-supplier procurement requiring consolidation and quality coordination.",
        "Infrastructure programmes with multi-jurisdiction logistics (e.g. China to Africa).",
        "Technology-transfer, OEM, or joint-development arrangements with Chinese manufacturers.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a china sourcing agent cost?",
      answer:
        "Compensation models for a china sourcing agent are typically structured in three ways: a transparent commission on the procured value (commonly in a single-digit percentage range and disclosed in the mandate), a fixed monthly retainer for ongoing programmes, or a project-based fee for a specific scope such as supplier qualification or a factory audit. Move East works with all three models, and the structure is agreed at the mandate stage based on project size, complexity, and the level of supervision required.",
    },
    {
      question: "How long does sourcing from China take?",
      answer:
        "End-to-end timelines depend on the product, the certification regime, and whether tooling is required. A typical sourcing engagement runs from supplier qualification (two to four weeks), through factory audit and contract negotiation (two to four weeks), to pilot production (four to eight weeks) and series shipment (six to twelve weeks for sea freight to Europe or Africa). For technical equipment requiring tooling or certification work, the cycle extends accordingly. The agent's role is to compress the parts of the timeline that depend on coordination rather than on physical lead time.",
    },
    {
      question:
        "What is the difference between a sourcing agent and a trading company?",
      answer:
        "A trading company buys goods from a Chinese factory and resells them to the buyer under its own invoice. The buyer does not contract with the actual manufacturer, and the trading company's margin is embedded in the unit price. A sourcing agent works on the buyer's mandate: the buyer signs a contract directly with the qualified factory, the agent's compensation is disclosed as a fee or commission, and the supplier identity is fully transparent. For procurement programmes above a few hundred thousand euros or for any certified equipment, the sourcing-agent model is the operational standard because it preserves contractual transparency.",
    },
    {
      question:
        "How do you protect intellectual property when sourcing in China?",
      answer:
        "IP protection in China combines registration, contract design, and operational discipline. A serious china sourcing agent registers the buyer's relevant trademarks and design rights inside the Chinese system before disclosing technical files to suppliers. Bilingual NNN agreements (non-disclosure, non-use, non-circumvention) under Chinese commercial law are signed before sample requests. Mould ownership, supplier exclusivity, and product-segmentation clauses are negotiated in the master contract. Operational discipline — restricting drawings, splitting production across components where appropriate, and physical inspection of moulds — completes the framework.",
    },
    {
      question:
        "What certifications do Chinese suppliers need for the European medical-device market?",
      answer:
        "Medical devices entering the European Union must comply with the Medical Device Regulation (EU MDR 2017/745). For most device classes above Class I, this involves a notified-body review of a technical file, ISO 13485 quality-system certification at the manufacturer, ISO 14971 risk-management documentation, clinical evaluation, and CE marking with the notified-body identification number. A china sourcing agent with sector specialisation in medical devices verifies the authenticity of these certifications, audits the manufacturer's quality system, and supports the buyer's regulatory team through the European Authorised Representative appointment.",
    },
    {
      question: "Can a china sourcing agent help with technology transfer?",
      answer:
        "Yes. Technology transfer from a Chinese manufacturer to an international project — common in mobility, energy, and industrial-machinery sectors — is one of the three core service lines a serious china sourcing agent operates. The mandate covers specification alignment between the Chinese platform and the destination operating environment, regulatory and certification adaptation, training and knowledge-transfer programmes, and where relevant local assembly or joint-development arrangements. Move East operates technology-transfer engagements as a structured service, distinct from straight procurement, with dedicated workflow and contract templates.",
    },
  ],
};

/* =========================================================================
   ARTICLE 2 — ETHIOPIA-DJIBOUTI RAILWAY (CASE STUDY)
   ========================================================================= */

const article2: ArticleGeneration = {
  slug: "ethiopia-djibouti-railway-china-africa-procurement",
  title:
    "Ethiopia-Djibouti Railway — How Move East Procures from China for Africa's Strategic Belt and Road Corridor",
  seoTitle: "Ethiopia-Djibouti Railway — China Procurement Case",
  primaryKeyword: "ethiopia djibouti railway procurement",
  keywords: [
    "ethiopia djibouti railway procurement",
    "china africa procurement",
    "belt and road procurement",
    "railway equipment china procurement",
    "ethiopia djibouti railway",
    "china to ethiopia logistics",
    "african rail infrastructure china",
    "rolling stock procurement china",
    "china africa trade corridor",
    "shenzhen addis ababa supply chain",
  ],
  readingTimeMin: 9,
  excerpt:
    "Ethiopia-Djibouti Railway procurement at scale: a $4 billion, 752.7 km Belt and Road corridor where Move East operates as the official outsourcing agent in China. The case study explains the operating model behind the corridor.",
  sections: [
    {
      heading: "The Ethiopia-Djibouti Railway in numbers",
      paragraphs: [
        "The Ethiopia-Djibouti Railway is a 752.7 km, fully electrified standard-gauge railway connecting Addis Ababa to the Port of Djibouti. With a project value widely reported at approximately four billion United States dollars, it is one of the most visible Belt and Road Initiative projects on the African continent and the first cross-border electric railway operating in Africa. Commercial service started in 2018, and the line is now the backbone of foreign trade for landlocked Ethiopia and the strategic corridor anchoring the Port of Djibouti's role as a regional gateway to the Horn of Africa.",
        "Behind the headline numbers sits an operating reality that defines the procurement question. A railway of this size is not bought once. It runs for decades, with rolling stock that needs maintenance, signalling that needs upgrades, traction systems that need spare parts, and track hardware that needs replenishment. The procurement architecture has to support not only the initial delivery but the multi-decade operational phase that follows.",
      ],
      bullets: [
        "Mainline length — approximately 752.7 km (Sebeta near Addis Ababa to Nagad near Djibouti).",
        "Project value — approximately four billion United States dollars.",
        "Gauge — standard 1 435 mm, interoperable with international rolling stock.",
        "Electrification — 25 kV AC, fully electric mainline traction.",
        "Operational since — 2018, under the Ethiopia-Djibouti Railway Share Company.",
        "Strategic role — first cross-border electrified railway in Africa, anchor of the China-Africa Belt and Road corridor.",
      ],
    },
    {
      heading:
        "Move East's role — official outsourcing agent in China for the Ethiopia-Djibouti Railway",
      paragraphs: [
        "Move East Trading was appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway. The mandate is structural rather than transactional: the company operates as the institutional counterpart on the supply side of the corridor, qualifying Chinese manufacturers, supervising production, and coordinating the export logistics that move equipment from Chinese ports through Hong Kong to Djibouti and onward to Ethiopia.",
        "The role is anchored in Move East's four-office architecture. Shenzhen runs supplier qualification and factory audits across Guangdong, Jiangsu, Hebei, and Zhejiang manufacturing hubs. Hong Kong anchors trade-finance, documentation, and consolidated outbound shipping. Addis Ababa provides the demand-side presence that allows the operator, the Ethiopian authorities, and the EPC contractors to interact with a physically present counterpart. Rome is the European institutional interface, used for cross-border financing arrangements and for engagement with European exporters who want to participate in the corridor.",
        "The phrase official outsourcing agent in China is not marketing language. It defines a specific operational responsibility: Move East is the company-side counterpart on which the demand side relies for sourcing, qualification, audit, contract management, logistics, and the operational-phase spare-parts pipeline of the railway.",
      ],
    },
    {
      heading:
        "Procurement scope — what flows through the corridor",
      paragraphs: [
        "The procurement scope on a railway of this size is broad and technically interdependent. Rolling stock — locomotives and passenger and freight cars — must be interoperable with the catenary, the signalling, and the track hardware. Signalling and electrical systems must integrate with rolling stock and with operational procedures. Track hardware must match design loads and climatic conditions. Maintenance equipment, depot tooling, and inspection devices must support the operational phase. Spare parts must be available across decades.",
        "Move East's supplier roster covers each of these categories inside the Chinese industrial network. Procurement workflow is sector-aware: components that enter the railway's service-critical path are sourced only from suppliers that have passed a Move East factory audit and that hold the relevant Chinese and international certifications. Components destined for the spare-parts pipeline are managed under continuity contracts that lock in availability and price for the multi-year operational horizon.",
      ],
      bullets: [
        "Rolling-stock components for the EDR's electrified standard-gauge configuration.",
        "Signalling, traction, and electrical sub-systems compatible with the 25 kV AC mainline.",
        "Track hardware, fasteners, and permanent-way components.",
        "Maintenance, inspection, and depot equipment for the operational phase.",
        "Spare parts under continuity contracts with qualified Chinese manufacturers.",
        "Technical assistance, training material, and bilingual documentation packages.",
      ],
    },
    {
      heading: "The Shenzhen — Addis Ababa corridor",
      paragraphs: [
        "Geography drives operations. Equipment manufactured in Chinese industrial hubs — predominantly Guangdong, Jiangsu, Hebei, and Zhejiang — is consolidated at Shenzhen, Shekou, or other South China ports for outbound shipping. Hong Kong handles the trade-finance and documentation leg, leveraging the legal and banking framework that has historically anchored large-scale Chinese-manufactured exports to Africa. Container services route the consolidated cargo to the Port of Djibouti, where customs clearance, port handling, and onward inland transport hand the equipment to the Ethiopia-Djibouti Railway operator and to the Ethiopian authorities.",
        "Each leg has a failure mode. At source, undisclosed sub-contracting or non-conforming production undermines the equipment before it leaves the factory. In Hong Kong, a misaligned letter of credit or a missing certificate of origin holds the documentation pack at the bank. At the Port of Djibouti, an HS code mismatch or a customs document issued by the wrong chamber holds containers for weeks. Move East's operating model exists to absorb each of these failure modes inside a single coordinated workflow.",
        "Operationally, the corridor relies on a documentation pack issued for every shipment that includes commercial invoice, packing list, certificate of origin, conformity certificates, project-specific compliance attestations, and a pre-validation against Djiboutian and Ethiopian import requirements. Pre-validation is the operational difference between a shipment that clears in days and one that clears in weeks.",
      ],
    },
    {
      heading:
        "Working with leading Chinese railway manufacturers",
      paragraphs: [
        "The Chinese railway manufacturing ecosystem is one of the deepest industrial networks in the world. The state-led China Railway Rolling Stock Corporation (CRRC) ecosystem groups locomotive and rolling-stock production at scale, and an extensive supplier base across Guangdong, Jiangsu, Hebei, and Zhejiang covers signalling, electrical, mechanical, and track-hardware components. The Ethiopia-Djibouti Railway was built and is supplied principally through Chinese state-owned contractors, including the China Railway Group (CREC) and the China Civil Engineering Construction Corporation (CCECC), and the operating ecosystem continues to anchor procurement for the line.",
        "Move East's role inside that ecosystem is not to replace the lead contractors but to operate as the procurement counterpart that runs the supplier qualification, audit, and continuity management workflows on which the operational phase of the railway depends. Working with leading Chinese manufacturers requires three operational disciplines: knowing the supplier base inside each component category, running factory audits before every critical purchase order, and maintaining continuity contracts that guarantee availability across the multi-decade operational horizon. The combination of these three disciplines, conducted from a Shenzhen base with a parallel Addis Ababa presence, is the operational signature of the engagement.",
      ],
    },
    {
      heading:
        "Bilingual technical assistance — engineer training, SOPs, and documentation",
      paragraphs: [
        "Equipment without operators is hardware, not infrastructure. The Ethiopia-Djibouti Railway operates with locally trained engineers, technicians, and maintenance staff who must read manuals, follow standard operating procedures, and intervene on Chinese-supplied systems in the field. Bilingual technical assistance is therefore an operational input, not an optional service.",
        "Move East coordinates training programmes that bring Ethiopian engineers to Chinese manufacturing sites for hands-on instruction and that bring Chinese technical staff to Addis Ababa for on-site commissioning, troubleshooting, and knowledge-transfer sessions. Standard operating procedures are issued in English and, where required by the operator, in Amharic, with technical reference to the Chinese source documentation. The documentation pack accompanying every critical equipment delivery includes operating manuals, maintenance schedules, parts catalogues, and failure-mode references in the languages used inside the operator organisation.",
        "Bilingual technical assistance is the second invisible deliverable of the corridor — invisible from outside, decisive from inside.",
      ],
    },
    {
      heading:
        "Operating through the 2020-2022 supply disruption",
      paragraphs: [
        "Between 2020 and 2022, global supply chains were tested as never before. Border closures, port congestion, container shortages, and factory disruption made the cross-jurisdiction movement of equipment slower, more expensive, and harder to predict. The Ethiopia-Djibouti corridor was not exempt.",
        "Move East's response combined three operational adjustments. First, supplier qualification continued at a reduced cadence, with documentary audits replacing on-site visits where physical access was restricted and with full audits resumed as soon as conditions allowed. Second, the consolidated logistics architecture through Hong Kong absorbed re-routing and demurrage management, keeping the documentation pack aligned with shifting customs and port practices at the destination. Third, during the most acute phase of the COVID-19 emergency, Move East used its supplier network in China to source and deliver medical equipment to European partners under emergency conditions, applying the same procurement discipline to a different category of goods.",
        "The lesson from 2020-2022 is that procurement architecture is tested under stress. A china sourcing operating model that relies on remote coordination only survives normal conditions. A model with on-ground presence on both ends of the corridor and a consolidated documentation discipline absorbs the stress.",
      ],
    },
    {
      heading:
        "What the EDR model means for other African infrastructure programmes",
      paragraphs: [
        "The Ethiopia-Djibouti Railway has established a repeatable operating model for cross-border infrastructure procurement between China and Africa. Supplier qualification at source. Factory audits before every critical order. Consolidated logistics through Hong Kong. On-ground presence on the demand side. Continuity contracts for the operational-phase spare-parts pipeline. Bilingual technical assistance. Documentation pre-validated against destination customs.",
        "Move East now applies the same framework to railway, renewable energy, medical-device, and industrial-machinery programmes across the China-Africa corridor and into European and Gulf markets. The underlying logic is portable: the procurement architecture on most African infrastructure projects is already integrated with Chinese supply chains, and the buyer-side advantage comes from operating inside that architecture rather than parallel to it.",
        "For European exporters who want to participate in African infrastructure, the EDR model also defines the entry path. Compatibility with Chinese-specified systems, documented certification under recognised international regimes, and a China-side operational presence — directly or through a structured sourcing partner — are the three operational conditions that compress the sale into a defensible procurement conversation.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the Ethiopia-Djibouti Railway?",
      answer:
        "The Ethiopia-Djibouti Railway is a 752.7 km, fully electrified standard-gauge railway connecting Addis Ababa to the Port of Djibouti. With a project value widely reported at approximately four billion United States dollars, it is one of the most visible Belt and Road Initiative projects in Africa and the first cross-border electric railway operating on the continent. The line entered commercial operation in 2018 and is operated by the Ethiopia-Djibouti Railway Share Company, jointly owned by the two governments.",
    },
    {
      question:
        "How is Move East involved in the Ethiopia-Djibouti Railway?",
      answer:
        "Move East was appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway. The mandate covers supplier qualification across the Chinese railway manufacturing ecosystem, factory audits at source, contract management with the qualified manufacturers, consolidated export logistics through Hong Kong to Djibouti, documentation and compliance pre-validation against Djiboutian and Ethiopian import regimes, and continuity management of the operational-phase spare-parts pipeline. The role is anchored by parallel offices in Shenzhen and Addis Ababa, ensuring on-ground presence on both ends of the corridor.",
    },
    {
      question:
        "What does 'official outsourcing agent in China' mean?",
      answer:
        "Official outsourcing agent in China is the operational designation under which Move East acts as the supply-side procurement counterpart for the Ethiopia-Djibouti Railway. Functionally, it means that the Chinese manufacturing ecosystem is engaged on the railway's behalf through Move East's qualification, audit, contract, and logistics workflows rather than through ad-hoc transactions. The role is structural and continuous, covering the operational phase of the line — including spare-parts continuity — not only the initial delivery of equipment.",
    },
    {
      question:
        "What components does Move East procure for the Ethiopia-Djibouti Railway?",
      answer:
        "The procurement scope covers rolling-stock components compatible with the railway's 25 kV AC electrified standard-gauge configuration, signalling and electrical sub-systems, track hardware and permanent-way components, maintenance, inspection, and depot equipment for the operational phase, and spare parts managed under continuity contracts with qualified Chinese manufacturers. Components destined for the railway's service-critical path are sourced exclusively from suppliers that have passed a Move East factory audit and that hold the relevant Chinese and international certifications.",
    },
    {
      question:
        "How does the Shenzhen-Addis Ababa supply chain work?",
      answer:
        "Equipment manufactured across Guangdong, Jiangsu, Hebei, and Zhejiang industrial hubs is consolidated at Shenzhen, Shekou, or other South China ports. Hong Kong handles the trade-finance and documentation leg, leveraging its legal and banking framework. Container services route consolidated cargo to the Port of Djibouti, where customs clearance and onward inland transport hand the equipment to the Ethiopian operator. Every shipment travels with a pre-validated documentation pack — commercial invoice, packing list, certificate of origin, conformity certificates, and project-specific compliance attestations — aligned in advance with Djiboutian and Ethiopian import requirements.",
    },
    {
      question:
        "Can Move East replicate the EDR procurement model for other African railways and infrastructure programmes?",
      answer:
        "Yes. The Ethiopia-Djibouti Railway engagement established a repeatable operating model — supplier qualification at source, factory audits before every critical order, consolidated logistics through Hong Kong, on-ground presence on the demand side, continuity contracts for spare parts, bilingual technical assistance, and documentation pre-validated against destination customs. Move East now applies the same framework to railway, renewable-energy, medical-device, and industrial-machinery programmes across the China-Africa corridor and into European and Gulf markets, with the institutional anchoring of CICC membership and UNGM registration.",
    },
  ],
};

/* =========================================================================
   SEED RUNNER
   ========================================================================= */

async function seed() {
  const { getPayload } = await import("payload");
  const config = (await import(join(ROOT, "payload.config.ts"))).default;
  const payload = await getPayload({ config });

  for (const article of [article1, article2]) {
    const { docs } = await payload.find({
      collection: "articles",
      where: { slug: { equals: article.slug } },
      limit: 1,
    });

    const existing = docs[0];
    if (existing) {
      console.log(`Skipping ${article.slug} (already exists, id=${existing.id})`);
      continue;
    }

    // seoDescription is capped at 170 chars by the Articles collection.
    // Keep it short and keyword-rich; full lede lives in `excerpt`.
    const seoDescription = article.excerpt.slice(0, 170);

    const created = await payload.create({
      collection: "articles",
      data: {
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        seoTitle: article.seoTitle,
        seoDescription,
        primaryKeyword: article.primaryKeyword,
        keywords: [...article.keywords],
        readingTime: article.readingTimeMin,
        body: articleToLexicalState(article) as never,
        faqs: article.faqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        })),
        status: "published",
        publishedAt: new Date().toISOString(),
      },
    });

    console.log(`Created article: ${article.slug} (id=${created.id})`);
  }
}

seed()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
