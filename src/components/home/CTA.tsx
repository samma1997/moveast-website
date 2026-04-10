"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;
    if (!section || !heading || !content) return;

    const ctx = gsap.context(() => {
      // Subtle parallax on the whole text block
      gsap.to(content, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Heading split
      const split = new SplitType(heading, { types: "words" });
      if (split.words) {
        gsap.from(split.words, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.04,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        });
      }

      // Subtitle + buttons
      gsap.from(section.querySelector(".cta-subtitle"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".cta-subtitle"),
          start: "top 85%",
        },
      });

      gsap.from(section.querySelectorAll(".cta-btn"), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".cta-buttons"),
          start: "top 90%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-section lg:py-[12rem] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div ref={contentRef} className="text-center max-w-3xl mx-auto">
          <p className="label mb-8">Get Started</p>

          <h2
            ref={headingRef}
            className="heading-display text-text text-[clamp(2rem,4.5vw,3.5rem)] mb-8"
          >
            Ready to source from China with confidence?
          </h2>

          <p className="cta-subtitle text-text-muted text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Tell us about your project. Our team in Shenzhen will respond within 24 hours
            with an initial assessment and proposed approach.
          </p>

          <div className="cta-buttons flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="cta-btn inline-flex items-center px-10 py-4.5 bg-brand text-white text-[0.9rem] font-semibold rounded-xl hover:bg-brand-dark transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(212,120,47,0.25)]"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="cta-btn inline-flex items-center px-10 py-4.5 border border-text/15 text-text text-[0.9rem] font-semibold rounded-xl hover:border-text/30 hover:bg-light transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
