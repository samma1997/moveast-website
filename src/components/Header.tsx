"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    children: [
      { name: "Strategic Sourcing & Procurement", href: "/services/sourcing" },
      { name: "Technology Transfer & Project Integration", href: "/services/technology-transfer" },
      { name: "Trading & Supply Chain Management", href: "/services/supply-chain" },
    ],
  },
  {
    name: "Sectors",
    children: [
      { name: "Mobility & Smart Transport", href: "/sectors/railway" },
      { name: "Renewable Energy & Storage", href: "/sectors/energy" },
      { name: "Medical Devices & Healthcare", href: "/sectors/medical" },
      { name: "Industrial Machinery", href: "/sectors/industrial" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-[1.6rem] font-bold tracking-tight leading-none">
              <span className={scrolled ? "text-dark" : "text-white"}>move</span>
              <span className="text-brand">east</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 text-[0.9rem] font-medium transition-colors ${
                      scrolled ? "text-text hover:text-brand" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                      openDropdown === item.name ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-light-muted p-3 min-w-[340px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3.5 rounded-xl text-[0.875rem] text-text-muted hover:text-brand hover:bg-brand-subtle transition-all"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={`text-[0.9rem] font-medium transition-colors ${
                    scrolled ? "text-text hover:text-brand" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center px-7 py-3 text-[0.875rem] font-semibold rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-brand text-white hover:bg-brand-dark"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20"
            }`}
          >
            Contact Us
          </Link>

          {/* Mobile */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-dark" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-dark" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-8 py-8 space-y-6 overflow-y-auto h-full">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <p className="label mb-3">{item.name}</p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2.5 text-text-muted hover:text-brand transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={item.href!}
                  className="block text-lg font-medium text-text"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="block text-center px-7 py-4 bg-brand text-white font-semibold rounded-xl"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
