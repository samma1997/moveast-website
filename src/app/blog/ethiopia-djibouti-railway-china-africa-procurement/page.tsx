import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Inside the $4 Billion Ethiopia-Djibouti Railway: How China-Africa Procurement Really Works | Move East Trading",
  description:
    "A narrative look at Africa's first cross-border electric railway — the scale, the supply chain, the procurement challenge, and seven operational lessons that apply to every China-Africa infrastructure project.",
  alternates: { canonical: "https://moveasttrading.com/blog/ethiopia-djibouti-railway-china-africa-procurement" },
  openGraph: {
    title: "Inside the $4 Billion Ethiopia-Djibouti Railway: How China-Africa Procurement Really Works",
    description:
      "Africa's first cross-border electric railway — the scale, the supply chain, and the procurement lessons. Written from inside the operation.",
    url: "https://moveasttrading.com/blog/ethiopia-djibouti-railway-china-africa-procurement",
    type: "article",
    locale: "en_US",
    siteName: "Move East Trading",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Inside the $4 Billion Ethiopia-Djibouti Railway: How China-Africa Procurement Really Works",
  description:
    "A narrative look at Africa's first cross-border electric railway — the scale, the supply chain, and the procurement lessons that apply to every China-Africa infrastructure project.",
  datePublished: "2026-04-18",
  dateModified: "2026-04-19",
  author: {
    "@type": "Person",
    name: "Alessandro Petrini",
    jobTitle: "Founder & Director, Move East Trading · Board Member, CICC",
  },
  publisher: {
    "@type": "Organization",
    name: "Move East Trading Co., Ltd.",
    url: "https://moveasttrading.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://moveasttrading.com/blog/ethiopia-djibouti-railway-china-africa-procurement",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When did the Ethiopia-Djibouti Railway become operational?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The EDR entered full commercial operation in 2018, following a handover period from the Chinese construction consortium to the Ethiopia-Djibouti Railway Share Company.",
      },
    },
    {
      "@type": "Question",
      name: "Is the EDR really the first cross-border electric railway in Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Ethiopia-Djibouti Railway is widely reported as the first cross-border fully electrified standard-gauge railway in Africa.",
      },
    },
    {
      "@type": "Question",
      name: "What was Move East's role in the Ethiopia-Djibouti Railway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Move East Trading was appointed official outsourcing agent in China for the EDR. The mandate covers supplier selection and qualification, factory audits, quality control, export logistics from Chinese ports, documentation and compliance, and spare-parts pipeline management for the operational phase.",
      },
    },
    {
      "@type": "Question",
      name: "How large is China-Africa trade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total China-Africa bilateral trade has exceeded $280 billion in recent years according to Chinese customs data. The trade relationship continues to grow, with a structural imbalance between African raw-material exports and Chinese manufactured imports.",
      },
    },
  ],
};

