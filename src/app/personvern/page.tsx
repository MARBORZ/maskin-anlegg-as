import type { Metadata } from "next";
import { Container, SectionLabel } from "@/shared/lib/ui";
import { personvern, routes } from "@/shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Personvern",
  description: personvern.intro,
  alternates: { canonical: routes.personvern.path },
};

export default function PersonvernPage() {
  return (
    <section className="bg-charcoal">
      <Container className="pb-24 pt-16 lg:pb-32 lg:pt-24">
        <article className="mx-auto flex max-w-[720px] flex-col gap-8">
          <header className="flex flex-col gap-5">
            <SectionLabel text={personvern.label} />
            <h1 className="font-display text-[36px] font-medium leading-[1.05] tracking-[-1px] text-cream lg:text-[52px]">
              {personvern.heading}
            </h1>
            <p className="font-body text-[13px] text-faint">
              {personvern.updated}
            </p>
            <p className="font-display text-[19px] italic leading-[1.5] text-body">
              {personvern.intro}
            </p>
          </header>

          <span className="h-px w-full bg-gold/20" />

          {personvern.sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-[22px] font-medium text-cream">
                {s.heading}
              </h2>
              <p className="font-body text-[16px] leading-[1.65] text-body">
                {s.body}
              </p>
            </section>
          ))}
        </article>
      </Container>
    </section>
  );
}
