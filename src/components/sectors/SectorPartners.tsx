import type { SectorPartners as SectorPartnersData } from "@/content/sector-pages";
import styles from "./SectorPartners.module.css";

const logoLabels = Array.from({ length: 10 }, (_, i) => `logo ${String(i + 1).padStart(2, "0")}`);

export function SectorPartners({ partners }: { partners: SectorPartnersData }) {
  return (
    <section className={styles.section} aria-labelledby="sector-partners-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span>{partners.eyebrow}</span>
          </div>
          <h2 id="sector-partners-title" className={styles.title}>
            {partners.titlePre}
            <em>{partners.titleEm}</em>
            {partners.titlePost}
          </h2>
          <p className={styles.lede}>{partners.lede}</p>
        </div>
      </div>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {[...logoLabels, ...logoLabels].map((label, i) => (
            <div key={i} className={styles.logo}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
