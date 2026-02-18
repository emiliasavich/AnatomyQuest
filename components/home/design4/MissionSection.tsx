import { MISSION } from "@/lib/homeContent";

export function MissionSection() {
  return (
    <section className="rounded-xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
      <h1 className="font-display text-2xl font-semibold tracking-tight text-aq-blue sm:text-3xl">
        {MISSION.title}
      </h1>
      {MISSION.paragraphs.map((p, i) => (
        <p key={i} className="mt-4 max-w-2xl leading-relaxed text-stone-600">
          {p}
        </p>
      ))}
    </section>
  );
}
