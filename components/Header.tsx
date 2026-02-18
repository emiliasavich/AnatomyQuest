import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/privacy_policy", label: "Privacy Policy" },
] as const;

interface HeaderProps {
  /** En home no se muestra logo ni título (están en el sidebar) y la barra queda por debajo del sidebar */
  hideBranding?: boolean;
}

export function Header({ hideBranding }: HeaderProps) {
  return (
    <header
      className={`sticky top-0 border-b border-stone-200/80 bg-white/90 shadow-[0_1px_0_0_rgba(45,80,22,0.06)] backdrop-blur-md ${hideBranding ? "z-40" : "z-50"}`}
    >
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {!hideBranding && (
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg py-1.5 pr-2 transition-colors hover:bg-aq-sage/60"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={site.logo}
                alt=""
                width={32}
                height={32}
                className="object-contain"
                aria-hidden
              />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight text-stone-900">
              {site.title}
            </span>
          </Link>
        )}
        <nav className={`flex items-center gap-1 ${hideBranding ? "ml-auto" : ""}`} aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-aq-sage/50 hover:text-aq-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
