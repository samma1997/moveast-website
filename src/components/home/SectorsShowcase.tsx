"use client";

import Link from "next/link";
import { useState } from "react";
import { sectors } from "@/content/sectors";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "@/components/ui/ArrowIcon";
import styles from "./SectorsShowcase.module.css";

const mediaTags = [
  "Railway systems · Shenzhen",
  "Solar panel factory · Guangdong",
  "Medical device lab · Shenzhen",
  "Automation line · Dongguan",
];

export function SectorsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className={styles.section} id="sectors" aria-labelledby="sectors-home-title">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <aside className={styles.media} aria-hidden="true">
            {sectors.map((s, i) => (
              <div key={s.slug} className={`${styles.slide} ${i === activeIdx ? styles.on : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/sectors/${s.slug}.webp`}
                  alt={s.title}
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
            <span className={styles.mediaIdx}>
              {String(activeIdx + 1).padStart(2, "0")} / {sectors[activeIdx]?.shortLabel.toUpperCase()}
            </span>
            {mediaTags.map((t, i) => (
              <span
                key={t}
                className={`${styles.mediaTag} ${i === activeIdx ? styles.on : ""}`}
              >
                {t}
              </span>
            ))}
          </aside>

          <div className={styles.copy}>
            <Eyebrow>Sectors we operate in</Eyebrow>
            <h2 id="sectors-home-title" className={styles.title}>
              Industries where technology and infrastructure <em>converge.</em>
            </h2>
            <p className={styles.lede}>
              We operate across four high-impact sectors, ensuring reliable access to China&apos;s industrial excellence.
            </p>

            <div className={styles.cells}>
              {sectors.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/sectors/${s.slug}`}
                  className={styles.cell}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                >
                  <div className={styles.cellHead}>
                    <h3 className={styles.cellTitle}>{s.shortLabel}</h3>
                    <span className={styles.cellNum}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className={styles.cellDesc}>{s.description}</p>
                  <div className={styles.cellFoot}>
                    <span className={styles.cellArrow} aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
