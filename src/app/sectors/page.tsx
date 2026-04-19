import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Train,
  Sun,
  HeartPulse,
  Cog,
  ShieldCheck,
  Factory,
  Globe2,
  FileCheck,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "China Procurement by Sector | Vertical Sourcing | Move East",
  description:
    "China procurement by sector — mobility, renewable energy, medical devices, and industrial machinery. Shenzhen-based sourcing through a CICC Board Member and UNGM Registered Vendor.",
  alternates: { canonical: "/sectors" },
  openGraph: {
    title: "China Procurement by Sector | Move East Trading",
    description:
      "Four industrial verticals where Chinese manufacturers lead global supply — sourced from Shenzhen for clients in Europe, Africa, Asia, and the Gulf.",
    url: "https://moveasttrading.com/sectors",
    type: "website",
  },
};

const SECTORS = [
  {
    num: "01",
    icon: Train,
    title: "Mobility & Smart Transport",
    summary:
      "Railway equipment, rolling stock, electric vehicles, drones, and urban mobility infrastructure sourced from China's leading manufacturers — including CRRC-tier suppliers, BYD, and the dense Shenzhen drone supply base.",
    bullets: [
      "Rolling stock, metro systems, signaling",
      "Electric buses, trucks, commercial EVs",
      "Battery packs for mobility (CATL-tier)",
      "Industrial UAVs and EV charging",
      "TSI, EN 50155, EN 45545 compliance",
    ],
    reference: "Official outsourcing agent in China for the $4B Ethiopia-Djibouti Railway.",
    href: "/sectors/mobility",
  },
  {
    num: "02",
    icon: Sun,
    title: "Renewable Energy & Storage",
    summary:
      "Solar PV modules, battery energy storage systems (BESS), inverters, wind components, and off-grid hybrid systems from tier-one Chinese manufacturers including Longi, Jinko, Trina, JA Solar, CATL, BYD, Sungrow, and Huawei.",
    bullets: [
      "Utility and C&I solar PV modules",
      "Utility-scale BESS (1 MWh to 100+ MWh)",
      "String, central, and hybrid inverters",
      "Wind turbine components and repowering",
      "IEC 61215, Bloomberg Tier-1, PVEL verification",
    ],
    reference: "5 MW solar procurement at 30% cost reduction vs European-sourced alternatives.",
    href: "/sectors/renewable-energy",
  },
  {
    num: "03",
    icon: HeartPulse,
    title: "Medical Devices & Healthcare",
    summary:
      "CE-marked and FDA-registered medical devices, diagnostic imaging, hospital equipment, IVD, consumables, and wearable devices from qualified Chinese manufacturers including Mindray, United Imaging, and specialist tier-two producers.",
    bullets: [
      "MRI, CT, ultrasound, X-ray, C-arms",
      "Patient monitors, ventilators, ICU equipment",
      "IVD analysers and laboratory equipment",
      "AI diagnostic platforms and wearables",
      "EU MDR, ISO 13485, FDA 510(k), IEC 60601",
    ],
    reference: "100% delivery rate on COVID-19 emergency supply; 48-hour response time.",
    href: "/sectors/medical-devices",
  },
  {
    num: "04",
    icon: Cog,
    title: "Industrial Machinery & Smart Devices",
    summary:
      "CNC machining centers, industrial robots, automation cells, precision sensors, semiconductor equipment, and injection molding machinery from Chinese OEMs and qualified tier-two manufacturers.",
    bullets: [
      "5-axis CNC, lathes, grinding, EDM",
      "Articulated robots, cobots, automation cells",
      "Vision systems, IIoT, precision sensors",
      "Semiconductor handling and metrology",
      "Machinery Directive, ISO 10218, ISO 12100",
    ],
    reference: "Three production lines transferred to East Africa; 120+ local engineers trained.",
    href: "/sectors/industrial-machinery",
  },
];

const SERVICES_LINKS = [
  {
    label: "Strategic Sourcing & Procurement",
    description: "Supplier discovery, factory audits, contracts, QC.",
    href: "/services/sourcing",
  },
  {
    label: "Technology Transfer & Project Integration",
    description: "IP, CE/MDR/FDA compliance, FAT/SAT, training.",
    href: "/services/technology-transfer",
  },
  {
    label: "Trading & Supply Chain Management",
    description: "PO management, freight, customs, trade finance.",
    href: "/services/supply-chain",
  },
];

