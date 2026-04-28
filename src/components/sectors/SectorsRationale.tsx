import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./SectorsRationale.module.css";

type Item = {
  kicker: string;
  title: string;
  text: string;
  foot: string;
};

const items: readonly Item[] = [
  {
    kicker: "Mobility",
    title: "China leads global rolling stock and EV manufacturing.",
    text: "Railway equipment, rolling stock, electric vehicles, and drone systems — built where Move East has been operating procurement programmes since 2018.",
    foot: "EDR Railway · $4B reference",
  },
  {
    kicker: "Renewable energy",
    title: "Tier-one solar, BESS, and inverter supply base.",
    text: "Solar PV modules, battery energy storage systems, inverters, and wind components from established Chinese clean-energy manufacturers.",
    foot: "EU · Africa · Gulf delivery",
  },
  {
    kicker: "Medical devices",
    title: "Certified imaging, IVD, and hospital equipment.",
    text: "Diagnostic imaging, in-vitro diagnostics, hospital equipment, and consumables — sourced from Chinese producers compliant with EU MDR, FDA, and Gulf market standards.",
    foot: "CE · MDR · FDA · GCC",
  },
  {
    kicker: "Industrial machinery",
    title: "CNC, robotics, automation, semiconductor equipment.",
    text: "Machining centers, industrial robots, automation cells, precision sensors, and injection molding lines from leading Chinese industrial producers.",
    foot: "Pearl River Delta supply base",
  },
];

export function SectorsRationale() {
  return (
    <section className={styles.section} aria-labelledby="sec-rationale-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>Why these four</Eyebrow>
            <h2 id="sec-rationale-title" className={styles.title}>
              Verticals where Chinese supply <em>defines</em> the global market.
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              Move East operates only in industries where China is a structural
              global supplier — and where the regulatory and supplier ecosystem
              rewards a vertically focused operator. We do not freelance across
              categories; vertical depth is what makes the engagement defensible.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.title} className={styles.card}>
              <div className={styles.kicker}>{it.kicker}</div>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardText}>{it.text}</p>
              <div className={styles.foot}>{it.foot}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
