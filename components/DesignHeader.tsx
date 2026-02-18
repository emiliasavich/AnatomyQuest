import Link from "next/link";

export function DesignHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-aq-blue/20 bg-aq-blue shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg py-1.5 pr-2 text-white transition-opacity hover:opacity-90"
        >
          <span className="font-display text-xl font-semibold tracking-tight">
            AnatomyQuest
          </span>
          <span className="text-sm text-white/80">(vista rediseño)</span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Principal">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Salir al home
          </Link>
        </nav>
      </div>
    </header>
  );
}
