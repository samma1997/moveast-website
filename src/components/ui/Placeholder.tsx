import type { ReactNode } from "react";

type Props = {
  /** Optional label chip (es. "case photo") */
  label?: ReactNode;
  /** Optional extra className for outer container */
  className?: string;
  /** aspectRatio CSS (es. "4/3", "1/1", "4/5"). Default "4/3" */
  aspectRatio?: string;
  children?: ReactNode;
};

/**
 * Striped placeholder — pattern standard per immagini non ancora caricate.
 * Usato mentre gli asset Instagram/cover sono in uploading.
 */
export function Placeholder({ label, className, aspectRatio = "4/3", children }: Props) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        aspectRatio,
        borderRadius: 12,
        overflow: "hidden",
        background: "var(--surface-2)",
        border: "1px solid var(--line)",
      }}
    >
      <div className="ph" />
      {label ? <span className="mono-chip" style={{ position: "absolute", left: 12, bottom: 12 }}>{label}</span> : null}
      {children}
    </div>
  );
}
