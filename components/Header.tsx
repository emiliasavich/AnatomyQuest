import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/getting_started", label: "Dictionary" },
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/privacy_policy", label: "Privacy Policy" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-stone-100"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md">
            <Image
              src={site.logo}
              alt=""
              width={24}
              height={24}
              className="object-contain"
              aria-hidden
            />
          </span>
          <span className="font-serif text-base font-semibold tracking-tight text-stone-900 sm:text-lg">
            {site.title}
          </span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-2.5 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 sm:text-sm"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/search"
            className="ml-2 flex items-center gap-1.5 rounded-lg border border-stone-200 px-2 py-1 text-stone-400 transition-colors hover:border-stone-300 hover:text-stone-600"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline w-16" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
