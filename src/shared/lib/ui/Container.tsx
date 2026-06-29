type ContainerProps = {
  children: React.ReactNode;
  /** Ekstra klasser (layout, vertikal padding, gap osv.). */
  className?: string;
};

/**
 * Sentrert seksjonsbredde med standard horisontal padding.
 * Ett sted å justere maks-bredde og side-marger for hele siden.
 */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 lg:px-[72px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
