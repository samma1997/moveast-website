"use client";

import { useEffect, useRef } from "react";

const entries = [
  {
    year: "2018",
    mediaCaption: "Shenzhen — day one",
    text: "Alessandro Petrini relocates to China. Begins building sourcing networks across Guangdong Province.",
    tag: "Founded · Shenzhen",
  },
  {
    year: "2020",
    mediaCaption: "COVID emergency response",
    text: "COVID-19 emergency: Move East sources and delivers critical medical equipment to European partners under crisis conditions.",
    tag: "Crisis response · EU partners",
  },
  {
    year: "2021",
    mediaCaption: "Ethiopia-Djibouti Railway",
    text: "Appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway. Addis Ababa office established.",
    tag: "Railway · East Africa",
  },
  {
    year: "2022",
    mediaCaption: "CICC Board · Rome office",
    text: "Alessandro Petrini joins the Board of the China-Italy Chamber of Commerce. Rome office opens to serve European clients.",
    tag: "CICC Board · 3 offices",
  },
  {
    year: "2024",
    mediaCaption: "UNGM · Hong Kong",
    text: "UNGM registration completed. Hong Kong office established for trade finance and compliance. Procurement expanded across Gulf region.",
    tag: "UNGM · 4 offices",
  },
  {
    year: "2025",
    mediaCaption: "Today",
    text: "Launch of Technology Transfer service line. Team expanded across four offices on three continents. Renewable energy and BESS sourcing added.",
    tag: "Today · 4 offices · 3 continents",
  },
];

export function TimelineClient() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  function tlStep(): number {
    const track = trackRef.current;
    if (!track) return 320;
    const first = track.querySelector<HTMLElement>(".ty");
    if (!first) return 320;
    const next = first.nextElementSibling as HTMLElement | null;
    if (next) return next.getBoundingClientRect().left - first.getBoundingClientRect().left;
    return first.offsetWidth;
  }

  function tlUpdate() {
    const track = trackRef.current;
    const prevBtn = prevRef.current;
    const nextBtn = nextRef.current;
    if (!track || !prevBtn || !nextBtn) return;
    const max = track.scrollWidth - track.clientWidth - 2;
    const atStart = track.scrollLeft <= 2;
    const atEnd = track.scrollLeft >= max;
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
    prevBtn.classList.toggle("active", atEnd && !atStart);
    nextBtn.classList.toggle("active", !atEnd);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    tlUpdate();
    track.addEventListener("scroll", tlUpdate, { passive: true });
    window.addEventListener("resize", tlUpdate);
    return () => {
      track.removeEventListener("scroll", tlUpdate);
      window.removeEventListener("resize", tlUpdate);
    };
  });

  return (
    <section className="timeline" id="timeline" data-screen-label="Timeline">

      <div className="timeline-head">
        <div className="timeline-head-l">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true"></span>
            <span>Our story</span>
          </div>
          <h2 className="timeline-title">
            From Shenzhen to <em>three continents</em> — our journey.
          </h2>
        </div>
        <div className="timeline-head-r">
          <p className="timeline-lede">
            Founded by Alessandro Petrini in 2018, Move East grew from a single
            operation in Shenzhen to four offices across three continents.
          </p>
          <div className="nav-arrows" role="group" aria-label="Timeline navigation">
            <button
              ref={prevRef}
              type="button"
              id="tlPrev"
              aria-label="Previous"
              onClick={() => trackRef.current?.scrollBy({ left: -tlStep(), behavior: "smooth" })}
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 2L3 7l6 5"/>
              </svg>
            </button>
            <button
              ref={nextRef}
              type="button"
              id="tlNext"
              className="active"
              aria-label="Next"
              onClick={() => trackRef.current?.scrollBy({ left: tlStep(), behavior: "smooth" })}
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 2l6 5-6 5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="timeline-rail-wrap" id="tlTrack" ref={trackRef}>
        <div className="timeline-rail">
          {entries.map((entry) => (
            <div className="ty" key={entry.year}>
              <div className="ty-year">{entry.year}</div>
              <div className="ty-marks" aria-hidden="true">
                <i className="big"></i><i></i><i></i><i></i>
              </div>
              <div className="ty-rules" aria-hidden="true">
                <i className="big"></i><i></i><i></i><i></i>
              </div>
              <div className="ty-card">
                <div className="ty-media">
                  <div className="ph"></div>
                  <span className="cap">{entry.mediaCaption}</span>
                </div>
                <div className="ty-body">
                  <p>{entry.text}</p>
                  <span className="tag">{entry.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
