"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

type Props = {
  user: { name?: string; email: string; role: string };
  open: boolean;
  onClose: () => void;
};

const NAV: { href: string; label: string; icon: React.ReactNode; section?: string }[] = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: <IconGrid />,
  },
  {
    href: "/dashboard/generate",
    label: "Generate Article",
    icon: <IconSparkles />,
    section: "Content",
  },
  {
    href: "/dashboard/articles",
    label: "Articles",
    icon: <IconList />,
  },
  {
    href: "/dashboard/seo",
    label: "SEO",
    icon: <IconChart />,
    section: "Insights",
  },
  {
    href: "/dashboard/ai-visibility",
    label: "AI Visibility",
    icon: <IconRobot />,
  },
];

export function Sidebar({ user, open, onClose }: Props) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className={styles.overlay}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Move East home">
            <span className={styles.logoMark} aria-hidden="true">
              <svg viewBox="0 0 22 22" fill="none">
                <rect x="3" y="3" width="7" height="7" fill="currentColor" rx="1.2" />
                <rect x="12" y="3" width="7" height="7" fill="var(--dash-accent)" rx="1.2" />
                <rect x="3" y="12" width="7" height="7" fill="var(--dash-accent)" fillOpacity=".6" rx="1.2" />
                <rect x="12" y="12" width="7" height="7" fill="currentColor" rx="1.2" />
              </svg>
            </span>
            <span>MoveEast</span>
          </Link>
          <span className={styles.badge}>Dashboard</span>
        </div>

        <nav className={styles.nav}>
          {NAV.map((item, i) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <div key={item.href}>
                {item.section && (
                  <div className={styles.section}>{item.section}</div>
                )}
                <Link
                  href={item.href}
                  className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                  onClick={onClose}
                >
                  <span className={styles.navIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div className={styles.footer}>
          <div className={styles.user}>
            <div className={styles.userAvatar} aria-hidden="true">
              {(user.name ?? user.email).charAt(0).toUpperCase()}
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user.name ?? user.email}</span>
              <span className={styles.userRole}>{user.role}</span>
            </div>
          </div>
          <div className={styles.footerActions}>
            <Link href="/" className={styles.footerLink}>
              View site →
            </Link>
            <a href="/admin" className={styles.footerLink}>
              Payload CMS
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}
function IconSparkles() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconList() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function IconRobot() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}
