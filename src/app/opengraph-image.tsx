import { ImageResponse } from "next/og";
import { festivalConfig } from "@/app/data/festival";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "#f5edde",
          color: "#15130f",
          borderTop: "22px solid #15130f",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 700 }}>
          <span>WHERE CULTURE MEETS THE STREET</span>
          <span>{festivalConfig.dates}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.78, fontSize: 108, fontWeight: 800 }}>
          <span>THE QUIGNEY</span>
          <span>CULTURE</span>
          <span>FESTIVAL <b style={{ color: "#a94e2e" }}>2027</b></span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, fontWeight: 700 }}>
          <span>{festivalConfig.location}</span>
          <span style={{ background: "#e99568", padding: "10px 18px" }}>{festivalConfig.editionTheme}</span>
        </div>
      </div>
    ),
    size
  );
}
