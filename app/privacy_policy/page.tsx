import type { Metadata } from "next";
import { ContentLayout } from "@/components/ContentLayout";
import { ConsentSwitch } from "@/components/ConsentSwitch";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AnatomyQuest uses Vercel Web Analytics to collect anonymized visitor data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <ContentLayout
      title="Privacy Policy"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
    >
      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl mt-4">Purpose of use</h2>
      <p>
        We use Vercel Web Analytics on this website to collect anonymized insights about visitor
        engagement and help improve the performance and usability of our content.
      </p>

      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl mt-6">How Vercel Analytics helps us</h2>
      <p>
        Vercel Analytics provides aggregated statistics such as page views, referring sources,
        browser and device types, and overall traffic trends. This helps us understand which
        content is most useful to visitors and optimize navigation and performance.
      </p>

      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl mt-6">Data collection</h2>
      <p>
        Vercel Analytics is built with privacy in mind and collects only minimal, anonymous data.
        It does not store personal identifiers that could identify you or track you across
        websites, and does not set cookies for analytics purposes.
      </p>

      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl mt-6">Use of collected data</h2>
      <p>
        All collected data is used in aggregated form to analyze website usage patterns
        and improve user experience. No individual user behavior is stored in a way that
        can identify or track you across different sites or sessions.
      </p>

      <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl mt-6">More information</h2>
      <p>
        For further details about Vercel’s approach to analytics and privacy, visit the{" "}
        <a
          href="https://vercel.com/docs/analytics/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Analytics Privacy Documentation
        </a>
        .
      </p>
    </ContentLayout>
  );
}
