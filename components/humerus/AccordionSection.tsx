"use client";

import { useState } from "react";
import type { AccordionColorTheme } from "@/lib/step-themes";

interface AccordionSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Controlled: when provided, open state is controlled by parent */
  open?: boolean;
  onToggle?: () => void;
  /** Custom color theme for step-level accordions */
  colorTheme?: AccordionColorTheme;
  /** Semantic heading level for the accordion title */
  headingLevel?: "h2" | "h3" | "span";
  /** Additional classes for the heading text */
  headingClassName?: string;
}

export function AccordionSection({
  id,
  title,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  colorTheme,
  headingLevel: HeadingTag = "span",
  headingClassName,
}: AccordionSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const outerBorder = colorTheme
    ? `mb-4 overflow-hidden rounded-2xl border ${colorTheme.borderColor}`
    : "mb-4 overflow-hidden rounded-2xl border border-aq-primary/15";

  const buttonClasses = colorTheme
    ? `flex w-full items-center justify-between ${colorTheme.headerBg} px-5 py-4 text-left font-medium ${colorTheme.headerText} transition-colors ${colorTheme.headerHoverBg}`
    : "flex w-full items-center justify-between bg-aq-sage/60 px-5 py-4 text-left font-medium text-stone-800 transition-colors hover:bg-aq-sage";

  const toggleClasses = colorTheme
    ? `text-xl ${colorTheme.headerText} opacity-70`
    : "text-xl text-stone-500";

  return (
    <div className={outerBorder}>
      <button
        type="button"
        onClick={() =>
          isControlled ? onToggle?.() : setInternalOpen((o) => !o)
        }
        className={buttonClasses}
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-header`}
      >
        <HeadingTag className={headingClassName}>{title}</HeadingTag>
        <span className={toggleClasses}>{open ? "−" : "+"}</span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-header`}
        className={`overflow-hidden transition delay-150 duration-300 ease-in-out ${open ? "max-h-[10000px]" : "max-h-0"}`}
      >
        <div
          className={`border-t border-stone-200/80 p-5 pt-4 ${colorTheme?.contentBg ?? ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
