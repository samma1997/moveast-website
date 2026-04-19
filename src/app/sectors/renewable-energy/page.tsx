import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Solar, BESS & Renewable Energy Procurement from China | Move East",
  description:
    "Solar PV, BESS, inverters, and wind components from tier-one Chinese manufacturers. Longi, Jinko, CATL, BYD, and Sungrow-tier. CICC Board Member, UNGM Registered Vendor, Shenzhen-based.",
  alternates: { canonical: "/sectors/renewable-energy" },
  openGraph: {
    title: "Solar, BESS & Renewable Energy Procurement from China | Move East",
    description:
      "Tier-one solar PV, utility-scale BESS, inverters, and wind from Longi, Jinko, CATL, BYD, and Sungrow-tier plants. BNEF Tier-1, PVEL-verified, IEC 61215 compliant.",
    url: "https://moveasttrading.com/sectors/renewable-energy",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Renewable Energy & Storage Procurement from China",
  url: "https://moveasttrading.com/sectors/renewable-energy",
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
    "Solar PV modules, battery energy storage systems, inverters, and wind components sourced from tier-one Chinese manufacturers. BNEF Tier-1, PVEL-verified, IEC 61215 compliant.",
};

const PRODUCTS = [
  {
    category: "Solar PV",
    items: [
      "Utility-scale mono and bifacial modules",
      "C&I solar PV panels (BNEF Tier-1)",
      "Agri-PV and floating solar systems",
      "PVEL-verified, IEC 61215 / IEC 61730 tested",
    ],
  },
  {
    category: "Battery Energy Storage (BESS)",
    items: [
      "Utility-scale BESS (1 MWh to 100+ MWh)",
      "C&I and behind-the-meter battery systems",
      "LFP cell and pack level (CATL-tier)",
      "UN 38.3, IEC 62619, UL 9540 compliant",
    ],
  },
  {
    category: "Inverters & power electronics",
    items: [
      "String, central, and hybrid inverters",
      "Grid-forming and grid-following capability",
      "VDE-AR-N 4105, G99, AS4777, UL 1741 certified",
      "Sungrow, Huawei-tier and qualified alternatives",
    ],
  },
  {
    category: "Wind & off-grid",
    items: [
      "Wind turbine nacelles, towers, and blades",
      "Repowering components and upgrades",
      "Mini-grid and off-grid hybrid systems for Africa",
      "Diesel-solar hybrid containerised power plants",
    ],
  },
];

const CERTIFICATIONS = [
  "IEC 61215 — crystalline silicon PV modules",
  "IEC 61730 — PV module safety",
  "BNEF Tier-1 — bankability verification",
  "PVEL PQP — Product Qualification Programme",
  "IEC 62619 — safety of stationary batteries",
  "UN 38.3 — battery transport",
  "UL 9540 — BESS safety",
  "VDE-AR-N 4105 — grid connection (Germany)",
  "G99 — grid connection (UK)",
  "IEC 61400 — wind turbines",
];

const STEPS = [
  {
    num: 1,
    title: "Technical specification",
    body: "Move East starts with the buyer's grid requirement, project size, and certification target. For solar, this means module spec (watt-class, temperature coefficient, bifaciality, warranty). For BESS, it means chemistry, cycle life, C-rate, and integration standard.",
  },
  {
    num: 2,
    title: "Tier-1 verified shortlist",
    body: "Three to five manufacturers from the Move East renewable energy network — BNEF Tier-1 for solar, qualified CATL/BYD-tier for BESS, Sungrow/Huawei-tier for inverters. PVEL scores and independent audit data included where available.",
  },
  {
    num: 3,
    title: "Factory audit",
    body: "On-site audit at solar fabs in Jiangsu and Anhui, BESS plants in Guangdong and Fujian, inverter facilities in Guangdong and Zhejiang. Process, QMS, and export documentation verified before any PO.",
  },
  {
    num: 4,
    title: "Contract and pre-shipment inspection",
    body: "Contracts include full performance warranty, delivery tolerances, and power-output guarantee clauses. Third-party pre-shipment inspection is standard on every solar and BESS order.",
  },
  {
    num: 5,
    title: "Logistics and site delivery",
    body: "Containerised freight from Shenzhen and Hong Kong to European ports (Rotterdam, Antwerp, Genoa) and African gateways (Djibouti, Mombasa, Durban). Heavy BESS systems handled with specialist heavy-lift logistics.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "What solar PV products can Move East source from China?",
    answer:
      "Move East sources utility-scale and C&I mono and bifacial solar PV modules from BNEF Tier-1 manufacturers — primarily Longi, Jinko, Trina, JA Solar, and equivalent-tier producers. Products are PVEL-verified and carry IEC 61215 and IEC 61730 certifications. Agri-PV and floating solar systems are available from specialist sub-tier manufacturers.",
  },
  {
    question: "Can Move East source a utility-scale BESS from China?",
    answer:
      "Yes. Move East sources utility-scale battery energy storage systems from 1 MWh to 100+ MWh — primarily from CATL-tier and BYD Energy division suppliers using LFP chemistry. Certifications covered include IEC 62619, UN 38.3, and UL 9540. For African deployments, the Addis Ababa office coordinates destination-country import and installation compliance.",
  },
  {
    question: "How does Move East verify that solar modules are genuinely Tier-1?",
    answer:
      "BNEF Tier-1 status is independently verifiable on the Bloomberg NEF website. Move East cross-checks module manufacturer status at the time of shortlisting, confirms the specific production facility (not just the brand), and coordinates PVEL Product Qualification Programme data. For large orders, an independent pre-shipment flash test at the manufacturer's facility is standard.",
  },
  {
    question: "Do you source inverters and BESS for the African market?",
    answer:
      "Yes. Move East has an active Africa corridor for renewable energy equipment. The Addis Ababa office coordinates destination-side compliance, local standards, and last-mile delivery into Ethiopia and the wider Horn of Africa. Mini-grid and off-grid hybrid systems — including diesel-solar hybrid containerised power plants — are a specific product line for rural electrification programmes.",
  },
  {
    question: "What is the cost reduction Move East achieves on solar procurement?",
    answer:
      "Move East&apos;s solar procurement track record includes a 5 MW tier-one solar supply delivered at a 30% cost reduction versus European-sourced alternatives — same manufacturer tier, same performance specification. The reduction comes from direct factory pricing, consolidated logistics, and structured commercial negotiation in Mandarin, not from reducing quality.",
  },
  {
    question: "What renewable energy certifications does Move East support?",
    answer:
      "For solar: IEC 61215, IEC 61730, BNEF Tier-1, PVEL PQP. For BESS: IEC 62619, UN 38.3, UL 9540. For inverters: VDE-AR-N 4105 (Germany), G99 (UK), AS4777 (Australia), UL 1741 (US). For wind: IEC 61400 series. Third-party testing is coordinated with SGS, TÜV, DNV, and Bureau Veritas depending on the product and destination market.",
  },
];

