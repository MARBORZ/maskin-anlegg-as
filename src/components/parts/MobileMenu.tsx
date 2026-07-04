"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { brand, nav, cta, contact } from "@/shared/config";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lås body-scroll mens menyen er åpen
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div className="fixed inset-0 z-[60] flex flex-col bg-charcoal lg:hidden">
      {/* Top bar */}
      <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-gold/20 px-6">
        <span className="font-display text-xl tracking-[-0.4px] text-cream">
          {brand.name}
        </span>
        <button
          type="button"
          aria-label="Lukk meny"
          onClick={() => setOpen(false)}
          className="text-cream"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex flex-col px-6 pt-12">
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="border-b border-gold/20 py-6 font-display text-[30px] text-cream"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-6 pt-10">
        <Link
          href={cta.href}
          onClick={() => setOpen(false)}
          className="flex h-[52px] items-center justify-center rounded-[2px] bg-gold font-body text-base font-semibold text-charcoal"
        >
          {cta.label}
        </Link>
      </div>

      {/* Bottom */}
      <div className="mt-auto flex flex-col gap-1 px-6 pb-14 pt-5">
        <span className="font-display text-[13px] italic text-faint">
          {brand.tagline}
        </span>
        <a
          href={`mailto:${contact.email}`}
          className="font-body text-[13px] text-faint transition-colors hover:text-gold"
        >
          {contact.email}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Åpne meny"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="text-cream lg:hidden"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {open && mounted && createPortal(overlay, document.body)}
    </>
  );
}
