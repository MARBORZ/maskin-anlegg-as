"use client";

import { useState } from "react";
import { kontakt, type FormField } from "@/shared/config";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full border-b border-gold/20 bg-transparent pb-3.5 font-body text-[17px] text-cream placeholder:text-faint focus:border-gold focus:outline-none";

function Field({ field }: { field: FormField }) {
  const required = "required" in field && field.required;
  const type = "type" in field ? field.type : "text";
  const multiline = "multiline" in field && field.multiline;
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={field.name} className="font-body text-xs tracking-[1.5px] text-gold">
        {field.label}
      </label>
      {multiline ? (
        <textarea
          id={field.name}
          name={field.name}
          rows={3}
          required={required}
          placeholder={field.placeholder}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={field.name}
          name={field.name}
          type={type}
          required={required}
          placeholder={field.placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { fields, submit, sending, micro, success, error } = kontakt.form;

  // Grupper «half»-felter ved siden av hverandre, resten på egen rad.
  const rows: FormField[][] = [];
  for (const field of fields) {
    const last = rows[rows.length - 1];
    const isHalf = "half" in field && field.half;
    if (isHalf && last && "half" in last[0] && last[0].half && last.length === 1) {
      last.push(field);
    } else {
      rows.push([field]);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      {rows.map((row, i) => (
        <div key={i} className="flex flex-col gap-7 sm:flex-row sm:gap-8">
          {row.map((field) => (
            <Field key={field.name} field={field} />
          ))}
        </div>
      ))}

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex items-center justify-center gap-3 self-start rounded-[2px] border border-gold bg-gold px-8 py-[18px] font-body text-base font-semibold text-charcoal transition-colors duration-200 hover:bg-transparent hover:text-gold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-charcoal/40 border-t-charcoal" />
          )}
          {status === "sending" ? sending : submit}
        </button>

        {status === "success" ? (
          <p className="font-body text-[13px] italic text-gold">{success}</p>
        ) : status === "error" ? (
          <p className="font-body text-[13px] italic text-[#c97b4b]">{error}</p>
        ) : (
          <p className="font-body text-[13px] italic text-faint">{micro}</p>
        )}
      </div>
    </form>
  );
}
