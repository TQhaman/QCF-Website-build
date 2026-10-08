import "server-only";
import { festivalConfig } from "./festival";
import type { FestivalMedia, LinkItem } from "@/app/types/festival";
import type {
  ArchiveArtist, ArchiveEvidence, ArchiveFact, ArchiveHighlight,
  ArchiveMedia, ArchivePartner, ArchiveStory, ArchiveVendor, ArchiveVideo,
} from "@/app/types/archive";

const scoutingFolder = "QCF 2026 media scouting materials";
const announcementSource = (suffix: string) =>
  `${scoutingFolder}/WhatsApp Image 2026-09-28 at ${suffix}.jpeg`;
const pictureSource = (suffix: string) =>
  `Pictures/WhatsApp Image 2026-09-30 at ${suffix}.jpeg`;
const clientEvidence: ArchiveEvidence[] = [{
  source: "House 87 prototype-fitted copy, approved client-copy integration",
  supports: "Inaugural edition; more than 1,500 people; approximately 75 work and market opportunities. Also retained in festivalConfig.editions.",
}];
const editionEvidence: ArchiveEvidence[] = [{
  source: announcementSource("11.55.22"),
  supports: "Customer information pack: 27–28 February 2026, Caxton & Burns Streets, Quigney, including spaces inside House 87.",
}];
const communityEvidence: ArchiveEvidence[] = [{
  source: "Project owner’s supplied neighbourhood-painting context",
  supports: "2026 community activity around the festival streets, with volunteers and material support. No campaign name, precise date, counts or sponsor identities confirmed.",
}];

function photo(
  src: string, alt: string, width: number, height: number, role: string,
  source?: string,
): FestivalMedia {
  return {
    src, alt, width, height, year: 2026, role,
    orientation: height > width ? "portrait" : "landscape",
    objectPosition: "center", ...(source ? { source } : {}),
  };
}

export const archiveMedia = {
  street: photo("/images/2026/place/quigney-festival-street.jpg",
    "Tables and umbrellas extending along a street between Quigney buildings",
    1280, 854, "festival street and neighbourhood", pictureSource("13.32.26 (2)")),
  streetGathering: photo("/images/2026/archive/highlights/street-gathering.jpg",
    "People gathered around tables and colourful umbrellas along a street beside Quigney buildings",
    1280, 854, "festival gathering spaces and neighbourhood", pictureSource("13.32.25")),
  traders: photo("/images/2026/archive/highlights/street-traders.jpg",
    "People serving and browsing at food stalls under colourful tents along a street",
    1280, 854, "street trading and food", pictureSource("13.32.26")),
  artStall: photo("/images/2026/archive/highlights/art-stall.jpg",
    "Two people seated beside a table surrounded by colourful paintings on easels",
    1280, 920, "visual art and local makers", pictureSource("13.32.27")),
  performance: photo("/images/2026/Jabu.jpeg",
    "A guitar player performing on an outdoor stage in front of an evening audience",
    1280, 854, "historical performance and audience", "Supplied 2026 photograph: public/images/2026/Jabu.jpeg"),
  runway: photo("/images/2026/Group_streetrunway.jpeg",
    "People in patterned clothing gathered on the runway in front of seated spectators",
    854, 1280, "runway and fashion"),
  blueDress: photo("/images/2026/Blue_dress_fashion.jpeg",
    "A model walking in a patterned dress with seated spectators behind",
    854, 1280, "runway and design"),
  bookPoster: festivalConfig.media.childrensBookLaunchPoster,
  visualIdentity: {
    ...festivalConfig.media.poster2026,
    alt: "Historical 2026 festival announcement artwork with portraits, the printed 28 February date and original supporter marks",
    role: "historical 2026 visual identity and announcement artwork",
  },
  food: photo("/images/2026/Vendor.jpeg",
    "A visitor at the serving window of a food trailer",
    1280, 854, "food and hospitality"),
  makers: photo("/images/2026/markets/local-makers-art-stall.jpg",
    "Paintings and handmade objects displayed on an outdoor market table",
    1280, 854, "markets and makers", pictureSource("13.32.28 (1)")),
  beadStall: photo("/images/2026/archive/food/bead-market-stall.jpg",
    "Beaded jewellery displayed on a market table, with people behind the stall",
    1280, 854, "handmade goods and market trading", pictureSource("13.32.28")),
  neighbourhood: photo("/images/2026/archive/community/neighbourhood-work.jpg",
    "People in high-visibility clothing working along a pavement beside neighbourhood buildings",
    1280, 960, "neighbourhood participation", pictureSource("14.38.40 (2)")),
  painting: photo("/images/2026/community/neighbourhood-painting.jpg",
    "A person using a roller to paint an exterior wall below a window",
    478, 850, "neighbourhood painting", "Still from WhatsApp Video 2026-09-28 at 11.55.15.mp4"),
  communityGroup: photo("/images/2026/archive/community/volunteers-house87.jpg",
    "People gathered beside paint buckets outside the House 87 entrance",
    960, 1280, "community participation around House 87", pictureSource("14.42.49")),
  yellowDress: photo("/images/2026/Yellowdress_fashion.jpeg",
    "A model posing in a yellow patterned dress in front of seated spectators",
    854, 1280, "fashion moment"),
  visitors: photo("/images/2026/Friendly_QCF.jpeg",
    "Two smiling festival visitors with face paint",
    1280, 854, "festival attendees"),
  eveningPerformance: photo("/images/2026/Bongiwe.jpeg",
    "A guitar player seen from behind facing an evening audience",
    1280, 854, "live performance and audience"),
  conversation: photo("/images/2026/archive/gallery/festival-conversation.jpg",
    "Two people talking outdoors with festival stalls and umbrellas behind them",
    1280, 854, "people and street life", pictureSource("13.32.29")),
  wallPainting: photo("/images/2026/archive/gallery/wall-painting.jpg",
    "A person in high-visibility clothing painting an exterior wall with a roller",
    960, 1280, "community painting", pictureSource("14.38.40 (1)")),
} satisfies Record<string, FestivalMedia>;

