/**
 * Icone 24x24 per mega menu Services + Sectors.
 * Mappate per slug — si può estendere aggiungendo nuovi servizi/settori.
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function SourcingIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function TechTransferIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function SupplyChainIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2" y="7" width="14" height="10" rx="1" />
      <path d="M16 10h4l2 3v4h-6z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}

export function MobilityIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="5" width="14" height="14" rx="1" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

export function EnergyIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

export function MedicalIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 9l3-5h12l3 5" />
      <path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" />
      <path d="M8 14h8" />
    </svg>
  );
}

export function IndustrialIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 13l1.5-5a2 2 0 0 1 2-1.5h7a2 2 0 0 1 2 1.5L19 13" />
      <rect x="3" y="13" width="18" height="6" rx="1" />
      <circle cx="7.5" cy="19" r="1.5" />
      <circle cx="16.5" cy="19" r="1.5" />
    </svg>
  );
}

export function ListIcon(p: IconProps) {
  return (
    <svg {...base} {...p} viewBox="0 0 16 16" strokeWidth={1.6}>
      <rect x="2" y="3" width="12" height="10" rx="1" />
      <path d="M2 6h12" />
    </svg>
  );
}

/** Map slug → icon component */
export const serviceIcons = {
  "sourcing": SourcingIcon,
  "technology-transfer": TechTransferIcon,
  "supply-chain": SupplyChainIcon,
} as const;

export const sectorIcons = {
  "mobility": MobilityIcon,
  "energy": EnergyIcon,
  "medical": MedicalIcon,
  "industrial": IndustrialIcon,
} as const;
