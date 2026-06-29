import Hero from "@/components/Hero";
import JeraSection from "@/components/JeraSection";
import Tjenester from "@/components/Tjenester";
import Trust from "@/components/Trust";
import Bio from "@/components/Bio";
import Kontakt from "@/components/Kontakt";
import SectionSkeleton from "@/components/SectionSkeleton";
import { LazyReveal } from "@/shared/lib/ui";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <JeraSection />
      <Tjenester />
      <Trust />
      <LazyReveal skeleton={<SectionSkeleton />} minHeight={700}>
        <Bio />
      </LazyReveal>
      <LazyReveal skeleton={<SectionSkeleton />} minHeight={700}>
        <Kontakt />
      </LazyReveal>
    </>
  );
}
