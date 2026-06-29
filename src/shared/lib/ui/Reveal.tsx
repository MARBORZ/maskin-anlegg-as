"use client";

import { motion, useReducedMotion } from "motion/react";
import { useIsDesktop } from "./useIsDesktop";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Forsinkelse i sekunder (for stagger). */
  delay?: number;
  /** HTML-tag for wrapperen. Default "div". */
  as?: "div" | "section" | "li" | "article";
};

/**
 * Mykt fade-up når elementet ruller inn i visningen. Kun på desktop og når
 * brukeren tillater bevegelse — ellers rendres innholdet statisk (mobilregel:
 * ingen animasjoner).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();

  if (!isDesktop || reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
