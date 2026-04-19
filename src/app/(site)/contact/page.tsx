import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/pages/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — our team responds within 24–48h. Offices in Shenzhen, Hong Kong, Rome, Addis Ababa.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${site.name}`,
    description: "Reach out for sourcing, technology transfer, or supply chain projects.",
    url: `${site.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${site.url}/contact`,
            name: `Contact — ${site.name}`,
            description: "Contact form and office addresses for Move East Trading.",
            isPartOf: { "@id": `${site.url}/#website` },
            mainEntity: { "@id": `${site.url}/#organization` },
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Get in touch"
        title={<>Let&apos;s talk about your <em>project.</em></>}
        lede="Tell us your target market, volume, and technical requirements. Our Shenzhen team qualifies suppliers and returns a shortlist within a week."
      />

      <section style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
          <ContactForm />

          <aside style={{ display: "flex", flexDirection: "column", gap: 32, position: "sticky", top: 120 }}>
            <div>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}>Direct contact</span>
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                <a href={`mailto:${site.email}`} style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} style={{ fontSize: 15, color: "var(--ink-2)" }}>
                  {site.phone}
                </a>
              </div>
            </div>

            <div>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}>Offices</span>
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
                {site.offices.map((o) => (
                  <div key={o.city}>
                    <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                      {o.city}{o.label === "HQ" ? " (HQ)" : ""}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 2 }}>
                      {o.region ? `${o.region}, ${o.country}` : o.country}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}>Response</span>
              <p style={{
                marginTop: 12,
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--ink-2)",
                maxWidth: "38ch",
              }}>
                We reply within 24–48 hours. For urgent briefs reference your target market in the message.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
