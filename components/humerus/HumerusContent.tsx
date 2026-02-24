"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FeedbackSection } from "@/components/FeedbackSection";
import { WorkInProgressNotice } from "@/components/WorkInProgressNotice";
import { STEP_ACCORDION_THEMES } from "@/lib/step-themes";
import { AccordionSection } from "./AccordionSection";
import { ImageViewer } from "./ImageViewer";
import { PopupLayer } from "./PopupLayer";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function getPreviewImageSrc(
  basePath: string,
  baseName: string,
  views: Record<string, string[]>[] | Record<string, string[]>,
): string | null {
  const viewsArray = Array.isArray(views) ? views : [views];
  if (viewsArray.length === 0) return null;
  const firstViewEntry = viewsArray[0];
  const firstViewName = Object.keys(firstViewEntry)[0];
  if (!firstViewName) return null;
  const layers = firstViewEntry[firstViewName];
  const firstLayer = layers?.[0] || "default";
  return `/assets/images/bones/humerus/${basePath}/${baseName} - ${firstViewName} - ${firstLayer}.webp`;
}

function stripHtml(s: string) {
  return s.replace(/<[^>]+>/g, "").trim();
}

function getPreviewDescription(
  description: unknown,
  maxLength = 110,
): string | undefined {
  let raw = "";
  if (typeof description === "string") {
    raw = stripHtml(description);
  } else if (Array.isArray(description) && description.length > 0) {
    const first = description[0];
    if (typeof first === "string") {
      raw = stripHtml(first);
    } else if (first && typeof first === "object" && "text" in first) {
      raw = stripHtml(String((first as { text: string }).text));
    }
  }
  raw = raw.replace(/\s+/g, " ").trim();
  if (!raw) return undefined;
  return raw.length > maxLength ? raw.slice(0, maxLength).trimEnd() + "…" : raw;
}

function isHtml(s: string) {
  return /<[a-z][\s\S]*>/i.test(s);
}

