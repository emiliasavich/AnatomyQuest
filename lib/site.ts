export const site = {
  locale: "en-US",
  logo: "/assets/images/WebsiteAvatar.png",
  title: "AnatomyQuest",
  subtitle: "",
  email: "emiliasavich@gmail.com",
  name: "Emilia Savich",
  description:
    "An anatomy site that makes learning interactive.",
  url: "https://anatomyquest.org/",
  copyright: "CC BY-SA 4.0 – AnatomyQuest",
  copyrightUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
} as const;

export type SiteConfig = typeof site;
