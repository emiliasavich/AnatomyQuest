import Link from "next/link";

const MAIN_SECTIONS = [
  {
    label: "Getting Started",
    href: "/getting_started",
    description: "Learn how to study anatomy effectively and follow structured steps for each bone.",
  },
  {
    label: "Upper Limb",
    href: "/upper_limb",
    description: "Explore bones of the arm and shoulder—location, landmarks, and clinical context.",
  },
  {
    label: "Entire Body",
    href: "/entire_body",
    description: "Bones in full-body context: upper limb, lower limb, and more.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Our Mission */}
      <section className="relative overflow-hidden rounded-2xl border border-aq-primary/20 bg-aq-sage/60 px-6 py-8 sm:px-8 sm:py-10">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary" aria-hidden />
        <div className="pl-2">
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Our Mission
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
            AnatomyQuest is a <strong className="text-stone-800">community-driven study resource</strong> for anatomy. We collaborate with learners and educators to create clear, image-based guides that help you see the big picture—focusing on the <em>why</em> behind structures, not just the <em>what</em>. We are currently registering as a <strong className="text-stone-800">non-profit</strong>; our goal is to support underprivileged communities with the resources this project generates.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
            Here you’ll find structured learning paths (location, shape, neighbors, landmarks, blood supply), direct links to current content, and ways to{" "}
            <Link href="/contribute" className="font-medium text-aq-primary hover:underline">
              contribute
            </Link>{" "}
            via GitHub or Canva. Use the <strong className="text-stone-800">left sidebar</strong> to navigate, or choose a section below.
          </p>
        </div>
      </section>

      {/* Getting Started, Upper Limb, Entire Body — main cards */}
      <section>
        <h2 className="sr-only">Main sections</h2>
        <ul className="grid gap-5 sm:grid-cols-3 sm:items-stretch">
          {MAIN_SECTIONS.map((item) => (
            <li key={item.href} className="flex min-h-0">
              <Link
                href={item.href}
                className="group relative flex h-full min-h-[180px] flex-col rounded-b-2xl border border-t-0 border-stone-200/90 bg-white p-6 pt-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-aq-primary/40 focus:ring-offset-2"
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
    </div>
  );
}
