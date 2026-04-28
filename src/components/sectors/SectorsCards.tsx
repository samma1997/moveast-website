import Link from "next/link";
import styles from "./SectorsCards.module.css";

type CardProps = {
  slug: string;
  title: string;
  text: string;
  tags: string;
  variant?: "c2" | "c3" | "c4";
};

const cards: readonly CardProps[] = [
  {
    slug: "mobility",
    title: "Mobility & Smart Transport",
    text: "Railway equipment, rolling stock, electric vehicles, drones, and urban mobility infrastructure — official outsourcing agent in China for the $4B Ethiopia-Djibouti Railway.",
    tags: "Railway · EV · Drones",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy & Storage",
    text: "Solar PV modules, battery energy storage (BESS), inverters, wind components, and hybrid off-grid systems sourced from tier-one Chinese manufacturers.",
    tags: "Solar · BESS · Inverters",
    variant: "c2",
  },
  {
    slug: "medical-devices",
    title: "Medical Devices & Healthcare",
    text: "Imaging, hospital equipment, IVD, and consumables sourced from Chinese producers with the certifications required by EU, FDA, and Gulf markets.",
    tags: "Imaging · IVD · Hospital",
    variant: "c3",
  },
  {
    slug: "industrial-machinery",
    title: "Industrial Machinery & Smart Devices",
    text: "CNC machining centers, industrial robots, automation cells, precision sensors, semiconductor equipment, and injection molding from Chinese producers.",
    tags: "CNC · Robots · Automation",
    variant: "c4",
  },
];

export function SectorsCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span>Four verticals</span>
          </div>
          <div className={styles.headRight}>
            <h2 className={styles.title}>
              Sector-specific <em>procurement</em> across four industries where China leads.
            </h2>
            <p className={styles.lede}>
              Each vertical has its own regulatory stack, supplier geography, and
              compliance workflow. Move East builds vertical supplier networks,
              vertical compliance capability, and vertical case references —
              railway, solar and BESS, CE/FDA medical, CNC and automation.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {cards.map((c) => (
            <Link key={c.slug} id={c.slug} href={`/sectors/${c.slug}`} className={styles.card}>
              <header className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <span
                  className={`${styles.mark} ${c.variant ? styles[c.variant] : ""}`}
                  aria-hidden="true"
                />
              </header>
              <div className={`${styles.media} ${c.variant ? styles[c.variant] : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/sectors/${c.slug}.webp`}
                  alt=""
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className={styles.text}>{c.text}</p>
              <footer className={styles.foot}>
                <span className={styles.tags}>{c.tags}</span>
                <span className={styles.arrow} aria-hidden="true">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M3 11L11 3" />
                    <path d="M5 3h6v6" />
                  </svg>
                </span>
              </footer>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
