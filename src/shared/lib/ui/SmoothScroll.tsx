"use client";

import { useEffect } from "react";

/**
 * Fanger klikk på interne anker-lenker (href="#..."), scroller mykt til
 * målet og fjerner hash-fragmentet fra URL-en — slik at adressen holdes ren.
 */
export default function SmoothScroll() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      // Kun rene id-ankere (#, #navn) — ignorer alt annet
      if (!hash || (hash !== "#" && !/^#[\w-]+$/.test(hash))) return;

      e.preventDefault();

      const el =
        hash === "#" ? document.body : document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });

      // Hold URL-en ren — uten hash-fragment
      history.replaceState(null, "", location.pathname + location.search);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
