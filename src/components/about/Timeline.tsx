"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { timeline, type TimelineEntry } from "@/content/timeline";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./Timeline.module.css";

export function Timeline() {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 2;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max);
  }, []);

  const step = useCallback(() => {
    const el = railRef.current;
    if (!el) return 320;
    const first = el.querySelector<HTMLElement>(`.${styles.year}`);
    if (!first) return 320;
    const next = first.nextElementSibling as HTMLElement | null;
    if (next) return next.getBoundingClientRect().left - first.getBoundingClientRect().left;
    return first.offsetWidth;
  }, []);

  const scrollBy = useCallback((direction: 1 | -1) => {
    railRef.current?.scrollBy({ left: step() * direction, behavior: "smooth" });
  }, [step]);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    updateArrows();
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  return (
    <section className={styles.timeline} id="timeline" aria-labelledby="timeline-title">
      <div className={styles.head}>
        <div className={styles.headL}>
          <Eyebrow>Our story</Eyebrow>
          <h2 id="timeline-title" className={styles.title}>
            From Shenzhen to <em>three continents</em> — our journey.
          </h2>
        </div>
        <div className={styles.headR}>
          <p className={styles.lede}>
            Founded by Alessandro Petrini in 2018, Move East grew from a single operation in Shenzhen to four offices across three continents.
          </p>
          <div className={styles.navArrows} role="group" aria-label="Timeline navigation">
            <button
              type="button"
              aria-label="Previous milestone"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 2L3 7l6 5" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next milestone"
              className={!atEnd ? styles.active : ""}
              onClick={() => scrollBy(1)}
              disabled={atEnd}
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 2l6 5-6 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.railWrap} ref={railRef}>
        <ol className={styles.rail}>
          {timeline.map((entry) => (
            <TimelineCard key={entry.year} entry={entry} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <li className={styles.year}>
      <div className={styles.yearLabel}>{entry.year}</div>
      <div className={styles.ticks} aria-hidden="true">
        <i className="big" /><i /><i /><i />
      </div>
      <article className={styles.card}>
        <div className={styles.media}>
          <div className="ph" />
          <span className="cap">{entry.caption}</span>
        </div>
        <div className={styles.body}>
          <p>{entry.description}</p>
          <span className={styles.tag}>{entry.tag}</span>
        </div>
      </article>
    </li>
  );
}
