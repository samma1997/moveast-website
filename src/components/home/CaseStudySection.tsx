"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "752.7 km", label: "Railway Length" },
  { value: "10,000+", label: "KM Logistics Chain" },
  { value: "0%", label: "Quality Rejections" },
  { value: "4", label: "Countries Involved" },
];

export function CaseStudySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      gsap.from(".cs-img", {
        scale: 1.08,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      gsap.from(".cs-metric", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cs-metrics", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark-soft py-[var(--spacing-section)] lg:py-[var(--spacing-section-lg)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="cs-text order-2 lg:order-1">
            <span className="label">Featured Project</span>
            <h2 className="mt-5 heading-display text-[clamp(2rem,3.5vw,3rem)] text-white leading-tight">
              Ethiopia-Djibouti Railway
            </h2>
            <hr className="hr-brand mt-6" />
            <p className="mt-6 text-[1.0625rem] text-white/50 leading-relaxed">
              Official outsourcing agent in China for one of East Africa&apos;s most strategic
              transport corridors. Managing procurement, supplier verification, quality
              assurance, and multimodal logistics across four countries.
            </p>

            <div className="cs-metrics mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              {metrics.map((m) => (
                <div key={m.label} className="cs-metric">
                  <p className="text-[1.75rem] font-bold text-brand leading-none">{m.value}</p>
                  <p className="mt-2 text-[0.8125rem] text-white/35">{m.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/case-studies/ethiopia-railway"
              className="group inline-flex items-center gap-3 mt-12 px-8 py-4 bg-brand text-white text-[0.9375rem] font-semibold rounded-xl hover:bg-brand-dark transition-all duration-300"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="cs-img order-1 lg:order-2 relative rounded-2xl overflow-hidden h-[360px] lg:h-[520px]">
            <Image
              src="https://images.pexels.com/photos/6964174/pexels-photo-6964174.jpeg"
              alt="Railway infrastructure project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-6 left-6 px-4 py-2.5 bg-dark/60 backdrop-blur-md rounded-xl border border-white/10">
              <span className="text-[0.75rem] text-white/70 font-medium uppercase tracking-wider">Case Study</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
