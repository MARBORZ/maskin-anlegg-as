"use client";

import { useEffect, useState } from "react";

/**
 * True når viewport er ≥1024px. Starter som `false` (SSR-trygt) — animasjoner
 * og skjeletoner aktiveres kun på desktop, i tråd med mobilreglene.
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}
