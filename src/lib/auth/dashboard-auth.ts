/**
 * Auth helpers per la dashboard custom (route group `(dashboard)`).
 * Riusa Payload session — nessun ADMIN_SECRET secondario.
 */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";
import { getPayloadClient } from "@/lib/payload";

export type DashboardRole = "admin" | "editor" | "viewer";

export type DashboardUser = {
  id: string | number;
  email: string;
  name?: string;
  role?: DashboardRole;
};

const ALLOWED_ROLES: DashboardRole[] = ["admin", "editor"];

/**
 * Per Server Components / Layouts — redirige a /dashboard/login se non autenticato.
 * Da chiamare nel layout root della dashboard.
 */
export async function requireDashboardUser(
  redirectTo = "/dashboard/login"
): Promise<DashboardUser> {
  const payload = await getPayloadClient();
  const { user } = await payload.auth({ headers: await headers() });

  if (!user) {
    redirect(redirectTo);
  }

  const role = (user as { role?: DashboardRole }).role;
  if (!role || !ALLOWED_ROLES.includes(role)) {
    redirect(`${redirectTo}?reason=insufficient`);
  }

  return {
    id: user.id as string | number,
    email: (user as { email?: string }).email ?? "",
    name: (user as { name?: string }).name,
    role,
  };
}

/**
 * Per API routes — ritorna user o NextResponse di errore.
 * Usage:
 *   const auth = await requireDashboardUserApi();
 *   if (auth instanceof NextResponse) return auth;
 *   const user = auth;
 */
export async function requireDashboardUserApi(): Promise<
  DashboardUser | NextResponse
> {
  const payload = await getPayloadClient();
  const { user } = await payload.auth({ headers: await headers() });

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const role = (user as { role?: DashboardRole }).role;
  if (!role || !ALLOWED_ROLES.includes(role)) {
    return NextResponse.json(
      { error: "Forbidden — admin or editor role required" },
      { status: 403 }
    );
  }

  return {
    id: user.id as string | number,
    email: (user as { email?: string }).email ?? "",
    name: (user as { name?: string }).name,
    role,
  };
}

/**
 * Per cron routes — verifica Authorization: Bearer <CRON_SECRET>
 */
export function requireCronSecret(req: NextRequest): NextResponse | null {
  const expected = process.env.CRON_SECRET;
  if (!expected) {
    return NextResponse.json(
      { error: "CRON_SECRET not configured" },
      { status: 500 }
    );
  }
  const auth = req.headers.get("authorization") ?? "";
  if (auth !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
