import { ContentLayout } from "@/components/ContentLayout";
import { getDetails } from "@/lib/data";
import type { DetailSection } from "@/lib/data";

export default function StomachPage() {
  const sections: DetailSection[] = getDetails("organs", "stomach");

  return (
    <ContentLayout
      title="Stomach"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digestive System", href: "/digestive_system" },
        { label: "Organs", href: "/digestive_system/organs" },
        { label: "Stomach" },
      ]}
    >
      <p className="mb-6 leading-relaxed text-stone-600">
        The <strong className="text-stone-800">stomach</strong> is a muscular,
        J-shaped hollow organ of the gastrointestinal tract. It receives food
        from the esophagus, secretes gastric acid and enzymes for chemical
        digestion, and propels chyme into the duodenum.
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.section}>
            <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 mb-4">
              {section.section}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="relative rounded-xl border border-stone-200/80 bg-white p-4 pl-5"
                >
                  <span
                    className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-aq-primary/50"
                    aria-hidden
                  />
                  <h3 className="font-medium text-stone-800">{item.name}</h3>
                  <ul className="mt-1.5 list-disc pl-5 text-sm leading-relaxed text-stone-600 space-y-0.5">
                    {item.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </ContentLayout>
  );
}
