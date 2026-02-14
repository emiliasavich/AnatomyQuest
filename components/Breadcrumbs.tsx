import Link from "next/link";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-stone-500">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-stone-400">/</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-aq-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
