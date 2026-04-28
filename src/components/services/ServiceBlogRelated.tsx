import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./ServiceFaqBlog.module.css";

export type RelatedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  primaryKeyword?: string;
  publishedLabel?: string;
  tag?: string;
};

type Props = {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lede: string;
  ctaLabel: string;
  articles: readonly RelatedArticle[];
};

function ArrowSvg() {
  return (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M2 8L8 2" />
      <path d="M3 2h5v5" />
    </svg>
  );
}

export function ServiceBlogRelated({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  lede,
  ctaLabel,
  articles,
}: Props) {
  if (articles.length === 0) return null;

  const [featured, ...rest] = articles;
  const row = rest.slice(0, 3);

  return (
    <section className={styles.section} id="blog" aria-labelledby="blog-related-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id="blog-related-title" className={styles.title}>
              {titlePre}
              <em>{titleEm}</em>
              {titlePost}
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>{lede}</p>
            <PillBtn href="/blog">{ctaLabel}</PillBtn>
          </div>
        </div>

        {featured ? (
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredMedia} aria-hidden="true">
              <div className="ph" />
              {featured.tag ? <span className={styles.tag}>{featured.tag}</span> : null}
            </div>
            <div className={styles.featuredCopy}>
              <div>
                {featured.primaryKeyword ? (
                  <span className={styles.chip}>
                    <span className={styles.dot} />
                    {featured.primaryKeyword}
                  </span>
                ) : null}
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
              </div>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredDate}>
                  {featured.publishedLabel ?? featured.excerpt.slice(0, 60)}
                </span>
                <span className={styles.read}>
                  Read the article
                  <span className={styles.readArrow} aria-hidden="true">
                    <ArrowSvg />
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ) : null}

        {row.length > 0 ? (
          <div className={styles.row}>
            {row.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className={styles.article}>
                <div className={styles.articleMedia} aria-hidden="true">
                  <div className="ph" />
                </div>
                <div className={styles.articleBody}>
                  {a.primaryKeyword ? (
                    <span className={styles.articleChip}>
                      <span className={styles.dot} />
                      {a.primaryKeyword}
                    </span>
                  ) : null}
                  <h4 className={styles.articleTitle}>{a.title}</h4>
                  <div className={styles.articleMeta}>
                    <span>{a.publishedLabel ?? ""}</span>
                    <span className={styles.articleArrow} aria-hidden="true">
                      <ArrowSvg />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
