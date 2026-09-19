/**
 * POST /api/contact
 *
 * Receives the Contact form submission, validates it server-side, and
 * emails it to the SalesFluance team through Resend's REST API.
 *
 * Required environment variables (server-only, never NEXT_PUBLIC_):
 *   RESEND_API_KEY       Resend API key.
 *   CONTACT_TO_EMAIL     Inbox that receives enquiries.
 *   CONTACT_FROM_EMAIL   Sender on a domain verified in Resend,
 *                        e.g. "SalesFluance <enquiries@salesfluance.com>".
 *
 * Uses fetch against the Resend API directly, so no new dependency is
 * added to the project.
 */

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = {
  fullName: 120,
  company: 160,
  email: 254,
  website: 300,
  service: 80,
  companySize: 60,
  opportunity: 5000,
} as const;

const SERVICES = [
  "Lead Generation",
  "Demand Generation",
  "Account-Based Marketing",
  "Partnership & Market Expansion",
  "Revenue Intelligence",
  "AI-Assisted Sales & Marketing",
  "Other",
];

const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,001+ employees",
];

type Field = keyof typeof LIMITS;
type Submission = Record<Field, string>;

// Best-effort, per-instance rate limit. Not a substitute for a shared
// store (serverless instances don't share memory) but blunts simple bursts.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validate(data: Submission): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};

  if (!data.fullName) errors.fullName = "Please enter your full name.";
  if (!data.company) errors.company = "Please enter your company name.";

  if (!data.email) {
    errors.email = "Please enter your business email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid business email.";
  }

  if (data.website) {
    try {
      const url = new URL(
        /^https?:\/\//i.test(data.website)
          ? data.website
          : `https://${data.website}`,
      );
      if (!/^https?:$/.test(url.protocol)) throw new Error("protocol");
    } catch {
      errors.website = "Please enter a valid website.";
    }
  }

  if (!SERVICES.includes(data.service)) {
    errors.service = "Please select an area.";
  }
  if (!COMPANY_SIZES.includes(data.companySize)) {
    errors.companySize = "Please select your company size.";
  }

  if (!data.opportunity) {
    errors.opportunity = "Please tell us a little about the opportunity.";
  } else if (data.opportunity.length < 20) {
    errors.opportunity =
      "Please provide a little more context about the opportunity.";
  }

  return errors;
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(d: Submission, receivedAt: string) {
  const rows: [string, string][] = [
    ["Name", d.fullName],
    ["Company", d.company],
    ["Work email", d.email],
    ["Website", d.website || "Not provided"],
    ["Area of interest", d.service],
    ["Company size", d.companySize],
  ];

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#F6F8FB;font-family:Arial,Helvetica,sans-serif;color:#0F172A;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6F8FB;padding:32px 16px;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:#0A0E14;padding:28px 32px;">
              <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#22D3EE;font-weight:bold;">SalesFluance</div>
              <div style="margin-top:10px;font-size:22px;font-weight:bold;color:#FFFFFF;">New website enquiry</div>
              <div style="margin-top:6px;font-size:13px;color:#94A3B8;">${esc(d.fullName)} &middot; ${esc(d.company)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${rows
                  .map(
                    ([label, value]) => `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;width:150px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#64748B;vertical-align:top;">${esc(label)}</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;font-size:14px;color:#0F172A;vertical-align:top;">${esc(value)}</td>
                </tr>`,
                  )
                  .join("")}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;">
              <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#64748B;">The opportunity</div>
              <div style="margin-top:10px;padding:16px 18px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:14px;line-height:1.65;color:#0F172A;white-space:pre-wrap;">${esc(d.opportunity)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px 32px;font-size:12px;line-height:1.6;color:#94A3B8;">
              Received ${esc(receivedAt)} via salesfluance.com/contact. Reply to this email to respond directly to ${esc(d.fullName)}.
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

  const text = [
    "New website enquiry — SalesFluance",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "The opportunity:",
    d.opportunity,
    "",
    `Received ${receivedAt} via salesfluance.com/contact.`,
  ].join("\n");

  return { html, text };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (typeof parsed !== "object" || parsed === null) throw new Error();
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: real users never fill this hidden field. Return a normal
  // success so bots get no signal, but send nothing.
  if (typeof body.website_hp === "string" && body.website_hp.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again shortly." },
      { status: 429 },
    );
  }

  const data = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((f) => [f, clean(body[f], LIMITS[f])]),
  ) as Submission;

  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "[contact] Email not configured. Missing:",
      [
        !apiKey && "RESEND_API_KEY",
        !to && "CONTACT_TO_EMAIL",
        !from && "CONTACT_FROM_EMAIL",
      ]
        .filter(Boolean)
        .join(", "),
    );
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry right now." },
      { status: 500 },
    );
  }

  const receivedAt = new Date().toUTCString();
  const { html, text } = buildEmail(data, receivedAt);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        reply_to: data.email,
        subject: `New enquiry: ${data.fullName} (${data.company}) — ${data.service}`.replace(/[\r\n]+/g, " "),
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("[contact] Resend rejected the request:", response.status, detail);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your enquiry right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to reach Resend:", error);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry right now." },
      { status: 502 },
    );
  }
}
