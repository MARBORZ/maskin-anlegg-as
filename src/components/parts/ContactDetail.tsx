type ContactDetailProps = {
  label: string;
  value: string;
  href?: string;
  /** Tailwind-størrelse på verdien, f.eks. "text-[15px]" | "text-[18px]". */
  valueClass?: string;
};

/**
 * Kontaktdetalj: liten gull-etikett over en verdi (evt. som lenke).
 * Gjenbrukes i Bio og Kontakt. Eksterne http-lenker åpnes i ny fane.
 */
export default function ContactDetail({
  label,
  value,
  href,
  valueClass = "text-[15px]",
}: ContactDetailProps) {
  const base = `w-fit font-body ${valueClass} text-cream`;
  const external = href?.startsWith("http");

  return (
    <div className="flex flex-col gap-1">
      <span className="font-body text-[11px] tracking-[1.5px] text-gold">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`${base} transition-colors hover:text-gold`}
        >
          {value}
        </a>
      ) : (
        <span className={base}>{value}</span>
      )}
    </div>
  );
}
