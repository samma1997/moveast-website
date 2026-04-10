"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 30, suffix: "%", label: "Of Global Manufacturing Output from China" },
  { value: 490, suffix: "B+", prefix: "$", label: "Shenzhen GDP — Asia's Most Productive Cities" },
  { value: 4, suffix: "", label: "Offices Across Three Continents" },
  { value: 17, suffix: "K+", label: "High-Tech Enterprises in Shenzhen" },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        const target = stats[i].value;

        gsap.fromTo(
          counter,
          { innerText: "0" },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black counter-value">
                {stat.prefix || ""}
                <span ref={(el) => { countersRef.current[i] = el; }}>0</span>
                {stat.suffix}
              </div>
              <p className="mt-2 text-sm text-brand-gray leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