function announcement(
  id: string, name: string, suffix: string, width: number, height: number,
  roleOrGenre?: string, announcedDate = "28 February 2026",
): ArchiveArtist {
  return {
    id, name, announcedDate, ...(roleOrGenre ? { roleOrGenre } : {}),
    poster: photo(`/images/2026/archive/announcements/${id}.jpg`,
      `2026 festival announcement artwork naming ${name}`, width, height,
      "historical participant announcement", announcementSource(suffix)),
    evidence: [{
      source: announcementSource(suffix),
      supports: `Printed name: ${name}; announced date: ${announcedDate}${roleOrGenre ? `; printed role: ${roleOrGenre}` : ""}. Announcement only, not confirmation of a completed performance.`,
    }],
  };
}

const artists: ArchiveArtist[] = [
  announcement("jabulile-majola", "Jabulile Majola", "11.55.18 (1)", 1280, 1600),
  announcement("bongeziwe-mabandla", "Bongeziwe Mabandla", "11.55.18", 1350, 1688),
  announcement("andile-yenana", "Andile Yenana", "11.55.19 (1)", 1350, 1688),
  announcement("internet-athi", "Internet Athi", "11.55.19", 1280, 1600),
  announcement("sisonke-xonti", "Sisonke Xonti", "11.55.20 (1)", 1350, 1688),
  // The supplied artwork prints Tsoaeli; the requested Tsozeli variant conflicts with it.
  announcement("herbie-tsoaeli", "Herbie Tsoaeli", "11.55.20 (2)", 1350, 1688),
  announcement("ayanda-sikade", "Ayanda Sikade", "11.55.20", 1350, 1688),
  announcement("dumza-maswana", "Dumza Maswama", "11.55.25 (1)", 1350, 1688, "Music Programme Director"),
  announcement("sakhile-simani", "Sakhile Simani", "11.55.25 (2)", 1350, 1688),
  announcement("anita-rula", "Anita Rula", "11.55.25 (3)", 1280, 1600, "Lead Festival Host", "27–28 February 2026"),
  announcement("dj-welo", "DJ Welo", "11.55.26 (2)", 1280, 1600),
];

// Historical association comes from the supplied 2026 artwork, independently
// of the homepage's current partner list. Official sources verify logos only.
function historicalPartner(
  id: string, name: string, footerMark: string, logo?: FestivalMedia, darkBackground?: boolean,
): ArchivePartner {
  return {
    id, name, ...(logo ? { logo } : {}), ...(darkBackground ? { darkBackground } : {}),
    evidence: [{
      source: announcementSource("11.55.16"),
      supports: `${name}: ${footerMark} is identifiable in the supplied customer-pack footer.`,
    }, ...editionEvidence],
  };
}

const logo = (file: string, name: string, width: number, height: number, source: string) =>
  photo(`/images/partners/${file}.png`, `${name} logo`, width, height, "partner mark", source);

