"use client";

import { useEffect, useRef } from "react";
import { Shield, Globe, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  {
    icon: Award,
    title: "China-Italy Chamber of Commerce",
    description: "Board Member — the only business association officially recognized by both governments, representing 800+ Italian companies in China.",
  },
  {
    icon: Shield,
    title: "UNGM Registered Vendor",
    description: "Registered on the United Nations Global Marketplace — the official procurement platform for UN agencies and international organizations.",
  },
  {
    icon: Globe,
    title: "Offices in 4 Countries",
    description: "Shenzhen (HQ), Hong Kong, Rome, and Addis Ababa — combining Chinese manufacturing expertise with a global business network.",
  },
];

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".trust-card").forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.7,
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
        <div className="text-center mb-12">
          <p className="section-label mb-4">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">
            Trusted by <span className="text-brand-orange">Institutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="trust-card bg-white rounded-2xl p-8 border border-brand-border text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-lg font-bold text-brand-black">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-gray leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
