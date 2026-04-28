import styles from "./AboutHero.module.css";

type Tile = {
  src: string;
  caption: string;
  alt: string;
  position: "f1" | "f2" | "f3" | "f4";
};

const tiles: readonly Tile[] = [
  {
    src: "/images/about/mattarella-guangzhou.webp",
    caption: "Mattarella · Guangzhou",
    alt: "Meeting with Italian President Sergio Mattarella in Guangzhou",
    position: "f1",
  },
  {
    src: "/images/about/cmef-shanghai.webp",
    caption: "CMEF · Shanghai",
    alt: "CMEF Shanghai medical fair + Italy-China seminar",
    position: "f2",
  },
  {
    src: "/images/about/pingshan-rome.webp",
    caption: "Rome × Pingshan",
    alt: "Rome delegation in Pingshan District Shenzhen",
    position: "f3",
  },
  {
    src: "/images/about/changsha-mission.webp",
    caption: "Changsha · 2025",
    alt: "Institutional mission to Changsha, Hunan with Italian delegation",
    position: "f4",
  },
];

export function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.stage}>
        {tiles.map((t) => (
          <div
            key={t.position}
            className={`${styles.float} ${styles[t.position]}`}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.src}
              alt=""
              loading="eager"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className={styles.cap}>{t.caption}</span>
          </div>
        ))}

        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span>About MoveEast</span>
          </div>
          <h1 id="about-hero-title" className={styles.title}>
            Bridging global industry with China&apos;s{" "}
            <em>manufacturing</em> power.
          </h1>
        </div>
      </div>
    </section>
  );
}
