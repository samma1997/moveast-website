import Link from "next/link";
import { site } from "@/content/site";
import { featuredCase } from "@/content/cases";
import { ArrowDown, ArrowUpRight } from "@/components/ui/ArrowIcon";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className="dot" aria-hidden="true" />
          {site.offices.map((o, i) => (
            <span key={o.city} style={{ display: "inline-flex", gap: 6 }}>
              {o.city}
              {i < site.offices.length - 1 && <span className="sep">·</span>}
            </span>
          ))}
        </div>

        <h1 id="home-hero-title" className={styles.headline}>
          <span className={styles.line}>Strategic</span>
          <span className={styles.line}><em>Procurement</em></span>
          <span className={styles.line}>from China</span>
        </h1>

        <div className={styles.lower}>
          <div>
            <p className={styles.lede}>
              Connecting global enterprises with China&apos;s industrial ecosystem.
              Verified sourcing, technology transfer, and supply chain management.
            </p>
            <Link href="#services" className="discover">
              Explore services
              <span className="arrow" aria-hidden="true"><ArrowDown /></span>
            </Link>
          </div>

          {featuredCase && (
            <Link
              href={featuredCase.href ?? "/blog"}
              className={styles.case}
              aria-label={`Case study: ${featuredCase.client}`}
            >
              <div className={styles.caseCopy}>
                <p>Ethiopia-Djibouti Railway — $4B procurement corridor since 2018.</p>
                <div className={styles.caseMeta}>
                  <span className={styles.caseClient}>
                    {featuredCase.client}
                  </span>
                  <span className={styles.caseArrow} aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
              <div className={styles.caseMedia}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-edr-railway.webp"
                  alt="Train crossing the desert along the East Africa corridor"
                  loading="eager"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Link>
          )}
        </div>

        <div className={styles.decor} aria-hidden="true">
          <i /><i /><i />
        </div>
      </div>
    </section>
  );
}
