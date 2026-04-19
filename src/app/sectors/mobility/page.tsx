import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Railway & Mobility Procurement from China | Move East Trading",
  description:
    "Railway equipment, rolling stock, electric vehicles, and drones from qualified Chinese manufacturers. Official outsourcing agent in China for the $4B Ethiopia-Djibouti Railway. CICC Board, UNGM vendor.",
  alternates: { canonical: "/sectors/mobility" },
  openGraph: {
    title: "Railway & Mobility Procurement from China | Move East Trading",
    description:
      "CRRC-tier, BYD, and Shenzhen drone plants — EN 50155, TSI, and IRIS-aligned. Official outsourcing agent in China for the Ethiopia-Djibouti Railway.",
    url: "https://moveasttrading.com/sectors/mobility",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Railway & Mobility Procurement from China",
  url: "https://moveasttrading.com/sectors/mobility",
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
    "Railway equipment, rolling stock, electric vehicles, drones, and urban mobility infrastructure sourced from qualified Chinese manufacturers — including CRRC-tier suppliers, BYD, and the Shenzhen drone supply base.",
};

const PRODUCTS = [
  {
    category: "Rolling stock & rail components",
    items: ["Metro cars and light rail vehicles", "Railway signalling and SCADA systems", "Catenary and electrification hardware", "Track hardware, switches, fastening systems", "Bogies, wheelsets, axles"],
  },
  {
    category: "Electric vehicles & mobility",
    items: ["Electric buses and coaches (BYD-tier)", "Commercial EV trucks and logistics vehicles", "Battery packs for mobility (CATL-tier)", "EV charging infrastructure", "Industrial UAVs and drones (DJI-ecosystem suppliers)"],
  },
];

const CERTIFICATIONS = [
  "EN 50155 — rolling stock electronics",
  "EN 45545 — fire protection",
  "TSI — Technical Specifications for Interoperability (EU)",
  "IRIS — International Railway Industry Standard",
  "IEC 61375 — train communication networks",
  "UN 38.3 — battery transport safety",
  "CE marking for railway subsystems",
];

const STEPS = [
  {
    num: 1,
    title: "Technical specification",
    body: "Move East starts with the buyer's technical standard — EN 50155, TSI, or the project's bespoke spec — and maps it to Chinese manufacturing capability before any shortlist is issued.",
  },
  {
    num: 2,
    title: "Supplier shortlist",
    body: "Three to five verified Chinese manufacturers from the Move East railway supply network. For rolling stock, this means CRRC-tier and qualified sub-tier suppliers with documented export history.",
  },
  {
    num: 3,
    title: "Factory audit",
    body: "On-site audit in Guangdong, Hebei, Jiangsu, or Zhejiang covering production process, quality management system, certifications, and export capability. Audit reports are documented and signed.",
  },
  {
    num: 4,
    title: "Contract and QC",
    body: "Contracts are negotiated in Mandarin with EU/UN-grade legal clauses. Pre-production, in-line, and pre-shipment inspection stages run before any container is booked.",
  },
  {
    num: 5,
    title: "Delivery and after-sales",
    body: "Multi-modal freight from Shenzhen and Hong Kong to European, African, and Gulf ports. Spare-parts pipeline established for the operational phase — the real long-term contract.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "What railway products can Move East source from China?",
    answer:
      "Move East sources across the full railway supply chain: rolling stock components (bogies, wheelsets, electrical cabinets), signalling and SCADA systems, catenary and electrification hardware, track hardware, electric buses and commercial EVs, battery packs for mobility, EV charging infrastructure, and industrial UAVs. For rolling stock, the supplier network covers CRRC-tier and qualified sub-tier manufacturers with EU and international export history.",
  },
  {
    question: "What certifications can Move East manage for railway equipment from China?",
    answer:
      "Move East supports EN 50155 (rolling stock electronics), EN 45545 (fire protection), TSI (Technical Specifications for Interoperability), IRIS (International Railway Industry Standard), IEC 61375 (train communication networks), and CE marking for railway subsystems. Certification is coordinated with the relevant notified bodies and testing laboratories — SGS, TÜV, Intertek, Bureau Veritas.",
  },
  {
    question: "Why is Move East's Ethiopia-Djibouti Railway mandate relevant to my project?",
    answer:
      "Move East is the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway, Africa's first cross-border electric railway. The mandate covers supplier qualification, factory audits, export logistics, documentation, and spare-parts pipeline management on a project that is fully operational at commercial scale. That is not a pilot — it is a delivered reference that every client engagement inherits.",
  },
  {
    question: "Can Move East source for a European railway buyer under TSI requirements?",
    answer:
      "Yes. Move East works with European railway operators, EPC contractors, and rail infrastructure companies that require Chinese-manufactured components to TSI, EN 50155, or project-specific standards. The Rome office manages the European client interface; the Shenzhen team manages the factory-side specification alignment and audit.",
  },
  {
    question: "How long does it take to get a verified railway supplier shortlist?",
    answer:
      "For standard railway components within the Move East network (track hardware, electrical cabinets, standard signalling equipment), a verified shortlist takes 2 to 5 business days. For complex or custom items — bespoke rolling stock subsystems, new electrification designs, first-article rail components — shortlisting requires 1 to 3 weeks including technical feasibility assessment.",
  },
];

