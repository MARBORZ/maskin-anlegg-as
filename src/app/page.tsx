import Hero from "@/components/sections/Hero";
import JeraSection from "@/components/sections/JeraSection";
import Tjenester from "@/components/sections/Tjenester";
import Trust from "@/components/sections/Trust";
import Bio from "@/components/sections/Bio";
import Kontakt from "@/components/sections/Kontakt";
import SectionSkeleton from "@/components/parts/SectionSkeleton";
import { LazyReveal } from "@/shared/lib/ui";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <JeraSection />
      <Tjenester />
      <Trust />
      {/* Anker-id ligger på wrapperen slik at #-lenker virker før innholdet er montert */}
      <LazyReveal id="om" skeleton={<SectionSkeleton />} minHeight={700}>
        <Bio />
      </LazyReveal>
      <LazyReveal id="kontakt" skeleton={<SectionSkeleton />} minHeight={700}>
        <Kontakt />
      </LazyReveal>
    </>
  );
}
