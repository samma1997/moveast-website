import type { Metadata } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesCards } from "@/components/services/ServicesCards";
import { ServicesMethod } from "@/components/services/ServicesMethod";
import { ServicesPillars } from "@/components/services/ServicesPillars";
import { ServicesSectorsLink } from "@/components/services/ServicesSectorsLink";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { Results } from "@/components/home/Results";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.name} services: strategic sourcing, technology transfer, and supply chain management from Shenzhen. Serving EU, Africa, Middle East.`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services — ${site.name}`,
    description:
      "Strategic sourcing, technology transfer, and supply chain management from Shenzhen. Three integrated service lines.",
    url: `${site.url}/services`,
    type: "website",
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            url: `${site.url}/services`,
            name: `Services — ${site.name}`,
            description: "Three service lines: strategic sourcing, technology transfer, supply chain management.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${site.url}/services/${s.slug}`,
                name: s.title,
              })),
            },
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
        ]}
      />

      <ServicesHero />
      <ServicesCards />
      <ServicesMethod />
      <ServicesPillars />
      <ServicesSectorsLink />
      <Results />
      <ServicesFaq />
    </>
  );
}
