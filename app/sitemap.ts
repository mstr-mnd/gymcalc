import type { MetadataRoute } from "next";
import { SITE_URL, locales } from "@/lib/i18n";
import { articles } from "@/lib/articles";

// Localized static pages (path without the locale prefix). Add new pages here.
const PAGES = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.6 },
  { path: "/blog", priority: 0.7 },
  { path: "/widget", priority: 0.3 },
  { path: "/privacy", priority: 0.3 },
];

// One entry per locale per page, each with hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const addLocalized = (path: string, priority: number) => {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority,
        alternates: {
          languages: {
            en: `${SITE_URL}/en${path}`,
            ru: `${SITE_URL}/ru${path}`,
          },
        },
      });
    }
  };

  for (const { path, priority } of PAGES) addLocalized(path, priority);
  for (const a of articles) addLocalized(`/blog/${a.slug}`, 0.5);

  return entries;
}
