"use client";

import { useState } from "react";

type Labels = {
  codeTitle: string;
  copy: string;
  copied: string;
  previewTitle: string;
};

const CODE = `<iframe src="https://gymscalp.online/embed" width="100%" height="760" style="border:0;max-width:620px" title="Creatine Calculator" loading="lazy"></iframe>
<p style="font:14px sans-serif"><a href="https://gymscalp.online">Creatine Calculator</a> by CreatineCalc</p>`;

export default function EmbedWidget({ labels }: { labels: Labels }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be blocked; user can still select the code */
    }
  };

  return (
    <div>
      <div className="mt-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-muted">{labels.codeTitle}</p>
          <button type="button" onClick={copy} className="btn-accent px-4 py-1.5 text-xs">
            {copied ? labels.copied : labels.copy}
          </button>
        </div>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-border bg-base p-4 text-xs leading-relaxed text-text">
          <code>{CODE}</code>
        </pre>
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-muted">{labels.previewTitle}</p>
        <div className="mt-2 overflow-hidden rounded-xl border border-border">
          <iframe
            src="/embed"
            width="100%"
            height={760}
            style={{ border: 0 }}
            title="Creatine Calculator preview"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
