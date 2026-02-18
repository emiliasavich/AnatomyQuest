"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/getting_started", label: "Getting Started", icon: "book" },
  { href: "/bones", label: "Bones", icon: "bones" },
  { href: "/search", label: "Search", icon: "search" },
] as const;

function Icon({ name }: { name: string }) {
  const className = "h-5 w-5 shrink-0";
  if (name === "home")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    );
  if (name === "book")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  if (name === "bones")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  if (name === "search")
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    );
  return null;
}

export function DesignSidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-56 flex-col overflow-hidden border-r border-aq-blue/30 bg-aq-blue md:flex xl:w-64">
        <Link
          href="/"
          className="flex h-16 shrink-0 items-center border-b border-white/10 pl-4 pr-3 font-display text-xl font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
          aria-label="AnatomyQuest – Home"
        >
          AnatomyQuest
        </Link>
        <nav className="flex flex-1 flex-col overflow-y-auto py-5 pl-4 pr-3" aria-label="Main navigation">
          <ul className="space-y-0.5 text-sm">
            {ITEMS.map((item) => {
              const href = item.href.replace(/\/$/, "");
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg py-2.5 pl-3 pr-2 transition-colors ${
                      isActive
                        ? "bg-white/20 text-white font-medium"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon name={item.icon} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <div className="hidden w-56 shrink-0 md:block xl:w-64" aria-hidden />
    </>
  );
}
