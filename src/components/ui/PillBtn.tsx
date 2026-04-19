import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./ArrowIcon";

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Pill button — variante "secondary" (surface + border, arrow accent).
 * Usata per "See all case studies", "Follow on Instagram", "About the team".
 */
export function PillBtn({ href, children, external, className, ariaLabel }: Props) {
  const classes = `pill-btn${className ? ` ${className}` : ""}`;

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
