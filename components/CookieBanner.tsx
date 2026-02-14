"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CONSENT_STORAGE_KEY, setConsent } from "@/lib/consent";

export function CookieBanner() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem(CONSENT_STORAGE_KEY);
    setHidden(!!stored);
  }, []);

  useEffect(() => {
    const onConsentChange = () => setHidden(true);
    window.addEventListener("cookie-consent-change", onConsentChange);
    return () => window.removeEventListener("cookie-consent-change", onConsentChange);
  }, []);

  const accept = () => {
    setConsent("true");
    setHidden(true);
  };

  const decline = () => {
    setConsent("false");
    setHidden(true);
  };

  if (hidden) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl border border-b-0 border-aq-primary/15 bg-aq-sage/80 p-4 shadow-[0_-4px_20px_rgba(45,80,22,0.08)]"
    >
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-stone-600">
          With your consent, we use analytics tools to understand how you use
          this site and improve your experience. Read our{" "}
          <Link href="/privacy_policy" className="text-aq-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-aq-primary px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Consent
          </button>
          <button
            type="button"
            onClick={decline}
            className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
