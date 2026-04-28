import Link from "next/link";
import styles from "./ServicesCards.module.css";

type CardProps = {
  id: string;
  slug: string;
  href: string;
  title: string;
  text: string;
  variant?: "c2" | "c3";
};

const cards: readonly CardProps[] = [
  {
    id: "sourcing",
    slug: "sourcing",
    href: "/services/sourcing",
    title: "01 — Strategic Sourcing & Procurement",
    text: "Supplier discovery, factory audits, verification, contract negotiation, and quality control. On-site audits across Guangdong, Jiangsu, Zhejiang, and Shandong — Mandarin contracts under EU/UN-grade clauses.",
  },
  {
    id: "transfer",
    slug: "technology-transfer",
    href: "/services/technology-transfer",
    title: "02 — Technology Transfer & Project Integration",
    text: "Structured transfer of Chinese industrial technology into buyer environments — specification alignment, IP governance, regulatory compliance (CE, MDR, FDA, ISO, GCC), FAT/SAT, and on-site training. A priced, documented service, not a by-product of procurement.",
    variant: "c2",
  },
  {
    id: "ops",
    slug: "supply-chain",
    href: "/services/supply-chain",
    title: "03 — Trading & Supply Chain Management",
    text: "End-to-end supply chain management from Shenzhen — one of the world's busiest container ports — to Europe, Africa, and the Gulf. PO management, export documentation, multi-modal freight, customs clearance, trade finance via Hong Kong, and last-mile delivery.",
    variant: "c3",
  },
];

export function ServicesCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {cards.map((c) => (
            <Link key={c.id} id={c.id} href={c.href} className={styles.card}>
              <header className={styles.head}>
                <h3 className={styles.title}>{c.title}</h3>
                <span
                  className={`${styles.mark} ${c.variant ? styles[c.variant] : ""}`}
                  aria-hidden="true"
                />
              </header>
              <div
                className={`${styles.media} ${c.variant ? styles[c.variant] : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/services/${c.slug}.webp`}
                  alt=""
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className={styles.text}>{c.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
