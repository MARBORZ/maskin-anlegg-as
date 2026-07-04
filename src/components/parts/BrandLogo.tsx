"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JeraRune } from "@/shared/lib/ui";
import { brand, routes } from "@/shared/config";

/**
 * Logo-monogram i toppen. På forsiden er den et anker ("#") som gir myk
 * scroll til toppen (via SmoothScroll); fra undersider er den en <Link>
 * hjem uten full omlasting.
 */
export default function BrandLogo() {
  const pathname = usePathname();
  const isHome = pathname === routes.main.path;

  const mark = (
    <span className="flex items-center gap-1.5 font-display text-2xl font-semibold tracking-[-0.4px] text-cream lg:text-[40px]">
      {brand.initials[0]}
      <JeraRune size={25} className="shrink-0 text-gold" />
      {brand.initials.slice(1)}
    </span>
  );

  return isHome ? (
    <a href="#" aria-label={brand.fullName} className="flex items-center">
      {mark}
    </a>
  ) : (
    <Link
      href={routes.main.path}
      aria-label={brand.fullName}
      className="flex items-center"
    >
      {mark}
    </Link>
  );
}