export default function MobilitySectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Sector · Mobility &amp; Smart Transport"
        title="Railway equipment, rolling stock &amp; mobility from China."
        subtitle="Move East Trading is the official outsourcing agent in China for the Ethiopia-Djibouti Railway, a $4 billion Belt and Road Initiative corridor. The company sources railway components, rolling stock, electric vehicles, drones, and urban mobility infrastructure directly from qualified Chinese manufacturers."
        primaryLabel="Request a supplier shortlist"
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
                CRRC-tier, BYD, and Shenzhen drone plants we audit and ship from.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Railway OEMs, electric bus and commercial EV manufacturers, battery suppliers, and industrial UAV producers across Shenzhen, Guangdong, and the Yangtze River Delta — EN 50155, TSI, and IRIS-aligned.
              </p>
              <p>
                Move East&apos;s Shenzhen base sits at the centre of China&apos;s mobility and energy storage ecosystem. BYD, CATL, DJI, and the qualified sub-tier suppliers feeding them are within a 60 km radius. The supplier network is built from on-site visits, export-record checks, and multi-year qualification — not from a directory.
              </p>
              <p>
                The anchor reference: Move East is the <strong className="text-[var(--text)]">official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway</strong> — Africa&apos;s first cross-border electric railway, fully operational since 2018.
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
            Rolling stock, EV, drones, and signalling. Eight categories.
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
                EN 50155, TSI, EN 45545, IRIS: the certification stack we manage.
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
                Certification is coordinated with SGS, TÜV, Intertek, and Bureau Veritas. Technical files are assembled to the standard required by the destination regulator — not translated from Chinese templates. Every certificate is cross-checked with the issuing body before delivery.
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
            Spec alignment, shortlisting, audit, QC, and logistics.
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

      {/* Case reference */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">Case reference · Railway</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Ethiopia-Djibouti Railway — the $4B Belt and Road corridor Move East sources in China.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East Trading is the official outsourcing agent in China for the Ethiopia-Djibouti Railway — a 752.7 km, fully electrified, standard-gauge cross-border railway connecting Addis Ababa to the Port of Djibouti. Project value: approximately $4 billion. In commercial operation since 2018.
              </p>
              <p>
                The engagement covers supplier qualification across rolling-stock, signalling, electrical, and track-hardware categories; factory audits at source in Guangdong, Hebei, and Jiangsu; export logistics through Hong Kong; documentation and compliance for Ethiopian and Djiboutian import regimes; and spare-parts pipeline management for the operational phase.
              </p>
              <p>
                Quality rejection rate on delivered components: <strong className="text-[var(--text)]">0%</strong>. The framework is applied to every client engagement.
              </p>
              <Link
                href="/blog/ethiopia-djibouti-railway-china-africa-procurement"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--text)] hover:text-[var(--brand)] transition-colors"
              >
                Read the full case study
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="label mb-4">Related services</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-[var(--text)] mb-8">
            Every sector runs across the three service lines.
          </h2>
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
        title="Request a railway supplier shortlist from Shenzhen."
        description="Send the product scope, technical standard, destination market, and volume. Move East returns a shortlist of 3 to 5 verified Chinese manufacturers — reviewed by the Shenzhen team, not an algorithm. Standard railway categories turn around in 2 to 5 business days."
        primaryLabel="Request a supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
