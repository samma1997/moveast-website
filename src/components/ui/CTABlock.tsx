import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTABlock({
  eyebrow = "Let's talk",
  title,
  description,
  primaryLabel = "Book a 30-min consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="label mb-4">{eyebrow}</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.8vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[var(--text)]">
            {title}
          </h2>
          <p className="mt-5 text-[1rem] lg:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.875rem] font-semibold bg-[var(--text)] text-[var(--bg)] rounded-full hover:opacity-90 transition-opacity"
            >
              {primaryLabel}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
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
          <p className="mt-6 text-[0.8125rem] text-[var(--text-secondary)]">
            info@moveasttrading.com · +39 06 4200 1212 · Shenzhen · Hong Kong · Rome · Addis Ababa
          </p>
        </div>
      </div>
    </section>
  );
}