const partners: ArchivePartner[] = [
  historicalPartner("presidential-employment-stimulus", "Presidential Employment Stimulus", "green emblem and Presidential Employment Stimulus wordmark",
    logo("presidential-employment-stimulus", "Presidential Employment Stimulus", 552, 120, "https://www.nac.org.za/resources/")),
  historicalPartner("national-arts-council", "National Arts Council (NAC)", "National Arts Council name and NAC mark",
    logo("national-arts-council", "National Arts Council (NAC)", 3508, 1240, "https://www.nac.org.za/resources/")),
  historicalPartner("coca-cola", "Coca-Cola", "Coca-Cola script wordmark",
    logo("coca-cola", "Coca-Cola", 573, 180, "https://www.coca-cola.com/za/en/brands/brand-coca-cola-drinks/product-coca-cola-original")),
  historicalPartner("fridge-foods-group", "Fridge Foods Group (FFG)", "FFG / Fridge Foods Group wordmark",
    logo("fridge-foods-group", "Fridge Foods Group (FFG)", 1802, 958, "https://foodfest.ffg.org.za/")),
  historicalPartner("house-87", "House 87", "House 87 wordmark"),
  historicalPartner("cortex-hub", "Cortex Hub", "Cortex Hub wordmark",
    logo("cortex-hub", "Cortex Hub", 594, 420, "https://www.thecortexhub.africa/"), true),
  historicalPartner("eastern-cape-department", "Eastern Cape Arts and Culture Department", "provincial crest and Province of the Eastern Cape Sport, Recreation, Arts & Culture wording",
    logo("eastern-cape-sport-arts-culture", "Eastern Cape Sport, Recreation, Arts and Culture", 263, 66, "https://www.ecsrac.gov.za/ecsrac-logo/")),
];

const homeCta = { label: "Explore TQCF 2027", href: "/" as const } satisfies LinkItem;

