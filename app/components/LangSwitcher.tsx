"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const ONE_YEAR = 60 * 60 * 24 * 365;

export default function LangSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (loc: Locale) => {
    // Remember the manual choice so middleware respects it next time.
    document.cookie = `NEXT_LOCALE=${loc}; max-age=${ONE_YEAR}; path=/; SameSite=Lax`;
    const rest = pathname.replace(/^\/(en|ru)(?=\/|$)/, "");
    router.push(`/${loc}${rest || ""}`);
  };

  return (
    <div className="flex rounded-full border border-border p-0.5 text-xs font-bold">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            current === loc ? "bg-accent text-white" : "text-muted hover:text-text"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
