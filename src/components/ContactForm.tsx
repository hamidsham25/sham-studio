"use client";

import { useRef, useState } from "react";
import {
  validateContactPayload,
  type ContactFieldErrors,
} from "@/lib/contact-validation";

type Status = "idle" | "sending" | "success" | "error";

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

type FieldErrors = Pick<ContactFieldErrors, "name" | "email" | "subject" | "message">;

type ContactFormProps = {
  /** Herkunft der Anfrage – wird per E-Mail mitgesendet (z.B. "Kontaktformular", "Starter-Paket: Digitaler Grundstein") */
  source: string;
  /** Optional: Callback nach erfolgreichem Absenden (z.B. Modal schließen) */
  onSuccess?: () => void;
  /** Kompaktere Variante für Modal */
  compact?: boolean;
  /** Vorausgefüllter Betreff (z. B. im Service-Popup) */
  defaultSubject?: string;
  /** Hell für Kontakt-/Anfragen-Seiten, dunkel für Startseite und Modal */
  variant?: "dark" | "light";
};

export default function ContactForm({
  source,
  onSuccess,
  compact = false,
  defaultSubject,
  variant = "dark",
}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    const formData = new FormData(formRef.current);
    const payload = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      subject: (formData.get("subject") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
      source,
      website: honeypot,
    };

    const errors = validateContactPayload(payload);
    const { source: _sourceError, ...formFieldErrors } = errors;
    if (Object.keys(formFieldErrors).length > 0) {
      setFieldErrors(formFieldErrors);
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

    let response: Response;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          subject: payload.subject,
          message: payload.message,
          source: payload.source,
          website: "",
        }),
      });
    } catch {
      setStatus("error");
      setErrorMessage("Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.");
      return;
    }

    let result: { error?: string; fieldErrors?: FieldErrors };
    try {
      result = await response.json();
    } catch {
      setStatus("error");
      setErrorMessage("Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.");
      return;
    }

    if (!response.ok) {
      setStatus("error");
      if (result.fieldErrors && Object.keys(result.fieldErrors).length > 0) {
        setFieldErrors(result.fieldErrors);
      }
      setErrorMessage(
        result.error ?? "Nachricht konnte nicht gesendet werden. Bitte erneut versuchen."
      );
      return;
    }

    recordSubmission();
    setStatus("success");
    setFieldErrors({});
    formRef.current.reset();
    if (onSuccess) {
      setTimeout(() => onSuccess(), 2500);
    }
  }

  const isLight = variant === "light";
  const inputBase = isLight
    ? "rounded-xl border bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/25 "
    : "rounded-xl border bg-[#111] px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/20 ";
  const inputError = isLight
    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
    : "border-red-500/60 focus:border-red-500 focus:ring-red-500/20";
  const inputOk = isLight
    ? "border-zinc-200 focus:border-cyan-600"
    : "border-zinc-700 focus:border-cyan-500";
  const labelClass = isLight
    ? "text-sm font-medium text-zinc-700"
    : "text-sm font-medium text-zinc-300";
  const fieldErrorClass = isLight ? "text-sm text-red-600" : "text-sm text-red-400";
  const successBoxClass = isLight
    ? "flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-emerald-800"
    : "flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/20 px-4 py-4 text-emerald-400";
  const errorBoxClass = isLight
    ? "rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
    : "rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-400";
  const submitClass = isLight
    ? "inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    : "inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

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
        <div className={successBoxClass} role="status">
          <svg
            className={`h-6 w-6 shrink-0 ${isLight ? "text-emerald-600" : "text-emerald-400"}`}
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
          <span className={labelClass}>Name</span>
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
            <span className={fieldErrorClass} role="alert">
              {fieldErrors.name}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>E-Mail</span>
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
            <span className={fieldErrorClass} role="alert">
              {fieldErrors.email}
            </span>
          )}
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>Betreff</span>
        <input
          type="text"
          name="subject"
          required
          autoComplete="off"
          defaultValue={defaultSubject}
          className={inputBase + (fieldErrors.subject ? inputError : inputOk)}
          placeholder="Worum geht es?"
          aria-required
          aria-invalid={!!fieldErrors.subject}
        />
        {fieldErrors.subject && (
          <span className={fieldErrorClass} role="alert">
            {fieldErrors.subject}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>Nachricht</span>
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
          <span className={fieldErrorClass} role="alert">
            {fieldErrors.message}
          </span>
        )}
      </label>

      {status === "error" && errorMessage && (
        <p className={errorBoxClass} role="alert">
          {errorMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className={submitClass}
        >
          {status === "sending" ? "Wird gesendet …" : "Senden"}
        </button>
      </div>
        </>
      )}
    </form>
  );
}
