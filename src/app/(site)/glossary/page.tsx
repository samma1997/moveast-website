import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, definedTermSetSchema } from "@/lib/seo/schema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./Glossary.module.css";

export const metadata: Metadata = {
  title: "China Procurement Glossary — Move East Terms & Definitions",
  description:
    "Definitions of BESS, MDR, FAT/SAT, NNN, EPC, Belt & Road, EN 50155, and 20+ other key terms in China procurement and supply chain.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: `Glossary — ${site.name}`,
    description:
      "Definitions of key terms in China procurement, technology transfer, and supply chain management.",
    url: `${site.url}/glossary`,
    type: "website",
  },
};

type GlossaryGroup = {
  title: string;
  terms: { term: string; definition: string }[];
};

const groups: readonly GlossaryGroup[] = [
  {
    title: "Procurement & Sourcing",
    terms: [
      {
        term: "China sourcing agent",
        definition:
          "A procurement operator physically based in China that identifies, qualifies, contracts, and supervises Chinese manufacturers on behalf of international buyers — covering supplier discovery, factory audit, contract negotiation, quality control, and outbound logistics.",
      },
      {
        term: "Strategic sourcing",
        definition:
          "A structured, multi-step procurement process — written brief, supplier shortlist, on-site audit, contract negotiation, production QC — distinct from transactional purchasing on a marketplace.",
      },
      {
        term: "OEM (Original Equipment Manufacturer)",
        definition:
          "A company that manufactures products to be branded, distributed, or assembled by another company. In China procurement, OEM partnerships allow buyers to source directly from the production plant rather than through a trader.",
      },
      {
        term: "Trading company (vs sourcing agent)",
        definition:
          "A trading company buys and resells goods on its own balance sheet, usually with an undisclosed margin. A sourcing agent operates on behalf of the buyer with transparent fees and direct supplier contracts.",
      },
    ],
  },
  {
    title: "Compliance & Certification",
    terms: [
      {
        term: "CE marking",
        definition:
          "European Conformity mark required for many product categories sold in the European Economic Area, certifying compliance with EU health, safety, and environmental standards.",
      },
      {
        term: "MDR (Medical Device Regulation)",
        definition:
          "EU regulation 2017/745 governing medical devices placed on the European market — replaces the older MDD directive and imposes stricter clinical evidence, traceability, and post-market surveillance requirements.",
      },
      {
        term: "FDA registration",
        definition:
          "Mandatory registration with the U.S. Food and Drug Administration for medical devices, drugs, and certain consumer products distributed in the United States.",
      },
      {
        term: "GCC (Gulf Cooperation Council standards)",
        definition:
          "Technical and conformity standards applied across the six Gulf states (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman). Products entering the Gulf market typically require GSO certification.",
      },
      {
        term: "ISO 13485",
        definition:
          "International standard specifying requirements for a quality management system in the design and manufacture of medical devices. Required by most notified bodies for CE/MDR conformity.",
      },
      {
        term: "EN 50155",
        definition:
          "European standard for railway applications — electronic equipment used on rolling stock. Required for railway component procurement into the EU and most Belt & Road infrastructure programmes.",
      },
      {
        term: "TSI (Technical Specifications for Interoperability)",
        definition:
          "EU directives ensuring railway interoperability across member states. Applied to rolling stock, infrastructure, signalling, and energy subsystems.",
      },
      {
        term: "IRIS (International Railway Industry Standard)",
        definition:
          "Quality management standard specific to the railway industry, built on ISO 9001. Most international railway buyers require IRIS-certified suppliers.",
      },
    ],
  },
  {
    title: "Technology Transfer & IP",
    terms: [
      {
        term: "Technology transfer",
        definition:
          "The managed process of moving Chinese industrial technology — machinery, production lines, system specifications, and operational know-how — into a buyer's environment with full regulatory, IP, and operational governance.",
      },
      {
        term: "NNN agreement (Non-use, Non-disclosure, Non-circumvention)",
        definition:
          "Contractual structure designed to be enforceable in Chinese courts, protecting buyer IP from being used, disclosed, or bypassed by Chinese suppliers. Stronger than a standard NDA in the China context.",
      },
      {
        term: "FAT (Factory Acceptance Test)",
        definition:
          "Inspection and testing of equipment at the manufacturer's facility before shipment, against contractual technical specifications. Documented in a FAT report signed by buyer and supplier.",
      },
      {
        term: "SAT (Site Acceptance Test)",
        definition:
          "Final acceptance testing performed at the destination site after installation, validating that equipment meets specifications under operational conditions.",
      },
    ],
  },
  {
    title: "Supply Chain & Logistics",
    terms: [
      {
        term: "EPC contractor (Engineering, Procurement, Construction)",
        definition:
          "A firm engaged for turnkey delivery of an infrastructure or industrial project — design engineering, equipment procurement, on-site construction, and commissioning under a single contract.",
      },
      {
        term: "Letter of Credit (L/C)",
        definition:
          "A bank-issued payment instrument guaranteeing that a buyer's payment to a seller will be received on time and for the correct amount, used in international trade to mitigate counterparty risk.",
      },
      {
        term: "HS code (Harmonized System)",
        definition:
          "An internationally standardized nomenclature classifying traded products. Required for customs clearance, duty calculation, and anti-dumping assessment.",
      },
      {
        term: "Pearl River Delta",
        definition:
          "The industrial supply ecosystem around Shenzhen, Guangzhou, Dongguan, Foshan, and Zhongshan — one of the world's densest manufacturing concentrations across electronics, machinery, energy, and medical devices.",
      },
      {
        term: "Greater Bay Area",
        definition:
          "Chinese economic megaregion grouping nine Guangdong cities plus Hong Kong and Macau. Hosts the world's fourth-busiest container port (Shenzhen Yantian) and over 17,000 high-tech enterprises.",
      },
      {
        term: "China-Europe Railway Express",
        definition:
          "Rail freight network linking inland Chinese cities (Chengdu, Chongqing, Yiwu) with European hubs (Duisburg, Madrid, Milan). Typically faster than sea freight, more economical than air.",
      },
    ],
  },
  {
    title: "Sectors & Programmes",
    terms: [
      {
        term: "BESS (Battery Energy Storage System)",
        definition:
          "Containerized or modular system that stores electrical energy in rechargeable batteries, used to balance grid demand, integrate renewables, and provide backup power. Tier-one Chinese suppliers dominate global supply.",
      },
      {
        term: "Belt and Road Initiative (BRI)",
        definition:
          "China's global infrastructure development strategy launched in 2013, financing rail, ports, energy, and digital connectivity across Asia, Africa, and parts of Europe. The Ethiopia-Djibouti Railway is a flagship BRI corridor.",
      },
      {
        term: "Ethiopia-Djibouti Railway (EDR)",
        definition:
          "Electrified standard-gauge railway connecting landlocked Ethiopia to the port of Djibouti — 752.7 km, $4 billion, built with Chinese support under the Belt and Road Initiative. Move East is the official outsourcing agent in China for the EDR programme.",
      },
      {
        term: "BNEF Tier-1",
        definition:
          "BloombergNEF's classification of bankable solar PV module manufacturers. Tier-1 suppliers are typically required by lenders and project developers for utility-scale renewable energy projects.",
      },
    ],
  },
  {
    title: "Institutional Framework",
    terms: [
      {
        term: "CICC (China-Italy Chamber of Commerce)",
        definition:
          "The only business association officially recognized by both the Chinese and Italian governments. Represents over 800 Italian companies operating in China. Move East is a CICC member.",
      },
      {
        term: "UNGM (United Nations Global Marketplace)",
        definition:
          "The official procurement platform of UN agencies, used to register suppliers eligible for UN-system tenders and multilateral procurement programmes. Move East is a UNGM Registered Vendor.",
      },
    ],
  },
];

