import type { Metadata } from "next";
import { ContentLayout } from "@/components/ContentLayout";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Help build AnatomyQuest — contribute anatomy content via GitHub pull requests or Canva image designs.",
};

export default function ContributePage() {
  return (
    <ContentLayout
      title="Contribute"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contribute" }]}
    >
      <p className="text-stone-600 mb-8 leading-relaxed">
        AnatomyQuest is community-driven — like Wikipedia, anyone can help
        improve the content directly on the site. You do not need any technical
        skills. If you know anatomy, you can contribute.
      </p>

      <div className="space-y-8">
        {/* How to contribute */}
        <section>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            How to contribute
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            Contributing works like editing a Wikipedia article. You write or
            edit content in a draft, then submit it for review. Here are the
            steps:
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aq-primary text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <p className="font-medium text-stone-900">
                    Open the page you want to edit
                  </p>
                  <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                    Navigate to any content page on the site and click the{" "}
                    <strong className="text-stone-800">Edit</strong> button to
                    open the editor.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aq-primary text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <p className="font-medium text-stone-900">
                    Write your content in the editor
                  </p>
                  <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                    Use the editor to make your changes — fix a typo, rewrite a
                    confusing explanation, add a new section, or fill in missing
                    details. Your edits are saved as a draft until you are ready
                    to submit.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aq-primary text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <p className="font-medium text-stone-900">
                    Add your references
                  </p>
                  <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                    List any sources you used — textbooks, peer-reviewed
                    articles, or other reliable anatomy references. This helps
                    our review team verify the accuracy of your contribution.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aq-primary text-xs font-bold text-white">
                  4
                </span>
                <div>
                  <p className="font-medium text-stone-900">
                    Submit for review
                  </p>
                  <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                    When you are done, click{" "}
                    <strong className="text-stone-800">Publish</strong> to
                    submit your draft. Our team reviews every submission for
                    accuracy and clarity before it goes live on the site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you can contribute */}
        <section>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            What you can contribute
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              {
                title: "Fix mistakes",
                description:
                  "Spotted an error in a bone description, a mislabeled structure, or an incorrect fact? Edit the page and correct it.",
              },
              {
                title: "Improve explanations",
                description:
                  "If a section is confusing or incomplete, rewrite it in clearer language. Better wording helps every student who reads the page.",
              },
              {
                title: "Add new content",
                description:
                  "Write a new section, describe an anatomical landmark, or add clinical significance to an existing structure.",
              },
              {
                title: "Suggest diagrams or images",
                description:
                  "Recommend where a labeled diagram or additional view would help. Describe what the image should show and we will work on creating it.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="relative overflow-hidden rounded-xl border border-stone-200/80 bg-aq-sage/30 px-5 py-4 pl-7 sm:px-6 sm:pl-8"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-aq-primary/40"
                  aria-hidden
                />
                <p className="font-medium text-stone-900">{item.title}</p>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Guidelines */}
        <section className="rounded-2xl border border-stone-200/80 bg-aq-sage/30 px-6 py-5 sm:px-8">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Contribution guidelines
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-stone-600 leading-relaxed">
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">Use your own words.</strong>{" "}
                Do not copy content from other websites. Rephrase information
                from your sources.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">Cite your sources.</strong>{" "}
                Include references to textbooks or peer-reviewed anatomy
                resources so reviewers can verify accuracy.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">Write for students.</strong>{" "}
                Use clear, plain language. Explain jargon when you use it.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">
                  Follow the site&apos;s philosophy.
                </strong>{" "}
                Explain the <em>why</em> behind structures, not just the{" "}
                <em>what</em>.
              </span>
            </li>
          </ul>
        </section>

        {/* Licensing */}
        <section className="rounded-2xl border border-aq-teal/20 bg-aq-sage/40 px-6 py-5">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Licensing & ownership
          </h2>
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            By contributing, you agree that your contributions may become the
            property of AnatomyQuest (the organization). We maintain full rights
            to administer, adapt, and use contributed content to further our
            mission. Specific terms will be updated as we finalize our
            non-profit and licensing structure.
          </p>
        </section>
      </div>
    </ContentLayout>
  );
}
