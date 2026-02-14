import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function EntireBodyPage() {
  return (
    <div className="min-w-0 flex-1 space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Entire Body" }]} />
      <h1 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Entire Body</h1>
      <ul className="grid gap-3 sm:grid-cols-2">
        <li>
          <Link
            href="/entire_body/bones"
            className="group relative block rounded-xl border border-stone-200/80 bg-white py-4 pl-6 pr-5 transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/40 hover:shadow-sm"
          >
            <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-aq-primary/50 group-hover:bg-aq-primary" aria-hidden />
            <h2 className="font-medium text-stone-800 group-hover:text-aq-primary">Bones</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
