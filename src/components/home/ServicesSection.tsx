"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Repeat, Truck, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Search,
    title: "Strategic Sourcing & Procurement",
    description:
      "We identify, vet, and manage Chinese manufacturers on your behalf — ensuring quality, compliance, and competitive pricing through a structured, transparent process.",
    href: "/services/sourcing",
  },
  {
    icon: Repeat,
    title: "Technology Transfer & Project Integration",
    description:
      "From specification alignment to regulatory compliance, we facilitate the transfer of Chinese technology and industrial solutions into international projects.",
    href: "/services/technology-transfer",
  },
  {
    icon: Truck,
    title: "Trading & Supply Chain Management",
    description:
      "End-to-end coordination of logistics, customs, and delivery — leveraging Shenzhen's position as the world's 4th busiest port to move goods reliably and on schedule.",
    href: "/services/supply-chain",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="section-label mb-4">Services</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight">
          How We <span className="text-brand-orange">Operate</span>
        </h2>
        <p className="mt-4 text-lg text-brand-gray max-w-2xl">
          Three core service lines, one integrated approach to China procurement.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="group bg-white rounded-2xl p-8 border border-brand-border hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-black">{service.title}</h3>
                <p className="mt-3 text-sm text-brand-gray leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
