/**
 * Contenido único del home. Usado por la página principal y por las páginas de prueba de rediseño (/design1, /design2, etc.).
 */

export const MISSION = {
  title: "Our Mission",
  paragraphs: [
    "AnatomyQuest is a community-driven study resource for anatomy. We collaborate with learners and educators to create clear, image-based guides that help you see the big picture—focusing on the why behind structures, not just the what. We are currently registering as a non-profit; our goal is to support underprivileged communities with the resources this project generates.",
    "This page is your summary of the whole site: how we're organized, how our learning modules work, and quick links to every main section. Use the left sidebar to navigate at any time, or jump to a section below.",
  ],
} as const;

export const MAIN_SECTIONS = [
  {
    label: "Getting Started",
    href: "/getting_started",
    description: "Learn how to study anatomy effectively and follow the five-step method we use for every bone.",
  },
  {
    label: "Search",
    href: "/search",
    description: "Find any bone or topic. We're building search so you don't have to browse 200+ bones.",
  },
  {
    label: "Contribute",
    href: "/contribute",
    description: "AnatomyQuest is built with community input. Contribute via GitHub or Canva; we integrate approved work with credit.",
  },
] as const;

export const ORGANIZATION = {
  title: "How the site is organized",
  intro: "Content is grouped into Getting Started (how to study bones), Search (find any of 200+ bones), and Contribute (how to contribute). Until search is ready, use the sidebar or the links below.",
} as const;

export const LEARNING_MODULES = {
  title: "How our learning modules work",
  paragraphs: [
    "Each bone page follows the same five steps: (1) Location—where in the body; (2) Shape—long, short, flat, or irregular; (3) Neighbors—what it articulates with; (4) Anatomical landmarks—named structures and why they matter; (5) Blood supply. We use images and short explanations and emphasize the why so the content is easier to remember.",
    { learningBonesHref: "/getting_started/effective_learning_methods/learning_bones", humerusHref: "/bones/humerus" },
  ],
} as const;

export const WHERE_TO_GO = {
  title: "Where to go",
  intro: "Direct links to every main section. Pick where you want to start.",
} as const;

export const SITE_MAP = [
  {
    section: "Getting Started",
    links: [
      { label: "Effective Learning Methods", href: "/getting_started/effective_learning_methods" },
      { label: "Learning Bones (5-step method)", href: "/getting_started/effective_learning_methods/learning_bones" },
    ],
  },
  {
    section: "Bones",
    links: [
      { label: "Bones", href: "/bones" },
      { label: "Humerus", href: "/bones/humerus" },
    ],
  },
  {
    section: "Search",
    links: [{ label: "Search bones & topics", href: "/search" }],
  },
  {
    section: "About & Contribute",
    links: [
      { label: "About", href: "/about" },
      { label: "Contribute", href: "/contribute" },
      { label: "Privacy Policy", href: "/privacy_policy" },
    ],
  },
] as const;

export const CONTRIBUTE = {
  title: "Contribute",
  body: "AnatomyQuest is built with community input. You can contribute via GitHub (text and code) or Canva (images and diagrams). We integrate approved work with credit.",
  linkLabel: "How to contribute →",
  href: "/contribute",
} as const;
