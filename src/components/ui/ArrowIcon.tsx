/**
 * SVG icons — centralizzate. Accent arrow usata in CTA, pill-btn, discover, sector arrows.
 * Export named components, nessuna default per tree-shaking.
 */

import type { SVGProps } from "react";

/** Arrow diagonale (up-right) — usata in CTA "Let's talk" e arrow buttons */
export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 8L8 2" />
      <path d="M3 2h5v5" />
    </svg>
  );
}

/** Arrow down (scroll indicator — "Explore services") */
export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 2v6" />
      <path d="M2 5l3 3 3-3" />
    </svg>
  );
}

/** Chevron down — navigation dropdowns */
export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 4l3 3 3-3" />
    </svg>
  );
}

/** Arrow up (per team-foot) */
export function ArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 8V2" />
      <path d="M2 5l3-3 3 3" />
    </svg>
  );
}

/** X close */
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 2l10 10M12 2L2 12" />
    </svg>
  );
}

/** Sun (light theme) */
export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

/** Moon (dark theme) */
export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
