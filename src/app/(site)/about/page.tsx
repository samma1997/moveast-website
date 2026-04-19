import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { AboutHero } from "@/components/about/AboutHero";
import { Team } from "@/components/about/Team";
import { InstagramFeed } from "@/components/about/InstagramFeed";
import { aboutPageSchema, breadcrumbSchema, jsonLd } from "@/lib/seo/schema";
import { site } from "@/content/site";

// Timeline è client con scroll carousel — lo carichiamo dynamic per ridurre JS above-fold
const Timeline = dynamic(
  () => import("@/components/about/Timeline").then((m) => ({ default: m.Timeline })),
  { loading: () => <div style={{ minHeight: 420 }} aria-hidden="true" /> }
);

export const metadata: Metadata = {
  title: "About",
  description: `Leadership team and story of ${site.name} — from Shenzhen to four offices on three continents. Founded by Alessandro Petrini, CICC Board Member, UNGM Registered Vendor.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${site.name}`,
    description: `Bridging global industry with China's manufacturing power. Leadership team, company timeline, and global offices of ${site.name}.`,
    url: `${site.url}/about`,
    type: "profile",
    // opengraph-image.tsx in stessa cartella genera dinamicamente
  },
  twitter: {
    card: "summary_large_image",
    title: `About — ${site.name}`,
    description: `Leadership team, company timeline, and global offices of ${site.name}.`,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            aboutPageSchema(),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />
      <AboutHero />
      <Timeline />
      <Team />
      <InstagramFeed />
    </>
  );
}
