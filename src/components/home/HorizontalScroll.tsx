"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Train, Sun, HeartPulse, Cog } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Sector {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

const sectors: Sector[] = [
  {
    icon: Train,
    title: "Mobility & Smart Transport",
    description:
      "From electric buses to railway systems, we source rolling stock, signalling systems, and infrastructure components across China's transport manufacturing base.",
    image: "https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg",
  },
  {
    icon: Sun,
    title: "Renewable Energy & Storage",
    description:
      "Solar panels, wind turbines, battery storage systems, and EV charging infrastructure. Direct procurement from Tier 1 Chinese manufacturers.",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
  },
  {
    icon: HeartPulse,
    title: "Medical Devices & Healthcare",
    description:
      "Certified medical equipment, hospital infrastructure, and healthcare technology sourced from CFDA-approved manufacturers with full regulatory compliance.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
  },
  {
    icon: Cog,
    title: "Industrial Machinery",
    description:
      "Heavy machinery, CNC equipment, automation systems, and industrial tools. We manage the entire procurement cycle from specification to commissioning.",
    image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg",
  },
];

export function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;
    if (!section || !track || !progressBar) return;

    const ctx = gsap.context(() => {
      const cards = track.querySelectorAll(".sector-card");
      const totalWidth = track.scrollWidth - window.innerWidth;

      // Horizontal scroll
      const scrollTween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Progress bar
      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: true,
        },
      });

      // Card text reveal
      cards.forEach((card) => {
        const content = card.querySelector(".card-content");
        if (!content) return;

        gsap.from(content.children, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 60%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  // Mobile: vertical cards
  if (isMobile) {
    return (
      <section ref={sectionRef} className="bg-dark py-section overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="label label-light mb-6">Key Sectors</p>
          <h2 className="heading-display text-white text-[clamp(2rem,5vw,3rem)] mb-12">
            Industries We Serve
          </h2>
          <div className="space-y-8">
            {sectors.map((sector) => (
              <MobileSectorCard key={sector.title} sector={sector} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative bg-dark overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none opacity-0 sector-progress-wrap">
        <div
          ref={progressRef}
          className="h-full bg-brand origin-left scale-x-0"
        />
      </div>

      {/* Section header pinned */}
      <div className="absolute top-12 left-12 z-20 pointer-events-none">
        <p className="label label-light mb-2 tracking-[0.15em]">Key Sectors</p>
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="flex h-screen items-stretch">
        {sectors.map((sector, i) => (
          <div
            key={sector.title}
            className="sector-card relative flex-shrink-0 w-screen h-screen flex items-center justify-center"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
            </div>

            {/* Card content */}
            <div className="card-content relative z-10 max-w-[600px] px-12 lg:px-20">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-brand/60 text-[0.75rem] font-mono">
                  {String(i + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
                </span>
              </div>
              <sector.icon className="w-10 h-10 text-brand mb-6 stroke-[1.5]" />
              <h3 className="heading-display text-white text-[clamp(1.8rem,3.5vw,3rem)] mb-6">
                {sector.title}
              </h3>
              <p className="text-white/50 text-[0.95rem] leading-relaxed max-w-md">
                {sector.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileSectorCard({ sector }: { sector: Sector }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
      <Image
        src={sector.image}
        alt={sector.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <sector.icon className="w-8 h-8 text-brand mb-4 stroke-[1.5]" />
        <h3 className="heading-display text-white text-xl mb-2">{sector.title}</h3>
        <p className="text-white/50 text-[0.85rem] leading-relaxed">{sector.description}</p>
      </div>
    </div>
  );
}
