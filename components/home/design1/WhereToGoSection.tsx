import Link from "next/link";
import { WHERE_TO_GO, SITE_MAP } from "@/lib/homeContent";

export function WhereToGoSection() {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
        {WHERE_TO_GO.title}
      </h2>
      <p className="mt-2 max-w-2xl text-stone-600">
        {WHERE_TO_GO.intro}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SITE_MAP.map((block) => (
          <div
            key={block.section}
            className="rounded-xl border-2 border-stone-200/80 bg-stone-50/80 p-4 shadow-sm"
          >
            <h3 className="font-display font-semibold text-stone-900">{block.section}</h3>
            <ul className="mt-3 space-y-2">
              {block.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-aq-blue hover:underline"
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
