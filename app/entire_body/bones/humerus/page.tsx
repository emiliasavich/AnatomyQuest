import type { Metadata } from "next";
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
  title: "Humerus — Entire Body",
  description:
    "Interactive study guide for the humerus in full-body context — location, shape, neighboring bones, anatomical landmarks, and blood supply.",
};

export default function EntireBodyHumerusPage() {
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
        { label: "Entire Body", href: "/entire_body" },
        { label: "Bones", href: "/entire_body/bones" },
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
