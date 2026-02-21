"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";
import { AccordionSection } from "@/components/humerus/AccordionSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { WorkInProgressNotice } from "@/components/WorkInProgressNotice";
import {
  STEP_STYLES,
  STEP_ACCORDION_THEMES,
  type StepKey,
} from "@/lib/step-themes";

const SHAPE_CARDS = [
  {
    type: "Long",
    description: "Functions as a lever that enables large movements.",
    src: "/assets/images/bones/humerus/Humerus - anterior view.webp",
    alt: "Humerus",
    caption: "Humerus",
  },
  {
    type: "Short",
    description: "Provides strength, stability, and limited motion.",
    src: "/assets/images/bones/carpal/Capitate Bone - anterior view.webp",
    alt: "Carpal Bone",
    caption: "Carpal (Wrist) Bone",
  },
  {
    type: "Flat",
    description: "Protects organs and offer muscle attachment sites.",
    src: "/assets/images/bones/skull/Frontal Bone - anterior view.webp",
    alt: "Frontal Bone",
    caption: "Frontal Bone",
  },
  {
    type: "Irregular",
    description: "Complex shape with a specialized function.",
    src: "/assets/images/bones/vertebra/Vertebra L3 - superior view.webp",
    alt: "Vertebra L3",
    caption: "Vertebra L3",
  },
] as const;

const STEP_HEADING_CLASS =
  "font-serif text-xl font-semibold tracking-tight sm:text-2xl";

