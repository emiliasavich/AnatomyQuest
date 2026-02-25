const STATS = [
  { value: "100+", label: "Labeled landmarks" },
  { value: "8", label: "Anatomical views" },
  { value: "Free", label: "& open source" },
  { value: "CC BY-SA", label: "4.0 licensed" },
] as const;

export function StatsBar() {
  return (
    <section className="border-y border-stone-200/60 bg-aq-sage/40">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-bold tracking-tight text-aq-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-stone-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
