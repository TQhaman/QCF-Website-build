import type {
  FestivalContact,
  FestivalEdition,
  FestivalExperience,
  FestivalMedia,
  InvolvementPath,
  LinkItem,
  Partner,
  PrecinctFeature,
  ProgrammeDay,
  ProgrammeCategory,
  StoryBeat,
  VisitFact,
} from "@/app/types/festival";

const developmentSiteUrl = "http://localhost:3000";

// Production deployments must provide NEXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? developmentSiteUrl;

const festivalDates = {
  display: "26–27 February 2027",
  startISO: "2027-02-26",
  endISO: "2027-02-27",
  startDay: "26",
  endDay: "27",
  monthShort: "FEB",
} as const;

const festivalLocation = {
  precinctName: "Caxton & Burns Streets precinct",
  primary: "Caxton & Burns Streets",
  suburb: "Quigney",
  city: "East London",
  region: "Eastern Cape",
  countryCode: "ZA",
  secondary: "Quigney, East London",
  display: "Caxton & Burns Streets, Quigney, East London",
} as const;

const festivalMedia = {
  logoGreen: {
    src: "/images/Logo/Logo_PNG_1.png",
    alt: "Quigney Culture Festival logo",
    width: 1500,
    height: 1500,
    role: "brand mark for light backgrounds",
    orientation: "square",
  },
  logoBlack: {
    src: "/images/Logo/Logo_PNG.png",
    alt: "Quigney Culture Festival logo",
    width: 1500,
    height: 1500,
    role: "brand mark for coral backgrounds",
    orientation: "square",
  },
  poster2026: {
    src: "/images/qcf/qcf-2026-poster.jpg",
    alt: "Quigney Culture Festival 2026 event artwork",
    width: 1500,
    height: 750,
    year: 2026,
    role: "2026 festival edition artwork",
    orientation: "landscape",
    objectPosition: "center",
  },
  crowd: {
    src: "/images/2026/Soley_Crowd.jpeg",
    alt: "Crowd gathered behind a barrier at a previous Quigney Culture Festival",
    width: 1280,
    height: 854,
    year: 2026,
    role: "festival atmosphere and audience",
    orientation: "landscape",
    objectPosition: "center bottom",
  },
  people: {
    src: "/images/2026/Friendly_QCF.jpeg",
    alt: "Two festival visitors smiling with QCF face paint",
    width: 1280,
    height: 854,
    year: 2026,
    role: "people and community",
    orientation: "landscape",
    objectPosition: "center",
  },
  vendor: {
    src: "/images/2026/Vendor.jpeg",
    alt: "Festival visitor ordering from a colourful food trailer",
    width: 1280,
    height: 854,
    year: 2026,
    role: "food, vendors and markets",
    orientation: "landscape",
    objectPosition: "center",
  },
  streetRunway: {
    src: "/images/2026/Group_streetrunway.jpeg",
    alt: "Models walking an outdoor street runway at a previous QCF edition",
    width: 854,
    height: 1280,
    year: 2026,
    role: "street runway and fashion",
    orientation: "portrait",
    objectPosition: "center bottom",
  },
  fashionYellow: {
    src: "/images/2026/Yellowdress_fashion.jpeg",
    alt: "Model wearing a yellow patterned dress at a QCF runway presentation",
    width: 854,
    height: 1280,
    year: 2026,
    role: "fashion and design",
    orientation: "portrait",
    objectPosition: "center bottom",
  },
  fashionBlue: {
    src: "/images/2026/Blue_dress_fashion.jpeg",
    alt: "Model wearing a blue dress at a QCF runway presentation",
    width: 854,
    height: 1280,
    year: 2026,
    role: "supporting fashion imagery",
    orientation: "portrait",
    objectPosition: "center bottom",
  },
  performanceAudience: {
    src: "/images/2026/Bongiwe.jpeg",
    alt: "Musician performing with a guitar before a festival crowd",
    width: 1280,
    height: 854,
    year: 2026,
    role: "live music and audience",
    orientation: "landscape",
    objectPosition: "left center",
  },
  performanceStage: {
    src: "/images/2026/Jabu.jpeg",
    alt: "Guitarist performing on an outdoor stage before a festival crowd",
    width: 1280,
    height: 854,
    year: 2026,
    role: "street performance",
    orientation: "landscape",
    objectPosition: "left center",
  },
} satisfies Record<string, FestivalMedia>;

