"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Transparency by Design",
    description: "Every procurement project follows a documented, auditable process. Full visibility into supplier selection, pricing, and inspection reports.",
  },
  {
    title: "On-the-Ground Verification",
    description: "We don't source remotely. Our Shenzhen team conducts in-person factory audits, product inspections, and supplier meetings.",
  },
  {
    title: "Cross-Cultural Precision",
    description: "A leadership team spanning Italian, Chinese, and Ethiopian backgrounds — navigating East-West trade with native fluency on both sides.",
  },
  {
    title: "Long-Term Partnership",
    description: "Every engagement is structured as the beginning of a relationship. Our clients return because we consistently deliver on commitments.",
  },
];

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trust-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.utils.toArray<HTMLElement>(".trust-item").forEach((item, i) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 90%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-light py-[var(--spacing-section)] lg:py-[var(--spacing-section-lg)]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="trust-heading max-w-2xl mb-16 lg:mb-20">
          <span className="label">Our Approach</span>
          <h2 className="mt-5 heading-display text-[clamp(2rem,4vw,3.5rem)] text-dark">
            Built on principles,<br />not promises
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-light-muted rounded-2xl overflow-hidden border border-light-muted">
          {values.map((v, i) => (
            <div key={v.title} className="trust-item bg-white p-10 lg:p-14">
              <span className="text-[0.8rem] font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-4 text-[1.25rem] font-bold text-dark">{v.title}</h3>
              <p className="mt-4 text-[0.9375rem] text-text-muted leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
