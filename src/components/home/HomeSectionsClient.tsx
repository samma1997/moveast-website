"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── RESULTS (Cases carousel) ─────────────────────────────────────── */
export function ResultsClient() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  function cardStep(): number {
    const track = trackRef.current;
    if (!track) return 440;
    const first = track.querySelector<HTMLElement>(".case-card");
    if (!first) return 440;
    const next = first.nextElementSibling as HTMLElement | null;
    if (next) return next.getBoundingClientRect().left - first.getBoundingClientRect().left;
    return first.offsetWidth + 16;
  }

  function updateArrows() {
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
    updateArrows();
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  });

  return (
    <section className="results" data-screen-label="Results">
      <div className="container">

        <div className="results-top">
          <div>
            <div className="eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span>Results</span>
            </div>
            <h2 className="results-title">
              Projects delivered across <em>three</em> continents
            </h2>
          </div>

          <div className="results-right">
            <p className="results-lede">
              From railway infrastructure in East Africa to medical equipment supply
              during COVID-19 — structured procurement with measurable results.
            </p>
            <div className="results-actions">
              <a href="#cases" className="pill-btn">
                See all case studies
                <span className="arrow" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                  </svg>
                </span>
              </a>
              <div className="nav-arrows" role="group" aria-label="Case studies navigation">
                <button
                  ref={prevRef}
                  type="button"
                  id="casesPrev"
                  aria-label="Previous"
                  onClick={() => trackRef.current?.scrollBy({ left: -cardStep(), behavior: "smooth" })}
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 2L3 7l6 5"/>
                  </svg>
                </button>
                <button
                  ref={nextRef}
                  type="button"
                  id="casesNext"
                  className="active"
                  aria-label="Next"
                  onClick={() => trackRef.current?.scrollBy({ left: cardStep(), behavior: "smooth" })}
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 2l6 5-6 5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cases-track-wrap" id="casesTrack" ref={trackRef}>
          <div className="cases-track">

            <a className="case-card" href="#">
              <div className="case-logo">
                <span className="logo-text">Ethiopia-Djibouti Railway</span>
              </div>
              <div className="metrics">
                <div className="metric"><div className="val">752.7 km</div><div className="lbl">Railway length — Addis Ababa to Djibouti</div></div>
                <div className="metric"><div className="val">0%</div><div className="lbl">Quality rejection rate on delivered components</div></div>
              </div>
            </a>

            <a className="case-card" href="#">
              <div className="case-logo">
                <span className="logo-text">COVID Medical Supply</span>
              </div>
              <div className="metrics">
                <div className="metric"><div className="val">100%</div><div className="lbl">Delivery rate under emergency conditions</div></div>
                <div className="metric"><div className="val">48h</div><div className="lbl">Average response time to European partners</div></div>
              </div>
            </a>

            <a className="case-card" href="#">
              <div className="case-logo">
                <span className="logo-text">Solar Panel Procurement</span>
              </div>
              <div className="metrics">
                <div className="metric"><div className="val">5 MW</div><div className="lbl">Total capacity sourced from Tier 1 manufacturers</div></div>
                <div className="metric"><div className="val">30%</div><div className="lbl">Cost reduction vs European suppliers</div></div>
              </div>
            </a>

            <a className="case-card" href="#">
              <div className="case-logo">
                <span className="logo-text">BYD Technology Transfer</span>
              </div>
              <div className="metrics">
                <div className="metric"><div className="val">3</div><div className="lbl">Production lines transferred to East Africa</div></div>
                <div className="metric"><div className="val">120+</div><div className="lbl">Local engineers trained on Chinese equipment</div></div>
              </div>
            </a>

            <a className="case-card" href="#">
              <div className="case-logo">
                <span className="logo-text">CICC Industrial Mission</span>
              </div>
              <div className="metrics">
                <div className="metric"><div className="val">40+</div><div className="lbl">Enterprises connected across Italy and China</div></div>
                <div className="metric"><div className="val">4</div><div className="lbl">Countries involved in procurement operations</div></div>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── SERVICES (accordion + slide sync) ─────────────────────────────── */
export function ServicesClient() {
  const [activeIdx, setActiveIdx] = useState(0);

  const items = [
    {
      title: "Strategic Sourcing & Procurement",
      num: "01",
      desc: "We identify, vet, and manage Chinese manufacturers on your behalf — ensuring quality, compliance, and competitive pricing through a structured, transparent process.",
      cta: "Start sourcing",
      slideLabel: "01 / STRATEGIC SOURCING",
      tag: "factory audit · Shenzhen",
    },
    {
      title: "Technology Transfer & Project Integration",
      num: "02",
      desc: "From specification alignment to regulatory compliance, we facilitate the transfer of advanced Chinese technology into international infrastructure projects.",
      cta: "Plan a transfer",
      slideLabel: "02 / TECHNOLOGY TRANSFER",
      tag: "railway project · Ethiopia",
    },
    {
      title: "Trading & Supply Chain Management",
      num: "03",
      desc: "End-to-end coordination from Shenzhen's port — the world's 4th busiest — managing logistics, customs, and delivery with full visibility at every stage.",
      cta: "See the network",
      slideLabel: "03 / SUPPLY CHAIN MANAGEMENT",
      tag: "port logistics · Shenzhen",
    },
  ];

  function handleAccClick(idx: number, wasOpen: boolean) {
    if (wasOpen) return; // stay open on second click
    setActiveIdx(idx);
  }

  return (
    <section className="services" data-screen-label="Services">
      <div className="container">
        <div className="services-grid">

          <div className="services-media" aria-hidden="true">
            {items.map((item, i) => (
              <div key={i} className={`slide${activeIdx === i ? " on" : ""}`} data-slide={i}>
                <div className="ph"></div>
                <span className="idx">{item.slideLabel}</span>
                <span className="tag">{item.tag}</span>
              </div>
            ))}
          </div>

          <div className="services-copy">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span>What we do</span>
            </div>
            <h2 className="services-title">
              Three service lines, one <em>integrated</em> approach.
            </h2>
            <p className="services-lede">
              We manage complex procurement operations where reliability, technical
              alignment, and communication efficiency are essential — from Shenzhen
              to your market.
            </p>

            <div className="accordion" id="svcAccordion">
              {items.map((item, i) => {
                const isOpen = activeIdx === i;
                return (
                  <div key={i} className={`acc-item${isOpen ? " open" : ""}`} data-idx={i}>
                    <button
                      className="acc-head"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => handleAccClick(i, isOpen)}
                    >
                      <span className="t">{item.title}</span>
                      <span className="n">{item.num}</span>
                    </button>
                    <div className="acc-body">
                      <div className="acc-inner">
                        <div>
                          <p className="acc-desc">{item.desc}</p>
                          <a href="#" className="acc-cta">
                            {item.cta}
                            <span className="arrow" aria-hidden="true">
                              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="acc-thumb"><div className="ph"></div></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTORS (hover image swap) ────────────────────────────────────── */
export function SectorsClient() {
  const [activeIdx, setActiveIdx] = useState(0);

  const sectorLabels = [
    "01 / MOBILITY & TRANSPORT",
    "02 / RENEWABLE ENERGY",
    "03 / MEDICAL DEVICES",
    "04 / INDUSTRIAL MACHINERY",
  ];

  const tags = [
    "Railway systems · Shenzhen",
    "Solar panel factory · Guangdong",
    "Medical device lab · Shenzhen",
    "Automation line · Dongguan",
  ];

  const sectors = [
    {
      title: "Mobility & Smart Transport",
      num: "01",
      desc: "Railway systems, electric vehicles, drones, and urban mobility infrastructure sourced from China's leading manufacturers.",
      href: "/sectors/mobility",
    },
    {
      title: "Renewable Energy & Storage",
      num: "02",
      desc: "Solar modules, wind components, battery energy storage systems, and inverters from the world's largest clean energy supply base.",
      href: "/sectors/renewable-energy",
    },
    {
      title: "Medical Devices & Healthcare",
      num: "03",
      desc: "CE-marked and FDA-registered diagnostic equipment, hospital devices, and healthcare technology from certified Chinese producers.",
      href: "/sectors/medical-devices",
    },
    {
      title: "Industrial Machinery & Smart Devices",
      num: "04",
      desc: "Automation systems, robotics, precision sensors, and semiconductor components for advanced manufacturing operations.",
      href: "/sectors/industrial-machinery",
    },
  ];

  return (
    <section className="sectors" id="sectors" data-screen-label="Sectors">
      <div className="container">
        <div className="sectors-grid">

          <div className="sectors-media" aria-hidden="true">
            {sectors.map((_, i) => (
              <div key={i} className={`slide${activeIdx === i ? " on" : ""}`} data-sector={i}>
                <div className="ph"></div>
              </div>
            ))}
            <span className="idx" id="sectorIdx">{sectorLabels[activeIdx]}</span>
            {tags.map((tag, i) => (
              <span key={i} className={`tag${activeIdx === i ? " on" : ""}`} data-tag={i}>{tag}</span>
            ))}
          </div>

          <div className="sectors-copy">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span>Sectors we operate in</span>
            </div>
            <h2 className="sectors-title">
              Industries where technology and infrastructure <em>converge.</em>
            </h2>
            <p className="sectors-lede">
              We operate across four high-impact sectors, ensuring reliable access
              to China's industrial excellence.
            </p>

            <div className="sector-cells" id="sectorCells">
              {sectors.map((sector, i) => (
                <Link
                  key={i}
                  href={sector.href}
                  className="sector"
                  data-idx={i}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                >
                  <div className="sector-head">
                    <h3 className="sector-title">{sector.title}</h3>
                    <span className="sector-num">{sector.num}</span>
                  </div>
                  <p className="sector-desc">{sector.desc}</p>
                  <div className="sector-foot">
                    <span className="sector-arrow" aria-hidden="true">
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                      </svg>
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