export default function RenewableEnergySectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Sector · Renewable Energy &amp; Storage"
        title="Solar, wind, and BESS from tier-one Chinese makers."
        subtitle="Move East Trading sources solar PV modules, battery energy storage systems, inverters, and wind components from tier-one Chinese manufacturers. The company operates from Shenzhen, is led by a CICC Board Member, and is a UNGM Registered Vendor."
        primaryLabel="Request a tier-1 supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min consultation"
        secondaryHref="/contact"
      />

      {/* Factory network */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">Factory network</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Longi, Jinko, CATL, BYD, and Sungrow-tier plants we audit and ship from.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Solar PV, BESS, inverter, and wind component manufacturers across Jiangsu, Anhui, Fujian, and Guangdong — BNEF Tier-1, PVEL-verified, and IEC 61215 compliant.
              </p>
              <p>
                Nine of the world&apos;s ten largest solar PV module manufacturers are Chinese. Seven of the top ten BESS manufacturers are Chinese. The supply depth is unmatched — and the price-performance gap versus European-manufactured alternatives widens each year.
              </p>
              <p>
                Move East&apos;s track record includes a <strong className="text-[var(--text)]">5 MW tier-one solar supply at 30% cost reduction</strong> versus European-sourced alternatives — same specification, same BNEF Tier-1 tier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">Products sourced</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            Solar PV, BESS, inverters, wind, and off-grid hybrid systems.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {PRODUCTS.map((p) => (
              <div
                key={p.category}
                className="border border-[var(--border)] rounded-2xl p-7 bg-[var(--surface)]"
              >
                <h3 className="text-[1.0625rem] font-semibold text-[var(--text)]">
                  {p.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="text-[0.9375rem] text-[var(--text-secondary)] pl-4 relative leading-relaxed"
                    >
                      <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[var(--brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">Compliance</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                IEC 61215, UN 38.3, VDE-AR-N 4105, G99: certification stack for renewables.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center px-4 py-2 text-[0.875rem] font-medium text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                Third-party testing is coordinated with SGS, TÜV, DNV, and Bureau Veritas depending on the product and destination market. BNEF Tier-1 status is cross-checked at the time of shortlisting, not relied upon from manufacturer marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">The five-step process</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            Spec, tier-1 shortlist, audit, inspection, and delivery.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="border border-[var(--border)] rounded-2xl p-7 bg-[var(--surface)] flex flex-col"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                  {s.num}
                </div>
                <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Africa deployment */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">Africa deployment</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Mini-grid and off-grid hybrid systems for East Africa through Addis Ababa.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East operates the China-Africa renewable energy corridor through its Shenzhen and Addis Ababa offices. Solar PV, BESS, and hybrid power plant systems are routed to Ethiopia and the wider Horn of Africa via Djibouti port — the same logistics corridor established through the Ethiopia-Djibouti Railway programme.
              </p>
              <p>
                For African development banks, rural electrification programmes, and EPC contractors, Move East delivers containerised mini-grid and off-grid hybrid power plants with full documentation aligned to donor-agency procurement standards and African customs regimes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="label mb-4">Related services</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Strategic Sourcing & Procurement", href: "/services/sourcing" },
              { label: "Technology Transfer & Project Integration", href: "/services/technology-transfer" },
              { label: "Trading & Supply Chain Management", href: "/services/supply-chain" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 hover:border-[var(--brand)]/30 transition-all"
              >
                <span className="text-[0.9375rem] font-medium text-[var(--text)]">
                  {l.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FAQS} />

      <CTABlock
        eyebrow="Let&apos;s talk"
        title="Request a tier-one renewable energy supplier shortlist."
        description="Send the product spec, project size, destination market, and certification target. Move East returns a BNEF Tier-1 or equivalent verified shortlist — reviewed by the Shenzhen team. Standard categories turn around in 48 hours."
        primaryLabel="Request a supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
