import type {
  FestivalEdition,
  FestivalExperience,
  LinkItem,
  StoryBeat,
  ProgrammeDay,
  ProgrammeCategory
} from "@/app/types/festival";
export const festivalConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en-ZA",
  name: "Quigney Culture Festival",
  shortName: "QCF",
  editionYear: 2027,
  editionTheme: "SAND & SEA",
  dates: "26–27 February 2027",
  location: "Caxton & Burns Streets, Quigney, East London",
  description:
    "Quigney Culture Festival brings music, food, fashion, art, design and community into the streets of Quigney, East London.",
  navItems: [
    { label: "Festival", href: "#festival" },
    { label: "Editions", href: "#editions" },
    { label: "Programme", href: "#programme" },
    { label: "Quigney Precinct", href: "#precinct" },
    { label: "Visit", href: "#visit" },
  ] satisfies LinkItem[],
  primaryCta: { label: "2027 programme", href: "#programme" } satisfies LinkItem,
  hero: {
    kicker: "Where culture meets the street",
    title: "Quigney Culture Festival",
    statement:
      "Music, food, fashion, art and community take over the streets of Quigney for two days of culture in motion.",
  },
  storyBeats: [
  {
    kicker: "01 / Street",
    title: "The streets become part of the festival.",
    copy:
      "QCF unfolds through Quigney's street precinct, with performance, food and gathering spaces extending the experience beyond a single stage.",
    mediaLabel: "QCF street / crowd photography",
    tone: "ink",
  },
  {
    kicker: "02 / Culture",
    title: "Music, food, fashion and art share the street.",
    copy:
      "Live music sits alongside food, fashion and runway moments, visual art, design and storytelling — different expressions of culture meeting in one place.",
    mediaLabel: "Performance / fashion / culture photography",
    tone: "ochre",
  },
  {
    kicker: "03 / Voice",
    title: "The festival is shaped by the people in it.",
    copy:
      "Artists, residents, visitors, vendors and local creatives all bring something to QCF. The experience is built around the people who perform, make, gather and take part.",
    mediaLabel: "Artists / community / makers photography",
    tone: "green",
  },
  {
    kicker: "04 / Place",
    title: "Quigney is more than the location.",
    copy:
      "Caxton and Burns Streets become a cultural precinct for the festival, with the neighbourhood, its public spaces and its street life forming part of the experience.",
    mediaLabel: "Drone / street precinct photography",
    tone: "sand",
  },
] satisfies StoryBeat[],

experiences: [
  {
    label: "Music & Performance",
    title: "The street becomes a stage.",
    copy:
      "Live music and performance give QCF its pulse, bringing artists and audiences together across the festival precinct.",
    mediaLabel: "Live music / performance photography",
    tone: "ink",
    layout: "feature",
  },
  {
    label: "Food & Hospitality",
    title: "Come hungry. Stay awhile.",
    copy:
      "Food and hospitality are part of the experience — giving people space to slow down, meet and stay in the precinct between performances.",
    mediaLabel: "Food / hospitality photography",
    tone: "sand",
    layout: "standard",
  },
  {
    label: "Fashion & Design",
    title: "Style moves through the precinct.",
    copy:
      "Fashion, runway moments and design bring another form of performance to QCF, placing creative expression directly in front of festival audiences.",
    mediaLabel: "Fashion / runway / design photography",
    tone: "coral",
    layout: "standard",
  },
  {
    label: "Art & Story",
    title: "Creativity lives beyond the stage.",
    copy:
      "Visual art, public art and storytelling give the festival another layer — creating things to discover as people move through the precinct.",
    mediaLabel: "Art / installations / storytelling photography",
    tone: "sand",
    layout: "feature",
  },
  {
    label: "Markets & Makers",
    title: "Meet the people making here.",
    copy:
      "Creative markets bring local makers, vendors and small businesses into the festival experience and give visitors more of Quigney to discover.",
    mediaLabel: "Market / vendors / makers photography",
    tone: "green",
    layout: "feature",
  },
  {
    label: "People & Community",
    title: "Made to be shared.",
    copy:
      "QCF brings together the people who perform, cook, sell, create, visit and gather — turning the festival into something experienced together rather than simply watched.",
    mediaLabel: "People / families / community photography",
    tone: "ink",
    layout: "standard",
  },
] satisfies FestivalExperience[],


programmePreview: {
  eyebrow: "QCF 2027 / Programme",
  title: "Two days. A street full of things to discover.",
  intro:
    "The 2027 programme will bring together live music, performance, food, fashion, art and other experiences across the Quigney festival precinct.",

  days: [
    {
      day: "Friday",
      date: "26 February 2027",
      shortDate: "26 FEB",
      status: "Programme announcements coming soon",
    },
    {
      day: "Saturday",
      date: "27 February 2027",
      shortDate: "27 FEB",
      status: "Programme announcements coming soon",
    },
  ] satisfies ProgrammeDay[],

  categories: [
    { name: "Music & Performance" },
    { name: "Food" },
    { name: "Fashion & Design" },
    { name: "Art" },
    { name: "Markets & Makers" },
    { name: "Community" },
  ] satisfies ProgrammeCategory[],
},

  editions: [
    {
      year: 2026,
      status: "past",
      dates: "28 February 2026",
      location: "Caxton & Burns Streets, Quigney, East London",
      summary:
        "The 2026 edition brought performance, culture and gathering into the streets of Quigney. This space will become a home for the photographs, highlights and moments that tell the story of that year.",
      image: "/images/qcf/qcf-2026-poster.jpg",
      imageAlt: "Quigney Culture Festival 2026 event artwork",
    },
    {
      year: 2027,
      status: "upcoming",
      theme: "SAND & SEA",
      dates: "26–27 February 2027",
      location: "Caxton & Burns Streets, Quigney, East London",
      summary:
        "QCF returns to the Caxton and Burns Street precinct in February 2027. The new edition is beginning to take shape, with programme announcements and more festival details still to come.",
    },
  ] satisfies FestivalEdition[],
  contact: {
    email: null,
    ticketUrl: null,
    instagramUrl: null,
    facebookUrl: null,
    tiktokUrl: null,
  },
  seo: {
    keywords: [
      "Quigney Culture Festival",
      "East London festival",
      "Quigney events",
      "Eastern Cape culture festival",
      "live music East London",
      "cultural experiences East London",
    ],
  },
} as const;
