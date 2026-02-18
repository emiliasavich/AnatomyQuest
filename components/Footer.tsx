import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/privacy_policy", label: "Privacy Policy" },
] as const;

interface FooterProps {
  /** En home no se muestra el enlace Contribute (ya está en las cards) */
  hideContribute?: boolean;
}

export function Footer({ hideContribute }: FooterProps) {
  const links = hideContribute ? footerLinks.filter((l) => l.href !== "/contribute") : footerLinks;
  return (
    <footer className="mt-auto border-t border-stone-200/80 bg-aq-sage/40">
      <div className="box-border w-full px-4 py-6 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:justify-start"
            aria-label="Footer"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-medium text-stone-600 transition-colors hover:text-aq-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-center text-sm text-stone-500 sm:text-right">
            © 2026{" "}
            <Link
              href={site.copyrightUrl}
              target="_blank"
              rel="license noopener"
              className="font-medium transition-colors hover:text-aq-primary"
            >
              CC BY-SA 4.0
            </Link>
            {" "}– {site.title}
          </p>
        </div>
        <p className="mt-4 border-t border-stone-200/60 pt-4 text-center text-xs text-stone-400 sm:text-left">
          Contributions may become property of the organization.{" "}
          <Link href="/contribute" className="hover:text-aq-primary">Learn more</Link>.
        </p>
      </div>
    </footer>
  );
}
