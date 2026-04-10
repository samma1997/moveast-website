"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "M+", label: "USD Managed" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "", label: "Global Offices" },
];

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });

      // Fade in the whole bar
      gsap.from(section.querySelectorAll(".stat-item"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-dark border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/[0.08]" : ""
              }`}
            >
              <div className="heading-display text-white text-[clamp(2rem,4vw,3.5rem)] mb-2">
                <span ref={(el) => { numberRefs.current[i] = el; }}>0</span>
                <span className="text-brand">{stat.suffix}</span>
              </div>
              <p className="text-white/40 text-[0.8rem] uppercase tracking-[0.1em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
