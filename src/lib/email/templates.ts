import { site } from "@/content/site";

/**
 * Email HTML templates — semplici, inline styles per compatibilità client email.
 * Quando Resend è attivo, questi wrap il contenuto.
 */

type LeadInput = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  sector?: string;
  volume?: string;
  message: string;
};

export function leadConfirmationEmail(lead: LeadInput) {
  return {
    subject: `Thanks for reaching out to ${site.name}`,
    html: `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, system-ui, sans-serif; background: #F4F3EF; margin: 0; padding: 32px;">
  <table role="presentation" style="max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #D9D7CF; border-radius: 16px; padding: 32px;">
    <tr>
      <td>
        <div style="display: inline-block; background: #E57B2E; width: 14px; height: 14px; border-radius: 3px; margin-bottom: 16px;"></div>
        <h1 style="font-size: 24px; letter-spacing: -0.02em; color: #0E0E0C; margin: 0 0 16px;">Thanks, ${lead.name}.</h1>
        <p style="font-size: 15px; line-height: 1.55; color: #2A2A27; margin: 0 0 16px;">
          We've received your message and our team in Shenzhen will be in touch within <b>24–48 hours</b>.
        </p>
        <p style="font-size: 15px; line-height: 1.55; color: #2A2A27; margin: 0 0 24px;">
          In the meantime, feel free to explore our <a href="${site.url}/services" style="color: #0E0E0C; font-weight: 500;">services</a> and <a href="${site.url}/blog/ethiopia-djibouti-railway-china-africa-procurement" style="color: #0E0E0C; font-weight: 500;">flagship case study</a>.
        </p>
        <div style="border-top: 1px solid #D9D7CF; padding-top: 24px;">
          <p style="font-size: 12px; color: #8C8B84; line-height: 1.6; margin: 0;">
            <b style="color: #0E0E0C;">${site.name}</b><br/>
            ${site.offices.map((o) => `${o.city}${o.label === "HQ" ? " (HQ)" : ""}`).join(" · ")}<br/>
            ${site.email} · ${site.phone}
          </p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
    text: `Thanks for reaching out to ${site.name}.

Hi ${lead.name} — we've received your message and our team in Shenzhen will be in touch within 24–48 hours.

In the meantime: ${site.url}/services · ${site.url}/blog/ethiopia-djibouti-railway-china-africa-procurement

${site.name} · ${site.offices.map((o) => o.city).join(" · ")}
${site.email} · ${site.phone}`,
  };
}

export function leadNotificationEmail(lead: LeadInput, score: number) {
  const meta = [
    lead.company && `Company: ${lead.company}`,
    lead.role && `Role: ${lead.role}`,
    lead.sector && `Sector: ${lead.sector}`,
    lead.volume && `Volume: ${lead.volume}`,
  ].filter(Boolean);

  return {
    subject: `[Lead · score ${score}] ${lead.name} — ${lead.sector ?? "General"}`,
    html: `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, system-ui, sans-serif; background: #F4F3EF; padding: 32px;">
  <div style="max-width: 640px; margin: 0 auto; background: #fff; border: 1px solid #D9D7CF; border-radius: 16px; padding: 32px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <span style="font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #8C8B84;">New lead · score ${score}</span>
    </div>
    <h2 style="font-size: 22px; letter-spacing: -0.02em; color: #0E0E0C; margin: 0 0 8px;">${lead.name}</h2>
    <a href="mailto:${lead.email}" style="color: #E57B2E; font-weight: 500; font-size: 14px;">${lead.email}</a>
    ${meta.length ? `<div style="margin-top: 16px; padding: 16px; background: #F4F3EF; border-radius: 10px; font-size: 13px; color: #2A2A27; line-height: 1.6;">${meta.join("<br/>")}</div>` : ""}
    <h3 style="font-size: 14px; margin: 24px 0 8px; color: #2A2A27;">Message</h3>
    <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.55; color: #0E0E0C; margin: 0; padding: 16px; background: #F4F3EF; border-radius: 10px;">${escapeHtml(lead.message)}</p>
    <p style="margin-top: 24px;">
      <a href="${site.url}/admin/collections/leads" style="display: inline-block; background: #0E0E0C; color: #F4F3EF; padding: 10px 16px; border-radius: 999px; font-size: 13px; font-weight: 500;">Open in admin →</a>
    </p>
  </div>
</body>
</html>
    `.trim(),
    text: `New lead · score ${score}
Name: ${lead.name}
Email: ${lead.email}
${meta.join("\n")}

Message:
${lead.message}

Open: ${site.url}/admin/collections/leads`,
  };
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
