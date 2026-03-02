"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

interface HoverTooltipProps {
  popupContent: Record<string, { text: string; url?: string }>;
}

const HOVER_DELAY_MS = 300;

interface TooltipEntry {
  key: string;
  x: number;
  y: number;
}

export function HoverTooltip({ popupContent }: HoverTooltipProps) {
  const [tooltip, setTooltip] = useState<TooltipEntry | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.(".popup-term");
      if (!target || !(target instanceof HTMLElement)) return;

      const id = target.getAttribute("data-popup-id");
      if (!id) return;
      const key = id.replace(/^popup-/, "");
      if (!popupContent[key]) return;

      clearTimer();
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        const rect = target.getBoundingClientRect();
        setTooltip({ key, x: rect.left, y: rect.bottom + 4 });
      }, HOVER_DELAY_MS);
    };

    const handleLeave = () => {
      clearTimer();
      setTooltip(null);
    };

    document.addEventListener("mouseover", handleEnter, true);
    document.addEventListener("mouseout", handleLeave, true);
    return () => {
      document.removeEventListener("mouseover", handleEnter, true);
      document.removeEventListener("mouseout", handleLeave, true);
      clearTimer();
    };
  }, [popupContent, clearTimer]);

  if (!tooltip || !popupContent[tooltip.key]) return null;
  if (typeof document === "undefined") return null;

  const content = popupContent[tooltip.key];
  // Strip HTML tags for brief preview
  const briefText = content.text
    .replace(/<[^>]+>/g, "")
    .split("\n")[0]
    .slice(0, 100);

  return createPortal(
    <div
      role="tooltip"
      className="pointer-events-none fixed z-50 max-w-xs rounded-lg border border-aq-primary/20 bg-aq-sage/95 px-3 py-2 shadow-sm"
      style={{
        left: tooltip.x,
        top: tooltip.y,
        contain: "layout paint",
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <p className="text-xs leading-relaxed text-stone-700">{briefText}…</p>
    </div>,
    document.body,
  );
}
