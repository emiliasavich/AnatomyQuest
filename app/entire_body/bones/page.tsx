import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";

const BONES = [
  { path: "/entire_body/bones/humerus", title: "Humerus" },
];

export default function EntireBodyBonesPage() {
  return (
    <ContentLayout
      title="Bones"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Entire Body", href: "/entire_body" },
        { label: "Bones" },
      ]}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {BONES.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="group relative block rounded-xl border border-stone-200/80 bg-white py-4 pl-6 pr-5 transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/40 hover:shadow-sm"
            >
              <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-aq-primary/50 group-hover:bg-aq-primary" aria-hidden />
              <h2 className="font-medium text-stone-800 group-hover:text-aq-primary">{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </ContentLayout>
  );
}
