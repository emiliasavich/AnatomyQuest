import { ContentLayout } from "@/components/ContentLayout";

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
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-6">
        <p className="font-medium text-amber-800">This page is being worked on.</p>
        <p className="text-sm text-amber-700 mt-1">Content may be incomplete or coming soon.</p>
      </div>
      <p>The femur is the thigh bone — the longest and strongest bone in the human body.</p>
    </ContentLayout>
  );
}
