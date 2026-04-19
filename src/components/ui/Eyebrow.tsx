import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Sostituisce il dot di default */
  icon?: ReactNode;
  className?: string;
};

export function Eyebrow({ children, icon, className }: Props) {
  return (
    <div className={`eyebrow${className ? ` ${className}` : ""}`}>
      {icon ?? <span className="dot" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
}
