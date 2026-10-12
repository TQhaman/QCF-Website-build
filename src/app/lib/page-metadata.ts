import type { Metadata } from "next";
import { festivalConfig } from "@/app/data/festival";
import { absoluteUrl } from "./site";

export function supportingPageMetadata(page: keyof typeof festivalConfig.pages): Metadata {
  const content = festivalConfig.pages[page];
  const path = "/" + page;
  const title = content.title.replace(/\.$/, "");
  const socialTitle = title + " | " + festivalConfig.name;
  return {
    title,
    description: content.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: festivalConfig.locale.replace("-", "_"),
      siteName: festivalConfig.name,
      url: absoluteUrl(path),
      title: socialTitle,
      description: content.description,
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: festivalConfig.name + " 2027" }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: content.description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}
