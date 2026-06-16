import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { locales, isLocale, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function generateStaticParams() {
  return locales.flatMap((lang) => articles.map((a) => ({ lang, slug: a.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const article = getArticle(slug);
  if (!article) return {};
  const c = article[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        ru: `/ru/blog/${slug}`,
        "x-default": `/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      type: "article",
      url: `${SITE_URL}/${locale}/blog/${slug}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const article = getArticle(slug);
  if (!article) notFound();
  const c = article[locale];
  const b = getDictionary(locale).blog;
  const others = articles.filter((a) => a.slug !== slug);

  const dateLabel = new Date(article.date).toLocaleDateString(
    locale === "ru" ? "ru-RU" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: locale,
    author: { "@type": "Organization", name: "CreatineCalc" },
    publisher: { "@type": "Organization", name: "CreatineCalc" },
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href={`/${locale}/blog`} className="text-sm text-accent hover:underline">
        {b.backToBlog}
      </Link>

      <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight">
        {c.title}
      </h1>
      <p className="mt-2 text-xs text-muted/80">{dateLabel}</p>

      <div className="mt-6">
        {c.body.map((block, i) =>
          "h" in block ? (
            <h2 key={i} className="mt-8 text-xl font-bold tracking-tight">
              {block.h}
            </h2>
          ) : (
            <p key={i} className="mt-4 leading-relaxed text-muted">
              {block.p}
            </p>
          )
        )}
      </div>

      {/* CTA back to the calculator */}
      <div className="mt-10 rounded-2xl border border-border bg-elevated p-6 shadow-sm">
        <h2 className="text-lg font-bold text-text">{b.ctaTitle}</h2>
        <p className="mt-1 text-sm text-muted">{b.ctaNote}</p>
        <Link href={`/${locale}#calculator`} className="btn-accent mt-4 inline-block px-5 py-2 text-sm">
          {b.ctaButton}
        </Link>
      </div>

      {/* Related guides — internal linking */}
      {others.length > 0 && (
        <div className="mt-10 border-t border-border pt-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
            {b.title}
          </h2>
          <ul className="mt-3 space-y-2">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/${locale}/blog/${a.slug}`}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {a[locale].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
