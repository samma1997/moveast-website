"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  /** Element tag (default: div) */
  as?: ElementType;
  /** Delay animation in ms (default: 0) */
  delay?: number;
  /** Y translate px iniziale (default: 24) */
  y?: number;
  /** Duration ms (default: 700) */
  duration?: number;
  className?: string;
  /** rootMargin IntersectionObserver (default: "-10% 0px") */
  rootMargin?: string;
  /** Se true, disabilita l'animazione (utile per above-the-fold) */
  disabled?: boolean;
};

/**
 * Scroll-driven reveal animation.
 * - Su browser che supportano `animation-timeline: view()` usa la .reveal CSS-only (zero JS overhead)
 * - Fallback IntersectionObserver per browser più vecchi
 * - Respect prefers-reduced-motion
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 24,
  duration = 700,
  className,
  rootMargin = "-10% 0px",
  disabled,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(disabled);

  useEffect(() => {
    if (disabled) return;
    // Se il browser supporta scroll-driven animations, usiamo il CSS (nessun JS required)
    if (
      typeof window !== "undefined" &&
      typeof CSS !== "undefined" &&
      CSS.supports("animation-timeline: view()")
    ) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin, threshold: 0 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, disabled]);

  const style: React.CSSProperties = disabled
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms var(--ease-out) ${delay}ms, transform ${duration}ms var(--ease-out) ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
