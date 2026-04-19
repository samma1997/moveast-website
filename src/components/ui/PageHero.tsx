import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="label mb-6">{eyebrow}</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-[var(--text)] max-w-5xl">
          {title}
        </h1>
        <p className="mt-8 text-[1rem] lg:text-[1.125rem] text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {subtitle}
        </p>
        {(primaryLabel || secondaryLabel) && (
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {primaryLabel && primaryHref && (
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.875rem] font-semibold bg-[var(--text)] text-[var(--bg)] rounded-full hover:opacity-90 transition-opacity"
              >
                {primaryLabel}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.875rem] font-medium text-[var(--text)] border border-[var(--border)] rounded-full hover:border-[var(--text)] transition-colors"
              >
                {secondaryLabel}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
