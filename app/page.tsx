import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { InteractiveDemo } from "@/components/landing/InteractiveDemo";
import { InteractiveFiveSteps } from "@/components/landing/InteractiveFiveSteps";
import { StatsBar } from "@/components/landing/StatsBar";
import { HeroImageCycler } from "@/components/landing/HeroImageCycler";

export const metadata: Metadata = {
  title: "AnatomyQuest — Interactive Anatomy Study Resource",
  description:
    "Community-driven, image-based anatomy guides that help you understand the why behind structures. Explore bones, landmarks, and more.",
  openGraph: {
    title: "AnatomyQuest — Interactive Anatomy Study Resource",
    description:
      "Community-driven, image-based anatomy guides that help you understand the why behind structures. Explore bones, landmarks, and more.",
  },
};

const MAIN_SECTIONS = [
  {
    title: "Humerus",
    description:
      "See the five-step method in action with interactive diagrams, labeled landmarks, and hover-over definitions.",
    href: "/upper_limb/bones/humerus",
    image: "/assets/images/bones/humerus/Humerus - anterior view.webp",
    alt: "Humerus anterior view",
  },
  {
    title: "Upper Limb",
    href: "/upper_limb",
    description:
      "Explore bones of the arm and shoulder—location, landmarks, and clinical context.",
    image: "/assets/images/bones/humerus/Humerus - location.webp",
    alt: "Upper limb overview",
  },
] as const;

export default function HomePage() {
  return (
    <div className="-mx-4 -mt-6 sm:-mx-6 lg:-mx-8">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-aq-sage to-aq-warm">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(45,80,22,0.08),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-aq-primary">
                For anatomy students
              </p>

              <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Anatomy that makes you understand, not just memorize
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
                <span className="font-semibold">AnatomyQuest</span> is a free,
                interactive anatomy resource designed to help you understand{" "}
                <em>why</em> each structure exists — so you remember it for
                life.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/upper_limb/bones/humerus"
                  className="inline-flex items-center gap-2 rounded-xl bg-aq-primary px-6 py-3 text-base font-semibold !text-white shadow-sm transition-all hover:bg-aq-primary/90 hover:shadow-md hover:no-underline"
                >
                  See it in action
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/getting_started"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-700 shadow-sm transition-all hover:border-aq-primary/40 hover:bg-aq-sage/50 hover:text-aq-primary hover:shadow-md hover:no-underline"
                >
                  Getting started
                </Link>
              </div>
            </div>

            {/* Hero bone image — desktop only, auto-cycles */}
            <div className="hidden lg:block">
              <HeroImageCycler />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Demo ── */}
      <ScrollReveal>
        <InteractiveDemo />
      </ScrollReveal>

      {/* ── 3. Five-Step Method (tabbed) ── */}
      <ScrollReveal>
        <InteractiveFiveSteps />
      </ScrollReveal>

      {/* ── 4. Stats Bar ── */}
      <ScrollReveal>
        <StatsBar />
      </ScrollReveal>

      {/* ── 5. What You'll Find ── */}
      <ScrollReveal>
        <section className="border-y border-stone-200/60 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-aq-primary">
              What you&apos;ll find
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Interactive diagrams, multiple views, hover-over definitions
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {MAIN_SECTIONS.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all hover:border-aq-primary/30 hover:shadow-md hover:no-underline"
                >
                  <div className="flex flex-col items-center sm:flex-row sm:items-center">
                    <div className="relative m-4 aspect-square w-[calc(100%-2rem)] shrink-0 overflow-hidden rounded-xl bg-aq-sage/40 sm:m-4 sm:w-36 sm:h-36">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) calc(100vw - 2rem), 144px"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6">
                      <h3 className="font-serif text-xl font-semibold tracking-tight text-stone-900 group-hover:text-aq-primary">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">
                        {card.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-aq-primary">
                        Explore
                        <svg
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── 6. CTA ── */}
      <ScrollReveal>
        <section className="bg-gradient-to-b from-aq-sage/80 to-aq-warm">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Ready to learn anatomy differently?
              </h2>
              <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                Start with the humerus — our most complete page.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/upper_limb/bones/humerus"
                  className="inline-flex items-center gap-2 rounded-xl bg-aq-primary px-6 py-3 text-base font-semibold !text-white shadow-sm transition-all hover:bg-aq-primary/90 hover:shadow-md hover:no-underline"
                >
                  Explore the humerus
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/getting_started/effective_learning_methods/learning_bones"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-700 shadow-sm transition-all hover:border-aq-primary/40 hover:bg-aq-sage/50 hover:text-aq-primary hover:shadow-md hover:no-underline"
                >
                  Read the learning guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── 7. Mission & Community ── */}
      <ScrollReveal>
        <section className="border-t border-stone-200/60 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Mission */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-aq-primary">
                  Our mission
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                  Education that gives back
                </h2>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  We collaborate with students and professionals to create
                  learning pages. Free, open source, and licensed under{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"
                    rel="license noopener"
                    className="font-medium text-aq-primary hover:underline"
                  >
                    CC BY-SA 4.0
                  </a>
                  .
                </p>
                <Link
                  href="/about"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aq-primary hover:underline"
                >
                  Read more about us
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Contribute */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-aq-teal">
                  Community-driven
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                  Anyone can contribute
                </h2>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  Built by its community — fix a mistake, improve an
                  explanation, or write a new section. No technical skills
                  required.
                </p>
                <Link
                  href="/contribute"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aq-teal hover:underline"
                >
                  Learn how to contribute
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
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
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
