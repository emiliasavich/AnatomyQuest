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
      title="Humerus"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Upper Limb", href: "/upper_limb" },
        { label: "Bones", href: "/upper_limb/bones" },
        { label: "Humerus" },
      ]}
    >
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
