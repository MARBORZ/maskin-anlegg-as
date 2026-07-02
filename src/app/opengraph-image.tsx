import { ImageResponse } from "next/og";
import { brand, seo } from "@/shared/config";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#141210",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#c9a24b",
            fontSize: 26,
            letterSpacing: 6,
          }}
        >
          {brand.mark}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            color: "#f0e8d8",
            fontSize: 78,
            lineHeight: 1.04,
          }}
        >
          <div style={{ display: "flex" }}>Vi holder eiendommen</div>
          <div style={{ display: "flex" }}>
            i form
            <span style={{ color: "#c9a24b", fontStyle: "italic", marginLeft: 18 }}>
              hele året.
            </span>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: 36, color: "#9e9689", fontSize: 30 }}>
          {brand.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
