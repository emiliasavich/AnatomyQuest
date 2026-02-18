import Link from "next/link";

const MAIN_SECTIONS = [
  {
    label: "Getting Started",
    href: "/getting_started",
    description: "Learn how to study anatomy effectively and follow the five-step method we use for every bone.",
  },
  {
    label: "Upper Limb",
    href: "/upper_limb",
    description: "Bones of the arm and shoulder—location, landmarks, neighbors, and clinical context.",
  },
  {
    label: "Search",
    href: "/search",
    description: "Find any bone or topic. We're building search so you don't have to browse 200+ bones.",
  },
] as const;

export function OrganizationSection() {
  return (
    <section>
      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
        How the site is organized
      </h2>
      <p className="mt-2 max-w-2xl text-stone-600">
        Content is grouped into <strong className="text-stone-800">Getting Started</strong> (how to study bones), <strong className="text-stone-800">Upper Limb</strong> (arm and shoulder bones), and <strong className="text-stone-800">Search</strong>. Search will let you find any of 200+ bones without browsing long lists; until it's ready, use the sidebar or the links below.
      </p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-3 sm:items-stretch">
        {MAIN_SECTIONS.map((item) => (
          <li key={item.href} className="flex min-h-0">
            <Link
              href={item.href}
              className="group relative flex h-full min-h-[160px] flex-col rounded-b-2xl border border-t-0 border-stone-200/90 bg-white p-6 pt-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-aq-primary/40 focus:ring-offset-2"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-aq-primary/40 transition-colors group-hover:bg-aq-primary" aria-hidden />
              <span className="font-serif text-xl font-semibold tracking-tight text-stone-900 group-hover:text-aq-primary">
                {item.label}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {item.description}
              </span>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-aq-primary group-hover:underline">
                Explore →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
