import { Container, Reveal, SectionLabel } from "@/shared/lib/ui";
import { trust } from "@/shared/config";

export default function Trust() {
  return (
    <section id="trust" className="bg-charcoal-trust lg:bg-charcoal-panel">
      <Container className="pb-16 pt-[72px] lg:py-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          {/* Left */}
          <Reveal className="flex max-w-[640px] flex-col gap-7">
            <SectionLabel text={trust.label} />
            <h2 className="font-display text-[36px] font-medium leading-[1.02] tracking-[-1.2px] text-cream lg:text-[56px]">
              {trust.heading}
            </h2>
            <p className="font-body text-[17px] leading-[1.55] text-body">
              {trust.lead}
            </p>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.1} className="flex max-w-[420px] flex-col lg:pt-[18px]">
            {trust.points.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-2 border-t border-gold/20 py-6"
              >
                <h3 className="font-display text-[19px] italic text-cream">
                  {p.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.55] text-body">
                  {p.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal className="mt-16 flex flex-col items-center gap-10 border-t border-gold/20 pt-12 sm:flex-row sm:justify-center sm:gap-20 lg:gap-28">
          {trust.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <span className="font-display text-[36px] italic text-gold">
                {s.value}
              </span>
              <span className="font-body text-[13px] text-faint">
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
