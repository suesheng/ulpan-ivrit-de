import type { APIRoute } from "astro";
import {
  inquiryBody,
  inquirySubject,
  parseInquiry,
} from "../../lib/inquiry";
import { LINKS } from "../../lib/links";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "invalid" }, 400);
  }

  const parsed = parseInquiry(payload);
  if (!parsed.ok) {
    if ("spam" in parsed) return json({ ok: true }, 200);
    return json({ ok: false, error: parsed.error }, 400);
  }

  const key = import.meta.env.BREVO_API_KEY;
  if (!key) {
    return json({ ok: false, fallback: true }, 503);
  }

  const subject = inquirySubject(parsed.kind, parsed.fields);
  const textContent = inquiryBody(parsed.kind, parsed.locale, parsed.fields);
  const sender = import.meta.env.BREVO_SENDER || LINKS.contactEmail;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": key,
    },
    body: JSON.stringify({
      sender: { email: sender, name: "Ulpan Ivrit" },
      to: [{ email: LINKS.contactEmail }],
      replyTo: { email: parsed.fields["E-Mail"] },
      subject,
      textContent,
    }),
  });

  if (!response.ok) {
    return json({ ok: false, fallback: true }, 503);
  }

  return json({ ok: true }, 200);
};

function json(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
