"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./BlogHub.module.css";

export type BlogArticle = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readingTime?: number;
  words?: number;
  category: string;
  variant?: "c2" | "c3" | "c4";
  coverUrl?: string;
  coverAlt?: string;
};

type Props = {
  articles: readonly BlogArticle[];
};

const CATEGORIES = [
  "All",
  "Sourcing Guides",
  "Case Studies",
  "Data Reports",
  "Policy & Compliance",
  "China-Africa",
] as const;

function ArrowSvg() {
  return (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M2 8L8 2" />
      <path d="M3 2h5v5" />
    </svg>
  );
}

export function BlogHub({ articles }: Props) {
  const [activeCat, setActiveCat] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (activeCat !== "All" && !a.category.toLowerCase().includes(activeCat.toLowerCase())) return false;
      if (q && !(a.title.toLowerCase().includes(q) || a.tag.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [articles, activeCat, query]);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span>Insights · From the ground in Shenzhen</span>
          </div>
          <h1 className={styles.title}>
            Insights on China procurement, technology transfer, and the{" "}
            <em>China-Africa corridor</em>.
          </h1>
          <p className={styles.lede}>
            Written by the Move East team in Shenzhen for buyers, governments,
            and EPC contractors building with China. Factory audits, shipping
            bottlenecks, compliance traps, and the structural shifts reshaping
            China-Africa trade.
          </p>
          <div className={styles.filters} role="tablist" aria-label="Category filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.chip} ${activeCat === cat ? styles.on : ""}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className={styles.searchSec}>
        <div className={styles.container}>
          <div className={styles.search}>
            <input
              type="search"
              placeholder="Search articles…"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridSec}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {filtered.length === 0 ? (
              <div className={styles.empty}>No articles match the current filters.</div>
            ) : (
              filtered.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className={styles.card}>
                  <div className={`${styles.media} ${a.variant ? styles[a.variant] : ""}`} aria-hidden="true">
                    {a.coverUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={a.coverUrl}
                        alt={a.coverAlt ?? ""}
                        loading="lazy"
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div className="ph" />
                    )}
                  </div>
                  <div className={styles.body}>
                    <span className={styles.tag}>{a.tag}</span>
                    <h3 className={styles.cardTitle}>{a.title}</h3>
                    <div className={styles.meta}>
                      <span>{a.date}</span>
                      {a.readingTime ? (
                        <>
                          <span className={styles.metaDot} aria-hidden="true" />
                          <span>
                            {a.readingTime} min read
                            {a.words ? ` · ${a.words.toLocaleString()} words` : ""}
                          </span>
                        </>
                      ) : null}
                    </div>
                    <div className={styles.foot}>
                      <span className={styles.cta}>
                        Read article
                        <span className={styles.ctaArrow} aria-hidden="true">
                          <ArrowSvg />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
