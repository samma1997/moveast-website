"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Strategic Sourcing & Procurement", href: "/services/sourcing" },
  { name: "Technology Transfer & Project Integration", href: "/services/technology-transfer" },
  { name: "Trading & Supply Chain Management", href: "/services/supply-chain" },
];

const sectors = [
  { name: "Mobility & Smart Transport", href: "/sectors/railway" },
  { name: "Renewable Energy & Storage", href: "/sectors/energy" },
  { name: "Medical Devices & Healthcare", href: "/sectors/medical" },
  { name: "Industrial Machinery & Smart Devices", href: "/sectors/industrial" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-brand-black">move</span>
              <span className="text-brand-orange">east</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-brand-black hover:text-brand-orange transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-brand-black hover:text-brand-orange transition-colors">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-brand-border p-2 min-w-[320px]">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-3 rounded-lg text-sm text-brand-black hover:bg-brand-light hover:text-brand-orange transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sectors Dropdown */}
            <div className="relative" onMouseEnter={() => setSectorsOpen(true)} onMouseLeave={() => setSectorsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-brand-black hover:text-brand-orange transition-colors">
                Sectors <ChevronDown className={`w-4 h-4 transition-transform ${sectorsOpen ? "rotate-180" : ""}`} />
              </button>
              {sectorsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-brand-border p-2 min-w-[320px]">
                    {sectors.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-3 rounded-lg text-sm text-brand-black hover:bg-brand-light hover:text-brand-orange transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-sm font-medium text-brand-black hover:text-brand-orange transition-colors">
              Case Studies
            </Link>
            <Link href="/team" className="text-sm font-medium text-brand-black hover:text-brand-orange transition-colors">
              Team
            </Link>
            <Link href="/blog" className="text-sm font-medium text-brand-black hover:text-brand-orange transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-full hover:bg-brand-orange-dark transition-colors"
          >
            Contact Us
          </Link>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            <Link href="/about" className="block text-base font-medium text-brand-black" onClick={() => setMobileOpen(false)}>About</Link>
            <div>
              <p className="section-label mb-2">Services</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="block py-2 text-sm text-brand-gray hover:text-brand-orange" onClick={() => setMobileOpen(false)}>
                  {s.name}
                </Link>
              ))}
            </div>
            <div>
              <p className="section-label mb-2">Sectors</p>
              {sectors.map((s) => (
                <Link key={s.href} href={s.href} className="block py-2 text-sm text-brand-gray hover:text-brand-orange" onClick={() => setMobileOpen(false)}>
                  {s.name}
                </Link>
              ))}
            </div>
            <Link href="/case-studies" className="block text-base font-medium text-brand-black" onClick={() => setMobileOpen(false)}>Case Studies</Link>
            <Link href="/team" className="block text-base font-medium text-brand-black" onClick={() => setMobileOpen(false)}>Team</Link>
            <Link href="/blog" className="block text-base font-medium text-brand-black" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link
              href="/contact"
              className="block text-center px-6 py-3 bg-brand-orange text-white font-semibold rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
