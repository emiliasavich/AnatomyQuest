"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavLink } from "@/lib/data";

interface SidebarProps {
  nav: NavLink[];
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function NavItem({
  item,
  basePath = "",
}: {
  item: NavLink;
  basePath?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const href = item.url
    ? item.url.replace(/\.html$/, "").replace(/\/$/, "")
    : undefined;
  const isActive = href && pathname === href;

  if (item.children && item.children.length > 0) {
    return (
      <li className="mt-3 first:mt-0">
        <div className="flex items-center gap-1 py-1">
          {href ? (
            <Link
              href={href}
              className={`text-[11px] font-semibold uppercase tracking-wide transition-colors ${isActive ? "text-stone-900" : "text-stone-500 hover:text-stone-700"}`}
            >
              {item.title}
            </Link>
          ) : (
            <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
              {item.title}
            </span>
          )}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded p-0.5 text-stone-400 transition-colors hover:bg-stone-200 hover:text-stone-600"
            aria-label={open ? `Collapse ${item.title}` : `Expand ${item.title}`}
          >
            <ChevronIcon open={open} />
          </button>
        </div>
        {open && (
          <ul className="mt-1 space-y-0.5 pl-2.5">
            {item.children.map((child, i) => (
              <NavItem key={i} item={child} basePath={href || basePath} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (!href) {
    return (
      <li>
        <span className="block rounded-md px-2 py-1 text-[13px] text-stone-500">
          {item.title}
        </span>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={`block border-l-2 py-1 pl-2 pr-2 text-[13px] leading-5 transition-colors ${isActive ? "border-stone-900 font-semibold text-stone-900" : "border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-800"}`}
      >
        {item.title}
      </Link>
    </li>
  );
}

export function Sidebar({ nav }: SidebarProps) {
  const pathname = usePathname();

  // Hide sidebar on the landing page so it can be full-width
  if (pathname === "/") return null;

  return (
    <>
      <aside className="fixed bottom-0 left-0 top-14 z-10 hidden w-56 border-r border-stone-200 bg-stone-50 lg:block xl:w-64">
        <nav className="h-full overflow-y-auto px-4 py-5">
          <ul className="space-y-0.5">
            {nav.map((item, i) => (
              <NavItem key={i} item={item} />
            ))}
          </ul>
        </nav>
      </aside>
      <div className="hidden w-56 shrink-0 lg:block xl:w-64" aria-hidden />
    </>
  );
}
