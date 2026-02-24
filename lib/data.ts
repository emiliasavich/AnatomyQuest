import fs from "fs";
import path from "path";
import yaml from "yaml";

const DATA_DIR = path.join(process.cwd(), "_data");

function loadYaml<T>(filename: string): T {
  const filePath = path.join(DATA_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return yaml.parse(raw) as T;
}

export interface NavLink {
  title: string;
  url?: string;
  children?: NavLink[];
}

export interface NavigationData {
  main: { title: string; url: string }[];
  pages: NavLink[];
}

export function getNavigation(): NavigationData {
  return loadYaml<NavigationData>("navigation.yml");
}

export function getFourViews(): Record<string, string[]> {
  return loadYaml("four_views.yml");
}

export function getHumerusLandmarks() {
  return loadYaml(path.join("bones", "humerus", "landmarks.yml"));
}

export function getHumerusNeighbors() {
  return loadYaml(path.join("bones", "humerus", "neighbors.yml"));
}

export function getHumerusNeighborsBigPicture() {
  return loadYaml(path.join("bones", "humerus", "neighbors_big_picture.yml"));
}

export function getHumerusBlood() {
  return loadYaml(path.join("bones", "humerus", "blood.yml"));
}

export function getPopupContent(): Record<string, { text: string; url?: string }> {
  return loadYaml("popup_content.yml");
}

export interface DetailItem {
  name: string;
  description: string[];
}

export interface DetailSection {
  section: string;
  items: DetailItem[];
}

export function getDetails(category: string, slug: string): DetailSection[] {
  return loadYaml<DetailSection[]>(path.join(category, slug, "details.yml"));
}
