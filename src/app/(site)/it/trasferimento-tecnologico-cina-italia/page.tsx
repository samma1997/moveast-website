import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import heroStyles from "@/components/services/ServicesHero.module.css";

export const metadata: Metadata = {
  title: "Trasferimento Tecnologico Cina-Italia — Move East Trading",
  description:
    "Trasferimento tecnologico strutturato dalla Cina: specifiche, IP governance, conformità CE/MDR, formazione tecnica. Hub Shenzhen, ufficio Roma.",
  keywords: [
    "trasferimento tecnologico cina italia",
    "technology transfer cina",
    "tech transfer cina europa",
    "IP cina europa",
    "shenzhen tecnologia italia",
  ],
  alternates: {
    canonical: "/it/trasferimento-tecnologico-cina-italia",
    languages: {
      en: "/services/technology-transfer",
      it: "/it/trasferimento-tecnologico-cina-italia",
      "x-default": "/services/technology-transfer",
    },
  },
  openGraph: {
    title: "Trasferimento Tecnologico Cina-Italia — Move East Trading",
    description:
      "Trasferimento tecnologico strutturato dalla Cina: specifiche, IP governance, conformità CE/MDR, formazione tecnica.",
    url: `${site.url}/it/trasferimento-tecnologico-cina-italia`,
    type: "website",
    locale: "it_IT",
  },
};

