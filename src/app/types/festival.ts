export type LinkItem = {
  label: string;
  href: string;
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
};

export type FestivalExperience = {
  label: string;
  title: string;
  copy: string;
  mediaLabel: string;
  tone: "ink" | "sand" | "coral" | "green";
  layout: "feature" | "standard";
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
