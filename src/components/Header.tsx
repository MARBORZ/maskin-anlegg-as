import { JeraRune } from "@/shared/lib/ui";
import MobileMenu from "./MobileMenu";
import { brand, nav, cta } from "@/shared/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-charcoal/95 backdrop-blur">
      <div className="mx-auto flex h-[60px] w-full max-w-[1440px] items-center justify-between px-6 lg:h-[88px] lg:px-[72px]">
        <a href="#" className="flex items-center gap-3">
          <JeraRune size={16} className="hidden shrink-0 text-gold lg:block" />
          <span className="font-display text-xl font-normal tracking-[-0.4px] text-cream lg:text-[22px] lg:font-semibold">
            {brand.name}
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
