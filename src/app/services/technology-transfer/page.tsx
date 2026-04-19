import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Microscope,
  FileCog,
  ShieldCheck,
  BadgeCheck,
  Cog,
  GraduationCap,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Technology Transfer China | Shenzhen | Move East",
  description:
    "Technology transfer china from Shenzhen — structured knowledge transfer, spec alignment, and project integration. CICC Board, UNGM, EDR $4B railway agent.",
  alternates: { canonical: "/services/technology-transfer" },
  openGraph: {
    title: "Technology Transfer China | Shenzhen | Move East",
    description:
      "Technology transfer china from Shenzhen — structured knowledge transfer, spec alignment, and project integration. CICC Board, UNGM, EDR $4B railway agent.",
    url: "https://moveasttrading.com/services/technology-transfer",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Technology Transfer & Project Integration",
  name: "Technology Transfer China",
  url: "https://moveasttrading.com/services/technology-transfer",
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
    "Structured technology transfer from China to Europe, Africa, and the Gulf. Specification alignment, IP governance, regulatory compliance, on-site training, and project integration — delivered by Move East Trading from Shenzhen.",
};

const INCLUDED = [
  "Technology scouting across Chinese OEMs in mobility, energy storage (BESS), medical devices, and industrial automation",
  "Specification alignment between Chinese manufacturers and the buyer's technical standard (EU, UN, GCC, African national standards)",
  "IP governance — licensing structure, NNN agreements, patent and trademark protection in China and destination market",
  "Regulatory compliance — CE, MDR (Medical Device Regulation), FDA, ISO, and country-specific certification",
  "On-site training of the buyer's engineers and operators, in China or in-country",
  "Project integration — commissioning, local partner onboarding, and after-sales support",
];

const STEPS = [
  {
    num: 1,
    icon: Microscope,
    title: "Technology scouting & feasibility",
    meta: "Step 1",
    body:
      "Move East starts with the buyer's technical objective — a product line to build, a production capability to acquire, or a system to integrate — and maps Chinese manufacturers capable of delivering it. The feasibility report covers technology readiness, export-control status, licensing cost, and a first view of regulatory obstacles for the destination market.",
  },
  {
    num: 2,
    icon: FileCog,
    title: "Specification alignment",
    meta: "Step 2",
    body:
      "Chinese and buyer engineers rarely use the same technical language. Move East runs structured specification alignment workshops — in Mandarin, English, and Italian — to translate tolerances, test protocols, and acceptance criteria into a single document both sides sign. Without this step, 70% of technology transfer programmes fail at commissioning.",
  },
  {
    num: 3,
    icon: ShieldCheck,
    title: "IP & legal structure",
    meta: "Step 3",
    body:
      "Move East designs the licensing structure with the buyer's legal counsel: what is licensed, what is assigned, where the IP is registered, and how NNN clauses are enforced in Chinese courts. Patent and trademark filings in China and the destination market are scheduled before any technical drawing is shared.",
  },
  {
    num: 4,
    icon: BadgeCheck,
    title: "Regulatory compliance path",
    meta: "Step 4",
    body:
      "Every jurisdiction has its own gate: CE marking for the EU, MDR for medical equipment, FDA for the United States, GCC for the Gulf, and country-specific approvals for African markets. Move East maps the full compliance path, coordinates third-party conformity assessment bodies (SGS, TÜV, Intertek, BV), and assembles the technical file.",
  },
  {
    num: 5,
    icon: Cog,
    title: "Production setup & quality validation",
    meta: "Step 5",
    body:
      "For hardware transfer, Move East coordinates factory acceptance tests (FAT) in China and site acceptance tests (SAT) in the destination country. For production-line transfer, the team manages tooling, moulds, BOM transfer, and first-article inspection. Every milestone is documented and signed.",
  },
  {
    num: 6,
    icon: GraduationCap,
    title: "Training & knowledge transfer",
    meta: "Step 6",
    body:
      "Move East delivers structured training: Chinese engineers onboard the buyer's team in Shenzhen, then travel to the buyer's site for commissioning. For the Ethiopia-Djibouti Railway programme, this pattern trained 120+ local engineers on Chinese railway equipment. Materials are released in English, Italian, Mandarin, and — where required — Amharic or Arabic.",
  },
  {
    num: 7,
    icon: Wrench,
    title: "Project integration & after-sales",
    meta: "Step 7",
    body:
      "Technology does not end at delivery. Move East structures an after-sales and spare-parts supply agreement with the Chinese OEM, manages warranty claims, and keeps the supplier relationship active for upgrades. The Shenzhen office is the buyer's permanent upstream desk.",
  },
];

