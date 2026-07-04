import Image from "next/image";
import oleImg from "@/assets/bio/Ole.jpg";
import { Container, SectionLabel } from "@/shared/lib/ui";
import ContactDetail from "@/components/parts/ContactDetail";
import { bio } from "@/shared/config";

export default function Bio() {
  return (
    <section className="bg-charcoal lg:bg-charcoal-panel">
      <Container className="flex flex-col gap-8 pb-16 pt-[72px] lg:flex-row lg:justify-between lg:gap-20 lg:py-[120px]">
        <div className="group relative h-[360px] w-full shrink-0 overflow-hidden border border-gold/20 lg:h-[460px] lg:w-[340px]">
          <Image
            src={oleImg}
            alt={bio.name}
            placeholder="blur"
            fill
            sizes="(min-width: 1024px) 340px, 100vw"
            className="scale-[1.35] object-cover object-[50%_28%] transition-transform duration-700 ease-out group-hover:scale-[1.42]"
          />

          {/* Dybde-gradient nedover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />

          {/* Tynn indre gull-ramme */}
          <div className="pointer-events-none absolute inset-3 border border-gold/15" />

          {/* Rolle-merke nede til venstre */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2.5">
            <span className="h-px w-5 bg-gold" />
            <span className="font-body text-[11px] font-semibold tracking-[1.5px] text-cream">
              {bio.role}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[22px] lg:max-w-[820px] lg:flex-1">
          <SectionLabel text={bio.label} />

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
              <ContactDetail
                key={c.label}
                label={c.label}
                value={c.value}
                href={c.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
