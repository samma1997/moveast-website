"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type MegaKey = "services" | "sectors" | null;

const SERVICES = [
  {
    href: "/services/sourcing",
    title: "Strategic sourcing",
    desc: "Discovery, audits, contracts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    href: "/services/technology-transfer",
    title: "Technology transfer",
    desc: "IP, compliance, training",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: "/services/supply-chain",
    title: "Supply chain management",
    desc: "Freight, customs, last mile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="14" height="10" rx="1" />
        <path d="M16 10h4l2 3v4h-6z" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </svg>
    ),
  },
];

const SECTORS = [
  {
    href: "/sectors/mobility",
    title: "Mobility & transport",
    desc: "Railway, EV, drones",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="1" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
  },
  {
    href: "/sectors/renewable-energy",
    title: "Renewable energy",
    desc: "PV, BESS, inverters",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    href: "/sectors/medical-devices",
    title: "Medical devices",
    desc: "MDR-certified equipment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    href: "/sectors/industrial-machinery",
    title: "Industrial machinery",
    desc: "Automation, robotics, semiconductors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="12" rx="1" />
        <path d="M7 8V4h10v4M9 14h6" />
      </svg>
    ),
  },
];

export function Navbar() {
  const [open, setOpen] = useState<MegaKey>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = (key: MegaKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
    setActiveIdx(0);
  };

  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div className="header-wrap">
      <header className="header" style={{ borderRadius: 20, width: 700 }} aria-label="Site header">
        <Link className="logo" href="/" aria-label="MoveEast home">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
          <span>MoveEast</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href="/about">About</Link>

          <div
            className="has-mega"
            onMouseEnter={() => show("services")}
            onMouseLeave={hide}
          >
            <Link href="/services">
              Services
              <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 4l3 3 3-3" />
              </svg>
            </Link>
          </div>

          <div
            className="has-mega"
            onMouseEnter={() => show("sectors")}
            onMouseLeave={hide}
          >
            <Link href="/sectors">
              Sectors
              <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 4l3 3 3-3" />
              </svg>
            </Link>
          </div>

          <Link href="/blog">Blog</Link>
        </nav>

        <Link className="cta" href="/contact">
          Let&apos;s talk
          <span className="arrow" aria-hidden="true">
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M2 8L8 2" />
              <path d="M3 2h5v5" />
            </svg>
          </span>
        </Link>
      </header>

      {/* MEGA MENU — SERVICES */}
      <div
        className={`mega ${open === "services" ? "open" : ""}`}
        role="menu"
        aria-label="Services"
        aria-hidden={open !== "services"}
        onMouseEnter={() => show("services")}
        onMouseLeave={hide}
      >
        <div className="mega-grid">
          <div className="mega-list">
            {SERVICES.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`mega-item ${i === activeIdx ? "on" : ""}${i === 1 ? " c2" : ""}${i === 2 ? " c3" : ""}`}
                onMouseEnter={() => setActiveIdx(i)}
                data-mega={i}
              >
                <span className="mega-ico" aria-hidden="true">{s.icon}</span>
                <span className="mega-text">
                  <b>{s.title}</b>
                  <span>{s.desc}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mega-preview" aria-hidden="true">
            {SERVICES.map((s, i) => (
              <div key={s.href} className={`mega-slide s${i + 1} ${i === activeIdx ? "on" : ""}`}>
                <div className="ph" />
                <span className="chip">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mega-foot">
          <Link href="/services">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14">
              <rect x="2" y="3" width="12" height="10" rx="1" />
              <path d="M2 6h12" />
            </svg>
            All services
          </Link>
        </div>
      </div>

      {/* MEGA MENU — SECTORS */}
      <div
        className={`mega ${open === "sectors" ? "open" : ""}`}
        role="menu"
        aria-label="Sectors"
        aria-hidden={open !== "sectors"}
        onMouseEnter={() => show("sectors")}
        onMouseLeave={hide}
      >
        <div className="mega-grid">
          <div className="mega-list">
            {SECTORS.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`mega-item ${i === activeIdx ? "on" : ""}${i > 0 ? ` c${i + 1}` : ""}`}
                onMouseEnter={() => setActiveIdx(i)}
                data-mega={i}
              >
                <span className="mega-ico" aria-hidden="true">{s.icon}</span>
                <span className="mega-text">
                  <b>{s.title}</b>
                  <span>{s.desc}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mega-preview" aria-hidden="true">
            {SECTORS.map((s, i) => (
              <div key={s.href} className={`mega-slide s${i + 1} ${i === activeIdx ? "on" : ""}`}>
                <div className="ph" />
                <span className="chip">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mega-foot">
          <Link href="/sectors">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="14" height="14">
              <rect x="2" y="3" width="12" height="10" rx="1" />
              <path d="M2 6h12" />
            </svg>
            All sectors
          </Link>
        </div>
      </div>
    </div>
  );
}
