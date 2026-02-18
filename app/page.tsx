import {
  MissionSection,
  OrganizationSection,
  LearningModulesSection,
} from "@/components/home/design1";

export default function HomePage() {
  return (
    <div className="space-y-8 font-display">
      <MissionSection />
      <OrganizationSection />
      <LearningModulesSection />
    </div>
  );
}
