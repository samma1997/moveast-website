import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { sectors } from "@/content/sectors";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.decor} aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className={styles.inner}>
        {site.offices.map((o) => (
          <div key={o.city} className={styles.col}>
            <h5>{o.city}{o.label === "HQ" ? " (HQ)" : ""}</h5>
            <p>
              {o.region ?? o.country}
              {o.region ? <><br />{o.country}</> : null}
            </p>
          </div>
        ))}

        <div className={styles.col}>
          <h5>Contact</h5>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.phone}
          </p>
        </div>

        <div className={`${styles.col} ${styles.colMenu}`}>
          <h5>Services</h5>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>{s.shortLabel}</Link>
          ))}
          <Link href="/services">All services →</Link>
        </div>

        <div className={`${styles.col} ${styles.colMenu}`}>
          <h5>Sectors</h5>
          {sectors.map((s) => (
            <Link key={s.slug} href={`/sectors/${s.slug}`}>{s.shortLabel}</Link>
          ))}
          <Link href="/sectors">All sectors →</Link>
        </div>

        <div className={`${styles.col} ${styles.colMenu}`}>
          <h5>Company</h5>
          <Link href="/about">About</Link>
          <Link href="/case-studies/ethiopia-railway">Case studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className={styles.awards}>
        {site.credentials.map((c) => (
          <div key={c.label} className={styles.award}>
            {c.label}
            <span className={styles.awardSmall}>
              {c.description} · {c.year}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>© {year} {site.name}</span>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms &amp; Conditions</Link>
        <span className={styles.spacer} />
        <div className={styles.credits}>
          <span>Built in Shenzhen &amp; Rome</span>
        </div>
        <div className={styles.social}>
          <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c.7-1.2 2-2.3 4-2.3 3 0 4 2 4 5V20h-4v-4.5c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V20h-4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
