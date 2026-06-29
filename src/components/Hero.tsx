import HeroGallery from "./HeroGallery";
import { Reveal } from "@/shared/lib/ui";
import { hero, cta, contact } from "@/shared/config";

export default function Hero() {
  return (
    <section className="border-b border-gold/20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-[761fr_679fr]">
        {/* Hero Nave */}
        <div className="relative flex flex-col justify-center gap-8 px-6 pb-10 pt-20 lg:gap-10 lg:px-[72px] lg:py-24">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-7 bg-gold" />
            <span className="font-body text-[11px] font-semibold tracking-[2.5px] text-gold-muted">
              {hero.mark}
            </span>
          </Reveal>

          <Reveal delay={0.1} as="div">
            <h1 className="font-display text-[40px] font-medium tracking-[-1.2px] text-cream sm:text-[64px] lg:text-[80px] lg:tracking-[-2.5px]">
              {hero.headingLines.map((line) => (
                <span key={line} className="block leading-[1.02]">
                  {line}
                </span>
              ))}
              <span className="block italic leading-[1.02] text-gold">
                {hero.headingAccent}
              </span>
            </h1>
          </Reveal>
        </div>

        {/* Hero Window */}
        <div className="flex flex-col gap-10 bg-charcoal px-6 pb-16 lg:gap-12 lg:px-[60px] lg:py-24">
          <Reveal className="flex flex-col gap-9">
            <p className="whitespace-pre-line font-display text-[20px] font-medium italic leading-[1.3] text-body">
              {hero.taglineLines.join("\n")}
            </p>
            <p className="max-w-[440px] font-body text-[17px] font-normal leading-[1.6] text-body">
              {hero.lead}
            </p>
          </Reveal>

          <Reveal delay={0.1} as="div">
            <HeroGallery />
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-[18px]">
            <a
              href={cta.href}
              className="flex items-center justify-center rounded-[2px] bg-gold py-[18px] font-body text-base font-bold text-charcoal transition-opacity hover:opacity-90"
            >
              {cta.label}
            </a>
            <p className="font-body text-[13px] text-faint">
              <a
                href={contact.phoneHref}
                className="transition-colors hover:text-gold"
              >
                {contact.phone}
              </a>
              {"  ·  "}
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-gold"
              >
                {contact.email}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
