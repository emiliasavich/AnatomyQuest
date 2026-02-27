import type { Metadata } from "next";
import { ContentLayout } from "@/components/ContentLayout";
import { FeedbackSection } from "@/components/FeedbackSection";

export const metadata: Metadata = {
  title: "FAQ - Contribute",
  description: "Frequently asked questions about contributing to AnatomyQuest.",
};

export default function ContributeFAQPage() {
  return (
    <ContentLayout
      title="Contribution FAQ"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contribute", href: "/contribute" },
        { label: "FAQ" },
      ]}
    >
      <p className="text-stone-600 mb-8 leading-relaxed">
        Common questions about the contribution process. If you don't find your answer here,{" "}
        <a href="mailto:hello@anatomyquest.com" className="text-aq-primary font-medium hover:underline">
          contact us
        </a>.
      </p>

      <div className="space-y-4">
        <details className="group rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6 cursor-pointer hover:border-stone-300 transition-colors">
          <summary className="flex items-center justify-between font-medium text-stone-900">
            What if my contribution is rejected?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Rejections are learning opportunities. Our team will explain why your contribution didn't meet our standards and how you can improve it. Common reasons include: insufficient sources, outdated references, or content that doesn't match our educational goals. You can always revise and resubmit.
          </p>
        </details>

        <details className="group rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6 cursor-pointer hover:border-stone-300 transition-colors">
          <summary className="flex items-center justify-between font-medium text-stone-900">
            Can I contribute images or diagrams?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Yes! You can suggest diagrams, labeled illustrations, or additional views. In the editor, use the "Suggest images" option to describe what the diagram should show. Our design team will review the request and create it if it aligns with our content needs. You don't need to create the image yourself.
          </p>
        </details>

        <details className="group rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6 cursor-pointer hover:border-stone-300 transition-colors">
          <summary className="flex items-center justify-between font-medium text-stone-900">
            What sources are acceptable?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            We accept peer-reviewed anatomy journals, medical textbooks, university anatomy resources, and established medical organizations (e.g., Mayo Clinic, NIH). We do not accept Wikipedia, blogs, or unreliable websites. If unsure about a source, cite it anyway—our team will verify it during review.
          </p>
        </details>

        <details className="group rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6 cursor-pointer hover:border-stone-300 transition-colors">
          <summary className="flex items-center justify-between font-medium text-stone-900">
            Can I edit a page I created previously?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Absolutely! You can edit any published page, including your own contributions. Simply open the page and click the Edit button. Your edits will be reviewed the same way as any new contribution, ensuring the page stays accurate and up-to-date.
          </p>
        </details>

        <details className="group rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6 cursor-pointer hover:border-stone-300 transition-colors">
          <summary className="flex items-center justify-between font-medium text-stone-900">
            Do I need an account to contribute?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Yes, you'll need to create an AnatomyQuest account to submit contributions. This lets us track your submissions, send you review updates, and credit your work. It takes just a minute to sign up with your email.
          </p>
        </details>

        <details className="group rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6 cursor-pointer hover:border-stone-300 transition-colors">
          <summary className="flex items-center justify-between font-medium text-stone-900">
            How long does the review process take?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Most submissions are reviewed within 5-10 business days. You'll receive email updates throughout the process. During busy periods, it may take slightly longer, but we'll keep you informed.
          </p>
        </details>

        <details className="group rounded-xl border border-stone-200/80 bg-white px-5 py-4 sm:px-6 cursor-pointer hover:border-stone-300 transition-colors">
          <summary className="flex items-center justify-between font-medium text-stone-900">
            What happens after my contribution is published?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Once published, your contribution becomes part of AnatomyQuest's content. You'll be credited as the contributor on the page. You can continue to edit it in the future, and your contributions appear on your contributor profile.
          </p>
        </details>
      </div>

      <section className="mt-10">
        <FeedbackSection subjectTopic="FAQ" />
      </section>
    </ContentLayout>
  );
}
