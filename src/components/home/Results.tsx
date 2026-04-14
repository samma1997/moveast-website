"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const CASES = [
  {
    title: "Ethiopia-Djibouti Railway",
    image: "https://images.pexels.com/photos/6964174/pexels-photo-6964174.jpeg",
    href: "/case-studies/ethiopia-railway",
    stats: [
      { value: "752.7 km", label: "Railway length" },
      { value: "0%", label: "Quality rejections" },
      { value: "10K+", label: "KM logistics chain" },
    ],
  },
  {
    title: "Medical Equipment Supply — COVID Emergency",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    href: "/case-studies/covid-medical",
    stats: [
      { value: "4", label: "EU countries served" },
      { value: "100%", label: "Delivery rate" },
      { value: "48h", label: "Avg response time" },
    ],
  },
  {
    title: "Renewable Energy — Solar Panel Procurement",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    href: "/case-studies/solar-procurement",
    stats: [
      { value: "5 MW", label: "Total capacity" },
      { value: "30%", label: "Cost reduction" },
      { value: "Tier 1", label: "Manufacturers" },
    ],
  },
];

export function Results() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label mb-4">Results</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)]">
              Trusted by companies<br className="hidden md:block" /> across three continents
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--text)] border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--brand)] transition-colors">
              Parla con noi <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--text)] hover:text-[var(--text)] transition-colors" aria-label="Previous">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={() => scroll("right")} className="w-10 h-10 rounded-lg bg-[var(--text)] text-[var(--bg)] flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Next">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0">
          {CASES.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group shrink-0 w-[85vw] md:w-[45%] lg:w-[40%] snap-start"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--bg-alt)]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 85vw, 45vw"
                />
              </div>
              <div className="mt-4 flex gap-3">
                {c.stats.map((s) => (
                  <div key={s.label} className="flex-1 bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg px-3 py-2.5">
                    <p className="text-[1.125rem] font-bold text-[var(--text)]">{s.value}</p>
                    <p className="text-[0.75rem] text-[var(--text-secondary)] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
