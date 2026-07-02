import { JeraRune } from "@/shared/lib/ui";
import MobileMenu from "@/components/parts/MobileMenu";
import { brand, nav, cta } from "@/shared/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-charcoal/95 backdrop-blur">
      <div className="mx-auto flex h-[60px] w-full max-w-[1440px] items-center justify-between px-6 lg:h-[88px] lg:px-[72px]">
        <a href="#" aria-label={brand.fullName} className="flex items-center">
          <span className="flex items-center gap-1.5 font-display text-2xl font-semibold tracking-[-0.4px] text-cream lg:text-[40px]">
            {brand.initials[0]}
            <JeraRune size={25} className="shrink-0 text-gold" />
            {brand.initials.slice(1)}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[15px] font-medium text-body transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={cta.href}
          className="hidden rounded-[2px] border border-gold px-5 py-3 font-body text-[15px] font-bold text-gold transition-colors hover:bg-gold hover:text-charcoal lg:inline-flex"
        >
          {cta.label}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
