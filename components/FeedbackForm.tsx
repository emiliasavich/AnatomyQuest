"use client";

import { useState } from "react";

export function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("AnatomyQuest – Anonymous feedback");
    const body = encodeURIComponent(feedback.trim() || "(No message)");
    window.location.href = `mailto:emiliasavich@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <label htmlFor="feedback-text" className="block text-sm font-medium text-stone-700">
        Your feedback:
      </label>
      <textarea
        id="feedback-text"
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-stone-800 shadow-sm focus:border-aq-primary focus:outline-none focus:ring-1 focus:ring-aq-primary"
        placeholder="Share your thoughts..."
      />
      <button
        type="submit"
        className="mt-3 rounded-lg bg-aq-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-aq-primary/90 focus:outline-none focus:ring-2 focus:ring-aq-primary focus:ring-offset-2"
      >
        Send Feedback
      </button>
    </form>
  );
}
