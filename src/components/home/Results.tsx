"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cases } from "@/content/cases";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./Results.module.css";

export function Results() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 2;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max);
  }, []);

  const step = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 440;
    const first = el.querySelector<HTMLElement>(`.${styles.card}`);
    if (!first) return 440;
    const next = first.nextElementSibling as HTMLElement | null;
    if (next) return next.getBoundingClientRect().left - first.getBoundingClientRect().left;
    return first.offsetWidth + 16;
  }, []);

  const scroll = useCallback((direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: step() * direction, behavior: "smooth" });
  }, [step]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return (
    <section className={styles.section} id="results" aria-labelledby="results-title">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Eyebrow>Results</Eyebrow>
            <h2 id="results-title" className={styles.title}>
              Our flagship <em>case.</em>
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.lede}>
              Official outsourcing agent in China for the Ethiopia-Djibouti Railway — a $4 billion Belt &amp; Road Initiative corridor we have served since 2018.
            </p>
            <div className={styles.actions}>
              <PillBtn href="/blog/ethiopia-djibouti-railway-china-africa-procurement">See the flagship case</PillBtn>
              <div className={styles.navArrows} role="group" aria-label="Case studies navigation">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => scroll(-1)}
                  disabled={atStart}
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 2L3 7l6 5" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  className={!atEnd ? styles.active : ""}
                  onClick={() => scroll(1)}
                  disabled={atEnd}
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 2l6 5-6 5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trackWrap} ref={trackRef}>
          <div className={styles.track}>
            {cases.map((c) => {
              const inner = (
                <>
                  <div className={styles.logo}>
                    {c.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={c.image}
                        alt={c.client}
                        loading="lazy"
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <span className={styles.logoText}>{c.client}</span>
                    )}
                  </div>
                  <div className={styles.metrics}>
                    {c.metrics.map((m) => (
                      <div key={m.label} className={styles.metric}>
                        <div className={styles.val}>{m.value}</div>
                        <div className={styles.lbl}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </>
              );
              return c.href ? (
                <Link key={c.slug} href={c.href} className={styles.card}>
                  {inner}
                </Link>
              ) : (
                <div key={c.slug} className={styles.card}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
