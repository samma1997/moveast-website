import { requireDashboardUser } from "@/lib/auth/dashboard-auth";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default async function ProtectedDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireDashboardUser();

  return (
    <DashboardShell
      user={{
        id: String(user.id),
        email: user.email,
        name: user.name,
        role: user.role ?? "viewer",
      }}
    >
      {children}
    </DashboardShell>
  );
}