export default function TechTransferPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Italia", url: "/it" },
            { name: "Trasferimento tecnologico", url: "/it/trasferimento-tecnologico-cina-italia" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Trasferimento tecnologico Cina-Italia",
            description:
              "Servizio strutturato di trasferimento tecnologico dalla Cina verso l'Europa: specifiche, IP governance, conformità CE/MDR, formazione tecnica, FAT/SAT.",
            provider: { "@id": `${site.url}/#organization` },
            areaServed: ["Italia", "Europa"],
            serviceType: "Technology Transfer",
            url: `${site.url}/it/trasferimento-tecnologico-cina-italia`,
            inLanguage: "it-IT",
          },
        ]}
      />

      {/* HERO */}
      <section className={heroStyles.hero} aria-labelledby="tt-hero-title">
        <div className={heroStyles.container}>
          <div className={heroStyles.grid}>
            <div className={heroStyles.left}>
              <div className={heroStyles.eyebrow}>
                <span className={heroStyles.dot} aria-hidden="true" />
                <span>Servizio · Technology Transfer</span>
              </div>
              <h1 id="tt-hero-title" className={heroStyles.title}>
                Trasferimento tecnologico dalla Cina, strutturato come <em>servizio</em>.
              </h1>
              <div className={heroStyles.partners}>
                <span className={heroStyles.partner}>Sede Shenzhen</span>
                <span className={heroStyles.partner}>Ufficio Roma</span>
                <span className={heroStyles.partner}>CICC Member</span>
              </div>
              <p className={heroStyles.lede}>
                Il trasferimento tecnologico professionale non è un acquisto più
                grande del solito. È un programma con governance IP, allineamento
                specifiche, conformità europea, FAT/SAT, formazione e
                documentazione bilingue. Move East gestisce queste fasi come
                operatore unico, dalla fabbrica cinese al cantiere italiano.
              </p>
            </div>
            <div className={heroStyles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/sourcing.webp"
                alt="Trasferimento tecnologico Cina-Italia — Shenzhen, Roma"
                loading="eager"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span className={heroStyles.tag}>Shenzhen · Roma · Cantiere</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 1 — DEFINIZIONE */}
      <section style={{ padding: "40px 0 64px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot" aria-hidden="true" />
                <span>01 / Definizione</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>
                Cos&apos;è (e cosa non è) un trasferimento tecnologico.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: "70ch" }}>
              <p>
                Un trasferimento tecnologico è un programma in cui una tecnologia
                — prodotto, processo produttivo, sistema integrato — viene
                trasferita da un&apos;organizzazione titolare verso un&apos;altra
                organizzazione che la deve adottare, integrare o ricommercializzare.
                Comprende necessariamente: specifiche dettagliate, accordi di IP e
                licenza, percorso di compliance nel mercato di destinazione,
                formazione del personale ricevente, validazioni in fabbrica e in
                campo, documentazione tecnica completa.
              </p>
              <p>
                <strong style={{ color: "var(--ink)" }}>Non è</strong> un semplice
                ordine di acquisto. Non è la fornitura di componenti staccati senza
                contesto sistemico. Non è un&apos;ispezione qualità una tantum. La
                differenza è strutturale: cambia il contratto, cambia la
                documentazione richiesta, cambiano i tempi (tipicamente 6-18 mesi
                contro le settimane di un sourcing).
              </p>
              <p>
                Per un&apos;azienda italiana che vuole adottare tecnologia cinese su
                un&apos;applicazione critica — energia, ferroviario, medicale,
                industriale — è la differenza fra un progetto sostenibile nel tempo
                e una fornitura che non si riesce a manutenere, certificare o
                difendere in caso di contenzioso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 2 — IP & COMPLIANCE */}
      <section style={{ padding: "40px 0 80px", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="dot" aria-hidden="true" />
            <span>02 / IP governance e conformità</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "22ch", margin: "0 0 40px" }}>
            Come Move East gestisce IP e conformità europea.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
            {[
              { num: "IP", title: "Mappatura della proprietà intellettuale", body: "Brevetti, marchi, know-how, software embedded: viene fatta una mappatura formale di chi possiede cosa. Su questa base si negozia licenza, esclusività territoriale, royalty, durata e diritti di sub-licenza." },
              { num: "NDA", title: "Accordi di riservatezza bilaterali", body: "NDA in cinese e italiano/inglese fra le parti coinvolte (titolare cinese, ricevente italiano, eventuali subfornitori). Clausole espressamente esecutive sia in foro cinese sia europeo." },
              { num: "CE", title: "Marcatura CE e direttive europee", body: "La conformità europea raramente coincide con quella cinese. Move East struttura il dossier tecnico secondo direttive applicabili (Macchine, EMC, Bassa Tensione, RED, MDR) e coordina con notified body europei." },
              { num: "DOC", title: "Fascicolo tecnico bilingue", body: "Manuale operativo, manuale di manutenzione, schede tecniche, BOM, P&ID, schemi elettrici: tutto bilingue cinese-italiano (o cinese-inglese a seconda dei requisiti del cliente), con revisioni tracciate." },
            ].map((c) => (
              <article key={c.num} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 10, minHeight: 220 }}>
                <span className="mono-chip">{c.num}</span>
                <h3 style={{ fontSize: 17, lineHeight: 1.2, letterSpacing: "-0.01em", margin: 0 }}>{c.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 3 — FAT/SAT + FORMAZIONE */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot" aria-hidden="true" />
                <span>03 / Validazione e formazione</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>
                FAT, SAT, formazione tecnici sul campo.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ paddingBottom: 18, borderBottom: "1px solid var(--line)" }}>
                <h3 style={{ fontSize: 18, margin: "0 0 8px", letterSpacing: "-0.01em" }}>Factory Acceptance Test (FAT)</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                  Test di accettazione in fabbrica a Shenzhen o nelle facility del
                  fornitore. Move East coordina il protocollo FAT con il
                  cliente italiano, partecipa fisicamente con propri tecnici e
                  produce report ufficiale di accettazione/rilievi. Il cliente può
                  partecipare in presenza o da remoto via video certificato.
                </p>
              </div>
              <div style={{ paddingBottom: 18, borderBottom: "1px solid var(--line)" }}>
                <h3 style={{ fontSize: 18, margin: "0 0 8px", letterSpacing: "-0.01em" }}>Site Acceptance Test (SAT)</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                  Test in cantiere/sito italiano una volta installato il sistema.
                  Riferimento per il rilascio del pagamento finale. Move East
                  affianca il cliente nella conduzione del SAT con tecnici cinesi
                  in trasferta in Italia, gestendo aspetti logistici (visti,
                  trasferte, traduzione tecnica simultanea).
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 18, margin: "0 0 8px", letterSpacing: "-0.01em" }}>Formazione del personale ricevente</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                  Programma formativo strutturato per i tecnici italiani: sessioni
                  in fabbrica a Shenzhen, training on-the-job, manuali bilingue,
                  registrazioni video delle sessioni, certificazioni di competenza
                  emesse a fine percorso. Per i progetti complessi, periodo di
                  affiancamento on-site di 4-12 settimane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 4 — CASE STUDY EDR */}
      <section style={{ padding: "60px 0 80px", background: "var(--surface-2)" }}>
        <div className="container">
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: "48px 40px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 48, alignItems: "start" }}>
            <div>
              <span className="mono-chip" style={{ marginBottom: 14, display: "inline-block" }}>Case study · Belt & Road</span>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 12px", maxWidth: "16ch" }}>
                Trasferimento tecnologico ferroviario, EDR.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--muted)", margin: 0 }}>
                Ethiopia-Djibouti Railway: $4 miliardi, 752 km elettrificati,
                materiale rotabile e segnalamento dalla catena cinese.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
              <p>
                EDR non è stato un semplice acquisto: è stato un programma di
                trasferimento tecnologico. Materiale rotabile, sistema di
                segnalamento, alimentazione di trazione, formazione del personale
                etiope per la gestione operativa, manuali tecnici bilingue
                cinese-inglese, FAT in Cina e SAT in Etiopia.
              </p>
              <p>
                È il riferimento operativo che Move East porta nei progetti
                europei: stesso modello di gestione (specifiche, IP, FAT/SAT,
                formazione, documentazione) adattato alle norme tecniche europee
                — TSI per ferroviario, EN per BESS, MDR per medicale, Direttiva
                Macchine per impianti industriali. Cambiano gli standard, non
                cambia la struttura del programma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 5 — QUANDO ATTIVARLO */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="dot" aria-hidden="true" />
            <span>05 / Quando attivare il programma</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "22ch", margin: "0 0 40px" }}>
            Cinque segnali che serve un trasferimento, non un sourcing.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {[
              { num: "01", body: "L'acquisto include integrazione di un sistema (non un singolo prodotto): impianto, rotabile, BESS, linea di produzione, dispositivo medicale complesso." },
              { num: "02", body: "Esiste un mercato regolato di destinazione (CE, MDR, FDA, TSI) con requisiti documentali ricorrenti che vanno garantiti per anni dopo la fornitura." },
              { num: "03", body: "Il personale italiano dovrà gestire installazione, manutenzione e troubleshooting di prima e seconda linea — quindi serve formazione strutturata, non un manuale tradotto." },
              { num: "04", body: "Sono in gioco asset di proprietà intellettuale (brevetti, software, processi proprietari) per cui serve un accordo formale di licenza e durata." },
              { num: "05", body: "L'investimento è significativo, il ritorno è atteso su più anni, e la sostenibilità tecnica del progetto è critica per il P&L del cliente o per un cliente finale pubblico." },
            ].map((p) => (
              <article key={p.num} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 10, minHeight: 180 }}>
                <span className="mono-chip">{p.num}</span>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "20px 0 100px" }}>
        <div className="container">
          <div style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: 22, padding: "48px 40px", display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.55 }}>
              Hai un programma di trasferimento tecnologico?
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "22ch" }}>
              Inviaci scope, settore e timeline: torniamo con un piano operativo.
            </h2>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", padding: "16px 24px", borderRadius: 999, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                Richiedi un assessment →
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
