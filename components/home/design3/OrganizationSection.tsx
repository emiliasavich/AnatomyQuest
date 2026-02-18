import Link from "next/link";
import { MAIN_SECTIONS, ORGANIZATION } from "@/lib/homeContent";

export function OrganizationSection() {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-stone-900 sm:text-2xl">
        {ORGANIZATION.title}
      </h2>
      <p className="mt-2 max-w-2xl text-stone-600">{ORGANIZATION.intro}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {MAIN_SECTIONS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg border-l-4 border-aq-turquoise bg-white p-5 shadow-sm transition hover:shadow"
            >
              <span className="font-display font-semibold text-stone-900">{item.label}</span>
              <p className="mt-2 text-sm text-stone-600">{item.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-aq-turquoise">Explore →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
