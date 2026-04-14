import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    tag: "Guide",
    title: "The Complete Guide to Sourcing from China in 2026",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
    href: "/blog/sourcing-from-china-guide",
  },
  {
    tag: "Case Study",
    title: "Ethiopia-Djibouti Railway: How Cross-Border Procurement Works",
    image: "https://images.pexels.com/photos/6964174/pexels-photo-6964174.jpeg",
    href: "/blog/ethiopia-djibouti-railway",
  },
  {
    tag: "Insights",
    title: "China Sourcing Agent Fees: Complete Cost Breakdown",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    href: "/blog/china-sourcing-agent-fees",
  },
];

export function Blog() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label mb-4">Blog</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)]">
              Insights & Analysis
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--text)] border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--brand)] transition-colors"
          >
            View all <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POSTS.map((post) => (
            <Link key={post.title} href={post.href} className="reveal group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--bg-alt)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 text-[0.6875rem] font-medium bg-[var(--bg)]/90 backdrop-blur-sm text-[var(--text)] px-2.5 py-1 rounded-md">
                  {post.tag}
                </span>
              </div>
              <h3 className="text-[0.9375rem] font-semibold text-[var(--text)] mt-4 leading-snug group-hover:text-[var(--brand)] transition-colors">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-[var(--text-secondary)] mt-3">
                Parla con noi <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
