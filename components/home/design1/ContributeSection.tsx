import Link from "next/link";
import { CONTRIBUTE } from "@/lib/homeContent";

export function ContributeSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border-2 border-aq-turquoise/30 bg-aq-turquoise/10 px-6 py-5 sm:px-8 sm:py-6">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-turquoise" aria-hidden />
      <div className="pl-2">
        <h2 className="font-display text-xl font-semibold tracking-tight text-stone-900">
          {CONTRIBUTE.title}
        </h2>
        <p className="mt-2 leading-snug text-stone-600">
          {CONTRIBUTE.body}
        </p>
        <Link
          href={CONTRIBUTE.href}
          className="mt-3 inline-flex items-center text-sm font-medium text-aq-blue hover:underline"
        >
          {CONTRIBUTE.linkLabel}
        </Link>
      </div>
    </section>
  );
}
