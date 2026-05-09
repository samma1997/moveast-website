import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getPayloadClient } from "@/lib/payload";
import { LoginForm } from "@/components/dashboard/LoginForm";
import styles from "./login.module.css";

export const metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default async function DashboardLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const params = await searchParams;
  // If already logged in with sufficient role, send to dashboard
  try {
    const payload = await getPayloadClient();
    const { user } = await payload.auth({ headers: await headers() });
    const role = (user as { role?: string } | null)?.role;
    if (user && (role === "admin" || role === "editor")) {
      redirect("/dashboard");
    }
  } catch {
    // ignore — show login form
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 22 22" fill="none">
              <rect x="3" y="3" width="7" height="7" fill="currentColor" rx="1.2" />
              <rect x="12" y="3" width="7" height="7" fill="var(--dash-accent)" rx="1.2" />
              <rect x="3" y="12" width="7" height="7" fill="var(--dash-accent)" fillOpacity=".6" rx="1.2" />
              <rect x="12" y="12" width="7" height="7" fill="currentColor" rx="1.2" />
            </svg>
          </span>
          <h1 className={styles.title}>Move East · Dashboard</h1>
          <p className={styles.subtitle}>
            Internal access for editors and admins.
          </p>
        </div>

        {params.reason === "insufficient" && (
          <div className={styles.alert}>
            Your account does not have access to the dashboard. Contact an
            admin to upgrade your role.
          </div>
        )}

        <LoginForm />

        <p className={styles.footer}>
          <a href="/admin">Use Payload CMS login</a> ·{" "}
          <a href="/">Back to site</a>
        </p>
      </div>
    </div>
  );
}
