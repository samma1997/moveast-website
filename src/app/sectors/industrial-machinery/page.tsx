import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "CNC, Robots & Industrial Machinery from China | Move East",
  description:
    "CNC machinery, industrial robots, automation cells, and semiconductor equipment from China's smart manufacturing hub in Shenzhen. Machinery Directive, ISO 10218, ISO 12100. CICC Board, UNGM vendor.",
  alternates: { canonical: "/sectors/industrial-machinery" },
  openGraph: {
    title: "CNC, Robots & Industrial Machinery from China | Move East",
    description:
      "Machine tool, robot, and automation plants — Machinery Directive compliant, FAT-witnessed before shipment. Three production lines transferred to East Africa, 120+ engineers trained.",
    url: "https://moveasttrading.com/sectors/industrial-machinery",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CNC, Robots & Industrial Machinery from China",
  url: "https://moveasttrading.com/sectors/industrial-machinery",
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
    "CNC machining centers, industrial robots, automation cells, precision sensors, and semiconductor equipment from Chinese OEMs and qualified tier-two manufacturers. Machinery Directive, ISO 10218, ISO 12100 compliant.",
};

const PRODUCTS = [
  {
    category: "CNC machining",
    items: [
      "5-axis machining centers",
      "CNC turning lathes and turning-milling centers",
      "Surface and cylindrical grinding machines",
      "EDM (electrical discharge machining)",
      "Coordinate measuring machines (CMM)",
    ],
  },
  {
    category: "Robots & automation",
    items: [
      "Articulated industrial robots (6-axis)",
      "Collaborative robots (cobots)",
      "SCARA and delta robots",
      "Automated welding and assembly cells",
      "AGVs and AMRs for intralogistics",
    ],
  },
  {
    category: "Smart manufacturing",
    items: [
      "Industrial vision systems and IIoT sensors",
      "Precision sensors and measurement instruments",
      "Semiconductor handling and metrology equipment",
      "Packaging and palletising automation",
      "MES and production control integration",
    ],
  },
  {
    category: "Injection & forming",
    items: [
      "Injection molding machines (electric and hybrid)",
      "Die casting machines",
      "Press brakes and stamping equipment",
      "Extrusion lines and blow molding",
      "Tooling, moulds, and dies",
    ],
  },
];

const CERTIFICATIONS = [
  "Machinery Directive 2006/42/EC — CE marking",
  "ISO 10218-1 / ISO 10218-2 — industrial robots safety",
  "ISO 12100 — risk assessment",
  "ISO 9001 — quality management",
  "ATEX — explosive atmospheres",
  "EN 60204-1 — electrical equipment of machinery",
  "IEC 61508 — functional safety",
  "RoHS & REACH — substance compliance",
];

const STEPS = [
  {
    num: 1,
    title: "Technical specification and FAT plan",
    body: "Move East starts with the buyer's machine specification, production parameters, and acceptance criteria. A Factory Acceptance Test plan is defined before any supplier is proposed — not negotiated after the machine is built.",
  },
  {
    num: 2,
    title: "OEM and tier-two shortlist",
    body: "Three to five verified Chinese manufacturers from Move East&apos;s industrial machinery network — covering CNC from Shenzhen and Suzhou, robots from Guangdong and Liaoning, automation cells from the Yangtze River Delta. Export history and CE compliance verified.",
  },
  {
    num: 3,
    title: "Factory audit",
    body: "On-site audit covering manufacturing process, quality management system, CE technical file, risk assessment records, and export capability. For automation cells, the audit includes a live production demonstration.",
  },
  {
    num: 4,
    title: "Factory Acceptance Test (FAT)",
    body: "FAT is witnessed by Move East engineers — and by the buyer&apos;s engineers where required — at the Chinese factory before shipment is authorised. FAT report is released to the buyer. No container is booked without a signed FAT.",
  },
  {
    num: 5,
    title: "SAT, training, and spare parts for year one",
    body: "Site Acceptance Test (SAT) at the buyer&apos;s facility. Operator training by Chinese OEM engineers. Spare-parts package for the first 12 months of operation. The Shenzhen office remains the buyer&apos;s permanent upstream desk for future orders and technical interventions.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "What industrial machinery can Move East source from China?",
    answer:
      "Move East sources across four categories: CNC machining (5-axis centers, turning lathes, grinding, EDM), robots and automation (articulated robots, cobots, SCARA, welding and assembly cells), smart manufacturing (industrial vision, IIoT sensors, semiconductor equipment, packaging automation), and injection and forming (injection molding, die casting, press brakes, extrusion). All products are sourced from Chinese OEMs with documented CE and export history.",
  },
  {
    question: "How does Move East manage CE marking for Chinese industrial machinery?",
    answer:
      "CE marking under the Machinery Directive 2006/42/EC is managed as a structured workflow: risk assessment (ISO 12100), technical file assembly, CE Declaration of Conformity, operator manual in the buyer&apos;s language, and coordination with a EU Authorised Representative where required. Move East engineers review the technical file before the machine is shipped. For complex or custom machinery, a notified body is engaged for CE verification.",
  },
  {
    question: "Does Move East conduct Factory Acceptance Tests in China?",
    answer:
      "Yes. Factory Acceptance Test (FAT) is a standard milestone on every industrial machinery engagement. FAT is witnessed by Move East engineers at the Chinese factory — and by the buyer&apos;s engineers where required. The FAT report is released to the buyer before any container is booked. No shipment is authorised without a signed FAT. Site Acceptance Test (SAT) at the buyer&apos;s facility follows the same documented protocol.",
  },
  {
    question: "Can Move East manage a technology transfer for an industrial machinery production line?",
    answer:
      "Yes. Technology transfer for industrial machinery is a documented service line at Move East. The programme covers specification alignment between Chinese OEM and buyer engineers, IP and licensing structure, FAT/SAT, operator and maintenance training in Shenzhen and at the buyer&apos;s site, BOM transfer, and spare-parts pipeline. Reference: three production lines transferred to East Africa with 120+ local engineers trained on Chinese equipment.",
  },
  {
    question: "What is Move East&apos;s track record on industrial machinery?",
    answer:
      "Move East has transferred three industrial production lines to East Africa under the Ethiopia-Djibouti Railway programme and CICC industrial missions, training 120+ local engineers on Chinese equipment. The firm also coordinates industrial machinery supply for European EPC contractors and African infrastructure programmes — one contract, one operation, one operator accountable for FAT-to-SAT delivery.",
  },
  {
    question: "How long does it take to deliver a CNC machine from China to Europe?",
    answer:
      "Standard CNC machines from Chinese OEMs with existing CE certification: production lead time 6 to 12 weeks, sea freight to European ports 4 to 5 weeks. Total from PO to destination: typically 10 to 17 weeks depending on machine size, port of discharge, and customs processing. For custom or built-to-spec CNC machinery, scoping and production extend the timeline to 4 to 9 months. Move East provides a detailed production and logistics schedule at contract stage.",
  },
];

