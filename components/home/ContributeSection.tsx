import Link from "next/link";

export function ContributeSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-aq-primary/20 bg-aq-sage/50 px-6 py-6 sm:px-8 sm:py-7">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary" aria-hidden />
      <div className="pl-2">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900">
          Contribute
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          AnatomyQuest is built with community input. You can contribute via <strong className="text-stone-800">GitHub</strong> (text and code) or <strong className="text-stone-800">Canva</strong> (images and diagrams). We integrate approved work with credit.
        </p>
        <Link
          href="/contribute"
          className="mt-4 inline-flex items-center text-sm font-medium text-aq-primary hover:underline"
        >
          How to contribute →
        </Link>
      </div>
    </section>
  );
}
