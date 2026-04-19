import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, FileText } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTABlock } from "@/components/ui/CTABlock";

export const metadata: Metadata = {
  title: "China Sourcing Insights & Procurement Blog | Move East Trading",
  description:
    "Insights on China procurement, technology transfer, and the China-Africa corridor — written by the Move East team on the ground in Shenzhen.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "China Sourcing Insights | Move East Trading Blog",
    description:
      "Insights on China procurement, technology transfer, and the China-Africa corridor — from the Shenzhen team.",
    url: "https://moveasttrading.com/blog",
    type: "website",
  },
};

const FEATURED = {
  slug: "/blog/how-to-choose-china-sourcing-agent",
  title: "How to Choose a China Sourcing Agent: The Complete Guide for 2026",
  excerpt:
    "The definitive guide for European and African buyers who need a reliable procurement partner in China. Covers the seven criteria that separate a professional sourcing agent from a commission broker, red flags to avoid, how fees are actually structured, and a practical self-assessment checklist.",
  kicker: "Pillar guide · 3,200 words · Updated April 2026",
  readTime: "16 min read",
};

const ARTICLES = [
  {
    slug: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
    title:
      "Inside the $4 Billion Ethiopia-Djibouti Railway: How China-Africa Procurement Really Works",
    excerpt:
      "A narrative look at Africa&apos;s first cross-border electric railway — the scale, the supply chain, and the procurement lessons that apply to every China-Africa infrastructure project.",
    kind: "Case study",
    words: "2,450 words",
    category: "Case Studies",
  },
  {
    slug: "/blog/railway-equipment-procurement-china",
    title:
      "Railway Equipment Procurement from China: What Engineers Need to Know in 2026",
    excerpt:
      "Rolling stock, signalling, electrification. What Chinese suppliers actually deliver, how to qualify them, and the non-obvious interoperability risks.",
    kind: "Sector guide",
    words: "2,000 words",
    category: "Railway & Mobility",
  },
  {
    slug: "/blog/medical-devices-china-eu-mdr",
    title:
      "Medical Devices from China: MDR, CE Marking, and What EU Importers Must Know",
    excerpt:
      "A practical walk-through of EU Medical Device Regulation (MDR) compliance when sourcing from Chinese manufacturers.",
    kind: "Compliance guide",
    words: "2,500 words",
    category: "Medical Devices",
  },
  {
    slug: "/blog/bess-procurement-china",
    title:
      "BESS Procurement from China: A Buyer&apos;s Guide to Battery Energy Storage in 2026",
    excerpt:
      "How to source Battery Energy Storage Systems from China without getting trapped in spec mismatches or warranty gaps.",
    kind: "Sector guide",
    words: "2,000 words",
    category: "Renewable Energy",
  },
  {
    slug: "/blog/china-technology-transfer-guide",
    title: "Technology Transfer from China: What It Means and How It Works",
    excerpt:
      "Technology transfer is not a slogan. It is a structured process with legal, technical, and training components.",
    kind: "Service guide",
    words: "1,800 words",
    category: "Technology Transfer",
  },
  {
    slug: "/blog/china-africa-trade-corridor-2026",
    title: "China-Africa Trade Corridor 2026: Data Report",
    excerpt:
      "The China-Africa trade relationship is approaching $300B in annual flows. A data-led view of what is actually moving and where the gaps are.",
    kind: "Data report",
    words: "2,000 words",
    category: "China-Africa",
  },
];

const BY_SECTOR = [
  { label: "Railway & Mobility", href: "/sectors/mobility" },
  { label: "Renewable Energy & Storage", href: "/sectors/renewable-energy" },
  { label: "Medical Devices & Healthcare", href: "/sectors/medical-devices" },
  { label: "Industrial Machinery", href: "/sectors/industrial-machinery" },
];

const BY_TOPIC = [
  "Sourcing Guides",
  "Case Studies",
  "Data Reports",
  "Policy & Compliance",
  "China-Africa Corridor",
  "Technology Transfer",
];

