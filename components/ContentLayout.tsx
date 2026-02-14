import { Breadcrumbs } from "./Breadcrumbs";

interface ContentLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  title: string;
}

export function ContentLayout({ children, breadcrumbs = [], title }: ContentLayoutProps) {
  return (
    <article className="min-w-0 rounded-2xl border border-aq-primary/15 bg-white px-6 py-8 sm:px-8 sm:py-10 shadow-[0_1px_3px_rgba(45,80,22,0.06)]">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl mb-6">{title}</h1>
      <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:tracking-tight">{children}</div>
    </article>
  );
}
