"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".hero-title span", { y: 80, opacity: 0, stagger: 0.08, duration: 0.9 }, "-=0.2")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-card", { x: 60, opacity: 0, duration: 0.8 }, "-=0.5");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-[72px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Title */}
          <div className="lg:col-span-7">
            <div className="hero-label label mb-6">
              Shenzhen · Hong Kong · Rome · Addis Ababa
            </div>

            <h1 className="hero-title font-[family-name:var(--font-jakarta)] text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text)]">
              <span className="block overflow-hidden"><span className="inline-block">Strategic</span></span>
              <span className="block overflow-hidden"><span className="inline-block">Procurement</span></span>
              <span className="block overflow-hidden"><span className="inline-block text-[var(--brand)]">from China</span></span>
            </h1>

            <p className="hero-desc mt-8 text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed max-w-[480px]">
              Connecting global enterprises with China&apos;s industrial ecosystem. Verified sourcing, technology transfer, and supply chain management.
            </p>
          </div>

          {/* Right — Case Study Card */}
          <div className="lg:col-span-5 lg:pt-16">
            <div className="hero-card group relative bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--brand)]/30 transition-colors">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.pexels.com/photos/6964174/pexels-photo-6964174.jpeg"
                  alt="Ethiopia-Djibouti Railway — Move East Trading case study"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.75rem] text-[var(--text-secondary)]">Case Study</p>
                  <p className="text-[0.9375rem] font-semibold text-[var(--text)] mt-1">
                    Ethiopia-Djibouti Railway — Official outsourcing agent in China
                  </p>
                </div>
                <Link
                  href="/case-studies/ethiopia-railway"
                  className="shrink-0 w-10 h-10 rounded-lg bg-[var(--text)] text-[var(--bg)] flex items-center justify-center group-hover:bg-[var(--brand)] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
