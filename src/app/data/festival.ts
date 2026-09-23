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
  city: "KuGompo",
  region: "Eastern Cape",
  countryCode: "ZA",
  secondary: "Quigney, KuGompo",
  display: "Caxton & Burns Streets, Quigney, KuGompo",
} as const;

const festivalMedia = {
  logoGreen: {
    src: "/images/Logo/Logo_PNG_1.png",
    alt: "The Quigney Culture Festival logo",
    width: 1500,
    height: 1500,
    role: "brand mark for light backgrounds",
    orientation: "square",
  },
  logoBlack: {
    src: "/images/Logo/Logo_PNG.png",
    alt: "The Quigney Culture Festival logo",
    width: 1500,
    height: 1500,
    role: "brand mark for coral backgrounds",
    orientation: "square",
  },
  poster2026: {
    src: "/images/qcf/qcf-2026-poster.jpg",
    alt: "The Quigney Culture Festival 2026 event artwork",
    width: 1500,
    height: 750,
    year: 2026,
    role: "2026 festival edition artwork",
    orientation: "landscape",
    objectPosition: "center",
  },
  crowd: {
    src: "/images/2026/Soley_Crowd.jpeg",
    alt: "Crowd gathered behind a barrier at a previous edition of The Quigney Culture Festival",
    width: 1280,
    height: 854,
    year: 2026,
    role: "festival atmosphere and audience",
    orientation: "landscape",
    objectPosition: "center bottom",
  },
  people: {
    src: "/images/2026/Friendly_QCF.jpeg",
    alt: "Two festival visitors smiling with festival face paint",
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
    alt: "Models walking an outdoor street runway at a previous TQCF edition",
    width: 854,
    height: 1280,
    year: 2026,
    role: "street runway and fashion",
    orientation: "portrait",
    objectPosition: "center bottom",
  },
  fashionYellow: {
    src: "/images/2026/Yellowdress_fashion.jpeg",
    alt: "Model wearing a yellow patterned dress at a festival runway presentation",
    width: 854,
    height: 1280,
    year: 2026,
    role: "fashion and design",
    orientation: "portrait",
    objectPosition: "center bottom",
  },
  fashionBlue: {
    src: "/images/2026/Blue_dress_fashion.jpeg",
    alt: "Model wearing a blue dress at a festival runway presentation",
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
  precinct: { label: "TQCF Precinct", href: "#precinct" },
  getInvolved: { label: "Get Involved", href: "#get-involved" },
  visit: { label: "Visit", href: "#visit" },
} satisfies Record<string, LinkItem>;

export const festivalConfig = {
  siteUrl,
  locale: "en-ZA",
  name: "The Quigney Culture Festival",
  shortName: "TQCF",
  editionYear: 2027,
  editionTheme: "SAND & SEA",
  dates: festivalDates.display,
  location: festivalLocation.display,
  event: {
    dates: festivalDates,
    location: festivalLocation,
  },
  description:
    "The Quigney Culture Festival brings music, food, fashion, art, design and community to the streets of Quigney, KuGompo.",
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
    title: "The Quigney Culture Festival",
    statement:
      "Music, food, fashion, art and community take over the streets of Quigney for two days of culture in motion.",
    image: festivalMedia.crowd,
  },
  storyBeats: [
  {
    kicker: "01 / Street",
    title: "The streets become part of the festival.",
    copy:
      "TQCF moves through Quigney’s street precinct, with music, food and places to gather beyond any one stage.",
    mediaLabel: "TQCF 2026 / Live in the street",
    tone: "ink",
    image: festivalMedia.performanceStage,
  },
  {
    kicker: "02 / Culture",
    title: "Music, food, fashion and art share the street.",
    copy:
      "Music, food, fashion, runway, art, design and storytelling meet in the street.",
    mediaLabel: "TQCF 2026 / Runway and design",
    tone: "ochre",
    image: festivalMedia.fashionYellow,
  },
  {
    kicker: "03 / People",
    title: "The festival is shaped by the people in it.",
    copy:
      "Artists, residents, visitors, traders and local creatives bring TQCF to life — performing, making, gathering and taking part.",
    mediaLabel: "TQCF 2026 / Festival faces",
    tone: "green",
    image: festivalMedia.people,
  },
  {
    kicker: "04 / Place",
    title: "Quigney is more than the location.",
    copy:
      "Caxton and Burns Streets are more than a venue. Quigney’s public spaces and street life are part of TQCF’s identity.",
    mediaLabel: "Rooted in Quigney",
    tone: "sand",
  },
] satisfies StoryBeat[],

experiences: [
  {
    label: "Music & Performance",
    title: "The street becomes a stage.",
    copy:
      "Live music and performance give TQCF its pulse, bringing artists and audiences together across the precinct.",
    mediaLabel: "TQCF 2026 / Live performance",
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
      "Fashion, runway and design turn the street into another kind of stage.",
    mediaLabel: "TQCF 2026 / Street runway",
    tone: "coral",
    layout: "standard",
    image: festivalMedia.streetRunway,
  },
  {
    label: "Art & Story",
    title: "Creativity lives beyond the stage.",
    copy:
      "Visual art, public art and storytelling add more to discover as you move through the precinct.",
    mediaLabel: "Art / installations / storytelling",
    tone: "sand",
    layout: "feature",
  },
  {
    label: "Markets & Makers",
    title: "Meet the people making here.",
    copy:
      "Meet local makers, traders and small businesses, and discover more of Quigney along the way.",
    mediaLabel: "TQCF 2026 / Food and vendors",
    tone: "green",
    layout: "feature",
    image: festivalMedia.vendor,
  },
  {
    label: "People & Community",
    title: "Made to be shared.",
    copy:
      "Performers, cooks, traders, creatives and visitors make TQCF something to share, not simply watch.",
    mediaLabel: "People / families / community",
    tone: "ink",
    layout: "standard",
  },
] satisfies FestivalExperience[],


programmePreview: {
  eyebrow: "TQCF 2027 / Programme",
  title: "Two days. A street full of things to discover.",
  intro:
    "Two days of music, food, fashion, art and more across the TQCF precinct.",

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
  eyebrow: "TQCF / The Festival Precinct",
  title: "The streets are part of the experience.",
  intro:
    "TQCF takes shape across Caxton and Burns Streets in Quigney. Move between performances, food, markets and places to gather as the streets become part of the festival.",
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
        "Move between performances, food, creative activity and gathering places.",
    },
    {
      number: "02",
      label: "Discover",
      title: "Find more between the stages.",
      copy:
        "Discover food, fashion, art, makers and more beyond scheduled performances.",
    },
    {
      number: "03",
      label: "Gather",
      title: "Stay in the precinct.",
      copy:
        "Meet, eat, watch, explore and stay awhile between programme moments.",
    },
  ] satisfies PrecinctFeature[],
},