const siteLinks = {
  festival: { label: "Festival", href: "#festival" },
  programme: { label: "Programme", href: "#programme" },
  precinct: { label: "QCF Precinct", href: "#precinct" },
  getInvolved: { label: "Get Involved", href: "#get-involved" },
  visit: { label: "Visit", href: "#visit" },
} satisfies Record<string, LinkItem>;

export const festivalConfig = {
  siteUrl,
  locale: "en-ZA",
  name: "Quigney Culture Festival",
  shortName: "QCF",
  editionYear: 2027,
  editionTheme: "SAND & SEA",
  dates: festivalDates.display,
  location: festivalLocation.display,
  event: {
    dates: festivalDates,
    location: festivalLocation,
  },
  description:
    "Quigney Culture Festival brings music, food, fashion, art, design and community into the streets of Quigney, East London.",
  media: festivalMedia,
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
    image: festivalMedia.crowd,
  },
  storyBeats: [
  {
    kicker: "01 / Street",
    title: "The streets become part of the festival.",
    copy:
      "QCF unfolds through Quigney's street precinct, with performance, food and gathering spaces extending the experience beyond a single stage.",
    mediaLabel: "QCF 2026 / Live in the street",
    tone: "ink",
    image: festivalMedia.performanceStage,
  },
  {
    kicker: "02 / Culture",
    title: "Music, food, fashion and art share the street.",
    copy:
      "Live music sits alongside food, fashion and runway moments, visual art, design and storytelling — different expressions of culture meeting in one place.",
    mediaLabel: "QCF 2026 / Runway and design",
    tone: "ochre",
    image: festivalMedia.fashionYellow,
  },
  {
    kicker: "03 / People",
    title: "The festival is shaped by the people in it.",
    copy:
      "Artists, residents, visitors, vendors and local creatives all bring something to QCF. The experience is built around the people who perform, make, gather and take part.",
    mediaLabel: "QCF 2026 / Festival faces",
    tone: "green",
    image: festivalMedia.people,
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
    mediaLabel: "QCF 2026 / Live performance",
    tone: "ink",
    layout: "feature",
    image: festivalMedia.performanceAudience,
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
    mediaLabel: "QCF 2026 / Street runway",
    tone: "coral",
    layout: "standard",
    image: festivalMedia.streetRunway,
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
    mediaLabel: "QCF 2026 / Food and vendors",
    tone: "green",
    layout: "feature",
    image: festivalMedia.vendor,
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
    primary: festivalLocation.primary,
    secondary: festivalLocation.secondary,
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

visit: {
  eyebrow: "QCF / Visit",
  title: "Plan your visit.",
  intro:
    "QCF 2027 takes place across Caxton and Burns Streets in Quigney, East London.",
  facts: [
    {
      label: "Dates",
      value: festivalDates.display,
    },
    {
      label: "Festival precinct",
      value: festivalLocation.display,
    },
  ] satisfies VisitFact[],
  ticketLabel: "Get tickets",
  ticketPending: "Ticket information will be shared once confirmed.",
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
      image: festivalMedia.poster2026,
    },
    {
      year: 2027,
      status: "upcoming",
      theme: "SAND & SEA",
      dates: festivalDates.display,
      location: festivalLocation.display,
      summary:
        "QCF returns to the Caxton and Burns Street precinct in February 2027. The new edition is beginning to take shape, with programme announcements and more festival details still to come.",
    },
  ] satisfies FestivalEdition[],
  contact: {
    email: null,
    whatsappDisplay: "067 126 6242",
    whatsappUrl: "https://wa.me/27671266242",
    ticketUrl: null,
    instagramUrl: "https://www.instagram.com/thequigneyfest",
    facebookUrl: null,
    tiktokUrl: "https://www.tiktok.com/@thequigneyfest",
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
