type PhotoPlaceholderProps = {
  className?: string;
  iconSize?: number;
  variant?: "image" | "user";
};

/** Plassholder for foto: charcoal-blokk + tynn gold-ramme + "Bilde kommer". */
export default function PhotoPlaceholder({
  className,
  iconSize = 16,
  variant = "image",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`shimmer flex flex-col items-center justify-center gap-2.5 border border-gold/20 bg-charcoal-photo text-gold-muted ${className ?? ""}`}
    >
      {variant === "user" ? (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="relative z-10"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
        </svg>
      ) : (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="relative z-10"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-4.5-4.5L4 21" />
        </svg>
      )}
      <span className="relative z-10 font-body text-xs tracking-[1.5px]">
        Bilde kommer
      </span>
    </div>
  );
}
