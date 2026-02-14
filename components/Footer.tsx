import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/privacy_policy", label: "Privacy Policy" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200/80 bg-aq-sage/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm" aria-label="Footer">
            {footerLinks.map(({ href, label }) => (
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
        <p className="mt-4 text-center text-xs text-stone-400 sm:text-left">
          Contributions may become property of the organization.{" "}
          <Link href="/contribute" className="hover:text-aq-primary">Learn more</Link>.
        </p>
      </div>
    </footer>
  );
}
