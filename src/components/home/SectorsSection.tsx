"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    title: "Mobility & Smart Transport",
    description: "Railway systems, electric vehicles, drones, and urban mobility infrastructure.",
    image: "https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg",
    href: "/sectors/railway",
  },
  {
    title: "Renewable Energy & Storage",
    description: "Solar modules, wind components, battery energy storage systems, and inverters.",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    href: "/sectors/energy",
  },
  {
    title: "Medical Devices & Healthcare",
    description: "CE-marked diagnostic equipment, hospital devices, and healthcare technology.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    href: "/sectors/medical",
  },
  {
    title: "Industrial Machinery & Smart Devices",
    description: "Automation systems, robotics, precision sensors, and semiconductor components.",
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
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="section-label mb-4">Key Sectors</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight">
          Industries We <span className="text-brand-orange">Serve</span>
        </h2>
        <p className="mt-4 text-lg text-brand-gray max-w-2xl">
          Operating across sectors where technology, infrastructure, and innovation converge.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="sector-card group relative overflow-hidden rounded-2xl h-72 lg:h-80"
            >
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white">{sector.title}</h3>
                <p className="mt-2 text-sm text-gray-300 max-w-md">{sector.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-brand-orange text-sm font-semibold">
                  Explore Sector
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
