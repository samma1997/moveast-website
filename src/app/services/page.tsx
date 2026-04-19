import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search, GitBranch, Ship } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "China Procurement Services | Move East Trading Shenzhen",
  description:
    "China procurement services from Shenzhen — strategic sourcing, technology transfer, and supply chain management. CICC Board, UNGM vendor, EDR $4B railway agent.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "China Procurement Services | Move East Trading",
    description:
      "Strategic sourcing, technology transfer, and supply chain management from Shenzhen. Four offices, three service lines, one accountable operator.",
    url: "https://moveasttrading.com/services",
    type: "website",
  },
};

const SERVICES = [
  {
    num: "01",
    icon: Search,
    title: "Strategic Sourcing & Procurement",
    summary:
      "Supplier discovery, factory audits, verification, contract negotiation, and quality control. Verified supplier shortlists in 48 hours for standard categories.",
    bullets: [
      "Supplier discovery and verification",
      "On-site factory audits in Guangdong, Jiangsu, Zhejiang, Shandong",
      "Contract negotiation in Mandarin",
      "Pre-production, in-line, and pre-shipment QC",
      "Procurement outsourcing for recurring categories",
    ],
    href: "/services/sourcing",
  },
  {
    num: "02",
    icon: GitBranch,
    title: "Technology Transfer & Project Integration",
    summary:
      "Structured transfer of Chinese industrial technology into buyer environments — specification, IP governance, CE/MDR/FDA compliance, engineer training.",
    bullets: [
      "Technology scouting and feasibility",
      "IP and licensing structure (NNN agreements, patent filings)",
      "Regulatory compliance path (CE, MDR, FDA, ISO, GCC)",
      "Factory Acceptance Test (FAT) and Site Acceptance Test (SAT)",
      "Engineer and operator training",
    ],
    href: "/services/technology-transfer",
  },
  {
    num: "03",
    icon: Ship,
    title: "Trading & Supply Chain Management",
    summary:
      "End-to-end coordination from Shenzhen — the world's 4th busiest container port — to Europe, Africa, and the Gulf. 100% delivery rate during COVID-19 emergency.",
    bullets: [
      "PO management with Chinese manufacturers",
      "Export documentation (CE, MDR, FDA, GCC technical files)",
      "Multi-modal freight (sea, air, China-Europe rail)",
      "Customs clearance at origin and destination",
      "Trade finance via Hong Kong",
    ],
    href: "/services/supply-chain",
  },
];

const SECTORS = [
  { name: "Mobility & Smart Transport", href: "/sectors/mobility" },
  { name: "Renewable Energy & Storage", href: "/sectors/renewable-energy" },
  { name: "Medical Devices & Healthcare", href: "/sectors/medical-devices" },
  { name: "Industrial Machinery & Smart Devices", href: "/sectors/industrial-machinery" },
];

