import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452H16.893V14.883c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.666H9.351V9h3.413v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433c-1.144 0-2.066-.928-2.066-2.072 0-1.143.923-2.07 2.066-2.07 1.14 0 2.066.927 2.066 2.07 0 1.144-.926 2.072-2.066 2.072zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.272V1.727C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { PageHero } from "@/components/ui/PageHero";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Move East Trading | China Sourcing Agent in Shenzhen",
  description:
    "Contact Move East Trading, a China sourcing agent with offices in Shenzhen, Hong Kong, Rome, and Addis Ababa. Direct consultation for procurement, technology transfer, and supply chain projects.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Move East Trading | China Sourcing Agent",
    description:
      "Talk to the team in Shenzhen. Four offices, three continents. Response in 24 to 48 working hours.",
    url: "https://moveasttrading.com/contact",
    type: "website",
  },
};

const OFFICES = [
  {
    city: "Shenzhen",
    role: "Headquarters",
    region: "Guangdong Province, PRC",
    focus: "Sourcing, supplier qualification, factory audits, operations.",
  },
  {
    city: "Hong Kong",
    role: "Finance & Compliance",
    region: "Hong Kong SAR",
    focus: "Trade finance, documentation, export compliance.",
  },
  {
    city: "Rome",
    role: "European Desk",
    region: "Lazio, Italy",
    focus: "European business development and client relations.",
    phone: "+39 06 4200 1212",
  },
  {
    city: "Addis Ababa",
    role: "African Corridor",
    region: "Federal Democratic Republic of Ethiopia",
    focus: "African corridor operations, infrastructure and public-sector clients.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "How fast do you respond?",
    answer:
      "Every inquiry is acknowledged within 24 to 48 working hours by a member of the Move East team. Time-sensitive requests can be escalated by writing directly to info@moveasttrading.com with the subject line 'Urgent'.",
  },
  {
    question: "Do you serve companies outside Europe and Africa?",
    answer:
      "Yes. Move East works primarily with clients in the European Union and across Africa — where the China-Africa corridor is a strategic focus — but also with buyers in the Gulf, North America, and Asia-Pacific. The decisive factor is the fit of the project to the four sectors we cover: railway and mobility, renewable energy, medical devices, and industrial machinery.",
  },
  {
    question: "What is the minimum project size?",
    answer:
      "Move East is not structured for spot orders or one-off retail purchases. The engagement model is built around structured procurement programmes, infrastructure projects, and recurring industrial supply. As a practical threshold, most engagements start at approximately $50,000 of contract value, though strategic projects at smaller scale are evaluated case by case.",
  },
  {
    question: "Do you charge for initial consultations?",
    answer:
      "No. The first discovery call is free of charge. Move East invests time upfront to understand the scope before proposing a commercial structure. Fees are defined in writing once a mandate is agreed.",
  },
  {
    question: "What languages does the team speak?",
    answer:
      "The Move East team works fluently in English, Italian, Mandarin Chinese, and Amharic. Technical documentation is handled in English by default. Chinese-language negotiations with suppliers are managed directly from the Shenzhen office.",
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Move East Trading",
  url: "https://moveasttrading.com/contact",
  description:
    "Contact page for Move East Trading Co., Ltd. — a procurement and trading company based in Shenzhen, China, with offices in Hong Kong, Rome, and Addis Ababa.",
  mainEntity: {
    "@type": "Organization",
    name: "Move East Trading Co., Ltd.",
    url: "https://moveasttrading.com",
    email: "info@moveasttrading.com",
    telephone: "+39 06 4200 1212",
    founder: { "@type": "Person", name: "Alessandro Petrini" },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Shenzhen",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
      { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
      {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Lazio",
        addressCountry: "IT",
      },
      { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/alessandropetrini",
      "https://www.instagram.com/petrini.alex",
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHero
        eyebrow="Contact · Shenzhen · Hong Kong · Rome · Addis Ababa"
        title="Talk to the team in Shenzhen."
        subtitle="Move East Trading is a China-based procurement company. We work with governments, EPC contractors, industrial buyers, and distributors who need a reliable counterpart on the ground. Every message is read by a member of the team, not by a chatbot. Response time: 24 to 48 working hours."
      />

      {/* Form + Direct channels */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-8">
              <p className="label mb-4">Send a brief</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)] mb-8">
                Tell us about the project. We route it to the right desk.
              </h2>
              <ContactForm />
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div>
                <p className="label mb-4">Direct channels</p>
                <h3 className="font-[family-name:var(--font-heading)] text-[1.25rem] font-semibold text-[var(--text)]">
                  Prefer to skip the form?
                </h3>
                <p className="mt-3 text-[0.875rem] text-[var(--text-secondary)] leading-relaxed">
                  Use the channel that best matches your request.
                </p>
              </div>

              <div className="space-y-3">
                <DirectChannel
                  icon={Mail}
                  label="General inquiries"
                  value="info@moveasttrading.com"
                  href="mailto:info@moveasttrading.com"
                />
                <DirectChannel
                  icon={Phone}
                  label="Phone · EU line"
                  value="+39 06 4200 1212"
                  href="tel:+390642001212"
                />
                <DirectChannel
                  icon={LinkedinIcon}
                  label="Founder, direct"
                  value="Alessandro Petrini"
                  href="https://www.linkedin.com/in/alessandropetrini"
                  external
                />
                <DirectChannel
                  icon={Mail}
                  label="Press & media"
                  value="Subject: Media"
                  href="mailto:info@moveasttrading.com?subject=Media"
                />
                <DirectChannel
                  icon={Mail}
                  label="Partnerships"
                  value="Subject: Partnership"
                  href="mailto:info@moveasttrading.com?subject=Partnership"
                />
              </div>

              <div className="border-t border-[var(--border)] pt-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--brand)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[0.8125rem] font-semibold text-[var(--text)]">
                      Response time
                    </p>
                    <p className="mt-1 text-[0.8125rem] text-[var(--text-secondary)] leading-relaxed">
                      Every message is read by a team member within 24 to 48 working hours.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">Offices</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)] max-w-3xl">
            Four offices. Three continents. One operation.
          </h2>
          <p className="mt-5 text-[1rem] text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Each office has a defined operational role in the China-to-global procurement chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {OFFICES.map((o) => (
              <div
                key={o.city}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-[0.75rem] uppercase tracking-wider font-medium text-[var(--text-secondary)]">
                    {o.role}
                  </span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-[1.5rem] font-semibold text-[var(--text)]">
                  {o.city}
                </h3>
                <p className="mt-1 text-[0.8125rem] text-[var(--text-secondary)]">
                  {o.region}
                </p>
                <p className="mt-4 text-[0.875rem] text-[var(--text-secondary)] leading-relaxed">
                  {o.focus}
                </p>
                <div className="mt-auto pt-5 space-y-1.5">
                  <a
                    href="mailto:info@moveasttrading.com"
                    className="flex items-center gap-2 text-[0.8125rem] text-[var(--text)] hover:text-[var(--brand)] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    info@moveasttrading.com
                  </a>
                  {o.phone && (
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-[0.8125rem] text-[var(--text)] hover:text-[var(--brand)] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {o.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="label mb-4">What to expect</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)] max-w-3xl">
            After you write. The four steps.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                n: "1",
                t: "Acknowledgement",
                d: "A real team member confirms receipt within 24–48 working hours and sets a next step.",
              },
              {
                n: "2",
                t: "Discovery call",
                d: "A 30-minute video call with a senior team member — usually Alessandro Petrini or Tracy Huang — to scope the request.",
              },
              {
                n: "3",
                t: "Written brief",
                d: "If there is a fit, Move East delivers a scoping brief with a supplier shortlist, timeline, and commercial structure.",
              },
              {
                n: "4",
                t: "Engagement",
                d: "Move East moves into procurement mode only once scope and terms are signed. Initial discovery calls are not billed.",
              },
            ].map((step) => (
              <div key={step.n}>
                <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold">
                  {step.n}
                </div>
                <h3 className="mt-5 text-[1.0625rem] font-semibold text-[var(--text)]">
                  {step.t}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FAQS} />

      {/* Related links */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="label mb-4">Related</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-[var(--text)]">
            Keep exploring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {[
              { label: "About Move East", href: "/about" },
              {
                label: "Ethiopia-Djibouti Railway",
                href: "/case-studies/ethiopia-railway",
              },
              { label: "Services", href: "/services" },
              { label: "Sectors", href: "/sectors" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 hover:border-[var(--brand)]/30 transition-all"
              >
                <span className="text-[0.9375rem] font-medium text-[var(--text)]">
                  {l.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DirectChannel({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...props}
      className="flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-[var(--bg-alt)] transition-colors group"
    >
      <div className="w-8 h-8 rounded-lg bg-[var(--bg-alt)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand)]/10 transition-colors">
        <Icon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
      </div>
      <div>
        <p className="text-[0.75rem] text-[var(--text-secondary)]">{label}</p>
        <p className="text-[0.875rem] font-medium text-[var(--text)]">{value}</p>
      </div>
    </a>
  );
}
