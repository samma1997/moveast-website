"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const badges = [
  "CICC Board Member",
  "UNGM Registered",
  "4 Global Offices",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const badgesEl = badgesRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    const imageContainer = imageRef.current;

    if (!section || !headline || !subtitle || !cta || !badgesEl || !scrollIndicator || !imageContainer) return;

    const ctx = gsap.context(() => {
      // Split headline into words
      const split = new SplitType(headline, { types: "words" });
      const words = split.words;

      if (!words) return;

      // Set initial states
      gsap.set(words, { y: 120, opacity: 0 });
      gsap.set(subtitle, { y: 40, opacity: 0 });
      gsap.set(cta.children, { y: 50, opacity: 0 });
      gsap.set(badgesEl.children, { y: 30, opacity: 0 });
      gsap.set(scrollIndicator, { opacity: 0 });

      // Master timeline
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.3,
      });

      // Words stagger in
      tl.to(words, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.08,
      });

      // Subtitle fades in
      tl.to(subtitle, {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }, "-=0.4");

      // CTAs slide up
      tl.to(cta.children, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
      }, "-=0.4");

      // Badges fade in
      tl.to(badgesEl.children, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.3");

      // Scroll indicator
      tl.to(scrollIndicator, {
        opacity: 1,
        duration: 0.6,
      }, "-=0.2");

      // Parallax on background image
      gsap.to(imageContainer, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll indicator pulse
      gsap.to(scrollIndicator.querySelector(".scroll-line"), {
        scaleY: 1.5,
        opacity: 0.3,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <div ref={imageRef} className="absolute inset-0 -top-[100px] -bottom-[100px]">
        <Image
          src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
          alt="Infrastructure and skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark/60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          <p className="label label-light mb-8 tracking-[0.15em]">
            China Procurement Partner
          </p>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="heading-display text-white text-[clamp(2.5rem,7vw,6rem)] mb-8 overflow-hidden"
          >
            Strategic Procurement from China
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-white/60 text-lg lg:text-xl max-w-xl leading-relaxed mb-12"
          >
            Connecting global enterprises with China&apos;s industrial ecosystem.
            From sourcing to delivery, we structure every step.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-brand text-white text-[0.9rem] font-semibold rounded-xl hover:bg-brand-dark transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(212,120,47,0.3)]"
            >
              Start a Project
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border border-white/25 text-white text-[0.9rem] font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-white/40"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom badges */}
      <div
        ref={badgesRef}
        className="absolute bottom-28 left-0 right-0 z-10"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex flex-wrap gap-8 lg:gap-12">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-3 text-white/40 text-[0.8rem] tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
        <div className="scroll-line w-px h-8 bg-white/30 origin-top" />
      </div>
    </section>
  );
}
