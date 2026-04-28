import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./ServicesMethod.module.css";

type Step = {
  title: string;
  text: string;
  tag: string;
};

const steps: readonly Step[] = [
  {
    title: "Brief & scoping",
    text: "Written specification: product, market, volume, timeline, and compliance targets fixed before any supplier outreach.",
    tag: "CE · MDR · FDA · GCC",
  },
  {
    title: "Supplier shortlist",
    text: "Pre-qualified Chinese manufacturers from our direct network — scored on spec match, capacity, and price band.",
    tag: "Pearl River Delta",
  },
  {
    title: "On-site audit",
    text: "Physical factory audits across Guangdong, Jiangsu, Zhejiang, and Shandong — photo, video, scored risk matrix.",
    tag: "Not a desk review",
  },
  {
    title: "Contract & terms",
    text: "Mandarin contracts with international arbitration clauses. One buyer contract — Move East holds all upstream Chinese paper.",
    tag: "Mandarin · arbitration",
  },
  {
    title: "Production & delivery",
    text: "QC at 3 gates, multi-modal freight from Shenzhen, customs clearance at origin and destination, last-mile to project site.",
    tag: "Shenzhen · HK · Rome · Addis",
  },
];

export function ServicesMethod() {
  return (
    <section className={styles.section} aria-labelledby="svc-method-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Eyebrow>Methodology · 5 steps</Eyebrow>
            <h2 id="svc-method-title" className={styles.title}>
              From brief to <em>delivery</em>, run as one operation.
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.lede}>
              The same five-step process underpins every engagement — strategic
              sourcing, technology transfer, and supply chain management. Priced,
              documented, and executed against milestones across our four offices
              in Shenzhen, Hong Kong, Rome, and Addis Ababa.
            </p>
          </div>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <article key={s.title} className={styles.step}>
              <div className={styles.num}>Step {String(i + 1).padStart(2, "0")}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
              <div className={styles.tag}>{s.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
