"use client";

import { useState, useCallback } from "react";
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
  /** If true, start with the "labeled" layer (e.g. "default" or second layer) so click removes labels */
  preferDefaultLayer?: boolean;
}

function formatLayerLabel(layer: string): string {
  return layer.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ImageViewer({ basePath, baseName, views, altBase, aspectRatio = "auto", singleView, preferDefaultLayer }: ImageViewerProps) {
  const viewsArray = Array.isArray(views) ? views : [views];
  const viewNames = getViewNames(viewsArray);
  const effectiveView = singleView && viewNames.includes(singleView) ? singleView : (viewNames[0] || "anterior");
  const [currentView, setCurrentView] = useState(effectiveView);
  const viewLayers = getLayersForView(views, effectiveView);

  const getInitialLayerIndex = useCallback(() => {
    if (viewLayers.length === 0) return 0;
    if (preferDefaultLayer && viewLayers.includes("default"))
      return viewLayers.indexOf("default");
    if (preferDefaultLayer && viewLayers.length >= 2)
      return 1;
    return 0;
  }, [viewLayers, preferDefaultLayer]);

  const [layerIndex, setLayerIndex] = useState(getInitialLayerIndex);
  const layer = viewLayers[layerIndex] || viewLayers[0] || "default";

  const viewForSrc = singleView ? effectiveView : currentView;
  const imageName = `${baseName} - ${viewForSrc} - ${layer}.webp`;
  const src = `/assets/images/bones/humerus/${basePath}/${imageName}`;
  const alt = altBase
    ? `${altBase} - ${viewForSrc} - ${layer}`
    : `${baseName} - ${viewForSrc} - ${layer}`;

  const isSquare = aspectRatio === "square";
  const size = isSquare ? 260 : 260;

  const handleImageClick = useCallback(() => {
    if (viewLayers.length < 2) return;
    setLayerIndex((i) => (i === 0 ? 1 : 0));
  }, [viewLayers.length]);

  const hasMultipleLayers = viewLayers.length > 1;

  return (
    <div className="space-y-2">
      <div
        className={`relative overflow-hidden rounded-xl border border-aq-primary/15 bg-aq-sage/30 ${isSquare ? "aspect-square w-[260px] max-w-[260px]" : "max-w-[260px]"} ${hasMultipleLayers ? "cursor-pointer" : ""}`}
        title={hasMultipleLayers ? "Click to toggle labels on/off" : undefined}
        onClick={hasMultipleLayers ? handleImageClick : undefined}
        role={hasMultipleLayers ? "button" : undefined}
        tabIndex={hasMultipleLayers ? 0 : undefined}
        onKeyDown={hasMultipleLayers ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleImageClick(); } } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={isSquare ? size : 208}
          className={`w-full h-full select-none pointer-events-none ${isSquare ? "object-cover" : "object-contain"}`}
          unoptimized
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
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
      {hasMultipleLayers && (
        <div className="flex flex-wrap gap-2">
          {viewLayers.map((l, i) => (
            <button
              key={l}
              type="button"
              onClick={() => setLayerIndex(i)}
              className={`rounded-lg px-2 py-1 text-xs capitalize transition-colors ${layerIndex === i ? "bg-stone-700 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
            >
              {formatLayerLabel(l)}
            </button>
          ))}
        </div>
      )}
      {hasMultipleLayers && (
        <p className="text-xs text-stone-500">Click image to toggle labels. Use buttons above for a specific view.</p>
      )}
    </div>
  );
}
