"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Service } from "@/content/services";
import type { Sector } from "@/content/sectors";
import { useTheme } from "@/components/theme/ThemeProvider";
import { ArrowUpRight, ChevronDown, CloseIcon, MoonIcon, SunIcon } from "@/components/ui/ArrowIcon";
import styles from "./MobileDrawer.module.css";
import headerStyles from "./Header.module.css";

type Props = {
  services: readonly Service[];
  sectors: readonly Sector[];
};

export function MobileDrawer({ services, sectors }: Props) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Lock body scroll when drawer open
  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-lock");
      document.documentElement.classList.add("menu-lock");
    } else {
      document.body.classList.remove("menu-lock");
      document.documentElement.classList.remove("menu-lock");
    }
    return () => {
      document.body.classList.remove("menu-lock");
      document.documentElement.classList.remove("menu-lock");
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger trigger — lives inside Header but we expose it via button event dispatcher.
          For tree-shaking, we keep the button here too; HeaderInteractive forwards click via event. */}
      <button
        type="button"
        className={headerStyles.hamburger}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={headerStyles.hamburgerIco} aria-hidden="true">
          <span /><span /><span />
        </span>
      </button>

      <div
        className={`${styles.backdrop} ${open ? styles.open : ""}`}
        aria-hidden="true"
        onClick={close}
      />

      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Menu"
      >
        <div className={styles.head}>
          <Link href="/" className={styles.logo} onClick={close}>
            <LogoMark />
            <span>MoveEast</span>
          </Link>
          <button
            type="button"
            className={styles.close}
            aria-label="Close menu"
            onClick={close}
          >
            <CloseIcon />
          </button>
        </div>

        <div className={styles.navScroll}>
          <nav className={styles.nav} aria-label="Mobile primary">
            <div className={styles.navItem}>
              <Link href="/about" className={styles.navRow} onClick={close}>
                <span>About</span>
                <span className={styles.navMeta}>
                  <span className={styles.num}>01</span>
                </span>
              </Link>
            </div>

            <div className={`${styles.navItem} ${servicesOpen ? styles.open : ""}`}>
              <button
                type="button"
                className={styles.navRow}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                <span>Services</span>
                <span className={styles.navMeta}>
                  <span className={styles.num}>02</span>
                  <ChevronDown className={styles.chev} />
                </span>
              </button>
              <div className={styles.sub}>
                <div className={styles.subInner}>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={styles.subItem}
                      onClick={close}
                    >
                      <span className={styles.subDot} aria-hidden="true" />
                      <span className={styles.subLabel}>{s.shortLabel}</span>
                      <span className={styles.subArrow} aria-hidden="true"><ArrowUpRight /></span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className={`${styles.subItem} ${styles.subItemAll}`}
                    onClick={close}
                  >
                    <span className={styles.subDot} aria-hidden="true" />
                    <span className={styles.subLabel}>All services</span>
                    <span className={styles.subArrow} aria-hidden="true"><ArrowUpRight /></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${styles.navItem} ${sectorsOpen ? styles.open : ""}`}>
              <button
                type="button"
                className={styles.navRow}
                aria-expanded={sectorsOpen}
                onClick={() => setSectorsOpen((v) => !v)}
              >
                <span>Sectors</span>
                <span className={styles.navMeta}>
                  <span className={styles.num}>03</span>
                  <ChevronDown className={styles.chev} />
                </span>
              </button>
              <div className={styles.sub}>
                <div className={styles.subInner}>
                  {sectors.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/sectors/${s.slug}`}
                      className={styles.subItem}
                      onClick={close}
                    >
                      <span className={styles.subDot} aria-hidden="true" />
                      <span className={styles.subLabel}>{s.shortLabel}</span>
                      <span className={styles.subArrow} aria-hidden="true"><ArrowUpRight /></span>
                    </Link>
                  ))}
                  <Link
                    href="/sectors"
                    className={`${styles.subItem} ${styles.subItemAll}`}
                    onClick={close}
                  >
                    <span className={styles.subDot} aria-hidden="true" />
                    <span className={styles.subLabel}>All sectors</span>
                    <span className={styles.subArrow} aria-hidden="true"><ArrowUpRight /></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.navItem}>
              <Link href="/blog" className={styles.navRow} onClick={close}>
                <span>Blog</span>
                <span className={styles.navMeta}>
                  <span className={styles.num}>04</span>
                </span>
              </Link>
            </div>
          </nav>
        </div>

        <div className={styles.foot}>
          <div className={styles.themeRow}>
            <span className={styles.themeLabel}>Theme</span>
            <div className={styles.themeToggle} role="tablist" aria-label="Theme">
              <button
                type="button"
                className={theme === "light" ? styles.on : ""}
                onClick={() => setTheme("light")}
                aria-pressed={theme === "light"}
              >
                <SunIcon /> Light
              </button>
              <button
                type="button"
                className={theme === "dark" ? styles.on : ""}
                onClick={() => setTheme("dark")}
                aria-pressed={theme === "dark"}
              >
                <MoonIcon /> Dark
              </button>
            </div>
          </div>
          <Link href="/contact" className="cta" onClick={close}>
            Let&apos;s talk
            <span className="arrow" aria-hidden="true"><ArrowUpRight /></span>
          </Link>
          <div className={styles.footMeta}>
            <span>Shenzhen · HK · Rome · Addis</span>
            <span>EST. 2018</span>
          </div>
        </div>
      </aside>
    </>
  );
}

function LogoMark() {
  return (
    <span className={styles.logo}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" fill="currentColor" rx="1.2" />
        <rect x="12" y="3" width="7" height="7" fill="var(--accent)" rx="1.2" />
        <rect x="3" y="12" width="7" height="7" fill="var(--accent)" fillOpacity=".6" rx="1.2" />
        <rect x="12" y="12" width="7" height="7" fill="currentColor" rx="1.2" />
      </svg>
    </span>
  );
}