export const archive2026 = {
  year: 2026,
  dates: "27–28 February 2026",
  location: festivalConfig.event.location.display,
  locality: `Quigney · ${festivalConfig.event.location.displayCity}`,
  globalNav: festivalConfig.navItems.map((item) => ({ ...item, href: `/${item.href}` })),
  editionBar: { name: "TQCF 2026 / ARCHIVE", dates: "27–28 FEB", location: "QUIGNEY · KUGOMPO CITY", wrap: true },
  ticketLabel: "Get 2027 tickets",
  seo: {
    title: "Relive TQCF 2026",
    description: "Revisit the first edition of The Quigney Culture Festival, held on 27–28 February 2026 in Quigney, KuGompo City: performance, fashion, food, makers and community, with more than 1,500 attendees.",
    imageAlt: "Relive TQCF 2026 — the first chapter of The Quigney Culture Festival",
  },
  hero: {
    eyebrow: "TQCF / Archive", title: "Relive 2026", subtitle: "The first chapter.",
    intro: "The first edition of The Quigney Culture Festival brought performance, food, fashion, art and people into the streets of Quigney.",
    media: {
      image: archiveMedia.conversation, caption: "People in Quigney’s festival streets · TQCF 2026", monochrome: true,
      evidence: [{ source: pictureSource("13.32.29"), supports: "Supplied festival photograph shows two people talking with festival stalls and umbrellas behind them. No identities inferred." }],
    } satisfies ArchiveMedia,
    archiveCta: { label: "Explore the archive", href: "#highlights" },
    homeCta,
  },
  numbers: {
    label: "2026 in numbers",
    facts: [
      { value: "1,500+", label: "Attendees", evidence: clientEvidence },
      { value: "±75", label: "Work & market opportunities", evidence: clientEvidence },
      { value: "27–28 FEB", label: "Inaugural edition · 2026", evidence: editionEvidence },
    ] satisfies ArchiveFact[],
  },
  navLabel: "Explore the 2026 archive",
  navItems: [
    { label: "Highlights", href: "#highlights" }, { label: "Artists", href: "#artists" },
    { label: "Fashion & Art", href: "#fashion-art" }, { label: "Food & Makers", href: "#food-makers" },
    { label: "Community", href: "#community" },
  ] satisfies LinkItem[],
  highlights: {
    eyebrow: "Festival / People / Culture / Place", title: "More than one stage.",
    intro: "Music and performance were part of a wider street experience: food, fashion, visual art, markets and places to gather.",
    items: [
      { id: "street-life", title: "The street was part of it.",
        copy: "Caxton and Burns Streets brought the festival into Quigney’s everyday surroundings, alongside House 87 and neighbouring spaces.",
        media: { image: archiveMedia.streetGathering, caption: "Gathering places in Quigney’s streets · 2026" },
        evidence: [...editionEvidence, { source: pictureSource("13.32.25"), supports: "Supplied festival photograph shows people, tables, umbrellas and the surrounding built environment." }] },
      { id: "creative-expression", title: "Culture, close up.",
        copy: "Paintings, handmade objects and local trading sat alongside the performances — different ways to take part in the same festival.",
        media: { image: archiveMedia.artStall, caption: "Visual art in the festival streets · 2026" },
        evidence: [{ source: pictureSource("13.32.27"), supports: "Supplied festival photograph shows paintings, a display table and people." }] },
    ] satisfies ArchiveHighlight[],
  },
  announcements: {
    eyebrow: "The sound of Quigney / 2026", title: "Artists & 2026 Announcements",
    intro: "The names and artwork announced for 2026. These records are not a confirmed account of every completed performance.",
    recordLabel: "2026 announcement", announcedLabel: "As announced",
    artworkLabel: "View full-size announcement", setLabel: "Set highlights",
    connectionLabel: "House 87 connection", videoLabel: "Watch video",
    media: { image: archiveMedia.performance, caption: "A live performance moment · TQCF 2026" } satisfies ArchiveMedia,
    artists,
  },
  fashion: {
    id: "fashion-art", eyebrow: "Fashion & Visual Culture", title: "Style. Art. Stories.",
    copy: "Runway moments and original 2026 festival artwork show the inaugural edition’s visual character.",
    media: [
      { image: archiveMedia.runway, caption: "On the runway · 2026" },
      { image: archiveMedia.visualIdentity, caption: "2026 visual identity / Announcement artwork · 28 February 2026", evidence: [{ source: "public/images/qcf/qcf-2026-poster.jpg", supports: "Intact historical festival artwork prints the 2026 title and 28 February date. Artist portraits are announcement material, not proof of completed performances." }] },
    ],
  } satisfies ArchiveStory,
  fashionArtworkCta: { label: "View full-size 2026 artwork", href: archiveMedia.visualIdentity.src },
  food: {
    id: "food-makers", eyebrow: "Food, Traders & Makers", title: "Made. Served. Shared.",
    copy: "Food traders, makers and local businesses were part of the festival’s street life. Food stalls, market tables and handmade work gave people more to discover between performances.",
    media: [
      { image: archiveMedia.traders, caption: "Food and trading in the street · 2026", evidence: [{ source: pictureSource("13.32.26"), supports: "Supplied festival photograph shows people preparing and serving food at street stalls. No vendor identities inferred." }] },
      { image: archiveMedia.beadStall, caption: "Handmade goods at the market · 2026", evidence: [{ source: pictureSource("13.32.28"), supports: "Supplied festival photograph shows a market table with beaded jewellery. No independent named-vendor record or current contact claim inferred." }] },
    ],
  } satisfies ArchiveStory,
  vendors: [] as ArchiveVendor[],
  community: {
    id: "community", eyebrow: "People & Community", title: "With people. In Quigney.",
    copy: "Community participation also reached into the neighbourhood, with painting and activity around the festival streets — people taking part beyond the stage.",
    media: [
      { image: archiveMedia.neighbourhood, caption: "Neighbourhood activity · 2026", evidence: communityEvidence },
      { image: archiveMedia.communityGroup, caption: "Community around House 87 · 2026", evidence: [...communityEvidence, { source: pictureSource("14.42.49"), supports: "Supplied photograph shows a group outside House 87 beside paint buckets. No individual identities or sponsor roles inferred." }] },
    ], evidence: communityEvidence,
  } satisfies ArchiveStory,
  closing: {
    title: "The story continues.",
    copy: "2026 was the first chapter. See what’s next for TQCF 2027.",
    homeCta,
  },
  // Retained internally for future reference, not rendered in this archive revision.
  partners: {
    eyebrow: "2026 Partners & Supporters", title: "Part of the first chapter.",
    intro: "Organisations represented in the supplied 2026 festival material. These are historical associations, not a statement of 2027 partnership status.",
    listLabel: "2026 festival partners and supporters", items: partners,
  },
  // Keep useful gallery selections available without exposing a duplicate photo section.
  gallery: {
    eyebrow: "Gallery / Festival Moments", title: "Keep the moments.",
    intro: "The people, colour and street moments of the first edition.",
    items: [
      { image: archiveMedia.yellowDress, caption: "Runway colour · 2026" },
      { image: archiveMedia.visitors, caption: "Festival visitors · 2026" },
      { image: archiveMedia.eveningPerformance, caption: "Performance and audience · 2026" },
      { image: archiveMedia.conversation, caption: "Between festival moments · 2026" },
      { image: archiveMedia.wallPainting, caption: "Community painting · 2026", evidence: communityEvidence },
    ] satisfies ArchiveMedia[],
  },
  videos: [] as ArchiveVideo[],
};
