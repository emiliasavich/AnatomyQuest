import Link from "next/link";
import { MAIN_SECTIONS, ORGANIZATION } from "@/lib/homeContent";

export function OrganizationSection() {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
        {ORGANIZATION.title}
      </h2>
      <p className="mt-2 max-w-2xl text-stone-600">{ORGANIZATION.intro}</p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-3 sm:items-stretch">
        {MAIN_SECTIONS.map((item) => (
          <li key={item.href} className="flex min-h-0">
            <Link
              href={item.href}
              className="group relative flex h-full min-h-[160px] flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:border-aq-red/40 hover:shadow-md"
            >
              <span className="font-display text-xl font-semibold text-stone-900 group-hover:text-aq-red">
                {item.label}
              </span>
              <span className="mt-2 flex-1 text-sm text-stone-600">{item.description}</span>
              <span className="mt-4 text-sm font-medium text-aq-red group-hover:underline">Explore →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
