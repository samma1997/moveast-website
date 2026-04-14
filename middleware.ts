import { NextRequest, NextResponse } from "next/server";

const BLOCKED_UA = ["httrack", "wget", "scrapy", "python-requests", "dotbot", "mj12bot", "blexbot"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = (request.headers.get("user-agent") || "").toLowerCase();

  // Block scrapers
  if (BLOCKED_UA.some((b) => ua.includes(b))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Block suspicious paths
  if (/\.(sql|env|git|bak)$/i.test(pathname) || pathname.includes("wp-admin") || pathname.includes("wp-login")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Admin auth
  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get("admin_session")?.value;
    if (!session || session !== process.env.ADMIN_SECRET) {
      if (pathname !== "/admin/login") {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
