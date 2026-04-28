import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./SectorsFaq.module.css";

type QA = {
  q: string;
  qTitle: string;
  a: string;
};

const items: readonly QA[] = [
  {
    q: "Q1 · Why only four sectors",
    qTitle: "Vertical depth beats horizontal coverage in regulated industries.",
    a: "Each vertical has its own regulatory stack, supplier geography, and compliance workflow. Move East focuses on industries where Chinese supply is structurally dominant and where vertical depth — not breadth — is what makes the engagement defensible.",
  },
  {
    q: "Q2 · Mobility scope",
    qTitle: "Railway, EV, drones, and urban mobility infrastructure.",
    a: "Rolling stock and railway equipment, electric vehicle components and assemblies, drone systems, and urban mobility infrastructure — the field in which Move East has been the official outsourcing agent in China for the Ethiopia-Djibouti Railway since 2018.",
  },
  {
    q: "Q3 · Renewables scope",
    qTitle: "Solar PV, BESS, inverters, wind components.",
    a: "Solar photovoltaic modules, battery energy storage systems, string and central inverters, and wind generator components — sourced from established Chinese clean-energy manufacturers and shipped under EU, African, and Gulf compliance.",
  },
  {
    q: "Q4 · Medical devices scope",
    qTitle: "Imaging, IVD, hospital equipment under EU MDR / FDA / GCC.",
    a: "Diagnostic imaging, in-vitro diagnostics, hospital equipment, and consumables. Technical files assembled to destination-market standards (EU MDR, FDA, ISO, GCC) — third-party assessment via SGS, TUV, Intertek, Bureau Veritas.",
  },
  {
    q: "Q5 · Industrial machinery scope",
    qTitle: "CNC, robotics, automation, sensors, semiconductor equipment.",
    a: "CNC machining centers, industrial robots, automation cells, precision sensors, semiconductor equipment, and injection molding lines — from leading Chinese industrial producers in the Pearl River Delta supply base.",
  },
  {
    q: "Q6 · Cross-vertical engagements",
    qTitle: "Yes — several projects span more than one vertical.",
    a: "Infrastructure programmes routinely combine mobility (rolling stock, EV), renewable energy (solar, BESS for stations), and industrial machinery (workshop CNC, automation). Move East coordinates the multi-vertical scope under one buyer contract.",
  },
];

export function SectorsFaq() {
  return (
    <section className={styles.section} aria-labelledby="sec-faq-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>FAQ · Sectors</Eyebrow>
            <h2 id="sec-faq-title" className={styles.title}>
              The questions <em>buyers</em> ask about each vertical.
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              Recurring questions raised when European, African, multilateral, and
              Gulf buyers scope a vertically focused procurement engagement from
              Shenzhen — across mobility, renewables, medical devices, and
              industrial machinery.
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
              Map your vertical against our <em>Shenzhen</em> supply base.
            </h3>
            <p className={styles.ctaText}>
              Mobility, renewables, medical, machinery — share the spec and the
              destination market and we come back with a written shortlist.
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
