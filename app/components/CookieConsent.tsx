"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_NAME = "cc_consent";
const ONE_YEAR = 60 * 60 * 24 * 365;
const OPEN_EVENT = "open-cookie-settings";

function readConsent(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeConsent(value: "accepted" | "rejected") {
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${ONE_YEAR}; path=/; SameSite=Lax`;
}

type Props = {
  text: string;
  privacyLabel: string;
  privacyHref: string;
  reject: string;
  accept: string;
};

export default function CookieConsent({
  text,
  privacyLabel,
  privacyHref,
  reject,
  accept,
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the banner only if no choice has been stored yet.
    if (!readConsent()) setVisible(true);
    // Allow re-opening from the footer "Cookie settings" link.
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (value: "accepted" | "rejected") => {
    writeConsent(value);
    setVisible(false);
    // Let Analytics start immediately on accept (no page reload needed).
    if (value === "accepted") window.dispatchEvent(new Event("cookie-accepted"));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-elevated p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          {text}{" "}
          <Link
            href={privacyHref}
            className="font-semibold text-accent hover:underline"
          >
            {privacyLabel}
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-full border border-border px-4 py-2 text-sm font-bold text-text transition-colors hover:bg-elevated-hover"
          >
            {reject}
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="btn-accent px-5 py-2 text-sm"
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer link that re-opens the cookie banner so users can change their choice. */
export function ManageCookiesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="hover:text-text"
    >
      {label}
    </button>
  );
}
