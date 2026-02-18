export function MissionSection() {
  return (
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
          This page is your <strong className="text-stone-800">summary of the whole site</strong>: how we’re organized, how our learning modules work, and quick links to every main section. Use the <strong className="text-stone-800">left sidebar</strong> to navigate at any time, or jump to a section below.
        </p>
      </div>
    </section>
  );
}
