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
}

export function ImageViewer({ basePath, baseName, views, altBase }: ImageViewerProps) {
  const viewsArray = Array.isArray(views) ? views : [views];
  const viewNames = getViewNames(viewsArray);
  const [currentView, setCurrentView] = useState(viewNames[0] || "anterior");
  const viewLayers = getLayersForView(views, currentView);
  const [layerIndex, setLayerIndex] = useState(0);
  const layer = viewLayers[layerIndex] || "default";

  const imageName = `${baseName} - ${currentView} - ${layer}.webp`;
  const src = `/assets/images/bones/humerus/${basePath}/${imageName}`;
  const alt = altBase
    ? `${altBase} - ${currentView} - ${layer}`
    : imageName;

  return (
    <div className="space-y-2">
      <div className="relative overflow-hidden rounded-xl border border-aq-primary/15 bg-aq-sage/30">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={400}
          className="w-full h-auto object-contain"
          unoptimized
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
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
      {viewLayers.length > 1 && (
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
    </div>
  );
}
