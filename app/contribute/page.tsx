import { ContentLayout } from "@/components/ContentLayout";
import Link from "next/link";

export default function ContributePage() {
  return (
    <ContentLayout
      title="Contribute"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contribute" }]}
    >
      <p className="text-stone-600 mb-8 leading-relaxed">
        AnatomyQuest is community-driven. You can contribute in two ways:
      </p>

      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-2xl border border-aq-primary/20 bg-aq-sage/50 px-6 py-6 sm:px-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary" aria-hidden />
          <div className="pl-2">
            <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900">1. Contribute via GitHub</h2>
            <p className="mt-3 text-stone-600 leading-relaxed">
              If you use Git and GitHub, you can propose text changes, fix typos, or add new sections by opening a pull request. This is best for markdown/content and code.
            </p>
            <a
              href="https://github.com/emiliasavich/AnatomyQuest"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-stone-800 px-4 py-2.5 text-sm font-medium !text-white transition-colors hover:bg-stone-700"
            >
              Open AnatomyQuest on GitHub
            </a>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-2xl border border-aq-primary/20 bg-aq-sage/50 px-6 py-6 sm:px-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-aq-primary" aria-hidden />
          <div className="pl-2">
            <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900">2. Contribute via Canva</h2>
            <p className="mt-3 text-stone-600 leading-relaxed">
              For image-based contributions (diagrams, labeled anatomy, study graphics), you can create or edit designs in Canva and share them with us. We’ll integrate approved work into the site with credit.
            </p>
            <p className="mt-3 text-sm text-stone-500">
              Contact us to get access to the Canva space or to submit your design:{" "}
              <a href="mailto:connect@anatomyquest.org" className="font-medium text-aq-primary hover:underline">connect@anatomyquest.org</a>
            </p>
          </div>
        </section>
      </div>

      <section className="mt-10 rounded-2xl border border-aq-teal/20 bg-aq-sage/40 px-6 py-5">
        <h2 className="font-serif text-lg font-semibold tracking-tight text-stone-900">Licensing & ownership</h2>
        <p className="mt-2 text-stone-600 text-sm leading-relaxed">
          By contributing, you agree that your contributions may become the property of AnatomyQuest (the organization). We maintain full rights to administer, adapt, and use contributed content to further our mission. Specific terms will be updated as we finalize our non-profit and licensing structure.
        </p>
      </section>
    </ContentLayout>
  );
}
