"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 30, suffix: "%", label: "Global Manufacturing Output" },
  { value: 490, prefix: "$", suffix: "B+", label: "Shenzhen GDP" },
  { value: 17, suffix: "K+", label: "High-Tech Enterprises" },
  { value: 4, suffix: "", label: "Global Offices" },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;

        gsap.from(counter.parentElement!.parentElement!, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        });

        gsap.fromTo(counter,
          { innerText: "0" },
          {
            innerText: stats[i].value,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-dark tracking-tight leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
                {stat.prefix || ""}
                <span ref={(el) => { countersRef.current[i] = el; }}>0</span>
                {stat.suffix}
              </p>
              <p className="mt-3 text-[0.875rem] text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
