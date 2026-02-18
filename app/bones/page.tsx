import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const BONES = [{ path: "/bones/humerus", title: "Humerus" }];

export default function BonesPage() {
  return (
    <div className="min-w-0 space-y-8 font-display">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Bones" }]} />
      <section>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-aq-blue sm:text-3xl">
          Bones
        </h1>
        <p className="mt-2 leading-snug text-stone-600">
          Browse bone pages with location, shape, neighbors, landmarks, and blood supply. Each page follows the same five-step method.
        </p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 sm:items-stretch">
          {BONES.map((item) => (
            <li key={item.path} className="flex min-h-0">
              <Link
                href={item.path}
                className="group relative flex h-full min-h-[120px] w-full flex-col rounded-2xl border-2 border-aq-blue/30 bg-aq-blue/5 p-6 pt-5 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aq-blue/40 hover:border-aq-blue hover:bg-aq-blue/10"
              >
                <span className="font-display text-xl font-semibold tracking-tight text-stone-900 group-hover:opacity-90">
                  {item.title}
                </span>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-aq-blue group-hover:underline">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
