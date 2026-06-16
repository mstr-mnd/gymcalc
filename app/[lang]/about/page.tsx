import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// TODO: replace with your real contact email before publishing.
const EMAIL = "[your-email@example.com]";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const a = getDictionary(locale).aboutPage;
  return {
    metadataBase: new URL(SITE_URL),
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", ru: "/ru/about", "x-default": "/en/about" },
    },
    robots: { index: true, follow: true },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const a = getDictionary(locale).aboutPage;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">{a.title}</h1>
      <p className="mt-4 leading-relaxed text-muted">{a.intro}</p>

      <h2 className="mt-8 text-xl font-bold">{a.methodologyTitle}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">
        <p>{a.methodology1}</p>
        <p>{a.methodology2}</p>
      </div>

      <h2 className="mt-8 text-xl font-bold">{a.disclaimerTitle}</h2>
      <p className="mt-3 leading-relaxed text-muted">{a.disclaimer}</p>

      <h2 className="mt-8 text-xl font-bold">{a.contactTitle}</h2>
      <p className="mt-3 text-muted">
        {a.contactText}{" "}
        <a href={`mailto:${EMAIL}`} className="font-medium text-accent hover:underline">
          {EMAIL}
        </a>
        .
      </p>

      <p className="mt-10 text-sm">
        <Link href={`/${locale}`} className="text-accent hover:underline">
          {a.back}
        </Link>
      </p>
    </div>
  );
}
