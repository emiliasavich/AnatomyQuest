"use client";

import Link from "next/link";
import Image from "next/image";
import { AccordionSection } from "./AccordionSection";
import { ImageViewer } from "./ImageViewer";

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function renderDescription(desc: unknown): React.ReactNode {
  if (typeof desc === "string") return desc;
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
    const d = desc as { has_subpoints: { main_point: string; subpoints: string[] } };
    return (
      <>
        {d.has_subpoints.main_point}
        <ul className="list-disc pl-6 mt-1">
          {d.has_subpoints.subpoints.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </>
    );
  }
  if (desc && typeof desc === "object" && "text" in desc) {
    const d = desc as { text: string; subpoints?: string[] };
    return (
      <>
        {d.text}
        {d.subpoints && (
          <ul className="list-disc pl-6 mt-1">
            {d.subpoints.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
  return null;
}

interface HumerusContentProps {
  landmarks: unknown;
  neighbors: unknown;
  neighborsBigPicture: unknown;
  blood: unknown;
  fourViews: unknown;
}

export function HumerusContent({
  landmarks,
  neighbors,
  neighborsBigPicture,
  blood,
  fourViews,
}: HumerusContentProps) {
  return (
    <div>
      <p><strong>Goal:</strong> Understand how the humerus relates to the body as a whole.</p>
      <p><strong>Purpose:</strong> To encourage deeper, longer-lasting learning by linking the bone to the skeletal, muscular, and cardiovascular systems rather than relying on rote memorization.</p>
      <p><strong>How to use this guide:</strong> Follow the{" "}
        <Link href="/getting_started/effective_learning_methods/learning_bones" className="text-aq-primary hover:underline">five structured steps</Link>
        {" "}below.
      </p>

      <AccordionSection id="five-steps-overview" title="Click to read about the five steps. Then click to close." defaultOpen={false}>
        <p className="mb-4">Each step relates the bone to the bigger picture to help you understand the material and remember it for longer.</p>
        <div className="space-y-2 text-sm">
          <p><span className="location-color font-medium">Location</span> – Where is the bone?</p>
          <p><span className="shape-color font-medium">Shape</span> – What is the bone&apos;s shape?</p>
          <p><span className="neighbors-color font-medium">Neighbors</span> – What bones articulate with this bone?</p>
          <p><span className="landmarks-color font-medium">Anatomical Landmarks</span> – What are the named parts?</p>
          <p><span className="blood-supply-color font-medium">Blood Supply</span> – What blood vessels nourish the bone?</p>
        </div>
      </AccordionSection>

      <div className="step step-location my-8">
        <h2 className="text-xl font-semibold mt-6">Step 1 – Location</h2>
        <p>The humerus is found in the <strong>upper arm</strong> between the shoulder and elbow.</p>
        <figure className="my-4">
          <Image
            src="/assets/images/bones/humerus/Humerus - location.webp"
            alt="Humerus Location"
            width={500}
            height={350}
            className="rounded-lg border border-stone-200"
            unoptimized
          />
          <figcaption className="text-sm text-stone-500 mt-1">Humerus</figcaption>
        </figure>
      </div>

      <div className="step step-shape my-8">
        <h2 className="text-xl font-semibold mt-6">Step 2 – Shape</h2>
        <p>The humerus is a <strong>long bone</strong>, which means it functions as a lever to enable movement of the arm.</p>
        <figure className="my-4">
          <Image
            src="/assets/images/bones/humerus/Humerus - shape.webp"
            alt="Humerus Shape"
            width={500}
            height={350}
            className="rounded-lg border border-stone-200"
            unoptimized
          />
          <figcaption className="text-sm text-stone-500 mt-1">Humerus</figcaption>
        </figure>
      </div>

      <div className="step step-neighbors my-8">
        <h2 className="text-xl font-semibold mt-6">Step 3 – Neighbors</h2>
        <p>The humerus has neighboring bones at its two ends: the proximal end at the shoulder, and the distal end at the elbow.</p>
        {Array.isArray(neighbors) &&
          neighbors.map((bigPicture: Record<string, unknown>, idx: number) => (
            <AccordionSection
              key={idx}
              id={`neighbors-${slugify(String(bigPicture.big_picture_name))}`}
              title={String(bigPicture.big_picture_name)}
            >
              <p className="mb-4">The {String(bigPicture.big_picture_name).toLowerCase()} end of the humerus articulates with the following bones:</p>
              <ul className="list-disc pl-6 mb-4">
                {(bigPicture.elements as Record<string, unknown>[])?.map((el: Record<string, unknown>, i: number) => (
                  <li key={i}>
                    <a href={`#neighbors-${slugify(String(el.name))}`} className="text-aq-primary hover:underline">
                      {String(el.name)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="space-y-6">
                {(bigPicture.elements as Record<string, unknown>[])?.map((child: Record<string, unknown>, i: number) => (
                  <div key={i} id={`neighbors-${slugify(String(child.name))}`}>
                    <h4 className="font-semibold text-stone-900">{String(child.name)}</h4>
                    {child.subtitle ? <p className="text-sm text-stone-500">{String(child.subtitle)}</p> : null}
                    <div className="prose prose-sm max-w-none my-2" dangerouslySetInnerHTML={{ __html: String(child.description || "").replace(/\n/g, "<br/>") }} />
                    {child.views ? (
                      <div className="mt-4">
                        <ImageViewer
                          basePath="labeled joints"
                          baseName={String(child.base)}
                          views={child.views as Record<string, string[]>}
                          altBase={String(child.alt_base || child.name)}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </AccordionSection>
          ))}
      </div>

      <div className="step step-landmarks my-8">
        <h2 className="text-xl font-semibold mt-6">Step 4 – Anatomical Landmarks</h2>
        <p>Most of the named landmarks on the humerus are sites of muscle attachment. Some are grooves that guide tendons, nerves, and blood vessels.</p>
        {Array.isArray(landmarks) &&
          landmarks.map((bigPicture: Record<string, unknown>, idx: number) => (
            <AccordionSection
              key={idx}
              id={`landmarks-${slugify(String(bigPicture.big_picture_name))}`}
              title={String(bigPicture.big_picture_name)}
            >
              <p className="mb-4">
                The {String(bigPicture.big_picture_name).toLowerCase()} of the humerus encompass{bigPicture.singular ? "s" : ""} the following landmarks:
              </p>
              <ul className="list-disc pl-6 mb-4">
                {(bigPicture.elements as Record<string, unknown>[])?.map((el: Record<string, unknown>, i: number) => (
                  <li key={i}>
                    <a href={`#landmark-${slugify(String(el.name))}`} className="text-aq-primary hover:underline">
                      {String(el.name)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="space-y-6">
                {(bigPicture.elements as Record<string, unknown>[])?.map((child: Record<string, unknown>, i: number) => (
                  <div key={i} id={`landmark-${slugify(String(child.name))}`}>
                    <h4 className="font-semibold text-stone-900">{String(child.name)}</h4>
                    <ul className="list-disc pl-6 my-2 space-y-1">
                      {(child.description as unknown[])?.map((d: unknown, j: number) => (
                        <li key={j}>{renderDescription(d)}</li>
                      ))}
                    </ul>
                    {child.views ? (
                      <div className="mt-4">
                        <ImageViewer
                          basePath="labeled landmarks"
                          baseName={String(child.base)}
                          views={child.views as Record<string, string[]>}
                          altBase={String(child.name)}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </AccordionSection>
          ))}
      </div>

      <div className="step step-blood my-8">
        <h2 className="text-xl font-semibold mt-6">Step 5 – Blood Supply</h2>
        <p>Content in progress.</p>
        {Array.isArray(blood) &&
          blood.map((bigPicture: Record<string, unknown>, idx: number) => (
            <AccordionSection
              key={idx}
              id={`blood-${slugify(String(bigPicture.big_picture_name))}`}
              title={String(bigPicture.big_picture_name)}
            >
              <p className="mb-4">The {String(bigPicture.big_picture_name).toLowerCase()} of the humerus is supplied by the following arteries:</p>
              <ul className="list-disc pl-6">
                {(bigPicture.elements as Record<string, unknown>[])?.map((el: Record<string, unknown>, i: number) => (
                  <li key={i}>{String(el.name)}</li>
                ))}
              </ul>
            </AccordionSection>
          ))}
      </div>

      <div className="mt-10 pt-6 border-t border-stone-200">
        <h2 className="text-xl font-semibold">References</h2>
        <h3 id="reference-humerus-overview" className="text-lg font-medium mt-4">Landmarks and General Anatomy</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><a href="https://www.kenhub.com/en/library/anatomy/the-humerus" target="_blank" rel="noopener noreferrer" className="text-aq-primary">Kenhub – Humerus Anatomy</a></li>
          <li><a href="https://courses.lumenlearning.com/suny-ap1/chapter/bones-of-the-upper-limb/" target="_blank" rel="noopener noreferrer" className="text-aq-primary">Lumen Learning – Bones of the Upper Limb</a></li>
        </ul>
        <h3 id="reference-images" className="text-lg font-medium mt-4">Images</h3>
        <p>All images taken from <a href="https://www.z-anatomy.com/" target="_blank" rel="noopener noreferrer" className="text-aq-primary">Z-Anatomy</a>. As of the date this was written (February 2, 2026), Z-Anatomy has a CC-BY-SA 4.0 License.</p>
      </div>
    </div>
  );
}
