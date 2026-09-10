"use client";

import { useState } from "react";
import { mailHref, telHref } from "@/lib/previews/core/links";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";

type PreviewContactProps = {
  config: PreviewConfig;
};

const fieldClass =
  "mt-2 w-full rounded-none border-0 bg-[var(--preview-surface)] px-4 py-3.5 text-sm outline-none ring-0 placeholder:text-[var(--preview-muted)] focus:bg-[var(--preview-tint)]";

/** Kontakt: schlankes Formular + Google Maps daneben. */
export default function PreviewContact({ config }: PreviewContactProps) {
  const { contact } = config;
  const [mapAccepted, setMapAccepted] = useState(false);

  const mapQuery = contact.address
    ? encodeURIComponent(contact.address)
    : encodeURIComponent(`${config.businessName} Hannover`);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`;

  return (
    <PreviewSection>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <form
          className="space-y-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <PreviewField
            label="Name, Vorname"
            name="name"
            required
            placeholder="Max Mustermann"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <PreviewField
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@beispiel.de"
            />
            <PreviewField
              label="Telefon"
              name="phone"
              type="tel"
              placeholder="Für den Rückruf"
            />
          </div>

          <div>
            <label
              htmlFor="preview-message"
              className="block text-sm font-semibold"
            >
              Ihre Nachricht <span className="text-[var(--preview-primary)]">*</span>
            </label>
            <textarea
              id="preview-message"
              name="message"
              rows={6}
              required
              placeholder="Was soll gemacht werden?"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold">
              Datenschutz <span className="text-[var(--preview-primary)]">*</span>
            </p>
            <label className="mt-3 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--preview-muted)]">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-1 h-4 w-4 shrink-0 rounded-none border border-[var(--preview-border)] accent-[var(--preview-primary)]"
              />
              <span>
                Ich habe die Datenschutzbestimmungen gelesen. Ich stimme zu,
                dass meine Angaben zur Kontaktaufnahme und für Rückfragen
                gespeichert werden.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center bg-[var(--preview-primary)] px-8 py-3.5 text-sm font-semibold text-[var(--preview-on-primary)] transition-colors hover:bg-[var(--preview-primary-hover)]"
          >
            Absenden
          </button>

          <p className="text-sm text-[var(--preview-muted)]">
            Oder direkt{" "}
            <a
              href={telHref(contact.phone)}
              className="font-semibold text-[var(--preview-foreground)] underline-offset-2 hover:text-[var(--preview-primary)] hover:underline"
            >
              anrufen
            </a>
            {" · "}
            <a
              href={mailHref(contact.email)}
              className="font-semibold text-[var(--preview-foreground)] underline-offset-2 hover:text-[var(--preview-primary)] hover:underline"
            >
              E-Mail
            </a>
            {contact.address ? (
              <>
                {" · "}
                <span>{contact.address}</span>
              </>
            ) : null}
          </p>
        </form>

        <div className="relative min-h-[28rem] overflow-hidden bg-[var(--preview-surface)] lg:min-h-[36rem]">
          {mapAccepted ? (
            <iframe
              title={`Karte – ${config.businessName}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[var(--preview-surface)] px-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]">
                <PreviewIcon name="mapPin" className="h-7 w-7" />
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--preview-muted)]">
                Der Google-Maps-Dienst ist erforderlich, um diese Karte zu
                laden.
              </p>
              <button
                type="button"
                onClick={() => setMapAccepted(true)}
                className="bg-[var(--preview-foreground)] px-6 py-3 text-sm font-semibold text-[var(--preview-background)] transition-opacity hover:opacity-90"
              >
                Akzeptieren
              </button>
            </div>
          )}
        </div>
      </div>
    </PreviewSection>
  );
}

type PreviewFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function PreviewField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: PreviewFieldProps) {
  const id = `preview-${name}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
        {required ? (
          <span className="text-[var(--preview-primary)]"> *</span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  );
}
