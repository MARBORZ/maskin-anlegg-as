import { Container, Skeleton } from "@/shared/lib/ui";

/**
 * Generisk lasteplassholder for en seksjon — ett mønster som speiler den
 * typiske strukturen (label, tittel, tekst + en stor blokk). Gjenbrukes på
 * alle lazy-seksjoner uavhengig av innhold; legg til en ny seksjon = wrap den,
 * ingen ny skjelett-kode.
 */
export default function SectionSkeleton() {
  return (
    <section className="bg-charcoal">
      <Container className="flex flex-col gap-12 py-[120px] lg:flex-row lg:gap-20">
        {/* Venstre: tekstkolonne */}
        <div className="flex w-full flex-col gap-5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-12 w-2/3" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <div className="flex gap-8 pt-6">
            <Skeleton className="h-10 w-44" />
            <Skeleton className="h-10 w-44" />
          </div>
        </div>

        {/* Høyre: stor blokk (foto / skjema) */}
        <Skeleton className="h-[420px] w-full shrink-0 lg:w-[420px]" />
      </Container>
    </section>
  );
}
