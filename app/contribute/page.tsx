import type { Metadata } from "next";
import { ContentLayout } from "@/components/ContentLayout";
import { FeedbackSection } from "@/components/FeedbackSection";

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
        improve the content. But unlike Wikipedia, every contribution is
        reviewed by our team for anatomical accuracy before it goes live. You do
        not need any technical skills. If you know anatomy, we welcome your
        contributions.
      </p>

      <div className="space-y-8">
        {/* Why contribute */}
        <section className="rounded-2xl border border-aq-teal/20 bg-gradient-to-br from-aq-teal/10 to-aq-sage/20 px-6 py-5 sm:px-8">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Why contribute?
          </h2>
          <ul className="mt-4 grid sm:grid-cols-3 gap-4">
            <li className="flex items-center gap-2">
              <span className="text-aq-primary text-lg">✓</span>
              <p className="font-medium text-stone-900">Help thousands of students</p>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aq-primary text-lg">✓</span>
              <p className="font-medium text-stone-900">Build your portfolio</p>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aq-primary text-lg">✓</span>
              <p className="font-medium text-stone-900">Support open education</p>
            </li>
          </ul>
        </section>
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
                    anatomical accuracy, completeness, and clarity. We verify
                    your sources and ensure the content meets our educational
                    standards before it goes live.
                  </p>
                  <p className="mt-2 text-sm text-aq-primary font-medium">
                    ⏱ Most submissions are reviewed within 5-10 business days. You'll receive feedback via email.
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

          {/* Example contributions */}
          <div className="mt-6">
            <p className="text-sm font-medium text-stone-800 mb-3">Examples of accepted contributions:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            {/* Fixed Example */}
            <div className="rounded-xl border border-stone-200/80 bg-white overflow-hidden">
              <div className="border-b border-stone-200/80 px-5 py-3 sm:px-6 bg-gradient-to-r from-orange-50/50 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-orange-900">Fixed</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">Corrected inaccurate or incomplete information</p>
              </div>
              <div className="px-5 py-4 sm:px-6 space-y-2">
                <p className="text-xs font-medium text-stone-700 uppercase tracking-wide">Before:</p>
                <p className="text-sm text-stone-600 font-medium italic">"The clavicle is connected to the shoulder"</p>
                <p className="text-xs font-medium text-stone-700 uppercase tracking-wide mt-3">After:</p>
                <p className="text-sm text-stone-700 font-medium">"The clavicle <strong className="text-stone-900">(collarbone) articulates with the sternum medially and acromion process</strong> of the scapula laterally."</p>
              </div>
            </div>

            {/* Clarified Example */}
            <div className="rounded-xl border border-stone-200/80 bg-white overflow-hidden">
              <div className="border-b border-stone-200/80 px-5 py-3 sm:px-6 bg-gradient-to-r from-blue-50/50 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">💡</span>
                  <span className="text-sm font-semibold text-blue-900">Clarified</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">Added context, clinical significance, or better explanations</p>
              </div>
              <div className="px-5 py-4 sm:px-6">
                <p className="text-sm text-stone-700 leading-relaxed">Added <strong className="text-stone-900">clinical significance section</strong> explaining why understanding a specific nerve pathway matters for <strong className="text-stone-900">diagnosis and treatment planning</strong>.</p>
              </div>
            </div>

            {/* Expanded Example */}
            <div className="rounded-xl border border-stone-200/80 bg-white overflow-hidden">
              <div className="border-b border-stone-200/80 px-5 py-3 sm:px-6 bg-gradient-to-r from-emerald-50/50 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">+</span>
                  <span className="text-sm font-semibold text-emerald-900">Expanded</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">Added new sections, details, or comprehensive coverage</p>
              </div>
              <div className="px-5 py-4 sm:px-6">
                <p className="text-sm text-stone-700 leading-relaxed">Contributed <strong className="text-stone-900">3 new paragraphs</strong> on the <strong className="text-stone-900">blood supply of the femur</strong>, including <strong className="text-stone-900">arterial branches and clinical significance</strong>, with citations to <strong className="text-stone-900">peer-reviewed anatomy textbooks</strong>.</p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <details className="group rounded-2xl border border-stone-200/80 bg-aq-sage/30 px-6 py-5 sm:px-8 cursor-pointer hover:border-stone-400 transition-colors">
          <summary className="flex items-center justify-between font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Contribution guidelines
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-600 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="mt-4">
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              To maintain AnatomyQuest&apos;s educational quality and accuracy,
              all contributions must follow these standards:
            </p>
            <ul className="space-y-2 text-sm text-stone-600 leading-relaxed">
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-800">
                    Cite your sources first.
                  </strong>{" "}
                  Include references to textbooks, peer-reviewed articles, or
                  reliable anatomy resources. This is required—we verify all
                  sources.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-800">Use your own words.</strong>{" "}
                  Do not copy from other websites. Rephrase information from your
                  sources in your own language.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-800">Write for students.</strong>{" "}
                  Use clear, plain language. Explain anatomical terms and avoid
                  unnecessary jargon.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-800">
                    Explain the why, not just the what.
                  </strong>{" "}
                  Help students understand <em>why</em> structures exist and how
                  they work, not just their names and locations.
                </span>
              </li>
            </ul>
          </div>
        </details>

        {/* Licensing */}
        <details className="group rounded-2xl border border-aq-teal/20 bg-aq-sage/40 px-6 py-5 sm:px-8 cursor-pointer hover:border-aq-teal/40 transition-colors">
          <summary className="flex items-center justify-between font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Licensing & ownership
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-600 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="mt-4 space-y-4 text-sm text-stone-600 leading-relaxed">
            <p>
              By contributing, you grant AnatomyQuest a perpetual, worldwide, royalty-free license to use, modify, and distribute your contributions. This means:
            </p>
            <ul className="space-y-2 ml-4 border-l-2 border-stone-300 pl-4">
              <li>✓ Your contributions will be available under an open-source license</li>
              <li>✓ You retain the right to be credited as the original contributor</li>
              <li>✓ Your content can be adapted or translated to serve our educational mission</li>
              <li>✓ The content you contribute becomes part of AnatomyQuest's public resource</li>
            </ul>
            <p className="pt-2">
              Questions about licensing? <a href="mailto:hello@anatomyquest.com" className="text-aq-primary font-medium hover:underline">Contact us</a> for more details.
            </p>
          </div>
        </details>

        {/* FAQ Link */}
        <section className="rounded-2xl border border-stone-200/80 bg-stone-50/50 px-6 py-5 sm:px-8">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Have questions?
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            Check our <a href="/contribute/faq" className="text-aq-primary font-medium hover:underline">Frequently asked questions</a> page for answers about the review process, sources, images, accounts, and more.
          </p>
        </section>

        {/* Feedback */}
        <section className="mt-10">
          <FeedbackSection subjectTopic="Contribute" />
        </section>
      </div>
    </ContentLayout>
  );
}
