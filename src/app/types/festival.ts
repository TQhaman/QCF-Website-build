export type LinkItem = {
  label: string;
  href: string;
};

export type FestivalMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  year?: number;
  credit?: string;
  source?: string;
  role: string;
  orientation: "landscape" | "portrait" | "square";
  objectPosition?: string;
};

export type FestivalEdition = {
  year: number;
  status: "past" | "upcoming" | "current";
  theme?: string;
  dates: string;
  title: string;
  location: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string | null;
  image?: FestivalMedia;
};

export type OrganiserCredit = {
  heading: string;
  role: string;
  copy: string;
  image?: FestivalMedia;
  mediaLabel?: string;
};

export type StoryBeat = {
  kicker: string;
  title: string;
  copy: string;
  mediaLabel: string;
  tone: "ink" | "sand" | "ochre" | "green";
  image?: FestivalMedia;
};

export type FestivalExperience = {
  label: string;
  title: string;
  copy: string;
  mediaLabel: string;
  tone: "ink" | "sand" | "coral" | "green";
  layout: "feature" | "standard";
  image?: FestivalMedia;
};

export type ProgrammeDay = {
  day: string;
  date: string;
  shortDate: string;
  status: string;
};

export type ProgrammeCategory = {
  name: string;
};

export type ProgrammeEntry = {
  id: string;
  title: string;
  category: string;
  day: string;
  startTime: string;
  endTime?: string;
  venue?: string;
  image?: FestivalMedia;
  description?: string;
  ticketUrl?: string;
};

export type PrecinctFeature = {
  number: string;
  label: string;
  title: string;
  copy: string;
};

export type FestivalMapMarker = {
  id: string;
  label: string;
  position: {
    x: number;
    y: number;
  };
  details?: string;
};

export type FestivalMapDay = {
  label: string;
  markers: FestivalMapMarker[];
};

export type InvolvementPath = {
  number: string;
  label: string;
  title: string;
  copy: string;
  status: string;
  ctaLabel: string;
  href: string | null;
  tone: "paper" | "sand" | "green";
};

export type VisitFact = {
  label: string;
  value: string;
};

export type VisitInformationItem = {
  label: string;
  copy: string;
};

export type Partner = {
  name: string;
  category?: string;
  logo?: string;
  href?: string;
};

export type FestivalContact = {
  email: string | null;
  whatsappDisplay: string | null;
  whatsappUrl: string | null;
  ticketUrl: string | null;
  instagramUrl: string | null;
  facebookUrl: string | null;
  tiktokUrl: string | null;
  newsletterUrl: string | null;
};
