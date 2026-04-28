import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./SectorsServicesLink.module.css";

type Item = {
  slug: string;
  kicker: string;
  title: string;
  text: string;
  tags: string;
  image: string;
};

const items: readonly Item[] = [
  {
    slug: "sourcing",
    kicker: "Service 01",
    title: "Strategic Sourcing & Procurement",
    text: "Supplier discovery, factory audits across Guangdong/Jiangsu/Zhejiang/Shandong, Mandarin contracts under EU/UN-grade clauses.",
    tags: "Discovery · Audits · Contracts",
    image: "/images/services/sourcing.webp",
  },
  {
    slug: "technology-transfer",
    kicker: "Service 02",
    title: "Technology Transfer & Project Integration",
    text: "Specification alignment, IP governance, regulatory compliance (CE/MDR/FDA/GCC), FAT/SAT, and on-site engineer training.",
    tags: "Spec · IP · Compliance",
    image: "/images/services/technology-transfer.webp",
  },
  {
    slug: "supply-chain",
    kicker: "Service 03",
    title: "Trading & Supply Chain Management",
    text: "PO management, multi-modal freight from Shenzhen, customs at origin and destination, trade finance via Hong Kong.",
    tags: "Freight · Customs · Trade finance",
    image: "/images/services/supply-chain.webp",
  },
];

export function SectorsServicesLink() {
  return (
    <section className={styles.section} aria-labelledby="sec-services-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>Services applied</Eyebrow>
            <h2 id="sec-services-title" className={styles.title}>
              Three services, executed inside <em>every</em> vertical.
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              Each sector engagement runs through one or more of our three service
              lines. Sourcing brings the verified supplier; technology transfer
              brings the regulatory and engineering layer; supply chain brings the
              cargo from the factory floor in Shenzhen to the project site.
            </p>
            <div style={{ marginTop: 18 }}>
              <PillBtn href="/services">Explore the three services</PillBtn>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          {items.map((it) => (
            <Link key={it.slug} href={`/services/${it.slug}`} className={styles.card}>
              <div className={styles.media}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image} alt="" loading="lazy" />
                <span className={styles.kicker}>{it.kicker}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardText}>{it.text}</p>
                <div className={styles.foot}>
                  <span className={styles.tags}>{it.tags}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M3 11L11 3" />
                      <path d="M5 3h6v6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
