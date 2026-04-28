import type { SectorHero as SectorHeroData } from "@/content/sector-pages";
import styles from "@/components/services/ServicesHero.module.css";

export function SectorHero({ hero, slug }: { hero: SectorHeroData; slug: string }) {
  return (
    <section className={styles.hero} aria-labelledby="sector-hero-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              <span>{hero.eyebrow}</span>
            </div>
            <h1 id="sector-hero-title" className={styles.title}>
              {hero.titlePre}
              <em>{hero.titleEm}</em>
              {hero.titlePost}
            </h1>
            <div className={styles.partners} aria-label="Move East credentials">
              <span className={styles.partner}>CICC Board · 2024</span>
              <span className={styles.partner}>UNGM Vendor · 2024</span>
              <span className={styles.partner}>Since 2018</span>
            </div>
            <p className={styles.lede}>{hero.lede}</p>
          </div>
          <div className={styles.media} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/sectors/${slug}.webp`}
              alt=""
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className={styles.tag}>{hero.mediaTag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