function StepBlock({
  stepKey,
  title,
  question,
  purpose,
  children,
  open,
  onToggle,
}: {
  stepKey: StepKey;
  title: string;
  question: string;
  purpose: string;
  children?: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  const s = STEP_STYLES[stepKey];
  return (
    <AccordionSection
      id={`step-${stepKey}`}
      title={title}
      open={open}
      onToggle={onToggle}
      colorTheme={STEP_ACCORDION_THEMES[stepKey]}
      headingLevel="h2"
      headingClassName={STEP_HEADING_CLASS}
    >
      <p className="mt-3 text-stone-700">
        <span className={`font-semibold ${s.label}`}>Question:</span> {question}
      </p>
      <p className="mt-2 text-stone-700">
        <span className={`font-semibold ${s.label}`}>Purpose:</span> {purpose}
      </p>
      {children}
    </AccordionSection>
  );
}

export default function LearningBonesPage() {
  const [openStep, setOpenStep] = useState<StepKey | null>(null);

  const toggleStep = useCallback((step: StepKey) => {
    setOpenStep((prev) => (prev === step ? null : step));
  }, []);

  return (
    <ContentLayout
      title="How to Effectively Study Bones"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Getting Started", href: "/getting_started" },
        {
          label: "Effective Learning Methods",
          href: "/getting_started/effective_learning_methods",
        },
        { label: "Learning Bones" },
      ]}
    >
      <div className="space-y-8">
        <WorkInProgressNotice scope="page" />

        {/* Intro */}
        <div className="rounded-2xl border border-stone-200/90 bg-stone-50/80 px-6 py-6 sm:px-8 sm:py-7">
          <p className="text-stone-700">
            <span className="font-semibold text-stone-900">Goal:</span>{" "}
            Understand how each bone relates to the body as a whole.
          </p>
          <p className="mt-3 text-stone-700">
            <span className="font-semibold text-stone-900">Purpose:</span> To
            encourage deeper, longer-lasting learning by linking a bone to the
            skeletal, muscular, and cardiovascular systems rather than relying
            on rote memorization.
          </p>
          <p className="mt-3 text-stone-700">
            <span className="font-semibold text-stone-900">
              How to use this guide:
            </span>{" "}
            Follow the five structured steps below. They are designed to help
            you focus on meaningful connections rather than just memorizing
            facts.
          </p>
          <p className="my-3 text-stone-600">
            <span className="font-semibold text-stone-800">Mnemonic:</span>{" "}
            <em>Learning Small Notes About Bones</em>
          </p>
          <AccordionSection
            id="five-steps-overview"
            title="Click to read about the five steps. Then click to close."
            defaultOpen={false}
          >
            <p className="mb-4 text-stone-700">
              Each step relates the bone to the bigger picture to help you
              understand the material and remember it for longer.
            </p>
            <div className="space-y-4 text-sm text-stone-700">
              <div>
                <p className="font-medium text-[#2e7d8c]">Location</p>
                <p>
                  <span className="font-medium">Question:</span> Where is the
                  bone?
                </p>
                <p>
                  <span className="font-medium">Purpose:</span> Helps you build
                  a mental map of the skeleton.
                </p>
              </div>
              <div>
                <p className="font-medium text-[#4a7a2e]">Shape</p>
                <p>
                  <span className="font-medium">Question:</span> What is the
                  bone&apos;s shape?
                </p>
                <p>
                  <span className="font-medium">Purpose:</span> Gives insight
                  into how the bone interacts with the body.
                </p>
              </div>
              <div>
                <p className="font-medium text-[#6d5a8a]">Neighbors</p>
                <p>
                  <span className="font-medium">Question:</span> What bones
                  articulate (form joints with) this bone? What is the type of
                  each joint?
                </p>
                <p>
                  <span className="font-medium">Purpose:</span> Lets you examine
                  what joints the bone is part of and what movements those
                  joints allow.
                </p>
              </div>
              <div>
                <p className="font-medium text-[#a67c2e]">
                  Anatomical Landmarks
                </p>
                <p>
                  <span className="font-medium">Question:</span> What are the
                  named parts of the bone? What is the significance of each?
                </p>
                <p>
                  <span className="font-medium">Purpose:</span> Connects each
                  named location to the muscles, nerves, blood vessels, and
                  other bones that interact with the location.
                </p>
              </div>
              <div>
                <p className="font-medium text-[#9e3a3a]">Blood Supply</p>
                <p>
                  <span className="font-medium">Question:</span> What blood
                  vessels nourish the bone?
                </p>
                <p>
                  <span className="font-medium">Purpose:</span> Relates the bone
                  to the cardiovascular system and builds your mental map of the
                  body&apos;s blood vessels.
                </p>
              </div>
            </div>
          </AccordionSection>
        </div>

        {/* Step 1 – Location */}
        <StepBlock
          stepKey="location"
          title="Step 1 – Location"
          question="Which body region contains the bone (e.g., upper arm, lower leg)?"
          purpose="Identifying location helps you build a mental map of the skeleton and recall neighboring bones and muscles."
          open={openStep === "location"}
          onToggle={() => toggleStep("location")}
        />

        {/* Step 2 – Shape */}
        <StepBlock
          stepKey="shape"
          title="Step 2 – Shape"
          question="What is the bone's shape?"
          purpose="A bone's shape is closely linked to its function. Recognizing the shape gives insight into the bone's role in movement and support."
          open={openStep === "shape"}
          onToggle={() => toggleStep("shape")}
        >
          <h3
            className={`mt-6 font-serif text-lg font-semibold tracking-tight ${STEP_STYLES.shape.heading}`}
          >
            Common Shapes
          </h3>
          <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SHAPE_CARDS.map((card) => (
              <li key={card.type}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-stone-200/90 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <div className="p-4">
                    <p className="text-stone-800">
                      <span className="font-semibold text-stone-900">
                        {card.type}:
                      </span>{" "}
                      {card.description}
                    </p>
                  </div>
                  <div className="relative mx-auto max-w-[180px] aspect-[3/2] w-full">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-contain p-2"
                      sizes="180px"
                      unoptimized
                    />
                  </div>
                  <figcaption className="border-t border-stone-100 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-600">
                    {card.caption}
                  </figcaption>
                </article>
              </li>
            ))}
          </ul>
        </StepBlock>

        {/* Step 3 – Neighbors */}
        <StepBlock
          stepKey="neighbors"
          title="Step 3 – Neighbors"
          question="What bones articulate (form joints with) this bone? What is the type of each joint?"
          purpose="Lets you examine what joints the bone is part of and what movements those joints allow."
          open={openStep === "neighbors"}
          onToggle={() => toggleStep("neighbors")}
        />

        {/* Step 4 – Anatomical Landmarks */}
        <StepBlock
          stepKey="landmarks"
          title="Step 4 – Anatomical Landmarks"
          question="What are the named parts of the bone? What is the significance of each?"
          purpose="Connects each named location to the muscles, nerves, blood vessels, and other bones that interact with the location."
          open={openStep === "landmarks"}
          onToggle={() => toggleStep("landmarks")}
        />

        {/* Step 5 – Blood Supply */}
        <StepBlock
          stepKey="blood"
          title="Step 5 – Blood Supply"
          question="What blood vessels nourish the bone?"
          purpose="Relates the bone to the cardiovascular system and builds your mental map of the body's blood vessels."
          open={openStep === "blood"}
          onToggle={() => toggleStep("blood")}
        />

        {/* References */}
        <div className="rounded-2xl border border-stone-200/90 bg-stone-50/80 px-6 py-4 sm:px-8">
          <p className="text-sm text-stone-600">
            Information based on Teach Me Anatomy.
          </p>
          <p className="mt-1 text-sm text-stone-600">Images from Z-Anatomy.</p>
          <p className="mt-1 text-sm text-stone-600">Associated video</p>
        </div>

        {/* Interactive Exercise */}
        <section className="relative overflow-hidden rounded-2xl border border-aq-primary/20 bg-aq-sage/40 px-6 py-6 sm:px-8 sm:py-7">
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary"
            aria-hidden
          />
          <div className="pl-2">
            <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
              Interactive Exercise
            </h2>
            <p className="mt-3 text-stone-700">
              First, see the five steps applied to the{" "}
              <Link
                href="/upper_limb/bones/humerus"
                className="font-medium text-aq-primary hover:underline"
              >
                humerus
              </Link>
              . Then, apply them to the{" "}
              <Link
                href="/entire_body/bones/femur"
                className="font-medium text-aq-primary hover:underline"
              >
                femur
              </Link>{" "}
              and check your work using the femur study sheet (Coming soon!).
            </p>
          </div>
        </section>

        <FeedbackSection />

        {/* Updated */}
        <p className="flex items-center gap-2 text-sm text-stone-500">
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Updated: February 10, 2026
        </p>
      </div>
    </ContentLayout>
  );
}
