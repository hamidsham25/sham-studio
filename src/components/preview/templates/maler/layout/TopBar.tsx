import { mailHref, telHref } from "@/lib/previews/core/links";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSocialIcon, { socialLabel } from "@/components/preview/core/ui/PreviewSocialIcon";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";

type PreviewTopBarProps = {
  config: PreviewConfig;
};

/** Schmale Info-Leiste über dem Header. Auf Mobil ausgeblendet. */
export default function PreviewTopBar({ config }: PreviewTopBarProps) {
  const socials = config.footer?.socials ?? [];

  return (
    <div className="hidden border-b border-[var(--preview-border)] bg-[var(--preview-tint)] md:block">
      <PreviewContainer>
        <div className="flex h-11 items-center justify-between gap-6 text-xs">
          {config.topBarMessage ? (
            <p className="truncate text-[var(--preview-muted)]">
              {config.topBarMessage}
            </p>
          ) : (
            <span />
          )}

          <div className="flex shrink-0 items-center gap-5">
            <a
              href={mailHref(config.contact.email)}
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[var(--preview-primary)]"
            >
              <PreviewIcon name="mail" className="h-3.5 w-3.5" />
              {config.contact.email}
            </a>
            <a
              href={telHref(config.contact.phone)}
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[var(--preview-primary)]"
            >
              <PreviewIcon name="phone" className="h-3.5 w-3.5" />
              {config.contact.phone}
            </a>

            {socials.length > 0 ? (
              <div className="flex items-center gap-3 border-l border-[var(--preview-border)] pl-5">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLabel(social.platform)}
                    className="text-[var(--preview-muted)] transition-colors hover:text-[var(--preview-primary)]"
                  >
                    <PreviewSocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </PreviewContainer>
    </div>
  );
}
