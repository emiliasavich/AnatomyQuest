import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contribute",
    "/privacy_policy",
    "/getting_started",
    "/getting_started/effective_learning_methods",
    "/getting_started/effective_learning_methods/learning_bones",
    "/upper_limb",
    "/upper_limb/bones",
    "/upper_limb/bones/humerus",
    "/entire_body",
    "/entire_body/bones",
    "/entire_body/bones/humerus",
    "/entire_body/bones/femur",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.replace(/^\//, "")}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/bones/") ? 0.8 : 0.6,
  }));
}
