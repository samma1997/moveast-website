import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  FileCheck,
  Factory,
  FlaskConical,
  ScrollText,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Strategic Sourcing China | Move East Trading",
  description:
    "Strategic sourcing china and supplier verification from a Shenzhen-based procurement team. CICC Board, UNGM vendor, official EDR $4B railway agent.",
  alternates: { canonical: "/services/sourcing" },
  openGraph: {
    title: "Strategic Sourcing China | Move East Trading",
    description:
      "Strategic sourcing china and supplier verification from a Shenzhen-based procurement team. CICC Board, UNGM vendor, official EDR $4B railway agent.",
    url: "https://moveasttrading.com/services/sourcing",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Strategic Sourcing & Procurement",
  name: "Strategic Sourcing China",
  url: "https://moveasttrading.com/services/sourcing",
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
    "Strategic sourcing and procurement in China for European companies, African governments, and EPC contractors. Supplier verification, factory audits, contract negotiation, and quality control managed from Shenzhen.",
};

const INCLUDED = [
  "Supplier discovery across Guangdong, Jiangsu, Zhejiang, and Shandong manufacturing clusters",
  "On-site factory audits executed by Chinese-speaking engineers based in Shenzhen",
  "Supplier verification (business licence, export history, financial standing, capacity, certifications)",
  "Contract negotiation in Mandarin with EU/UN-grade legal clauses",
  "Quality control (pre-production, in-line, pre-shipment) and compliance documentation (CE, MDR, FDA, ISO)",
  "Procurement outsourcing for recurring categories — buyers receive finished POs, not search results",
];

const STEPS = [
  {
    num: 1,
    icon: FileCheck,
    title: "Requirements brief",
    meta: "Week 1",
    body:
      "Move East starts with a written specification: product, technical standards, target market, volume, timeline, and compliance requirements (CE, MDR, FDA, GOST, GCC). A sourcing brief is signed off before any supplier outreach begins. No we-will-figure-it-out-later — every scope is priced and documented.",
  },
  {
    num: 2,
    icon: Search,
    title: "Supplier shortlist",
    meta: "Week 1-2",
    body:
      "The team maps 15-30 candidate manufacturers from its direct network and cross-checks them against Chinese business registries (SAIC/AIC), export customs data, and existing Move East performance history. Buyers receive a shortlist of 3-5 verified suppliers with capacity, export track record, and price band — typically within 48 hours for standard categories.",
  },
  {
    num: 3,
    icon: Factory,
    title: "On-site factory audit",
    meta: "Week 2-4",
    body:
      "Move East engineers visit the shortlisted factories in person. A factory audit in China covers production lines, quality management system, raw material provenance, certifications, and export documentation. Audit reports include photos, video walkthroughs, and a scored risk matrix. This is not a desk review.",
  },
  {
    num: 4,
    icon: FlaskConical,
    title: "Sampling and technical validation",
    meta: "Step 4",
    body:
      "Samples are produced, tested against the buyer\u2019s specification, and \u2014 where required \u2014 sent to third-party labs (SGS, TÜV, Intertek, BV) for independent verification. Move East coordinates all logistics for sample movement and lab testing. European clients receive samples in Rome, African clients in Addis Ababa.",
  },
  {
    num: 5,
    icon: ScrollText,
    title: "Contract negotiation",
    meta: "Step 5",
    body:
      "Contracts are negotiated in Mandarin by Move East and structured under Hong Kong, Singapore, or applicable international law. Payment terms, Incoterms, quality tolerances, penalties, and IP protection clauses are explicit. The buyer signs one contract with Move East; Move East manages all upstream Chinese contracts.",
  },
  {
    num: 6,
    icon: ShieldCheck,
    title: "Quality control & pre-shipment inspection",
    meta: "Step 6",
    body:
      "Every order undergoes pre-production, in-line, and pre-shipment inspection. Quality rejection rate on Move East procurement operations stands at 0% on delivered components for the Ethiopia-Djibouti Railway programme. The inspection reports are released to the buyer before the bill of lading is issued.",
  },
  {
    num: 7,
    icon: Handshake,
    title: "Handover & supplier relationship management",
    meta: "Step 7",
    body:
      "Move East hands over a supplier file (contacts, contracts, inspection history, capacity data) and continues to manage the supplier relationship for recurring orders, price reviews, and capacity expansion. Buyers keep a single point of contact in Europe, Africa, or the Gulf; Move East runs the factory-side operation in China.",
  },
];

