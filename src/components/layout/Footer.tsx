import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { sectors } from "@/content/sectors";
import { ArrowUpRight } from "@/components/ui/ArrowIcon";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.decor} aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className={styles.inner}>
        {/* ── Brand row ─────────────────────────────── */}
        <div className={styles.brandRow}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Move East home">
              <span className={styles.logoMark} aria-hidden="true">
                <svg viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="7" height="7" fill="currentColor" rx="1.2" />
                  <rect x="12" y="3" width="7" height="7" fill="var(--accent)" rx="1.2" />
                  <rect x="3" y="12" width="7" height="7" fill="var(--accent)" fillOpacity=".6" rx="1.2" />
                  <rect x="12" y="12" width="7" height="7" fill="currentColor" rx="1.2" />
                </svg>
              </span>
              MoveEast
            </Link>
            <p className={styles.tagline}>
              Your bridge to China&apos;s <em>industrial</em> power.
            </p>
          </div>

          <div className={styles.ctaBlock}>
            <span className={styles.ctaHint}>Ready to start?</span>
            <Link href="/contact" className={styles.ctaBtn}>
              Let&apos;s talk
              <span className={styles.ctaArrow} aria-hidden="true">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>

        {/* ── Navigation grid ───────────────────────── */}
        <nav className={styles.nav} aria-label="Footer navigation">
          <div className={styles.col}>
            <h5>Services</h5>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>{s.shortLabel}</Link>
            ))}
            <Link href="/services">All services →</Link>
          </div>

          <div className={styles.col}>
            <h5>Sectors</h5>
            {sectors.map((s) => (
              <Link key={s.slug} href={`/sectors/${s.slug}`}>{s.shortLabel}</Link>
            ))}
            <Link href="/sectors">All sectors →</Link>
          </div>

          <div className={styles.col}>
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/blog/ethiopia-djibouti-railway-china-africa-procurement">Case studies</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {/* ── Offices + contact ─────────────────────── */}
        <div className={styles.officesBlock}>
          <div>
            <div className={styles.officesLabel}>Global offices</div>
            <div className={styles.offices}>
              {site.offices.map((o) => (
                <span key={o.city} className={styles.officeItem}>
                  {o.city}{o.label === "HQ" ? " (HQ)" : ""}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.contactBlock}>
            <span className={styles.contactLabel}>Get in touch</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span className={styles.phone}>{site.phone}</span>
          </div>
        </div>

        {/* ── Credentials ───────────────────────────── */}
        <div className={styles.creds}>
          {site.credentials.map((c) => (
            <div key={c.label} className={styles.cred}>
              <span className={styles.credLabel}>{c.label}</span>
              <span className={styles.credMeta}>
                {c.description} · {c.year}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ────────────────────────────── */}
        <div className={styles.bottom}>
          <span>© {year} {site.name}</span>
          <Link href="/privacy" className={styles.bottomDivider}>Privacy</Link>
          <Link href="/terms" className={styles.bottomDivider}>Terms</Link>
          <span className={styles.spacer} />
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
      </div>
    </footer>
  );
}
