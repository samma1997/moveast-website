import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import { ArrowUpRight } from "@/components/ui/ArrowIcon";
import { getPayloadClient } from "@/lib/payload";
import styles from "./BlogPreview.module.css";

type ArticlePreview = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string | null;
  readingTime?: number;
};

async function getLatestArticles(): Promise<ArticlePreview[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: { status: { equals: "published" } },
      limit: 4,
      sort: "-publishedAt",
      depth: 0,
    });
    return docs.map((d) => ({
      id: String(d.id),
      slug: String(d.slug),
      title: String(d.title ?? ""),
      excerpt: String(d.excerpt ?? ""),
      publishedAt: d.publishedAt ? String(d.publishedAt) : null,
      readingTime: typeof d.readingTime === "number" ? d.readingTime : undefined,
    }));
  } catch {
    return [];
  }
}

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export async function BlogPreview() {
  const articles = await getLatestArticles();
  const [featured, ...rest] = articles;

  return (
    <section className={styles.section} id="blog" aria-labelledby="blog-home-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <Eyebrow>Latest from the blog</Eyebrow>
            <h2 id="blog-home-title" className={styles.title}>
              Sourcing insights, <em>from the ground.</em>
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              Guides, case narratives, and field reports on procurement, technology transfer, and China-Africa industrial corridors.
            </p>
            <PillBtn href="/blog">Read all articles</PillBtn>
          </div>
        </div>

        {featured ? (
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featMedia}>
              <div className="ph" />
              <span className={styles.featTag}>Featured</span>
            </div>
            <div className={styles.featCopy}>
              <span className={styles.featChip}>
                <span>China sourcing · insight</span>
              </span>
              <div>
                <h3 className={styles.featTitle}>{featured.title}</h3>
                <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.5, color: "var(--ink-2)" }}>
                  {featured.excerpt}
                </p>
              </div>
              <div className={styles.featMeta}>
                <span className={styles.featDate}>
                  {formatDate(featured.publishedAt)}
                  {featured.readingTime ? ` · ${featured.readingTime} min read` : ""}
                </span>
                <span className={styles.readCta}>
                  Read
                  <span className="arrow" aria-hidden="true"><ArrowUpRight /></span>
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <div className={styles.empty}>
            First articles coming soon — stay tuned.
          </div>
        )}

        {rest.length > 0 && (
          <div className={styles.row}>
            {rest.map((a) => (
              <Link key={a.id} href={`/blog/${a.slug}`} className={styles.article}>
                <div className={styles.artMedia}>
                  <div className="ph" />
                </div>
                <div className={styles.artBody}>
                  <span className={styles.artChip}>{formatDate(a.publishedAt)}</span>
                  <h3 className={styles.artTitle}>{a.title}</h3>
                  <div className={styles.artMeta}>
                    <span>{a.readingTime ? `${a.readingTime} min read` : ""}</span>
                    <span className={styles.artArrow} aria-hidden="true"><ArrowUpRight /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
