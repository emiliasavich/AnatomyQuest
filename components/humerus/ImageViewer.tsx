"use client";

import { useState } from "react";
import Image from "next/image";

type ViewEntry = Record<string, string[]>;
const getViewNames = (views: ViewEntry[]): string[] => {
  const names: string[] = [];
  views.forEach((v) => {
    Object.keys(v).forEach((k) => {
      if (!names.includes(k)) names.push(k);
    });
  });
  return names;
};

function getLayersForView(views: ViewEntry[] | ViewEntry, viewName: string): string[] {
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

export function ImageViewer({ basePath, baseName, views, altBase, aspectRatio = "auto", singleView, preferDefaultLayer }: ImageViewerProps) {
  const viewsArray = Array.isArray(views) ? views : [views];
  const viewNames = getViewNames(viewsArray);
  const effectiveView = singleView && viewNames.includes(singleView) ? singleView : (viewNames[0] || "anterior");
  const [currentView, setCurrentView] = useState(effectiveView);
  const viewLayers = getLayersForView(views, effectiveView);
  const [layerIndex, setLayerIndex] = useState(0);
  const layer = viewLayers[layerIndex] || "default";

  const hasHoverLayers = viewLayers.length === 2;
  const defaultLayer = (() => {
    if (!hasHoverLayers) return viewLayers[0];
    if (preferDefaultLayer && viewLayers.includes("default")) return "default";
    return viewLayers[0];
  })();
  const hoverLayer = hasHoverLayers
    ? (preferDefaultLayer && viewLayers.includes("default") ? viewLayers.find((l) => l !== "default")! : viewLayers[1])
    : null;

  const viewForSrc = singleView ? effectiveView : currentView;
  const defaultImageName = `${baseName} - ${viewForSrc} - ${defaultLayer}.webp`;
  const defaultSrc = `/assets/images/bones/humerus/${basePath}/${defaultImageName}`;
  const hoverSrc = hoverLayer
    ? `/assets/images/bones/humerus/${basePath}/${baseName} - ${viewForSrc} - ${hoverLayer}.webp`
    : null;

  const defaultAlt = altBase
    ? `${altBase} - ${viewForSrc} - ${defaultLayer}`
    : `${baseName} - ${viewForSrc} - ${defaultLayer}`;

  const isSquare = aspectRatio === "square";
  const size = isSquare ? 260 : 260;

  return (
    <div className="space-y-2">
      <div
        className={`group relative overflow-hidden rounded-xl border border-aq-primary/15 bg-aq-sage/30 ${isSquare ? "aspect-square w-[260px] max-w-[260px]" : "max-w-[260px]"}`}
        title={hasHoverLayers ? "Hover for more detail" : undefined}
      >
        <Image
          src={defaultSrc}
          alt={defaultAlt}
          width={size}
          height={isSquare ? size : 208}
          className={`w-full h-full transition-opacity duration-200 group-hover:opacity-0 ${isSquare ? "object-cover" : "object-contain"}`}
          unoptimized
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {hoverSrc && (
          <Image
            src={hoverSrc}
            alt={`${defaultAlt} (detailed)`}
            width={size}
            height={isSquare ? size : 208}
            className={`absolute inset-0 w-full h-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${isSquare ? "object-cover" : "object-contain"}`}
            unoptimized
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
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
              className={`rounded-lg px-2 py-1 text-xs capitalize transition-colors ${layerIndex === i ? "bg-stone-700 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
      {hasHoverLayers && (
        <p className="text-xs text-stone-500">Hover over image for more detail.</p>
      )}
    </div>
  );
}
