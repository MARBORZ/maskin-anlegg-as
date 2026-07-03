"use client";

import { useEffect } from "react";

/**
 * Fanger klikk på interne anker-lenker ("#x" og "/#x"), scroller mykt til
 * målet og holder URL-en ren (uten hash). Lenker av typen "/#x" fra
 * undersider får navigere vanlig hjem — hashen ryddes bort etter ankomst.
 */
export default function SmoothScroll() {
  // Rydd bort hash etter navigasjon fra underside (f.eks. /personvern → /#kontakt)
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", location.pathname + location.search);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>(
        'a[href^="#"], a[href^="/#"]',
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Normaliser: "#" | "#x" | "/#x"
      let hash = href;
      if (/^\/#[\w-]+$/.test(href)) {
        // Fra underside: la nettleseren navigere hjem (hash ryddes på ankomst)
        if (location.pathname !== "/") return;
        hash = href.slice(1);
      } else if (href !== "#" && !/^#[\w-]+$/.test(href)) {
        return;
      }

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
