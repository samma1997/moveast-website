"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  number: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Strategic Sourcing & Procurement",
    description:
      "End-to-end procurement management across China's industrial landscape. We identify, qualify, and manage suppliers to ensure quality, compliance, and cost efficiency.",
    href: "/services/sourcing",
  },
  {
    number: "02",
    title: "Technology Transfer & Integration",
    description:
      "Bridging the gap between Chinese manufacturing capabilities and international standards. From technical specifications to production oversight.",
    href: "/services/technology-transfer",
  },
  {
    number: "03",
    title: "Trading & Supply Chain Management",
    description:
      "Full supply chain orchestration from factory floor to final destination. Logistics, customs, quality control, and delivery — structured for reliability.",
    href: "/services/supply-chain",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const ctx = gsap.context(() => {
      // Split heading text
      const split = new SplitType(heading, { types: "words" });
      if (split.words) {
        gsap.from(split.words, {
          y: 60,
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

      // Left paragraph
      gsap.from(section.querySelector(".services-desc"), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".services-desc"),
          start: "top 85%",
        },
      });

      // Service items stagger from right
      const items = section.querySelectorAll(".service-item");
      items.forEach((item, i) => {
        gsap.from(item, {
          x: 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-light py-section lg:py-section-lg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="label mb-6">What We Do</p>
            <h2
              ref={headingRef}
              className="heading-display text-text text-[clamp(2rem,4vw,3.2rem)] mb-6"
            >
              How We Operate
            </h2>
            <p className="services-desc text-text-muted text-[0.95rem] leading-relaxed max-w-md">
              We structure procurement from China as a managed process — not a transaction.
              Every project follows a rigorous methodology built over 15 years on the ground.
            </p>
          </div>

          {/* Right — Service items */}
          <div className="lg:col-span-7 space-y-0">
            {services.map((service, i) => (
              <Link
                key={service.number}
                href={service.href}
                className={`service-item group block py-10 ${
                  i < services.length - 1 ? "border-b border-text/[0.08]" : ""
                } transition-all duration-300`}
              >
                <div className="flex items-start gap-8">
                  {/* Number */}
                  <span className="heading-display text-[1.8rem] text-text-subtle group-hover:text-brand transition-colors duration-500 shrink-0 pt-1">
                    {service.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[1.25rem] lg:text-[1.4rem] font-semibold text-text group-hover:text-brand transition-colors duration-300">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-text-subtle group-hover:text-brand group-hover:translate-x-1.5 transition-all duration-300 shrink-0 ml-4" />
                    </div>
                    <p className="text-text-muted text-[0.9rem] leading-relaxed max-w-lg">
                      {service.description}
                    </p>
                    {/* Underline that grows on hover */}
                    <div className="mt-4 h-px bg-brand scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
