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
    src: "/images/about/mattarella-guangzhou.webp",
    caption: "Mattarella · Guangzhou 2024",
    alt: "Meeting with Italian President Sergio Mattarella in Guangzhou",
  },
  {
    src: "/images/about/cicc-confindustria-beijing.webp",
    caption: "CICC · Confindustria Beijing",
    alt: "CICC-Confindustria China Roundtable in Beijing",
  },
  {
    src: "/images/about/shenzhen-italy-business.webp",
    caption: "Shenzhen-Italy Business 2024",
    alt: "Shenzhen-Italy Business Exchange Seminar",
  },
  {
    src: "/images/about/parliamentary-hearing-roma.webp",
    caption: "Montecitorio · Roma 2025",
    alt: "Parliamentary hearing at Palazzo Montecitorio as CICC board member",
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

          <div className={styles.media} aria-hidden="true">
            <div className={styles.reel}>
              {tiles.map((t, i) => (
                <div key={`${t.src}-${i}`} className={styles.tile}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.src}
                    alt=""
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
