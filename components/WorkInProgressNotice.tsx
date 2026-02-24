interface WorkInProgressNoticeProps {
  /** "page" = This page... / "section" = This section... */
  scope?: "page" | "section";
}

export function WorkInProgressNotice({ scope = "page" }: WorkInProgressNoticeProps) {
  const label = scope === "section" ? "This section" : "This page";
  return (
    <div
      className="rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 sm:px-5 sm:py-4"
      role="status"
      aria-live="polite"
    >
      <p className="text-sm font-medium text-amber-900 sm:text-base">
        {label} is being worked on.
      </p>
      <p className="mt-1 text-sm text-amber-800">
        Content may be incomplete, improperly formatted, or inaccurate.
      </p>
    </div>
  );
}
