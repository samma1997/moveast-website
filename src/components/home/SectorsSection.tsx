"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Train, Sun, HeartPulse, Cog } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    icon: Train,
    title: "Mobility &\nSmart Transport",
    brief: "Railway, EVs, drones, urban mobility",
    image: "https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg",
    href: "/sectors/railway",
  },
  {
    icon: Sun,
    title: "Renewable Energy\n& Storage",
    brief: "Solar, wind, BESS, inverters",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    href: "/sectors/energy",
  },
  {
    icon: HeartPulse,
    title: "Medical Devices\n& Healthcare",
    brief: "Diagnostics, monitoring, hospital equipment",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    href: "/sectors/medical",
  },
  {
    icon: Cog,
    title: "Industrial Machinery\n& Smart Devices",
    brief: "Automation, robotics, sensors, semiconductors",
    image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg",
    href: "/sectors/industrial",
  },
];

export function SectorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sector-card").forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-[var(--spacing-section)] lg:py-[var(--spacing-section-lg)]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="label">Key Sectors</span>
            <h2 className="mt-5 heading-display text-[clamp(2rem,4vw,3.5rem)] text-dark">
              Industries where technology<br className="hidden lg:block" /> and infrastructure converge
            </h2>
          </div>
          <p className="text-text-muted max-w-md leading-relaxed">
            We operate across four high-impact sectors, ensuring reliable access to China&apos;s industrial excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.title}
                href={sector.href}
                className="sector-card group relative rounded-2xl overflow-hidden h-[340px] lg:h-[400px]"
              >
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent group-hover:from-dark/95 transition-all duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                  <div className="w-11 h-11 rounded-xl bg-brand/20 backdrop-blur-sm flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-[1.5rem] font-bold text-white leading-tight whitespace-pre-line">{sector.title}</h3>
                  <p className="mt-2 text-[0.875rem] text-white/50">{sector.brief}</p>
                  <div className="mt-5 flex items-center gap-2 text-brand text-[0.875rem] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Sector
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
