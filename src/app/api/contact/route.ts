import { NextResponse, type NextRequest } from "next/server";
import { createHash } from "crypto";
import { contactSchema } from "@/lib/validation/contact";
import { getPayloadClient } from "@/lib/payload";
import { leadConfirmationEmail, leadNotificationEmail } from "@/lib/email/templates";
import { site } from "@/content/site";

export const runtime = "nodejs";

// Rate-limit in-memory: max 5 submissions per IP ogni 10 minuti
// In prod multi-instance sostituire con Upstash Redis o Neon table.
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function hashIp(ip: string) {
  return createHash("sha256").update(ip + (process.env.PAYLOAD_SECRET ?? "")).digest("hex").slice(0, 32);
}

function checkRateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { ok: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rl = checkRateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429, headers: { "Retry-After": String(rl.retryAfter ?? 60) } }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const lead = parsed.data;
    const ua = req.headers.get("user-agent") ?? undefined;

    // Persist to Payload
    const payload = await getPayloadClient();
    const created = await payload.create({
      collection: "leads",
      data: {
        name: lead.name,
        email: lead.email,
        company: lead.company || undefined,
        role: lead.role || undefined,
        sector: lead.sector || undefined,
        volume: lead.volume || undefined,
        message: lead.message,
        source: "contact-form",
        status: "new",
        ipHash: hashIp(ip),
        userAgent: ua?.slice(0, 200),
      },
    });

    // Send emails (only if Resend configured — Payload handles gracefully otherwise)
    if (process.env.RESEND_API_KEY) {
      const confirmation = leadConfirmationEmail(lead);
      const notification = leadNotificationEmail(
        lead,
        typeof created.score === "number" ? created.score : 20
      );

      const emailPromises: Promise<unknown>[] = [];

      emailPromises.push(
        payload.sendEmail({
          to: lead.email,
          subject: confirmation.subject,
          html: confirmation.html,
          text: confirmation.text,
        }).catch((err) => {
          console.error("[contact] lead confirmation email failed:", err);
        })
      );

      const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || site.email;
      emailPromises.push(
        payload.sendEmail({
          to: adminEmail,
          subject: notification.subject,
          html: notification.html,
          text: notification.text,
          replyTo: lead.email,
        }).catch((err) => {
          console.error("[contact] admin notification email failed:", err);
        })
      );

      // Non-blocking — fire-and-forget
      Promise.allSettled(emailPromises);
    }

    return NextResponse.json({ ok: true, id: created.id }, { status: 201 });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
