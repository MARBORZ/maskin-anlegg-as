import ContactForm from "./ContactForm";
import { Container, SectionLabel } from "@/shared/lib/ui";
import { kontakt } from "@/shared/config";

export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-charcoal">
      <Container className="flex flex-col gap-8 pb-16 pt-[72px] lg:flex-row lg:gap-24 lg:py-[120px]">
        {/* Left */}
        <div className="flex flex-col gap-7 lg:w-[480px] lg:shrink-0">
          <SectionLabel text={kontakt.label} />
          <h2 className="font-display text-[36px] font-medium leading-[1.02] tracking-[-1.2px] text-cream lg:text-[52px]">
            {kontakt.heading}
          </h2>
          <p className="font-body text-[17px] leading-[1.5] text-body">
            {kontakt.lead}
          </p>

          <div className="flex flex-col gap-[18px] pt-9">
            {kontakt.details.map((d) => {
              const href = "href" in d ? d.href : undefined;
              return (
                <div key={d.label} className="flex flex-col gap-1">
                  <span className="font-body text-xs tracking-[1.5px] text-gold">
                    {d.label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit font-body text-[18px] text-cream transition-colors hover:text-gold"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <span className="font-body text-[18px] text-cream">
                      {d.value}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
