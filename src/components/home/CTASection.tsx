"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-inner", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-[var(--spacing-section)] lg:py-[var(--spacing-section-lg)]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="cta-inner text-center max-w-3xl mx-auto">
          <span className="label">Get Started</span>
          <h2 className="mt-5 heading-display text-[clamp(2rem,4.5vw,3.75rem)] text-dark">
            Ready to source from China<br className="hidden md:block" /> with confidence?
          </h2>
          <p className="mt-6 text-[1.0625rem] text-text-muted leading-relaxed max-w-xl mx-auto">
            Our team in Shenzhen is ready to structure a solution tailored to your
            requirements. No middlemen. No guesswork. Just verified sourcing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-brand text-white text-[0.9375rem] font-semibold rounded-xl hover:bg-brand-dark transition-all duration-300"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/sourcing"
              className="inline-flex items-center justify-center gap-3 px-10 py-4.5 text-text text-[0.9375rem] font-medium rounded-xl border border-light-muted hover:border-brand/30 hover:bg-brand-subtle transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
