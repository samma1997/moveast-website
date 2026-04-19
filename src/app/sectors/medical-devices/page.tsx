import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Medical Devices from China — MDR, CE, FDA Ready | Move East",
  description:
    "CE-marked and FDA-registered medical devices from qualified Chinese manufacturers. Mindray, United Imaging, and specialist tier-two producers. EU MDR, ISO 13485, FDA 510(k). CICC Board, UNGM vendor.",
  alternates: { canonical: "/sectors/medical-devices" },
  openGraph: {
    title: "Medical Devices from China — MDR, CE, FDA Ready | Move East",
    description:
      "CE-marked and FDA-registered medical devices sourced from Shenzhen. Imaging, hospital equipment, IVD, and AI diagnostics. MDR-ready, notified-body verified.",
    url: "https://moveasttrading.com/sectors/medical-devices",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Devices from China — MDR, CE, FDA Ready",
  url: "https://moveasttrading.com/sectors/medical-devices",
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
    "CE-marked and FDA-registered medical devices from qualified Chinese manufacturers including Mindray, United Imaging, and specialist tier-two producers. EU MDR, ISO 13485, FDA 510(k), IEC 60601 compliant.",
};

const PRODUCTS = [
  {
    category: "Diagnostic imaging",
    items: [
      "MRI systems (1.5T, 3T)",
      "CT scanners (16–256 slice)",
      "Ultrasound systems (portable and premium)",
      "X-ray and C-arm systems",
      "PET-CT and nuclear medicine",
    ],
  },
  {
    category: "Hospital equipment",
    items: [
      "Patient monitors (bedside, transport, central station)",
      "Mechanical ventilators and anaesthesia machines",
      "ICU equipment and surgical systems",
      "Infusion pumps and defibrillators",
      "Operating room integration systems",
    ],
  },
  {
    category: "IVD & laboratory",
    items: [
      "Biochemistry analysers",
      "Haematology and immunoassay systems",
      "Molecular diagnostics (PCR, NGS)",
      "Point-of-care and rapid diagnostic devices",
      "Lab automation and LIMS-integrated systems",
    ],
  },
  {
    category: "Wearables & AI diagnostics",
    items: [
      "Wearable ECG and patient monitoring",
      "AI-powered diagnostic imaging platforms",
      "Dental imaging and CAD/CAM systems",
      "Rehabilitation and physiotherapy devices",
      "Medical consumables and surgical tools",
    ],
  },
];

const CERTIFICATIONS = [
  "EU MDR 2017/745 — Medical Device Regulation",
  "ISO 13485 — Quality management systems",
  "FDA 510(k) — US market clearance",
  "IEC 60601 — Medical electrical equipment safety",
  "IEC 62304 — Medical device software",
  "CE marking — CE technical file",
  "IVDR 2017/746 — In vitro diagnostics",
  "UDI registration — EU and US",
];

