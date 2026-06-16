import CreatineCalculator from "@/app/components/CreatineCalculator";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, defaultLocale } from "@/lib/i18n";

// Bare calculator for embedding via <iframe>. Includes a credit link back to the site.
export default async function EmbedPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = lang && isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-xl p-4">
      <CreatineCalculator dict={dict.calc} />
      <p className="mt-3 text-center text-xs text-muted">
        <a
          href="https://gymscalp.online"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text"
        >
          Powered by CreatineCalc
        </a>
      </p>
    </div>
  );
}
