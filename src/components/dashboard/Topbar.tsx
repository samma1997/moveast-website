"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Topbar.module.css";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/generate": "Generate Article",
  "/dashboard/articles": "Articles",
  "/dashboard/seo": "SEO Dashboard",
  "/dashboard/ai-visibility": "AI Visibility",
};

function getPageTitle(pathname: string): string {
  const exact = PAGE_TITLES[pathname];
  if (exact) return exact;
  const match = Object.keys(PAGE_TITLES)
    .filter((p) => pathname.startsWith(p))
    .sort((a, b) => b.length - a.length)[0];
  return (match && PAGE_TITLES[match]) || "Dashboard";
}

export function Topbar({
  user,
  onToggleSidebar,
}: {
  user: { name?: string; email: string };
  onToggleSidebar: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const title = getPageTitle(pathname);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/users/logout", { method: "POST" });
    } catch {
      // ignore
    }
    router.push("/dashboard/login");
    router.refresh();
  }

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.hamburger}
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.right}>
        <span className={styles.userEmail}>{user.email}</span>
        <button
          type="button"
          className={styles.logoutBtn}
          onClick={handleLogout}
          disabled={loggingOut}
        >
          {loggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </header>
  );
}
