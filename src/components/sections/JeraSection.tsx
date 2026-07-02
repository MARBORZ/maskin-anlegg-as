import { Container, JeraRune, Reveal, SectionLabel } from "@/shared/lib/ui";
import { jera } from "@/shared/config";

export default function JeraSection() {
  return (
    <section id="jera" className="bg-charcoal">
      <Container className="grid grid-cols-1 gap-20 pb-8 pt-[72px] lg:grid-cols-[380px_1fr] lg:gap-20 lg:py-[100px]">
        {/* Venstre: tekst + legend */}
        <Reveal className="flex flex-col gap-7">
          <SectionLabel text={jera.label} tone="gold" />

          <h2 className="font-display text-[34px] font-medium leading-[1.02] tracking-[-1.1px] text-cream lg:text-[52px]">
            {jera.heading}
          </h2>

          <p className="font-body text-[17px] font-normal leading-[1.55] text-body">
            {jera.lead}
          </p>

          <ul className="flex flex-col gap-[18px] pt-7">
            {jera.seasons.map((s) => (
              <li key={s.name} className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold-muted" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[18px] italic text-cream">
                      {s.name}
                    </span>
                    <span className="font-body text-[10px] tracking-[0.5px] text-gold-muted">
                      {s.period}
                    </span>
                  </div>
                  <p className="font-body text-[13px] font-medium leading-[1.5] text-body">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Høyre: hjul med rune (kun desktop) */}
        <Reveal
          delay={0.15}
          className="relative hidden aspect-square w-full max-w-[760px] items-center justify-center justify-self-center lg:flex"
        >
          {jera.seasons.map((s, i) => {
            const pos = [
              "left-1/2 top-6 -translate-x-1/2",
              "right-6 top-1/2 -translate-y-1/2",
              "bottom-6 left-1/2 -translate-x-1/2",
              "left-6 top-1/2 -translate-y-1/2",
            ][i];
            return (
              <span
                key={s.name}
                className={`pointer-events-none absolute text-center font-display text-[18px] italic text-body ${pos}`}
              >
                {s.name}{" "}
                <span className="text-gold-muted">· {s.period}</span>
              </span>
            );
          })}

          <div className="flex flex-col items-center gap-9">
            <span className="font-body text-[11px] font-semibold tracking-[3px] text-gold-muted">
              {jera.runeLabel}
            </span>
            <span className="h-px w-6 bg-gold-muted" />
            <JeraRune size={220} className="my-2 text-gold" />
            <span className="h-px w-6 bg-gold-muted" />
            <span className="font-display text-base italic text-gold-muted">
              {jera.runeCaption}
            </span>
          </div>
        </Reveal>

        {/* Mobil: rune sentrert under listen */}
        <div className="flex flex-col items-center gap-7 lg:hidden">
          <span className="font-body text-[11px] font-semibold tracking-[3px] text-gold-muted">
            {jera.runeLabel}
          </span>
          <JeraRune size={120} className="my-1 text-gold" />
          <span className="font-display text-base italic text-gold-muted">
            {jera.runeCaption}
          </span>
        </div>
      </Container>
    </section>
  );
}
