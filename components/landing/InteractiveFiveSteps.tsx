"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
  {
    name: "Location",
    color: "#2e7d8c",
    question: "Where is the bone in the body?",
    description:
      "Start with the big picture. See exactly where the humerus sits relative to the skeleton, so every detail has a spatial anchor.",
    image: "/assets/images/bones/humerus/Humerus - location.webp",
    imageAlt: "Humerus location in the skeleton",
  },
  {
    name: "Shape",
    color: "#4a7a2e",
    question: "What is the bone's classification and function?",
    description:
      "Understand its classification (long bone), cross-sectional shape, and how form follows function in the skeletal system.",
    image: "/assets/images/bones/humerus/Humerus - shape.webp",
    imageAlt: "Humerus bone shape classification",
  },
  {
    name: "Neighbors",
    color: "#6d5a8a",
    question: "What bones form joints with this bone?",
    description:
      "Learn which bones articulate with the humerus — the scapula proximally, and the radius and ulna distally.",
    image:
      "/assets/images/bones/humerus/labeled neighbors/proximal - anterior - not isolated.webp",
    imageAlt: "Humerus proximal neighbors - scapula articulation",
  },
  {
    name: "Landmarks",
    color: "#a67c2e",
    question: "What are the named parts and their significance?",
    description:
      "Explore every bump, ridge, and groove. Each landmark connects to muscles, nerves, or blood vessels — nothing is arbitrary.",
    image:
      "/assets/images/bones/humerus/labeled landmarks/head - anterior - default.webp",
    imageAlt: "Humerus head labeled landmarks",
  },
  {
    name: "Blood Supply",
    color: "#9e3a3a",
    question: "What blood vessels nourish the bone?",
    description:
      "Trace the nutrient arteries and periosteal vessels that keep the bone alive. This step connects the bone to the cardiovascular system.",
    image: null,
    imageAlt: "",
  },
] as const;

export function InteractiveFiveSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const step = STEPS[activeIndex];

  return (
    <section className="bg-aq-warm">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-aq-teal">
          How to learn better
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Five steps to deeply understand any bone
        </h2>
        <p className="mt-4 max-w-2xl text-stone-600 leading-relaxed">
          Each step connects the bone to the bigger picture — no isolated
          facts. Mnemonic:{" "}
          <em className="text-stone-700">
            Learning Small Notes About Bones
          </em>
        </p>

        {/* Tab bar */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {STEPS.map((s, i) => (
            <button
              key={s.name}
              type="button"
              role="tab"
              aria-selected={activeIndex === i}
              aria-controls={`step-panel-${i}`}
              onClick={() => setActiveIndex(i)}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all"
              style={
                activeIndex === i
                  ? { backgroundColor: s.color, color: "#fff" }
                  : {
                      backgroundColor: "rgba(255,255,255,0.8)",
                      color: s.color,
                    }
              }
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold"
                style={
                  activeIndex === i
                    ? {
                        backgroundColor: "rgba(255,255,255,0.25)",
                        color: "#fff",
                      }
                    : { backgroundColor: `${s.color}20`, color: s.color }
                }
              >
                {i + 1}
              </span>
              {s.name}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div
          id={`step-panel-${activeIndex}`}
          role="tabpanel"
          className="mt-6 grid items-start gap-8 rounded-2xl border border-stone-200/80 bg-white/80 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <h3
              className="font-serif text-2xl font-bold tracking-tight"
              style={{ color: step.color }}
            >
              Step {activeIndex + 1}: {step.name}
            </h3>
            <p className="mt-2 text-lg font-medium text-stone-700">
              {step.question}
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              {step.description}
            </p>
            <Link
              href="/upper_limb/bones/humerus"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: step.color }}
            >
              See this step on the humerus page
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="flex justify-center">
            {step.image ? (
              <div className="relative max-w-[280px] overflow-hidden rounded-xl border border-stone-200/60 bg-aq-sage/20">
                <Image
                  key={step.image}
                  src={step.image}
                  alt={step.imageAlt}
                  width={280}
                  height={280}
                  className="demo-image-enter w-full object-contain"
                  unoptimized
                />
              </div>
            ) : (
              <div className="flex max-w-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-stone-300 bg-aq-sage/10 p-8 text-center">
                <svg
                  className="h-12 w-12 text-stone-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="mt-3 text-sm font-semibold text-stone-500">
                  Coming soon
                </p>
                <Link
                  href="/contribute"
                  className="mt-2 text-xs font-medium text-aq-primary hover:underline"
                >
                  Help us build this section
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/getting_started/effective_learning_methods/learning_bones"
            className="inline-flex items-center gap-2 text-sm font-semibold text-aq-primary hover:underline"
          >
            Read the full learning guide
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