export default function GlossaryPage() {
  const flatTerms = groups.flatMap((g) =>
    g.terms.map((t) => ({ term: t.term, definition: t.definition }))
  );

  return (
    <>
      <JsonLd
        data={[
          definedTermSetSchema(flatTerms),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Glossary", url: "/glossary" },
          ]),
        ]}
      />

      <section className={styles.heroSec}>
        <div className={styles.container}>
          <Eyebrow>Reference · Procurement Glossary</Eyebrow>
          <h1 className={styles.title}>
            China procurement <em>glossary</em>.
          </h1>
          <p className={styles.lede}>
            Definitions of {flatTerms.length} key terms used across China
            sourcing, technology transfer, supply chain, compliance, and the
            industrial verticals Move East operates in. Built for buyers,
            engineers, and procurement managers scoping a structured
            engagement from Shenzhen.
          </p>
        </div>
      </section>

      <section className={styles.bodySec}>
        <div className={styles.container}>
          {groups.map((g) => (
            <div key={g.title} className={styles.group}>
              <h2 className={styles.groupTitle}>{g.title}</h2>
              <dl className={styles.list}>
                {g.terms.map((t) => (
                  <div key={t.term} className={styles.entry} id={slugify(t.term)}>
                    <dt className={styles.term}>{t.term}</dt>
                    <dd className={styles.def}>{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>
              Have a term we should add?
            </h3>
            <p className={styles.ctaText}>
              Email us with the term and the context — we update this glossary
              quarterly based on questions from buyers and engineers.
            </p>
            <PillBtn href="/contact">Contact Move East</PillBtn>
            <Link href="/services" className={styles.ghostLink}>
              See our services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}
