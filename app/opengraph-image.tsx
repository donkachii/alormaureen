import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, site } from "@/content/site";

export const alt = `${site.name}: ${hero.line}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const gloock = await readFile(join(process.cwd(), "assets/Gloock-Regular.ttf"));

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#F6F2EA",
        color: "#141414",
        fontFamily: "Gloock",
      }}
    >
      <div style={{ display: "flex", fontSize: 180, lineHeight: 1 }}>{hero.greeting}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 54, lineHeight: 1.15, maxWidth: 950 }}>
          {hero.line}
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 28, color: "#B4472A" }}>
          {site.name}
        </div>
      </div>
    </div>,
    { ...size, fonts: [{ name: "Gloock", data: gloock, weight: 400, style: "normal" }] },
  );
}
