import Link from "next/link";
import { MAIN_SECTIONS, ORGANIZATION } from "@/lib/homeContent";

export function OrganizationSection() {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight text-aq-blue sm:text-2xl">
        {ORGANIZATION.title}
      </h2>
      <p className="mt-2 leading-snug text-stone-600">
        {ORGANIZATION.intro}
      </p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-3 sm:items-stretch">
        {MAIN_SECTIONS.map((item, i) => (
          <li key={item.href} className="flex min-h-0">
            <Link
              href={item.href}
              className={`group relative flex h-full min-h-[160px] flex-col rounded-2xl border-2 p-6 pt-5 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                i === 0 ? "border-aq-blue/30 bg-aq-blue/5 hover:border-aq-blue hover:bg-aq-blue/10 focus:ring-aq-blue/40" : ""
              } ${i === 1 ? "border-aq-red/30 bg-aq-red/5 hover:border-aq-red hover:bg-aq-red/10 focus:ring-aq-red/40" : ""} ${
                i === 2 ? "border-aq-turquoise/30 bg-aq-turquoise/5 hover:border-aq-turquoise hover:bg-aq-turquoise/10 focus:ring-aq-turquoise/40" : ""
              }`}
            >
              <span className="font-display text-xl font-semibold tracking-tight text-stone-900 group-hover:opacity-90">
                {item.label}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {item.description}
              </span>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-aq-blue group-hover:underline">
                Explore →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
