import PhotoPlaceholder from "./PhotoPlaceholder";
import { bio } from "@/shared/config";

export default function Bio() {
  return (
    <section id="om" className="bg-charcoal lg:bg-charcoal-panel">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 pb-16 pt-[72px] lg:flex-row lg:justify-between lg:gap-20 lg:px-[72px] lg:py-[120px]">
        <PhotoPlaceholder
          variant="user"
          iconSize={24}
          className="h-[360px] w-full shrink-0 lg:h-[460px] lg:w-[340px]"
        />

        <div className="flex flex-col gap-[22px] lg:max-w-[820px] lg:flex-1">
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-gold" />
            <span className="font-body text-xs tracking-[2px] text-faint">
              {bio.label}
            </span>
          </div>

          <h2 className="font-display text-[40px] font-medium leading-none tracking-[-1px] text-cream lg:text-[48px]">
            {bio.name}
          </h2>

          <span className="font-body text-[11px] font-semibold tracking-[2px] text-gold-muted">
            {bio.roleLabel}
          </span>
          <p className="font-display text-[19px] italic text-gold-muted">
            {bio.role}
          </p>

          <span className="h-px w-full bg-gold/20" />

          <span className="font-body text-[11px] font-semibold tracking-[2px] text-gold-muted">
            {bio.omLabel}
          </span>
          <p className="max-w-[560px] font-display text-[19px] italic leading-[1.5] text-body">
            {bio.om}
          </p>

          <div className="flex max-w-[460px] flex-col gap-4 pt-2 sm:flex-row sm:justify-between sm:gap-8">
            {bio.contacts.map((c) => (
              <div key={c.label} className="flex flex-col gap-1">
                <span className="font-body text-[11px] tracking-[1.5px] text-gold">
                  {c.label}
                </span>
                <a
                  href={c.href}
                  className="font-body text-[15px] text-cream transition-colors hover:text-gold"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
