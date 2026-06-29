type SectionLabelProps = {
  text: string;
};

/** Gull-strek + liten versal-etikett — gjentatt øverst i seksjonene. */
export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-4 bg-gold" />
      <span className="font-body text-xs tracking-[2px] text-faint">
        {text}
      </span>
    </div>
  );
}
