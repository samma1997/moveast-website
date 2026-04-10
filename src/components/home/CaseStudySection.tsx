"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CaseStudySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-image", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".cs-content", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-black py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="cs-image relative rounded-2xl overflow-hidden h-80 lg:h-[500px]">
            <Image
              src="https://images.pexels.com/photos/6964174/pexels-photo-6964174.jpeg"
              alt="Ethiopia-Djibouti Railway infrastructure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-6 left-6 px-4 py-2 bg-brand-orange/90 backdrop-blur-sm rounded-full">
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Case Study</span>
            </div>
          </div>

          {/* Content */}
          <div className="cs-content">
            <p className="section-label mb-4">Featured Project</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ethiopia-Djibouti Railway:{" "}
              <span className="text-brand-orange">Official Outsourcing Agent</span> in China
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Move East Trading served as the designated procurement agent in China for the
              Ethiopia-Djibouti Railway, managing sourcing, supplier verification, and logistics
              coordination for one of East Africa&apos;s most critical infrastructure projects.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { value: "752.7 km", label: "Railway Length" },
                { value: "10,000+ km", label: "Logistics Chain" },
                { value: "0%", label: "Quality Rejection Rate" },
                { value: "4 Countries", label: "Operations Span" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-brand-orange">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/case-studies/ethiopia-railway"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-brand-orange text-white font-semibold rounded-full hover:bg-brand-orange-dark transition-colors group"
            >
              Read the Full Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