const FAQS: FAQItem[] = [
  {
    question: "What does a China procurement company actually do?",
    answer:
      "A China procurement company acts as the buyer's operational team inside China. Move East Trading identifies Chinese manufacturers, runs factory audits, negotiates contracts in Mandarin, manages production and quality control, handles export documentation and freight, and delivers the goods to the destination market. One contract with Move East replaces fragmented engagements with suppliers, agents, freight forwarders, and customs brokers.",
  },
  {
    question: "How is Move East different from a trading company or a sourcing agent?",
    answer:
      "A trading company buys and resells — margins are hidden and the buyer has no supplier visibility. A typical sourcing agent charges a commission and stops at supplier introduction. Move East Trading operates on a transparent fee model with full supplier disclosure, European-grade contracts, UN-level compliance (UNGM Registered Vendor), and physical presence across four offices. The buyer owns the supplier relationship; Move East runs the operation.",
  },
  {
    question: "Which industries does Move East serve?",
    answer:
      "Move East concentrates on four high-value verticals: Mobility & Smart Transport (railway, electric vehicles, drones), Renewable Energy & Storage (solar PV, BESS, inverters, wind), Medical Devices & Healthcare (CE/MDR/FDA-compliant equipment), and Industrial Machinery & Smart Devices (CNC, automation, robotics, semiconductors). The firm does not source fashion, consumer goods, or general trade.",
  },
  {
    question: "How fast can Move East deliver a supplier shortlist?",
    answer:
      "For standard categories within the four target sectors, Move East delivers verified supplier shortlists in 48 hours. For complex or regulated products (MDR-class medical devices, railway rolling stock, custom automation cells), scoping typically takes 5–10 business days and includes a technical feasibility note.",
  },
  {
    question: "What credentials validate Move East Trading?",
    answer:
      "Founder Alessandro Petrini is a Board Member of the China-Italy Chamber of Commerce (CICC) — the only organisation recognised by both Italian and Chinese governments, representing 800+ Italian companies in China. Move East is a United Nations Global Marketplace (UNGM) Registered Vendor, qualified for UN agency procurement. The firm is the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway under the Belt & Road Initiative.",
  },
  {
    question: "Does Move East serve clients outside Europe?",
    answer:
      "Yes. Move East serves European companies (via the Rome office), African governments and EPC contractors (via the Addis Ababa office and the Ethiopia-Djibouti Railway reference), and Gulf-region buyers. The Hong Kong office handles trade finance and compliance for multi-jurisdiction engagements.",
  },
  {
    question: "What is the minimum engagement size?",
    answer:
      "Move East focuses on capital equipment for projects — typical engagements range from single-category sourcing of €50k–€500k to multi-year programmes worth several million euros. For smaller or consumer-focused procurement, Move East will refer the buyer to partners rather than take on engagements outside its operational specialisation.",
  },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Move East Trading Co., Ltd.",
  url: "https://moveasttrading.com",
  description:
    "International procurement and trading company based in Shenzhen. Strategic sourcing, technology transfer, and supply chain management from China to Europe, Africa, and the Gulf.",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Strategic Sourcing & Procurement",
        url: "https://moveasttrading.com/services/sourcing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Technology Transfer & Project Integration",
        url: "https://moveasttrading.com/services/technology-transfer",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Trading & Supply Chain Management",
        url: "https://moveasttrading.com/services/supply-chain",
      },
    },
  ],
  address: [
    { "@type": "PostalAddress", addressLocality: "Shenzhen", addressCountry: "CN" },
    { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
    { "@type": "PostalAddress", addressLocality: "Rome", addressCountry: "IT" },
    { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
  ],
};

export default function ServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <PageHero
        eyebrow="What we do · Three service lines"
        title="China procurement services, run as one integrated operation."
        subtitle="Move East Trading is a Shenzhen-based China sourcing company delivering strategic sourcing, technology transfer, and supply chain management from China to Europe, Africa, and the Gulf. Four offices, three service lines, one accountable operator."
        primaryLabel="Book a 30-min consultation"
        primaryHref="/contact"
        secondaryLabel="Request a supplier shortlist"
        secondaryHref="/contact"
      />

      {/* Positioning */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">Positioning</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                The bridge between global buyers and China&apos;s industrial power.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East Trading was founded in 2018 by Alessandro Petrini — CICC Board Member, UNGM Registered Vendor, in China since day one — to solve a single problem: European companies, African governments, EPC contractors, and distributors need Chinese manufacturing, but under European management standards, with UN-grade compliance, and with a physical team on the factory floor.
              </p>
              <p>
                In 2022, Move East was appointed the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway under the Belt &amp; Road Initiative. The same operation runs every client engagement.
              </p>
              <p>
                Three service lines cover the full procurement function: <strong className="text-[var(--text)]">strategic sourcing</strong> (who builds it), <strong className="text-[var(--text)]">technology transfer</strong> (how it moves into your environment), and <strong className="text-[var(--text)]">supply chain management</strong> (how it reaches your market). The buyer signs one contract; Move East runs four offices, multiple Chinese suppliers, and the compliance stack across jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three services */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">The three services</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            One integrated approach. Three accountable service lines.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.num}
                  href={s.href}
                  className="reveal group bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--brand)]/30 transition-all flex flex-col"
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
                  <div className="mt-auto pt-6 flex items-center gap-2 text-[0.8125rem] font-medium text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
                    Explore service
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How services connect */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">How the services connect</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)] max-w-3xl">
            Independent or integrated. Same operation.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                1
              </div>
              <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                Strategic Sourcing identifies and contracts the right Chinese manufacturer.
              </h3>
              <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                Before any hardware moves, Move East verifies the supplier, aligns the specification, and fixes the contract. This is the gate that determines project quality.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                2
              </div>
              <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                Technology Transfer ensures the product and process arrive intact.
              </h3>
              <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                Where the engagement requires more than off-the-shelf supply, Move East runs the structured transfer of IP, technical files, and operational know-how. This is the gate that determines success beyond the first shipment.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                3
              </div>
              <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                Supply Chain Management delivers it into the buyer&apos;s market.
              </h3>
              <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                Production, inspection, freight, customs, and last-mile are coordinated end-to-end. One contract, one operator, one team accountable for on-time, on-cost, on-spec delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors snapshot */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="label mb-4">Sectors</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Capital equipment for projects. Not consumer trade.
              </h2>
              <p className="mt-5 text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-md">
                Move East concentrates on four verticals where compliance, specification, and supplier reliability decide the outcome.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SECTORS.map((sector) => (
                <Link
                  key={sector.name}
                  href={sector.href}
                  className="group flex items-center justify-between bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 hover:border-[var(--brand)]/30 transition-all"
                >
                  <span className="text-[0.9375rem] font-medium text-[var(--text)]">
                    {sector.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Move East */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">Why Move East</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            European management. Chinese operations. Institutional access.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: "Four offices, three continents, one operation.",
                body: "Shenzhen HQ runs production and export. Hong Kong runs trade finance and compliance. Rome runs the European client interface and EU customs. Addis Ababa runs the China-Africa corridor. One operator accountable across four jurisdictions.",
              },
              {
                title: "Credentials that open institutional doors.",
                body: "CICC Board membership, representing 800+ Italian companies in China. UNGM Registered Vendor, qualified for UN agency procurement. Official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway.",
              },
              {
                title: "Sector-deep, not generalist.",
                body: "Four verticals where compliance, specification, and supplier reliability decide the outcome. Move East does not source fashion or general trade goods — it sources capital equipment for projects.",
              },
              {
                title: "European governance, Chinese factory floor.",
                body: "Contracts, audits, and compliance files are formatted for EU procurement committees and UN tenders. The operation is local; the governance is European.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="border border-[var(--border)] rounded-2xl p-7 bg-[var(--surface)]"
              >
                <h3 className="text-[1.0625rem] font-semibold text-[var(--text)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FAQS} />

      <CTABlock
        eyebrow="Let's talk"
        title="Book a 30-minute consultation with the Shenzhen team."
        description="Send the project brief — product, destination market, volume, timeline. Move East returns a scoping note within 48 hours covering sourcing path, indicative cost band, and compliance requirements. No obligation beyond the call."
        primaryLabel="Book a 30-min consultation"
        primaryHref="/contact"
        secondaryLabel="Request a supplier shortlist"
        secondaryHref="/contact"
      />
    </>
  );
}
