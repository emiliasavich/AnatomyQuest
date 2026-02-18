import Link from "next/link";

const SITE_MAP = [
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
    links: [
      { label: "Search bones & topics", href: "/search" },
    ],
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

export function WhereToGoSection() {
  return (
    <section>
      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
        Where to go
      </h2>
      <p className="mt-2 max-w-2xl text-stone-600">
        Direct links to every main section. Pick where you want to start.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SITE_MAP.map((block) => (
          <div key={block.section} className="rounded-xl border border-stone-200/80 bg-stone-50/60 p-4">
            <h3 className="font-semibold text-stone-900">{block.section}</h3>
            <ul className="mt-3 space-y-2">
              {block.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-aq-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
