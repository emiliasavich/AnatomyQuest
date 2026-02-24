"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PopupLayerProps {
  popupContent: Record<string, { text: string; url?: string }>;
}

const SHOW_DELAY_MS = 500;
const HIDE_DELAY_MS = 150;

interface PopupEntry {
  key: string;
  x: number;
  y: number;
}

export function PopupLayer({ popupContent }: PopupLayerProps) {
  const [popupStack, setPopupStack] = useState<PopupEntry[]>([]);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearShowTimeout = useCallback(() => {
    if (showTimeoutRef.current != null) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
  }, []);

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current != null) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const getKeyFromId = useCallback((dataPopupId: string) => {
    if (!dataPopupId) return null;
    return dataPopupId.replace(/^popup-/, "");
  }, []);

  const getPopupDepth = useCallback((el: HTMLElement): number => {
    const popup = el.closest("[data-popup-depth]");
    if (!popup) return -1;
    return parseInt(popup.getAttribute("data-popup-depth") || "0", 10);
  }, []);

  useEffect(() => {
    const handleEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.(".popup-term");
      if (!target || !(target instanceof HTMLElement)) return;

      const id = target.getAttribute("data-popup-id");
      const key = getKeyFromId(id || "");
      if (!key || !popupContent[key]) return;

      clearShowTimeout();
      clearHideTimeout();

      const depth = getPopupDepth(target);

      showTimeoutRef.current = setTimeout(() => {
        showTimeoutRef.current = null;
        const rect = target.getBoundingClientRect();
        const newEntry: PopupEntry = { key, x: rect.left, y: rect.bottom };

        if (depth === -1) {
          // Term is in the main page — replace entire stack
          setPopupStack([newEntry]);
        } else {
          // Term is inside popup at `depth` — push as next level, trim anything above
          setPopupStack((prev) => [...prev.slice(0, depth + 1), newEntry]);
        }
      }, SHOW_DELAY_MS);
    };

    const handleOut = (e: MouseEvent) => {
      const fromEl = e.target as HTMLElement;
      const fromTerm = fromEl?.closest?.(".popup-term");
      if (!fromTerm) return;

      // Always cancel a pending show when leaving a term
      clearShowTimeout();

      const toEl = e.relatedTarget as HTMLElement | null;
      const toPopup = toEl?.closest?.("[data-popup-layer]");
      const toTerm = toEl?.closest?.(".popup-term");
      if (toPopup || toTerm) return;

      clearHideTimeout();
      hideTimeoutRef.current = setTimeout(() => {
        hideTimeoutRef.current = null;
        setPopupStack([]);
      }, HIDE_DELAY_MS);
    };

    document.addEventListener("mouseover", handleEnter, true);
    document.addEventListener("mouseout", handleOut, true);
    return () => {
      document.removeEventListener("mouseover", handleEnter, true);
      document.removeEventListener("mouseout", handleOut, true);
      clearShowTimeout();
      clearHideTimeout();
    };
  }, [popupContent, getKeyFromId, getPopupDepth, clearShowTimeout, clearHideTimeout]);

  const handlePopupEnter = useCallback((depth: number) => {
    clearHideTimeout();
    // Close any popups above this depth
    setPopupStack((prev) =>
      prev.length > depth + 1 ? prev.slice(0, depth + 1) : prev,
    );
  }, [clearHideTimeout]);

  const handlePopupLeave = useCallback(() => {
    clearShowTimeout();
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      hideTimeoutRef.current = null;
      setPopupStack([]);
    }, HIDE_DELAY_MS);
  }, [clearShowTimeout, clearHideTimeout]);

  if (popupStack.length === 0) return null;
  if (typeof document === "undefined") return null;

  return (
    <>
      {popupStack.map((entry, depth) => {
        const content = popupContent[entry.key];
        if (!content?.text) return null;

        return createPortal(
          <div
            key={`${entry.key}-${depth}`}
            data-popup-layer
            data-popup-depth={depth}
            role="tooltip"
            className="popup-layer-box fixed max-w-sm rounded-xl border border-stone-200 bg-white p-4 shadow-md"
            style={{
              left: entry.x,
              top: entry.y + 4,
              zIndex: 100 + depth,
              contain: "layout paint",
              willChange: "transform",
              transform: "translateZ(0)",
              pointerEvents: "auto",
            }}
            onMouseEnter={() => handlePopupEnter(depth)}
            onMouseLeave={handlePopupLeave}
          >
            <div
              className="popup-layer-content prose prose-stone prose-sm max-w-none text-stone-700"
              style={{ maxHeight: "min(60vh, 280px)", overflowY: "auto" }}
            >
              <div
                className="prose prose-stone prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: content.text }}
              />
            </div>
          </div>,
          document.body,
        );
      })}
    </>
  );
}
