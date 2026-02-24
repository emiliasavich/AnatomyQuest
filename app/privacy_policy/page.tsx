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
      <p className="text-stone-600 mb-8 leading-relaxed">
        We use Vercel Web Analytics on this website to collect anonymized
        insights about visitor engagement and help improve the performance and
        usability of our content.
      </p>

      <div className="space-y-8">
        {/* How Vercel Analytics helps us */}
        <section>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            How Vercel Analytics helps us
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            Vercel Analytics provides aggregated statistics that help us
            understand which content is most useful to visitors and optimize
            navigation and performance. This includes:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              {
                title: "Page views",
                description:
                  "Which pages visitors view most frequently, helping us prioritize content improvements.",
              },
              {
                title: "Referring sources",
                description:
                  "How visitors find our site, so we can better reach students who need anatomy resources.",
              },
              {
                title: "Browser and device types",
                description:
                  "What devices and browsers visitors use, so we can ensure the site works well for everyone.",
              },
              {
                title: "Traffic trends",
                description:
                  "Overall visitor patterns over time, helping us measure the impact of content updates.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="relative overflow-hidden rounded-xl border border-stone-200/80 bg-aq-sage/30 px-5 py-4 pl-7 sm:px-6 sm:pl-8"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-aq-primary/40"
                  aria-hidden
                />
                <p className="font-medium text-stone-900">{item.title}</p>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Data collection */}
        <section className="rounded-2xl border border-stone-200/80 bg-aq-sage/30 px-6 py-5 sm:px-8">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Data collection
          </h2>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Vercel Analytics is built with privacy in mind and collects only
            minimal, anonymous data. Specifically:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600 leading-relaxed">
            <li className="flex gap-2">
              <span
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">
                  No personal identifiers.
                </strong>{" "}
                It does not store information that could identify you or track
                you across websites.
              </span>
            </li>
            <li className="flex gap-2">
              <span
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">No cookies.</strong> Vercel
                Analytics does not set cookies for analytics purposes.
              </span>
            </li>
            <li className="flex gap-2">
              <span
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">
                  Aggregated data only.
                </strong>{" "}
                All collected data is used in aggregated form to analyze website
                usage patterns and improve user experience.
              </span>
            </li>
            <li className="flex gap-2">
              <span
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-aq-primary/60"
                aria-hidden
              />
              <span>
                <strong className="text-stone-800">
                  No cross-site tracking.
                </strong>{" "}
                No individual user behavior is stored in a way that can identify
                or track you across different sites or sessions.
              </span>
            </li>
          </ul>
        </section>

        {/* Contributor privacy */}
        <section className="rounded-2xl border border-aq-teal/20 bg-aq-sage/40 px-6 py-5">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Contributor privacy
          </h2>
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            When our contribution system launches, this policy will be updated to
            detail how contributor data is handled. Following a Wikipedia-style
            model, we anticipate that contributions will be publicly attributed
            to your chosen display name, while personal information such as your
            email address will remain private and never be shared with third
            parties. Account registration will require only a display name, and
            providing additional personal information will be optional.
          </p>
        </section>

        {/* More information */}
        <section>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            More information
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            For further details about Vercel&#39;s approach to analytics and
            privacy, visit the{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Analytics Privacy Documentation
            </a>
            .
          </p>
        </section>
      </div>
    </ContentLayout>
  );
}
