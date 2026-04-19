import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = site.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default OG image per la root (/).
 * Pagine singole possono definire il proprio opengraph-image.tsx (Next.js 13+ convention).
 */
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4F3EF",
          padding: 64,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, sans-serif",
          color: "#0E0E0C",
          position: "relative",
        }}
      >
        {/* decor squares top right */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            display: "flex",
            gap: 8,
          }}
        >
          <div style={{ width: 20, height: 20, background: "#E57B2E", borderRadius: 3, opacity: 0.4 }} />
          <div style={{ width: 20, height: 20, background: "#E57B2E", borderRadius: 3, opacity: 1 }} />
          <div style={{ width: 20, height: 20, background: "#E57B2E", borderRadius: 3, opacity: 0.7 }} />
        </div>

        {/* top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 20,
            fontWeight: 500,
            color: "#2A2A27",
          }}
        >
          <div style={{ width: 14, height: 14, background: "#E57B2E", borderRadius: 3 }} />
          <span>
            {site.offices.map((o) => o.city).join(" · ")}
          </span>
        </div>

        {/* middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <h1
            style={{
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              margin: 0,
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </h1>
          <p
            style={{
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.4,
              color: "#2A2A27",
              margin: 0,
              maxWidth: 900,
            }}
          >
            Strategic sourcing · Technology transfer · Supply chain management
          </p>
        </div>

        {/* bottom: brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #D9D7CF",
            paddingTop: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 2 }}>
              <div style={{ width: 18, height: 18, background: "#0E0E0C", borderRadius: 2 }} />
              <div style={{ width: 18, height: 18, background: "#E57B2E", borderRadius: 2 }} />
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              <div style={{ width: 18, height: 18, background: "#E57B2E", opacity: 0.6, borderRadius: 2 }} />
              <div style={{ width: 18, height: 18, background: "#0E0E0C", borderRadius: 2 }} />
            </div>
            <span style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", marginLeft: 8 }}>
              {site.name}
            </span>
          </div>
          <span style={{ fontSize: 18, color: "#8C8B84", letterSpacing: "0.08em" }}>
            MOVEASTTRADING.COM
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
