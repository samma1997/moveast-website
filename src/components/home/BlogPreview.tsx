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
  coverUrl?: string;
  coverAlt?: string;
};

function extractCoverUrl(cover: unknown): { url?: string; alt?: string } {
  if (!cover || typeof cover !== "object") return {};
  const c = cover as { url?: unknown; sizes?: { card?: { url?: unknown } }; alt?: unknown };
  const cardUrl = c.sizes?.card && typeof c.sizes.card.url === "string" ? c.sizes.card.url : undefined;
  const mainUrl = typeof c.url === "string" ? c.url : undefined;
  const alt = typeof c.alt === "string" ? c.alt : undefined;
  return { url: cardUrl ?? mainUrl, alt };
}

async function getLatestArticles(): Promise<ArticlePreview[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "articles",
      where: { status: { equals: "published" } },
      limit: 4,
      sort: "-publishedAt",
      depth: 1,
    });
    return docs.map((d) => {
      const cov = extractCoverUrl(d.cover);
      return {
        id: String(d.id),
        slug: String(d.slug),
        title: String(d.title ?? ""),
        excerpt: String(d.excerpt ?? ""),
        publishedAt: d.publishedAt ? String(d.publishedAt) : null,
        readingTime: typeof d.readingTime === "number" ? d.readingTime : undefined,
        coverUrl: cov.url,
        coverAlt: cov.alt,
      };
    });
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
              {featured.coverUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.coverUrl}
                  alt={featured.coverAlt ?? featured.title}
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div className="ph" />
              )}
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
                  {a.coverUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={a.coverUrl}
                      alt={a.coverAlt ?? a.title}
                      loading="lazy"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <div className="ph" />
                  )}
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
