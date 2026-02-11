"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

type Status = "idle" | "sending" | "success" | "error";

// Einfache E-Mail-Validierung (gängiges Format)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Name: nur Buchstaben, Leerzeichen, Bindestriche, Apostrophe (keine Ziffern)
const NAME_NO_NUMBERS_REGEX = /^[\p{L}\s\-']+$/u;

// Rate-Limit: max. 2 Anfragen pro Stunde (pro Browser/Tab)
const RATE_LIMIT_KEY = "contact_form_submissions";
const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 Stunde

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
    // ignore
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

  if (!name) {
    errors.name = "Bitte geben Sie Ihren Namen ein.";
  } else if (!NAME_NO_NUMBERS_REGEX.test(name)) {
    errors.name = "Im Namen sind keine Ziffern erlaubt.";
  }

  if (!email) {
    errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }

  if (!subject) {
    errors.subject = "Bitte geben Sie einen Betreff ein.";
  }

  if (!message) {
    errors.message = "Bitte geben Sie eine Nachricht ein.";
  }

  return errors;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending" || !formRef.current) return;

    setFieldErrors({});
    setErrorMessage("");

    // Spam-Schutz: Honeypot – wenn ausgefüllt, ist es ein Bot
    const honeypot = (formRef.current.elements.namedItem("website") as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      setStatus("success");
      formRef.current.reset();
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage("E-Mail ist nicht konfiguriert. Bitte später erneut versuchen.");
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
        `Sie können innerhalb einer Stunde maximal ${RATE_LIMIT_MAX} Nachrichten senden. Bitte versuchen Sie es in etwa ${minutesLeft} Minute(n) erneut.`
      );
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        recordSubmission();
        setStatus("success");
        setFieldErrors({});
        formRef.current?.reset();
      })
      .catch((err) => {
        setStatus("error");
        const msg =
          typeof err?.text === "string"
            ? err.text
            : err?.message ?? "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.";
        setErrorMessage(msg);
      });
  }

  const inputBase =
    "rounded-xl border bg-[#111] px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/20 ";
  const inputError = "border-red-500/60 focus:border-red-500 focus:ring-red-500/20";
  const inputOk = "border-zinc-700 focus:border-cyan-500";

  return (
    <section
      id="contact"
      className="flex min-h-screen min-h-[100dvh] flex-col section-padding rounded-b-3xl"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-1 flex-col justify-center px-6 md:px-8">
        <motion.h2
          id="contact-heading"
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Kontakt
        </motion.h2>
        <motion.p
          className="mt-4 text-zinc-400 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Bereit für Ihr Projekt? Lassen Sie uns Ihre Idee gemeinsam umsetzen –
          schreiben Sie mir, ich melde mich zeitnah.
        </motion.p>
        <motion.div
          className="mt-10 rounded-2xl border border-zinc-700 bg-[#1a1a1a] px-6 py-8 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form
            ref={formRef}
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Honeypot – für Nutzer unsichtbar, Bots füllen es oft aus */}
            <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden>
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

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
                  aria-required="true"
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <span id="name-error" className="text-sm text-red-400" role="alert">
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
                  aria-required="true"
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email && (
                  <span id="email-error" className="text-sm text-red-400" role="alert">
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
                aria-required="true"
                aria-invalid={!!fieldErrors.subject}
                aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
              />
              {fieldErrors.subject && (
                <span id="subject-error" className="text-sm text-red-400" role="alert">
                  {fieldErrors.subject}
                </span>
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-300">Nachricht</span>
              <textarea
                name="message"
                required
                rows={5}
                className={inputBase + (fieldErrors.message ? inputError : inputOk) + " resize-y"}
                placeholder="Beschreiben Sie Ihr Projekt oder Ihre Frage …"
                aria-required="true"
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
              />
              {fieldErrors.message && (
                <span id="message-error" className="text-sm text-red-400" role="alert">
                  {fieldErrors.message}
                </span>
              )}
            </label>

            {status === "success" && (
              <p className="rounded-xl bg-emerald-500/15 px-4 py-3 text-sm text-emerald-400" role="status">
                Nachricht wurde gesendet. Ich melde mich zeitnah bei Ihnen.
              </p>
            )}
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
          </form>
        </motion.div>
      </div>
    </section>
  );
}
