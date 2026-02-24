import { FeedbackSection } from "./FeedbackSection";
import { WorkInProgressNotice } from "./WorkInProgressNotice";

interface DevelopmentPageWrapperProps {
  children: React.ReactNode;
  /** Show "This page" vs "This section" in the notice */
  scope?: "page" | "section";
}

/**
 * Wrapper for pages (or sections) that are still in development.
 * Renders the work-in-progress notice at the top and a feedback section at the bottom.
 */
export function DevelopmentPageWrapper({ children, scope = "page" }: DevelopmentPageWrapperProps) {
  return (
    <>
      <WorkInProgressNotice scope={scope} />
      <div className="mt-5">{children}</div>
      <div className="mt-10">
        <FeedbackSection />
      </div>
    </>
  );
}
