import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-0 space-y-8 font-display">
      <section className="rounded-2xl border-2 border-stone-200 bg-white px-6 py-8 shadow-md sm:px-8 sm:py-10">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
          404 – Page not found
        </h1>
        <p className="mt-3 leading-snug text-stone-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <p className="mt-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-aq-blue hover:underline"
          >
            Back to home →
          </Link>
        </p>
      </section>
    </div>
  );
}
