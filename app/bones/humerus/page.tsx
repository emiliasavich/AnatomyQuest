import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HumerusContent } from "@/components/humerus/HumerusContent";
import {
  getHumerusLandmarks,
  getHumerusNeighbors,
  getHumerusNeighborsBigPicture,
  getHumerusBlood,
  getFourViews,
  getPopupContent,
} from "@/lib/data";

export default function HumerusPage() {
  const landmarks = getHumerusLandmarks();
  const neighbors = getHumerusNeighbors();
  const neighborsBigPicture = getHumerusNeighborsBigPicture();
  const blood = getHumerusBlood();
  const fourViews = getFourViews();
  const popupContent = getPopupContent();

  return (
    <div className="min-w-0 space-y-8 font-display">
      <article className="rounded-2xl border-2 border-aq-blue/20 bg-white px-6 py-6 shadow-lg sm:px-8 sm:py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Bones", href: "/bones" },
            { label: "Humerus" },
          ]}
        />
        <h1 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl mb-6">
          Humerus
        </h1>
        <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:tracking-tight">
          <HumerusContent
            landmarks={landmarks}
            neighbors={neighbors}
            neighborsBigPicture={neighborsBigPicture}
            blood={blood}
            fourViews={fourViews}
            popupContent={popupContent}
          />
        </div>
      </article>
    </div>
  );
}
