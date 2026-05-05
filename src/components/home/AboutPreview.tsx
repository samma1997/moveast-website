import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillBtn } from "@/components/ui/PillBtn";
import styles from "./AboutPreview.module.css";

type ReelTile = {
  src: string;
  caption: string;
  alt: string;
};

const reel: readonly ReelTile[] = [
  {
    src: "/images/about/shenzhen-port.webp",
    caption: "Shenzhen · HQ",
    alt: "Yantian container port and Shenzhen skyline at blue hour",
  },
  {
    src: "/images/about/edr-corridor.webp",
    caption: "EDR · 752.7 km",
    alt: "Electric high-speed train crossing a viaduct along the Ethiopia-Djibouti corridor",
  },
  {
    src: "/images/about/smart-manufacturing.webp",
    caption: "Smart manufacturing",
    alt: "Robotic arms on a Chinese smart factory production line in Shenzhen",
  },
  {
    src: "/images/about/renewable-energy.webp",
    caption: "Renewable energy",
    alt: "Utility-scale solar photovoltaic farm with BESS battery storage at golden hour",
  },
];

export function AboutPreview() {
  // Duplicate per seamless loop
  const tiles = [...reel, ...reel];

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
              We operate across four industrial verticals — mobility and smart transport, renewable energy, medical devices, and industrial machinery — combining commercial agility with technical precision.
            </p>
            <PillBtn href="/about">About the team</PillBtn>
          </div>

          <div className={styles.media}>
            <div className={styles.reel}>
              {tiles.map((t, i) => (
                <div key={`${t.src}-${i}`} className={styles.tile}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span className={styles.tileCap}>{t.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
