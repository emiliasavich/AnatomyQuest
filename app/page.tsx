"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "3", label: "Study Sections" },
  { value: "Free", label: "Always & Forever" },
  { value: "Non-profit", label: "In Registration" },
  { value: "Open", label: "Community Driven" },
];

const SECTIONS = [
  {
    label: "Getting Started",
    href: "/getting_started",
    icon: "🧭",
    description:
      "Learn how to study anatomy effectively and follow structured steps for each bone. Covers location, shape, neighbors, landmarks, and blood supply.",
    highlights: ["Study methodology", "Bone structure framework", "How to use this site"],
  },
  {
    label: "Upper Limb",
    href: "/upper_limb",
    icon: "💪",
    description:
      "Explore bones of the arm and shoulder — location, landmarks, and clinical context. Includes detailed image-based guides.",
    highlights: ["Shoulder & clavicle", "Humerus, radius, ulna", "Hand & wrist bones"],
  },
  {
    label: "Search Anatomy",
    href: "/search",
    icon: "🔍",
    description:
      "Search across all bones and structures. Find exactly what you need without browsing — ideal for quick review sessions.",
    highlights: ["Full-body bone search", "Filter by region", "Quick-access cards"],
  },
];

const CONTRIBUTION_STEPS = [
  {
    step: "01",
    title: "Fork the Repository",
    body: "Go to the AnatomyQuest GitHub repository and click Fork. This creates your own copy of the project where you can make changes freely.",
    code: "github.com/anatomyquest/anatomyquest",
  },
  {
    step: "02",
    title: "Clone to Your Machine",
    body: "Clone your fork locally so you can edit files, add images, or update content.",
    code: "git clone https://github.com/YOUR_USERNAME/anatomyquest.git",
  },
  {
    step: "03",
    title: "Make Your Changes",
    body: "Add or improve content — correct a label, add a missing landmark, improve a description, or add a new image guide. Follow the existing file structure.",
    code: "# Edit files in /content or /public/images",
  },
  {
    step: "04",
    title: "Submit a Pull Request",
    body: "Push your changes to your fork, then open a Pull Request on GitHub. Describe what you changed and why. A maintainer will review and merge it.",
    code: "git push origin your-branch-name",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatBar() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-aq-primary/20 bg-white px-4 py-4 text-center shadow-sm"
        >
          <p className="font-serif text-2xl font-bold text-aq-primary">{s.value}</p>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-stone-500">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function SectionCard({ section }: { section: (typeof SECTIONS)[number] }) {
  return (
    <Link
      href={section.href}
      className="group relative overflow-hidden flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-aq-primary/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-aq-primary/40 focus:ring-offset-2"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary" aria-hidden />
      <div className="flex items-center gap-3">
        <span className="text-2xl">{section.icon}</span>
        <span className="font-serif text-lg font-semibold text-stone-900 group-hover:text-aq-primary">
          {section.label}
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{section.description}</p>
      <ul className="mt-4 space-y-1">
        {section.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-xs text-stone-500">
            <span className="h-1 w-1 rounded-full bg-aq-primary/60" />
            {h}
          </li>
        ))}
      </ul>
      <span className="mt-5 text-sm font-medium text-aq-primary group-hover:underline">
        Explore →
      </span>
    </Link>
  );
}

