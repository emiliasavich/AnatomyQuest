export const CONSENT_STORAGE_KEY = "cookie-consent";

export type ConsentValue = "true" | "false" | null;

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (v === "true" || v === "false") return v;
  return null;
}

export function setConsent(value: "true" | "false") {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
}
