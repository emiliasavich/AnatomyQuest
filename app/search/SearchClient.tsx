"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { SearchEntry } from "./page";

const CATEGORY_LABELS: Record<string, string> = {
  page: "Pages",
  detail: "Anatomy Details",
  landmark: "Bone Landmarks",
  neighbor: "Bone Neighbors",
  blood_supply: "Blood Supply",
  glossary: "Glossary Terms",
};

const CATEGORY_ORDER = ["page", "detail", "landmark", "neighbor", "blood_supply", "glossary"];

interface SearchClientProps {
  initialIndex: SearchEntry[];
}

export function SearchClient({ initialIndex }: SearchClientProps) {
  const [query, setQuery] = useState("");

  const { grouped, total } = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { grouped: {}, total: 0 };

    const words = q.split(/\s+/);
    const filtered = initialIndex.filter((entry) => {
      const text = [entry.title, entry.snippet, entry.context || ""]
        .join(" ")
        .toLowerCase();
      return words.every((w) => text.includes(w));
    });

    const grouped: Record<string, SearchEntry[]> = {};
    for (const entry of filtered) {
      if (!grouped[entry.category]) grouped[entry.category] = [];
      grouped[entry.category].push(entry);
    }

    return { grouped, total: filtered.length };
  }, [query, initialIndex]);

  return (
    <div>
      {/* Search Input */}
      <div className="relative mb-8">
        <svg
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anatomy terms, bones, landmarks..."
          aria-label="Search site content"
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 pl-10 text-stone-800 placeholder:text-stone-400 transition-all duration-200 focus:border-aq-primary/40 focus:outline-none focus:ring-2 focus:ring-aq-primary/20"
          autoFocus
        />
      </div>

      {/* Empty state — no query */}
      {!query.trim() && (
        <p className="text-sm text-stone-500">
          Type a keyword to search across all anatomy content — pages, bone
          landmarks, glossary terms, and more.
        </p>
      )}

      {/* No results */}
      {query.trim() && total === 0 && (
        <p className="text-sm text-stone-500">
          No results found for &ldquo;<strong className="text-stone-700">{query}</strong>&rdquo;.
          Try a different term.
        </p>
      )}

      {/* Result count */}
      {query.trim() && total > 0 && (
        <p className="mb-6 text-sm text-stone-500" role="status">
          {total} {total === 1 ? "result" : "results"} for &ldquo;
          <strong className="text-stone-700">{query}</strong>&rdquo;
        </p>
      )}

      {/* Grouped results */}
      {CATEGORY_ORDER.map((cat) => {
        const items = grouped[cat];
        if (!items || items.length === 0) return null;
        return (
          <section key={cat} className="mb-8">
            <h2 className="mb-3 font-serif text-lg font-semibold tracking-tight text-stone-800">
              {CATEGORY_LABELS[cat]}{" "}
              <span className="text-sm font-normal text-stone-400">
                ({items.length})
              </span>
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {items.map((entry, i) => {
                const inner = (
                  <>
                    <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-aq-primary/40 group-hover:bg-aq-primary" aria-hidden />
                    <span className="font-medium text-stone-800 group-hover:text-aq-primary">
                      {entry.title}
                    </span>
                    {entry.context && (
                      <span className="ml-2 text-xs text-stone-400">
                        {entry.context}
                      </span>
                    )}
                    {entry.snippet && (
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-stone-500">
                        {entry.snippet}
                      </p>
                    )}
                  </>
                );

                return (
                  <li key={`${cat}-${i}`}>
                    {entry.href ? (
                      <Link
                        href={entry.href}
                        className="group relative block rounded-xl border border-stone-200/80 bg-white p-4 pl-5 transition-all duration-200 hover:border-aq-primary/30 hover:bg-aq-sage/40 hover:shadow-sm"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div className="group relative block rounded-xl border border-stone-200/80 bg-white p-4 pl-5">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
