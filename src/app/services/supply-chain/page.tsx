import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardList,
  ShieldCheck,
  FileText,
  Ship,
  Landmark,
  CreditCard,
  Warehouse,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Supply Chain Management China | Move East Trading",
  description:
    "Supply chain management china — end-to-end logistics, customs, and compliance from Shenzhen to Europe, Africa, and the Gulf. CICC, UNGM, EDR $4B railway.",
  alternates: { canonical: "/services/supply-chain" },
  openGraph: {
    title: "Supply Chain Management China | Move East Trading",
    description:
      "Supply chain management china — end-to-end logistics, customs, and compliance from Shenzhen to Europe, Africa, and the Gulf. CICC, UNGM, EDR $4B railway.",
    url: "https://moveasttrading.com/services/supply-chain",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Trading & Supply Chain Management",
  name: "Supply Chain Management China",
  url: "https://moveasttrading.com/services/supply-chain",
  provider: {
    "@type": "Organization",
    name: "Move East Trading Co., Ltd.",
    url: "https://moveasttrading.com",
    address: [
      { "@type": "PostalAddress", addressLocality: "Shenzhen", addressCountry: "CN" },
      { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
      { "@type": "PostalAddress", addressLocality: "Rome", addressCountry: "IT" },
      { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
    ],
  },
  areaServed: ["Europe", "Africa", "Asia", "Gulf"],
  description:
    "End-to-end supply chain management from China to Europe, Africa, and the Gulf. Logistics coordination, customs, compliance documentation, and delivery visibility — managed by Move East Trading from Shenzhen and Hong Kong.",
};

const INCLUDED = [
  "Purchase-order management with Chinese manufacturers across Guangdong, Jiangsu, Zhejiang, and Shandong",
  "Quality control — pre-production, in-line, and pre-shipment inspection",
  "Export documentation — commercial invoice, packing list, certificate of origin, CE/FDA/MDR technical files",
  "Freight coordination — sea, air, rail (China-Europe Railway Express), and multi-modal",
  "Customs clearance — import and export filings in China, EU, Africa, and the Gulf",
  "Trade finance — letters of credit, escrow, and — via the Hong Kong office — USD settlement",
  "In-market delivery — warehousing and last-mile into Rome, Addis Ababa, and partner hubs",
];

const STEPS = [
  {
    num: 1,
    icon: ClipboardList,
    title: "Purchase order & production plan",
    meta: "Step 1",
    body:
      "Move East converts the buyer's contract into Chinese PO(s) with each manufacturer. Production schedules, milestones, and quality gates are fixed before material is released. The buyer receives a single production dashboard — not five supplier WeChat groups.",
  },
  {
    num: 2,
    icon: ShieldCheck,
    title: "Production oversight & quality control",
    meta: "Step 2",
    body:
      "Move East engineers run pre-production, in-line, and pre-shipment inspection from Shenzhen. Non-conformities are flagged before the goods leave the factory. On the Ethiopia-Djibouti Railway programme, this gate delivered a 0% quality rejection rate on components.",
  },
  {
    num: 3,
    icon: FileText,
    title: "Export documentation & compliance",
    meta: "Step 3",
    body:
      "The team assembles the export pack: commercial invoice, packing list, certificate of origin, and — where applicable — CE, MDR, FDA, or GCC technical files. Documentation is prepared to the standard required by the destination customs authority, not the minimum accepted by the Chinese exporter.",
  },
  {
    num: 4,
    icon: Ship,
    title: "Freight & multi-modal logistics",
    meta: "Step 4",
    body:
      "Move East coordinates freight across sea (Shenzhen Yantian, Shekou, Hong Kong), air (SZX, HKG), and rail (China-Europe Railway Express from Chengdu/Yiwu into Duisburg, Madrid, or Milan). Africa-bound cargo routes through Djibouti, Mombasa, or Durban depending on the project.",
  },
  {
    num: 5,
    icon: Landmark,
    title: "Customs clearance",
    meta: "Step 5",
    body:
      "Customs filings are handled on both ends. On the Chinese side, Move East runs the export declaration through the Shenzhen or Hong Kong office. On the import side, the Rome office handles EU customs (with full HS code classification, anti-dumping screening, and VAT positioning) and the Addis Ababa office handles African customs and local duty regimes.",
  },
  {
    num: 6,
    icon: CreditCard,
    title: "Trade finance & risk management",
    meta: "Step 6",
    body:
      "The Hong Kong office handles USD settlement, letters of credit, and escrow arrangements for buyers who require them. Forex and payment-term risk are priced into the engagement rather than passed to the buyer mid-project. Cargo insurance is structured at origin.",
  },
  {
    num: 7,
    icon: Warehouse,
    title: "In-market delivery & reverse logistics",
    meta: "Step 7",
    body:
      "Move East coordinates warehousing and last-mile into Europe, Africa, and the Gulf via the Rome and Addis Ababa hubs and partner networks. Reverse logistics — warranty returns, spare-part dispatch, rejected-shipment handling — stays with Move East so the buyer does not operate two supply chains.",
  },
];

const WHY = [
  {
    title: "Shenzhen base, world's 4th busiest port.",
    body:
      "Move East's HQ sits at the centre of China's export gateway. For logistics china europe and logistics china africa routes, proximity to Yantian and Shekou terminals plus the Hong Kong gateway compresses lead time and document cycles.",
  },
  {
    title: "Four offices, one operation.",
    body:
      "Shenzhen runs production and export. Hong Kong runs trade finance and compliance. Rome runs European customs and client interface. Addis Ababa runs the China-Africa corridor — including the route into Ethiopia, Djibouti, Kenya, and the Horn of Africa. One operator, four legal jurisdictions covered.",
  },
  {
    title: "CICC Board and UNGM.",
    body:
      "The China-Italy Chamber of Commerce is the only organisation recognised by both the Italian and Chinese governments, representing 800+ Italian companies in China. UNGM registration qualifies Move East for UN agency procurement. Governments, multilaterals, and listed companies can contract directly.",
  },
  {
    title: "Proven on sovereign and crisis supply chains.",
    body:
      "Move East is the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway. During COVID-19, the firm delivered medical equipment to European partners at 100% delivery rate under emergency conditions. Supply chain reliability is evidenced, not promised.",
  },
  {
    title: "Dedicated China-Africa corridor.",
    body:
      "The China-Africa trade corridor moved $282 billion in 2025 — and almost no structured sourcing agent covers it end-to-end. Move East, with both a Shenzhen and an Addis Ababa office, is the supply chain operator built for that corridor.",
  },
];

const SECTORS = [
  {
    name: "Mobility & Smart Transport",
    detail: "Railway rolling stock, EV components, mobility infrastructure shipped under multi-modal contracts.",
    href: "/sectors/mobility",
  },
  {
    name: "Renewable Energy & Storage",
    detail: "Solar PV modules, BESS, inverters — containerised supply into EU and African projects.",
    href: "/sectors/renewable-energy",
  },
  {
    name: "Medical Devices & Healthcare",
    detail: "MDR/FDA-compliant shipments with full technical file and customs documentation.",
    href: "/sectors/medical-devices",
  },
  {
    name: "Industrial Machinery & Smart Devices",
    detail: "CNC machinery, industrial automation, robotics — heavy and oversized cargo handled end-to-end.",
    href: "/sectors/industrial-machinery",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "What does end-to-end supply chain management from China actually include?",
    answer:
      "End-to-end supply chain management from China, as delivered by Move East, includes PO management with Chinese manufacturers, production oversight, quality control, export documentation, freight across sea/air/rail, customs clearance at origin and destination, trade finance where required, and in-market delivery into Europe, Africa, or the Gulf. The buyer signs one contract with Move East; upstream Chinese contracts, freight forwarders, and customs brokers are coordinated by the Shenzhen and Hong Kong offices.",
  },
  {
    question: "Which shipping routes do you use between China and Europe?",
    answer:
      "For logistics china europe, Move East uses three primary routes: sea freight from Shenzhen Yantian, Shekou, or Hong Kong to European hubs (Rotterdam, Antwerp, Genoa, Gioia Tauro); China-Europe Railway Express from Chengdu, Chongqing, or Yiwu to Duisburg, Madrid, or Milan; and air freight from SZX or HKG for time-critical or high-value shipments. Route selection is driven by cargo value, weight, time sensitivity, and Incoterms agreed with the buyer.",
  },
  {
    question: "How does Move East handle the China-Africa supply chain?",
    answer:
      "Move East operates the supply chain china africa corridor end-to-end through its Shenzhen and Addis Ababa offices. Typical sea routes run from Shenzhen to Djibouti, Mombasa, Lagos, or Durban; inland transport is coordinated with local partners. The Addis Ababa office handles customs, local duty, and last-mile delivery into Ethiopia and the Horn of Africa. Documentation is prepared to the standard required by the destination customs authority and — for sovereign projects — to UN procurement standard.",
  },
  {
    question: "How are customs and import duties managed?",
    answer:
      "Customs are managed on both ends. Export filings in China are handled by the Shenzhen or Hong Kong office. Import filings are handled by the Rome office for the EU (HS code classification, anti-dumping screening, VAT positioning) and by the Addis Ababa office for African markets. Gulf markets are covered via partner brokers under Move East coordination. HS codes and duty calculations are shared with the buyer before shipment, not after.",
  },
  {
    question: "How do you ensure on-time delivery and manage delays?",
    answer:
      "Production milestones are fixed in the Chinese PO and monitored by Move East engineers in Shenzhen. Pre-shipment inspection confirms readiness before container booking. Freight is contracted with forwarders selected on route-by-route performance. If a delay occurs, Move East activates the alternative route (rail vs sea, air upgrade) and the buyer is notified immediately. During COVID-19, the firm maintained a 100% delivery rate and 48-hour response time to European partners under emergency conditions.",
  },
  {
    question: "Do you offer trade finance or handle letters of credit?",
    answer:
      "Yes, through the Hong Kong office. Move East handles USD settlement, letters of credit, and escrow arrangements for buyers who require them — including government and multilateral buyers working under UN procurement frameworks. Forex and payment-term risk are priced into the engagement. Trade finance structure is agreed at contract stage, not mid-shipment.",
  },
  {
    question: "Can Move East act as a single supplier for an EPC contractor with multi-category scope?",
    answer:
      "Yes. EPC contractors are a core client segment. Move East runs consolidated supply packages across railway/mobility, renewable energy, medical, and industrial machinery — one contract, one operational team, one set of compliance documents. The Ethiopia-Djibouti Railway programme is the reference: procurement coordinated across four countries simultaneously, multiple Chinese manufacturers, and a single operator accountable for delivery.",
  },
];

export default function SupplyChainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Service 03 · Trading & Supply Chain Management"
        title="Supply Chain Management from China, end-to-end."
        subtitle="Move East Trading runs supply chain management china from Shenzhen — the world's 4th busiest container port — coordinating logistics, customs, compliance, and delivery into Europe, Africa, and the Gulf. One contract for the buyer, one operation for the project."
        primaryLabel="Map your supply chain from Shenzhen"
        primaryHref="/contact"
        secondaryLabel="Request a logistics scoping call"
        secondaryHref="/contact"
      />

      {/* What We Do */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">What we do</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                One contract. One operator. End-to-end accountability.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East Trading is a Shenzhen-based trading and procurement company that delivers end-to-end procurement from China as a single operational service: sourcing, production oversight, export documentation, freight, customs, and in-market delivery — one contract, one point of accountability. The buyer receives a finished, compliant shipment; Move East runs the upstream operation.
              </p>
              <p>
                The firm is led by Alessandro Petrini, CICC Board Member and UNGM Registered Vendor, and operates from Shenzhen, Hong Kong, Rome, and Addis Ababa. Supply chain operations on the Ethiopia-Djibouti Railway — a $4 billion Belt &amp; Road programme — delivered a <strong className="text-[var(--text)]">0% quality rejection rate</strong> on components, with a 48-hour average response time to European partners on crisis-condition medical supply during COVID-19.
              </p>
              <div className="pt-4">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-[var(--text)] mb-4">
                  What Move East supply chain services cover
                </p>
                <ul className="space-y-3">
                  {INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="text-[0.9375rem] text-[var(--text-secondary)] pl-5 relative leading-relaxed"
                    >
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">Our process</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            From purchase order to last-mile, under one operation.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="border border-[var(--border)] rounded-2xl p-7 bg-[var(--surface)] flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                      {s.num}
                    </div>
                    <Icon className="w-4 h-4 text-[var(--text-secondary)]" />
                  </div>
                  <p className="mt-5 text-[0.75rem] font-mono uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                    {s.meta}
                  </p>
                  <h3 className="mt-2 text-[1.0625rem] font-semibold text-[var(--text)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Move East */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">Why Move East for supply chain</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            Four offices, multi-modal freight, UN-grade compliance.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="border border-[var(--border)] rounded-2xl p-7 bg-[var(--surface)]"
              >
                <h3 className="text-[1.0625rem] font-semibold text-[var(--text)]">{w.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="label mb-4">Sectors we serve</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Capital equipment and project supply. Not consumer volume trade.
              </h2>
              <p className="mt-5 text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-md">
                Supply chain management by Move East runs on sector-deep operations. The firm coordinates heavy, regulated, and oversized cargo — not general merchandise.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SECTORS.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 hover:border-[var(--brand)]/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[0.9375rem] font-semibold text-[var(--text)]">
                      {s.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                  </div>
                  <p className="mt-2 text-[0.8125rem] text-[var(--text-secondary)] leading-relaxed">
                    {s.detail}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">Case study</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Ethiopia-Djibouti Railway & COVID medical supply.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East is the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway, a 752.7 km cross-border rail connecting Addis Ababa to the port of Djibouti. The supply chain workstream covered production oversight, export documentation, and multi-country customs clearance under Belt &amp; Road procurement governance. Delivered rejection rate on components: <strong className="text-[var(--text)]">0%</strong>.
              </p>
              <p>
                In parallel, during COVID-19, Move East sourced and delivered medical equipment to European partners under emergency conditions, with a <strong className="text-[var(--text)]">100% delivery rate</strong> and a <strong className="text-[var(--text)]">48-hour average response time</strong>.
              </p>
              <Link
                href="/case-studies/ethiopia-railway"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--text)] hover:text-[var(--brand)] transition-colors"
              >
                Read the full case study
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={FAQS} />

      <CTABlock
        eyebrow="Let's talk"
        title="Map your supply chain from Shenzhen — one operator, end-to-end."
        description="Share the product scope, destination market, and approximate volume. Move East returns a supply chain map: origin suppliers, routes, lead times, customs path, and indicative landed cost — reviewed by the Shenzhen operations team."
        primaryLabel="Request a logistics scoping call"
        primaryHref="/contact"
        secondaryLabel="See the network"
        secondaryHref="/about"
      />
    </>
  );
}
