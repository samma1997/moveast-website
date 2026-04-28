import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactChat } from "@/components/contact/ContactChat";
import { SectorPartners } from "@/components/sectors/SectorPartners";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import styles from "@/components/contact/ContactPage.module.css";

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

type Office = {
  flag: string;
  city: string;
  addr: string;
  addrLine2?: string;
  email: string;
  role: string;
};

const offices: readonly Office[] = [
  {
    flag: "🇨🇳",
    city: "Shenzhen · Headquarters",
    addr: "Sourcing, supplier qualification, factory audits, operations",
    addrLine2: "Guangdong Province, China",
    email: "info@moveasttrading.com",
    role: "Role: sourcing & operations",
  },
  {
    flag: "🇭🇰",
    city: "Hong Kong",
    addr: "Trade finance, documentation, export compliance",
    addrLine2: "Hong Kong SAR",
    email: "info@moveasttrading.com",
    role: "Role: trade finance & compliance",
  },
  {
    flag: "🇮🇹",
    city: "Rome",
    addr: "European business development and client relations",
    addrLine2: "Lazio, Italy",
    email: "info@moveasttrading.com",
    role: "+39 06 4200 1212",
  },
  {
    flag: "🇪🇹",
    city: "Addis Ababa",
    addr: "African corridor operations, infrastructure & public-sector clients",
    addrLine2: "Federal Democratic Republic of Ethiopia",
    email: "info@moveasttrading.com",
    role: "Role: Africa corridor",
  },
];

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
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />

      {/* HERO */}
      <section className={styles.heroSec}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>Contact · Shenzhen · Hong Kong · Rome · Addis Ababa</span>
                </div>
                <h1 className={styles.heroTitle}>
                  Talk to the <em>team in Shenzhen</em>.
                </h1>
              </div>
              <p className={styles.heroLede}>
                Move East Trading is a China-based procurement company. We work with
                governments, EPC contractors, industrial buyers, and distributors
                who need a reliable counterpart on the ground. Every message is read
                by a member of the team, not by a chatbot.
              </p>
              <div className={styles.footline}>
                <span className={styles.live} aria-hidden="true" />
                <span>Shenzhen office · GMT+8</span>
              </div>
            </div>

            <ContactChat />
          </div>
        </div>
      </section>

      {/* CONTACT INFO (4 offices) */}
      <section className={styles.infoSec}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {offices.map((o) => (
              <article key={o.city} className={styles.infoCard}>
                <span className={styles.flag} aria-hidden="true">{o.flag}</span>
                <span className={styles.city}>{o.city}</span>
                <p className={styles.addr}>
                  {o.addr}
                  {o.addrLine2 ? (
                    <>
                      <br />
                      {o.addrLine2}
                    </>
                  ) : null}
                </p>
                <div className={styles.contactRow}>
                  <a href={`mailto:${o.email}`}>{o.email}</a>
                  <span>{o.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERS (marquee) */}
      <SectorPartners
        partners={{
          eyebrow: "Direct channels",
          titlePre: "Prefer to ",
          titleEm: "skip the form",
          titlePost: "?",
          lede: "Use the channel that best matches your request. General inquiries at info@moveasttrading.com. Phone (EU line) +39 06 4200 1212. Founder direct: Alessandro Petrini on LinkedIn. Press & media or partnerships — email with the matching subject line.",
        }}
      />
    </>
  );
}
