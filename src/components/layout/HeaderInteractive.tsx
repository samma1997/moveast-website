"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/content/services";
import { sectors } from "@/content/sectors";
import { useTheme } from "@/components/theme/ThemeProvider";
import { ArrowUpRight, ChevronDown, MoonIcon, SunIcon } from "@/components/ui/ArrowIcon";
import { serviceIcons, sectorIcons, ListIcon } from "./MegaMenuIcons";
import { MobileDrawer } from "./MobileDrawer";
import styles from "./Header.module.css";

type MegaKey = "svc" | "sec" | null;

export function HeaderInteractive() {
  const [mega, setMega] = useState<MegaKey>(null);
  const [svcHoverIdx, setSvcHoverIdx] = useState(0);
  const [secHoverIdx, setSecHoverIdx] = useState(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggle } = useTheme();

  const openMega = (k: Exclude<MegaKey, null>) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setMega(k);
  };
  const scheduleClose = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setMega(null), 220);
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMega(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <div className={styles.wrap}>
      <header className={styles.header} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Move East home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={theme === "dark" ? "/logo/logo-dark.webp" : "/logo/logo-light.webp"}
            alt="Move East Trading"
            className={styles.logoImg}
            width={160}
            height={58}
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <Link href="/about" className={styles.navLink}>About</Link>
          <div
            className={styles.megaTrigger}
            onMouseEnter={() => openMega("svc")}
            onMouseLeave={scheduleClose}
            onFocus={() => openMega("svc")}
            onBlur={scheduleClose}
          >
            <Link href="/services" className={styles.navLink} aria-haspopup="menu" aria-expanded={mega === "svc"}>
              Services
              <ChevronDown className={styles.chev} />
            </Link>
          </div>
          <div
            className={styles.megaTrigger}
            onMouseEnter={() => openMega("sec")}
            onMouseLeave={scheduleClose}
            onFocus={() => openMega("sec")}
            onBlur={scheduleClose}
          >
            <Link href="/sectors" className={styles.navLink} aria-haspopup="menu" aria-expanded={mega === "sec"}>
              Sectors
              <ChevronDown className={styles.chev} />
            </Link>
          </div>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
        </nav>

        <Link href="/contact" className={`cta ${styles.headerCta}`}>
          <span>Let&apos;s talk</span>
          <span className="arrow" aria-hidden="true"><ArrowUpRight /></span>
        </Link>

        <button
          type="button"
          className={styles.themeBtn}
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>

        <span className={styles.spacer} aria-hidden="true" />

        <MobileDrawer services={services} sectors={sectors} />
      </header>

      {/* MEGA — Services */}
      <div
        className={`${styles.mega} ${mega === "svc" ? styles.open : ""}`}
        role="menu"
        aria-label="Services"
        aria-hidden={mega !== "svc"}
        onMouseEnter={() => openMega("svc")}
        onMouseLeave={scheduleClose}
      >
        <div className={styles.megaGrid}>
          <div className={styles.megaList}>
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`${styles.megaItem} ${svcHoverIdx === i ? styles.on : ""}`}
                  onMouseEnter={() => setSvcHoverIdx(i)}
                  onFocus={() => setSvcHoverIdx(i)}
                >
                  <span className={styles.megaIco} aria-hidden="true">
                    {Icon ? <Icon /> : null}
                  </span>
                  <span className={styles.megaText}>
                    <b>{s.title}</b>
                    <span>{s.miniDescription}</span>
                  </span>
                </Link>
              );
            })}
          </div>
          <div className={styles.megaPreview} aria-hidden="true">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className={`${styles.megaSlide} ${svcHoverIdx === i ? styles.on : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/services/${s.slug}.webp`}
                  alt=""
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span className={styles.megaChip}>{s.shortLabel}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.megaFoot}>
          <Link href="/services">
            <ListIcon width={14} height={14} />
            All services
          </Link>
        </div>
      </div>

      {/* MEGA — Sectors */}
      <div
        className={`${styles.mega} ${mega === "sec" ? styles.open : ""}`}
        role="menu"
        aria-label="Sectors"
        aria-hidden={mega !== "sec"}
        onMouseEnter={() => openMega("sec")}
        onMouseLeave={scheduleClose}
      >
        <div className={styles.megaGrid}>
          <div className={styles.megaList}>
            {sectors.map((s, i) => {
              const Icon = sectorIcons[s.slug as keyof typeof sectorIcons];
              return (
                <Link
                  key={s.slug}
                  href={`/sectors/${s.slug}`}
                  className={`${styles.megaItem} ${secHoverIdx === i ? styles.on : ""}`}
                  onMouseEnter={() => setSecHoverIdx(i)}
                  onFocus={() => setSecHoverIdx(i)}
                >
                  <span className={styles.megaIco} aria-hidden="true">
                    {Icon ? <Icon /> : null}
                  </span>
                  <span className={styles.megaText}>
                    <b>{s.title}</b>
                    <span>{s.miniDescription}</span>
                  </span>
                </Link>
              );
            })}
          </div>
          <div className={styles.megaPreview} aria-hidden="true">
            {sectors.map((s, i) => (
              <div
                key={s.slug}
                className={`${styles.megaSlide} ${secHoverIdx === i ? styles.on : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/sectors/${s.slug}.webp`}
                  alt=""
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span className={styles.megaChip}>{s.shortLabel}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.megaFoot}>
          <Link href="/sectors">
            <ListIcon width={14} height={14} />
            All sectors
          </Link>
        </div>
      </div>
    </div>
  );
}
