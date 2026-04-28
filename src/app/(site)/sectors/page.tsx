import type { Metadata } from "next";
import { sectors } from "@/content/sectors";
import { site } from "@/content/site";
import { SectorsHero } from "@/components/sectors/SectorsHero";
import { SectorsCards } from "@/components/sectors/SectorsCards";
import { SectorsRationale } from "@/components/sectors/SectorsRationale";
import { SectorsServicesLink } from "@/components/sectors/SectorsServicesLink";
import { SectorsFaq } from "@/components/sectors/SectorsFaq";
import { Results } from "@/components/home/Results";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sectors",
  description: `${site.name} operates across four high-impact sectors: mobility, renewable energy, medical devices, industrial machinery.`,
  alternates: { canonical: "/sectors" },
  openGraph: {
    title: `Sectors — ${site.name}`,
    description:
      "Four sectors of excellence: mobility, renewable energy, medical devices, industrial machinery.",
    url: `${site.url}/sectors`,
    type: "website",
  },
};

export default function SectorsHubPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            url: `${site.url}/sectors`,
            name: `Sectors — ${site.name}`,
            description: "Four sectors of excellence.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: sectors.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${site.url}/sectors/${s.slug}`,
                name: s.title,
              })),
            },
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sectors", url: "/sectors" },
          ]),
        ]}
      />

      <SectorsHero />
      <SectorsCards />
      <SectorsRationale />
      <SectorsServicesLink />
      <Results />
      <SectorsFaq />
    </>
  );
}
