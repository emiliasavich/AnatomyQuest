import { FeedbackSection } from "./FeedbackSection";
import { WorkInProgressNotice } from "./WorkInProgressNotice";

interface DevelopmentPageWrapperProps {
  children: React.ReactNode;
  /** Show "This page" vs "This section" in the notice */
  scope?: "page" | "section";
  /** Optional topic for the feedback email subject (e.g. "Femur"). */
  subjectTopic?: string;
}

/**
 * Wrapper for pages (or sections) that are still in development.
 * Renders the work-in-progress notice at the top and a feedback section at the bottom.
 */
export function DevelopmentPageWrapper({
  children,
  scope = "page",
  subjectTopic,
}: DevelopmentPageWrapperProps) {
  return (
    <>
      <WorkInProgressNotice scope={scope} />
      <div className="mt-5">{children}</div>
      <div className="mt-10">
        <FeedbackSection subjectTopic={subjectTopic} />
      </div>
    </>
  );
}