getInvolved: {
  eyebrow: "TQCF / Take Part",
  title: "There’s more than one way to be part of TQCF.",
  intro:
    "Trade, perform or partner with TQCF. We’ll share 2027 opportunities here as they open.",
  paths: [
    {
      number: "01",
      label: "Trade & Showcase",
      title: "Bring what you make to the precinct.",
      copy:
        "For food traders, makers, designers and local businesses interested in joining the market, hospitality and creative life around TQCF.",
      status: "Applications not yet open",
      ctaLabel: "Applications coming soon",
      href: null,
      tone: "sand",
    },
    {
      number: "02",
      label: "Artists & Performers",
      title: "Bring your work to the festival.",
      copy:
        "For musicians, performers, fashion creatives and other artists interested in joining the TQCF programme.",
      status: "2027 opportunities to come",
      ctaLabel: "Artist information coming soon",
      href: null,
      tone: "paper",
    },
    {
      number: "03",
      label: "Partners & Sponsors",
      title: "Help build what happens next.",
      copy:
        "For organisations that want to support TQCF or help bring its programme and precinct to life.",
      status: "Partnership details to come",
      ctaLabel: "Enquiry details coming soon",
      href: null,
      tone: "green",
    },
  ] satisfies InvolvementPath[],
},

visit: {
  eyebrow: "TQCF / Visit",
  title: "Plan your visit.",
  intro:
    "TQCF 2027 comes to Caxton and Burns Streets in Quigney, KuGompo.",
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
  ticketPending: "Ticket information is coming soon.",
},

partners: {
  eyebrow: "TQCF / Partners",
  title: "Made possible together.",
  intro:
    "The people and organisations helping bring TQCF 2027 to life will be featured here.",
  emptyState: "2027 partner announcements are on the way.",
  futureCategories: [
    "Cultural partners",
    "Funding partners",
    "Media partners",
    "Hospitality partners",
  ],
  items: [] as Partner[],
},

stayUpdated: {
  eyebrow: "TQCF / Stay in the loop",
  title: "The next announcement shouldn’t pass you by.",
  intro:
    "Follow TQCF for programme announcements, ticket updates and what’s happening next.",
  newsletterLabel: "Join the TQCF mailing list",
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
      location: festivalLocation.display,
      summary:
        "The 2026 edition brought performance, culture and people into the streets of Quigney. Relive the moments from that year.",
      image: festivalMedia.poster2026,
    },
    {
      year: 2027,
      status: "upcoming",
      theme: "SAND & SEA",
      dates: festivalDates.display,
      location: festivalLocation.display,
      summary:
        "TQCF returns to Caxton and Burns Streets in February 2027. More programme announcements and festival details are on the way.",
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
      "The Quigney Culture Festival",
      "TQCF 2027",
      "KuGompo festival",
      "Quigney events",
      "Eastern Cape culture festival",
      "live music KuGompo",
      "cultural experiences KuGompo",
    ],
  },
} as const;