const WHY = [
  {
    title: "Physical presence in Shenzhen.",
    body:
      "Sourcing is executed from the factory floor, not from a WeChat account. Shenzhen hosts the fourth busiest container port in the world and is the hub for electronics, EV, energy storage, and medical manufacturing in China.",
  },
  {
    title: "CICC Board membership and UNGM registration.",
    body:
      "The China-Italy Chamber of Commerce is the only organisation recognised by both the Italian and Chinese governments, representing 800+ Italian companies in China. UNGM registration qualifies Move East for UN agency procurement — a standard European freelance agents cannot meet.",
  },
  {
    title: "The Ethiopia-Djibouti Railway credential.",
    body:
      "Move East is the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway under the Belt & Road Initiative. Strategic sourcing for a sovereign infrastructure programme of that scale is a capability the buyer inherits on every engagement.",
  },
  {
    title: "Sector-specialised sourcing, not generalist.",
    body:
      "The team sources deeply in four verticals — railway/mobility, renewable energy and BESS, medical devices (MDR/FDA-compliant), and industrial machinery. Generalist agents cover everything and verify nothing; Move East verifies because it specialises.",
  },
  {
    title: "European management standards in Chinese operations.",
    body:
      "The leadership is Italian and European-trained; the operations are local. Buyers receive contracts, audit reports, and compliance files formatted for EU procurement committees and UN tenders — not translated Alibaba listings.",
  },
];

const SECTORS = [
  {
    name: "Mobility & Smart Transport",
    detail: "Railway rolling stock, rail components, electric vehicles, drones, urban mobility.",
    href: "/sectors/mobility",
  },
  {
    name: "Renewable Energy & Storage",
    detail: "Solar PV modules, inverters, BESS, wind components.",
    href: "/sectors/renewable-energy",
  },
  {
    name: "Medical Devices & Healthcare",
    detail: "Diagnostic equipment, hospital devices, MDR and FDA-compliant manufacturers.",
    href: "/sectors/medical-devices",
  },
  {
    name: "Industrial Machinery & Smart Devices",
    detail: "CNC machinery, industrial automation, robotics, semiconductors, sensors.",
    href: "/sectors/industrial-machinery",
  },
];

const FAQS: FAQItem[] = [
  {
    question:
      "What is strategic sourcing in China and how is it different from buying on Alibaba?",
    answer:
      "Strategic sourcing in China is a structured procurement function: supplier discovery, on-site verification, contract negotiation, quality control, and ongoing supplier management. Alibaba is a marketplace. Strategic sourcing, as delivered by Move East Trading, includes physical factory audits in Shenzhen and Guangdong, Mandarin-language contracts, third-party lab testing, and pre-shipment inspection — none of which Alibaba provides.",
  },
  {
    question: "How do you verify Chinese suppliers?",
    answer:
      "Move East verifies suppliers through four parallel checks: (1) SAIC/AIC business registry verification, (2) export customs records to confirm real export history, (3) on-site factory audit in Shenzhen or Guangdong with Move East engineers, and (4) reference checks with existing buyers. Audit reports include photos, video walkthroughs, and a scored risk matrix. Desk reviews alone are not accepted.",
  },
  {
    question: "How much does a strategic sourcing engagement with Move East cost?",
    answer:
      "Pricing is project-based. One-off sourcing for a single category typically combines a sourcing fee with a commission on procurement value. Recurring or large-scale programmes — such as EPC supply packages — are structured as retainers. Factors that drive cost: category complexity, compliance level (MDR, FDA, CE), volume, and number of suppliers to audit. A fixed-price quote is provided before any work starts.",
  },
  {
    question: "How long does it take to receive a verified supplier shortlist?",
    answer:
      "For standard categories in the Move East network, a shortlist of 3-5 verified suppliers is delivered within 48 hours. For new categories or highly regulated products (medical devices, railway, energy storage), shortlisting takes 1-2 weeks because physical audits are required before any supplier is proposed.",
  },
  {
    question: "How do you handle quality control and factory audits in China?",
    answer:
      "Every order passes through three quality gates: pre-production inspection (raw materials and tooling), in-line inspection (production process), and pre-shipment inspection (finished goods). Factory audits are performed by Move East engineers based in Shenzhen and cover production lines, quality management systems, certifications, and export readiness. Third-party inspection bodies (SGS, TÜV, Intertek, BV) are engaged where the buyer or regulator requires independent verification.",
  },
  {
    question: "How is intellectual property protected when sourcing from China?",
    answer:
      "IP protection is handled at three layers: (1) contracts include explicit NNN (Non-use, Non-disclosure, Non-circumvention) clauses drafted in Mandarin and enforceable in Chinese courts, (2) tooling and moulds are owned by the buyer or held in escrow by Move East, and (3) technical drawings are released only to audited suppliers under segmented workflows. Move East also advises on Chinese trademark and patent registration before the first shipment.",
  },
  {
    question:
      "Does Move East source for European companies specifically, or only for large projects?",
    answer:
      "Move East serves European companies, African governments, EPC contractors, and distributors. The firm is a dedicated china sourcing agent for european companies requiring MDR, CE, or industrial compliance, with a Rome office managing the European client interface. Engagements range from single-category sourcing to multi-year supply chain programmes. The minimum engagement typically corresponds to a project where compliance and verification justify structured procurement rather than direct purchase.",
  },
];

