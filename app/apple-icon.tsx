import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Brand apple-touch icon: white lightning bolt on the green brand color.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16a34a",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32" fill="#ffffff">
          <path d="M18 5 L10 17.5 H15 L13.5 27 L22 14 H16.5 Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