function ContributionTutorial() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="rounded-2xl border border-stone-200 bg-white shadow-sm">
      {/* Header — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aq-primary/40"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">🤝</span>
          <div>
            <p className="font-serif text-lg font-semibold text-stone-900">
              How to Contribute
            </p>
            <p className="text-sm text-stone-500">
              Help us grow — add content, fix errors, improve guides via GitHub
            </p>
          </div>
        </div>
        <span
          className="ml-4 flex-shrink-0 text-aq-primary transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {/* Expandable content */}
      {open && (
        <div className="border-t border-stone-100 px-6 pb-6 pt-5">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-stone-600">
            AnatomyQuest is built by students and educators for students. Every improvement —
            a corrected label, a missing landmark, a clearer description — directly helps
            someone who can't afford expensive textbooks. Here's how to contribute via GitHub:
          </p>

          <ol className="space-y-5">
            {CONTRIBUTION_STEPS.map((s) => (
              <li key={s.step} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-aq-primary/10 font-mono text-xs font-bold text-aq-primary">
                  {s.step}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-stone-800">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">{s.body}</p>
                  <div className="mt-2 flex items-center justify-between rounded-lg bg-stone-50 px-3 py-2 font-mono text-xs text-stone-700">
                    <span className="truncate">{s.code}</span>
                    <button
                      onClick={() => copyCode(s.code, s.step)}
                      className="ml-3 flex-shrink-0 rounded px-2 py-0.5 text-aq-primary transition hover:bg-aq-primary/10 focus:outline-none"
                    >
                      {copied === s.step ? "✓" : "Copy"}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-xl border border-aq-primary/20 bg-aq-sage/40 px-4 py-3 text-sm text-stone-700">
            <strong className="text-stone-900">Not sure where to start?</strong> Open an Issue
            on GitHub describing what's missing or incorrect — even that is a valuable
            contribution.{" "}
            <a
              href="https://github.com/anatomyquest/anatomyquest/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aq-primary hover:underline"
            >
              Open an issue →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="space-y-10">

      {/* ── Hero / Mission ── */}
      <section className="relative overflow-hidden rounded-2xl border border-aq-primary/20 bg-aq-sage/60 px-6 py-9 sm:px-10 sm:py-11">
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary"
          aria-hidden
        />
        <div className="pl-2">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-aq-primary">
            Free · Open · Community-Built
          </p>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Anatomy for Everyone
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
            AnatomyQuest is a{" "}
            <strong className="text-stone-800">community-driven study resource</strong> built
            for learners who can't access expensive textbooks or paid courses. We work with
            students and educators to create clear, image-based guides that explain the{" "}
            <em>why</em> behind structures — not just the <em>what</em>.
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
            We are currently registering as a{" "}
            <strong className="text-stone-800">non-profit</strong>. Every resource this
            project generates goes toward supporting underprivileged communities. Content is
            free, permanent, and open to{" "}
            <Link href="/contribute" className="font-medium text-aq-primary hover:underline">
              contribution
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatBar />

      {/* ── What's Inside ── */}
      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold tracking-tight text-stone-800">
          What's Inside
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {SECTIONS.map((s) => (
            <SectionCard key={s.href} section={s} />
          ))}
        </div>
      </section>

      {/* ── How to Use This Site ── */}
      <section className="rounded-2xl border border-stone-200 bg-white px-6 py-6 shadow-sm sm:px-8">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-800">
          How to Use This Site
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
          AnatomyQuest is structured around a repeating 5-part framework applied to every
          bone and structure. When studying any topic, work through each step in order:
        </p>
        <ol className="mt-4 space-y-3">
          {[
            ["Location", "Where is this structure in the body? What region?"],
            ["Shape & Surface", "What does it look like? What surfaces and borders does it have?"],
            ["Neighbors", "What structures surround it — muscles, vessels, nerves?"],
            ["Landmarks", "Key bony or soft-tissue features used in clinical practice."],
            ["Blood Supply & Innervation", "What supplies it? Why does this matter clinically?"],
          ].map(([title, desc], i) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-aq-primary/10 font-mono text-xs font-bold text-aq-primary">
                {i + 1}
              </span>
              <p className="text-sm text-stone-600">
                <strong className="text-stone-800">{title}.</strong> {desc}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-stone-500">
          Use the <strong className="text-stone-700">left sidebar</strong> to navigate between
          sections at any time.
        </p>
      </section>

      {/* ── Contribution Tutorial ── */}
      <ContributionTutorial />

    </div>
  );
}
