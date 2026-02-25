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
          We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you at{" "}
          <a href="mailto:connect@anatomyquest.org" className="font-medium text-aq-primary hover:underline">
            connect@anatomyquest.org
          </a>
          .
        </p>
        <FeedbackForm />
      </div>
    </section>
  );
}
