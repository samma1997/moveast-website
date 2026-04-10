"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headingRef.current, { y: 60, opacity: 0, duration: 1 })
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(imageRef.current, { scale: 1.1, opacity: 0, duration: 1.2 }, "-=1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-brand-black overflow-hidden pt-20">
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg"
          alt="Shenzhen skyline and port infrastructure"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="section-label mb-6">Shenzhen, China</p>

          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Your Strategic Partner for{" "}
            <span className="text-brand-orange">Procurement</span> in China
          </h1>

          <p
            ref={subRef}
            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            Move East Trading connects global enterprises with China&apos;s industrial
            ecosystem — delivering verified sourcing, structured procurement, and
            end-to-end supply chain management from Shenzhen to the world.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-full hover:bg-brand-orange-dark transition-all group"
            >
              Start Your Procurement Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Diagonal accent bar from brochure */}
      <div className="absolute bottom-0 left-8 w-1 h-24 bg-brand-orange transform -skew-x-12 hidden lg:block" />
    </section>
  );
}
