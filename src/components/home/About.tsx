import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="label mb-4">Chi Siamo</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
          {/* Left — Text */}
          <div className="reveal">
            <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)]">
              Combining Chinese industrial capability with European management standards
            </h2>
            <p className="mt-6 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
              Move East is an international trading and procurement company based in Shenzhen, China. We specialize in connecting global clients with China&apos;s leading manufacturers through a structured, transparent, and project-oriented approach.
            </p>
            <p className="mt-4 text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">
              Operating across key sectors such as mobility and infrastructure, energy, industrial and medical equipment, and artificial intelligence technologies, Move East delivers integrated solutions that combine commercial agility with technical precision.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 mt-8 text-[0.875rem] font-semibold text-[var(--text)] border border-[var(--border)] px-5 py-2.5 rounded-lg hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors"
            >
              Parla con noi <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right — Image + Card */}
          <div className="reveal">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg-alt)]">
              <Image
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
                alt="Shenzhen skyline — Move East Trading headquarters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
