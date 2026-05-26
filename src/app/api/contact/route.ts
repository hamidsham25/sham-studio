import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  escapeHtml,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact-validation";

function getMissingEnv(): string[] {
  const missing: string[] = [];
  if (!process.env.RESEND_API_KEY) missing.push("RESEND_API_KEY");
  if (!process.env.CONTACT_FROM_EMAIL) missing.push("CONTACT_FROM_EMAIL");
  if (!process.env.CONTACT_TO_EMAIL) missing.push("CONTACT_TO_EMAIL");
  return missing;
}

/** Resend tags: only ASCII letters, numbers, underscore, dash (max 256). */
function toResendTagValue(value: string): string | undefined {
  const sanitized = value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 256);
  return sanitized || undefined;
}

export async function POST(request: Request) {
  const missing = getMissingEnv();
  if (missing.length > 0) {
    console.error("Contact API: missing env:", missing.join(", "));
    return NextResponse.json(
      { error: "E-Mail ist nicht konfiguriert." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const payload: ContactPayload = {
    name: typeof raw.name === "string" ? raw.name : "",
    email: typeof raw.email === "string" ? raw.email : "",
    subject: typeof raw.subject === "string" ? raw.subject : "",
    message: typeof raw.message === "string" ? raw.message : "",
    source: typeof raw.source === "string" ? raw.source : "",
    website: typeof raw.website === "string" ? raw.website : "",
  };

  if (payload.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const fieldErrors = validateContactPayload(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Felder korrekt aus.", fieldErrors },
      { status: 400 }
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const subject = payload.subject.trim();
  const message = payload.message.trim();
  const source = payload.source.trim();

  const idempotencyKey = `contact/${Date.now()}-${crypto.randomUUID()}`;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const sourceTag = toResendTagValue(source);

  const { data, error } = await resend.emails.send(
    {
      from: process.env.CONTACT_FROM_EMAIL!,
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: `[${source}] ${subject}`,
      html: `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Quelle:</strong> ${escapeHtml(source)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Betreff:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `.trim(),
      ...(sourceTag ? { tags: [{ name: "source", value: sourceTag }] } : {}),
    },
    { idempotencyKey }
  );

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Nachricht konnte nicht gesendet werden. Bitte erneut versuchen." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
