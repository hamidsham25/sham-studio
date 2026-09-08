import PreviewIcon from "./PreviewIcon";

type PreviewStarsProps = {
  /** 0–5, Teilfüllung wird anteilig dargestellt. */
  rating: number;
  className?: string;
};

export default function PreviewStars({
  rating,
  className = "",
}: PreviewStarsProps) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(Math.max(rating - index, 0), 1);

        return (
          <span key={index} className="relative inline-block">
            <PreviewIcon
              name="star"
              className="h-4 w-4 text-[var(--preview-border)]"
            />
            {fill > 0 ? (
              <span
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <PreviewIcon
                  name="star"
                  className="h-4 w-4 text-[var(--preview-primary)]"
                />
              </span>
            ) : null}
          </span>
        );
      })}
    </span>
  );
}
