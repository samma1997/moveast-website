/**
 * Riscrive completamente l'articolo EDR (id=1) sostituendo i contenuti
 * inventati con la versione pulita derivata da blog-post-edr-railway.html.
 *
 * - Carica hero-edr-railway.webp come nuova cover
 * - Aggiorna title, slug, excerpt, body (Lexical), keywords, primaryKeyword,
 *   seoTitle, seoDescription, faqs
 *
 * Run: npx tsx scripts/rewrite-edr-article.ts
 */

import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
loadEnv({ path: join(ROOT, ".env.local") });

const NEW_SLUG = "ethiopia-djibouti-railway-china-africa-procurement";
const COVER_PATH = join(ROOT, "public/images/hero-edr-railway.webp");

// ─────────────────────────────────────────────────────────────────────────────
// Lexical helpers — keep the JSON shape minimal but valid.
// Format flags (combine via OR): 1=bold, 2=italic, 4=strikethrough, 8=underline.
// ─────────────────────────────────────────────────────────────────────────────

type Node = Record<string, unknown>;

const t = (text: string, format = 0): Node => ({
  type: "text",
  version: 1,
  text,
  format,
  mode: "normal",
  style: "",
  detail: 0,
});

const b = (text: string) => t(text, 1);
const i = (text: string) => t(text, 2);

const link = (text: string, url: string): Node => ({
  type: "link",
  version: 3,
  direction: "ltr",
  format: "",
  indent: 0,
  fields: { url, newTab: true, linkType: "custom" },
  children: [t(text)],
});

const p = (...children: Node[]): Node => ({
  type: "paragraph",
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  textFormat: 0,
  textStyle: "",
  children: children.length > 0 ? children : [t("")],
});

const h = (tag: "h2" | "h3", ...children: Node[]): Node => ({
  type: "heading",
  tag,
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  children,
});

const ul = (...items: (string | Node[])[]): Node => ({
  type: "list",
  listType: "bullet",
  tag: "ul",
  start: 1,
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  children: items.map((item, idx) => ({
    type: "listitem",
    version: 1,
    value: idx + 1,
    direction: "ltr",
    format: "",
    indent: 0,
    children: typeof item === "string" ? [t(item)] : item,
  })),
});

const q = (text: string): Node => ({
  type: "quote",
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  children: [t(text)],
});

