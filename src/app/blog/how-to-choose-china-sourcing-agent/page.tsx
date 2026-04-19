import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose a China Sourcing Agent: The Complete Guide for 2026 | Move East Trading",
  description:
    "The definitive guide for European and African buyers choosing a China sourcing agent. Seven criteria, red flags, fee structures, and a self-assessment checklist. Written from inside the market.",
  alternates: { canonical: "https://moveasttrading.com/blog/how-to-choose-china-sourcing-agent" },
  openGraph: {
    title: "How to Choose a China Sourcing Agent: The Complete Guide for 2026",
    description:
      "Seven criteria that separate a professional sourcing agent from a commission broker. Red flags, fee structures, timeline, and a practical self-assessment checklist.",
    url: "https://moveasttrading.com/blog/how-to-choose-china-sourcing-agent",
    type: "article",
    locale: "en_US",
    siteName: "Move East Trading",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose a China Sourcing Agent: The Complete Guide for 2026",
  description:
    "The definitive guide for European and African buyers who need a reliable procurement partner in China. Covers the seven criteria, red flags, fee structures, and a practical self-assessment checklist.",
  datePublished: "2026-04-01",
  dateModified: "2026-04-19",
  author: {
    "@type": "Person",
    name: "Alessandro Petrini",
    jobTitle: "Founder & Director, Move East Trading",
  },
  publisher: {
    "@type": "Organization",
    name: "Move East Trading Co., Ltd.",
    url: "https://moveasttrading.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://moveasttrading.com/blog/how-to-choose-china-sourcing-agent",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a China sourcing agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A China sourcing agent is a company or individual based in China that represents a foreign buyer in local procurement — identifying suppliers, negotiating terms, running factory audits, coordinating logistics, and managing compliance. The agent is paid by the buyer and works for the buyer's interest.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a China sourcing agent and a trading company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sourcing agent acts on behalf of the buyer and is paid a fee or commission disclosed upfront. A trading company buys from Chinese manufacturers and resells under its own terms, taking margin on the product. The sourcing agent's incentive is aligned with buyer outcomes; the trading company's incentive is to maximise spread.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a China sourcing agent cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fee structures typically fall in three bands: commission on purchase value (commonly 3% to 10%), flat retainers for ongoing programmes, and project-based fees for one-off sourcing. Sector complexity, compliance scope, and procurement volume drive the final number.",
      },
    },
    {
      "@type": "Question",
      name: "What credentials should I look for in a China sourcing agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a registered Chinese legal entity, membership in recognised bilateral chambers of commerce (such as the China-Italy Chamber of Commerce), UNGM registration for UN-system procurement eligibility, sector-specific industry memberships, and documented references in your sector. Every claim should be independently verifiable.",
      },
    },
    {
      "@type": "Question",
      name: "Can a sourcing agent handle EU compliance and CE marking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professional sourcing agent can coordinate testing, documentation, and certification with Chinese manufacturers and notified bodies. Under EU law, the legal responsibility for CE marking remains with the importer or authorised representative inside the EU. The agent executes; the importer is accountable.",
      },
    },
  ],
};

