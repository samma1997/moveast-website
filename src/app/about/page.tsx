import type { Metadata } from "next";
import { TimelineClient } from "@/components/about/TimelineClient";

export const metadata: Metadata = {
  title: "About — MoveEast",
  description:
    "MoveEast is an international trading and procurement company based in Shenzhen. Founded by Alessandro Petrini in 2018, operating across three continents.",
  openGraph: {
    title: "About — MoveEast",
    description:
      "MoveEast is an international trading and procurement company based in Shenzhen. Founded by Alessandro Petrini in 2018, operating across three continents.",
    url: "https://moveasttrading.com/about",
    siteName: "MoveEast",
    type: "website",
  },
  alternates: {
    canonical: "https://moveasttrading.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── ABOUT HERO ──────────────────────────────────────────────── */}
      <section className="about-hero" data-screen-label="About Hero">
        <div className="about-hero-inner">

          <div className="float-grid">
            <div className="float f1" aria-hidden="true"><div className="ph"></div><span className="cap">Shenzhen HQ</span></div>
            <div className="float f2" aria-hidden="true"><div className="ph"></div><span className="cap">Port of Shenzhen</span></div>
            <div className="float f3" aria-hidden="true"><div className="ph"></div><span className="cap">Rome office</span></div>
            <div className="float f4" aria-hidden="true"><div className="ph"></div><span className="cap">Addis Ababa ops</span></div>
            <div className="float f5" aria-hidden="true"><div className="ph"></div><span className="cap">Factory audit</span></div>
          </div>

          <div className="about-hero-copy">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span>About MoveEast</span>
            </div>
            <h1 className="about-hero-title">
              Bridging global industry with China&apos;s <em>manufacturing</em> power.
            </h1>
          </div>
        </div>
      </section>

      {/* ── TIMELINE (client — scroll carousel) ─────────────────────── */}
      <TimelineClient />

      {/* ── INSTAGRAM ───────────────────────────────────────────────── */}
      <section className="ig" id="instagram" data-screen-label="Instagram">
        <div className="container">

          <div className="ig-head">
            <div>
              <div className="eyebrow">
                <span className="dot" aria-hidden="true"></span>
                <span>Latest from Instagram</span>
              </div>
              <h2 className="ig-title">
                The view from <em>Shenzhen</em>, updated daily.
              </h2>
            </div>
            <div className="ig-head-r">
              <p className="ig-lede">
                Institutional meetings, factory visits, and industry events. Follow
                <b> @petrini.alex</b> for a behind-the-scenes look.
              </p>
              <a href="https://www.instagram.com/petrini.alex/" target="_blank" rel="noopener" className="pill-btn">
                Follow on Instagram
                <span className="arrow" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="ig-grid" id="igGrid">

            <a className="ig-card" href="https://www.instagram.com/petrini.alex/" target="_blank" rel="noopener">
              <div className="ig-top">
                <div className="ig-who">
                  <span className="ig-avatar"><span className="inner">AP</span></span>
                  <span className="ig-handle"><b>petrini.alex</b><span>Shanghai · CMEF 2026</span></span>
                </div>
                <span className="ig-follow">Follow</span>
              </div>
              <div className="ig-media">
                <div className="ph"></div>
                <span className="type" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/>
                  </svg>
                </span>
                <span className="date">Apr 10</span>
              </div>
              <div className="ig-meta">
                <span className="stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  9
                </span>
                <span className="stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  2
                </span>
                <span className="spacer"></span>
                <time dateTime="2026-04-10">10 APR</time>
              </div>
              <p className="ig-cap"><b>petrini.alex</b>Oggi alla CMEF di Shanghai, una delle più grandi fiere al mondo nel settore medicale. Seminario &quot;What Italy Can Offer to China&quot;.</p>
            </a>

            <a className="ig-card" href="https://www.instagram.com/petrini.alex/" target="_blank" rel="noopener">
              <div className="ig-top">
                <div className="ig-who">
                  <span className="ig-avatar"><span className="inner">AP</span></span>
                  <span className="ig-handle"><b>petrini.alex</b><span>Guangzhou · CICC Spring Gala</span></span>
                </div>
                <span className="ig-follow">Follow</span>
              </div>
              <div className="ig-media">
                <div className="ph"></div>
                <span className="type" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/>
                  </svg>
                </span>
                <span className="date">Apr 3</span>
              </div>
              <div className="ig-meta">
                <span className="stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  14
                </span>
                <span className="stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  3
                </span>
                <span className="spacer"></span>
                <time dateTime="2026-04-03">3 APR</time>
              </div>
              <p className="ig-cap"><b>petrini.alex</b>Spring Gala della Camera di Commercio Italiana in Cina a Guangzhou 🇮🇹🇨🇳 Al Four Seasons Hotel, tra relazioni e scambi.</p>
            </a>

            <a className="ig-card" href="https://www.instagram.com/petrini.alex/" target="_blank" rel="noopener">
              <div className="ig-top">
                <div className="ig-who">
                  <span className="ig-avatar"><span className="inner">AP</span></span>
                  <span className="ig-handle"><b>petrini.alex</b><span>Shenzhen · BYD HQ</span></span>
                </div>
                <span className="ig-follow">Follow</span>
              </div>
              <div className="ig-media">
                <div className="ph"></div>
                <span className="type" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/>
                  </svg>
                </span>
                <span className="date">Feb 14</span>
              </div>
              <div className="ig-meta">
                <span className="stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  7
                </span>
                <span className="stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  1
                </span>
                <span className="spacer"></span>
                <time dateTime="2026-02-14">14 FEB</time>
              </div>
              <p className="ig-cap"><b>petrini.alex</b>Tornato al quartier generale di BYD a Shenzhen, accompagnando la delegazione della Camera di Commercio Italiana in Cina.</p>
            </a>

          </div>

          <div className="ig-foot">
            <a href="https://www.instagram.com/petrini.alex/" target="_blank" rel="noopener" className="pill-btn">
              See all posts on Instagram
              <span className="arrow" aria-hidden="true">
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M2 8L8 2"/><path d="M3 2h5v5"/>
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
