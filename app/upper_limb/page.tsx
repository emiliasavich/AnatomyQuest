import type { Metadata } from "next";
import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";

export const metadata: Metadata = {
  title: "Upper Limb",
  description:
    "Explore upper limb anatomy — bones of the arm and shoulder with location, landmarks, and clinical context.",
};

export default function UpperLimbPage() {
  return (
    <ContentLayout
      title="Upper Limb"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Upper Limb" }]}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        <li>
          <Link
            href="/upper_limb/bones"
            className="group relative block rounded-xl border border-stone-200/80 bg-white py-4 pl-6 pr-5 transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/40 hover:shadow-sm"
          >
            <span
              className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-aq-primary/50 group-hover:bg-aq-primary"
              aria-hidden
            />
            <h2 className="font-medium text-stone-800 group-hover:text-aq-primary">
              Bones
            </h2>
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}
