import { ImageResponse } from "next/og";
import { locales } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Creatine Calculator — gymscalp.online";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Static branded social-share image. Lives under [lang] so the proxy doesn't redirect it.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "9999px",
              background: "#16a34a",
              color: "#ffffff",
              fontSize: "30px",
            }}
          >
            ⚡
          </div>
          <div style={{ fontSize: "30px", fontWeight: 800, color: "#18181b" }}>
            CreatineCalc
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "76px", fontWeight: 800, color: "#18181b", lineHeight: 1.05 }}>
            Creatine Calculator
          </div>
          <div style={{ fontSize: "34px", color: "#6b7280", marginTop: "22px" }}>
            Your daily dose by body weight and body fat.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "64px", height: "8px", borderRadius: "9999px", background: "#16a34a" }} />
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#16a34a" }}>
            gymscalp.online
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
