import type { FestivalMedia } from "./festival";

// Editorial evidence is internal provenance, not a public photography credit.
export type ArchiveEvidence = {
  source: string;
  supports: string;
};

export type ArchiveRecord = {
  id: string;
  evidence?: ArchiveEvidence[];
};

export type ArchiveMedia = {
  image: FestivalMedia;
  caption: string;
  monochrome?: boolean;
  evidence?: ArchiveEvidence[];
};

export type ArchiveHighlight = ArchiveRecord & {
  title: string;
  copy: string;
  media: ArchiveMedia;
};

export type ArchiveStory = ArchiveRecord & {
  eyebrow: string;
  title: string;
  copy: string;
  media: ArchiveMedia[];
};

export type ArchiveArtist = ArchiveRecord & {
  name: string;
  poster?: FestivalMedia;
  image?: FestivalMedia;
  roleOrGenre?: string;
  announcedDate?: string;
  performanceDate?: string;
  venue?: string;
  setHighlights?: string[];
  story?: string;
  house87Connection?: string;
  quote?: string;
  quoteAttribution?: string;
  gallery?: ArchiveMedia[];
  videoUrl?: string;
  credit?: string;
  source?: string;
};

export type ArchiveVendor = ArchiveRecord & {
  name: string;
  category?: string;
  image?: FestivalMedia;
  whatTheyBrought?: string;
  story?: string;
  quote?: string;
  quoteAttribution?: string;
  gallery?: ArchiveMedia[];
  websiteOrSocial?: string;
  credit?: string;
  source?: string;
};

export type ArchivePartner = ArchiveRecord & {
  name: string;
  logo?: FestivalMedia;
  darkBackground?: boolean;
};

export type ArchiveVideo = ArchiveRecord & {
  title: string;
  src: string;
  poster: FestivalMedia;
  caption?: string;
  credit?: string;
};

export type ArchiveFact = {
  value: string;
  label: string;
  evidence?: ArchiveEvidence[];
};
