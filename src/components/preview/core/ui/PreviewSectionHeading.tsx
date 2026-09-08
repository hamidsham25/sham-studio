import PreviewEyebrow from "./PreviewEyebrow";

type PreviewSectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export default function PreviewSectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  className = "",
}: PreviewSectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`${isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <PreviewEyebrow>{eyebrow}</PreviewEyebrow> : null}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--preview-muted)]">
          {text}
        </p>
      ) : null}
    </div>
  );
}
