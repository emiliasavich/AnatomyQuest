import Link from "next/link";
import { LEARNING_MODULES } from "@/lib/homeContent";

export function LearningModulesSection() {
  const [firstPara, secondPart] = LEARNING_MODULES.paragraphs;
  const links = typeof secondPart === "object" ? secondPart : null;

  return (
    <section className="rounded-2xl border border-aq-turquoise/20 bg-white px-6 py-6 sm:px-8 sm:py-7">
      <h2 className="font-display text-xl font-semibold text-stone-900 sm:text-2xl">
        {LEARNING_MODULES.title}
      </h2>
      <p className="mt-3 max-w-2xl text-stone-600">{firstPara}</p>
      {links && (
        <p className="mt-3 text-stone-600">
          You can see this method explained with examples in{" "}
          <Link href={links.learningBonesHref} className="font-medium text-aq-turquoise hover:underline">
            Learning Bones
          </Link>
          , and then apply it on any bone page (e.g.{" "}
          <Link href={links.humerusHref} className="font-medium text-aq-turquoise hover:underline">
            Humerus
          </Link>
          ).
        </p>
      )}
    </section>
  );
}
