import type { Metadata } from "next";
import CreatineCalculator from "@/app/components/CreatineCalculator";
import { isLocale, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ru: "/ru", "x-default": "/en" },
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `${SITE_URL}/${locale}`,
      siteName: "CreatineCalc",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: dict.hero.title,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: dict.howto.title,
    step: dict.howto.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* Hero — centered and minimal, calculator is the focus */}
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[360px]" />
        <div className="mx-auto max-w-2xl px-5 pt-12 pb-8 text-center">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            {dict.hero.badge}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {dict.hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">{dict.hero.subtitle}</p>
          <p className="mt-3 text-xs text-muted/80">
            {dict.byline.text} · {dict.byline.updated}
          </p>
        </div>

        {/* Calculator */}
        <div id="calculator" className="mx-auto max-w-xl px-5 pb-14 scroll-mt-20">
          <CreatineCalculator dict={dict.calc} />
        </div>
      </section>

      {/* How it works — compact */}
      <section id="how-it-works" className="scroll-mt-20 border-t border-border bg-base">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">{dict.how.title}</h2>
          <p className="mt-3 text-muted">{dict.how.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-elevated p-6 shadow-sm">
              <h3 className="text-base font-bold text-text">{dict.how.maintTitle}</h3>
              <p className="mt-2 inline-block rounded-md bg-accent/10 px-2.5 py-1 font-mono text-sm font-semibold text-text">
                {dict.how.maintFormula}
              </p>
              <p className="mt-3 text-sm text-muted">{dict.how.maintDesc}</p>
            </div>
            <div className="rounded-2xl border border-border bg-elevated p-6 shadow-sm">
              <h3 className="text-base font-bold text-text">{dict.how.loadTitle}</h3>
              <p className="mt-2 inline-block rounded-md bg-accent/10 px-2.5 py-1 font-mono text-sm font-semibold text-text">
                {dict.how.loadFormula}
              </p>
              <p className="mt-3 text-sm text-muted">{dict.how.loadDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to take it — visible numbered steps that back the HowTo schema */}
      <section className="scroll-mt-20">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">{dict.howto.title}</h2>
          <ol className="mt-6 space-y-4">
            {dict.howto.steps.map((s, i) => (
              <li key={s.name} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-text">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About — plain-language explainer, adds topical depth for SEO */}
      <section className="scroll-mt-20 border-t border-border bg-base">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">{dict.about.title}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <p>{dict.about.p3}</p>
          </div>
        </div>
      </section>

      {/* Sources — EEAT: research links + formula provenance */}
      <section id="sources" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">{dict.sources.title}</h2>
          <p className="mt-3 text-muted">{dict.sources.intro}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {dict.sources.formulaNote}
          </p>
          <ul className="mt-5 space-y-2">
            {dict.sources.items.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">{dict.faqTitle}</h2>
          <div className="mt-6 divide-y divide-border">
            {dict.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
