"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_NO_NUMBERS_REGEX = /^[\p{L}\s\-']+$/u;

const RATE_LIMIT_KEY = "contact_form_submissions";
const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function getRecentSubmissionTimestamps(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(RATE_LIMIT_KEY);
    const arr = raw ? (JSON.parse(raw) as number[]) : [];
    const now = Date.now();
    const cutoff = now - RATE_LIMIT_WINDOW_MS;
    return arr.filter((t) => t > cutoff);
  } catch {
    return [];
  }
}

function recordSubmission(): void {
  const recent = getRecentSubmissionTimestamps();
  recent.push(Date.now());
  const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
  const kept = recent.filter((t) => t > cutoff).slice(-RATE_LIMIT_MAX);
  try {
    sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(kept));
  } catch {
    /* ignore */
  }
}

type FieldErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validateForm(form: HTMLFormElement): FieldErrors {
  const errors: FieldErrors = {};
  const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim() ?? "";
  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim() ?? "";
  const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value?.trim() ?? "";
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim() ?? "";

  if (!name) errors.name = "Bitte geben Sie Ihren Namen ein.";
  else if (!NAME_NO_NUMBERS_REGEX.test(name)) errors.name = "Im Namen sind keine Ziffern erlaubt.";

  if (!email) errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";

  if (!subject) errors.subject = "Bitte geben Sie einen Betreff ein.";
  if (!message) errors.message = "Bitte geben Sie eine Nachricht ein.";

  return errors;
}

type ContactFormProps = {
  /** Herkunft der Anfrage – wird per E-Mail mitgesendet (z.B. "Kontaktformular", "Digitaler Grundstein") */
  source: string;
  /** Optional: Callback nach erfolgreichem Absenden (z.B. Modal schließen) */
  onSuccess?: () => void;
  /** Kompaktere Variante für Modal */
  compact?: boolean;
};

export default function ContactForm({ source, onSuccess, compact = false }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending" || !formRef.current) return;

    setFieldErrors({});
    setErrorMessage("");

    const honeypot = (formRef.current.elements.namedItem("website") as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      setStatus("success");
      formRef.current.reset();
      return;
    }

    const missing: string[] = [];
    if (!PUBLIC_KEY) missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    if (!SERVICE_ID) missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
    if (!TEMPLATE_ID) missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
    if (missing.length > 0) {
      setStatus("error");
      setErrorMessage(
        "E-Mail ist nicht konfiguriert." +
          (process.env.NODE_ENV === "development"
            ? ` Fehlende: ${missing.join(", ")}.`
            : " Bitte die Umgebungsvariablen setzen.")
      );
      return;
    }

    const errors = validateForm(formRef.current);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Bitte füllen Sie alle Felder korrekt aus.");
      return;
    }

    const recent = getRecentSubmissionTimestamps();
    if (recent.length >= RATE_LIMIT_MAX) {
      const oldest = Math.min(...recent);
      const waitUntil = oldest + RATE_LIMIT_WINDOW_MS;
      const minutesLeft = Math.ceil((waitUntil - Date.now()) / 60000);
      setStatus("error");
      setErrorMessage(
        `Maximal ${RATE_LIMIT_MAX} Nachrichten pro Stunde. Bitte in ca. ${minutesLeft} Minute(n) erneut versuchen.`
      );
      return;
    }

    setStatus("sending");

    // source explizit als templateParams mitgeben (EmailJS braucht es für {{source}})
    const formData = new FormData(formRef.current);
    const templateParams: Record<string, string> = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      subject: (formData.get("subject") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
      source: source,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
      .then(() => {
        recordSubmission();
        setStatus("success");
        setFieldErrors({});
        formRef.current?.reset();
        // Erfolgsmeldung 2,5 Sekunden anzeigen, dann Modal schließen
        if (onSuccess) {
          setTimeout(() => onSuccess(), 2500);
        }
      })
      .catch((err) => {
        setStatus("error");
        setErrorMessage(
          typeof err?.text === "string"
            ? err.text
            : err?.message ?? "Nachricht konnte nicht gesendet werden. Bitte erneut versuchen."
        );
      });
  }

  const inputBase =
    "rounded-xl border bg-[#111] px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/20 ";
  const inputError = "border-red-500/60 focus:border-red-500 focus:ring-red-500/20";
  const inputOk = "border-zinc-700 focus:border-cyan-500";

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-6"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <input type="hidden" name="source" value={source} />

      {status === "success" ? (
        <div
          className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/20 px-4 py-4 text-emerald-400"
          role="status"
        >
          <svg
            className="h-6 w-6 shrink-0 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p className="font-medium">
            E-Mail wurde erfolgreich verschickt! Ich melde mich zeitnah bei Ihnen.
          </p>
        </div>
      ) : (
        <>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-zinc-300">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputBase + (fieldErrors.name ? inputError : inputOk)}
            placeholder="Ihr Name"
            aria-required
            aria-invalid={!!fieldErrors.name}
          />
          {fieldErrors.name && (
            <span className="text-sm text-red-400" role="alert">
              {fieldErrors.name}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-zinc-300">E-Mail</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputBase + (fieldErrors.email ? inputError : inputOk)}
            placeholder="ihre@email.de"
            aria-required
            aria-invalid={!!fieldErrors.email}
          />
          {fieldErrors.email && (
            <span className="text-sm text-red-400" role="alert">
              {fieldErrors.email}
            </span>
          )}
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-zinc-300">Betreff</span>
        <input
          type="text"
          name="subject"
          required
          autoComplete="off"
          className={inputBase + (fieldErrors.subject ? inputError : inputOk)}
          placeholder="Worum geht es?"
          aria-required
          aria-invalid={!!fieldErrors.subject}
        />
        {fieldErrors.subject && (
          <span className="text-sm text-red-400" role="alert">
            {fieldErrors.subject}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-zinc-300">Nachricht</span>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          className={inputBase + (fieldErrors.message ? inputError : inputOk) + " resize-y"}
          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Frage …"
          aria-required
          aria-invalid={!!fieldErrors.message}
        />
        {fieldErrors.message && (
          <span className="text-sm text-red-400" role="alert">
            {fieldErrors.message}
          </span>
        )}
      </label>

      {status === "error" && errorMessage && (
        <p className="rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Wird gesendet …" : "Senden"}
        </button>
      </div>
        </>
      )}
    </form>
  );
}