export default function IndustrialMachinerySectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Sector · Industrial Machinery &amp; Smart Devices"
        title="CNC, robots, and automation from China&apos;s smart manufacturing hub."
        subtitle="Move East Trading sources CNC machinery, industrial robots, automation cells, precision sensors, and semiconductor equipment from qualified Chinese manufacturers. The company operates from Shenzhen — home to the densest smart manufacturing ecosystem in the world."
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
                Machine tool, robot, and automation plants we audit and ship from.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                CNC, industrial robot, semiconductor equipment, and injection molding manufacturers across Shenzhen, Dongguan, Suzhou, and the Yangtze River Delta — Machinery Directive compliant, FAT-witnessed before shipment.
              </p>
              <p>
                Shenzhen is China&apos;s industrial automation capital. FANUC, KUKA, ABB, and Yaskawa Chinese operations sit alongside a dense ecosystem of qualified local OEMs producing articulated robots, cobots, and automation cells at 30 to 50% below European-equivalent pricing.
              </p>
              <p>
                Track record: <strong className="text-[var(--text)]">three production lines transferred to East Africa</strong>, 120+ local engineers trained on Chinese equipment. The same framework applies to every industrial machinery engagement.
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
            CNC, robots, sensors, semiconductor equipment, and packaging automation.
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
                Machinery Directive, ISO 12100, ISO 10218, ATEX: the certification stack.
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
                CE technical files for Chinese industrial machinery are assembled to the Machinery Directive standard — not the minimum accepted by the Chinese manufacturer. Risk assessments are reviewed by Move East engineers before the file is signed off. Third-party verification is coordinated with TÜV, SGS, and Bureau Veritas.
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
            Factory Acceptance Test, SAT, operator training, and spare parts for year one.
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
              <p className="label mb-4">Case reference · Technology Transfer</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
                Three production lines transferred to East Africa, 120+ local engineers trained.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                Under the Ethiopia-Djibouti Railway programme and associated CICC industrial missions, Move East coordinated the transfer of three industrial production lines from Chinese manufacturers to East African operators. The programme included machine specification alignment, FAT at source in China, shipping and customs clearance, SAT at the destination facility, and operator training delivered by Chinese OEM engineers.
              </p>
              <p>
                More than <strong className="text-[var(--text)]">120 local engineers</strong> were trained on Chinese industrial equipment across the programme. The same structured transfer model is applied to every industrial machinery engagement — regardless of geography.
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
        title="Request an industrial machinery supplier shortlist — FAT included."
        description="Send the machine specification, production requirement, destination market, and compliance target. Move East returns a shortlist of verified Chinese OEMs with CE compliance status and export history — reviewed by the Shenzhen engineering team."
        primaryLabel="Request a supplier shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
