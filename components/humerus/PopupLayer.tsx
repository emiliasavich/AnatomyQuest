"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PopupLayerProps {
  popupContent: Record<string, { text: string; url?: string }>;
}

const SHOW_DELAY_MS = 500;

export function PopupLayer({ popupContent }: PopupLayerProps) {
  const [popup, setPopup] = useState<{ key: string; x: number; y: number } | null>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popupContainerRef = useRef<HTMLDivElement | null>(null);

  const clearShowTimeout = useCallback(() => {
    if (showTimeoutRef.current != null) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
  }, []);

  const getKeyFromId = useCallback((dataPopupId: string) => {
    if (!dataPopupId) return null;
    return dataPopupId.replace(/^popup-/, "");
  }, []);

  useEffect(() => {
    const handleEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.(".popup-term");
      if (!target || !(target instanceof HTMLElement)) return;
      if (popupContainerRef.current?.contains(target)) return;

      const id = target.getAttribute("data-popup-id");
      const key = getKeyFromId(id || "");
      if (!key || !popupContent[key]) return;

      clearShowTimeout();
      showTimeoutRef.current = setTimeout(() => {
        showTimeoutRef.current = null;
        const rect = target.getBoundingClientRect();
        setPopup({ key, x: rect.left, y: rect.bottom });
      }, SHOW_DELAY_MS);
    };

    const handleOut = (e: MouseEvent) => {
      const fromEl = e.target as HTMLElement;
      if (popupContainerRef.current?.contains(fromEl)) return;

      const toPopup = (e.relatedTarget as HTMLElement)?.closest?.("[data-popup-layer]");
      const toTerm = (e.relatedTarget as HTMLElement)?.closest?.(".popup-term");
      if (toPopup || toTerm) return;
      const fromTerm = fromEl?.closest?.(".popup-term");
      if (!fromTerm) return;

      clearShowTimeout();
      setPopup(null);
    };

    document.addEventListener("mouseover", handleEnter, true);
    document.addEventListener("mouseout", handleOut, true);
    return () => {
      document.removeEventListener("mouseover", handleEnter, true);
      document.removeEventListener("mouseout", handleOut, true);
      clearShowTimeout();
    };
  }, [popupContent, getKeyFromId, clearShowTimeout]);

  const handlePopupLeave = useCallback(() => {
    clearShowTimeout();
    setPopup(null);
  }, [clearShowTimeout]);

  if (!popup) return null;

  const entry = popupContent[popup.key];
  if (!entry?.text) return null;

  const x = popup.x;
  const y = popup.y + 4;

  const popupEl = (
    <div
      ref={popupContainerRef}
      data-popup-layer
      role="tooltip"
      className="popup-layer-box fixed z-[100] max-w-sm rounded-xl border border-stone-200 bg-white p-4 shadow-md"
      style={{
        left: x,
        top: y,
        contain: "layout paint",
        willChange: "transform",
        transform: "translateZ(0)",
        pointerEvents: "auto",
      }}
      onMouseLeave={handlePopupLeave}
    >
      <div
        className="popup-layer-content prose prose-stone prose-sm max-w-none text-stone-700"
        style={{ maxHeight: "min(60vh, 280px)", overflowY: "auto" }}
      >
        <div
          className="prose prose-stone prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: entry.text }}
        />
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(popupEl, document.body);
}
