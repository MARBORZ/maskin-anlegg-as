import Hero from "@/components/Hero";
import JeraSection from "@/components/JeraSection";
import Tjenester from "@/components/Tjenester";
import Trust from "@/components/Trust";
import Bio from "@/components/Bio";
import Kontakt from "@/components/Kontakt";

export const dynamic = "force-static";


export default function Home() {
  return (
    <>
      <Hero />
      <JeraSection />
      <Tjenester />
      <Trust />
      <Bio />
      <Kontakt />
    </>
  );
}
