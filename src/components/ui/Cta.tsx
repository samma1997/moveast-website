import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./ArrowIcon";

type Props = {
  href: string;
  children: ReactNode;
  /** Se true, apre in nuova tab con rel="noopener noreferrer" */
  external?: boolean;
  className?: string;
  /** aria-label custom — altrimenti usa children */
  ariaLabel?: string;
};

/**
 * CTA principale (bottone scuro con arrow accent).
 * Usa `<Link>` Next.js per link interni, `<a>` per esterni.
 */
export function Cta({ href, children, external, className, ariaLabel }: Props) {
  const classes = `cta${className ? ` ${className}` : ""}`;

  const content = (
    <>
      {children}
      <span className="arrow" aria-hidden="true">
        <ArrowUpRight />
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
