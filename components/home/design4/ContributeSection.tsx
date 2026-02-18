import Link from "next/link";
import { CONTRIBUTE } from "@/lib/homeContent";

export function ContributeSection() {
  return (
    <section className="rounded-xl border border-stone-200 bg-stone-50/80 px-6 py-6 sm:px-8 sm:py-7">
      <h2 className="font-display text-xl font-semibold text-stone-900">
        {CONTRIBUTE.title}
      </h2>
      <p className="mt-3 max-w-2xl text-stone-600">{CONTRIBUTE.body}</p>
      <Link href={CONTRIBUTE.href} className="mt-4 inline-flex text-sm font-medium text-aq-blue hover:underline">
        {CONTRIBUTE.linkLabel}
      </Link>
    </section>
  );
}
