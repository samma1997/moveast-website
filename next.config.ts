import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  allowedDevOrigins: ["*.trycloudflare.com"],

  experimental: {
    // Payload richiede Node workers per alcune operazioni admin
    serverActions: { bodySizeLimit: "8mb" }, // upload media
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },

  async redirects() {
    return [
      {
        source: "/case-studies/ethiopia-railway",
        destination: "/blog/ethiopia-djibouti-railway-china-africa-procurement",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/blog",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/((?!admin|api).*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/:path*.(jpg|jpeg|png|webp|avif|svg|ico|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