function renderHtml(html: string) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderDescription(desc: unknown): React.ReactNode {
  if (typeof desc === "string") {
    return isHtml(desc) ? renderHtml(desc) : desc;
  }
  if (Array.isArray(desc)) {
    return (
      <ul className="list-disc pl-6 my-2 space-y-1">
        {desc.map((d, i) => (
          <li key={i}>{renderDescription(d)}</li>
        ))}
      </ul>
    );
  }
  if (desc && typeof desc === "object" && "has_subpoints" in desc) {
    const d = desc as {
      has_subpoints: { main_point: string; subpoints: string[] };
    };
    return (
      <>
        {isHtml(d.has_subpoints.main_point)
          ? renderHtml(d.has_subpoints.main_point)
          : d.has_subpoints.main_point}
        <ul className="list-disc pl-6 mt-1">
          {d.has_subpoints.subpoints.map((s, i) => (
            <li key={i}>{isHtml(s) ? renderHtml(s) : s}</li>
          ))}
        </ul>
      </>
    );
  }
  if (desc && typeof desc === "object" && "text" in desc) {
    const d = desc as { text: string; subpoints?: string[] };
    return (
      <>
        {isHtml(d.text) ? renderHtml(d.text) : d.text}
        {d.subpoints && (
          <ul className="list-disc pl-6 mt-1">
            {d.subpoints.map((s, i) => (
              <li key={i}>{isHtml(s) ? renderHtml(s) : s}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
  return null;
}

const STEP_HEADING_CLASS =
  "font-serif text-xl font-semibold tracking-tight sm:text-2xl";

type StepKey = "location" | "shape" | "neighbors" | "landmarks" | "blood";

interface HumerusContentProps {
  landmarks: unknown;
  neighbors: unknown;
  neighborsBigPicture: unknown;
  blood: unknown;
  fourViews: unknown;
  popupContent?: Record<string, { text: string; url?: string }>;
}

export function HumerusContent({
  landmarks,
  neighbors,
  neighborsBigPicture,
  blood,
  fourViews,
  popupContent,
}: HumerusContentProps) {
  const [openStep, setOpenStep] = useState<StepKey | null>(null);
  const [openNeighbors, setOpenNeighbors] = useState<Record<string, boolean>>(
    {},
  );
  const [openLandmarkDetails, setOpenLandmarkDetails] = useState<
    Record<string, boolean>
  >({});

  const toggleStep = useCallback((step: StepKey) => {
    setOpenStep((prev) => (prev === step ? null : step));
  }, []);

  const openAndScrollTo = useCallback(
    (accordionId: string, targetId: string) => {
      setOpenStep("neighbors");
      setOpenNeighbors((prev) => ({ ...prev, [accordionId]: true }));
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    },
    [],
  );

  const openAndScrollToLandmark = useCallback(
    (accordionId: string, targetId: string) => {
      setOpenStep("landmarks");
      setOpenLandmarkDetails((prev) => ({ ...prev, [accordionId]: true }));
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    },
    [],
  );

  return (
    <div className="relative space-y-8">
      {popupContent && <PopupLayer popupContent={popupContent} />}
      <WorkInProgressNotice scope="page" />

      {/* Intro */}
      <div className="rounded-2xl border border-stone-200/90 bg-stone-50/80 px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-stone-700">
          <span className="font-semibold text-stone-900">Goal:</span> Understand
          how the humerus relates to the body as a whole.
        </p>
        <p className="mt-3 text-stone-700">
          <span className="font-semibold text-stone-900">Purpose:</span> To
          encourage deeper, longer-lasting learning by linking the bone to the
          skeletal, muscular, and cardiovascular systems rather than relying on
          rote memorization.
        </p>
        <p className="my-3 text-stone-600">
          <span className="font-semibold text-stone-900">
            How to use this guide:
          </span>{" "}
          Follow the{" "}
          <Link
            href="/getting_started/effective_learning_methods/learning_bones"
            className="font-medium text-aq-primary hover:underline"
          >
            five structured steps
          </Link>{" "}
          below.
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
              <p className="font-medium text-stone-900 location-color">
                Location
              </p>
              <p>
                <span className="font-medium">Question:</span> Where is the
                bone?
              </p>
              <p>
                <span className="font-medium">Purpose:</span> Helps you build a
                mental map of the skeleton.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900 shape-color">Shape</p>
              <p>
                <span className="font-medium">Question:</span> What is the
                bone&apos;s shape?
              </p>
              <p>
                <span className="font-medium">Purpose:</span> Gives insight into
                how the bone interacts with the body.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900 neighbors-color">
                Neighbors
              </p>
              <p>
                <span className="font-medium">Question:</span> What bones
                articulate (form joints with) this bone? What is the type of
                each joint?
              </p>
              <p>
                <span className="font-medium">Purpose:</span> Lets you examine
                what joints the bone is part of and what movements those joints
                allow.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900 landmarks-color">
                Anatomical Landmarks
              </p>
              <p>
                <span className="font-medium">Question:</span> What are the
                named parts of the bone? What is the significance of each?
              </p>
              <p>
                <span className="font-medium">Purpose:</span> Connects each
                named location to the muscles, nerves, blood vessels, and other
                bones that interact with the location.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900 blood-supply-color">
                Blood Supply
              </p>
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
      <AccordionSection
        id="step-location"
        title="Step 1 – Location"
        open={openStep === "location"}
        onToggle={() => toggleStep("location")}
        colorTheme={STEP_ACCORDION_THEMES.location}
        headingLevel="h2"
        headingClassName={STEP_HEADING_CLASS}
      >
        <p className="mt-3 text-stone-700">
          The humerus is found in the <strong>upper arm</strong> between the
          shoulder and elbow.
        </p>
        <figure className="mt-4 max-w-[260px]">
          <Image
            src="/assets/images/bones/humerus/Humerus - location.webp"
            alt="Humerus Location"
            width={260}
            height={182}
            className="w-full h-auto rounded-xl border border-stone-200 shadow-sm"
            unoptimized
          />
          <figcaption className="text-sm text-stone-500 mt-1">
            Humerus
          </figcaption>
        </figure>
      </AccordionSection>

      {/* Step 2 – Shape */}
      <AccordionSection
        id="step-shape"
        title="Step 2 – Shape"
        open={openStep === "shape"}
        onToggle={() => toggleStep("shape")}
        colorTheme={STEP_ACCORDION_THEMES.shape}
        headingLevel="h2"
        headingClassName={STEP_HEADING_CLASS}
      >
        <p className="mt-3 text-stone-700">
          The humerus is a <strong>long bone</strong>, which means it functions
          as a lever to enable movement of the arm.
        </p>
        <figure className="mt-4 max-w-[260px]">
          <Image
            src="/assets/images/bones/humerus/Humerus - shape.webp"
            alt="Humerus Shape"
            width={260}
            height={182}
            className="w-full h-auto rounded-xl border border-stone-200 shadow-sm"
            unoptimized
          />
          <figcaption className="text-sm text-stone-500 mt-1">
            Humerus
          </figcaption>
        </figure>
      </AccordionSection>

      {/* Step 3 – Neighbors */}
      <AccordionSection
        id="step-neighbors"
        title="Step 3 – Neighbors"
        open={openStep === "neighbors"}
        onToggle={() => toggleStep("neighbors")}
        colorTheme={STEP_ACCORDION_THEMES.neighbors}
        headingLevel="h2"
        headingClassName={STEP_HEADING_CLASS}
      >
        <p className="mt-3 text-stone-700">
          The{" "}
          <span className="popup-term" data-popup-id="popup-humerus">
            humerus
          </span>{" "}
          has neighboring bones at its two ends: the{" "}
          <span className="popup-term" data-popup-id="popup-proximal">
            proximal
          </span>{" "}
          end at the shoulder, and the{" "}
          <span className="popup-term" data-popup-id="popup-distal">
            distal
          </span>{" "}
          end at the elbow.
        </p>
        {Array.isArray(neighbors) &&
          neighbors.map((bigPicture: Record<string, unknown>, idx: number) => {
            const elements =
              (bigPicture.elements as Record<string, unknown>[]) ?? [];
            const imageName =
              bigPicture.image_name != null
                ? String(bigPicture.image_name)
                : null;
            return (
              <div
                key={idx}
                id={`neighbors-${slugify(String(bigPicture.big_picture_name))}`}
                className="mt-8 first:mt-6"
              >
                <h3 className="font-serif text-lg font-semibold tracking-tight text-stone-900">
                  {String(bigPicture.big_picture_name)}
                </h3>
                <div className="mt-3 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  {imageName ? (
                    <div className="shrink-0">
                      <ImageViewer
                        basePath="labeled neighbors"
                        baseName={imageName}
                        views={[{ anterior: ["isolated", "not isolated"] }]}
                        altBase={String(bigPicture.big_picture_name)}
                        aspectRatio="square"
                        singleView="anterior"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0">
                    <p className="mb-3 text-stone-700">
                      The{" "}
                      <span
                        className="popup-term"
                        data-popup-id={`popup-${slugify(String(bigPicture.big_picture_name))}`}
                      >
                        {String(bigPicture.big_picture_name).toLowerCase()}
                      </span>{" "}
                      end of the humerus{" "}
                      <span
                        className="popup-term"
                        data-popup-id="popup-articulate"
                      >
                        articulates
                      </span>{" "}
                      with the following bones:
                    </p>
                    <ul className="list-disc pl-6 mb-2">
                      {elements.map(
                        (el: Record<string, unknown>, i: number) => {
                          const accordionId = `neighbors-detail-${slugify(String(bigPicture.big_picture_name))}-${slugify(String(el.name))}`;
                          const targetId = `neighbors-${slugify(String(el.name))}`;
                          return (
                            <li key={i}>
                              <button
                                type="button"
                                onClick={() =>
                                  openAndScrollTo(accordionId, targetId)
                                }
                                className="text-aq-primary hover:underline text-left"
                              >
                                {String(el.name)}
                              </button>
                            </li>
                          );
                        },
                      )}
                    </ul>
                    <p className="mb-1 text-xs text-stone-500">
                      Click the bulleted names for more information.
                    </p>
                    <p className="text-xs text-stone-500">
                      Click image to show/hide labels. Right click to enlarge.
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {elements.map((child: Record<string, unknown>, i: number) => {
                    const accordionId = `neighbors-detail-${slugify(String(bigPicture.big_picture_name))}-${slugify(String(child.name))}`;
                    return (
                      <div
                        key={i}
                        id={`neighbors-${slugify(String(child.name))}`}
                        className="scroll-mt-24"
                      >
                        <AccordionSection
                          id={accordionId}
                          title={String(child.name)}
                          defaultOpen={false}
                          open={openNeighbors[accordionId] ?? false}
                          onToggle={() =>
                            setOpenNeighbors((prev) => ({
                              ...prev,
                              [accordionId]: !(prev[accordionId] ?? false),
                            }))
                          }
                          previewImage={
                            child.views && child.base
                              ? {
                                  src:
                                    getPreviewImageSrc(
                                      "labeled joints",
                                      String(child.base),
                                      child.views as Record<string, string[]>[],
                                    ) || "",
                                  alt: `${String(child.name)} preview`,
                                  description: getPreviewDescription(
                                    child.description,
                                  ),
                                }
                              : undefined
                          }
                        >
                          <div className="rounded-xl border border-stone-200/80 bg-white p-4 sm:p-5">
                            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                              <div className="min-w-0">
                                <div
                                  className="prose prose-sm max-w-none text-stone-700 prose-li:marker:text-stone-400"
                                  dangerouslySetInnerHTML={{
                                    __html: String(
                                      child.description || "",
                                    ).replace(/\n/g, "<br/>"),
                                  }}
                                />
                                <p className="mt-3 text-xs text-stone-500">
                                  Click image to show/hide labels. Right click
                                  to enlarge.
                                </p>
                              </div>
                              {child.views ? (
                                <div className="shrink-0">
                                  <ImageViewer
                                    basePath="labeled joints"
                                    baseName={String(child.base)}
                                    views={
                                      child.views as Record<string, string[]>
                                    }
                                    altBase={String(
                                      child.alt_base || child.name,
                                    )}
                                    aspectRatio="square"
                                  />
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </AccordionSection>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </AccordionSection>

      {/* Step 4 – Anatomical Landmarks */}
      <AccordionSection
        id="step-landmarks"
        title="Step 4 – Anatomical Landmarks"
        open={openStep === "landmarks"}
        onToggle={() => toggleStep("landmarks")}
        colorTheme={STEP_ACCORDION_THEMES.landmarks}
        headingLevel="h2"
        headingClassName={STEP_HEADING_CLASS}
      >
        <p className="mt-3 text-stone-700">
          Most of the named landmarks on the humerus are sites of muscle
          attachment. Some are grooves that guide tendons, nerves, and blood
          vessels. Others are indentations (
          <span className="popup-term" data-popup-id="popup-fossas">
            fossas
          </span>
          ) that accommodate parts of neighboring bones during movement.
        </p>
        {Array.isArray(landmarks) &&
          landmarks.map((bigPicture: Record<string, unknown>, idx: number) => {
            const landmarkElements =
              (bigPicture.elements as Record<string, unknown>[]) ?? [];
            const firstEl = landmarkElements[0] as
              | Record<string, unknown>
              | undefined;
            return (
              <div
                key={idx}
                id={`landmarks-${slugify(String(bigPicture.big_picture_name))}`}
                className="mt-8 first:mt-6"
              >
                <h3 className="font-serif text-lg font-semibold tracking-tight text-stone-900">
                  {String(bigPicture.big_picture_name)}
                </h3>
                <div className="mt-3 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  {firstEl?.views && firstEl.base ? (
                    <div className="shrink-0">
                      <ImageViewer
                        basePath="labeled landmarks"
                        baseName={String(firstEl.base)}
                        views={firstEl.views as Record<string, string[]>}
                        altBase={String(bigPicture.big_picture_name)}
                        aspectRatio="square"
                        singleView="anterior"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0">
                    <p className="mb-3 text-stone-700">
                      The {String(bigPicture.big_picture_name).toLowerCase()} of
                      the humerus encompass{bigPicture.singular ? "s" : ""} the
                      following landmarks:
                    </p>
                    <ul className="list-disc pl-6 mb-2">
                      {landmarkElements.map(
                        (el: Record<string, unknown>, i: number) => {
                          const detailAccordionId = `landmark-detail-${slugify(String(bigPicture.big_picture_name))}-${slugify(stripHtml(String(el.name)))}`;
                          const targetId = `landmark-${slugify(stripHtml(String(el.name)))}`;
                          return (
                            <li key={i}>
                              <button
                                type="button"
                                onClick={() =>
                                  openAndScrollToLandmark(
                                    detailAccordionId,
                                    targetId,
                                  )
                                }
                                className="text-aq-primary hover:underline text-left"
                              >
                                {isHtml(String(el.name))
                                  ? renderHtml(String(el.name))
                                  : String(el.name)}
                              </button>
                            </li>
                          );
                        },
                      )}
                    </ul>
                    <p className="mb-1 text-xs text-stone-500">
                      Click the bulleted names for more information.
                    </p>
                    <p className="text-xs text-stone-500">
                      Click image to show/hide labels. Right click to enlarge.
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {landmarkElements.map(
                    (child: Record<string, unknown>, i: number) => {
                      const detailAccordionId = `landmark-detail-${slugify(String(bigPicture.big_picture_name))}-${slugify(stripHtml(String(child.name)))}`;
                      return (
                        <div
                          key={i}
                          id={`landmark-${slugify(stripHtml(String(child.name)))}`}
                          className="scroll-mt-24"
                        >
                          <AccordionSection
                            id={detailAccordionId}
                            title={
                              isHtml(String(child.name))
                                ? stripHtml(String(child.name))
                                : String(child.name)
                            }
                            defaultOpen={false}
                            open={
                              openLandmarkDetails[detailAccordionId] ?? false
                            }
                            onToggle={() =>
                              setOpenLandmarkDetails((prev) => ({
                                ...prev,
                                [detailAccordionId]: !(
                                  prev[detailAccordionId] ?? false
                                ),
                              }))
                            }
                            previewImage={
                              child.views && child.base
                                ? {
                                    src:
                                      getPreviewImageSrc(
                                        "labeled landmarks",
                                        String(child.base),
                                        child.views as Record<
                                          string,
                                          string[]
                                        >[],
                                      ) || "",
                                    alt: `${stripHtml(String(child.name))} preview`,
                                    description: getPreviewDescription(
                                      child.description,
                                    ),
                                  }
                                : undefined
                            }
                          >
                            <div className="rounded-xl border border-stone-200/80 bg-white p-4 sm:p-5">
                              <ul className="list-disc pl-6 my-2 space-y-1">
                                {(child.description as unknown[])?.map(
                                  (d: unknown, j: number) => (
                                    <li key={j}>{renderDescription(d)}</li>
                                  ),
                                )}
                              </ul>
                              {child.views ? (
                                <div className="mt-4">
                                  <ImageViewer
                                    basePath="labeled landmarks"
                                    baseName={String(child.base)}
                                    views={
                                      child.views as Record<string, string[]>
                                    }
                                    altBase={String(child.name)}
                                  />
                                </div>
                              ) : null}
                            </div>
                          </AccordionSection>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            );
          })}
      </AccordionSection>

      {/* Step 5 – Blood Supply */}
      <AccordionSection
        id="step-blood"
        title="Step 5 – Blood Supply"
        open={openStep === "blood"}
        onToggle={() => toggleStep("blood")}
        colorTheme={STEP_ACCORDION_THEMES.blood}
        headingLevel="h2"
        headingClassName={STEP_HEADING_CLASS}
      >
        <p className="mt-3 font-semibold text-stone-800">UNFINISHED</p>
        <p className="mt-2 text-stone-700">
          <span className="font-medium text-stone-800">Plan:</span> Write a
          description that gives an overview of the entire structure of blood
          vessels in the humerus. Then lead into breaking them up into proximal,
          shaft, and distal.
        </p>
        <p className="mt-2 text-stone-600 text-sm italic">
          NOTE: I have not yet verified that the arteries I have listed for the
          proximal region, shaft, and distal regions are correct.
        </p>
        {Array.isArray(blood) &&
          blood.map((bigPicture: Record<string, unknown>, idx: number) => (
            <AccordionSection
              key={idx}
              id={`blood-${slugify(String(bigPicture.big_picture_name))}`}
              title={String(bigPicture.big_picture_name)}
            >
              <p className="mb-4">
                The {String(bigPicture.big_picture_name).toLowerCase()} of the
                humerus is supplied by the following arteries:
              </p>
              <ul className="list-disc pl-6">
                {(bigPicture.elements as Record<string, unknown>[])?.map(
                  (el: Record<string, unknown>, i: number) => (
                    <li key={i}>{String(el.name)}</li>
                  ),
                )}
              </ul>
            </AccordionSection>
          ))}
      </AccordionSection>

      {/* References */}
      <div className="relative overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50/80 px-6 py-6 sm:px-8 sm:py-7">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary" aria-hidden />
        <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900">
          References
        </h2>
        <h3
          id="reference-humerus-overview"
          className="text-lg font-medium mt-4 text-stone-800"
        >
          Landmarks and General Anatomy
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/the-humerus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Humerus Anatomy
            </a>
          </li>
          <li>
            <a
              href="https://courses.lumenlearning.com/suny-ap1/chapter/bones-of-the-upper-limb/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Lumen Learning – Bones of the Upper Limb
            </a>
          </li>
        </ul>
        <h3
          id="reference-muscles"
          className="text-lg font-medium mt-4 text-stone-800"
        >
          Muscles
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/supraspinatus-muscle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Supraspinatus Muscle
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/brachialis-muscle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Brachialis Muscle
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/upper-limb-muscles-and-movements"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Upper Limb Muscles and Movements
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/arm-muscles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Arm Muscles
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/latissimus-dorsi-muscle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Latissimus Dorsi Muscle
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/extensor-carpi-radialis-longus-muscle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Extensor Carpi Radialis Longus
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/pronator-teres-muscle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Pronator Teres Muscle
            </a>
          </li>
        </ul>
        <h3
          id="reference-joints-and-ligaments"
          className="text-lg font-medium mt-4 text-stone-800"
        >
          Joints and Ligaments
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/elbow-joint"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Elbow Joint
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/ligaments-of-the-upper-limb"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Ligaments of the Upper Limb
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/head-of-radius"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Head of Radius
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/proximal-radioulnar-joint"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Proximal Radioulnar Joint
            </a>
          </li>
          <li>
            <a
              href="https://anatomy.co.uk/humeroulnar-joint"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Anatomy.co.uk – Humeroulnar Joint
            </a>
          </li>
          <li>
            <a
              href="https://anatomy.co.uk/humeroradial-joint"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Anatomy.co.uk – Humeroradial Joint
            </a>
          </li>
        </ul>
        <h3
          id="reference-nerves"
          className="text-lg font-medium mt-4 text-stone-800"
        >
          Nerves
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/axillary-nerve"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Axillary Nerve
            </a>
          </li>
        </ul>
        <h3
          id="reference-arteries"
          className="text-lg font-medium mt-4 text-stone-800"
        >
          Arteries
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li>
            <a
              href="https://teachmeanatomy.info/encyclopaedia/a/anterior-circumflex-humeral-artery/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Teach Me Anatomy – Anterior Circumflex Humeral Artery
            </a>
          </li>
          <li>
            <a
              href="https://www.kenhub.com/en/library/anatomy/posterior-circumflex-humeral-artery"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Kenhub – Posterior Circumflex Humeral Artery
            </a>
          </li>
        </ul>
        <h3
          id="reference-images"
          className="text-lg font-medium mt-4 text-stone-800"
        >
          Images
        </h3>
        <p className="text-stone-700">
          All images taken from{" "}
          <a
            href="https://www.z-anatomy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-aq-primary hover:underline"
          >
            Z-Anatomy
          </a>
          . As of the date this was written (February 2, 2026), Z-Anatomy has a
          CC-BY-SA 4.0 License.
        </p>
      </div>

      <FeedbackSection />
    </div>
  );
}
