"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({
  items,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
}: {
  items: FAQItem[];
  title?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };

  return (
    <section className="border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label mb-4">{eyebrow}</p>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text)]">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="border-t border-[var(--border)] last:border-b"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group gap-6"
                  aria-expanded={open === i}
                >
                  <span className="text-[1rem] lg:text-[1.0625rem] font-semibold text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text)]">
                    {open === i ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