const STEPS = [
  {
    num: 1,
    title: "Clinical brief and compliance target",
    body: "Move East starts with the buyer's clinical need, device classification (Class I, IIa, IIb, III), and destination-market compliance target. EU MDR, FDA 510(k), or national standard — the compliance path is mapped before any supplier is proposed.",
  },
  {
    num: 2,
    title: "Compliance-first shortlist",
    body: "Suppliers are qualified on compliance first, then price. Every manufacturer on the shortlist holds the required certifications for the destination market, verified directly with the issuing notified body — not accepted on self-declaration.",
  },
  {
    num: 3,
    title: "Quality management system audit",
    body: "On-site QMS audit at the manufacturer's facility in Shenzhen, Dongguan, or the Pearl River Delta. Audit covers ISO 13485, production controls, design history file, technical file completeness, and post-market surveillance records.",
  },
  {
    num: 4,
    title: "UDI and technical file",
    body: "Move East coordinates UDI registration (EU EUDAMED, FDA GUDID), assembles the CE technical file or FDA 510(k) dossier, and aligns with the EU Authorised Representative where required. Documentation is assembled to regulatory standard — not the Chinese manufacturer&apos;s default template.",
  },
  {
    num: 5,
    title: "Logistics and after-sales",
    body: "Temperature-controlled and specialist freight from Shenzhen and Hong Kong. Post-market surveillance, spare-parts pipeline, and warranty-claims management remain with Move East so the buyer does not operate two supplier relationships.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "What medical devices can Move East source from China?",
    answer:
      "Move East sources across seven categories: diagnostic imaging (MRI, CT, ultrasound, X-ray, C-arms), hospital equipment (patient monitors, ventilators, ICU equipment), IVD analysers and laboratory equipment, AI diagnostic platforms and wearables, dental devices, rehabilitation equipment, and medical consumables. The supplier network covers Mindray, United Imaging, and a qualified base of specialist tier-two manufacturers.",
  },
  {
    question: "How does Move East manage EU MDR compliance for Chinese medical devices?",
    answer:
      "EU MDR compliance is managed as a structured workflow: device classification review, technical file assembly, coordination with the EU Authorised Representative, notified-body engagement where required (Class IIb and III devices), UDI registration in EUDAMED, and post-market surveillance framework. Move East does not accept CE certificates at face value — every certificate is cross-checked with the issuing notified body.",
  },
  {
    question: "Can Move East source FDA-cleared medical devices from China?",
    answer:
      "Yes. Move East sources FDA 510(k)-cleared and PMA-approved medical devices from Chinese manufacturers. The supplier qualification process specifically verifies FDA registration number and 510(k) clearance status directly on the FDA database, not on manufacturer declaration. For new products requiring 510(k) submission, Move East can coordinate the US regulatory pathway.",
  },
  {
    question: "What was Move East&apos;s performance on COVID-19 medical supply?",
    answer:
      "During COVID-19, Move East delivered medical equipment to European partners under emergency conditions with a 100% delivery rate and a 48-hour response time. The engagement covered ventilators, patient monitors, and PPE from Shenzhen-based manufacturers, coordinated through the Hong Kong office for trade-finance and export documentation. The operation confirmed Move East&apos;s crisis-supply capability for regulated medical products.",
  },
  {
    question: "Does Move East have clinical oversight for medical device procurement?",
    answer:
      "Yes. Dr. Feven Birara Tesfaye, Move East&apos;s Deputy Director, provides clinical and regulatory oversight for medical device engagements, particularly for African and Gulf markets. The Rome office manages EU-side Authorised Representative coordination. The Shenzhen team handles factory-side qualification and QMS audits.",
  },
  {
    question: "How long does it take to source a CE-marked medical device from China?",
    answer:
      "For standard Class I and Class IIa medical devices with existing CE certificates, a qualified shortlist takes 5 to 10 business days. For Class IIb and Class III devices requiring notified-body engagement, or for devices needing new regulatory pathways, scoping takes 2 to 4 weeks and includes a compliance feasibility note. Full technical-file preparation for a new CE application runs 3 to 9 months depending on device complexity.",
  },
];

export default function MedicalDevicesSectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Sector · Medical Devices &amp; Healthcare"
        title="Medical devices from China — MDR, CE, FDA ready."
        subtitle="Move East Trading sources CE-marked and FDA-registered medical devices from qualified Chinese manufacturers. The company manages EU MDR compliance, ISO 13485 documentation, and hospital equipment procurement from its Shenzhen headquarters, with clinical oversight from Deputy Director Dr. Feven Birara Tesfaye."
        primaryLabel="Request a compliant supplier shortlist"
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
                Mindray, United Imaging, and tier-two specialists we audit and ship from.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed">
              <p>
                MDR-ready medical device manufacturers across Shenzhen, Dongguan, and the Pearl River Delta — ISO 13485 certified, notified-body verified, with clinical track record and post-market surveillance coverage.
              </p>
              <p>
                Shenzhen is China&apos;s medical device capital. Mindray — China&apos;s largest medical device manufacturer — is headquartered in Shenzhen. United Imaging and a deep tier-two base of diagnostic imaging, ICU, and IVD specialists are within a 60 km radius of Move East&apos;s Shenzhen office.
              </p>
              <p>
                Track record: <strong className="text-[var(--text)]">100% delivery rate</strong> on COVID-19 emergency medical supply to European partners, with a 48-hour response time under emergency conditions.
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
            Imaging, hospital equipment, IVD, and AI diagnostics.
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
                EU MDR, FDA 510(k), ISO 13485, IEC 60601: the regulatory stack we manage.
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
                Every certificate is cross-checked with the issuing notified body before any device is proposed to the buyer. Under EU law, the legal responsibility for CE marking remains with the EU importer or Authorised Representative — Move East coordinates the process but is explicit about where accountability sits.
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
            Clinical brief, compliance-first shortlisting, QMS audit, UDI, post-market.
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

      {/* Related services */}
      <section className="border-t border-[var(--border)]">
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
        title="Request a CE-ready medical device supplier shortlist from Shenzhen."
        description="Send the device type, classification, destination market, and compliance target. Move East returns a compliance-first shortlist of ISO 13485 certified, notified-body verified Chinese manufacturers — reviewed by the clinical team. Standard categories turn around in 5 to 10 business days."
        primaryLabel="Request a compliant shortlist"
        primaryHref="/contact"
        secondaryLabel="Book a 30-min consultation"
        secondaryHref="/contact"
      />
    </>
  );
}
