import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow: ReactNode;
  title: ReactNode; // può contenere <em>
  lede?: ReactNode;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, lede, actions }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className={styles.headline}>{title}</h1>
          </div>
          {(lede || actions) && (
            <div className={styles.right}>
              {lede ? <p className={styles.lede}>{lede}</p> : null}
              {actions ? <div className={styles.ctas}>{actions}</div> : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
