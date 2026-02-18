"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { DesignSidebar } from "@/components/DesignSidebar";
import type { NavLink } from "@/lib/data";

interface LayoutSwitcherProps {
  children: React.ReactNode;
  nav: NavLink[];
}

export function LayoutSwitcher({ children, nav }: LayoutSwitcherProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div className="flex min-h-0 flex-1 w-full">
        <DesignSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header hideBranding />
          <main className="flex-1 min-w-0 w-full px-4 py-6 sm:px-6 lg:px-8 bg-stone-50/50">
            {children}
          </main>
          <Footer hideContribute={isHome} />
        </div>
      </div>
      <CookieBanner />
    </>
  );
}
