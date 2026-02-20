"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const PREVIEW_DELAY_MS = 500;
const TOOLTIP_WIDTH = 280;

interface AccordionSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Controlled: when provided, open state is controlled by parent */
  open?: boolean;
  onToggle?: () => void;
  /** Optional: image preview shown on hover when accordion is collapsed */
  previewImage?: {
    src: string;
    alt: string;
    description?: string;
  };
}

export function AccordionSection({
  id,
  title,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  previewImage,
}: AccordionSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Dismiss preview when accordion opens
  useEffect(() => {
    if (open) {
      clearTimer();
      setShowPreview(false);
    }
  }, [open, clearTimer]);

  // Dismiss on scroll or resize
  useEffect(() => {
    if (!showPreview) return;
    const dismiss = () => {
      clearTimer();
      setShowPreview(false);
    };
    window.addEventListener("scroll", dismiss, { passive: true, capture: true });
    window.addEventListener("resize", dismiss);
    return () => {
      window.removeEventListener("scroll", dismiss, { capture: true });
      window.removeEventListener("resize", dismiss);
    };
  }, [showPreview, clearTimer]);

  // Cleanup timer on unmount
  useEffect(() => clearTimer, [clearTimer]);

  const handleMouseEnter = useCallback(() => {
    if (open || !previewImage || !buttonRef.current) return;
    if (window.matchMedia("(hover: none)").matches) return;
    clearTimer();
    timerRef.current = setTimeout(() => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();

      // Position below the button, aligned to its left edge (Wikipedia-style)
      let x = rect.left;
      let y = rect.bottom + 4;

      // If it would overflow the right edge, shift left
      if (x + TOOLTIP_WIDTH > window.innerWidth - 8) {
        x = window.innerWidth - TOOLTIP_WIDTH - 8;
      }
      // Keep it on screen horizontally
      x = Math.max(8, x);

      // If it would overflow the bottom, show above the button instead
      if (y + 300 > window.innerHeight) {
        y = rect.top - 300 - 4;
      }

      setPreviewPos({ x, y });
      setShowPreview(true);
    }, PREVIEW_DELAY_MS);
  }, [open, previewImage, clearTimer]);

  const handleMouseLeave = useCallback(() => {
    clearTimer();
    setShowPreview(false);
  }, [clearTimer]);

  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-aq-primary/15">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (isControlled ? onToggle?.() : setInternalOpen((o) => !o))}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
      {showPreview &&
        previewImage &&
        !open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="tooltip"
            className="preview-tooltip-enter fixed z-[100] overflow-hidden rounded-xl border border-stone-200 bg-white shadow-lg"
            style={{
              left: previewPos.x,
              top: previewPos.y,
              width: TOOLTIP_WIDTH,
              pointerEvents: "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="w-full object-contain"
              onError={() => setShowPreview(false)}
            />
            <div className="border-t border-stone-100 px-4 py-3">
              <p className="text-sm font-semibold text-stone-800">{title}</p>
              {previewImage.description && (
                <p className="mt-1 text-xs leading-relaxed text-stone-500">
                  {previewImage.description}
                </p>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
