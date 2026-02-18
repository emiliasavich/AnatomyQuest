import { MISSION } from "@/lib/homeContent";

export function MissionSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border-2 border-aq-blue/20 bg-white px-6 py-6 shadow-lg sm:px-8 sm:py-7">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-blue" aria-hidden />
      <div className="pl-2">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-aq-blue sm:text-3xl">
          {MISSION.title}
        </h1>
        {MISSION.paragraphs.map((p, i) => (
          <p key={i} className="mt-3 leading-snug text-stone-600">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
