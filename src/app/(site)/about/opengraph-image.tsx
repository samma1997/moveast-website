import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { team } from "@/content/team";

export const runtime = "edge";
export const alt = `About ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          fontFamily: "system-ui, sans-serif",
          color: "#0E0E0C",
          position: "relative",
        }}
      >
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
          <div style={{ width: 20, height: 20, background: "#E57B2E", borderRadius: 3 }} />
          <div style={{ width: 20, height: 20, background: "#E57B2E", borderRadius: 3, opacity: 0.7 }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, fontWeight: 500, color: "#2A2A27" }}>
          <div style={{ width: 12, height: 12, background: "#E57B2E", borderRadius: 3 }} />
          <span>ABOUT MOVEEAST</span>
        </div>

        <h1
          style={{
            fontSize: 82,
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
            margin: "28px 0 0",
            maxWidth: 960,
          }}
        >
          Bridging global industry with China&apos;s manufacturing power.
        </h1>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #D9D7CF",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {team.slice(0, 4).map((m) => (
              <div
                key={m.slug}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: "#EAE8E1",
                  border: "1px solid #D9D7CF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: 22,
                  fontWeight: 500,
                  color: "#2A2A27",
                }}
              >
                {m.initials}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 16, color: "#8C8B84", letterSpacing: "0.08em" }}>
            <span>SHENZHEN · HK · ROME · ADDIS</span>
            <span>EST. 2018</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