const CROSS_SECTOR = [
  {
    icon: Factory,
    title: "On-the-ground sourcing in Shenzhen.",
    body: "Four offices — Shenzhen HQ, Hong Kong, Rome, Addis Ababa — and a team combining Chinese, Italian, and African market expertise. Every supplier is audited on-site before procurement.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional credentials that open doors.",
    body: "CICC Board Member (Alessandro Petrini, representing 800+ Italian companies in China), UNGM Registered Vendor qualified for UN agency procurement, and official outsourcing agent for the Ethiopia-Djibouti Railway.",
  },
  {
    icon: FileCheck,
    title: "Compliance depth across frameworks.",
    body: "EU MDR, CE, FDA, IEC 60601, IEC 61215, EN 50155, TSI, Machinery Directive, ISO 9001, ISO 13485, RoHS, REACH. Certificates are cross-checked with issuing bodies and notified bodies.",
  },
  {
    icon: Globe2,
    title: "Multi-market delivery — Europe, Africa, Gulf, Asia.",
    body: "Active delivery across four regions, with a dedicated China-Africa corridor through the Addis Ababa office and trade finance coordinated from Hong Kong.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "Why does Move East focus on only four sectors?",
    answer:
      "Generic sourcing agents cover everything shallowly. Move East covers four verticals deeply. Each sector has its own regulatory stack, supplier geography, and procurement workflow — railway under EN 50155 and TSI, medical devices under EU MDR and ISO 13485, solar under Bloomberg Tier-1 and PVEL, industrial machinery under the Machinery Directive. A single undifferentiated supplier list cannot serve all four. Move East builds vertical supplier networks, vertical compliance capability, and vertical case references.",
  },
  {
    question: "Can Move East source products outside the four target sectors?",
    answer:
      "No. Move East does not source fashion, consumer goods, or general trade. The focus is capital equipment for projects within mobility, renewable energy, medical devices, and industrial machinery. For procurement outside this scope, Move East will refer the buyer to partners rather than take on engagements outside its operational specialisation.",
  },
  {
    question: "How are suppliers verified across sectors?",
    answer:
      "Every supplier is audited on-site before procurement by the Shenzhen team. Certifications are cross-checked directly with issuing bodies and notified bodies where applicable. Factory visits cover production capacity, quality management systems, export history, and financial standing. Move East does not rely on supplier self-declaration.",
  },
  {
    question: "Which sector has the fastest supplier shortlist turnaround?",
    answer:
      "For standard categories within any of the four sectors, verified supplier shortlists are delivered in 48 hours. Complex or regulated products — MDR-class medical devices, new-build rolling stock, custom automation cells, utility-scale BESS — require 5 to 10 business days for scoping and include a technical feasibility note.",
  },
  {
    question: "Do the three services apply equally across all four sectors?",
    answer:
      "Yes. Strategic Sourcing, Technology Transfer, and Supply Chain Management run across every sector engagement. A medical device client may emphasise compliance-led sourcing and EC REP coordination; a railway client may emphasise TSI certification and FAT witnessing; a renewable client may emphasise tier-one verification and BESS logistics. The service stack is the same; the sector-specific application changes.",
  },
  {
    question: "Does Move East serve clients in Africa and the Gulf as well as Europe?",
    answer:
      "Yes. Move East serves European companies via the Rome office, African governments and EPC contractors via the Addis Ababa office and the Ethiopia-Djibouti Railway reference, and Gulf-region buyers through Shenzhen and Hong Kong. The four-office footprint is designed for multi-jurisdiction procurement.",
  },
  {
    question: "What is the first step to engage Move East on a sector project?",
    answer:
      "Select the relevant sector page, review the products sourced, certifications handled, and case references, then request a supplier shortlist or book a 30-minute consultation. Move East returns a scoping note within 48 hours covering sourcing path, indicative cost band, and compliance requirements. There is no obligation beyond the call.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "China Procurement by Sector",
  description:
    "Vertical procurement from China across mobility, renewable energy, medical devices, and industrial machinery.",
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
  hasPart: [
    {
      "@type": "Service",
      name: "Mobility and Smart Transport Procurement",
      url: "https://moveasttrading.com/sectors/mobility",
    },
    {
      "@type": "Service",
      name: "Renewable Energy and Storage Procurement",
      url: "https://moveasttrading.com/sectors/renewable-energy",
    },
    {
      "@type": "Service",
      name: "Medical Devices and Healthcare Procurement",
      url: "https://moveasttrading.com/sectors/medical-devices",
    },
    {
      "@type": "Service",
      name: "Industrial Machinery and Smart Devices Procurement",
      url: "https://moveasttrading.com/sectors/industrial-machinery",
    },
  ],
};

export default function SectorsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <PageHero
        eyebrow="Sectors · Four verticals"
        title="China procurement by sector — four verticals where China leads."
        subtitle="Move East Trading focuses on four industrial verticals where Chinese manufacturers lead global supply: mobility and smart transport, renewable energy and storage, medical devices and healthcare, and industrial machinery and smart devices. The company operates from Shenzhen and sources through verified tier-one suppliers for clients in Europe, Africa, Asia, and the Gulf."
        primaryLabel="Request a sector supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min consultation"
        secondaryHref="/contact"
      />

      {/* Positioning */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">Why a sector-specific approach</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Generic sourcing covers everything shallowly. Move East covers four verticals deeply.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Each sector has its own regulatory stack, supplier geography, and procurement workflow. Railway equipment is certified under EN 50155 and TSI; medical devices under EU MDR and ISO 13485; solar modules are benchmarked via Bloomberg Tier-1 and PVEL; industrial machinery operates under the Machinery Directive 2006/42/EC. A single, undifferentiated supplier list cannot serve all four.
              </p>
              <p>
                Move East builds <strong className="text-[var(--text)]">vertical supplier networks</strong>, <strong className="text-[var(--text)]">vertical compliance capability</strong>, and <strong className="text-[var(--text)]">vertical case references</strong>. The company is led by Alessandro Petrini, a CICC Board Member based in China since 2018, and is a UNGM Registered Vendor.
              </p>
              <p>
                The hero reference across sectors is the Ethiopia-Djibouti Railway — a $4 billion Belt and Road Initiative corridor for which Move East is the official outsourcing agent in China.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four sectors grid */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">The four sectors</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            Four verticals. One integrated operation in Shenzhen.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {SECTORS.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.num}
                  href={s.href}
                  className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--brand)]/30 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--brand)]" />
                    </div>
                    <span className="text-[0.875rem] font-mono text-[var(--text-secondary)]">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-6">
                    {s.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed mt-3">
                    {s.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[0.8125rem] text-[var(--text-secondary)] pl-4 relative leading-relaxed"
                      >
                        <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[var(--brand)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-5 border-t border-[var(--border)]">
                    <p className="text-[0.8125rem] text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-medium text-[var(--text)]">Reference: </span>
                      {s.reference}
                    </p>
                  </div>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-[0.8125rem] font-medium text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
                    Explore sector
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-sector capabilities */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">Cross-sector capabilities</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            Same institutional procurement discipline across every vertical.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {CROSS_SECTOR.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="border border-[var(--border)] rounded-2xl p-7 bg-[var(--surface)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--brand)]" />
                  </div>
                  <h3 className="text-[1.0625rem] font-semibold text-[var(--text)] mt-5">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How sectors connect to services */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="label mb-4">Sectors × Services</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Every sector runs across the three service lines.
              </h2>
              <p className="mt-5 text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-md">
                A medical client may emphasise compliance-led sourcing; a railway client may emphasise FAT witnessing; a renewable client may emphasise tier-one verification. The service stack is the same; the sector-specific application changes.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 gap-3">
              {SERVICES_LINKS.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group flex items-start justify-between gap-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 hover:border-[var(--brand)]/30 transition-all"
                >
                  <div>
                    <p className="text-[0.9375rem] font-medium text-[var(--text)]">
                      {svc.label}
                    </p>
                    <p className="mt-1 text-[0.8125rem] text-[var(--text-secondary)]">
                      {svc.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to engage */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">How to engage</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)] max-w-3xl">
            Three steps from sector selection to signed scope.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                1
              </div>
              <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                Select your sector.
              </h3>
              <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                Each sector page details products sourced, certifications handled, a five-step procurement process, and relevant case references.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                2
              </div>
              <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                Request a supplier shortlist.
              </h3>
              <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                Move East prepares a vetted list of three to five qualified Chinese manufacturers for the specific product or project within 48 hours for standard categories.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                3
              </div>
              <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                Scope in a 30-minute consultation.
              </h3>
              <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                The Move East team in Shenzhen reviews specifications, timeline, and compliance requirements, and defines the procurement engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={FAQS} />

      <CTABlock
        eyebrow="Let's talk"
        title="Select a sector. Request a supplier shortlist."
        description="Tell Move East which vertical matters — mobility, renewable energy, medical devices, or industrial machinery — and receive a vetted list of qualified Chinese manufacturers. Standard categories turn around in 48 hours; regulated or custom scopes in 5 to 10 business days."
        primaryLabel="Request a supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
