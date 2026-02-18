import Link from "next/link";

export function LearningModulesSection() {
  return (
    <section className="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 sm:px-8 sm:py-7 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
        How our learning modules work
      </h2>
      <p className="mt-3 max-w-2xl text-stone-600">
        Each bone page follows the same <strong className="text-stone-800">five steps</strong>: (1) <strong>Location</strong>—where in the body; (2) <strong>Shape</strong>—long, short, flat, or irregular; (3) <strong>Neighbors</strong>—what it articulates with; (4) <strong>Anatomical landmarks</strong>—named structures and why they matter; (5) <strong>Blood supply</strong>. We use images and short explanations and emphasize the <em>why</em> so the content is easier to remember.
      </p>
      <p className="mt-3 text-stone-600">
        You can see this method explained with examples in{" "}
        <Link href="/getting_started/effective_learning_methods/learning_bones" className="font-medium text-aq-primary hover:underline">
          Learning Bones
        </Link>
        , and then apply it on any bone page (e.g.{" "}
        <Link href="/upper_limb/bones/humerus" className="font-medium text-aq-primary hover:underline">
          Humerus
        </Link>
        ).
      </p>
    </section>
  );
}
