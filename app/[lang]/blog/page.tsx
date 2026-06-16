import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { isLocale, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const b = getDictionary(locale).blog;
  return {
    metadataBase: new URL(SITE_URL),
    title: b.metaTitle,
    description: b.metaDescription,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { en: "/en/blog", ru: "/ru/blog", "x-default": "/en/blog" },
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const b = getDictionary(locale).blog;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">{b.title}</h1>
      <p className="mt-3 text-muted">{b.intro}</p>

      <div className="mt-8 space-y-4">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/${locale}/blog/${a.slug}`}
            className="block rounded-2xl border border-border bg-elevated p-6 shadow-sm transition-colors hover:bg-elevated-hover"
          >
            <h2 className="text-lg font-bold text-text">{a[locale].title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {a[locale].description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
