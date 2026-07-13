import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function getGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl).then((res) => res.text());
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not load font: ${family}`);
  const fontResponse = await fetch(match[1]);
  return fontResponse.arrayBuffer();
}

export default async function Image() {
  const heading = "Clearshore Counselling";
  const tagline =
    "Grief, trauma & wellbeing counselling — Hervey Bay & telehealth Australia-wide";
  const eyebrow = "HERVEY BAY, QLD";

  const [logoData, cormorant, inter, interSemibold] = await Promise.all([
    readFile(join(process.cwd(), "public/logo.png"), "base64"),
    getGoogleFont("Cormorant+Garamond", 600, heading),
    getGoogleFont("Inter", 400, tagline),
    getGoogleFont("Inter", 600, eyebrow),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          background: "linear-gradient(135deg, #2c8598 0%, #1e6b7b 55%, #17545f 100%)",
        }}
      >
        <img
          src={`data:image/png;base64,${logoData}`}
          width={380}
          height={380}
          style={{ borderRadius: 32, flexShrink: 0 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 64,
            maxWidth: 640,
          }}
        >
          <div
            style={{
              fontFamily: "Inter Semibold",
              fontSize: 22,
              letterSpacing: 4,
              color: "#e8b54d",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 600,
              fontSize: 68,
              lineHeight: 1.1,
              color: "#ffffff",
              marginTop: 16,
            }}
          >
            {heading}
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 28,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.88)",
              marginTop: 24,
            }}
          >
            {tagline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Garamond", data: cormorant, weight: 600, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
        { name: "Inter Semibold", data: interSemibold, weight: 600, style: "normal" },
      ],
    }
  );
}
