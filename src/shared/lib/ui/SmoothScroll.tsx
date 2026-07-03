"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fanger klikk på interne anker-lenker ("#x" og "/#x"), scroller mykt til
 * målet og holder URL-en ren (uten hash). Fra undersider får <Link>
 * navigere hjem — hashen ryddes bort etter ankomst (pathname-effekten).
 * Lytteren kjører i capture-fasen slik at preventDefault() skjer før
 * Next sin router (Link hopper over navigasjon når defaultPrevented).
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  // Rydd bort hash etter navigasjon (f.eks. /personvern → /#kontakt)
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", location.pathname + location.search);
  }, [pathname]);

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
        // Fra underside: la <Link> navigere hjem (hash ryddes på ankomst)
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

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
