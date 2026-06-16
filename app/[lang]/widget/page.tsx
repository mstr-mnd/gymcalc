import type { Metadata } from "next";
import Link from "next/link";
import EmbedWidget from "@/app/components/EmbedWidget";
import { isLocale, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const w = getDictionary(locale).widget;
  return {
    metadataBase: new URL(SITE_URL),
    title: w.metaTitle,
    description: w.metaDescription,
    alternates: {
      canonical: `/${locale}/widget`,
      languages: { en: "/en/widget", ru: "/ru/widget", "x-default": "/en/widget" },
    },
    robots: { index: true, follow: true },
  };
}

export default async function WidgetPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  const w = dict.widget;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">{w.title}</h1>
      <p className="mt-3 leading-relaxed text-muted">{w.intro}</p>

      <EmbedWidget
        labels={{
          codeTitle: w.codeTitle,
          copy: w.copy,
          copied: w.copied,
          previewTitle: w.previewTitle,
        }}
      />

      <p className="mt-10 text-sm">
        <Link href={`/${locale}`} className="text-accent hover:underline">
          {dict.aboutPage.back}
        </Link>
      </p>
    </div>
  );
}
