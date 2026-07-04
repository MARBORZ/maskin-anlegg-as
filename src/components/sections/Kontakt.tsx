import ContactForm from "@/components/parts/ContactForm";
import ContactDetail from "@/components/parts/ContactDetail";
import { Container, SectionLabel } from "@/shared/lib/ui";
import { kontakt } from "@/shared/config";

export default function Kontakt() {
  return (
    <section className="bg-charcoal">
      <Container className="flex flex-col gap-10 pb-16 pt-[72px] lg:flex-row lg:gap-24 lg:py-[120px]">
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
            {kontakt.details.map((d) => (
              <ContactDetail
                key={d.label}
                label={d.label}
                value={d.value}
                href={d.href}
                valueClass="text-[18px]"
              />
            ))}
          </div>
        </div>

        {/* Skille på mobil — detaljer og skjema er én kolonne der */}
        <div className="flex items-center gap-4 py-2 lg:hidden">
          <span className="h-px flex-1 bg-gold/20" />
          <span className="font-display text-[15px] italic text-gold-muted">
            Send oss en melding
          </span>
          <span className="h-px flex-1 bg-gold/20" />
        </div>

        {/* Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
