import Link from "next/link";
import type { ServiceHero } from "@/content/service-pages";
import styles from "./ServiceDetailHero.module.css";

export function ServiceDetailHero({ hero, slug }: { hero: ServiceHero; slug: string }) {
  return (
    <section className={styles.hero} aria-labelledby="svc-detail-hero-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.dot} aria-hidden="true" />
                <span>{hero.eyebrow}</span>
              </div>
              <h1 id="svc-detail-hero-title" className={styles.title}>
                {hero.titlePre}
                <em>{hero.titleEm}</em>
                {hero.titlePost}
              </h1>
            </div>
            <p className={styles.lede}>{hero.lede}</p>
          </div>

          <div className={styles.right}>
            <article className={styles.card}>
              <div className={styles.cardGrid}>
                <div className={styles.cardText}>
                  <span className={styles.kicker}>{hero.blogCard.kicker}</span>
                  <h3 className={styles.cardTitle}>{hero.blogCard.title}</h3>
                  <p className={styles.meta}>{hero.blogCard.meta}</p>
                </div>
                <div className={styles.cardMedia}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/services/${slug}.webp`}
                    alt=""
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <Link
                href={hero.blogCard.href}
                className={styles.cta}
                aria-label={hero.blogCard.ariaLabel}
              >
                <span className={styles.arrow} aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 8L8 2" />
                    <path d="M3 2h5v5" />
                  </svg>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
