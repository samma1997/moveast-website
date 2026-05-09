import "./dashboard.css";

/**
 * Root /dashboard layout — minimal shell.
 * Auth gating happens in the nested (protected) route group layout.
 * /dashboard/login bypasses auth and uses its own page-level styling.
 */
export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dash-root">{children}</div>;
}
