import { festivalConfig } from "@/app/data/festival";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${festivalConfig.name} ${festivalConfig.editionYear}`,
    description: festivalConfig.description,
    startDate: "2027-02-26",
    endDate: "2027-02-27",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Caxton & Burns Streets precinct",
      address: {
        "@type": "PostalAddress",
        addressLocality: "East London",
        addressRegion: "Eastern Cape",
        addressCountry: "ZA",
      },
    },
    url: festivalConfig.siteUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
