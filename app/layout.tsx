import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/site";
import { getNavigation } from "@/lib/data";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Sidebar } from "@/components/Sidebar";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

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
    <html lang={site.locale.replace("_", "-")} className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <div className="flex flex-1 w-full">
          <Sidebar nav={nav.pages} />
          <main className="flex-1 min-w-0 w-full px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
        <Footer />
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
