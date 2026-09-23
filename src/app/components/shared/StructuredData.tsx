import { festivalConfig } from "@/app/data/festival";

export function StructuredData() {
  const { dates, location } = festivalConfig.event;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${festivalConfig.name} ${festivalConfig.editionYear}`,
    description: festivalConfig.description,
    startDate: dates.startISO,
    endDate: dates.endISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: location.precinctName,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.primary,
        addressLocality: location.city,
        addressRegion: location.region,
        addressCountry: location.countryCode,
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
