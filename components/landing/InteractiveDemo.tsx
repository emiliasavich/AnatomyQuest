"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DEMO_IMAGES = {
  unlabeled:
    "/assets/images/bones/humerus/unlabeled landmark headers/head and neck - anterior - not isolated.webp",
  labeled:
    "/assets/images/bones/humerus/labeled landmark headers/head and neck - anterior - not isolated.webp",
} as const;

export function InteractiveDemo() {
  const [showLabels, setShowLabels] = useState(true);

  return (
    <section className="border-y border-stone-200/60 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-aq-teal">
              Try it yourself
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              See how interactive learning works
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Every diagram on AnatomyQuest starts labeled. Click to hide
              the labels and test your knowledge — just like on the real learning
              pages.
            </p>

            <button
              type="button"
              onClick={() => setShowLabels((prev) => !prev)}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-aq-teal px-5 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-aq-teal/90 hover:shadow-md"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {showLabels ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                ) : (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </>
                )}
              </svg>
              {showLabels ? "Hide labels" : "Reveal labels"}
            </button>

            <p className="mt-4 text-sm text-stone-500">
              This is a sample from the{" "}
              <Link
                href="/upper_limb/bones/humerus"
                className="font-medium text-aq-primary hover:underline"
              >
                Humerus
              </Link>{" "}
              page — the full page has 25+ interactive diagrams.
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="relative w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-stone-200/80 bg-aq-sage/30 shadow-sm transition-shadow hover:shadow-md"
              onClick={() => setShowLabels((prev) => !prev)}
              title="Click to toggle labels"
            >
              <Image
                key={showLabels ? "labeled" : "unlabeled"}
                src={showLabels ? DEMO_IMAGES.labeled : DEMO_IMAGES.unlabeled}
                alt={
                  showLabels
                    ? "Humerus head and neck - labeled"
                    : "Humerus head and neck - unlabeled"
                }
                width={320}
                height={320}
                className="demo-image-enter w-full object-contain"
                unoptimized
              />
              <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-600 shadow-sm backdrop-blur-sm">
                {showLabels ? "Labels ON" : "Labels OFF"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
