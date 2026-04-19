import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudy } from "@/content/case-studies";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Cta } from "@/components/ui/Cta";
import { PillBtn } from "@/components/ui/PillBtn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import styles from "@/components/case-study/CaseStudy.module.css";

const SLUG = "ethiopia-railway";

export const metadata: Metadata = (() => {
  const c = getCaseStudy(SLUG);
  if (!c) return {};
  return {
    title: c.seo.title,
    description: c.seo.description,
    alternates: { canonical: `/case-studies/${SLUG}` },
    keywords: [...c.seo.keywords],
    openGraph: {
      title: c.seo.title,
      description: c.seo.description,
      url: `${site.url}/case-studies/${SLUG}`,
      type: "article",
    },
  };
})();

export default function EthiopiaRailwayPage() {
  const c = getCaseStudy(SLUG);
  if (!c) return null;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.hero.title,
            description: c.hero.subtitle,
            datePublished: `${c.year}-01-01`,
            url: `${site.url}/case-studies/${SLUG}`,
            author: { "@id": `${site.url}/#organization` },
            publisher: { "@id": `${site.url}/#organization` },
            articleSection: "Case Studies",
            mentions: {
              "@type": "Project",
              name: c.client,
              location: {
                "@type": "Place",
                name: "Ethiopia-Djibouti",
              },
            },
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Case Studies", url: "/case-studies" },
            { name: c.client, url: `/case-studies/${SLUG}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{c.hero.eyebrow}</span>
          <h1 className={styles.title}>{c.hero.title}</h1>
          <p className={styles.subtitle}>{c.hero.subtitle}</p>

          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>{c.client}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaValue}>{c.location}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Sector</span>
              <span className={styles.metaValue}>{c.sector}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Duration</span>
              <span className={styles.metaValue}>{c.duration}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Services</span>
              <span className={styles.metaValue}>{c.services.length} lines</span>
            </div>
          </div>
        </div>

        <div className={styles.heroMedia} aria-hidden="true">
          <div className="ph" />
        </div>
      </section>

      {/* METRICS */}
      <section className={styles.metrics}>
        <div className={styles.metricsInner}>
          <div className={styles.metricsHead}>
            <h2 className={styles.metricsTitle}>Metrics that <em>matter.</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: "46ch", margin: 0 }}>
              Seven years of continuous operations, cross-verified with EDR operations and Chinese manufacturer records.
            </p>
          </div>
          <div className={styles.metricsGrid}>
            {c.metrics.map((m, i) => (
              <div key={i} className={styles.metric}>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS / NARRATIVE */}
      <section className={styles.chapters}>
        <div className={styles.chaptersInner}>
          {c.chapters.map((ch, i) => (
            <article key={i} className={styles.chapter}>
              <span className={styles.chapterNum}>
                Chapter {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className={styles.chapterHeading}>{ch.heading}</h2>
              <p className={styles.chapterBody}>{ch.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className={styles.quote}>
        <div className={styles.quoteInner}>
          <blockquote className={styles.quoteText}>“{c.pullQuote.text}”</blockquote>
          <div className={styles.quoteAttr}>{c.pullQuote.attribution}</div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={styles.outcomes}>
        <div className={styles.outcomesInner}>
          <div className={styles.outcomesHead}>
            <span className={styles.eyebrow}>Outcomes</span>
            <h2 className={styles.outcomesTitle}>What we <em>delivered.</em></h2>
          </div>
          <ul className={styles.outcomesList}>
            {c.outcomes.map((o, i) => (
              <li key={i} className={styles.outcome}>
                <span className={styles.outcomeIdx}>{String(i + 1).padStart(2, "0")}</span>
                <p className={styles.outcomeText}>{o}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className={styles.related}>
        <div className={styles.relatedInner}>
          <div className={styles.relatedHead}>
            <span className={styles.eyebrow}>Services engaged</span>
            <h2 className={styles.relatedTitle}>Three service lines <em>combined.</em></h2>
          </div>
          <div className={styles.relatedGrid}>
            {c.services.map((slug) => {
              const s = services.find((x) => x.slug === slug);
              if (!s) return null;
              return (
                <Link key={slug} href={`/services/${slug}`} style={{
                  display: "block",
                  padding: "22px 24px",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  color: "inherit",
                  transition: "border-color .2s, transform .2s",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 6,
                    display: "block",
                  }}>
                    Service · {String(s.order).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 8px" }}>
                    {s.shortLabel}
                  </h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.45, color: "var(--ink-2)", margin: 0 }}>
                    {s.miniDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section>
        <div style={{
          background: "var(--ink)",
          color: "var(--bg)",
          borderRadius: 22,
          padding: "clamp(32px, 5vw, 64px)",
          margin: "0 auto 48px",
          maxWidth: "calc(var(--container) - 64px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
          gap: 40,
          alignItems: "center",
        }}>
          <div>
            <h2 style={{
              fontSize: "clamp(28px, 3.4vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              margin: "0 0 12px",
            }}>
              Planning a similar <em style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontWeight: 500 }}>infrastructure</em> project?
            </h2>
            <p style={{
              fontSize: 15,
              lineHeight: 1.55,
              color: "color-mix(in oklab, var(--bg) 80%, transparent)",
              margin: 0,
              maxWidth: "48ch",
            }}>
              We&apos;ve done it for EDR. We can structure the same sourcing + tech transfer + supply chain playbook for your railway, energy, or industrial project.
            </p>
          </div>
          <div style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", justifySelf: "end" }}>
            <Cta href="/contact">Discuss your project</Cta>
            <PillBtn href={`mailto:${site.email}`} external>
              Email us
            </PillBtn>
          </div>
        </div>
      </section>
    </>
  );
}
