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
  role: string;
  orientation: "landscape" | "portrait" | "square";
  objectPosition?: string;
};

export type FestivalEdition = {
  year: number;
  status: "past" | "upcoming" | "current";
  theme?: string;
  dates: string;
  location: string;
  summary: string;
  image?: string;
  imageAlt?: string;
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

export type PrecinctFeature = {
  number: string;
  label: string;
  title: string;
  copy: string;
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
