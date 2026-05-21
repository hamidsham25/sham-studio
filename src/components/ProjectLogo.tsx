import type { CSSProperties } from "react";
import Image from "next/image";

const maskStyle = (url: string): CSSProperties => ({
  WebkitMaskImage: `url(${url})`,
  maskImage: `url(${url})`,
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
});

type ProjectLogoProps = {
  title: string;
  logo: string;
  /** Render full wordmark white via CSS mask (transparent stays empty) */
  logoMaskWhite?: boolean;
  /** Render full wordmark black via CSS mask (for bright covers) */
  logoMaskBlack?: boolean;
  /** Only colored parts on transparent – white accent on hover */
  logoAccent?: string;
  /** Pre-exported white wordmark PNG */
  logoWhite?: string;
  /** White logo on black PNG – screen blend on dark covers */
  logoBlendScreen?: boolean;
  className?: string;
};

export default function ProjectLogo({
  title,
  logo,
  logoMaskWhite = false,
  logoMaskBlack = false,
  logoAccent,
  logoWhite,
  logoBlendScreen = false,
  className = "relative h-9 w-44 sm:h-11 sm:w-52",
}: ProjectLogoProps) {
  const label = `${title} Logo`;

  if (logoBlendScreen) {
    return (
      <div className={className}>
        <Image
          src={logo}
          alt={label}
          fill
          className="object-contain mix-blend-screen"
          sizes="280px"
        />
      </div>
    );
  }

  if (logoMaskBlack) {
    return (
      <div className={className} role="img" aria-label={label}>
        <span
          className="absolute inset-0 bg-zinc-950"
          style={maskStyle(logo)}
          aria-hidden
        />
      </div>
    );
  }

  if (logoWhite) {
    return (
      <div className={className}>
        <Image
          src={logoWhite}
          alt={label}
          fill
          className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          sizes="208px"
        />
      </div>
    );
  }

  if (logoMaskWhite) {
    return (
      <div
        className={className}
        role="img"
        aria-label={label}
      >
        <span
          className="absolute inset-0 bg-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          style={maskStyle(logo)}
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        src={logo}
        alt={label}
        fill
        className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        sizes="208px"
      />
      {logoAccent ? (
        <span
          className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
          style={maskStyle(logoAccent)}
          aria-hidden
        />
      ) : null}
    </div>
  );
}
