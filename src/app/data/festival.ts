import type {
  FestivalContact,
  FestivalEdition,
  FestivalExperience,
  InvolvementPath,
  LinkItem,
  Partner,
  PrecinctFeature,
  ProgrammeDay,
  ProgrammeCategory,
  StoryBeat,
} from "@/app/types/festival";

const siteLinks = {
  festival: { label: "Festival", href: "#festival" },
  programme: { label: "Programme", href: "#programme" },
  precinct: { label: "QCF Precinct", href: "#precinct" },
  getInvolved: { label: "Get Involved", href: "#get-involved" },
  visit: { label: "Visit", href: "#visit" },
} satisfies Record<string, LinkItem>;

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
    siteLinks.festival,
    siteLinks.programme,
    siteLinks.precinct,
    siteLinks.getInvolved,
    siteLinks.visit,
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
    mediaLabel: "QCF in the streets",
    tone: "ink",
  },
  {
    kicker: "02 / Culture",
    title: "Music, food, fashion and art share the street.",
    copy:
      "Live music sits alongside food, fashion and runway moments, visual art, design and storytelling — different expressions of culture meeting in one place.",
    mediaLabel: "Culture in motion",
    tone: "ochre",
  },
  {
    kicker: "03 / People",
    title: "The festival is shaped by the people in it.",
    copy:
      "Artists, residents, visitors, vendors and local creatives all bring something to QCF. The experience is built around the people who perform, make, gather and take part.",
    mediaLabel: "The people of QCF",
    tone: "green",
  },
  {
    kicker: "04 / Place",
    title: "Quigney is more than the location.",
    copy:
      "Caxton and Burns Streets become a cultural precinct for the festival, with the neighbourhood, its public spaces and its street life forming part of the experience.",
    mediaLabel: "Rooted in Quigney",
    tone: "sand",
  },
] satisfies StoryBeat[],

experiences: [
  {
    label: "Music & Performance",
    title: "The street becomes a stage.",
    copy:
      "Live music and performance give QCF its pulse, bringing artists and audiences together across the festival precinct.",
    mediaLabel: "Live music / performance",
    tone: "ink",
    layout: "feature",
  },
  {
    label: "Food & Hospitality",
    title: "Come hungry. Stay awhile.",
    copy:
      "Food and hospitality are part of the experience — giving people space to slow down, meet and stay in the precinct between performances.",
    mediaLabel: "Food / hospitality",
    tone: "sand",
    layout: "standard",
  },
  {
    label: "Fashion & Design",
    title: "Style moves through the precinct.",
    copy:
      "Fashion, runway moments and design bring another form of performance to QCF, placing creative expression directly in front of festival audiences.",
    mediaLabel: "Fashion / runway / design",
    tone: "coral",
    layout: "standard",
  },
  {
    label: "Art & Story",
    title: "Creativity lives beyond the stage.",
    copy:
      "Visual art, public art and storytelling give the festival another layer — creating things to discover as people move through the precinct.",
    mediaLabel: "Art / installations / storytelling",
    tone: "sand",
    layout: "feature",
  },
  {
    label: "Markets & Makers",
    title: "Meet the people making here.",
    copy:
      "Creative markets bring local makers, vendors and small businesses into the festival experience and give visitors more of Quigney to discover.",
    mediaLabel: "Markets / makers / local business",
    tone: "green",
    layout: "feature",
  },
  {
    label: "People & Community",
    title: "Made to be shared.",
    copy:
      "QCF brings together the people who perform, cook, sell, create, visit and gather — turning the festival into something experienced together rather than simply watched.",
    mediaLabel: "People / families / community",
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

precinct: {
  eyebrow: "QCF / The Festival Precinct",
  title: "The streets are part of the experience.",
  intro:
    "QCF takes shape across Caxton and Burns Streets in Quigney. Rather than placing the festival behind a single venue door, the precinct becomes part of how people move, gather and experience the programme.",
  location: {
    primary: "Caxton & Burns Streets",
    secondary: "Quigney, East London",
  },
  features: [
    {
      number: "01",
      label: "Move",
      title: "Walk the festival.",
      copy:
        "The QCF experience stretches through the precinct, allowing visitors to move between performances, food, creative activity and gathering spaces.",
    },
    {
      number: "02",
      label: "Discover",
      title: "Find more between the stages.",
      copy:
        "QCF is designed around more than scheduled performances. Food, fashion, art, makers and other festival activity give visitors something to discover as they move through the streets.",
    },
    {
      number: "03",
      label: "Gather",
      title: "Stay in the precinct.",
      copy:
        "The streets become places to meet, eat, watch, explore and spend time — making the spaces between programme moments part of the festival itself.",
    },
  ] satisfies PrecinctFeature[],
},

getInvolved: {
  eyebrow: "QCF / Take Part",
  title: "There’s more than one way to be part of QCF.",
  intro:
    "QCF is shaped by the people and organisations who perform, trade, create, partner and contribute to the festival precinct. Details for the 2027 edition will be added as each participation route is confirmed.",
  paths: [
    {
      number: "01",
      label: "Trade & Showcase",
      title: "Bring what you make to the precinct.",
      copy:
        "For food traders, makers, designers and local businesses interested in becoming part of the market, hospitality and creative experience around QCF.",
      status: "2027 application details pending",
      ctaLabel: "Applications coming soon",
      href: null,
      tone: "sand",
    },
    {
      number: "02",
      label: "Artists & Performers",
      title: "Bring your work to the festival.",
      copy:
        "For musicians, performers, fashion creatives and other artists interested in contributing to the QCF programme.",
      status: "Programming details pending",
      ctaLabel: "Artist information coming soon",
      href: null,
      tone: "paper",
    },
    {
      number: "03",
      label: "Partners & Sponsors",
      title: "Help build what happens next.",
      copy:
        "For organisations interested in supporting QCF, collaborating with the festival or contributing to its programme, precinct and wider cultural activity.",
      status: "Partnership information pending",
      ctaLabel: "Enquiry details coming soon",
      href: null,
      tone: "green",
    },
  ] satisfies InvolvementPath[],
},

partners: {
  eyebrow: "QCF / Partners",
  title: "Made possible together.",
  intro:
    "QCF grows through collaboration with organisations that support culture, creativity, community and the festival precinct. Confirmed 2027 partners will be recognised here.",
  emptyState: "Partner information will be added once confirmed.",
  futureCategories: [
    "Cultural partners",
    "Funding partners",
    "Media partners",
    "Hospitality partners",
  ],
  items: [] as Partner[],
},

stayUpdated: {
  eyebrow: "QCF / Stay in the loop",
  title: "The next announcement shouldn’t pass you by.",
  intro:
    "Programme announcements, ticket information, festival updates and new ways to take part will be shared as QCF 2027 takes shape.",
  newsletterLabel: "Join the QCF mailing list",
  newsletterPendingLabel: "2027 updates coming soon",
  socialPendingLabel: "Official social channels will be linked here once confirmed.",
},

footer: {
  tagline: "Where culture meets the street.",
  exploreItems: [
    siteLinks.festival,
    siteLinks.programme,
    siteLinks.precinct,
    siteLinks.getInvolved,
    siteLinks.visit,
  ] satisfies LinkItem[],
  informationItems: [] as LinkItem[],
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
    newsletterUrl: null,
  } satisfies FestivalContact,
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
