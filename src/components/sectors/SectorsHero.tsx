import styles from "@/components/services/ServicesHero.module.css";

export function SectorsHero() {
  return (
    <section className={styles.hero} aria-labelledby="sec-hero-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              <span>Sectors · Four industrial verticals</span>
            </div>
            <h1 id="sec-hero-title" className={styles.title}>
              Four verticals where China <em>leads</em>.
            </h1>
            <div
              className={styles.partners}
              aria-label="CICC Board Member, UNGM Registered Vendor, operating since 2018"
            >
              <span className={styles.partner}>CICC Board · 2024</span>
              <span className={styles.partner}>UNGM Vendor · 2024</span>
              <span className={styles.partner}>Since 2018</span>
            </div>
            <p className={styles.lede}>
              Move East Trading focuses on four industrial verticals where Chinese
              manufacturers lead global supply: mobility and smart transport,
              renewable energy and storage, medical devices and healthcare, and
              industrial machinery and smart devices. Sourced from Shenzhen for
              clients in Europe, Africa, Asia, and the Gulf.
            </p>
          </div>
          <div className={styles.media} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sectors/mobility.webp"
              alt=""
              loading="eager"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className={styles.tag}>Mobility · Energy · Medical · Machinery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
