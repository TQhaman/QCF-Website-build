import type {
  FestivalContact,
  FestivalEdition,
  FestivalExperience,
  FestivalMedia,
  InvolvementPath,
  LinkItem,
  OrganiserCredit,
  Partner,
  PrecinctFeature,
  ProgrammeDay,
  ProgrammeCategory,
  ProgrammeEntry,
  StoryBeat,
  VisitFact,
  VisitInformationItem,
} from "@/app/types/festival";

const developmentSiteUrl = "http://localhost:3000";

// Production deployments must provide NEXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? developmentSiteUrl;

const festivalDates = {
  display: "26–27 February 2027",
  footerDisplay: "26 – 27 February 2027",
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
  displayCity: "KuGompo City",
  region: "Eastern Cape",
  countryCode: "ZA",
  secondary: "Quigney, KuGompo City",
  display: "Caxton & Burns Streets, Quigney, KuGompo City",
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
  childrensBookLaunchPoster: {
    src: "/images/2026/art-story/childrens-book-launch-poster.jpg",
    alt: "Poster promoting a children’s book launch at the 2026 festival",
    width: 1280,
    height: 1600,
    year: 2026,
    role: "historical art and storytelling activation",
    orientation: "portrait",
    objectPosition: "center",
  },
  neighbourhoodPainting: {
    src: "/images/2026/community/neighbourhood-painting.jpg",
    alt: "A volunteer painting the exterior wall of a building near the festival precinct",
    width: 478,
    height: 850,
    year: 2026,
    role: "community participation and neighbourhood activity",
    orientation: "portrait",
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
    "The Quigney Culture Festival brings music, food, fashion, art, design and community to the streets of Quigney, KuGompo City.",
  media: festivalMedia,
  navItems: [
    siteLinks.festival,
    siteLinks.programme,
    siteLinks.precinct,
    siteLinks.getInvolved,
    siteLinks.visit,
  ] satisfies LinkItem[],
  hero: {
    kicker: "Where culture meets the street",
    title: "The Quigney Culture Festival",
    statement:
      "Music, food, fashion, art, innovation and community take over the streets of Quigney for two days of culture in motion.",
    image: festivalMedia.crowd,
    programmeCta: {
      label: "Explore 2027",
      href: siteLinks.programme.href,
    } satisfies LinkItem,
    archiveCta: {
      label: "Relive 2026",
      href: "#editions",
    } satisfies LinkItem,
  },
  storyBeats: [
  {
    kicker: "01 / Street",
    title: "The streets become part of the festival.",
    copy:
      "TQCF unfolds through Quigney, with performance, food, markets and gathering spaces extending the experience beyond a single stage.",
    mediaLabel: "TQCF 2026 / Live in the street",
    tone: "ink",
    image: festivalMedia.performanceStage,
  },
  {
    kicker: "02 / Culture",
    title: "Music, food, fashion and art share the street.",
    copy:
      "Music meets food, fashion, visual art, design, storytelling and innovation — different cultural expressions coming together in one precinct.",
    mediaLabel: "TQCF 2026 / Runway and design",
    tone: "ochre",
    image: festivalMedia.fashionYellow,
  },
  {
    kicker: "03 / People",
    title: "The festival is shaped by its people.",
    copy:
      "Artists, residents, visitors, vendors and local creatives shape TQCF through what they perform, make, share and experience together.",
    mediaLabel: "TQCF 2026 / Festival faces",
    tone: "green",
    image: festivalMedia.people,
  },
  {
    kicker: "04 / Place",
    title: "Quigney is more than the location.",
    copy:
      "Its streets, buildings, businesses and public spaces give TQCF its character and become part of the festival experience.",
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
    mediaLabel: "TQCF 2026 / Children’s book launch",
    tone: "sand",
    layout: "feature",
    image: festivalMedia.childrensBookLaunchPoster,
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
    "The 2027 programme will bring music, performance, food, fashion, art, enterprise and other experiences into the Quigney festival precinct.",

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

  entries: [] satisfies ProgrammeEntry[],
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
  visitCta: {
    label: "Plan your visit",
    href: siteLinks.visit.href,
  } satisfies LinkItem,
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
    "TQCF 2027 comes to Caxton and Burns Streets in Quigney, KuGompo City.",
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
  information: [
    {
      label: "Getting there",
      copy: "Travel information will be shared closer to the festival.",
    },
    {
      label: "Accessibility",
      copy: "Accessibility information will be shared closer to the festival.",
    },
    {
      label: "Family information",
      copy: "Age and family guidance will be shared closer to the festival.",
    },
  ] satisfies VisitInformationItem[],
  ticketTitle: "Get your tickets",
  ticketCopy: "Tickets for TQCF 2027 are available through FIXR.",
  ticketLabel: "Get tickets",
  ticketUnavailable: "Ticket sales are currently unavailable.",
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

organiserCredits: [
  {
    heading: "Born at House 87",
    role: "Organiser and curator",
    copy:
      "The Quigney Culture Festival is organised and curated by House 87. Born at House 87 in Quigney, TQCF extends its culture-led hospitality and programming into the surrounding streets.",
  },
  {
    heading: "House 87 Culture Lab",
    role: "Social-impact partner",
    copy:
      "House 87 Culture Lab is the festival’s social-impact wing and partner, supporting youth development, creative skills, enterprise and community participation.",
    mediaLabel: "TQCF 2026 / Community in the precinct",
    image: festivalMedia.neighbourhoodPainting,
  },
] satisfies OrganiserCredit[],

footer: {
  tagline: "Culture in the street. Quigney in the story.",
  date: festivalDates.footerDisplay,
  location: festivalLocation.display,
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
      dates: "27–28 February 2026",
      title: "Relive 2026",
      location: festivalLocation.display,
      summary:
        "More than 1,500 people joined the inaugural TQCF, creating approximately 75 work and market opportunities across the festival precinct.",
      ctaLabel: "Explore the 2026 Festival",
      ctaHref: null,
      image: festivalMedia.poster2026,
    },
    {
      year: 2027,
      status: "upcoming",
      dates: festivalDates.display,
      title: "What comes next",
      location: festivalLocation.display,
      summary:
        "TQCF returns to Caxton and Burns Streets with two days of music, food, fashion, art, enterprise and shared cultural experiences.",
      ctaLabel: "Programme announcements coming soon",
      ctaHref: null,
    },
  ] satisfies FestivalEdition[],
  contact: {
    email: null,
    whatsappDisplay: "067 126 6242",
    whatsappUrl: "https://wa.me/27671266242",
    ticketUrl:
      "https://fixr.co/event/the-quigney-culture-festival-tickets-239554709",
    instagramUrl: "https://www.instagram.com/thequigneyfest",
    facebookUrl: null,
    tiktokUrl: "https://www.tiktok.com/@thequigneyfest",
    newsletterUrl: null,
  } satisfies FestivalContact,
  seo: {
    keywords: [
      "The Quigney Culture Festival",
      "QCF 2027",
      "KuGompo festival",
      "Quigney events",
      "Eastern Cape culture festival",
      "live music KuGompo",
      "cultural experiences KuGompo",
      "festival",
    ],
  },
} as const;
