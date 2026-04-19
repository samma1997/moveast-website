import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./AboutHero.module.css";

const tiles = [
  { key: "shenzhen", caption: "Shenzhen HQ", className: "f1" },
  { key: "port", caption: "Port of Shenzhen", className: "f2" },
  { key: "rome", caption: "Rome office", className: "f3" },
  { key: "addis", caption: "Addis Ababa ops", className: "f4" },
] as const;

export function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.inner}>
        <div className={styles.floatGrid} aria-hidden="true">
          {tiles.map((t) => (
            <div
              key={t.key}
              className={`${styles.float} ${styles[t.className]}`}
            >
              <div className="ph" />
              <span className={styles.cap}>{t.caption}</span>
            </div>
          ))}
        </div>

        <div className={styles.copy}>
          <Eyebrow>About MoveEast</Eyebrow>
          <h1 id="about-hero-title" className={styles.title}>
            Bridging global industry with China&apos;s{" "}
            <em>manufacturing</em> power.
          </h1>
        </div>
      </div>
    </section>
  );
}
