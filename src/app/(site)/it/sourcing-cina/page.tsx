import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import heroStyles from "@/components/services/ServicesHero.module.css";

export const metadata: Metadata = {
  title: "Sourcing Cina per aziende italiane — Move East Trading",
  description:
    "Agente sourcing Cina per aziende italiane: ricerca fornitori, audit di fabbrica, contratti in mandarino, gestione qualità da Shenzhen.",
  keywords: [
    "sourcing cina",
    "agente sourcing cina italia",
    "fornitori cinesi",
    "audit fabbrica cina",
    "procurement cina",
  ],
  alternates: {
    canonical: "/it/sourcing-cina",
    languages: {
      en: "/services/sourcing",
      it: "/it/sourcing-cina",
      "x-default": "/services/sourcing",
    },
  },
  openGraph: {
    title: "Sourcing Cina per aziende italiane — Move East Trading",
    description:
      "Agente sourcing Cina: ricerca fornitori, audit on-site, contratti in mandarino, qualità gestita da Shenzhen.",
    url: `${site.url}/it/sourcing-cina`,
    type: "website",
    locale: "it_IT",
  },
};

export default function SourcingCinaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Italia", url: "/it" },
            { name: "Sourcing Cina", url: "/it/sourcing-cina" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sourcing strategico dalla Cina",
            description:
              "Servizio di sourcing strategico dalla Cina per aziende italiane: ricerca e qualifica fornitori, audit di fabbrica, contratti in mandarino, gestione qualità.",
            provider: { "@id": `${site.url}/#organization` },
            areaServed: ["Italia", "Europa"],
            serviceType: "Strategic Sourcing",
            url: `${site.url}/it/sourcing-cina`,
            inLanguage: "it-IT",
          },
        ]}
      />

      {/* HERO */}
      <section className={heroStyles.hero} aria-labelledby="src-hero-title">
        <div className={heroStyles.container}>
          <div className={heroStyles.grid}>
            <div className={heroStyles.left}>
              <div className={heroStyles.eyebrow}>
                <span className={heroStyles.dot} aria-hidden="true" />
                <span>Servizio · Strategic Sourcing</span>
              </div>
              <h1 id="src-hero-title" className={heroStyles.title}>
                Sourcing strategico dalla Cina, gestito <em>dalla fabbrica</em>.
              </h1>
              <div className={heroStyles.partners}>
                <span className={heroStyles.partner}>Sede Shenzhen</span>
                <span className={heroStyles.partner}>Ufficio Roma</span>
                <span className={heroStyles.partner}>CICC Member</span>
              </div>
              <p className={heroStyles.lede}>
                Move East è un agente sourcing strutturato: ricerca, qualifica e
                gestione di fornitori cinesi per buyer industriali italiani. Il team
                opera direttamente dalla sede di Shenzhen, presidiando le fabbriche
                in lingua, con audit on-site, contratti in mandarino e controllo
                qualità lungo l&apos;intero ciclo produttivo.
              </p>
            </div>
            <div className={heroStyles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/sourcing.webp"
                alt="Sourcing Cina — fabbriche di Shenzhen e Guangdong"
                loading="eager"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span className={heroStyles.tag}>Shenzhen · Guangdong · Roma</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 1 — AGENTE PROFESSIONALE VS ALIBABA */}
      <section style={{ padding: "40px 0 64px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot" aria-hidden="true" />
                <span>01 / Cosa fa</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>
                Agente sourcing professionale vs marketplace.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: "70ch" }}>
              <p>
                Le piattaforme online come Alibaba o Made-in-China sono utili per
                indagini preliminari, ma non sostituiscono il lavoro di un agente
                sourcing. Il prezzo a listino è raramente quello che si paga, le
                certificazioni dichiarate non sempre coincidono con la realtà di
                fabbrica, le foto del prodotto possono provenire da un&apos;azienda
                terza. Per un buyer italiano che acquista in Cina, la differenza fra
                un fornitore affidabile e uno opportunistico la fa la presenza
                fisica sul territorio, non il rating della piattaforma.
              </p>
              <p>
                Move East lavora come operatore strutturato: presidio fisico a
                Shenzhen, team bilingue cinese-inglese, due ingegneri quality di
                base in Guangdong, ufficio Roma per la relazione con il cliente
                italiano. Non vendiamo prodotti — qualifichiamo fornitori, negoziamo
                in nome del cliente, supervisioniamo produzione e spedizione. Il
                rapporto è formalizzato con mandato e contratti chiari su scope,
                conflitti di interesse e fatturazione.
              </p>
              <p>
                Questo modello riduce due rischi tipici del sourcing improvvisato:
                acquistare da una società di trading travestita da fabbrica, e
                ricevere merce con specifiche differenti dall&apos;ordine. Entrambi
                i rischi vengono intercettati con la due diligence on-site e
                contratti scritti correttamente in mandarino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 2 — IL PROCESSO */}
      <section style={{ padding: "40px 0 80px", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="dot" aria-hidden="true" />
            <span>02 / Il processo Move East</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "20ch", margin: "0 0 40px" }}>
            Cinque fasi, una sola squadra di riferimento.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {[
              {
                num: "01",
                title: "Brief tecnico e commerciale",
                body: "Raccolta specifiche con l'ufficio Roma, traduzione in capitolato cinese, definizione target prezzo, volumi, tempi di consegna e standard di compliance richiesti.",
              },
              {
                num: "02",
                title: "Shortlist fornitori",
                body: "Ricerca su database CICC, fiere settoriali (Canton Fair, CIIE), network industriale Guangdong. Tipicamente da una rosa di 30-40 candidati a 4-6 fornitori qualificati.",
              },
              {
                num: "03",
                title: "Audit di fabbrica on-site",
                body: "Visita fisica con check-list strutturata: capacità produttiva reale, certificazioni (ISO, CE, FDA), gestione qualità, condizioni di lavoro, esposizione finanziaria, IP risk.",
              },
              {
                num: "04",
                title: "Contratto e ordine",
                body: "Contratto bilingue cinese-italiano/inglese con clausole chiave: specifiche tecniche, controllo qualità, penali, IP, foro competente, modalità di pagamento via banca cinese o Hong Kong.",
              },
              {
                num: "05",
                title: "Produzione e ispezione",
                body: "Inspection in linea (DUPRO), pre-shipment inspection (PSI), reportistica fotografica, blocco merce in caso di non conformità, gestione carico container e documentazione export.",
              },
            ].map((p) => (
              <article
                key={p.num}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  minHeight: 220,
                }}
              >
                <span className="mono-chip">{p.num}</span>
                <h3 style={{ fontSize: 17, lineHeight: 1.2, letterSpacing: "-0.01em", margin: 0 }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 3 — VERTICALI */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot" aria-hidden="true" />
                <span>03 / Verticali coperti</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>
                Quattro settori industriali presidiati.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { t: "Mobility & Smart Transport", b: "Materiale rotabile, segnalamento, componentistica per veicoli industriali, e-mobility. Esperienza maturata su grandi progetti infrastrutturali ferroviari, incluso il corridoio Etiopia-Gibuti." },
                { t: "Renewable Energy & Storage", b: "BESS (Battery Energy Storage Systems), inverter, pannelli, sistemi di accumulo per utility e applicazioni C&I. Catena fornitori cinesi qualificata su standard europei e codici elettrici nazionali." },
                { t: "Medical Devices & Healthcare", b: "Dispositivi medici Classe I, IIa, IIb, alcuni Classe III. Conformità MDR e CE marking gestita in collaborazione con notified bodies europei. Documentazione clinica e fascicolo tecnico bilingue." },
                { t: "Industrial Machinery & Smart Devices", b: "Macchinari per lavorazione metalli, packaging, automazione di linea, dispositivi connessi B2B. Direttiva Macchine 2006/42/CE come riferimento di compliance." },
              ].map((v) => (
                <div key={v.t} style={{ paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
                  <h3 style={{ fontSize: 17, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{v.t}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>{v.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 4 — COMPLIANCE EU */}
      <section style={{ padding: "40px 0 80px", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="dot" aria-hidden="true" />
            <span>04 / Compliance e certificazioni</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "22ch", margin: "0 0 32px" }}>
            CE, MDR, FDA, GCC: cosa controlliamo davvero.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {[
              { num: "CE", body: "Marcatura CE secondo direttive europee applicabili (Bassa Tensione, EMC, Macchine, RED). Verifichiamo coerenza fra dichiarazione di conformità, fascicolo tecnico e prodotto reale." },
              { num: "MDR", body: "Per dispositivi medici: classificazione corretta, percorso di conformità con notified body, gestione UDI, post-market surveillance. Affianchiamo il cliente nella scelta del notified body europeo." },
              { num: "FDA", body: "Per chi esporta verso US: registrazione establishment FDA, 510(k) quando applicabile, etichettatura conforme. Coordiniamo con consulenti regolatori americani su richiesta." },
              { num: "GCC", body: "Gulf Conformity Mark per i sei Paesi del Consiglio di Cooperazione del Golfo. Utile per buyer industriali che lavorano anche su mercati Medio Orientali." },
            ].map((c) => (
              <article key={c.num} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="mono-chip">{c.num}</span>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 5 — CASE STUDY EDR */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: "48px 40px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 48, alignItems: "start" }}>
            <div>
              <span className="mono-chip" style={{ marginBottom: 14, display: "inline-block" }}>Case study · Belt & Road</span>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 12px", maxWidth: "16ch" }}>
                Ferrovia Etiopia-Gibuti, 4 miliardi di dollari.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--muted)", margin: 0 }}>
                Corridoio ferroviario di 752 km, primo elettrificato dell&apos;Africa
                orientale. Riferimento operativo per la nostra catena fornitori
                ferroviaria cinese.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
              <p>
                Il progetto Ethiopia-Djibouti Railway è una delle infrastrutture
                Belt & Road di riferimento: 752 km di linea elettrificata che
                collega Addis Abeba al porto di Gibuti, valore complessivo intorno
                ai 4 miliardi di dollari, materiale rotabile e segnalamento
                forniti dalla catena industriale cinese.
              </p>
              <p>
                Per Move East ha rappresentato il banco di prova della catena
                fornitori ferroviaria cinese che oggi proponiamo a clienti
                istituzionali europei: stesse aziende, stessi standard, stesso
                modello di sourcing strutturato — adattato però ai requisiti di
                compliance europei (TSI, EN 50126/28/29, Direttiva Macchine).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "20px 0 100px" }}>
        <div className="container">
          <div style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: 22, padding: "48px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.55 }}>
              Hai un progetto di sourcing in Cina?
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "22ch" }}>
              Inviaci specifiche e volumi: torniamo con shortlist e prima stima.
            </h2>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 24px", borderRadius: 999, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                Richiedi un sourcing scoping →
              </Link>
              <Link href="/it" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: "var(--bg)", padding: "16px 24px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                ← Torna a Move East Italia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
