export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const NAME_NO_NUMBERS_REGEX = /^[\p{L}\s\-']+$/u;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  source: string;
  website?: string;
};

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message" | "source", string>
>;

export function validateContactPayload(payload: ContactPayload): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = payload.subject?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const source = payload.source?.trim() ?? "";

  if (!name) errors.name = "Bitte geben Sie Ihren Namen ein.";
  else if (!NAME_NO_NUMBERS_REGEX.test(name))
    errors.name = "Im Namen sind keine Ziffern erlaubt.";

  if (!email) errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  else if (!EMAIL_REGEX.test(email))
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";

  if (!subject) errors.subject = "Bitte geben Sie einen Betreff ein.";
  if (!message) errors.message = "Bitte geben Sie eine Nachricht ein.";
  if (!source) errors.source = "Ungültige Anfrage.";

  return errors;
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
