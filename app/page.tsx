import Link from "next/link";

const QUICK_ACCESS = [
  { label: "Learning Bones", href: "/getting_started/effective_learning_methods/learning_bones", description: "How to study anatomy effectively" },
  { label: "Humerus (Upper Limb)", href: "/upper_limb/bones/humerus", description: "Upper limb bone" },
  { label: "Humerus (Entire Body)", href: "/entire_body/bones/humerus", description: "Full body context" },
  { label: "Femur", href: "/entire_body/bones/femur", description: "Thigh bone" },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Mission — hero block with subtle anatomy feel */}
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
            via GitHub or Canva. Use the <strong className="text-stone-800">left sidebar</strong> to navigate, or jump to a topic below.
          </p>
        </div>
      </section>

      {/* Quick access — clean cards, subtle hover */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-stone-800 sm:text-2xl">
          Quick access
        </h2>
        <p className="mt-1 text-sm text-stone-500">
          Go straight to a page, or use the sidebar for the full menu.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {QUICK_ACCESS.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative flex flex-col gap-0.5 rounded-xl border border-stone-200/80 bg-white py-4 pl-6 pr-5 transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/40 hover:shadow-sm sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-aq-primary/50 group-hover:bg-aq-primary" aria-hidden />
                <span className="font-medium text-stone-800 group-hover:text-aq-primary">
                  {item.label}
                </span>
                <span className="text-sm text-stone-500">
                  {item.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