export default function ChinaSourcingAgentGuidePage() {
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[0.75rem] uppercase tracking-wider font-medium text-[var(--text-secondary)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
              <span>Pillar guide · 3,200 words · Updated April 2026</span>
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
              How to Choose a China Sourcing Agent: The Complete Guide for 2026
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 flex items-center justify-center text-[0.75rem] font-bold text-[var(--brand)]">
                AP
              </div>
              <div>
                <p className="text-[0.875rem] font-semibold text-[var(--text)]">Alessandro Petrini</p>
                <p className="text-[0.8125rem] text-[var(--text-secondary)]">Founder &amp; Director · Move East Trading · Board Member, CICC</p>
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
                    { num: "01", label: "What is a China sourcing agent?", id: "what-is" },
                    { num: "02", label: "Agent vs trading company vs direct", id: "models" },
                    { num: "03", label: "When do you need one?", id: "when" },
                    { num: "04", label: "Seven evaluation criteria", id: "criteria" },
                    { num: "05", label: "Red flags to avoid", id: "red-flags" },
                    { num: "06", label: "Typical cost structures", id: "costs" },
                    { num: "07", label: "Timeline: engagement to delivery", id: "timeline" },
                    { num: "08", label: "Case example: EDR Railway", id: "case" },
                    { num: "09", label: "Self-assessment checklist", id: "checklist" },
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
            <article className="lg:col-span-9 prose-custom max-w-none">

              <p className="text-[1.125rem] lg:text-[1.25rem] text-[var(--text-secondary)] leading-relaxed font-medium mb-10 pb-10 border-b border-[var(--border)]">
                Choosing the wrong China sourcing agent is one of the most expensive mistakes a European or African buyer can make. The decision determines supplier quality, compliance posture, delivered cost, and — in sectors like railway, medical, or energy — regulatory exposure for years. This guide covers what a China sourcing agent actually is, how the role compares to a trading company or direct supplier, the seven criteria that separate a professional partner from a commission broker, the red flags that every buyer should recognise, how fees are structured in practice, and a practical self-assessment checklist. It is written from inside the market, not from outside.
              </p>

              <h2 id="what-is" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                What is a China sourcing agent?
              </h2>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">The definition</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A <strong className="text-[var(--text)]">China sourcing agent</strong> is a company or individual based in China that acts on behalf of a foreign buyer in the local market. The agent identifies manufacturers, negotiates commercial terms, audits factories, organises sample approvals, coordinates logistics and export documentation, and manages compliance with the destination-market regulations.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The defining feature is alignment of incentives. A sourcing agent is paid by the buyer to represent the buyer. That is different from a trading company, which makes money on the margin between what it pays the factory and what it charges the foreign client.
              </p>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">Why the role exists</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                China is not one market. It is a continent-scale manufacturing ecosystem organised into specialised industrial clusters: Shenzhen for electronics and hardware, Guangdong for plastics and consumer goods, Zhejiang for textiles and industrial valves, Jiangsu for precision machinery, Hebei for railway components. A buyer sitting in Milan, Addis Ababa, or Frankfurt cannot credibly evaluate five hundred suppliers across a dozen provinces on their own.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A professional sourcing agent closes that information and trust gap.
              </p>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">What a sourcing agent is not</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A sourcing agent is not a freelance negotiator on WeChat. It is not an Alibaba gold supplier. It is not a generic trade consultant sitting in a European capital. It is a structured, locally registered, operationally present company with documented procurement processes.
              </p>

              <h2 id="models" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Sourcing agent vs trading company vs direct supplier
              </h2>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">The three models</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Three structures exist in Chinese procurement. Each has a place, but they are not interchangeable.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { term: "Direct supplier.", body: "The buyer negotiates and purchases straight from a Chinese manufacturer. Maximum control, lowest theoretical cost, highest exposure if anything goes wrong. Works only when the buyer has internal China procurement capability." },
                  { term: "Trading company.", body: "A Chinese or Hong Kong-based intermediary that buys from factories and resells under its own commercial terms. Convenient, but incentives are misaligned: the trader earns more when the factory earns less — including on quality." },
                  { term: "Sourcing agent.", body: "The buyer's representative in China. Paid by the buyer. Incentive structure aligned with buyer outcomes." },
                ].map((item) => (
                  <li key={item.term} className="pl-5 relative text-[var(--text-secondary)] leading-relaxed">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                    <strong className="text-[var(--text)]">{item.term}</strong> {item.body}
                  </li>
                ))}
              </ul>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">A note for infrastructure and compliance-heavy buyers</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                For railway, energy infrastructure, medical devices, and government procurement, the trading-company model is structurally weak. The scope of responsibility — specification alignment, factory-level audits, regulatory compliance, long-life spare-parts pipelines — is too wide for a margin-based intermediary. These categories call for a sourcing agent with sector depth, or for a fully internalised procurement function.
              </p>

              <h2 id="when" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                When do you need a China sourcing agent?
              </h2>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">The five decision triggers</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A sourcing agent typically becomes the right choice when at least two of the following are true:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  "The product involves technical specifications that cannot be checked by photos or catalogues.",
                  "The volume or contract value justifies dedicated supplier qualification.",
                  "The destination market imposes regulatory requirements (CE, MDR, FDA, UL, IEC).",
                  "The procurement is recurring, not one-off.",
                  "The buyer has no operational presence in China.",
                ].map((item, i) => (
                  <li key={i} className="pl-5 relative text-[var(--text-secondary)] leading-relaxed">
                    <span className="absolute left-0 top-0 text-[0.75rem] font-bold text-[var(--brand)]">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">The invisible cost of not having one</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The real cost of not having a sourcing agent is rarely the one that appears on the invoice. It shows up later: a container held at port for missing documents, a batch that fails incoming inspection, a certification that turns out to be issued by a non-notified body, a supplier that quietly substitutes a component after the first order.
              </p>

              <h2 id="criteria" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Seven criteria to evaluate a China sourcing agent
              </h2>

              <div className="my-8 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] aspect-video flex items-center justify-center">
                <p className="text-[0.875rem] text-[var(--text-secondary)]">Shenzhen factory audit — Move East operations team</p>
              </div>

              {[
                {
                  num: "1",
                  title: "Sector expertise",
                  body: `Ask what three sectors the agent has actually delivered in. "We can source anything" is a red flag. "We source railway components, BESS systems, and medical devices — here are three named references" is a signal of real capability.\n\nSector expertise is not marketing language. It is knowing which province manufactures which sub-component, which factory holds IEC 61373 certification for rolling stock, which BESS maker is upstream of which module brand.`,
                },
                {
                  num: "2",
                  title: "On-ground presence in China",
                  body: "A real sourcing agent has a physical office, a Chinese legal entity, a local team, and a verifiable operating footprint. Shenzhen, Shanghai, Guangzhou, and Hong Kong are the main hubs. Beyond addresses, ask how the team is structured — sourcing, quality, logistics, compliance should be distinct functions.\n\nRemote-only \"sourcing agents\" operating from Europe without a China entity cannot run on-site factory audits, cannot manage last-mile supplier issues, and have no standing to escalate with Chinese authorities when something goes wrong.",
                },
                {
                  num: "3",
                  title: "Credentials and institutional affiliations",
                  body: null,
                  custom: (
                    <div>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">Institutional affiliations are difficult to fake. The ones that matter:</p>
                      <ul className="space-y-3 mb-4">
                        {[
                          <>Membership in a bilateral chamber of commerce — for European buyers, the <a href="https://www.cameraitacina.com/" rel="noopener" target="_blank" className="text-[var(--brand)] hover:underline">China-Italy Chamber of Commerce</a> (CICC), China-Britain Business Council, EU Chamber of Commerce in China, and equivalents.</>,
                          <>Registration in the <a href="https://www.ungm.org" rel="noopener" target="_blank" className="text-[var(--brand)] hover:underline">United Nations Global Marketplace</a> (UNGM) — a prerequisite for UN-system procurement eligibility.</>,
                          "Sector-specific memberships (railway industry associations, medical device chambers, renewable energy associations).",
                          "Documented government-recognised roles — for example, being appointed official outsourcing agent for a sovereign infrastructure project.",
                        ].map((item, i) => (
                          <li key={i} className="pl-5 relative text-[var(--text-secondary)] leading-relaxed">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-[var(--text-secondary)] leading-relaxed">Move East Trading, for disclosure, is a UNGM Registered Vendor, and founder Alessandro Petrini is a Board Member of the CICC.</p>
                    </div>
                  ),
                },
                {
                  num: "4",
                  title: "Quality-control capability",
                  body: null,
                  custom: (
                    <div>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">Quality control (QC) is the function that separates a genuine sourcing agent from a commissions broker. Look for:</p>
                      <ul className="space-y-3 mb-4">
                        {[
                          "Documented factory-audit methodology",
                          "In-house or partnered inspectors in each manufacturing hub",
                          "Pre-production, in-process, and pre-shipment inspection stages",
                          "Written corrective-action procedures",
                          "Traceability of every inspection back to a named inspector and a dated report",
                        ].map((item, i) => (
                          <li key={i} className="pl-5 relative text-[var(--text-secondary)] leading-relaxed">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-[var(--text-secondary)] leading-relaxed">If the answer to &ldquo;show me a sample factory audit report&rdquo; is vague, there is no QC.</p>
                    </div>
                  ),
                },
                {
                  num: "5",
                  title: "Logistics and compliance coverage",
                  body: "Sourcing does not end at the factory gate. A professional agent owns the chain up to the port of destination and often up to customs clearance.\n\nCheck coverage on: export documentation, certificates of origin, testing reports, customs HS classification support, Incoterms handling, shipment consolidation, trade finance coordination (typically via Hong Kong), and destination-market compliance documentation (CE technical file, MDR dossier, FDA 510(k) support where relevant).",
                },
                {
                  num: "6",
                  title: "Client references and case studies",
                  body: "Ask for three sector-specific references with contact details. A professional agent will provide them — with the client's consent — because long-duration engagements are the business model.\n\nCase studies should include: scope of work, product categories, scale (value, volume, or capacity), timeline, and outcome. Generic testimonials without sector or scale data are not references.",
                },
                {
                  num: "7",
                  title: "Transparency on fees and structure",
                  body: null,
                  custom: (
                    <div>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                        A credible sourcing agent explains the fee structure upfront and in writing. Commission, retainer, project fee, or hybrid — the structure itself matters less than the transparency. What matters is that the buyer knows exactly how the agent makes money on every transaction, and that kickbacks from factories are contractually prohibited.
                      </p>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        Ask this question directly: <em className="text-[var(--text)]">&ldquo;Do you receive any commission, rebate, or commercial benefit from the manufacturers you recommend?&rdquo;</em> The answer should be no, in writing.
                      </p>
                    </div>
                  ),
                },
              ].map((section) => (
                <div key={section.num} className="mt-8">
                  <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mb-4">
                    {section.num}. {section.title}
                  </h3>
                  {section.custom
                    ? section.custom
                    : section.body?.split("\n\n").map((para, i) => (
                        <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                          {para}
                        </p>
                      ))}
                </div>
              ))}

              <h2 id="red-flags" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Red flags to avoid
              </h2>

              {[
                { title: "Unverifiable credentials", body: "Logos of organisations on a website mean nothing without a member lookup on the organisation's site. For every claimed affiliation — chamber of commerce, UN registration, ISO — verify on the source." },
                { title: "Anonymous or private-email contacts", body: "A sourcing agent that communicates only through Gmail or WhatsApp without a corporate email domain, a registered entity, and a physical office is not a sourcing agent. It is an individual operating without accountability." },
                { title: "No references or only \"NDA-protected\" references", body: "Confidentiality has limits. A professional agent can always provide at least one or two referenceable clients with named contacts." },
                { title: "\"Lowest price guaranteed\"", body: "The lowest factory price in China is almost always the worst. Professional manufacturers price according to cost structure and quality. An agent competing on pure price is signalling that the agent will be competing on your margin too." },
                { title: "Factory-dependent commissions", body: "If the agent earns a hidden commission from the factory, the agent works for the factory — not for you. This must be excluded in the contract." },
              ].map((flag) => (
                <div key={flag.title} className="mt-6">
                  <h3 className="text-[1.0625rem] font-semibold text-[var(--text)] mb-3">{flag.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{flag.body}</p>
                </div>
              ))}

              <h2 id="costs" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Typical cost structures
              </h2>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">The three fee models</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Most professional China sourcing agents use one of three structures, or a combination:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  { term: "Commission on purchase value.", body: "Common range: 3% to 10%. Higher commissions reflect higher complexity or compliance scope." },
                  { term: "Flat retainer.", body: "A monthly or quarterly fee for ongoing programmes, typically used when volume is high or procurement is continuous." },
                  { term: "Project fee.", body: "A one-off fee for a defined sourcing project, often used for infrastructure and capital equipment." },
                ].map((item, i) => (
                  <li key={i} className="pl-5 relative text-[var(--text-secondary)] leading-relaxed">
                    <span className="absolute left-0 top-0 text-[0.75rem] font-bold text-[var(--brand)]">{i + 1}.</span>
                    <strong className="text-[var(--text)]">{item.term}</strong> {item.body}
                  </li>
                ))}
              </ol>

              <h3 className="text-[1.125rem] font-semibold text-[var(--text)] mt-8 mb-4">What to avoid paying for</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Avoid paying for &ldquo;access&rdquo; to a supplier database. The value of a sourcing agent is not a list — it is active supplier management. Any up-front &ldquo;database fee&rdquo; that is not offset against real work is a sign of a low-professionalism operator.
              </p>

              <h2 id="timeline" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Timeline: from engagement to delivery
              </h2>

              <div className="space-y-6">
                {[
                  { phase: "Phase 1 — Scoping (1–2 weeks)", body: "Written specification, target cost, target timeline, compliance requirements, volume assumptions. The sharper the brief, the shorter the next phase." },
                  { phase: "Phase 2 — Supplier shortlist (2–4 weeks)", body: "Three to five qualified factories. The shortlist should come with production capability, certifications, audit history, and pricing indication." },
                  { phase: "Phase 3 — Audit and sample approval (2–4 weeks)", body: "On-site factory audits, first-article samples, lab testing where required. This is where weak agents cut corners; strong agents document everything." },
                  { phase: "Phase 4 — Contract and first purchase order (1–2 weeks)", body: "Commercial terms, quality clauses, penalty clauses, Incoterms, payment terms. The first PO is signed." },
                  { phase: "Phase 5 — Production and shipment (typically 30–90 days)", body: "Manufacturing lead time is product-specific. Agent-side work covers production updates, in-process inspection, pre-shipment inspection, and export documentation." },
                  { phase: "Phase 6 — Post-delivery (ongoing)", body: "Non-conformance handling, spare-parts pipeline, repeat orders, supplier re-qualification. This is where long-term relationships pay off." },
                ].map((p) => (
                  <div key={p.phase} className="border-l-2 border-[var(--brand)]/30 pl-5">
                    <h3 className="text-[1rem] font-semibold text-[var(--text)] mb-2">{p.phase}</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>

              <h2 id="case" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Case example: Ethiopia-Djibouti Railway
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A real-world illustration of the model at scale: Move East Trading was appointed official outsourcing agent in China for the <strong className="text-[var(--text)]">Ethiopia-Djibouti Railway (EDR)</strong>, a $4 billion Belt &amp; Road railway project connecting Addis Ababa to the Port of Djibouti. The EDR is widely reported as the first cross-border electric railway in Africa, running for approximately 756 km and operational since 2018.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The engagement covered supplier qualification, factory audits, logistics coordination through Hong Kong, and long-duration spare-parts management for a live railway. The template that emerged — on-ground presence in Shenzhen and Addis Ababa, consolidated logistics, documented compliance — is now applied to infrastructure procurement across the China-Africa corridor.
              </p>
              <Link
                href="/blog/ethiopia-djibouti-railway-china-africa-procurement"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--text)] hover:text-[var(--brand)] transition-colors mb-4"
              >
                Read the full case study
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <h2 id="checklist" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Self-assessment checklist
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Before signing with any China sourcing agent, verify all of the following in writing.
              </p>
              <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl p-7 mb-6">
                <h3 className="text-[1rem] font-semibold text-[var(--text)] mb-5">Verification checklist</h3>
                <ul className="space-y-3">
                  {[
                    "The agent operates through a registered Chinese legal entity with a verifiable business license number.",
                    "The agent has a physical office in a recognised manufacturing hub (Shenzhen, Shanghai, Guangzhou, Hong Kong).",
                    "The agent has at least three referenceable clients in your sector.",
                    "Institutional affiliations (chamber of commerce, UNGM, industry bodies) can be independently verified on the relevant organisations' websites.",
                    "The agent provides a sample factory-audit report and a written QC methodology.",
                    "The fee structure is fully disclosed, in writing, with no hidden factory rebates.",
                    "The contract includes specific quality and compliance clauses tied to your destination market.",
                    "The agent covers documentation, Incoterms, and export logistics.",
                    "The agent has a documented process for handling non-conformance and returns.",
                    "The agent has at least one client reference verifiable by phone or email.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                      <span className="w-5 h-5 rounded border border-[var(--border)] shrink-0 mt-0.5 bg-[var(--surface)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                If even two items on this list cannot be verified, keep looking.
              </p>

              <h2 id="faq" className="font-[family-name:var(--font-heading)] text-[1.75rem] lg:text-[2rem] font-bold text-[var(--text)] mt-12 mb-6 scroll-mt-24">
                Frequently asked questions
              </h2>

              <div className="space-y-8">
                {[
                  {
                    q: "What is a China sourcing agent?",
                    a: "A China sourcing agent is a company or individual based in China that represents a foreign buyer in local procurement — identifying suppliers, negotiating terms, running factory audits, coordinating logistics, and managing compliance. The agent is paid by the buyer and works for the buyer's interest.",
                  },
                  {
                    q: "What is the difference between a China sourcing agent and a trading company?",
                    a: "A sourcing agent acts on behalf of the buyer and is paid a fee or commission disclosed upfront. A trading company buys from Chinese manufacturers and resells under its own terms, taking margin on the product. The sourcing agent's incentive is aligned with buyer outcomes; the trading company's incentive is to maximise spread.",
                  },
                  {
                    q: "How much does a China sourcing agent cost?",
                    a: "Fee structures typically fall in three bands: commission on purchase value (commonly 3% to 10%), flat retainers for ongoing programmes (monthly or quarterly), and project-based fees for one-off sourcing. Sector complexity, compliance scope, and procurement volume drive the final number.",
                  },
                  {
                    q: "How long does it take to onboard a China sourcing agent?",
                    a: "A credible engagement spans four to six weeks from engagement to first purchase order: scoping (1–2 weeks), supplier shortlist (2–4 weeks), audit and sample approval (2–4 weeks), contract and first PO (1–2 weeks). Complex infrastructure procurement can extend to three to four months before the first delivery.",
                  },
                  {
                    q: "Do I need a sourcing agent if I buy on Alibaba?",
                    a: "For low-value, low-risk, off-the-shelf products, Alibaba may be sufficient. For industrial, infrastructure, medical, energy, or any compliance-heavy procurement, a sourcing agent adds verification, quality control, and legal counterpart structure that a marketplace cannot provide.",
                  },
                  {
                    q: "What credentials or affiliations should I look for?",
                    a: "Look for a registered Chinese legal entity with a verifiable business license, membership in recognised bilateral chambers of commerce, UNGM registration for UN-system procurement eligibility, sector-specific industry memberships, and documented references in your sector. Every claim should be independently verifiable.",
                  },
                  {
                    q: "Can a sourcing agent handle EU compliance and CE marking?",
                    a: "A professional sourcing agent can coordinate testing, documentation, and certification with Chinese manufacturers and notified bodies. Under EU law, however, the legal responsibility for CE marking and for product conformity remains with the importer or authorised representative inside the EU. The agent executes; the importer is accountable. Make sure your contract clearly allocates these responsibilities.",
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
                  Talk to Move East
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                  Move East Trading is a China-based procurement company with offices in Shenzhen, Hong Kong, Rome, and Addis Ababa. UNGM Registered Vendor. CICC board-level representation. Official outsourcing agent in China for the $4B Ethiopia-Djibouti Railway.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  To run a scoping conversation on a sourcing project, write to <strong className="text-[var(--text)]">info@moveasttrading.com</strong> or book a discovery call.
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
                tag: "Case Study · China-Africa",
                title: "Inside the $4 Billion Ethiopia-Djibouti Railway: How China-Africa Procurement Really Works",
                meta: "18 Apr 2026 · 9 min read",
                href: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
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
