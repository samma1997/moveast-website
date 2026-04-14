"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Strategic Sourcing & Procurement",
    description:
      "We identify, vet, and manage Chinese manufacturers on your behalf — ensuring quality, compliance, and competitive pricing through a structured, transparent process.",
    href: "/services/sourcing",
  },
  {
    num: "02",
    title: "Technology Transfer & Project Integration",
    description:
      "From specification alignment to regulatory compliance, we facilitate the transfer of advanced Chinese technology into international infrastructure projects.",
    href: "/services/technology-transfer",
  },
  {
    num: "03",
    title: "Trading & Supply Chain Management",
    description:
      "End-to-end coordination from Shenzhen's port — the world's 4th busiest — managing logistics, customs, and delivery with full visibility at every stage.",
    href: "/services/supply-chain",
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="label mb-4">How We Operate</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8">
          {/* Left — Image */}
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--surface)]">
              <Image
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
                alt="Move East Trading sourcing operations in Shenzhen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-7">
            <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)] mb-4">
              Three service lines,<br className="hidden md:block" /> one integrated approach
            </h2>
            <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed max-w-lg mb-10">
              We manage complex procurement operations where reliability, technical alignment, and communication efficiency are essential.
            </p>

            <div className="space-y-0">
              {SERVICES.map((s, i) => (
                <div
                  key={s.num}
                  className={`border-t border-[var(--border)] ${i === SERVICES.length - 1 ? "border-b" : ""}`}
                >
                  <button
                    onClick={() => setActive(active === i ? -1 : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[0.8125rem] font-semibold text-[var(--brand)]">{s.num}</span>
                      <span className="text-[1.0625rem] font-semibold text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
                        {s.title}
                      </span>
                    </div>
                    <span className={`text-[var(--text-secondary)] transition-transform duration-300 ${active === i ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      active === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 pl-10">
                        <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed max-w-md">
                          {s.description}
                        </p>
                        <Link
                          href={s.href}
                          className="inline-flex items-center gap-1.5 mt-4 text-[0.8125rem] font-semibold text-[var(--text)] border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors"
                        >
                          Parla con noi <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
