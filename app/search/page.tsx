import { ContentLayout } from "@/components/ContentLayout";
import {
  getNavigation,
  getHumerusLandmarks,
  getHumerusNeighbors,
  getHumerusBlood,
  getPopupContent,
  getDetails,
} from "@/lib/data";
import { SearchClient } from "./SearchClient";

export interface SearchEntry {
  title: string;
  snippet: string;
  category: "page" | "landmark" | "glossary" | "blood_supply" | "neighbor" | "detail";
  href: string;
  context?: string;
}

function stripHtml(html: unknown): string {
  if (typeof html !== "string") return "";
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function humanize(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function normalizeUrl(url: string): string {
  return url.replace(/\.html$/, "").replace(/\/$/, "") || "/";
}

function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // 1. Pages from navigation
  const nav = getNavigation();
  function walkNav(
    items: { title: string; url?: string; children?: typeof items }[],
    parentContext = "",
  ) {
    for (const item of items) {
      if (item.url) {
        entries.push({
          title: item.title,
          snippet: "",
          category: "page",
          href: normalizeUrl(item.url),
          context: parentContext || undefined,
        });
      }
      if (item.children) {
        walkNav(item.children, item.title);
      }
    }
  }
  walkNav(nav.pages);

  // 2. Humerus landmarks
  const landmarks = getHumerusLandmarks() as {
    big_picture_name: string;
    elements?: { name: string; description?: unknown[] }[];
  }[];
  for (const group of landmarks) {
    for (const el of group.elements || []) {
      const desc = Array.isArray(el.description) ? el.description : [];
      const descParts = desc.map((d) => stripHtml(d));
      entries.push({
        title: stripHtml(el.name),
        snippet: descParts.join(" ").slice(0, 200),
        category: "landmark",
        href: "/upper_limb/bones/humerus",
        context: `Humerus — ${group.big_picture_name}`,
      });
    }
  }

  // 3. Humerus neighbors
  const neighbors = getHumerusNeighbors() as {
    big_picture_name: string;
    elements?: { name: string; subtitle?: string; description?: unknown }[];
  }[];
  for (const group of neighbors) {
    for (const el of group.elements || []) {
      entries.push({
        title: stripHtml(el.name),
        snippet: stripHtml(el.description).slice(0, 200),
        category: "neighbor",
        href: "/upper_limb/bones/humerus",
        context: `Humerus — Neighbors (${group.big_picture_name})`,
      });
    }
  }

  // 4. Humerus blood supply
  const blood = getHumerusBlood() as {
    big_picture_name: string;
    elements?: { name: string; description?: unknown[] }[];
  }[];
  for (const group of blood) {
    for (const el of group.elements || []) {
      const desc = Array.isArray(el.description) ? el.description : [];
      const descParts = desc.map((d) => stripHtml(d));
      entries.push({
        title: stripHtml(el.name),
        snippet: descParts.join(" ").slice(0, 200),
        category: "blood_supply",
        href: "/upper_limb/bones/humerus",
        context: `Humerus — Blood Supply (${group.big_picture_name})`,
      });
    }
  }

  // 5. Glossary / popup terms
  const popup = getPopupContent();
  for (const [key, value] of Object.entries(popup)) {
    const plainText = stripHtml(value.text || "");
    const isUnfinished = plainText.toUpperCase().startsWith("UNFINISHED");
    entries.push({
      title: humanize(key),
      snippet: isUnfinished
        ? "This term is being reviewed and will be updated with a full definition."
        : plainText.slice(0, 200),
      category: "glossary",
      href: value.url || "",
      context: "Glossary",
    });
  }

  // 6. Detail pages (muscles, neurons, organs, lymph nodes)
  const detailSources = [
    { category: "muscles", slug: "biceps_brachii", label: "Biceps Brachii", href: "/muscular_system/muscles/biceps_brachii" },
    { category: "neurons", slug: "motor_neuron", label: "Motor Neuron", href: "/nervous_system/neurons/motor_neuron" },
    { category: "organs", slug: "stomach", label: "Stomach", href: "/digestive_system/organs/stomach" },
    { category: "lymph_nodes", slug: "axillary", label: "Axillary Lymph Nodes", href: "/lymphatic_system/lymph_nodes/axillary_lymph_nodes" },
  ] as const;

  for (const src of detailSources) {
    const sections = getDetails(src.category, src.slug);
    for (const section of sections) {
      for (const item of section.items) {
        const desc = Array.isArray(item.description) ? item.description : [];
        entries.push({
          title: item.name,
          snippet: desc.join(" ").slice(0, 200),
          category: "detail",
          href: src.href,
          context: `${src.label} — ${section.section}`,
        });
      }
    }
  }

  return entries;
}

export default function SearchPage() {
  const index = buildSearchIndex();

  return (
    <ContentLayout
      title="Search"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
    >
      <SearchClient initialIndex={index} />
    </ContentLayout>
  );
}
