"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/data";

interface SidebarProps {
  nav: NavLink[];
}

function NavItem({
  item,
  basePath = "",
}: {
  item: NavLink;
  basePath?: string;
}) {
  const pathname = usePathname();
  const href = item.url
    ? item.url.replace(/\.html$/, "").replace(/\/$/, "")
    : undefined;
  const isActive = href && pathname === href;

  if (item.children && item.children.length > 0) {
    return (
      <li className="mt-3 first:mt-0">
        <details className="group" open>
          <summary className="cursor-pointer list-none py-1 text-[11px] font-semibold uppercase tracking-wide text-stone-500 focus:outline-none">
            <span
              className={`transition-colors ${isActive ? "text-stone-900" : "text-stone-500 group-hover:text-stone-700"}`}
            >
              {item.title}
            </span>
          </summary>
          <ul className="mt-1 space-y-0.5 pl-2.5">
            {item.children.map((child, i) => (
              <NavItem key={i} item={child} basePath={href || basePath} />
            ))}
          </ul>
        </details>
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
