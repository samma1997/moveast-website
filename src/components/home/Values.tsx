"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface Value {
  number: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    number: "01",
    title: "On-the-ground presence",
    description:
      "Our team operates from Shenzhen, at the heart of China's manufacturing ecosystem. We're not brokers — we're your in-country procurement arm.",
  },
  {
    number: "02",
    title: "Institutional-grade process",
    description:
      "Every project follows structured phases: scoping, supplier qualification, production monitoring, quality assurance, and delivery management.",
  },
  {
    number: "03",
    title: "Full regulatory compliance",
    description:
      "UNGM registered, CICC board member. We operate within international frameworks and ensure every transaction meets global compliance standards.",
  },
  {
    number: "04",
    title: "End-to-end accountability",
    description:
      "From the first specification to final delivery, one team owns the outcome. No handoffs, no gaps, no excuses.",
  },
];

export function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const ctx = gsap.context(() => {
      // Heading split
      const split = new SplitType(heading, { types: "words" });
      if (split.words) {
        gsap.from(split.words, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        });
      }

      // Cards animation — rotate and scale in
      const cards = section.querySelectorAll(".value-card");
      cards.forEach((card, i) => {
        const rotation = i % 2 === 0 ? -2.5 : 2.5;
        gsap.from(card, {
          rotation,
          scale: 0.92,
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-section lg:py-section-lg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Centered heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="label mb-6">Our Approach</p>
          <h2
            ref={headingRef}
            className="heading-display text-text text-[clamp(2rem,4vw,3.2rem)]"
          >
            Built on principles, not promises
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-text/[0.06]">
          {values.map((value) => (
            <div
              key={value.number}
              className="value-card bg-white p-10 lg:p-14"
            >
              <span className="heading-display text-brand/30 text-[2.5rem] leading-none mb-6 block">
                {value.number}
              </span>
              <h3 className="text-[1.2rem] lg:text-[1.35rem] font-semibold text-text mb-4">
                {value.title}
              </h3>
              <p className="text-text-muted text-[0.9rem] leading-relaxed max-w-md">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