export default function EDRRailwayArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Back link */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.875rem] text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
          >
            <ArrowUpRight className="w-3.5 h-3.5 rotate-[225deg]" />
            Back to blog
          </Link>
        </div>
      </section>

      {/* Article hero */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-[0.75rem] uppercase tracking-wider font-medium text-[var(--text-secondary)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                <span>Case study · Infrastructure · Belt &amp; Road · Updated April 2026</span>
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
                Inside the $4 Billion Ethiopia-Djibouti Railway: How China-Africa procurement really works.
              </h1>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 flex items-center justify-center text-[0.75rem] font-bold text-[var(--brand)]">
                  AP
                </div>
                <div>
                  <p className="text-[0.875rem] font-semibold text-[var(--text)]">Alessandro Petrini</p>
                  <p className="text-[0.8125rem] text-[var(--text-secondary)]">Founder &amp; Director · Move East Trading · Board Member, CICC</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)] aspect-video flex items-center justify-center">
                <p className="text-[0.875rem] text-[var(--text-secondary)]">Ethiopia-Djibouti Railway · 756 km · electrified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* TOC sidebar */}
            <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-[0.75rem] uppercase tracking-[0.1em] font-semibold text-[var(--text-secondary)] mb-4">
                In this article
              </h2>
              <nav>
                <ol className="space-y-2">
                  {[
                    { num: "01", label: "The scale of what was built", id: "scale" },
                    { num: "02", label: "The Belt & Road context", id: "context" },
                    { num: "03", label: "EDR in numbers", id: "numbers" },
                    { num: "04", label: "The procurement challenge", id: "challenge" },
                    { num: "05", label: "How Move East became the agent", id: "role" },
                    { num: "06", label: "Seven operational pillars", id: "pillars" },
                    { num: "07", label: "Three operational lessons", id: "lessons" },
                    { num: "08", label: "What the EDR unlocked", id: "unlocked" },
                    { num: "09", label: "What European companies can learn", id: "europe" },
                    { num: "10", label: "Frequently asked questions", id: "faq" },
                  ].map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-start gap-2.5 text-[0.8125rem] text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors py-1"
                      >
                        <span className="font-mono text-[var(--brand)] shrink-0">{item.num}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Article content */}
            <article className="lg:col-span-9 max-w-none">

              <p className="text-[1.125rem] lg:text-[1.25rem] text-[var(--text-secondary)] leading-relaxed font-medium mb-10 pb-10 border-b border-[var(--border)]">
                The Ethiopia-Djibouti Railway is one of the most consequential pieces of infrastructure built in Africa in the last decade. A $4 billion, 756-kilometre, fully electrified standard-gauge railway linking the Ethiopian capital to the Indian Ocean, it replaced a century-old colonial line and reset the logic of trade for a region of more than 125 million people. This article is about how a project of that scale actually gets procured — not the diplomatic version, the operational one. From the inside.
              </p>

              {/* EDR at a glance */}
              <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl p-7 mb-10">
                <h3 className="text-[1rem] font-semibold text-[var(--text)] mb-5">EDR at a glance</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Project value:", value: "approximately $4 billion" },
                    { label: "Mainline length:", value: "approximately 756 km (Addis Ababa to Djibouti)" },
                    { label: "Countries in the delivery chain:", value: "4 — China, Hong Kong, Ethiopia, Djibouti" },
                    { label: "In commercial operation since:", value: "2018" },
                    { label: "Move East role:", value: "Official outsourcing agent in China" },
                    { label: "Owner / operator:", value: "Ethiopia-Djibouti Railway Share Company" },
                  ].map((item) => (
                    <li key={item.label} className="text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                      <strong className="text-[var(--text)]">{item.label}</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 id="scale" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                The scale of what was built
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Drive out of Addis Ababa heading east and, for hundreds of kilometres, the landscape stretches into highland plateau, then volcanic desert, then salt flats descending toward the Gulf of Aden. Before 2018, the only way to move freight from Ethiopia&apos;s capital to the Port of Djibouti was a road corridor — congested, costly, and slow. A trip that now takes hours by train took days by truck.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">The Ethiopia-Djibouti Railway changed that.</p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Mainline length of approximately 756 km. Standard gauge. Fully electrified at 25 kV AC, ready for modern rolling stock. Commercial operation since 2018 under the Ethiopia-Djibouti Railway Share Company, a joint entity of the two national governments. Total project value widely reported at around $4 billion.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                It is, by any reasonable definition, a strategic asset. For Ethiopia, a landlocked nation of over 120 million people, it is the backbone of foreign trade. For Djibouti, it anchors the role of the country&apos;s port as a regional gateway. For the wider China-Africa relationship, it is one of the most visible Belt &amp; Road projects in Africa.
              </p>

              <h2 id="context" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                The Belt &amp; Road context
              </h2>
              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">Why China is building infrastructure in Africa at all</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The <strong className="text-[var(--text)]">Belt and Road Initiative (BRI)</strong>, launched by China in 2013, is a state-led programme to finance and build infrastructure across Eurasia, Africa, and Latin America. Ports, railways, highways, power generation, digital connectivity — all fall under its scope. Financing flows primarily through Chinese policy banks, including the Export-Import Bank of China and the China Development Bank, often in the form of long-tenor loans to host governments.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                For a non-specialist audience, the BRI is easy to caricature. In operational reality, it is a very specific commercial logic: Chinese industrial overcapacity in steel, rail, power, and construction equipment meets infrastructure demand in fast-growing economies. The financing, contracting, and procurement are bundled together.
              </p>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">Trade volumes behind the headlines</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                China is now Africa&apos;s largest single trading partner. Total China-Africa bilateral trade has crossed the{" "}
                <a href="https://www.reuters.com/world/china/china-africa-trade-hits-record-high-2023-customs-data-shows-2024-01-12/" rel="noopener" target="_blank" className="text-[var(--brand)] hover:underline">
                  $280 billion mark in recent years
                </a>{" "}
                according to Chinese customs data reported by Reuters, and the corridor continues to grow.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Behind that aggregate number, the structure is uneven. African exports to China are heavily weighted toward raw materials — oil, copper, iron ore, agricultural commodities. Chinese exports to Africa are weighted toward manufactured goods, machinery, electronics, and increasingly turn-key infrastructure systems. Railways like the EDR sit exactly in the middle of that trade asymmetry.
              </p>

              <h2 id="numbers" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Project overview — the EDR in numbers
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">A compact snapshot of the project.</p>
              <ul className="space-y-3 mb-6">
                {[
                  { label: "Project value:", value: "approximately $4 billion" },
                  { label: "Mainline length:", value: "approximately 756 km" },
                  { label: "Terminals:", value: "Sebeta (near Addis Ababa) to Nagad (near Djibouti)" },
                  { label: "Gauge:", value: "standard (1,435 mm), interoperable with modern Chinese and international rolling stock" },
                  { label: "Electrification:", value: "25 kV AC" },
                  { label: "Operational since:", value: "2018 (commercial operation)" },
                  { label: "Predecessor:", value: "a French-built metre-gauge, diesel-powered colonial railway dating back to the early 20th century, effectively non-operational by the 2000s" },
                  { label: "Construction consortium:", value: "Chinese state-owned contractors, principally the China Railway Group (CREC) and the China Civil Engineering Construction Corporation (CCECC)" },
                  { label: "Operator:", value: "Ethiopia-Djibouti Railway Share Company, jointly owned by the two governments" },
                ].map((item) => (
                  <li key={item.label} className="pl-5 relative text-[var(--text-secondary)] leading-relaxed">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                    <strong className="text-[var(--text)]">{item.label}</strong> {item.value}
                  </li>
                ))}
              </ul>

              <h2 id="challenge" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                The procurement challenge (what nobody talks about)
              </h2>
              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">Not one supply chain — four</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Infrastructure coverage tends to focus on the ribbon-cutting. The hard problem sits earlier, in the supply chain, and it is almost invisible from outside.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The EDR&apos;s supply chain crosses at least four jurisdictions: China (where the equipment is manufactured), Hong Kong (where a large part of the trade-finance and documentation is structured), Djibouti (the port of entry and a sovereign jurisdiction of its own), and Ethiopia (the destination, with its own customs regime, certification requirements, and operational standards).
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A single missing document, a mismatched HS code, a certificate of origin issued by the wrong chamber — any of these can stop a container for weeks.
              </p>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">Technical interdependence</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A railway is a system. Rolling stock, catenary, signalling, and track hardware have to be interoperable over a design life measured in decades. A traction motor from one manufacturer, a signalling relay from another, and a pantograph from a third must behave as a single engineered unit. Getting that right on the initial procurement is hard. Keeping it right across twenty years of spare-parts resupply is harder.
              </p>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">Currency, compliance, and continuity</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Financing instruments denominated in one currency meet supplier invoices in another meet government budget cycles in a third. Payment terms that work for Chinese suppliers have to reconcile with Hong Kong trade-finance instruments and African development-bank disbursement schedules. There is no marketplace automation for that. It is done by people, in rooms, with contracts.
              </p>

              <figure className="my-10">
                <div className="rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)] aspect-video flex items-center justify-center">
                  <span className="text-[0.875rem] text-[var(--text-secondary)]">Ethiopia-Djibouti Railway — electrified mainline, operational since 2018</span>
                </div>
                <figcaption className="mt-3 text-[0.8125rem] text-[var(--text-secondary)] text-center">
                  Ethiopia-Djibouti Railway — electrified mainline, operational since 2018
                </figcaption>
              </figure>

              <h2 id="role" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                How Move East became the China-side agent
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                In 2021, Move East Trading was appointed as the <strong className="text-[var(--text)]">official outsourcing agent in China for the Ethiopia-Djibouti Railway</strong>. The appointment followed the operational track record Move East had built since 2018 in Guangdong-centred industrial sourcing and in the emerging China-Africa corridor.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">The role is structural, not transactional. It covers:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Qualifying Chinese manufacturers across rolling-stock, signalling, electrical, and track-hardware categories.",
                  "Running factory audits at source — in Guangdong, Hebei, Jiangsu, and other manufacturing hubs.",
                  "Coordinating export logistics from Chinese ports through Hong Kong to Djibouti.",
                  "Managing documentation and compliance for both the Djiboutian and Ethiopian import regimes.",
                  "Maintaining the spare-parts pipeline for the operational phase.",
                ].map((item, i) => (
                  <li key={i} className="pl-5 relative text-[var(--text-secondary)] leading-relaxed">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                To support the demand side of the corridor, Move East opened its <strong className="text-[var(--text)]">Addis Ababa office</strong>, becoming one of the few procurement companies with simultaneous operational presence in Shenzhen and in an African capital.
              </p>

              <h2 id="pillars" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Seven operational pillars of delivery
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Move East structured the engagement as a repeatable operating model rather than a project-by-project effort. Seven operational pillars define the delivery.
              </p>

              <div className="space-y-6">
                {[
                  {
                    n: "1", title: "On-ground supplier qualification in China",
                    body: "Move East's Shenzhen office runs a continuous supplier-qualification programme across Chinese manufacturing hubs — Guangdong for electronics and signalling, Hebei and Jiangsu for rolling-stock components, Zhejiang for electrical systems. Shortlists are built from on-site visits, not from online catalogues.",
                  },
                  {
                    n: "2", title: "Factory audits before every critical order",
                    body: "For components that enter the railway's service-critical path, Move East conducts documented factory audits before purchase orders are issued. Audits cover process capability, ISO certification, traceability, and corrective-action history.",
                  },
                  {
                    n: "3", title: "Technical specification alignment",
                    body: "Chinese manufacturing standards, Ethiopian operating conditions, and international interoperability requirements are reconciled through a specification-alignment workflow handled jointly by the Shenzhen and Addis Ababa teams.",
                  },
                  {
                    n: "4", title: "Consolidated logistics through Hong Kong",
                    body: "Hong Kong serves as the trade-finance and documentation hub. Shipments are consolidated at Shenzhen and Shekou ports, cleared through Hong Kong instruments, and routed to Djibouti via established container services.",
                  },
                  {
                    n: "5", title: "Document-and-compliance control",
                    body: "Every shipment is dispatched with a full documentation pack — certificates of origin, test reports, customs declarations, and project-specific compliance attestations — pre-validated against the import regimes of Djibouti and Ethiopia.",
                  },
                  {
                    n: "6", title: "Spare-parts pipeline",
                    body: "For the operational phase, Move East maintains a forward-position inventory of high-rotation spare parts and a qualified-supplier roster for long-lead items. This keeps the line running.",
                  },
                  {
                    n: "7", title: "Addis Ababa presence",
                    body: "Move East opened its Addis Ababa office to guarantee a physical, legally present counterpart on the demand side of the corridor. On-ground presence on both ends is the difference between a sourcing agent and an infrastructure partner.",
                  },
                ].map((pillar) => (
                  <div key={pillar.n} className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-[0.8125rem] font-semibold shrink-0">
                      {pillar.n}
                    </div>
                    <div>
                      <h3 className="text-[1.0625rem] font-semibold text-[var(--text)] mb-2">{pillar.title}</h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{pillar.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="lessons" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Three operational lessons
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Three lessons from the EDR engagement are portable to every China-Africa infrastructure programme.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mb-4">1. On-ground presence on both ends of the corridor is not optional</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    The single biggest operational gain came from having a team physically present both in Shenzhen — where the factories are — and in Addis Ababa — where the operator, the government, and the regulatory interlocutors sit.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    A concrete example. Early in the operational phase, a batch of signalling components was held at the port for a technical classification issue. The Addis Ababa team resolved it in direct conversation with the Ethiopian authority within 48 hours; the Shenzhen team issued the corrective export documents in parallel. Remote coordination alone would have added days.
                  </p>
                </div>

                <div>
                  <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mb-4">2. Hong Kong is the invisible pivot</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    Trade finance, documentation, insurance, and export compliance for the EDR&apos;s China-side supply chain are anchored in Hong Kong. That is not an accident — Hong Kong&apos;s legal framework, banking infrastructure, and logistics coverage make it the default pivot for large Chinese-manufactured exports to Africa.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    A concrete example. Consolidated shipments from Shenzhen and Shekou ports are cleared through Hong Kong instruments before routing to Djibouti, which simplifies letter-of-credit handling and reduces demurrage risk at the destination port.
                  </p>
                </div>

                <div>
                  <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mb-4">3. The real contract is the spare-parts pipeline</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    On a project of this size, the headline deliverable is the line itself. The real long-term contract is the continuous supply of spare parts, upgrades, and technical interventions for the operational phase. A railway that cannot get spare relays or traction motors in time stops running.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    A concrete example. Move East maintains a forward-position inventory of high-rotation spare parts together with a qualified-supplier roster for long-lead items. Average resupply lead times have been compressed to a window that allows the operator to plan maintenance windows instead of reacting to failures.
                  </p>
                </div>
              </div>

              <blockquote className="my-10 pl-6 border-l-4 border-[var(--brand)]">
                <p className="text-[1.0625rem] italic text-[var(--text)] leading-relaxed mb-2">
                  On a project of this size, the headline deliverable is the line itself. The real long-term contract is the continuous supply of spare parts, upgrades, and technical interventions for the operational phase.
                </p>
                <cite className="text-[0.875rem] text-[var(--text-secondary)] not-italic">— Move East operations note</cite>
              </blockquote>

              <h2 id="unlocked" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                What the EDR unlocked for China-Africa trade
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">The EDR is a single railway, but its operational and commercial impact ripples outward.</p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                For Ethiopia, it converts landlocked geography into usable economic frontage on the Indian Ocean. For Djibouti, it consolidates the Port of Djibouti&apos;s role as a regional gateway — not only for Ethiopia but for the wider Horn of Africa. For Chinese manufacturers, it built a reference case of a fully Chinese-engineered, electrified railway operating in commercial service outside China.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                For Move East, the EDR engagement became the anchor that now drives conversations with African governments, development agencies, and EPC contractors on railway, energy, and industrial projects across the corridor.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                In 2024, Move East completed its registration as a <strong className="text-[var(--text)]">UNGM Registered Vendor</strong> (United Nations Global Marketplace), formalising the company&apos;s eligibility for UN-system procurement. In the same period, founder Alessandro Petrini joined the Board of the <strong className="text-[var(--text)]">China-Italy Chamber of Commerce (CICC)</strong>, the only chamber officially recognised by both the Chinese and Italian governments.
              </p>

              <h2 id="europe" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                What European companies can learn
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                European companies selling into African infrastructure frequently underestimate one thing: the procurement architecture on most African infrastructure projects is already integrated with Chinese supply chains. Financing comes through Chinese banks or African development institutions. Lead contractors are often Chinese. Specifications are written around Chinese-compliant components.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">Ignoring that structure is expensive.</p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">Three operational lessons translate for European exporters aiming at African infrastructure.</p>
              <div className="space-y-5 mb-6">
                {[
                  { title: "Compatibility beats replacement.", body: "Offering a European-only alternative to a spec that is already Chinese-compatible adds friction. Offering a component that is interoperable with Chinese systems and certified to the required international standards is a much shorter sale." },
                  { title: "China-side presence is a commercial asset.", body: "A European supplier with a registered Chinese counterpart — whether through a joint venture, a local office, or a structured sourcing partner — is operationally nearer to the project even when the destination is Africa." },
                  { title: "Documentation is the product.", body: "On African infrastructure projects, the quality of export documentation, compliance certificates, and traceability is often the decisive factor at the destination port." },
                ].map((lesson) => (
                  <div key={lesson.title} className="pl-5 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      <strong className="text-[var(--text)]">{lesson.title}</strong> {lesson.body}
                    </p>
                  </div>
                ))}
              </div>

              <h2 id="faq" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Frequently asked questions
              </h2>

              <div className="space-y-8">
                {[
                  {
                    q: "When did the Ethiopia-Djibouti Railway become operational?",
                    a: "The EDR entered full commercial operation in 2018, following a handover period from the Chinese construction consortium to the Ethiopia-Djibouti Railway Share Company.",
                  },
                  {
                    q: "Is the EDR really the first cross-border electric railway in Africa?",
                    a: "Yes. The Ethiopia-Djibouti Railway is widely reported as the first cross-border fully electrified standard-gauge railway in Africa, a distinction repeatedly referenced in industry, development-bank, and government sources.",
                  },
                  {
                    q: "How large is China-Africa trade?",
                    a: "Total China-Africa bilateral trade has exceeded $280 billion in recent years according to Chinese customs data. The trade relationship continues to grow, with a structural imbalance between African raw-material exports and Chinese manufactured imports.",
                  },
                  {
                    q: "What is the Belt and Road Initiative?",
                    a: "The Belt and Road Initiative is China's long-term global infrastructure and trade programme launched in 2013. It covers ports, railways, highways, energy, and digital connectivity projects across Asia, Africa, Europe, and Latin America, financed primarily through Chinese policy banks.",
                  },
                  {
                    q: "What was Move East's role in the Ethiopia-Djibouti Railway?",
                    a: "Move East Trading was appointed official outsourcing agent in China for the EDR. The mandate covers supplier selection and qualification, factory audits, quality control, export logistics from Chinese ports, documentation and compliance, and spare-parts pipeline management for the operational phase.",
                  },
                  {
                    q: "Why does the EDR matter for European exporters?",
                    a: "The EDR opens a reliable, high-capacity trade corridor between the Port of Djibouti and landlocked Ethiopia. For European exporters selling into East Africa, it reduces transit times, logistics costs, and supply-chain uncertainty versus road-only alternatives — and it sets a precedent for how large-scale infrastructure is procured across the China-Africa corridor.",
                  },
                  {
                    q: "Can this procurement model be applied to other infrastructure projects?",
                    a: "Yes. The EDR established a repeatable operating model for cross-border infrastructure procurement between China and Africa — supplier qualification in China, audits at source, consolidated logistics through Hong Kong, on-ground presence on the demand side. Move East now applies the same framework to railway, renewable energy, and industrial projects across the corridor.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-t border-[var(--border)] pt-6">
                    <h3 className="text-[1.0625rem] font-semibold text-[var(--text)] mb-3">{item.q}</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-[var(--border)]">
                <h2 className="font-[family-name:var(--font-heading)] text-[1.5rem] font-semibold text-[var(--text)] mb-4">
                  Byline &amp; next steps
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                  <em>Alessandro Petrini is Founder &amp; Director of Move East Trading Co., Ltd., a procurement and trading company based in Shenzhen, China. He is a Board Member of the China-Italy Chamber of Commerce (CICC) and has been based in China since 2018. Move East is a UNGM Registered Vendor and the official outsourcing agent in China for the Ethiopia-Djibouti Railway.</em>
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  If your organisation is evaluating procurement in China for an African infrastructure, energy, or industrial project, write to <strong className="text-[var(--text)]">info@moveasttrading.com</strong> or request a discovery call. Initial scoping conversations are not billed.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[0.875rem] font-semibold bg-[var(--text)] text-[var(--bg)] rounded-full hover:opacity-90 transition-opacity"
                >
                  Book a discovery call
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </article>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label mb-4">Continue reading</p>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-[var(--text)]">
                Further reading.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-[var(--text)] hover:text-[var(--brand)] transition-colors"
            >
              All articles
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: "Pillar guide · Sourcing",
                title: "How to Choose a China Sourcing Agent: The Complete Guide for 2026",
                meta: "Updated Apr 2026 · 12 min read",
                href: "/blog/how-to-choose-china-sourcing-agent",
              },
              {
                tag: "Sector · Railway & Mobility",
                title: "Railway & Mobility Procurement from China",
                meta: "Sector guide · Move East",
                href: "/sectors/mobility",
              },
              {
                tag: "Service · Strategic Sourcing",
                title: "Strategic Sourcing from China: supplier qualification, audits, contracts",
                meta: "Service guide · Move East",
                href: "/services/sourcing",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--brand)]/30 transition-all"
              >
                <span className="text-[0.75rem] uppercase tracking-wider font-medium text-[var(--brand)] mb-3">
                  {card.tag}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-[1rem] font-semibold text-[var(--text)] leading-snug group-hover:text-[var(--brand)] transition-colors">
                  {card.title}
                </h3>
                <div className="mt-auto pt-5 flex items-center justify-between">
                  <span className="text-[0.8125rem] text-[var(--text-secondary)]">{card.meta}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
