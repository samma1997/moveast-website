import Link from "next/link";
import type { FaqBlock } from "@/content/service-pages";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./ServiceFaqBlog.module.css";

function ArrowSvg() {
  return (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M2 8L8 2" />
      <path d="M3 2h5v5" />
    </svg>
  );
}

export function ServiceFaqBlog({ faq }: { faq: FaqBlock }) {
  return (
    <section className={styles.section} id="blog" aria-labelledby="faq-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 id="faq-title" className={styles.title}>
              {faq.titlePre}
              <em>{faq.titleEm}</em>
              {faq.titlePost}
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>{faq.lede}</p>
            <PillBtn href="/contact">{faq.ctaLabel}</PillBtn>
          </div>
        </div>

        <Link href={faq.featured.href} className={styles.featured}>
          <div className={styles.featuredMedia} aria-hidden="true">
            <div className="ph" />
            <span className={styles.tag}>{faq.featured.tag}</span>
          </div>
          <div className={styles.featuredCopy}>
            <div>
              <span className={styles.chip}>
                <span className={styles.dot} />
                {faq.featured.chip}
              </span>
              <h3 className={styles.featuredTitle}>{faq.featured.title}</h3>
            </div>
            <div className={styles.featuredMeta}>
              <span className={styles.featuredDate}>{faq.featured.meta}</span>
              <span className={styles.read}>
                {faq.featured.readLabel}
                <span className={styles.readArrow} aria-hidden="true">
                  <ArrowSvg />
                </span>
              </span>
            </div>
          </div>
        </Link>

        <div className={styles.row}>
          {faq.articles.map((a) => (
            <Link key={a.chip} href={a.href} className={styles.article}>
              <div className={styles.articleMedia} aria-hidden="true">
                <div className="ph" />
              </div>
              <div className={styles.articleBody}>
                <span className={styles.articleChip}>
                  <span className={styles.dot} />
                  {a.chip}
                </span>
                <h4 className={styles.articleTitle}>{a.title}</h4>
                <div className={styles.articleMeta}>
                  <span>{a.meta}</span>
                  <span className={styles.articleArrow} aria-hidden="true">
                    <ArrowSvg />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
