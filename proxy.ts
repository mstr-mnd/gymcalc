import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale } from "./lib/i18n";

function detectLocale(req: NextRequest): string {
  // 1. Explicit user choice wins.
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isLocale(cookie)) return cookie;

  // 2. Geo signal on Vercel: visitors from Russia get Russian.
  const country = req.headers.get("x-vercel-ip-country");
  if (country === "RU") return "ru";

  // 3. Browser language (Accept-Language).
  const accept = req.headers.get("accept-language") ?? "";
  const langs = accept.split(",").map((part) => part.split(";")[0].trim().toLowerCase());
  for (const lang of langs) {
    if (lang.startsWith("ru")) return "ru";
    if (lang.startsWith("en")) return "en";
  }

  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // The embeddable widget lives outside the localized routes.
  if (pathname === "/embed" || pathname.startsWith("/embed/")) {
    return NextResponse.next();
  }

  // Already locale-prefixed? Let it through.
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Otherwise redirect to the detected locale, preserving the rest of the path.
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals, API routes, and files with an extension.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
