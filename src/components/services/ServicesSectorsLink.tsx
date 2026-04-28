import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./ServicesSectorsLink.module.css";

type Item = {
  slug: string;
  title: string;
  text: string;
  tags: string;
};

const items: readonly Item[] = [
  {
    slug: "mobility",
    title: "Mobility & Smart Transport",
    text: "Railway equipment, EVs, drones, and urban mobility infrastructure — Ethiopia-Djibouti Railway flagship.",
    tags: "Railway · EV · Drones",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy & Storage",
    text: "Solar PV modules, BESS, inverters, wind components from leading Chinese clean-energy manufacturers.",
    tags: "Solar · BESS · Inverters",
  },
  {
    slug: "medical-devices",
    title: "Medical Devices & Healthcare",
    text: "Imaging, hospital equipment, IVD and consumables — CE/MDR/FDA-grade Chinese producers.",
    tags: "Imaging · IVD · Hospital",
  },
  {
    slug: "industrial-machinery",
    title: "Industrial Machinery & Smart Devices",
    text: "CNC, industrial robots, automation cells, semiconductor equipment, precision sensors.",
    tags: "CNC · Robots · Automation",
  },
];

export function ServicesSectorsLink() {
  return (
    <section className={styles.section} aria-labelledby="svc-sectors-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>Verticals served</Eyebrow>
            <h2 id="svc-sectors-title" className={styles.title}>
              Three services, applied across <em>four</em> verticals.
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              Each service line — sourcing, technology transfer, supply chain — is
              executed inside the regulatory and supplier ecosystem of a specific
              vertical. We do not freelance across categories: vertical depth is
              what makes the engagement defensible.
            </p>
            <div style={{ marginTop: 18 }}>
              <PillBtn href="/sectors">Explore the four verticals</PillBtn>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          {items.map((it) => (
            <Link key={it.slug} href={`/sectors/${it.slug}`} className={styles.card}>
              <div className={styles.media}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/sectors/${it.slug}.webp`} alt="" loading="lazy" />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardText}>{it.text}</p>
                <div className={styles.tags}>{it.tags}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
