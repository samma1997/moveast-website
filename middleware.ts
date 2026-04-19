import { NextResponse, type NextRequest } from "next/server";

const BLOCKED_UA = ["httrack", "wget", "scrapy", "python-requests", "dotbot", "mj12bot", "blexbot"];

/**
 * Edge middleware:
 *  - Blocca scrapers conosciuti
 *  - Blocca path WP/env/sql
 *  - Aggiunge Content-Security-Policy alle pagine pubbliche
 *  - L'auth /admin è gestita internamente da Payload (lato app + API) → non serve redirect qui
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  if (BLOCKED_UA.some((b) => ua.includes(b))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (/\.(sql|env|git|bak)$/i.test(pathname) || pathname.includes("wp-admin") || pathname.includes("wp-login")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const res = NextResponse.next();

  // CSP: solo sulle pagine pubbliche, non admin/api (Payload admin richiede unsafe inline extra)
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api")) {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://*.public.blob.vercel-storage.com https://images.pexels.com",
      "connect-src 'self' https://vitals.vercel-insights.com https://*.pusher.com wss://*.pusher.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");
    res.headers.set("Content-Security-Policy", csp);
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.svg|manifest.webmanifest).*)"],
};
