import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const BONE_LINKS = [{ label: "Humerus", href: "/bones/humerus" }] as const;

export default function SearchPage() {
  return (
    <div className="min-w-0 space-y-8 font-display">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <section>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-aq-turquoise sm:text-3xl">
          Search
        </h1>
        <p className="mt-2 leading-snug text-stone-600">
          We’re moving away from browsing a long list of 200+ bones and building a search so you can jump straight to the bone or topic you need. Search will be available here soon.
        </p>
        <p className="mt-3 leading-snug text-stone-600">
          Until then, use the sidebar to open Getting Started or Bones, or pick a bone from the list below.
        </p>
        <div className="mt-6 rounded-2xl border-2 border-aq-turquoise/30 bg-aq-turquoise/10 px-6 py-5 shadow-md sm:px-8 sm:py-6">
          <h2 className="font-display text-lg font-semibold tracking-tight text-stone-900">
            Current bone pages
          </h2>
          <ul className="mt-3 space-y-2">
            {BONE_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-medium text-aq-blue hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
