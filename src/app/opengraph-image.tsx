import { ImageResponse } from "next/og";

export const alt = "Sham Studio – Webdesign & Entwicklung in Hannover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Sham Studio
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginBottom: 8,
          }}
        >
          Webdesign & Entwicklung
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#22d3ee",
          }}
        >
          Hannover
        </div>
      </div>
    ),
    { ...size }
  );
}
