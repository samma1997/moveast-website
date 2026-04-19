import type { Metadata } from "next";
import { sectors } from "@/content/sectors";
import { site } from "@/content/site";
import { PageHero } from "@/components/pages/PageHero";
import { ServiceCard } from "@/components/pages/ServiceCard";
import { Cta } from "@/components/ui/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { sectorIcons } from "@/components/layout/MegaMenuIcons";

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
            description: "Four sectors where we operate.",
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

      <PageHero
        eyebrow="Sectors we operate in"
        title={<>Industries where technology and infrastructure <em>converge.</em></>}
        lede="We operate across four high-impact sectors, ensuring reliable access to China's industrial excellence."
        actions={<Cta href="/contact">Start a project</Cta>}
      />

      <section style={{ padding: "24px 0 80px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px", display: "grid", gap: 16 }}>
          {sectors.map((s) => (
            <ServiceCard
              key={s.slug}
              href={`/sectors/${s.slug}`}
              index={s.order}
              title={s.title}
              description={s.description}
              icon={sectorIcons[s.slug as keyof typeof sectorIcons]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
