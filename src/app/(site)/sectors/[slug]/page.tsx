import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { sectors, getSector } from "@/content/sectors";
import { sectorDetails } from "@/content/sector-details";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { PageHero } from "@/components/pages/PageHero";
import { FaqList } from "@/components/pages/FaqList";
import { Cta } from "@/components/ui/Cta";
import { PillBtn } from "@/components/ui/PillBtn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo/schema";
import styles from "@/components/pages/ServiceDetail.module.css";

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) return {};
  return {
    title: s.seo.title,
    description: s.seo.description,
    alternates: { canonical: `/sectors/${s.slug}` },
    keywords: [...s.seo.keywords],
    openGraph: {
      title: s.seo.title,
      description: s.seo.description,
      url: `${site.url}/sectors/${s.slug}`,
      type: "website",
    },
  };
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) notFound();
  const detail = sectorDetails[slug];
  if (!detail) notFound();

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: `${site.url}/sectors/${s.slug}`,
            name: s.seo.title,
            description: s.seo.description,
            isPartOf: { "@id": `${site.url}/#website` },
            about: {
              "@type": "Thing",
              name: s.title,
            },
          },
          faqPageSchema(detail.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sectors", url: "/sectors" },
            { name: s.shortLabel, url: `/sectors/${s.slug}` },
          ]),
        ].filter(Boolean)}
      />

      <PageHero
        eyebrow={s.eyebrow}
        title={<>{s.headline.split(".")[0]}<em>.</em></>}
        lede={s.description}
        actions={
          <>
            <Cta href="/contact">Discuss your project</Cta>
            <PillBtn href="/sectors">All sectors</PillBtn>
          </>
        }
      />

      {/* Sub-areas */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.headRow}>
            <div>
              <h2 className={styles.title}>{detail.areasTitle}</h2>
            </div>
            <p className={styles.lede}>{detail.areasLede}</p>
          </div>
          <div className={styles.features}>
            {detail.subAreas.map((a) => (
              <div key={a.title} className={styles.feature}>
                <b>{a.title}</b>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.inner}>
          <div className={styles.headRow}>
            <div>
              <h2 className={styles.title}>{detail.capabilitiesTitle}</h2>
            </div>
            <p className={styles.lede}>{detail.capabilitiesLede}</p>
          </div>
          <div className={styles.features}>
            {detail.capabilities.map((c) => (
              <div key={c.title} className={styles.feature}>
                <b>{c.title}</b>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {detail.relatedServices.length > 0 && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.headRow}>
              <div>
                <h2 className={styles.title}>Relevant <em>services</em></h2>
              </div>
              <p className={styles.lede}>
                Services most commonly engaged for the {s.shortLabel.toLowerCase()} sector.
              </p>
            </div>
            <div className={styles.related}>
              {detail.relatedServices.map((slug) => {
                const srv = services.find((x) => x.slug === slug);
                if (!srv) return null;
                return (
                  <Link key={slug} href={`/services/${slug}`} className={styles.relatedCard}>
                    <span className={styles.relatedEyebrow}>
                      Service · {String(srv.order).padStart(2, "0")}
                    </span>
                    <h3 className={styles.relatedTitle}>{srv.shortLabel}</h3>
                    <p className={styles.relatedDesc}>{srv.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.headRow}>
            <div>
              <h2 className={styles.title}>Frequently asked</h2>
            </div>
            <p className={styles.lede}>
              Common questions on {s.shortLabel.toLowerCase()} procurement from China.
            </p>
          </div>
          <FaqList items={detail.faqs} />
        </div>
      </section>

      {/* CTA band */}
      <section>
        <div className={styles.ctaBand}>
          <div>
            <h2>Building something in <em>{s.shortLabel.toLowerCase()}</em>?</h2>
            <p>Tell us about the scope and timeline. Our Shenzhen team qualifies suppliers and returns a shortlist within a week.</p>
          </div>
          <div className={styles.ctaActions}>
            <Cta href="/contact">Start a project</Cta>
            <PillBtn href={`mailto:${site.email}`} external>
              Email {site.email}
            </PillBtn>
          </div>
        </div>
      </section>
    </>
  );
}
