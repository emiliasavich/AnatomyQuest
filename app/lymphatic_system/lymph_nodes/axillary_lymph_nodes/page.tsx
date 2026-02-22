import { ContentLayout } from "@/components/ContentLayout";
import { getDetails } from "@/lib/data";
import type { DetailSection } from "@/lib/data";

export default function AxillaryLymphNodesPage() {
  const sections: DetailSection[] = getDetails("lymph_nodes", "axillary");

  return (
    <ContentLayout
      title="Axillary Lymph Nodes"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Lymphatic System", href: "/lymphatic_system" },
        { label: "Lymph Nodes", href: "/lymphatic_system/lymph_nodes" },
        { label: "Axillary Lymph Nodes" },
      ]}
    >
      <p className="mb-6 leading-relaxed text-stone-600">
        The <strong className="text-stone-800">axillary lymph nodes</strong> are
        a group of 20–30 lymph nodes located in the axilla (armpit). They filter
        lymph from the upper limb, breast, and thoracic wall, and play a
        critical role in immune surveillance and cancer staging.
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
