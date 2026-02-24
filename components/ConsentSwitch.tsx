"use client";

import { useState, useEffect } from "react";
import { getConsent, setConsent, type ConsentValue } from "@/lib/consent";

export function ConsentSwitch() {
  const [value, setValue] = useState<ConsentValue>(null);

  useEffect(() => {
    setValue(getConsent());
  }, []);

  useEffect(() => {
    const onConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<"true" | "false">).detail;
      setValue(detail);
    };
    window.addEventListener("cookie-consent-change", onConsentChange);
    return () => window.removeEventListener("cookie-consent-change", onConsentChange);
  }, []);

  const handleConsent = () => {
    setConsent("true");
    setValue("true");
  };

  const handleDoNotConsent = () => {
    setConsent("false");
    setValue("false");
  };

  return (
    <div className="inline-flex rounded-xl border border-aq-primary/15 bg-aq-sage/50 p-1">
      <button
        type="button"
        onClick={handleConsent}
        className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
          value === "true"
            ? "bg-aq-primary text-white"
            : "text-stone-600 hover:bg-white hover:text-stone-900 hover:shadow-sm"
        }`}
      >
        Consent
      </button>
      <button
        type="button"
        onClick={handleDoNotConsent}
        className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
          value === "false"
            ? "bg-stone-700 text-white"
            : "text-stone-600 hover:bg-white hover:text-stone-900 hover:shadow-sm"
        }`}
      >
        Do not Consent
      </button>
    </div>
  );
}
