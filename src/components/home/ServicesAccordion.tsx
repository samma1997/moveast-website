"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/content/services";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "@/components/ui/ArrowIcon";
import styles from "./ServicesAccordion.module.css";

const ctaLabels = [
  "Start sourcing",
  "Plan a transfer",
  "See the network",
];

export function ServicesAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className={styles.section} id="services" aria-labelledby="services-home-title">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <aside className={styles.media} aria-hidden="true">
            {services.map((s, i) => (
              <div key={s.slug} className={`${styles.slide} ${i === openIdx ? styles.on : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/services/${s.slug}-portrait.webp`}
                  alt={s.title}
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span className="idx">{String(i + 1).padStart(2, "0")} / {s.title.toUpperCase()}</span>
                <span className="tag">{s.shortLabel.toLowerCase()}</span>
              </div>
            ))}
          </aside>

          <div className={styles.copy}>
            <Eyebrow>What we do</Eyebrow>
            <h2 id="services-home-title" className={styles.title}>
              Three service lines, one <em>integrated</em> approach.
            </h2>
            <p className={styles.lede}>
              We manage complex procurement operations where reliability, technical alignment, and communication efficiency are essential — from Shenzhen to your market.
            </p>

            <div className={styles.accordion} role="region">
              {services.map((s, i) => (
                <div
                  key={s.slug}
                  className={`${styles.item} ${openIdx === i ? styles.open : ""}`}
                >
                  <button
                    type="button"
                    className={styles.head}
                    aria-expanded={openIdx === i}
                    onClick={() => setOpenIdx(i)}
                  >
                    <span className="t">{s.title}</span>
                    <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  </button>
                  <div className={styles.body}>
                    <div className={styles.innerBody}>
                      <div>
                        <p className={styles.desc}>{s.description}</p>
                        <Link href={`/services/${s.slug}`} className={styles.ctaBtn}>
                          {ctaLabels[i] ?? "Learn more"}
                          <span className="arrow" aria-hidden="true"><ArrowUpRight /></span>
                        </Link>
                      </div>
                      <div className={styles.thumb}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/services/${s.slug}.webp`}
                          alt=""
                          loading="lazy"
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
