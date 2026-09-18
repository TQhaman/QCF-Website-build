import { festivalConfig } from "@/app/data/festival";

// Kept as a small compatibility export for metadata and route utilities.
// The festival content itself lives in data/festival.ts.
export const siteConfig = {
  siteUrl: festivalConfig.siteUrl,
  locale: festivalConfig.locale,
  businessName: festivalConfig.name,
  legalName: festivalConfig.name,
  tagline: `${festivalConfig.editionYear} · ${festivalConfig.dates}`,
  description: festivalConfig.description,
  seo: {
    keywords: festivalConfig.seo.keywords,
    ogImageTitle: festivalConfig.name,
    ogImageTagline: `${festivalConfig.editionTheme} · ${festivalConfig.editionYear}`,
  },
};
