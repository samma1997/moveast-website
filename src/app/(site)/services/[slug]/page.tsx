import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/content/services";
import { serviceDetails } from "@/content/service-details";
import { sectors } from "@/content/sectors";
import { site } from "@/content/site";
import { PageHero } from "@/components/pages/PageHero";
import { FaqList } from "@/components/pages/FaqList";
import { Cta } from "@/components/ui/Cta";
import { PillBtn } from "@/components/ui/PillBtn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/seo/schema";
import styles from "@/components/pages/ServiceDetail.module.css";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seo.title,
    description: s.seo.description,
    alternates: { canonical: `/services/${s.slug}` },
    keywords: [...s.seo.keywords],
    openGraph: {
      title: s.seo.title,
      description: s.seo.description,
      url: `${site.url}/services/${s.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const detail = serviceDetails[slug];
  if (!detail) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s.slug),
          faqPageSchema(detail.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: s.shortLabel, url: `/services/${s.slug}` },
          ]),
        ].filter(Boolean)}
      />

      <PageHero
        eyebrow={s.eyebrow}
        title={<>{s.headline.split(".")[0]}<em>.</em></>}
        lede={s.description}
        actions={
          <>
            <Cta href="/contact">Start with a brief</Cta>
            <PillBtn href="/services">All services</PillBtn>
          </>
        }
      />

      {/* Process */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.headRow}>
            <div>
              <h2 className={styles.title}>{detail.processTitle}</h2>
            </div>
            <p className={styles.lede}>{detail.processLede}</p>
          </div>
          <div className={styles.steps}>
            {detail.steps.map((step) => (
              <div key={step.n} className={styles.step}>
                <span className={styles.stepNum}>Step {step.n}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.inner}>
          <div className={styles.headRow}>
            <div>
              <h2 className={styles.title}>{detail.featuresTitle}</h2>
            </div>
            <p className={styles.lede}>{detail.featuresLede}</p>
          </div>
          <div className={styles.features}>
            {detail.features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <b>{f.title}</b>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related sectors */}
      {detail.relatedSectors.length > 0 && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.headRow}>
              <div>
                <h2 className={styles.title}>Relevant <em>sectors</em></h2>
              </div>
              <p className={styles.lede}>
                This service is particularly applied in the following industries.
              </p>
            </div>
            <div className={styles.related}>
              {detail.relatedSectors.map((slug) => {
                const sec = sectors.find((x) => x.slug === slug);
                if (!sec) return null;
                return (
                  <Link key={slug} href={`/sectors/${slug}`} className={styles.relatedCard}>
                    <span className={styles.relatedEyebrow}>
                      Sector · {String(sec.order).padStart(2, "0")}
                    </span>
                    <h3 className={styles.relatedTitle}>{sec.shortLabel}</h3>
                    <p className={styles.relatedDesc}>{sec.description}</p>
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
              Answers to the questions we hear most from prospects evaluating {s.shortLabel.toLowerCase()}.
            </p>
          </div>
          <FaqList items={detail.faqs} />
        </div>
      </section>

      {/* CTA band */}
      <section>
        <div className={styles.ctaBand}>
          <div>
            <h2>Ready to start with <em>{s.shortLabel.toLowerCase()}</em>?</h2>
            <p>Tell us about your target market, volume, and technical requirements. We respond within 24–48h.</p>
          </div>
          <div className={styles.ctaActions}>
            <Cta href="/contact">Get a brief review</Cta>
            <PillBtn href={`mailto:${site.email}`} external>
              Email {site.email}
            </PillBtn>
          </div>
        </div>
      </section>
    </>
  );
}
