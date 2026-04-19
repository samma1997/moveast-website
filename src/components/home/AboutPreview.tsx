import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./AboutPreview.module.css";

const reelTiles = [
  "Shenzhen HQ",
  "Hong Kong office",
  "Factory audit, Dongguan",
  "Rome — Europe HQ",
  "Addis Ababa ops",
  "Port of Shenzhen",
];

export function AboutPreview() {
  // Duplicate tiles per seamless loop
  const tiles = [...reelTiles, ...reelTiles];

  return (
    <section className={styles.section} id="about" aria-labelledby="about-preview-title">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <Eyebrow>About MoveEast</Eyebrow>
            <h2 id="about-preview-title" className={styles.title}>
              Combining Chinese industrial capability with European{" "}
              <em>management standards.</em>
            </h2>
            <p className={styles.text}>
              Move East is an international trading and procurement company based in Shenzhen, China. We specialize in connecting global clients with China&apos;s leading manufacturers through a structured, transparent, and project-oriented approach.
            </p>
            <p className={styles.text}>
              Operating across mobility and infrastructure, energy, industrial and medical equipment, and AI technologies, Move East delivers integrated solutions that combine commercial agility with technical precision.
            </p>
            <PillBtn href="/about">About the team</PillBtn>
          </div>

          <div className={styles.media} aria-hidden="true">
            <div className={styles.reel}>
              {tiles.map((cap, i) => (
                <div key={`${cap}-${i}`} className={styles.tile}>
                  <div className="ph" />
                  <span className={styles.tileCap}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
