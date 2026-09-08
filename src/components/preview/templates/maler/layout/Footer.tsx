import Link from "next/link";
import { mailHref, telHref, whatsappHref } from "@/lib/previews/core/links";
import { NAV, previewPath } from "@/components/preview/templates/maler/navigation";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSocialIcon, { socialLabel } from "@/components/preview/core/ui/PreviewSocialIcon";
import Logo from "./Logo";

type MalerFooterProps = {
  config: PreviewConfig;
};

export default function MalerFooter({ config }: MalerFooterProps) {
  const { contact, footer } = config;
  const year = new Date().getFullYear();
  const note = footer?.note ?? `© ${year} ${config.businessName}`;

  return (
    <footer className="border-t border-[var(--preview-border)] bg-[var(--preview-surface)]">
      <PreviewContainer>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo config={config} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--preview-muted)]">
              {footer?.about ?? config.tagline}
            </p>

            {footer?.socials?.length ? (
              <div className="mt-5 flex items-center gap-2">
                {footer.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLabel(social.platform)}
                    className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-[var(--preview-border)] transition-colors hover:bg-[var(--preview-primary)] hover:text-[var(--preview-on-primary)] hover:ring-[var(--preview-primary)]"
                  >
                    <PreviewSocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.key}>
                  <Link
                    href={previewPath(config.slug, item.key)}
                    className="text-[var(--preview-muted)] transition-colors hover:text-[var(--preview-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {config.services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    href={previewPath(config.slug, "services")}
                    className="text-[var(--preview-muted)] transition-colors hover:text-[var(--preview-primary)]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--preview-muted)]">
              <li>
                <a
                  href={telHref(contact.phone)}
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-[var(--preview-primary)]"
                >
                  <PreviewIcon
                    name="phone"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--preview-primary)]"
                  />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={mailHref(contact.email)}
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-[var(--preview-primary)]"
                >
                  <PreviewIcon
                    name="mail"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--preview-primary)]"
                  />
                  {contact.email}
                </a>
              </li>
              {contact.whatsapp ? (
                <li>
                  <a
                    href={whatsappHref(contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2.5 transition-colors hover:text-[var(--preview-primary)]"
                  >
                    <PreviewIcon
                      name="whatsapp"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--preview-primary)]"
                    />
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {contact.address ? (
                <li className="flex items-start gap-2.5">
                  <PreviewIcon
                    name="mapPin"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--preview-primary)]"
                  />
                  {contact.address}
                </li>
              ) : null}
            </ul>

            {config.openingHours?.length ? (
              <ul className="mt-5 space-y-1.5 border-t border-[var(--preview-border)] pt-4 text-sm text-[var(--preview-muted)]">
                {config.openingHours.map((entry) => (
                  <li key={entry.days} className="flex justify-between gap-3">
                    <span>{entry.days}</span>
                    <span className="text-right font-medium text-[var(--preview-foreground)]">
                      {entry.hours}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--preview-border)] py-6 text-xs text-[var(--preview-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{note}</p>
          {footer?.legalLinks?.length ? (
            <ul className="flex flex-wrap items-center gap-5">
              {footer.legalLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="transition-colors hover:text-[var(--preview-primary)]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    // Im Entwurf noch ohne Ziel – bewusst kein toter Link.
                    <span>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </PreviewContainer>
    </footer>
  );
}
