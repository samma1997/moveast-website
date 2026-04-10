"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Strategic Sourcing\n& Procurement",
    description: "We identify, vet, and manage Chinese manufacturers on your behalf — ensuring quality, compliance, and competitive pricing through a structured, transparent process.",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
    href: "/services/sourcing",
  },
  {
    num: "02",
    title: "Technology Transfer\n& Project Integration",
    description: "From specification alignment to regulatory compliance, we facilitate the transfer of advanced Chinese technology into international infrastructure projects.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    href: "/services/technology-transfer",
  },
  {
    num: "03",
    title: "Trading & Supply\nChain Management",
    description: "End-to-end coordination from Shenzhen's port — the world's 4th busiest — managing logistics, customs, and delivery with full visibility at every stage.",
    image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg",
    href: "/services/supply-chain",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-item").forEach((item, i) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 85%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-light py-[var(--spacing-section)] lg:py-[var(--spacing-section-lg)]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="label">How We Operate</span>
          <h2 className="mt-5 heading-display text-[clamp(2rem,4vw,3.5rem)] text-dark">
            Three service lines,<br />one integrated approach
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 lg:mt-20 space-y-6">
          {services.map((service) => (
            <Link
              key={service.num}
              href={service.href}
              className="service-item group block bg-white rounded-2xl overflow-hidden border border-light-muted hover:border-brand/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image */}
                <div className="lg:col-span-4 relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-[0.8rem] font-semibold text-brand">{service.num}</span>
                      <h3 className="mt-3 text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-dark leading-tight whitespace-pre-line">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-text-muted leading-relaxed max-w-lg">
                        {service.description}
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-light group-hover:bg-brand group-hover:text-white text-text-subtle transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
