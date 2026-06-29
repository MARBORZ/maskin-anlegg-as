"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "motion/react";
import { useIsDesktop } from "@/shared/lib/ui";
import { gallery } from "@/shared/config";
import PhotoPlaceholder from "./PhotoPlaceholder";

type Slide = (typeof gallery)[number];
const items: ReadonlyArray<Slide> = gallery;

const EMBLA_OPTIONS = { loop: true, align: "start" } as const;
const FRAME = "relative h-[300px] w-full overflow-hidden border border-gold/20";

function Arrow({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Forrige bilde" : "Neste bilde"}
      className={`absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-gold/30 bg-charcoal/55 text-cream backdrop-blur-sm transition-colors hover:bg-gold hover:text-charcoal ${
        dir === "prev" ? "left-3" : "right-3"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {dir === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

export default function HeroGallery() {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();

  // Autoplay kun på desktop med bevegelse tillatt. Sveip/paginering virker
  // overalt (også mobil — Embla håndterer touch-dra som overflow-scroll).
  const plugins = useMemo(
    () =>
      isDesktop && !reduceMotion
        ? [
            Autoplay({
              delay: 4500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]
        : [],
    [isDesktop, reduceMotion],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS, plugins);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Tom liste → fall tilbake til "Bilde kommer"-plassholder
  if (items.length === 0) {
    return <PhotoPlaceholder className="h-[300px] w-full" />;
  }

  return (
    <div className={FRAME}>
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {items.map((g, i) => (
            <div key={g.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient for kontrast bak kontroller */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />

      <Arrow dir="prev" onClick={() => emblaApi?.scrollPrev()} />
      <Arrow dir="next" onClick={() => emblaApi?.scrollNext()} />

      {/* Paginering */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Vis bilde ${i + 1}`}
            aria-current={i === selected}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selected ? "w-6 bg-gold" : "w-1.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
