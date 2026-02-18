import Link from "next/link";

interface DesignLayoutProps {
  children: React.ReactNode;
  designNumber: 1 | 2 | 3 | 4;
}

export function DesignLayout({ children, designNumber }: DesignLayoutProps) {
  return (
    <div className="font-display">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm">
        <span className="font-semibold text-amber-900">
          Vista previa: Diseño {designNumber}
        </span>
        <div className="flex gap-3">
          {([1, 2, 3, 4] as const).map((n) => (
            <Link
              key={n}
              href={`/design${n}`}
              className={`font-medium ${n === designNumber ? "text-amber-700 underline" : "text-amber-800 hover:underline"}`}
            >
              Diseño {n}
            </Link>
          ))}
          <Link href="/" className="font-medium text-stone-600 hover:underline">
            Home actual
          </Link>
        </div>
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  );
}
