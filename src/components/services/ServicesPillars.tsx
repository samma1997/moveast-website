import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./ServicesPillars.module.css";

type Pillar = {
  kicker: string;
  title: string;
  text: string;
  foot: string;
};

const pillars: readonly Pillar[] = [
  {
    kicker: "Institutional",
    title: "CICC Board Member.",
    text: "Founder Alessandro Petrini sits on the Board of the China-Italy Chamber of Commerce — direct working relationships with Italian and Chinese institutional procurement.",
    foot: "Board · 2024",
  },
  {
    kicker: "Multilateral",
    title: "UNGM Registered Vendor.",
    text: "Registered on the United Nations Global Marketplace — eligible for procurement engagements with UN agencies and multilateral programmes.",
    foot: "UNGM · 2024",
  },
  {
    kicker: "Operational",
    title: "Four offices, one operator.",
    text: "Shenzhen for the supply base, Hong Kong for trade finance, Rome for European customers and EU customs, Addis Ababa for the Horn of Africa.",
    foot: "Since 2018",
  },
  {
    kicker: "Reference",
    title: "Ethiopia-Djibouti Railway agent.",
    text: "Official outsourcing agent in China for the $4 billion Belt & Road railway corridor — operating continuously through the 2020-2022 disruption.",
    foot: "$4B · 752.7 km",
  },
];

export function ServicesPillars() {
  return (
    <section className={styles.section} aria-labelledby="svc-pillars-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>Why Move East</Eyebrow>
            <h2 id="svc-pillars-title" className={styles.title}>
              Verified credentials, <em>not</em> a marketplace.
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              Move East Trading is an institutional procurement operator — not a
              broker, not a marketplace, not a freight forwarder. Four pillars
              underpin every engagement: institutional access, multilateral
              standing, multi-office operations, and a flagship reference.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {pillars.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.kicker}>{p.kicker}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.text}</p>
              <div className={styles.foot}>{p.foot}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
