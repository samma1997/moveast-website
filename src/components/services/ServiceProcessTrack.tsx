"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProcessBlock } from "@/content/service-pages";
import { PillBtn } from "@/components/ui/PillBtn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./ServiceProcessTrack.module.css";

export function ServiceProcessTrack({ process }: { process: ProcessBlock }) {
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
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Eyebrow>{process.eyebrow}</Eyebrow>
            <h2 id="process-title" className={styles.title}>
              {process.titlePre}
              <em>{process.titleEm}</em>
              {process.titlePost}
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.lede}>{process.lede}</p>
            <div className={styles.actions}>
              <PillBtn href="/blog/ethiopia-djibouti-railway-china-africa-procurement">See all case studies</PillBtn>
              <div className={styles.navArrows} role="group" aria-label="Process navigation">
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
            {process.steps.map((s) => (
              <Link key={s.label} href={s.href} className={styles.card}>
                <div className={styles.logo}>
                  <span className={styles.logoText}>{s.label}</span>
                </div>
                <div className={styles.metrics}>
                  {s.metrics.map((m) => (
                    <div key={m.lbl} className={styles.metric}>
                      <div
                        className={styles.val}
                        data-short={m.val.length <= 6 ? "true" : undefined}
                      >
                        {m.val}
                      </div>
                      <div className={styles.lbl}>{m.lbl}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
