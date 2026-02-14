import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";
import { HumerusContent } from "@/components/humerus/HumerusContent";
import {
  getHumerusLandmarks,
  getHumerusNeighbors,
  getHumerusNeighborsBigPicture,
  getHumerusBlood,
  getFourViews,
} from "@/lib/data";

export default function HumerusPage() {
  const landmarks = getHumerusLandmarks();
  const neighbors = getHumerusNeighbors();
  const neighborsBigPicture = getHumerusNeighborsBigPicture();
  const blood = getHumerusBlood();
  const fourViews = getFourViews();

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
      />
    </ContentLayout>
  );
}
