"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/assets/images/bones/humerus/labeled landmarks/intertubercular sulcus - anterior - default.webp",
    alt: "Intertubercular sulcus — labeled landmark (672x551)",
  },
  {
    src: "/assets/images/bones/humerus/labeled landmarks/anatomical neck - posterior - default.webp",
    alt: "Anatomical neck — labeled landmark (672x551)",
  },
  {
    src: "/assets/images/bones/humerus/labeled landmarks/anterior border - anterior - default.webp",
    alt: "Anterior border — labeled landmark (672x551)",
  },
  {
    src: "/assets/images/bones/humerus/labeled landmarks/lateral border - anterior - isolated.webp",
    alt: "Lateral border — labeled landmark (672x551)",
  },
  {
    src: "/assets/images/bones/humerus/labeled landmarks/body - posterior - default.webp",
    alt: "Humerus body posterior view — labeled landmarks (672x551)",
  },
] as const;

const INTERVAL_MS = 4000;

export function HeroImageCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const image = IMAGES[index];

  return (
    <div className="relative h-[340px] w-[420px] overflow-hidden rounded-2xl border border-aq-primary/10 bg-aq-sage/40 shadow-sm">
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        fill
        className="demo-image-enter object-cover"
        unoptimized
        priority
      />
      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-4 bg-aq-primary"
                : "w-1.5 bg-stone-400/50 hover:bg-stone-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