const WHY = [
  {
    title: "Technology transfer as a named service line, not a by-product.",
    body:
      "Most china sourcing agents sell hardware and leave the technology to the buyer. Move East runs china technology transfer services as an explicit scope: specification, IP, compliance, training, integration. Priced, documented, and delivered against milestones.",
  },
  {
    title: "CICC Board membership and institutional access.",
    body:
      "The China-Italy Chamber of Commerce is the only organisation recognised by both the Italian and Chinese governments, representing 800+ Italian companies in China. Alessandro Petrini, founder and CICC Board Member, operates at the policy level where technology-transfer programmes are reviewed and approved. That access is not replicable by a freelance agent.",
  },
  {
    title: "Shenzhen base, multilingual engineering team.",
    body:
      "Shenzhen is China's manufacturing and R&D capital — BYD, CATL, DJI, Huawei, Mindray, and the supplier ecosystems feeding them are headquartered within a 60 km radius. Move East engineers speak Mandarin, English, and Italian; Dr. Feven Birara Tesfaye (Deputy Director) adds medical and Africa/Gulf coverage.",
  },
  {
    title: "Track record on sovereign infrastructure.",
    body:
      "Move East is the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway. Knowledge transfer to East African engineers and local maintenance teams is part of that programme — not a pilot project, a delivered reference.",
  },
  {
    title: "UNGM and UN-grade procurement governance.",
    body:
      "As a UNGM Registered Vendor, Move East structures contracts, audits, and compliance files to UN procurement standard. Governments and multilateral agencies can engage the firm directly.",
  },
];

const SECTORS = [
  {
    name: "Mobility & Smart Transport",
    detail: "Railway systems, electric vehicles, autonomous transport, drones, urban mobility production lines.",
    href: "/sectors/mobility",
  },
  {
    name: "Renewable Energy & Storage",
    detail: "BESS, solar PV, inverter technology, wind subsystems.",
    href: "/sectors/renewable-energy",
  },
  {
    name: "Medical Devices & Healthcare",
    detail: "MDR-compliant device production, diagnostic imaging, hospital equipment.",
    href: "/sectors/medical-devices",
  },
  {
    name: "Industrial Machinery & Smart Devices",
    detail: "Industrial automation, robotics, semiconductor assembly, smart sensors.",
    href: "/sectors/industrial-machinery",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "What is technology transfer in the China context?",
    answer:
      "Technology transfer from China is the managed process of moving Chinese industrial technology — machinery, production lines, system specifications, and operational know-how — into the buyer's environment with full regulatory, IP, and operational governance. It is different from buying equipment because it explicitly includes specification alignment, IP licensing, compliance certification, and engineer training. Move East Trading runs this as a structured service from Shenzhen.",
  },
  {
    question: "Why Shenzhen for technology transfer rather than other Chinese cities?",
    answer:
      "Shenzhen is China's manufacturing and R&D capital, hosting BYD, CATL, DJI, Huawei, Mindray, and their supplier ecosystems within a 60 km radius. Production lines in mobility, energy storage, medical devices, and industrial automation are concentrated in Guangdong Province. Shenzhen technology transfer benefits from direct access to OEM engineers, the world's 4th busiest port for export logistics, and a mature export-control and IP-enforcement infrastructure.",
  },
  {
    question: "How is intellectual property protected in a technology transfer from China?",
    answer:
      "IP protection is built into the contract structure. Move East designs the licensing framework before any drawing is shared: NNN (Non-use, Non-disclosure, Non-circumvention) agreements drafted in Mandarin and enforceable in Chinese courts, patent and trademark filings in China and the destination market, segmented release of technical files to audited suppliers only, and — where applicable — escrow of tooling and moulds. Registration of IP before export is non-negotiable.",
  },
  {
    question: "Which regulatory certifications can Move East support during technology transfer?",
    answer:
      "Move East supports CE marking for the EU, MDR (Medical Device Regulation) for medical equipment, FDA for the United States, ISO for management systems, GCC conformity for the Gulf, and national approvals for African markets. Third-party conformity assessment is coordinated with SGS, TÜV, Intertek, and Bureau Veritas. Technical files are assembled to the standard required by the destination regulator, not translated from Chinese templates.",
  },
  {
    question: "How long does a typical technology transfer programme take?",
    answer:
      "Duration depends on scope: a single-machine transfer with compliance certification typically runs 3-6 months; a full production-line transfer with IP licensing, FAT/SAT, and engineer training runs 9-18 months; a sovereign infrastructure programme like a railway system runs multi-year. Move East delivers a phased plan with milestones at scoping so the buyer can release budget against clear deliverables.",
  },
  {
    question: "Do you handle training of local engineers and operators?",
    answer:
      "Yes. Training is a core deliverable, not an add-on. Chinese OEM engineers onboard the buyer's team in Shenzhen, then travel to the destination site for commissioning and operator training. Materials are released in English, Italian, Mandarin, and — where relevant — Amharic or Arabic. On the Ethiopia-Djibouti Railway programme, Move East coordinated training for 120+ local engineers on Chinese railway equipment.",
  },
  {
    question: "Can Move East structure a technology transfer for a government or multilateral buyer?",
    answer:
      "Yes. Move East is a UNGM Registered Vendor and holds a CICC Board seat through its founder, which allows the firm to engage directly with UN agencies, African governments, and bilateral programmes. Contracts, audits, and compliance files are structured to UN procurement standard. The Ethiopia-Djibouti Railway reference confirms the firm's ability to operate on sovereign programmes under Belt & Road governance.",
  },
];

