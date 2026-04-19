import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight } from "@/components/ui/ArrowIcon";
import styles from "./ServiceCard.module.css";

type Props = {
  href: string;
  index: number;
  title: string;
  description: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export function ServiceCard({ href, index, title, description, icon: Icon }: Props) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.ico} aria-hidden="true">
        {Icon ? <Icon /> : null}
      </span>
      <div className={styles.body}>
        <span className={styles.num}>{String(index).padStart(2, "0")}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <span className={styles.arrow} aria-hidden="true"><ArrowUpRight /></span>
    </Link>
  );
}
