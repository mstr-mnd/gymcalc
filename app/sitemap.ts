import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n";

// One entry per page, with hreflang alternates for both locales.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/privacy", priority: 0.4 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}/en${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: {
        en: `${SITE_URL}/en${path}`,
        ru: `${SITE_URL}/ru${path}`,
      },
    },
  }));
}
