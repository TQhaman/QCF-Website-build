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
      {
        src: festivalConfig.media.logoGreen.src,
        sizes: `${festivalConfig.media.logoGreen.width}x${festivalConfig.media.logoGreen.height}`,
        type: "image/png",
      },
    ],
  };
}
