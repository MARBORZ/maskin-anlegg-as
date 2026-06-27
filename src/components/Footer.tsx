import { brand, footer } from "@/shared/config";

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 pb-8 pt-12 lg:px-[72px] lg:pb-9 lg:pt-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-2.5">
            <span className="font-display text-2xl text-cream">
              {brand.name}
            </span>
            <span className="font-body text-sm italic text-faint">
              {brand.tagline}
            </span>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            {footer.navCols.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="font-body text-xs tracking-[1.5px] text-gold">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-sm text-body transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <span className="h-px w-full bg-gold/20" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-body text-[13px] text-faint">
            {footer.copyrightPrefix(new Date().getFullYear())}
            <a
              href={footer.orgNrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              {footer.orgNr}
            </a>
          </span>
          <a
            href={footer.personvern.href}
            className="font-body text-[13px] text-faint transition-colors hover:text-body"
          >
            {footer.personvern.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
