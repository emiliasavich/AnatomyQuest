import type { Metadata } from "next";
import { ContentLayout } from "@/components/ContentLayout";
import { DevelopmentPageWrapper } from "@/components/DevelopmentPageWrapper";

export const metadata: Metadata = {
  title: "Femur — Entire Body",
  description:
    "Study the femur — the longest and strongest bone in the human body. Location, landmarks, and clinical context.",
};

export default function FemurPage() {
  return (
    <ContentLayout
      title="Femur"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Entire Body", href: "/entire_body" },
        { label: "Bones", href: "/entire_body/bones" },
        { label: "Femur" },
      ]}
    >
      <DevelopmentPageWrapper scope="page">
        <p className="text-stone-700">The femur is the thigh bone — the longest and strongest bone in the human body.</p>
      </DevelopmentPageWrapper>
    </ContentLayout>
  );
}
