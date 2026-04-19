type Props = {
  /** Variante posizionale — classe CSS aggiuntiva per posizionamento (es. "tr", "br", "foot") */
  variant?: string;
  /** Numero di quadratini (default 3) */
  count?: number;
  className?: string;
};

/**
 * Decor dots — 3 quadratini arancio che decorano hero, sezioni, footer.
 * Posizionamento assoluto tramite classe variant (es. "tr" = top-right).
 * Il colore accent e il pattern di opacità sono in globals.css (.decor).
 */
export function Decor({ variant = "tr", count = 3, className }: Props) {
  return (
    <div className={`decor ${variant}${className ? ` ${className}` : ""}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}
