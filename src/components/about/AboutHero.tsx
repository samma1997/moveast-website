import styles from "./AboutHero.module.css";

type Tile = {
  src: string;
  caption: string;
  alt: string;
  position: "f1" | "f2" | "f3" | "f4";
};

const tiles: readonly Tile[] = [
  {
    src: "/images/about/shenzhen-port.webp",
    caption: "Shenzhen · HQ",
    alt: "Yantian container port and Shenzhen skyline at blue hour",
    position: "f1",
  },
  {
    src: "/images/about/hong-kong-branch.webp",
    caption: "Hong Kong · Branch",
    alt: "Victoria Harbour skyline at sunset — Hong Kong office",
    position: "f2",
  },
  {
    src: "/images/about/rome-europe.webp",
    caption: "Rome · Europe",
    alt: "Rome historic skyline with St. Peter's Basilica — European office",
    position: "f3",
  },
  {
    src: "/images/about/addis-ababa-africa.webp",
    caption: "Addis Ababa · Africa",
    alt: "Addis Ababa modern downtown skyline — African office",
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
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.src}
              alt={t.alt}
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
            Connecting markets,{" "}
            <em>technologies</em>, and people.
          </h1>
        </div>
      </div>
    </section>
  );
}
