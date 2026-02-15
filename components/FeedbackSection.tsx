import { FeedbackForm } from "./FeedbackForm";

export function FeedbackSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-aq-primary/20 bg-aq-sage/40 px-6 py-6 sm:px-8 sm:py-7">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary" aria-hidden />
      <div className="pl-2">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
          Feedback
        </h2>
        <p className="mt-3 text-stone-700">
          We&apos;d love to hear from you! You can:
        </p>
        <ol className="mt-4 list-decimal space-y-4 pl-6">
          <li>
            <span className="font-semibold text-stone-900">Email us directly</span>
            <p className="mt-1 text-stone-700">
              Send us an email at{" "}
              <a href="mailto:emiliasavich@gmail.com" className="font-medium text-aq-primary hover:underline">
                emiliasavich@gmail.com
              </a>{" "}
              (our official email is coming soon).
            </p>
          </li>
          <li>
            <span className="font-semibold text-stone-900">Leave anonymous feedback</span>
            <FeedbackForm />
          </li>
        </ol>
      </div>
    </section>
  );
}
