import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { ServicesAccordion } from "@/components/home/ServicesAccordion";
import { AboutPreview } from "@/components/home/AboutPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { site } from "@/content/site";

// Results + Sectors sono client → dynamic import per ridurre JS initial
const Results = dynamic(
  () => import("@/components/home/Results").then((m) => ({ default: m.Results })),
  { loading: () => <div style={{ minHeight: 420 }} aria-hidden="true" /> }
);
const SectorsShowcase = dynamic(
  () => import("@/components/home/SectorsShowcase").then((m) => ({ default: m.SectorsShowcase })),
  { loading: () => <div style={{ minHeight: 420 }} aria-hidden="true" /> }
);

export const metadata: Metadata = {
  title: `${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
      <Hero />
      <Results />
      <ServicesAccordion />
      <AboutPreview />
      <SectorsShowcase />
      <BlogPreview />
    </>
  );
}
