import { mailHref, telHref, whatsappHref } from "@/lib/previews/core/links";
import type { PreviewConfig, PreviewIconName } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";

type ContactCard = {
  icon: PreviewIconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

type PreviewContactProps = {
  config: PreviewConfig;
};

export default function PreviewContact({ config }: PreviewContactProps) {
  const { contact } = config;

  const cards: ContactCard[] = [
    {
      icon: "phone",
      label: "Telefon",
      value: contact.phone,
      href: telHref(contact.phone),
    },
    {
      icon: "mail",
      label: "E-Mail",
      value: contact.email,
      href: mailHref(contact.email),
    },
  ];

  if (contact.whatsapp) {
    cards.push({
      icon: "whatsapp",
      label: "WhatsApp",
      value: contact.whatsapp,
      href: whatsappHref(contact.whatsapp),
      external: true,
    });
  }

  if (contact.address) {
    cards.push({
      icon: "mapPin",
      label: "Adresse",
      value: contact.address,
    });
  }

  return (
    <PreviewSection>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            So erreichen Sie uns
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map((card) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]">
                    <PreviewIcon name={card.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[var(--preview-muted)]">
                      {card.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold break-words">
                      {card.value}
                    </span>
                  </span>
                </>
              );

              const cardClass =
                "flex items-start gap-4 rounded-2xl bg-[var(--preview-surface)] p-5 ring-1 ring-[var(--preview-border)]";

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className={`${cardClass} transition-colors hover:ring-[var(--preview-primary)]`}
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : undefined)}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.label} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>

          {config.openingHours?.length ? (
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Öffnungszeiten
              </h3>
              <ul className="mt-4 divide-y divide-[var(--preview-border)] rounded-2xl ring-1 ring-[var(--preview-border)]">
                {config.openingHours.map((entry) => (
                  <li
                    key={entry.days}
                    className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm"
                  >
                    <span className="text-[var(--preview-muted)]">
                      {entry.days}
                    </span>
                    <span className="font-semibold">{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {config.serviceArea?.length ? (
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Einsatzgebiet
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {config.serviceArea.map((area) => (
                  <li
                    key={area}
                    className="rounded-full bg-[var(--preview-tint)] px-3.5 py-1.5 text-sm font-medium"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="rounded-3xl bg-[var(--preview-surface)] p-7 ring-1 ring-[var(--preview-border)] sm:p-9">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Kostenloses Angebot anfordern
          </h2>
          <p className="mt-2 text-sm text-[var(--preview-muted)]">
            Beschreiben Sie kurz Ihr Vorhaben – wir melden uns innerhalb eines
            Werktages.
          </p>

          {/* Entwurf: Das Formular ist absichtlich noch ohne Versandfunktion. */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <PreviewField label="Name" name="name" placeholder="Ihr Name" />
            <PreviewField
              label="Telefon"
              name="phone"
              type="tel"
              placeholder="Für den Rückruf"
            />
            <div className="sm:col-span-2">
              <PreviewField
                label="E-Mail"
                name="email"
                type="email"
                placeholder="name@beispiel.de"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="preview-service"
                className="block text-sm font-semibold"
              >
                Gewünschte Leistung
              </label>
              <select
                id="preview-service"
                name="service"
                defaultValue=""
                className="mt-2 w-full rounded-xl bg-[var(--preview-background)] px-4 py-3 text-sm ring-1 ring-[var(--preview-border)] outline-none focus:ring-2 focus:ring-[var(--preview-primary)]"
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {config.services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="preview-message"
                className="block text-sm font-semibold"
              >
                Ihre Nachricht
              </label>
              <textarea
                id="preview-message"
                name="message"
                rows={5}
                placeholder="Was soll gemacht werden? Wie groß ist die Fläche?"
                className="mt-2 w-full resize-y rounded-xl bg-[var(--preview-background)] px-4 py-3 text-sm ring-1 ring-[var(--preview-border)] outline-none placeholder:text-[var(--preview-muted)] focus:ring-2 focus:ring-[var(--preview-primary)]"
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--preview-primary)] px-7 py-3.5 text-[0.95rem] font-semibold text-[var(--preview-on-primary)] transition-colors hover:bg-[var(--preview-primary-hover)] sm:w-auto"
          >
            Anfrage senden
          </button>

          <p className="mt-4 text-xs text-[var(--preview-muted)]">
            Entwurf: Das Formular ist noch nicht mit einem Postfach verbunden.
          </p>
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
};

function PreviewField({
  label,
  name,
  type = "text",
  placeholder,
}: PreviewFieldProps) {
  const id = `preview-${name}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-[var(--preview-background)] px-4 py-3 text-sm ring-1 ring-[var(--preview-border)] outline-none placeholder:text-[var(--preview-muted)] focus:ring-2 focus:ring-[var(--preview-primary)]"
      />
    </div>
  );
}
