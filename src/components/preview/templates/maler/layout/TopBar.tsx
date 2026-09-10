import { mailHref, telHref } from "@/lib/previews/core/links";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSocialIcon, {
  socialLabel,
} from "@/components/preview/core/ui/PreviewSocialIcon";
import MalerNavContainer from "./NavContainer";

type MalerTopBarProps = {
  config: PreviewConfig;
};

/** Schwarze Info-Leiste – scrollt mit, nicht sticky. */
export default function MalerTopBar({ config }: MalerTopBarProps) {
  const socials = config.footer?.socials ?? [];

  return (
    <div className="relative z-[60] bg-[#111111] text-white">
      <MalerNavContainer>
        <div className="flex h-10 items-center justify-between gap-6 text-[0.8rem] md:h-11">
          {config.topBarMessage ? (
            <p className="truncate text-white/80">{config.topBarMessage}</p>
          ) : (
            <span />
          )}

          <div className="flex shrink-0 items-center gap-4 md:gap-5">
            <a
              href={mailHref(config.contact.email)}
              className="hidden items-center gap-1.5 text-white/90 transition-colors hover:text-white sm:inline-flex"
            >
              <PreviewIcon name="mail" className="h-3.5 w-3.5" />
              {config.contact.email}
            </a>
            <a
              href={telHref(config.contact.phone)}
              className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-white/80"
            >
              <PreviewIcon name="phone" className="h-3.5 w-3.5" />
              {config.contact.phone}
            </a>

            {socials.length > 0 ? (
              <div className="hidden items-center gap-3 border-l border-white/20 pl-4 md:flex">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLabel(social.platform)}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    <PreviewSocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </MalerNavContainer>
    </div>
  );
}
