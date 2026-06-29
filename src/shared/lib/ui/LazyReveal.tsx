"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useIsDesktop } from "./useIsDesktop";

type LazyRevealProps = {
  children: React.ReactNode;
  /** Synlig lasteplassholder som vises til seksjonen ruller inn. */
  skeleton: React.ReactNode;
  /** Reservert høyde mens skjelettet vises (unngår layout-hopp). */
  minHeight?: number;
};

/**
 * Lazy-montering av en seksjon: viser et tydelig skjelett til seksjonen
 * nærmer seg visningen, og bytter så til innholdet med et mykt fade.
 * På mobil / ved redusert bevegelse vises innholdet direkte.
 *
 * Viktig: ref-elementet rendres ALLTID, slik at IntersectionObserver
 * (useInView) faktisk får et element å observere.
 */
export default function LazyReveal({
  children,
  skeleton,
  minHeight = 600,
}: LazyRevealProps) {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const animate = isDesktop && !reduceMotion;
  const showContent = !animate || inView;

  return (
    <div ref={ref} style={{ minHeight: showContent ? undefined : minHeight }}>
      {!showContent ? (
        skeleton
      ) : animate ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </div>
  );
}
