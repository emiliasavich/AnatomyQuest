"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/privacy_policy", label: "Privacy Policy" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
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
        <div className="flex items-center gap-1 ml-auto">
          <nav className="hidden items-center gap-0.5 sm:gap-1 lg:flex" aria-label="Main">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-1.5 py-1 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 sm:px-2.5 sm:py-1.5 sm:text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/search"
            className="ml-1 flex items-center gap-1.5 rounded-lg border border-stone-200 px-1.5 py-1 text-stone-400 transition-colors hover:border-stone-300 hover:text-stone-600 sm:ml-2 sm:px-2"
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
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-stone-900/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-stone-50 shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex h-14 items-center justify-end px-4 border-b border-stone-200">
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center h-9 w-9 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-0" aria-label="Mobile">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100 hover:text-stone-900 border-b border-stone-100"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