export default function TechnologyTransferPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Service 02 · Technology Transfer & Project Integration"
        title="Technology Transfer from China, structured as a service."
        subtitle="Move East Trading delivers technology transfer programmes from Shenzhen — specification alignment, IP governance, regulatory compliance, and on-site training — so Chinese industrial technology deploys safely into European, African, and Gulf projects. Built on the team that runs procurement in China for the Ethiopia-Djibouti Railway."
        primaryLabel="Plan a technology transfer programme"
        primaryHref="/contact"
        secondaryLabel="Book a 30-minute scoping call"
        secondaryHref="/contact"
      />

      {/* What We Do */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label mb-4">What we do</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                A structured, priced service. Not a side-effect of buying hardware.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East Trading is a Shenzhen-based procurement and trading company that operates technology transfer as a structured, priced service. Technology transfer, in the Move East definition, is the managed process of moving Chinese industrial technology (machinery, production lines, system specifications, operational know-how) into the buyer&apos;s environment with full regulatory, IP, and operational governance.
              </p>
              <p>
                The service is led by Alessandro Petrini, CICC Board Member and UNGM Registered Vendor, and delivered by a multilingual team in Shenzhen, Hong Kong, Rome, and Addis Ababa. Move East is the official outsourcing agent in China for the $4 billion Ethiopia-Djibouti Railway under the Belt &amp; Road Initiative — a programme where procurement without structured knowledge transfer would have stopped at the container port.
              </p>
              <div className="pt-4">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-[var(--text)] mb-4">
                  What Shenzhen technology transfer by Move East includes
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
            Seven steps from technical objective to live operation.
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
          <p className="label mb-4">Why Move East for technology transfer</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-[var(--text)] max-w-3xl">
            Institutional access. Multilingual engineering. Sovereign-grade governance.
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
                Capital technology for projects. Not consumer licensing.
              </h2>
              <p className="mt-5 text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-md">
                Technology transfer is concentrated in four verticals where Chinese manufacturers lead on cost-performance and European, African, and Gulf buyers need structured compliance support.
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
                Ethiopia-Djibouti Railway — technology transfer beyond procurement.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Move East acts as the official outsourcing agent in China for the Ethiopia-Djibouti Railway, a 752.7 km cross-border rail connecting Addis Ababa to the port of Djibouti under the Belt &amp; Road Initiative, total value $4 billion.
              </p>
              <p>
                The engagement covers strategic sourcing and the parallel technology-transfer workstream: specification alignment on rolling stock, compliance documentation, and the training of <strong className="text-[var(--text)]">120+ local engineers</strong> on Chinese railway equipment. Three production lines were transferred to East Africa under the programme.
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
        title="Plan a technology transfer programme with a structured scope."
        description="Share the technology objective, the destination market, and the regulatory target. Move East returns a scoping note covering candidate Chinese OEMs, compliance path, indicative timeline, and IP structure — reviewed by the Shenzhen engineering team."
        primaryLabel="Plan a transfer"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min scoping call"
        secondaryHref="/contact"
      />
    </>
  );
}
