import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import CookieConsent, { ManageCookiesButton } from "@/app/components/CookieConsent";
import Analytics from "@/app/components/Analytics";
import LangSwitcher from "@/app/components/LangSwitcher";
import "@/app/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Paste your Search Console verification code into NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  // (env) when you verify the domain; the meta tag then appears automatically.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "CreatineCalc", url: SITE_URL, inLanguage: locale },
      { "@type": "Organization", name: "CreatineCalc", url: SITE_URL },
    ],
  };

  return (
    <html lang={locale} className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-surface text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <header className="sticky top-0 z-50 bg-base/90 backdrop-blur border-b border-border">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 font-extrabold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-lg">
                ⚡
              </span>
              <span className="text-lg">CreatineCalc</span>
            </Link>
            <div className="flex items-center gap-4 text-sm font-semibold text-muted">
              <a href="#how-it-works" className="hidden hover:text-text sm:inline">
                {dict.header.howItWorks}
              </a>
              <a href="#faq" className="hidden hover:text-text sm:inline">
                {dict.header.faq}
              </a>
              <Link
                href={`/${locale}/blog`}
                className="hidden hover:text-text sm:inline"
              >
                {dict.footer.blog}
              </Link>
              <LangSwitcher current={locale} />
              <a href="#calculator" className="btn-accent px-4 py-2 text-sm">
                {dict.header.calculate}
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border bg-base">
          <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-muted">
            <p className="font-semibold text-text">CreatineCalc</p>
            <p className="mt-2 max-w-2xl">{dict.footer.disclaimer}</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
              <Link href={`/${locale}`} className="hover:text-text">
                {dict.footer.home}
              </Link>
              <Link href={`/${locale}/about`} className="hover:text-text">
                {dict.footer.about}
              </Link>
              <Link href={`/${locale}/blog`} className="hover:text-text">
                {dict.footer.blog}
              </Link>
              <Link href={`/${locale}/widget`} className="hover:text-text">
                {dict.footer.widget}
              </Link>
              <Link href={`/${locale}/privacy`} className="hover:text-text">
                {dict.footer.privacy}
              </Link>
              <ManageCookiesButton label={dict.footer.cookieSettings} />
            </div>
            <p className="mt-4 text-xs">
              © {new Date().getFullYear()} CreatineCalc. {dict.footer.rights}
            </p>
          </div>
        </footer>

        <Analytics />
        <CookieConsent
          text={dict.cookie.text}
          privacyLabel={dict.cookie.privacyLink}
          privacyHref={`/${locale}/privacy`}
          reject={dict.cookie.reject}
          accept={dict.cookie.accept}
        />
      </body>
    </html>
  );
}