const AUTHORS = [
  {
    name: "Alessandro Petrini",
    role: "Founder & Director",
    bio: "Board Member, China-Italy Chamber of Commerce (CICC). In China since 2018.",
  },
  {
    name: "Tracy Huang",
    role: "Operations & Sourcing Manager",
    bio: "10+ years in international trade, based in Shenzhen.",
  },
  {
    name: "Dr. Feven Birara Tesfaye",
    role: "Deputy Director",
    bio: "Focus on Africa and Gulf markets.",
  },
  {
    name: "Daniele Pinti",
    role: "European Business Development Partner",
    bio: "Based in Italy. CEO Evojob Healthcare Srl.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Move East — China Sourcing Insights",
  url: "https://moveasttrading.com/blog",
  description:
    "Editorial hub for Move East Trading. In-depth articles on China sourcing, procurement, technology transfer, and China-Africa trade.",
  isPartOf: {
    "@type": "WebSite",
    name: "Move East Trading",
    url: "https://moveasttrading.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Move East Trading Co., Ltd.",
    logo: {
      "@type": "ImageObject",
      url: "https://moveasttrading.com/logo.png",
    },
  },
};

export default function BlogHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <PageHero
        eyebrow="Insights · From the ground in Shenzhen"
        title="Insights on China procurement, technology transfer, and the China-Africa corridor."
        subtitle="Written by the Move East team in Shenzhen. For buyers, governments, and EPC contractors building with China. Every article is written by people on the ground, not by external marketers. New piece every two weeks. No fluff, no paywalls."
      />

      {/* Featured */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="label mb-4">Featured article</p>
          <Link
            href={FEATURED.slug}
            className="group block bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 lg:p-12 hover:border-[var(--brand)]/30 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-[0.75rem] uppercase tracking-wider font-medium text-[var(--text-secondary)]">
                  <span className="text-[var(--brand)]">{FEATURED.kicker}</span>
                </div>
                <h2 className="mt-5 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
                  {FEATURED.title}
                </h2>
                <p className="mt-5 text-[0.9375rem] lg:text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  {FEATURED.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-[0.8125rem] text-[var(--text-secondary)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {FEATURED.readTime}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex items-end justify-end">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.875rem] font-semibold bg-[var(--text)] text-[var(--bg)] rounded-full group-hover:opacity-90 transition-opacity">
                  Read the guide
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Browse by category */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="label mb-4">By sector</p>
              <h3 className="font-[family-name:var(--font-heading)] text-[1.25rem] font-semibold text-[var(--text)] mb-5">
                Four verticals, deep coverage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BY_SECTOR.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="group flex items-center justify-between bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 hover:border-[var(--brand)]/30 transition-all"
                  >
                    <span className="text-[0.9375rem] font-medium text-[var(--text)]">
                      {s.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="label mb-4">By topic</p>
              <h3 className="font-[family-name:var(--font-heading)] text-[1.25rem] font-semibold text-[var(--text)] mb-5">
                Guides, cases, data, policy
              </h3>
              <div className="flex flex-wrap gap-2">
                {BY_TOPIC.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-4 py-2 text-[0.8125rem] font-medium text-[var(--text-secondary)] bg-[var(--surface)] border border-[var(--border)] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">Latest articles</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)] max-w-3xl mb-12">
            What we&apos;ve been writing from Shenzhen.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={a.slug}
                className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--brand)]/30 transition-all"
              >
                <div className="flex items-center gap-2 text-[0.75rem] uppercase tracking-wider font-medium text-[var(--text-secondary)]">
                  <FileText className="w-3.5 h-3.5 text-[var(--brand)]" />
                  <span>{a.kind}</span>
                  <span>·</span>
                  <span>{a.words}</span>
                </div>
                <h3
                  className="mt-4 font-[family-name:var(--font-heading)] text-[1.125rem] lg:text-[1.25rem] font-semibold leading-[1.25] tracking-tight text-[var(--text)] group-hover:text-[var(--brand)] transition-colors"
                  dangerouslySetInnerHTML={{ __html: a.title }}
                />
                <p
                  className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: a.excerpt }}
                />
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[0.75rem] text-[var(--text-secondary)]">
                    {a.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="label mb-4">Editorial team</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,2.8vw,2rem)] font-semibold leading-tight text-[var(--text)] max-w-3xl mb-4">
            Written by the people on the ground.
          </h2>
          <p className="text-[0.9375rem] lg:text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
            The Move East editorial team operates from the Shenzhen headquarters. Every article is fact-checked against the firm&apos;s operational record. Where external data is cited, the source is linked.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AUTHORS.map((a) => (
              <div
                key={a.name}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-[1.0625rem] font-semibold text-[var(--text)]">
                  {a.name}
                </h3>
                <p className="mt-1 text-[0.8125rem] text-[var(--brand)] font-medium">
                  {a.role}
                </p>
                <p className="mt-3 text-[0.875rem] text-[var(--text-secondary)] leading-relaxed">
                  {a.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        eyebrow="Newsletter"
        title="Monthly insights on China sourcing — from the Shenzhen office."
        description="Once a month, the Move East team publishes a short, high-signal briefing: the procurement trend of the month, a practical compliance update, and one verified data point that matters for buyers. No promotions, no sponsored content, no list rentals."
        primaryLabel="Talk to the team"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}
