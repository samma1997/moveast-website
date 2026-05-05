import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import heroStyles from "@/components/services/ServicesHero.module.css";

export const metadata: Metadata = {
  title: "Move East — Procurement Cina per aziende italiane",
  description:
    "Move East Trading: agente sourcing Cina con sede a Shenzhen e ufficio Roma. Strategic sourcing, trasferimento tecnologico, supply chain dalla Cina.",
  alternates: {
    canonical: "/it",
    languages: {
      en: "/",
      it: "/it",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Move East — Procurement Cina per aziende italiane",
    description:
      "Agente sourcing Cina con sede a Shenzhen e ufficio Roma. Strategic sourcing, trasferimento tecnologico, supply chain.",
    url: `${site.url}/it`,
    type: "website",
    locale: "it_IT",
  },
};

export default function ItalianHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Italia", url: "/it" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            inLanguage: "it-IT",
            url: `${site.url}/it`,
            name: "Move East — Procurement Cina per aziende italiane",
            description:
              "Move East Trading: agente sourcing Cina con sede a Shenzhen e ufficio Roma. Strategic sourcing, trasferimento tecnologico, supply chain dalla Cina.",
            isPartOf: { "@id": `${site.url}/#website` },
            about: { "@id": `${site.url}/#organization` },
          },
        ]}
      />

      {/* HERO */}
      <section className={heroStyles.hero} aria-labelledby="it-hero-title">
        <div className={heroStyles.container}>
          <div className={heroStyles.grid}>
            <div className={heroStyles.left}>
              <div className={heroStyles.eyebrow}>
                <span className={heroStyles.dot} aria-hidden="true" />
                <span>Procurement Cina · Italia</span>
              </div>
              <h1 id="it-hero-title" className={heroStyles.title}>
                Connettere mercati, tecnologie e <em>persone</em>.
              </h1>
              <div className={heroStyles.partners} aria-label="CICC Member, UNGM Registered Vendor, attivi dal 2018">
                <span className={heroStyles.partner}>CICC Member · 2024</span>
                <span className={heroStyles.partner}>UNGM Vendor · 2024</span>
                <span className={heroStyles.partner}>Dal 2018</span>
              </div>
              <p className={heroStyles.lede}>
                Move East Trading è una società di procurement con sede a Shenzhen che
                affianca buyer industriali, EPC e pubbliche amministrazioni nelle
                operazioni con la Cina. L&apos;ufficio di Roma cura le relazioni con
                clienti italiani ed europei: dalla qualifica dei fornitori cinesi alla
                gestione contrattuale, fino alla supply chain in arrivo.
              </p>
            </div>
            <div className={heroStyles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/sourcing.webp"
                alt="Move East Trading — procurement Cina, ufficio Shenzhen e Roma"
                loading="eager"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span className={heroStyles.tag}>Shenzhen · Hong Kong · Roma · Addis Abeba</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "40px 0 64px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span>Chi è Move East</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 70 + "ch" }}>
            <p>
              Move East è un operatore strutturato per il procurement dalla Cina:
              quattro uffici (Shenzhen, Hong Kong, Roma, Addis Abeba), un team
              bilingue cinese-inglese-italiano e processi documentati su sourcing,
              trasferimento tecnologico e supply chain. Lavoriamo per buyer
              industriali europei, EPC contractor, gruppi infrastrutturali e clienti
              istituzionali.
            </p>
            <p>
              Per il mercato italiano l&apos;ufficio di Roma è il punto di contatto
              operativo: raccoglie le specifiche, traduce i requisiti tecnici e di
              compliance europea, coordina visite e audit di fabbrica con la sede di
              Shenzhen. La cabina di regia tecnica resta in Cina, dove i nostri
              ingegneri e responsabili sourcing presidiano direttamente i fornitori.
            </p>
            <p>
              Move East Trading è iscritta come fornitore registrato presso le
              Nazioni Unite (UNGM) e fa parte della China-Italy Chamber of Commerce
              (CICC), la principale rete di rappresentanza delle oltre 800 aziende
              italiane attive in Cina.
            </p>
          </div>
        </div>
      </section>

      {/* TRE SERVIZI — CARD */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot" aria-hidden="true" />
            <span>Tre linee di servizio</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "20ch", margin: "0 0 40px" }}>
            Cosa facciamo per le aziende italiane.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <Link
              href="/it/sourcing-cina"
              style={{
                display: "flex", flexDirection: "column", gap: 16,
                background: "var(--surface)", border: "1px solid var(--line)",
                borderRadius: 14, padding: 28, textDecoration: "none",
                color: "var(--ink)", minHeight: 240,
              }}
            >
              <span className="mono-chip">01 / Strategic Sourcing</span>
              <h3 style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
                Sourcing strategico dalla Cina
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--ink-2)", margin: 0, flex: 1 }}>
                Ricerca e qualifica fornitori cinesi, audit di fabbrica on-site,
                contratti in mandarino, gestione qualità e produzione.
              </p>
              <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>Approfondisci →</span>
            </Link>

            <Link
              href="/it/trasferimento-tecnologico-cina-italia"
              style={{
                display: "flex", flexDirection: "column", gap: 16,
                background: "var(--surface)", border: "1px solid var(--line)",
                borderRadius: 14, padding: 28, textDecoration: "none",
                color: "var(--ink)", minHeight: 240,
              }}
            >
              <span className="mono-chip">02 / Technology Transfer</span>
              <h3 style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
                Trasferimento tecnologico Cina-Italia
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--ink-2)", margin: 0, flex: 1 }}>
                Specifiche tecniche, IP governance, conformità CE/MDR, FAT/SAT,
                formazione tecnici, documentazione bilingue.
              </p>
              <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>Approfondisci →</span>
            </Link>

            <Link
              href="/services/supply-chain"
              style={{
                display: "flex", flexDirection: "column", gap: 16,
                background: "var(--surface)", border: "1px solid var(--line)",
                borderRadius: 14, padding: 28, textDecoration: "none",
                color: "var(--ink)", minHeight: 240,
              }}
            >
              <span className="mono-chip">03 / Supply Chain</span>
              <h3 style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
                Supply chain dalla Cina
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--ink-2)", margin: 0, flex: 1 }}>
                Trading, consolidamento, logistica e dogane dal porto di Shenzhen
                — visibilità end-to-end fino al sito europeo.
              </p>
              <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>Vedi pagina (EN) →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SETTORI */}
      <section style={{ padding: "40px 0 80px", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot" aria-hidden="true" />
            <span>Settori coperti</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "22ch", margin: "0 0 32px" }}>
            Quattro verticali industriali, una sola squadra in Cina.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { num: "01", title: "Mobility & Smart Transport", body: "Materiale rotabile, segnalamento, e-mobility, soluzioni ferroviarie e veicoli industriali." },
              { num: "02", title: "Renewable Energy & Storage", body: "BESS, fotovoltaico, inverter, sistemi di accumulo per utility e progetti C&I." },
              { num: "03", title: "Medical Devices & Healthcare", body: "Dispositivi medici classe I-III, conformità MDR/CE, percorsi di immissione sul mercato europeo." },
              { num: "04", title: "Industrial Machinery & Smart Devices", body: "Macchinari industriali, automazione, dispositivi connessi per applicazioni B2B." },
            ].map((s) => (
              <article
                key={s.num}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 180,
                }}
              >
                <span className="mono-chip">{s.num}</span>
                <h3 style={{ fontSize: 16, lineHeight: 1.25, letterSpacing: "-0.01em", margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--ink-2)", margin: 0 }}>{s.body}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/sectors" className="discover">
              Vedi tutti i settori (EN)
              <span className="arrow" aria-hidden="true">
                <svg viewBox="0 0 12 12" fill="none"><path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* AFFILIAZIONI */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" aria-hidden="true" />
                <span>Affiliazioni istituzionali</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>
                Riconoscimenti e <em className="ts-em">network ufficiali</em>.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <article style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
                <span className="mono-chip" style={{ marginBottom: 10 }}>CICC Member · 2024</span>
                <h3 style={{ fontSize: 18, margin: "10px 0 8px", letterSpacing: "-0.01em" }}>
                  China-Italy Chamber of Commerce
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                  Move East Trading è membro della CICC, la rete di rappresentanza
                  delle oltre 800 aziende italiane in Cina. La camera è il principale
                  punto di riferimento istituzionale per il rapporto economico tra i
                  due Paesi e fornisce accesso a tavoli tecnici, eventi B2B e
                  delegazioni governative.
                </p>
              </article>
              <article style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
                <span className="mono-chip" style={{ marginBottom: 10 }}>UNGM Registered Vendor · 2024</span>
                <h3 style={{ fontSize: 18, margin: "10px 0 8px", letterSpacing: "-0.01em" }}>
                  United Nations Global Marketplace
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                  La registrazione presso UNGM consente a Move East di partecipare a
                  procedure di approvvigionamento delle agenzie ONU, requisito spesso
                  richiesto su progetti in Africa e Medio Oriente, oltre a confermare
                  un livello base di trasparenza societaria, finanziaria e di
                  compliance.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div
            style={{
              background: "var(--ink)",
              color: "var(--bg)",
              borderRadius: 22,
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.55, marginBottom: 16 }}>
                Ufficio Roma · Lazio, Italia
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "18ch" }}>
                Parla con il team a <em className="ts-em">Roma</em>.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 16, opacity: 0.75, maxWidth: "52ch" }}>
                Risposta entro 24-48 ore. Ogni messaggio viene letto da una persona
                del team — non da un chatbot. La conversazione operativa avviene
                tipicamente fra l&apos;ufficio Roma e Shenzhen (GMT+8).
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 24px", borderRadius: 999, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                Contatta Move East
                <span aria-hidden="true">→</span>
              </Link>
              <a href="mailto:info@moveasttrading.com" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "transparent", color: "var(--bg)", padding: "16px 24px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                info@moveasttrading.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
