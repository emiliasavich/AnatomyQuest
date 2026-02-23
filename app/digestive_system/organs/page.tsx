import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";

const ORGANS = [
  { title: "Stomach", path: "/digestive_system/organs/stomach" },
  { title: "Small Intestine" },
  { title: "Liver" },
];

export default function OrgansPage() {
  return (
    <ContentLayout
      title="Organs"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digestive System", href: "/digestive_system" },
        { label: "Organs" },
      ]}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {ORGANS.map((item) => (
          <li key={item.title}>
            {"path" in item && item.path ? (
              <Link
                href={item.path}
                className="group relative block rounded-xl border border-stone-200/80 bg-white py-4 pl-6 pr-5 transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/40 hover:shadow-sm"
              >
                <span
                  className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-aq-primary/50 group-hover:bg-aq-primary"
                  aria-hidden
                />
                <h2 className="font-medium text-stone-800 group-hover:text-aq-primary">
                  {item.title}
                </h2>
              </Link>
            ) : (
              <span className="relative block rounded-xl border border-stone-200/80 bg-white py-4 pl-6 pr-5 opacity-60">
                <span
                  className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-aq-primary/30"
                  aria-hidden
                />
                <h2 className="font-medium text-stone-800">{item.title}</h2>
                <span className="text-xs text-stone-400">Coming soon</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </ContentLayout>
  );
}
