"use client";

import { useState } from "react";
import Image from "next/image";

type ViewEntry = Record<string, string[]>;

const VIEW_TOOLTIPS: Record<string, string> = {
  anterior: "Front view",
  posterior: "Back view",
  lateral: "Outer side view, away from the midline",
  medial: "Inner side view, toward the midline",
  superior: "Top-down view",
  inferior: "Bottom-up view",
};

const LAYER_TOOLTIPS: Record<string, string> = {
  isolated: "Show bone by itself",
  "not isolated": "Show bone with surrounding structures",
  default: "Default layer",
};
const getViewNames = (views: ViewEntry[]): string[] => {
  const names: string[] = [];
  views.forEach((v) => {
    Object.keys(v).forEach((k) => {
      if (!names.includes(k)) names.push(k);
    });
  });
  return names;
};

function getLayersForView(
  views: ViewEntry[] | ViewEntry,
  viewName: string,
): string[] {
  if (Array.isArray(views)) {
    const entry = views.find((v) => v[viewName]);
    return entry?.[viewName] || ["default"];
  }
  return (views as ViewEntry)[viewName] || ["default"];
}

interface ImageViewerProps {
  basePath: string;
  baseName: string;
  views: ViewEntry[] | ViewEntry;
  altBase?: string;
  /** Step 3 neighbors: use square (1:1) aspect ratio */
  aspectRatio?: "square" | "auto";
  /** If set, only this view is used and view selector is hidden (e.g. "anterior" for overview) */
  singleView?: string;
  /** If true, use "default" layer as main image and the other as hover (overview: labeled first, isolated on hover) */
  preferDefaultLayer?: boolean;
}

export function ImageViewer({
  basePath,
  baseName,
  views,
  altBase,
  aspectRatio = "auto",
  singleView,
  preferDefaultLayer,
}: ImageViewerProps) {
  const viewsArray = Array.isArray(views) ? views : [views];
  const viewNames = getViewNames(viewsArray);
  const effectiveView =
    singleView && viewNames.includes(singleView)
      ? singleView
      : viewNames[0] || "anterior";
  const [currentView, setCurrentView] = useState(effectiveView);
  const viewLayers = getLayersForView(views, effectiveView);
  const [layerIndex, setLayerIndex] = useState(0);
  const layer = viewLayers[layerIndex] || "default";

  const hasHoverLayers = viewLayers.length === 2;
  const [activeLayerIdx, setActiveLayerIdx] = useState(0);
  const [showLabeled, setShowLabeled] = useState(true);
  const defaultLayer = (() => {
    if (!hasHoverLayers) return viewLayers[0];
    if (preferDefaultLayer && viewLayers.includes("default")) return "default";
    return viewLayers[0];
  })();
  const hoverLayer = hasHoverLayers
    ? preferDefaultLayer && viewLayers.includes("default")
      ? viewLayers.find((l) => l !== "default")!
      : viewLayers[1]
    : null;
  const layers = hasHoverLayers ? [defaultLayer, hoverLayer!] : [layer];

  const viewForSrc = singleView ? effectiveView : currentView;
  const unlabeledBasePath = basePath.replace("labeled", "unlabeled");
  const activeLayer = hasHoverLayers ? layers[activeLayerIdx] : layer;
  const activeBasePath =
    hasHoverLayers && !showLabeled ? unlabeledBasePath : basePath;
  const activeSrc = `/assets/images/bones/humerus/${activeBasePath}/${baseName} - ${viewForSrc} - ${activeLayer}.webp`;
  const activeAlt = altBase
    ? `${altBase} - ${viewForSrc} - ${activeLayer}`
    : `${baseName} - ${viewForSrc} - ${activeLayer}`;

  const handleImageClick = hasHoverLayers
    ? () => setShowLabeled((prev) => !prev)
    : undefined;

  const handleLabelButton = (idx: number) => {
    setActiveLayerIdx(idx);
  };

  // Keep for non-hasHoverLayers fallback
  const defaultSrc = `/assets/images/bones/humerus/${basePath}/${baseName} - ${viewForSrc} - ${layer}.webp`;
  const defaultAlt = altBase
    ? `${altBase} - ${viewForSrc} - ${layer}`
    : `${baseName} - ${viewForSrc} - ${layer}`;

  const isSquare = aspectRatio === "square";
  const size = isSquare ? 260 : 260;
  const [hasError, setHasError] = useState(false);

  return (
    <div className="space-y-2">
      <div
        className={`relative overflow-hidden rounded-xl border border-aq-primary/15 bg-aq-sage/30 ${hasHoverLayers ? "cursor-pointer" : ""} ${isSquare ? "aspect-square w-[260px] max-w-[260px]" : "max-w-[260px]"}`}
        title={
          hasHoverLayers && !hasError ? "Click to switch layers" : undefined
        }
        onClick={handleImageClick}
      >
        {hasError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <svg
              className="h-8 w-8 text-stone-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className="text-xs text-stone-400">Image not available</p>
          </div>
        ) : (
          <Image
            key={`${viewForSrc}-${hasHoverLayers ? activeLayer : layer}`}
            src={hasHoverLayers ? activeSrc : defaultSrc}
            alt={hasHoverLayers ? activeAlt : defaultAlt}
            width={size}
            height={isSquare ? size : 208}
            className={`w-full h-full ${isSquare ? "object-cover" : "object-contain"}`}
            unoptimized
            onError={() => setHasError(true)}
          />
        )}
      </div>
      {!singleView && (
        <div className="flex flex-wrap gap-2">
          {viewNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCurrentView(name)}
              title={VIEW_TOOLTIPS[name]}
              className={`rounded-lg px-3 py-1.5 text-sm capitalize transition-colors ${currentView === name ? "bg-aq-primary text-white" : "bg-stone-200/80 text-stone-700 hover:bg-stone-300"}`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
      {viewLayers.length > 1 && !hasHoverLayers && (
        <div className="flex flex-wrap gap-2">
          {viewLayers.map((l, i) => (
            <button
              key={l}
              type="button"
              onClick={() => setLayerIndex(i)}
              title={LAYER_TOOLTIPS[l]}
              className={`rounded-lg px-2 py-1 text-xs capitalize transition-colors ${layerIndex === i ? "bg-stone-700 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
      {hasHoverLayers && (
        <p className="text-xs text-stone-500">
          Click image to {showLabeled ? "hide" : "reveal"} labels.
        </p>
      )}
      {hasHoverLayers && (
        <div className="flex flex-wrap gap-2">
          {layers.map((l, i) => (
            <button
              key={l}
              type="button"
              onClick={() => handleLabelButton(i)}
              title={
                LAYER_TOOLTIPS[l] ??
                (l === "isolated"
                  ? "Show bone by itself"
                  : "Show bone with surrounding structures")
              }
              className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors ${activeLayerIdx === i ? "bg-aq-primary text-white" : "bg-stone-200/80 text-stone-700 hover:bg-stone-300"}`}
            >
              {l === "isolated" ? "Isolated" : "Complete"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
