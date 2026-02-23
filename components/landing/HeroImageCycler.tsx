"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/assets/images/bones/humerus/Humerus - location.webp",
    alt: "Humerus highlighted in the skeleton",
  },
  {
    src: "/assets/images/bones/humerus/labeled landmarks/head - anterior - default.webp",
    alt: "Humerus head — labeled landmarks",
  },
  {
    src: "/assets/images/bones/humerus/labeled neighbors/proximal - anterior - not isolated.webp",
    alt: "Humerus proximal neighbors — scapula articulation",
  },
  {
    src: "/assets/images/bones/humerus/Humerus - shape.webp",
    alt: "Humerus bone shape classification",
  },
  {
    src: "/assets/images/bones/humerus/labeled landmarks/deltoid tuberosity - anterior - default.webp",
    alt: "Deltoid tuberosity — labeled landmark",
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
    <div className="relative w-[240px] overflow-hidden rounded-2xl border border-aq-primary/10 bg-aq-sage/40 shadow-sm">
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        width={240}
        height={320}
        className="demo-image-enter w-full object-contain"
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
