import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// TODO: replace the bracketed placeholders with your real details before publishing,
// and have a lawyer review this for your jurisdiction.
const COMPANY = "[Your Company / Your Name]";
const EMAIL = "[your-email@example.com]";
const DOMAIN = "gymscalp.online";

const fill = (tpl: string, vars: Record<string, string>) =>
  tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

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
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        en: "/en/privacy",
        ru: "/ru/privacy",
        "x-default": "/en/privacy",
      },
    },
    robots: { index: true, follow: true },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-text">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const p = getDictionary(locale).privacy;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">{p.title}</h1>
      <p className="mt-2 text-sm text-muted">{p.updated}</p>

      <Section title={p.shortTitle}>
        <ul className="list-disc space-y-1 pl-5">
          {p.shortItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={p.s1Title}>
        <p>{fill(p.s1, { company: COMPANY, domain: DOMAIN })}</p>
      </Section>

      <Section title={p.s2Title}>
        <p>{p.s2a}</p>
        <p>{p.s2b}</p>
      </Section>

      <Section title={p.s3Title}>
        <p>{p.s3Intro}</p>
        <ul className="list-disc space-y-1 pl-5">
          {p.s3Items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{p.s3Tail}</p>
      </Section>

      <Section title={p.s4Title}>
        <p>{p.s4}</p>
      </Section>

      <Section title={p.s5Title}>
        <p>{p.s5Intro}</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <a
              href="https://policies.google.com/privacy"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.s5Analytics}
            </a>
          </li>
        </ul>
        <p>{p.s5Tail}</p>
      </Section>

      <Section title={p.s6Title}>
        <p>{fill(p.s6, { email: EMAIL })}</p>
      </Section>

      <Section title={p.s7Title}>
        <p>{p.s7}</p>
      </Section>

      <Section title={p.s8Title}>
        <p>{p.s8}</p>
      </Section>

      <Section title={p.s9Title}>
        <p>{p.s9}</p>
      </Section>

      <Section title={p.s10Title}>
        <p>{fill(p.s10, { email: EMAIL, company: COMPANY })}</p>
      </Section>

      <p className="mt-10 text-sm">
        <Link href={`/${locale}`} className="text-accent hover:underline">
          {p.back}
        </Link>
      </p>
    </div>
  );
}
