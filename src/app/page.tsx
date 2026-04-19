import type { Metadata } from "next";
import Link from "next/link";
import {
  ResultsClient,
  ServicesClient,
  SectorsClient,
} from "@/components/home/HomeSectionsClient";

export const metadata: Metadata = {
  title: "MoveEast — Strategic Procurement from China",
  description:
    "MoveEast connects global enterprises with China's industrial ecosystem. Verified sourcing, technology transfer, and supply chain management from Shenzhen.",
  openGraph: {
    title: "MoveEast — Strategic Procurement from China",
    description:
      "MoveEast connects global enterprises with China's industrial ecosystem. Verified sourcing, technology transfer, and supply chain management from Shenzhen.",
    url: "https://moveasttrading.com/",
    siteName: "MoveEast",
    type: "website",
  },
  alternates: {
    canonical: "https://moveasttrading.com/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="hero" data-screen-label="Hero">
        <div className="container">

          <div className="eyebrow">
            <span className="dot" aria-hidden="true"></span>
            <span>Shenzhen</span><span className="sep">·</span>
            <span>Hong Kong</span><span className="sep">·</span>
            <span>Rome</span><span className="sep">·</span>
            <span>Addis Ababa</span>
          </div>

          <h1 className="headline">
            <span className="line">Strategic</span>
            <span className="line"><em>Procurement</em></span>
            <span className="line">from China</span>
          </h1>

          <div className="hero-lower">
            <div>
              <p className="lede">
                Connecting global enterprises with China's industrial ecosystem.
                Verified sourcing, technology transfer, and supply chain management.
              </p>
              <a href="#services" className="discover">
                Explore services
                <span className="arrow" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M5 2v6"/>
                    <path d="M2 5l3 3 3-3"/>
                  </svg>
                </span>
              </a>
            </div>

            <a className="case" href="#case">
              <div className="case-copy">
                <p>Official outsourcing agent for the Ethiopia-Djibouti Railway — managing procurement across four countries.</p>
                <div className="case-meta">
                  <span className="case-client">
                    <span className="pill" aria-hidden="true"></span>
                    Ethiopia-Djibouti Railway
                  </span>
                  <span className="case-arrow" aria-hidden="true">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="case-media">
                <div className="ph">
                  <span className="ph-label">case photo</span>
                </div>
              </div>
            </a>
          </div>

          <div className="decor tr" aria-hidden="true"><i></i><i></i><i></i></div>

        </div>
      </section>

      {/* ── RESULTS (client — carousel arrows) ──────────────────────── */}
      <ResultsClient />

      {/* ── SERVICES (client — accordion + slide) ───────────────────── */}
      <ServicesClient />

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className="about" id="about" data-screen-label="About">
        <div className="container">
          <div className="about-grid">

            <div>
              <div className="eyebrow">
                <span className="dot" aria-hidden="true"></span>
                <span>About MoveEast</span>
              </div>
              <h2 className="about-title">
                Combining Chinese industrial capability with European <em>management standards.</em>
              </h2>
              <p className="about-text">
                Move East is an international trading and procurement company based in
                Shenzhen, China. We specialize in connecting global clients with China's
                leading manufacturers through a structured, transparent, and
                project-oriented approach.
              </p>
              <p className="about-text">
                Operating across key sectors such as mobility and infrastructure, energy,
                industrial and medical equipment, and AI technologies, Move East delivers
                integrated solutions that combine commercial agility with technical precision.
              </p>
              <Link href="/about" className="pill-btn">
                About the team
                <span className="arrow" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                  </svg>
                </span>
              </Link>
            </div>

            <div className="about-media" aria-hidden="true">
              <div className="reel">
                <div className="tile"><div className="ph"></div><span className="cap">Shenzhen HQ</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Hong Kong office</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Factory audit, Dongguan</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Rome — Europe HQ</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Addis Ababa ops</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Port of Shenzhen</span></div>
                {/* duplicate for seamless loop */}
                <div className="tile"><div className="ph"></div><span className="cap">Shenzhen HQ</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Hong Kong office</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Factory audit, Dongguan</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Rome — Europe HQ</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Addis Ababa ops</span></div>
                <div className="tile"><div className="ph"></div><span className="cap">Port of Shenzhen</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTORS (client — hover image swap) ─────────────────────── */}
      <SectorsClient />

      {/* ── BLOG ─────────────────────────────────────────────────────── */}
      <section className="blog" id="blog" data-screen-label="Blog">
        <div className="container">

          <div className="blog-head">
            <div>
              <div className="eyebrow">
                <span className="dot" aria-hidden="true"></span>
                <span>From the blog</span>
              </div>
              <h2 className="blog-title">
                Insights from the <em>ground</em> in China.
              </h2>
            </div>
            <div className="blog-head-right">
              <p className="blog-lede">
                Industry analysis, procurement intelligence, and market perspectives —
                written by our team on the ground in Shenzhen.
              </p>
              <Link href="/blog" className="pill-btn" style={{ alignSelf: "flex-start" }}>
                All articles
                <span className="arrow" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <Link className="featured" href="/blog/how-to-choose-china-sourcing-agent">
            <div className="featured-media" aria-hidden="true">
              <div className="ph"></div>
              <span className="tag">cover · Shenzhen factory</span>
            </div>
            <div className="featured-copy">
              <div>
                <span className="featured-chip"><span className="dot"></span>Latest · Guide</span>
                <h3 className="featured-title">
                  The Complete Guide to Sourcing from China in 2026.
                </h3>
              </div>
              <div className="featured-meta">
                <span className="featured-date">Apr 12, 2026 · 8 min read</span>
                <span className="read">
                  Read article
                  <span className="arrow" aria-hidden="true">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </Link>

          <div className="article-row">

            <a className="article" href="#">
              <div className="article-media"><div className="ph"></div></div>
              <div className="article-body">
                <span className="article-chip"><span className="dot"></span>Quality</span>
                <h4 className="article-title">How to Verify a Chinese Supplier: The Definitive 2026 Checklist.</h4>
                <div className="article-meta">
                  <span>Mar 28, 2026 · 10 min</span>
                  <span className="arrow" aria-hidden="true">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            <Link className="article" href="/blog/ethiopia-djibouti-railway-china-africa-procurement">
              <div className="article-media"><div className="ph"></div></div>
              <div className="article-body">
                <span className="article-chip"><span className="dot"></span>Case Study</span>
                <h4 className="article-title">Ethiopia-Djibouti Railway: How Cross-Border Procurement Works.</h4>
                <div className="article-meta">
                  <span>Mar 14, 2026 · 8 min</span>
                  <span className="arrow" aria-hidden="true">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <a className="article" href="#">
              <div className="article-media"><div className="ph"></div></div>
              <div className="article-body">
                <span className="article-chip"><span className="dot"></span>Market</span>
                <h4 className="article-title">China Sourcing Agent Fees: Complete Cost Breakdown for 2026.</h4>
                <div className="article-meta">
                  <span>Feb 27, 2026 · 7 min</span>
                  <span className="arrow" aria-hidden="true">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>

          </div>

        </div>
      </section>
    </>
  );
}
