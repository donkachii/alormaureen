import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default async function Icon() {
  const gloock = await readFile(join(process.cwd(), "assets/Gloock-Regular.ttf"));

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#B4472A",
        color: "#F6F2EA",
        fontFamily: "Gloock",
        fontSize: 34,
      }}
    >
      M
    </div>,
    { ...size, fonts: [{ name: "Gloock", data: gloock, weight: 400, style: "normal" }] },
  );
}
