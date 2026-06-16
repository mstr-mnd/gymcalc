"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function hasConsent() {
  return typeof document !== "undefined" && document.cookie.includes("cc_consent=accepted");
}

/**
 * Loads Google Analytics 4 — but only after the visitor accepts cookies.
 * Nothing is loaded (and no analytics cookies are set) before consent.
 */
export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (hasConsent()) setEnabled(true);
    // The cookie banner fires this when the user clicks "Accept".
    const onAccept = () => setEnabled(true);
    window.addEventListener("cookie-accepted", onAccept);
    return () => window.removeEventListener("cookie-accepted", onAccept);
  }, []);

  if (!GA_ID || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
