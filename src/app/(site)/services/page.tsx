import type { Metadata } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { PageHero } from "@/components/pages/PageHero";
import { ServiceCard } from "@/components/pages/ServiceCard";
import { Cta } from "@/components/ui/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { serviceIcons } from "@/components/layout/MegaMenuIcons";

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

      <PageHero
        eyebrow="What we do"
        title={<>Three service lines, one <em>integrated</em> approach.</>}
        lede="We manage complex procurement operations where reliability, technical alignment, and communication efficiency are essential — from Shenzhen to your market."
        actions={<Cta href="/contact">Talk to our team</Cta>}
      />

      <section style={{ padding: "24px 0 80px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px", display: "grid", gap: 16 }}>
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              href={`/services/${s.slug}`}
              index={s.order}
              title={s.title}
              description={s.description}
              icon={serviceIcons[s.slug as keyof typeof serviceIcons]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
