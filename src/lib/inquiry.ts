export type InquiryKind = "location" | "host";

const SHORT = 200;
const LONG = 2000;

function clip(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function parseInquiry(input: unknown):
  | { ok: true; kind: InquiryKind; locale: string; fields: Record<string, string> }
  | { ok: false; spam: true }
  | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "invalid" };
  }
  const data = input as Record<string, unknown>;
  if (clip(data.website, SHORT)) {
    return { ok: false, spam: true };
  }
  const kind = data.kind;
  if (kind !== "location" && kind !== "host") {
    return { ok: false, error: "kind" };
  }
  const locale = clip(data.locale, 8) || "de";
  const rawFields =
    data.fields && typeof data.fields === "object"
      ? (data.fields as Record<string, unknown>)
      : data;
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(rawFields)) {
    if (key === "kind" || key === "locale" || key === "website" || key === "fields") continue;
    fields[key] = clip(value, key === "Nachricht" ? LONG : SHORT);
  }
  const email = fields["E-Mail"];
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "email" };
  }
  if (kind === "location") {
    if (!fields.Name || !fields.Ort) return { ok: false, error: "fields" };
  } else if (!fields.Organisation || !fields.Ort || !fields.Name) {
    return { ok: false, error: "fields" };
  }
  return { ok: true, kind, locale, fields };
}

export function inquirySubject(kind: InquiryKind, fields: Record<string, string>): string {
  const place = fields.Ort ? ` — ${fields.Ort}` : "";
  return kind === "location"
    ? `Standortwunsch Ulpan${place}`
    : `Ulpan vor Ort — Gruppenanfrage${place}`;
}

export function inquiryBody(kind: InquiryKind, locale: string, fields: Record<string, string>): string {
  const lines = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`);
  return [`Art: ${kind}`, `Sprache: ${locale}`, "", ...lines].join("\n");
}
