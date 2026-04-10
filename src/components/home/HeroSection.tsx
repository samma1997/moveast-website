"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-line", { y: 80, opacity: 0, stagger: 0.12 }, "-=0.3")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.3")
        .from(".hero-image", { scale: 1.15, opacity: 0, duration: 2, ease: "power2.out" }, 0)
        .from(".hero-badge", { x: -30, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-end lg:items-center overflow-hidden bg-dark">
      {/* Background */}
      <div className="hero-image absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
          alt="Modern infrastructure and global trade"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full py-32 lg:py-0">
        <div className="max-w-[720px]">
          {/* Label */}
          <div className="hero-label">
            <span className="label label-light">Shenzhen &mdash; Hong Kong &mdash; Rome &mdash; Addis Ababa</span>
          </div>

          {/* Headline */}
          <h1 className="mt-8">
            <span className="hero-line block heading-display text-[clamp(2.5rem,6vw,5rem)] text-white">
              Strategic
            </span>
            <span className="hero-line block heading-display text-[clamp(2.5rem,6vw,5rem)] text-white">
              Procurement
            </span>
            <span className="hero-line block heading-display text-[clamp(2.5rem,6vw,5rem)] text-brand">
              from China
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub mt-8 text-[1.125rem] text-white/50 leading-relaxed max-w-[540px]">
            Connecting global enterprises with China&apos;s industrial ecosystem.
            Verified sourcing, technology transfer, and supply chain management
            — with on-the-ground expertise from Shenzhen.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="hero-cta group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand text-white text-[0.9375rem] font-semibold rounded-xl hover:bg-brand-dark transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="hero-cta inline-flex items-center justify-center gap-3 px-8 py-4 text-white/70 text-[0.9375rem] font-medium rounded-xl border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>

          {/* Badges */}
          <div className="mt-16 flex flex-wrap gap-3">
            {["CICC Board Member", "UNGM Registered", "4 Global Offices"].map((badge) => (
              <span
                key={badge}
                className="hero-badge inline-flex items-center px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/8 text-[0.8rem] text-white/40"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[0.7rem] text-white/25 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
