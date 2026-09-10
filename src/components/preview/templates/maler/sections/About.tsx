import { previewPath } from "@/components/preview/templates/maler/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type {
  PreviewAbout as PreviewAboutData,
  PreviewConfig,
  PreviewIconName,
  PreviewImage,
} from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";

type MalerAboutProps = {
  config: PreviewConfig;
  about: PreviewAboutData;
  /** Auf der Startseite mit Button, auf der Unterseite ohne. */
  withCta?: boolean;
};

/**
 * Über-uns im Referenz-Layout: Text links, zwei versetzte Fotos rechts
 * mit rundem „Seit …“-Badge in der Mitte.
 */
export default function MalerAbout({
  config,
  about,
  withCta = true,
}: MalerAboutProps) {
  const collageImages = resolveCollageImages(about);

  return (
    <PreviewSection id="ueber-uns" className="relative overflow-hidden">
      {about.backgroundImage ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={about.backgroundImage.src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-[0.12]"
          />
        </div>
      ) : null}

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
        <div>
          {about.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--preview-primary)]">
              {about.eyebrow}
            </p>
          ) : null}

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {about.heading}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--preview-muted)] sm:text-lg">
            {about.text}
          </p>

          {about.points?.length ? (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {about.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]">
                    <PreviewIcon name="check" className="h-3 w-3" />
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {withCta ? (
              <PreviewButton href={previewPath(config.slug, "about")}>
                Mehr über uns
              </PreviewButton>
            ) : null}

            {about.signature ? (
              <div className="border-l-2 border-[var(--preview-primary)] pl-4">
                <p className="font-bold">{about.signature.name}</p>
                <p className="text-sm text-[var(--preview-muted)]">
                  {about.signature.role}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <AboutCollage
          images={collageImages}
          sinceYear={about.sinceYear}
          sinceLabel={about.sinceLabel ?? "Seit"}
          tradeIcon={TRADE_ICON.maler}
        />
      </div>
    </PreviewSection>
  );
}

function resolveCollageImages(about: PreviewAboutData): PreviewImage[] {
  if (about.images && about.images.length >= 2) {
    return about.images.slice(0, 2);
  }
  if (about.image) {
    return [about.image, about.image];
  }
  return [];
}

type AboutCollageProps = {
  images: PreviewImage[];
  sinceYear?: string;
  sinceLabel: string;
  tradeIcon: PreviewIconName;
};

function AboutCollage({
  images,
  sinceYear,
  sinceLabel,
  tradeIcon,
}: AboutCollageProps) {
  const [left, right] = images;

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:ml-auto lg:mr-0 lg:max-w-[26rem] xl:max-w-lg">
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <div className="pt-7 sm:pt-10">
          <CollageFrame
            image={left}
            placeholderIcon={tradeIcon}
            className="aspect-3/4 rounded-br-[2.75rem] sm:rounded-br-[4rem]"
          />
        </div>
        <div className="pb-7 sm:pb-10">
          <CollageFrame
            image={right}
            placeholderIcon={tradeIcon}
            className="aspect-3/4 rounded-tl-[2.75rem] sm:rounded-tl-[4rem]"
          />
        </div>
      </div>

      {sinceYear ? (
        <div className="absolute top-1/2 left-1/2 z-10 flex h-[6.5rem] w-[6.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[var(--preview-primary)] text-[var(--preview-on-primary)] shadow-lg sm:h-[7.25rem] sm:w-[7.25rem]">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-90 sm:text-xs">
            {sinceLabel}
          </span>
          <span className="preview-nav-link mt-0.5 text-[1.65rem] font-bold leading-none sm:text-3xl">
            {sinceYear}
          </span>
        </div>
      ) : null}
    </div>
  );
}

type CollageFrameProps = {
  image?: PreviewImage;
  placeholderIcon: PreviewIconName;
  className?: string;
};

function CollageFrame({
  image,
  placeholderIcon,
  className = "",
}: CollageFrameProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[var(--preview-tint)] ${className}`}
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full min-h-[16rem] items-center justify-center text-[var(--preview-primary)] opacity-35">
          <PreviewIcon name={placeholderIcon} className="h-10 w-10" />
        </div>
      )}
    </div>
  );
}
