import styles from "./ServicesHero.module.css";

export function ServicesHero() {
  return (
    <section className={styles.hero} aria-labelledby="svc-hero-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              <span>What we do · Three service lines</span>
            </div>
            <h1 id="svc-hero-title" className={styles.title}>
              China procurement services, run as one <em>integrated</em> operation.
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
              Move East Trading is a Shenzhen-based china sourcing company delivering
              strategic sourcing, technology transfer, and supply chain management from
              China to Europe, Africa, and the Gulf. Four offices, three service lines,
              one accountable operator.
            </p>
          </div>
          <div className={styles.media} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/sourcing.webp"
              alt=""
              loading="eager"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className={styles.tag}>Shenzhen · Hong Kong · Rome · Addis Ababa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
