type SkeletonProps = {
  className?: string;
  /** Rund av hjørnene (default true). */
  rounded?: boolean;
};

/**
 * Skjelett-kloss med gull-shimmer (klassen .shimmer i globals.css).
 * Brukes til å bygge synlige lasteplassholdere.
 */
export default function Skeleton({ className, rounded = true }: SkeletonProps) {
  return (
    <div
      className={`shimmer border border-gold/15 bg-charcoal-panel ${rounded ? "rounded-[3px]" : ""} ${className ?? ""}`}
    />
  );
}
