"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <p className="mt-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
        Thanks for your feedback! We&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-3">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-stone-800 shadow-sm focus:border-aq-primary focus:outline-none focus:ring-1 focus:ring-aq-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-stone-800 shadow-sm focus:border-aq-primary focus:outline-none focus:ring-1 focus:ring-aq-primary"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-stone-800 shadow-sm focus:border-aq-primary focus:outline-none focus:ring-1 focus:ring-aq-primary"
          placeholder="Share your thoughts..."
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-aq-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-aq-primary/90 focus:outline-none focus:ring-2 focus:ring-aq-primary focus:ring-offset-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Feedback"}
      </button>
    </form>
  );
}
