type LogoProps = {
  /** Light text for dark navbar pill / dark backgrounds */
  onDarkBackground?: boolean;
  className?: string;
};

export default function Logo({ onDarkBackground = false, className = "" }: LogoProps) {
  const shamClass = onDarkBackground
    ? "text-white max-md:text-zinc-900"
    : "text-zinc-900";
  const studioClass = onDarkBackground
    ? "text-zinc-400 max-md:text-zinc-500"
    : "text-zinc-500";

  return (
    <span
      className={`inline-flex items-baseline font-display text-lg leading-none tracking-[-0.03em] md:text-xl ${className}`}
      aria-label="Sham Studio"
    >
      <span className={`font-bold ${shamClass}`}>Sham</span>
      <span className={`ml-0.5 font-medium ${studioClass}`}>Studio</span>
    </span>
  );
}
