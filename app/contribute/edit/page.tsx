"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";

export default function ContributeEditPage() {
  const [content, setContent] = useState(
    "Edit the page content here. Format your text using the toolbar above.",
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [displayName, setDisplayName] = useState("");
  const [contributionType, setContributionType] = useState("improve");
  const [sources, setSources] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const insertMarkdown = (before: string, after: string = "") => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const newContent =
      content.substring(0, start) +
      before +
      selectedText +
      after +
      content.substring(end);

    setContent(newContent);

    // Reset cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + selectedText.length,
      );
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName || !content.trim()) {
      alert("Please fill in Display Name and content");
      return;
    }

    const subject = encodeURIComponent(
      "AnatomyQuest – Contribution: How to Effectively Study Bones",
    );
    const body = encodeURIComponent(
      `Display Name: ${displayName}\n\nType of Contribution: ${contributionType}\n\nContent:\n${content}\n\nSources:\n${sources}\n\nPage: How to Effectively Study Bones\nURL: /getting_started/effective_learning_methods/learning_bones`,
    );
    window.location.href = `mailto:contact@anatomyquest.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <ContentLayout
      title="Contribute to AnatomyQuest"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contribute", href: "/contribute" },
        { label: "Edit Page" },
      ]}
    >
      <div className="space-y-6">
        {/* Back Link */}
        <Link
          href="/getting_started/effective_learning_methods/learning_bones"
          className="inline-flex items-center gap-2 text-sm text-aq-primary hover:underline"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to page
        </Link>

        {/* Contributor Info */}
        <div className="rounded-xl border border-stone-200/80 bg-white p-6">
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">
              Display Name
            </span>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your name or username"
              className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-aq-primary focus:outline-none focus:ring-2 focus:ring-aq-primary focus:ring-offset-2"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-stone-900">
              Type of Contribution
            </span>
            <select
              value={contributionType}
              onChange={(e) => setContributionType(e.target.value)}
              className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-aq-primary focus:outline-none focus:ring-2 focus:ring-aq-primary focus:ring-offset-2"
            >
              <option value="improve">Improve explanation</option>
              <option value="fix">Fix error</option>
              <option value="add">Add new content</option>
              <option value="suggest">Suggest image/diagram</option>
            </select>
          </label>
        </div>

        {/* Editor */}
        <div className="rounded-xl border border-stone-200/80 bg-white overflow-hidden">
          {/* Toolbar */}
          <div className="flex flex-wrap gap-1 border-b border-stone-200/80 bg-stone-50/50 p-3">
            <button
              type="button"
              onClick={() => insertMarkdown("**", "**")}
              className="rounded px-3 py-1.5 text-sm font-semibold hover:bg-stone-200/50 transition-colors"
              title="Bold"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("*", "*")}
              className="rounded px-3 py-1.5 text-sm italic hover:bg-stone-200/50 transition-colors"
              title="Italic"
            >
              I
            </button>
            <div className="w-px bg-stone-200" />
            <button
              type="button"
              onClick={() => insertMarkdown("- ")}
              className="rounded px-3 py-1.5 text-sm hover:bg-stone-200/50 transition-colors"
              title="Bullet list"
            >
              •
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("1. ")}
              className="rounded px-3 py-1.5 text-sm hover:bg-stone-200/50 transition-colors"
              title="Numbered list"
            >
              1.
            </button>
            <div className="w-px bg-stone-200" />
            <button
              type="button"
              onClick={() => insertMarkdown("[", "](url)")}
              className="rounded px-3 py-1.5 text-sm hover:bg-stone-200/50 transition-colors"
              title="Link"
            >
              🔗
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("# ", "")}
              className="rounded px-3 py-1.5 text-sm font-bold hover:bg-stone-200/50 transition-colors"
              title="Heading"
            >
              H
            </button>
          </div>

          {/* Content Editor */}
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-80 p-4 text-sm text-stone-700 font-mono focus:outline-none resize-none"
            placeholder="Enter your contribution here..."
          />
        </div>

        {/* Sources */}
        <div className="rounded-xl border border-stone-200/80 bg-white p-6">
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">
              Sources & References
            </span>
            <p className="text-xs text-stone-500 mt-1">
              List the textbooks, articles, or websites you used. This helps us
              verify accuracy.
            </p>
            <textarea
              value={sources}
              onChange={(e) => setSources(e.target.value)}
              placeholder="Example: Gray's Anatomy (2020), Teach Me Anatomy"
              className="mt-2 w-full h-20 rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-aq-primary focus:outline-none focus:ring-2 focus:ring-aq-primary focus:ring-offset-2 resize-none font-mono"
            />
          </label>
        </div>

        {/* Preview Notice */}
        <div className="rounded-xl border border-aq-sage/30 bg-aq-sage/20 p-4">
          <p className="text-sm text-stone-700">
            <strong>Note:</strong> Your contribution will be sent to our review
            team via email. You'll be able to preview it before submitting.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <Link
            href="/getting_started/effective_learning_methods/learning_bones"
            className="px-4 py-2.5 text-sm font-medium text-stone-700 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            disabled={submitted}
            className="px-4 py-2.5 text-sm font-medium text-white bg-aq-primary rounded-lg hover:bg-aq-primary/90 focus:outline-none focus:ring-2 focus:ring-aq-primary focus:ring-offset-2 transition-colors disabled:opacity-50"
          >
            {submitted ? "Submitted!" : "Submit Contribution"}
          </button>
        </div>

        {submitted && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-green-800">
              ✓ Your contribution has been sent! Check your email to complete
              the submission.
            </p>
          </div>
        )}
      </div>
    </ContentLayout>
  );
}
