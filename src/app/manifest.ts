import type { MetadataRoute } from "next";
import { festivalConfig } from "@/app/data/festival";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: festivalConfig.name,
    short_name: festivalConfig.shortName,
    description: festivalConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5edde",
    theme_color: "#15130f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
