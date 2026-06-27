import { tjenester } from "@/shared/config";

export default function Tjenester() {
  return (
    <section id="tjenester" className="bg-charcoal">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header strip */}
        <div className="flex flex-col gap-4 px-6 pb-8 pt-[72px] sm:flex-row sm:items-center sm:justify-between lg:px-[72px] lg:pt-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-gold" />
            <span className="font-body text-xs tracking-[2px] text-faint">
              {tjenester.label}
            </span>
          </div>
          <p className="font-display text-[22px] italic text-body">
            {tjenester.tagline}
          </p>
        </div>

        {/* Staves */}
        <div className="grid grid-cols-1 border-t border-gold/20 lg:grid-cols-5">
          {tjenester.services.map((s) => (
            <article
              key={s.name}
              className="flex flex-col gap-8 border-b border-gold/20 px-6 py-9 lg:gap-0 lg:border-b-0 lg:border-l lg:px-10 lg:py-[60px] lg:[&:first-child]:border-l-0"
            >
              <span className="h-px w-6 bg-gold" />
              <div className="flex flex-col gap-3 lg:pt-[130px]">
                <span className="font-body text-xs tracking-[1.5px] text-faint">
                  {s.season}
                </span>
                <h3 className="font-display text-[20px] font-medium leading-[1.3] text-cream lg:min-h-[3.25rem]">
                  {s.name}
                </h3>
                <p className="font-body text-sm leading-[1.55] text-body">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