const root = (...children: Node[]) => ({
  root: {
    type: "root",
    version: 1,
    direction: "ltr",
    format: "",
    indent: 0,
    children,
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Article body — derived from blog-post-edr-railway.html (verified content).
// ─────────────────────────────────────────────────────────────────────────────

const TITLE = "Inside the $4 Billion Ethiopia-Djibouti Railway: How China-Africa Procurement Really Works";

const EXCERPT =
  "A narrative case study of the $4B Ethiopia-Djibouti Railway — Africa's first cross-border electric railway. Scale, supply chain, and the China-Africa procurement lessons that apply to every infrastructure project.";

const SEO_TITLE = "Inside the $4B Ethiopia-Djibouti Railway: China-Africa Procurement | Move East";

const SEO_DESCRIPTION =
  "A narrative case study of the $4B Ethiopia-Djibouti Railway — how China-Africa procurement really works, from the official outsourcing agent in China.";

const PRIMARY_KEYWORD = "ethiopia djibouti railway procurement";

const KEYWORDS = [
  "ethiopia djibouti railway procurement",
  "china africa trade corridor",
  "belt and road initiative railway",
  "africa infrastructure china",
  "china africa railway project",
];

const FAQS = [
  {
    question: "When did the Ethiopia-Djibouti Railway become operational?",
    answer:
      "The EDR entered full commercial operation in 2018, following a handover period from the Chinese construction consortium to the Ethiopia-Djibouti Railway Share Company.",
  },
  {
    question: "Is the EDR really the first cross-border electric railway in Africa?",
    answer:
      "Yes. The Ethiopia-Djibouti Railway is widely reported as the first cross-border fully electrified standard-gauge railway in Africa, a distinction repeatedly referenced in industry, development-bank, and government sources.",
  },
  {
    question: "How large is China-Africa trade?",
    answer:
      "Total China-Africa bilateral trade has exceeded $280 billion in recent years according to Chinese customs data reported by Reuters and other major outlets. The trade relationship continues to grow, with a structural imbalance between African raw-material exports and Chinese manufactured imports.",
  },
  {
    question: "What is the Belt and Road Initiative?",
    answer:
      "The Belt and Road Initiative is China's long-term global infrastructure and trade programme launched in 2013. It covers ports, railways, highways, energy, and digital connectivity projects across Asia, Africa, Europe, and Latin America, financed primarily through Chinese policy banks.",
  },
  {
    question: "What was Move East's role in the Ethiopia-Djibouti Railway?",
    answer:
      "Move East Trading was appointed official outsourcing agent in China for the EDR. The mandate covers supplier selection and qualification, factory audits, quality control, export logistics from Chinese ports, documentation and compliance, and spare-parts pipeline management for the operational phase.",
  },
  {
    question: "Why does the EDR matter for European exporters?",
    answer:
      "The EDR opens a reliable, high-capacity trade corridor between the Port of Djibouti and landlocked Ethiopia. For European exporters selling into East Africa, it reduces transit times, logistics costs, and supply-chain uncertainty versus road-only alternatives — and it sets a precedent for how large-scale infrastructure is procured across the China-Africa corridor.",
  },
  {
    question: "Can this procurement model be applied to other infrastructure projects?",
    answer:
      "Yes. The EDR established a repeatable operating model for cross-border infrastructure procurement between China and Africa — supplier qualification in China, audits at source, consolidated logistics through Hong Kong, on-ground presence on the demand side. Move East now applies the same framework to railway, renewable energy, and industrial projects across the corridor.",
  },
];

const BODY = root(
  // EDR at a glance — block introduttivo (lo facciamo come <ul> con label bold)
  h("h3", t("EDR at a glance")),
  ul(
    [b("Project value:"), t(" approximately $4 billion")],
    [b("Mainline length:"), t(" approximately 756 km (Addis Ababa to Djibouti)")],
    [b("Countries in the delivery chain:"), t(" 4 — China, Hong Kong, Ethiopia, Djibouti")],
    [b("In commercial operation since:"), t(" 2018")],
    [b("Move East role:"), t(" Official outsourcing agent in China")],
    [b("Owner / operator:"), t(" Ethiopia-Djibouti Railway Share Company")],
  ),

  // 1. The scale
  h("h2", t("The scale of what was built")),
  p(t("Drive out of Addis Ababa heading east and, for hundreds of kilometres, the landscape stretches into highland plateau, then volcanic desert, then salt flats descending toward the Gulf of Aden. Before 2018, the only way to move freight from Ethiopia's capital to the Port of Djibouti was a road corridor — congested, costly, and slow. A trip that now takes hours by train took days by truck.")),
  p(t("The Ethiopia-Djibouti Railway changed that.")),
  p(t("Mainline length of approximately 756 km. Standard gauge. Fully electrified at 25 kV AC, ready for modern rolling stock. Commercial operation since 2018 under the Ethiopia-Djibouti Railway Share Company, a joint entity of the two national governments. Total project value widely reported at around $4 billion.")),
  p(t("It is, by any reasonable definition, a strategic asset. For Ethiopia, a landlocked nation of over 120 million people, it is the backbone of foreign trade. For Djibouti, it anchors the role of the country's port as a regional gateway. For the wider China-Africa relationship, it is one of the most visible Belt & Road projects in Africa.")),

  // 2. Belt & Road context
  h("h2", t("The Belt & Road context")),
  h("h3", t("Why China is building infrastructure in Africa at all")),
  p(b("The Belt and Road Initiative (BRI)"), t(", launched by China in 2013, is a state-led programme to finance and build infrastructure across Eurasia, Africa, and Latin America. Ports, railways, highways, power generation, digital connectivity — all fall under its scope. Financing flows primarily through Chinese policy banks, including the Export-Import Bank of China and the China Development Bank, often in the form of long-tenor loans to host governments.")),
  p(t("For a non-specialist audience, the BRI is easy to caricature. In operational reality, it is a very specific commercial logic: Chinese industrial overcapacity in steel, rail, power, and construction equipment meets infrastructure demand in fast-growing economies. The financing, contracting, and procurement are bundled together.")),
  h("h3", t("Trade volumes behind the headlines")),
  p(t("China is now Africa's largest single trading partner. Total China-Africa bilateral trade has crossed the "), link("$280 billion mark in recent years", "https://www.reuters.com/world/china/china-africa-trade-hits-record-high-2023-customs-data-shows-2024-01-12/"), t(" according to Chinese customs data reported by Reuters, and the corridor continues to grow.")),
  p(t("Behind that aggregate number, the structure is uneven. African exports to China are heavily weighted toward raw materials — oil, copper, iron ore, agricultural commodities. Chinese exports to Africa are weighted toward manufactured goods, machinery, electronics, and increasingly turn-key infrastructure systems. Railways like the EDR sit exactly in the middle of that trade asymmetry.")),
  h("h3", t("Why this matters for the procurement question")),
  p(t("Infrastructure of this scale is not bought piece by piece on a marketplace. It is procured through a multi-year architecture of supplier qualification, engineering specification, contract management, logistics coordination, and long-life spare-parts sourcing. Understanding who does what in that architecture is the real subject of this article.")),

  // 3. EDR in numbers
  h("h2", t("Project overview — the EDR in numbers")),
  p(t("A compact snapshot of the project.")),
  ul(
    [b("Project value:"), t(" approximately $4 billion")],
    [b("Mainline length:"), t(" approximately 756 km")],
    [b("Terminals:"), t(" Sebeta (near Addis Ababa) to Nagad (near Djibouti)")],
    [b("Gauge:"), t(" standard (1,435 mm), interoperable with modern Chinese and international rolling stock")],
    [b("Electrification:"), t(" 25 kV AC")],
    [b("Operational since:"), t(" 2018 (commercial operation)")],
    [b("Predecessor:"), t(" a French-built metre-gauge, diesel-powered colonial railway dating back to the early 20th century, effectively non-operational by the 2000s")],
    [b("Construction consortium:"), t(" Chinese state-owned contractors, principally the China Railway Group (CREC) and the China Civil Engineering Construction Corporation (CCECC)")],
    [b("Operator:"), t(" Ethiopia-Djibouti Railway Share Company, jointly owned by the two governments")],
    [b("First cross-border electric railway in Africa:"), t(" yes, widely recognised as such by industry and policy sources")],
  ),
  p(t("These data points are not trivia. They are the inputs that every specification, every audit, every shipping consolidation, and every spare-parts order has to respect for the next thirty years of operation.")),

  // 4. The procurement challenge
  h("h2", t("The procurement challenge (what nobody talks about)")),
  h("h3", t("Not one supply chain — four")),
  p(t("Infrastructure coverage tends to focus on the ribbon-cutting. The hard problem sits earlier, in the supply chain, and it is almost invisible from outside.")),
  p(t("The EDR's supply chain crosses at least four jurisdictions: China (where the equipment is manufactured), Hong Kong (where a large part of the trade-finance and documentation is structured), Djibouti (the port of entry and a sovereign jurisdiction of its own), and Ethiopia (the destination, with its own customs regime, certification requirements, and operational standards).")),
  p(t("A single missing document, a mismatched HS code, a certificate of origin issued by the wrong chamber — any of these can stop a container for weeks.")),
  h("h3", t("Technical interdependence")),
  p(t("A railway is a system. Rolling stock, catenary, signalling, and track hardware have to be interoperable over a design life measured in decades. A traction motor from one manufacturer, a signalling relay from another, and a pantograph from a third must behave as a single engineered unit. Getting that right on the initial procurement is hard. Keeping it right across twenty years of spare-parts resupply is harder.")),
  h("h3", t("Currency, compliance, and continuity")),
  p(t("Financing instruments denominated in one currency meet supplier invoices in another meet government budget cycles in a third. Payment terms that work for Chinese suppliers have to reconcile with Hong Kong trade-finance instruments and African development-bank disbursement schedules. There is no marketplace automation for that. It is done by people, in rooms, with contracts.")),

  // 5. How Move East became the agent
  h("h2", t("How Move East became the China-side agent")),
  p(t("In 2021, Move East Trading was appointed as the "), b("official outsourcing agent in China for the Ethiopia-Djibouti Railway"), t(". The appointment followed the operational track record Move East had built since 2018 in Guangdong-centred industrial sourcing and in the emerging China-Africa corridor.")),
  p(t("The role is structural, not transactional. It covers:")),
  ul(
    "Qualifying Chinese manufacturers across rolling-stock, signalling, electrical, and track-hardware categories.",
    "Running factory audits at source — in Guangdong, Hebei, Jiangsu, and other manufacturing hubs.",
    "Coordinating export logistics from Chinese ports through Hong Kong to Djibouti.",
    "Managing documentation and compliance for both the Djiboutian and Ethiopian import regimes.",
    "Maintaining the spare-parts pipeline for the operational phase.",
  ),
  p(t("To support the demand side of the corridor, Move East opened its "), b("Addis Ababa office"), t(", becoming one of the few procurement companies with simultaneous operational presence in Shenzhen and in an African capital.")),

  // 6. Seven operational pillars
  h("h2", t("Seven operational pillars of delivery")),
  p(t("Move East structured the engagement as a repeatable operating model rather than a project-by-project effort. Seven operational pillars define the delivery.")),
  h("h3", t("1. On-ground supplier qualification in China")),
  p(t("Move East's Shenzhen office runs a continuous supplier-qualification programme across Chinese manufacturing hubs — Guangdong for electronics and signalling, Hebei and Jiangsu for rolling-stock components, Zhejiang for electrical systems. Shortlists are built from on-site visits, not from online catalogues.")),
  h("h3", t("2. Factory audits before every critical order")),
  p(t("For components that enter the railway's service-critical path, Move East conducts documented factory audits before purchase orders are issued. Audits cover process capability, ISO certification, traceability, and corrective-action history.")),
  h("h3", t("3. Technical specification alignment")),
  p(t("Chinese manufacturing standards, Ethiopian operating conditions, and international interoperability requirements are reconciled through a specification-alignment workflow handled jointly by the Shenzhen and Addis Ababa teams.")),
  h("h3", t("4. Consolidated logistics through Hong Kong")),
  p(t("Hong Kong serves as the trade-finance and documentation hub. Shipments are consolidated at Shenzhen and Shekou ports, cleared through Hong Kong instruments, and routed to Djibouti via established container services.")),
  h("h3", t("5. Document-and-compliance control")),
  p(t("Every shipment is dispatched with a full documentation pack — certificates of origin, test reports, customs declarations, and project-specific compliance attestations — pre-validated against the import regimes of Djibouti and Ethiopia.")),
  h("h3", t("6. Spare-parts pipeline")),
  p(t("For the operational phase, Move East maintains a forward-position inventory of high-rotation spare parts and a qualified-supplier roster for long-lead items. This keeps the line running.")),
  h("h3", t("7. Addis Ababa presence")),
  p(t("Move East opened its Addis Ababa office to guarantee a physical, legally present counterpart on the demand side of the corridor. On-ground presence on both ends is the difference between a sourcing agent and an infrastructure partner.")),

  // 7. Three lessons
  h("h2", t("Three operational lessons")),
  p(t("Three lessons from the EDR engagement are portable to every China-Africa infrastructure programme.")),
  h("h3", t("1. On-ground presence on both ends of the corridor is not optional")),
  p(t("The single biggest operational gain came from having a team physically present both in Shenzhen — where the factories are — and in Addis Ababa — where the operator, the government, and the regulatory interlocutors sit.")),
  p(t("A concrete example. Early in the operational phase, a batch of signalling components was held at the port for a technical classification issue. The Addis Ababa team resolved it in direct conversation with the Ethiopian authority within days; the Shenzhen team issued the corrective export documents in parallel. Remote coordination alone would have added much more time.")),
  h("h3", t("2. Hong Kong is the invisible pivot")),
  p(t("Trade finance, documentation, insurance, and export compliance for the EDR's China-side supply chain are anchored in Hong Kong. That is not an accident — Hong Kong's legal framework, banking infrastructure, and logistics coverage make it the default pivot for large Chinese-manufactured exports to Africa.")),
  p(t("A concrete example. Consolidated shipments from Shenzhen and Shekou ports are cleared through Hong Kong instruments before routing to Djibouti, which simplifies letter-of-credit handling and reduces demurrage risk at the destination port.")),
  h("h3", t("3. The real contract is the spare-parts pipeline")),
  p(t("On a project of this size, the headline deliverable is the line itself. The real long-term contract is the continuous supply of spare parts, upgrades, and technical interventions for the operational phase. A railway that cannot get spare relays or traction motors in time stops running.")),
  p(t("A concrete example. Move East maintains a forward-position inventory of high-rotation spare parts together with a qualified-supplier roster for long-lead items. Resupply lead times are managed so that the operator can plan maintenance windows instead of reacting to failures.")),
  q("On a project of this size, the headline deliverable is the line itself. The real long-term contract is the continuous supply of spare parts, upgrades, and technical interventions for the operational phase. — Move East operations note"),

  // 8. What the EDR unlocked
  h("h2", t("What the EDR unlocked for China-Africa trade")),
  p(t("The EDR is a single railway, but its operational and commercial impact ripples outward.")),
  p(t("For Ethiopia, it converts landlocked geography into usable economic frontage on the Indian Ocean. For Djibouti, it consolidates the Port of Djibouti's role as a regional gateway — not only for Ethiopia but for the wider Horn of Africa. For Chinese manufacturers, it built a reference case of a fully Chinese-engineered, electrified railway operating in commercial service outside China. For the wider corridor, it demonstrated that long-duration cross-border infrastructure between China and Africa can be procured, delivered, and operated successfully.")),
  p(t("For Move East, the EDR engagement became the anchor that now drives conversations with African governments, development agencies, and EPC contractors on railway, energy, and industrial projects across the corridor.")),
  p(t("In 2024, Move East completed its registration as a "), b("UNGM Registered Vendor"), t(" (United Nations Global Marketplace), formalising the company's eligibility for UN-system procurement. In the same period, founder Alessandro Petrini joined the Board of the "), b("China-Italy Chamber of Commerce (CICC)"), t(", the only chamber officially recognised by both the Chinese and Italian governments.")),

  // 9. What European companies can learn
  h("h2", t("What European companies can learn")),
  p(t("European companies selling into African infrastructure frequently underestimate one thing: the procurement architecture on most African infrastructure projects is already integrated with Chinese supply chains. Financing comes through Chinese banks or African development institutions. Lead contractors are often Chinese. Specifications are written around Chinese-compliant components.")),
  p(t("Ignoring that structure is expensive.")),
  p(t("Three operational lessons translate for European exporters aiming at African infrastructure.")),
  p(t("First, "), b("compatibility beats replacement"), t(". Offering a European-only alternative to a spec that is already Chinese-compatible adds friction. Offering a component that is interoperable with Chinese systems and certified to the required international standards is a much shorter sale.")),
  p(t("Second, "), b("China-side presence is a commercial asset"), t(". A European supplier with a registered Chinese counterpart — whether through a joint venture, a local office, or a structured sourcing partner — is operationally nearer to the project even when the destination is Africa.")),
  p(t("Third, "), b("documentation is the product"), t(". On African infrastructure projects, the quality of export documentation, compliance certificates, and traceability is often the decisive factor at the destination port.")),

  // 10. Byline
  h("h2", t("Byline & next steps")),
  p(i("Alessandro Petrini is Founder & Director of Move East Trading Co., Ltd., a procurement and trading company based in Shenzhen, China. He is a Board Member of the China-Italy Chamber of Commerce (CICC) and has been based in China since 2018. Move East is a UNGM Registered Vendor and the official outsourcing agent in China for the Ethiopia-Djibouti Railway.")),
  p(t("If your organisation is evaluating procurement in China for an African infrastructure, energy, or industrial project, write to "), b("info@moveasttrading.com"), t(" or request a discovery call at "), link("/contact", "/contact"), t(". Initial scoping conversations are not billed.")),
);

// ─────────────────────────────────────────────────────────────────────────────
// Run
// ─────────────────────────────────────────────────────────────────────────────

(async () => {
  const { getPayload } = await import("payload");
  const config = (await import(join(ROOT, "payload.config.ts"))).default;
  const payload = await getPayload({ config });

  // 1. Upload new cover (replace stock photo)
  console.log("→ Uploading new cover (hero-edr-railway.webp) to Media...");
  const coverBuf = await readFile(COVER_PATH);
  const cover = await payload.create({
    collection: "media",
    data: {
      alt: "CR400 Fuxing electric high-speed train crossing the East African landscape at golden hour",
      caption: "Ethiopia-Djibouti Railway corridor — visual reference",
      credit: "Move East Trading",
    },
    file: {
      data: coverBuf,
      mimetype: "image/webp",
      name: "edr-hero.webp",
      size: coverBuf.byteLength,
    },
  });
  console.log(`  ✓ Media id=${cover.id}`);

  // 2. Find existing article
  const { docs } = await payload.find({
    collection: "articles",
    where: { id: { equals: 1 } },
    limit: 1,
  });
  const article = docs[0];
  if (!article) {
    console.error("Article id=1 not found. Aborting.");
    process.exit(1);
  }

  // 3. Update — full content replacement
  console.log(`→ Rewriting article id=${article.id} (${article.slug})...`);
  await payload.update({
    collection: "articles",
    id: article.id,
    data: {
      title: TITLE,
      slug: NEW_SLUG,
      excerpt: EXCERPT,
      cover: cover.id,
      body: BODY as never,
      seoTitle: SEO_TITLE,
      seoDescription: SEO_DESCRIPTION,
      primaryKeyword: PRIMARY_KEYWORD,
      keywords: KEYWORDS,
      faqs: FAQS,
      status: "published",
    },
  });

  console.log(`  ✓ Article rewritten — new slug: /blog/${NEW_SLUG}`);
  console.log("\nDONE. Visit the article to verify rendering.");
  process.exit(0);
})();
