import type { Metadata } from "next";
import { DM_Sans, Lora, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import { getNavigation } from "@/lib/data";
import "./globals.css";
import { LayoutSwitcher } from "@/components/LayoutSwitcher";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: site.logo,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = getNavigation();
  return (
    <html lang={site.locale.replace("_", "-")} className={`${dmSans.variable} ${lora.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <LayoutSwitcher nav={nav.pages}>{children}</LayoutSwitcher>
      </body>
    </html>
  );
}