export default function StrategicSourcingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Service 01 · Strategic Sourcing & Procurement"
        title="Strategic Sourcing in China, run from the factory floor."
        subtitle="Move East Trading identifies, verifies, and contracts Chinese manufacturers on behalf of global buyers — with physical teams in Shenzhen, Hong Kong, Rome, and Addis Ababa. Backed by CICC Board membership, UNGM vendor status, and procurement operations for the $4 billion Ethiopia-Djibouti Railway."
        primaryLabel="Request a verified supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min sourcing consultation"
        secondaryHref="/contact"
      />

      {/* What We Do */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">What we do</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Full upstream procurement in China, delivered as one accountable scope.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East Trading is a Shenzhen-based procurement company that runs strategic sourcing in China for European companies, African governments, EPC contractors, and global distributors. The firm operates from four offices across three continents and is led by Alessandro Petrini, a Board Member of the China-Italy Chamber of Commerce (CICC) and UNGM Registered Vendor.
              </p>
              <p>
                Strategic sourcing, in the Move East definition, means taking full responsibility for the upstream procurement function in China — from supplier discovery to contract execution — so that the buyer receives verified, compliant, factory-price supply without operating on the ground. The team is the same one that was appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway, a $4 billion rail project under the Belt &amp; Road Initiative.
              </p>
              <div className="pt-4">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-[var(--text)] mb-4">
                  What is included
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
            Seven steps. Documented milestones. One operator accountable.
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
          <p className="label mb-4">Why Move East for strategic sourcing</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            Credentials that replace search with verification.
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
                Four high-value verticals. Non-negotiable compliance.
              </h2>
              <p className="mt-5 text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-md">
                Strategic sourcing by Move East is concentrated where technical specification, compliance, and supplier reliability decide the outcome. The firm does not source fashion, consumer electronics, or general trade goods.
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
                Ethiopia-Djibouti Railway — 752.7 km, 0% rejection rate.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East was appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway, a $4 billion cross-border rail connecting Addis Ababa to the port of Djibouti under the Belt &amp; Road Initiative. Strategic sourcing operations covered rolling stock components, rail infrastructure hardware, and electrical subsystems across multiple Chinese manufacturers.
              </p>
              <p>
                Delivered quality rejection rate on components: <strong className="text-[var(--text)]">0%</strong>. Procurement was coordinated across four countries simultaneously — China, Ethiopia, Djibouti, and Italy.
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
        title="Request a verified supplier shortlist in 48 hours."
        description="Send a specification, a target market, and an approximate volume. Move East returns a shortlist of 3-5 verified Chinese manufacturers with capacity, price band, and compliance profile — reviewed by the Shenzhen team, not an algorithm."
        primaryLabel="Request supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min sourcing call"
        secondaryHref="/contact"
      />
    </>
  );
}
