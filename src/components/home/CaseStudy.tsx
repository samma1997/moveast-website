"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 752.7, suffix: " km", label: "Railway Track" },
  { value: 10000, suffix: "+", label: "Components Sourced" },
  { value: 0, suffix: "% Defect", label: "Quality Rate" },
  { value: 4, suffix: " Countries", label: "Stakeholders" },
];

export function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageRef.current;
    const heading = headingRef.current;
    const metricsEl = metricsRef.current;
    if (!section || !imageWrap || !heading || !metricsEl) return;

    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.fromTo(
        imageWrap,
        {
          clipPath: "inset(0 48% 0 48%)",
        },
        {
          clipPath: "inset(0 0% 0 0%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: imageWrap,
            start: "top 75%",
          },
        }
      );

      // Heading text split
      const split = new SplitType(heading, { types: "words" });
      if (split.words) {
        gsap.from(split.words, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        });
      }

      // Accent line
      gsap.from(section.querySelector(".accent-line"), {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".accent-line"),
          start: "top 85%",
        },
      });

      // Description
      gsap.from(section.querySelector(".case-desc"), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".case-desc"),
          start: "top 85%",
        },
      });

      // Counter animations
      const metricEls = metricsEl.querySelectorAll(".metric-number");
      metrics.forEach((metric, i) => {
        const el = metricEls[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: metric.value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: metricsEl,
            start: "top 80%",
          },
          onUpdate: () => {
            // Show decimal for 752.7
            if (metric.value % 1 !== 0) {
              (el as HTMLElement).textContent = obj.val.toFixed(1);
            } else {
              (el as HTMLElement).textContent = Math.round(obj.val).toLocaleString();
            }
          },
        });
      });

      // Metric items stagger
      gsap.from(metricsEl.querySelectorAll(".metric-item"), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: metricsEl,
          start: "top 85%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark py-section lg:py-section-lg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <p className="label label-light mb-12 tracking-[0.15em]">Featured Project</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with clip-path animation */}
          <div
            ref={imageRef}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/6964174/pexels-photo-6964174.jpeg"
              alt="Ethiopia-Djibouti Railway project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h3
              ref={headingRef}
              className="heading-display text-white text-[clamp(1.8rem,3.5vw,2.8rem)] mb-6 overflow-hidden"
            >
              Ethiopia-Djibouti Railway
            </h3>

            {/* Orange accent line */}
            <div className="accent-line w-12 h-[3px] bg-brand mb-6 origin-left" />

            <p className="case-desc text-white/50 text-[0.95rem] leading-relaxed mb-10 max-w-md">
              Complete procurement management for one of Africa&apos;s most ambitious
              infrastructure projects. From rolling stock to signalling systems, we
              sourced and managed every component.
            </p>

            {/* Metrics grid */}
            <div ref={metricsRef} className="grid grid-cols-2 gap-8 mb-10">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-item">
                  <div className="heading-display text-white text-[clamp(1.4rem,2.5vw,2rem)] mb-1">
                    <span className="metric-number">0</span>
                    <span className="text-brand">{metric.suffix}</span>
                  </div>
                  <p className="text-white/40 text-[0.8rem] uppercase tracking-[0.08em]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 text-brand text-[0.9rem] font-semibold hover:gap-5 transition-all duration-300"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
