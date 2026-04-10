import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { Services } from "@/components/home/Services";
import { HorizontalScroll } from "@/components/home/HorizontalScroll";
import { CaseStudy } from "@/components/home/CaseStudy";
import { Values } from "@/components/home/Values";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <HorizontalScroll />
      <CaseStudy />
      <Values />
      <CTA />
    </>
  );
}
