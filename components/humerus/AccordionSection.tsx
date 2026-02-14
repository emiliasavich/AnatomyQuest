"use client";

import { useState } from "react";

interface AccordionSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionSection({
  id,
  title,
  children,
  defaultOpen = false,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-aq-primary/15">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-aq-sage/60 px-5 py-4 text-left font-medium text-stone-800 transition-colors hover:bg-aq-sage"
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-header`}
      >
        <span>{title}</span>
        <span className="text-xl text-stone-500">{open ? "−" : "+"}</span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-header`}
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[5000px]" : "max-h-0"}`}
      >
        <div className="border-t border-stone-200/80 p-5 pt-4">{children}</div>
      </div>
    </div>
  );
}
