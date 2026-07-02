type SectionLabelProps = {
  text: string;
  /** Farge på teksten. "faint" (standard) eller "gold". */
  tone?: "faint" | "gold";
};

/** Gull-strek + liten versal-etikett — gjentatt øverst i seksjonene. */
export default function SectionLabel({ text, tone = "faint" }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-4 bg-gold" />
      <span
        className={`font-body text-xs tracking-[2px] ${tone === "gold" ? "text-gold" : "text-faint"}`}
      >
        {text}
      </span>
    </div>
  );
}
