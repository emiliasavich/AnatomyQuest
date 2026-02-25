import type { Metadata } from "next";
import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";
import { HumerusContent } from "@/components/humerus/HumerusContent";
import {
  getHumerusLandmarks,
  getHumerusNeighbors,
  getHumerusNeighborsBigPicture,
  getHumerusBlood,
  getFourViews,
  getPopupContent,
} from "@/lib/data";

function EditButton({ path }: { path: string }) {
  return (
    <Link
      href={`/contribute/edit?from=${encodeURIComponent(path)}`}
      className="inline-flex items-center gap-2 rounded-lg bg-aq-primary px-4 py-2.5 text-sm font-semibold hover:bg-aq-primary/90 focus:outline-none focus:ring-2 focus:ring-aq-primary focus:ring-offset-2 transition-colors shadow-md hover:shadow-lg"
      style={{ color: "white" }}
      title="Suggest an edit or improvement to this page"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
      Edit
    </Link>
  );
}

export const metadata: Metadata = {
  title: "Humerus — Upper Limb",
  description:
    "Interactive study guide for the humerus — location, shape, neighboring bones, anatomical landmarks, and blood supply of the upper arm bone.",
};

export default function HumerusPage() {
  const landmarks = getHumerusLandmarks();
  const neighbors = getHumerusNeighbors();
  const neighborsBigPicture = getHumerusNeighborsBigPicture();
  const blood = getHumerusBlood();
  const fourViews = getFourViews();
  const popupContent = getPopupContent();

  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Upper Limb", href: "/upper_limb" },
        { label: "Bones", href: "/upper_limb/bones" },
        { label: "Humerus" },
      ]}
    >
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-stone-900">
          Humerus
        </h1>
        <EditButton path="/upper_limb/bones/humerus" />
      </div>
      <HumerusContent
        landmarks={landmarks}
        neighbors={neighbors}
        neighborsBigPicture={neighborsBigPicture}
        blood={blood}
        fourViews={fourViews}
        popupContent={popupContent}
      />
    </ContentLayout>
  );
}
