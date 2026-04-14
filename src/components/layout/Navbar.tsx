"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "Chi siamo", href: "/about" },
  { label: "Servizi", href: "/services" },
  { label: "Settori", href: "/sectors" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="text-[1.4rem] font-bold tracking-tight">
          <span className="text-[var(--text)]">move</span>
          <span className="text-[var(--brand)]">east</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--bg-alt)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[0.875rem] font-semibold bg-[var(--text)] text-[var(--bg)] rounded-lg hover:opacity-90 transition-opacity"
          >
            Parla con noi
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6 text-[var(--text)]" /> : <Menu className="w-6 h-6 text-[var(--text)]" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-6 py-8 space-y-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg font-medium text-[var(--text)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-3 text-[0.875rem] font-semibold bg-[var(--text)] text-[var(--bg)] rounded-lg"
            onClick={() => setOpen(false)}
          >
            Parla con noi <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
