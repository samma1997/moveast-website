import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./ServicesFaq.module.css";

type QA = {
  q: string;
  qTitle: string;
  a: string;
};

const items: readonly QA[] = [
  {
    q: "Q1 · Who Move East works with",
    qTitle: "European industrial buyers, African governments, multilateral agencies, and Gulf operators.",
    a: "Engagements run with EU manufacturers and EPC contractors, African government and infrastructure agencies, UN-system multilateral procurement, and Gulf operators sourcing technical equipment from China.",
  },
  {
    q: "Q2 · One contract or three",
    qTitle: "One buyer contract — sourcing, transfer, and supply chain coordinated under one operator.",
    a: "The buyer signs one contract with Move East. All upstream Chinese contracts, freight forwarders, customs brokers, and trade-finance instruments are coordinated by our Shenzhen and Hong Kong offices.",
  },
  {
    q: "Q3 · How factories are vetted",
    qTitle: "Four parallel checks before a supplier reaches the buyer.",
    a: "SAIC/AIC business registry, export customs records, on-site factory audit by Move East engineers in Guangdong/Jiangsu/Zhejiang/Shandong, and buyer reference checks. The audit produces photo, video, and a scored risk matrix.",
  },
  {
    q: "Q4 · Compliance scope",
    qTitle: "CE, MDR, FDA, ISO, GCC, and African national approvals — set before contracting.",
    a: "Compliance targets are fixed in the brief stage and the technical file is built to destination-market standards — assembled to local requirements, not translated from Chinese templates. Third-party assessment via SGS, TUV, Intertek, Bureau Veritas.",
  },
  {
    q: "Q5 · Trade finance",
    qTitle: "USD settlement, letters of credit, and escrow via the Hong Kong office.",
    a: "Structures suited to government, multilateral, and private buyers — including UN procurement frameworks. Forex and payment-term risk are priced into the engagement at contract stage, not mid-shipment.",
  },
  {
    q: "Q6 · IP protection",
    qTitle: "Three layers: NNN clauses, tooling ownership, segmented technical drawings.",
    a: "Non-use, Non-disclosure, Non-circumvention clauses enforceable in Chinese courts; tooling owned by the buyer or held in escrow; segmented release of technical drawings to audited suppliers only — and Chinese trademark/patent filings before drawings are shared.",
  },
];

export function ServicesFaq() {
  return (
    <section className={styles.section} aria-labelledby="svc-hub-faq-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>FAQ · Cross-service</Eyebrow>
            <h2 id="svc-hub-faq-title" className={styles.title}>
              The questions <em>buyers</em> ask before signing.
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              The recurring questions raised by European industrial groups, African
              governments, EPC contractors, and multilateral agencies before
              committing to a structured procurement engagement from China.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.q} className={styles.qa}>
              <div className={styles.q}>
                <span className={styles.qDot} aria-hidden="true" />
                {it.q}
              </div>
              <h3 className={styles.qTitle}>{it.qTitle}</h3>
              <p className={styles.a}>{it.a}</p>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <div>
            <h3 className={styles.ctaTitle}>
              Scope your <em>engagement</em> with a Shenzhen-based operator.
            </h3>
            <p className={styles.ctaText}>
              Brief us on the product, market, volume, and compliance targets —
              we come back with a written shortlist and a defined process.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Book a scoping call
            </Link>
            <Link
              href="/blog/ethiopia-djibouti-railway-china-africa-procurement"
              className={styles.btnGhost}
            >
              Read the EDR reference
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
