import { ImageResponse } from "next/og";
import { archive2026 } from "@/app/data/archive2026";
import { festivalConfig } from "@/app/data/festival";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = archive2026.seo.imageAlt;

export default function ArchiveOpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px", background: "#f5edde", color: "#15130f", borderTop: "22px solid #15130f" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 700 }}>
        <span>{archive2026.hero.eyebrow.toUpperCase()}</span>
        <span>{archive2026.dates}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 100, lineHeight: 1, fontWeight: 800 }}>{archive2026.hero.title.toUpperCase()}</span>
        <span style={{ fontSize: 50, fontWeight: 700, color: "#a94e2e" }}>{archive2026.hero.subtitle.toUpperCase()}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: 24, fontWeight: 700 }}>
        <span>{festivalConfig.name}</span>
        <span>{archive2026.location}</span>
      </div>
    </div>, size,
  );
}
