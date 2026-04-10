import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SectorsSection />
      <CaseStudySection />
      <TrustSection />
      <CTASection />
    </>
  );
}
