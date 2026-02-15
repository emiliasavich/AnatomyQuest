"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/data";

interface SidebarProps {
  nav: NavLink[];
}

function NavItem({ item, basePath = "" }: { item: NavLink; basePath?: string }) {
  const pathname = usePathname();
  const href = item.url ? item.url.replace(/\.html$/, "").replace(/\/$/, "") : undefined;
  const isActive = href && pathname === href;

  if (item.children && item.children.length > 0) {
    return (
      <li className="mt-0.5">
        <details className="group" open>
          <summary className="cursor-pointer list-none py-1.5 font-medium text-stone-700 hover:text-aq-primary focus:outline-none">
            {item.url ? (
              <Link href={href!} className={isActive ? "text-aq-primary" : ""}>
                {item.title}
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
          </summary>
          <ul className="ml-3 mt-0.5 space-y-0.5 border-l border-stone-200 pl-3">
            {item.children.map((child, i) => (
              <NavItem key={i} item={child} basePath={href || basePath} />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  if (!href) return <li><span className="block py-1.5 text-stone-600 text-sm">{item.title}</span></li>;

  return (
    <li>
      <Link
        href={href}
        className={`block py-1.5 text-sm transition-colors duration-200 ${isActive ? "font-medium text-aq-primary" : "text-stone-600 hover:text-aq-primary"}`}
      >
        {item.title}
      </Link>
    </li>
  );
}

export function Sidebar({ nav }: SidebarProps) {
  return (
    <>
      <aside className="fixed left-0 top-16 bottom-0 z-10 hidden w-56 border-r border-aq-primary/10 bg-aq-sage/40 lg:block xl:w-64">
        <nav className="py-5 pl-5 pr-4 overflow-y-auto h-full">
          <ul className="space-y-0.5 text-sm">
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
