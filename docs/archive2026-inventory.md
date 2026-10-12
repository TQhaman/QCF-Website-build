# Relive TQCF 2026 — implementation and evidence inventory

Reviewed 8 October 2026. The first `/2026` archive is implemented locally. No
commit, push, deployment, CMS, package installation or artist-profile route is
included in this task.

This document records the initial archive build. The subsequent refinement and
current rendered-image inventory are recorded in `archive2026-refinement.md`.

## Scope and page structure

The archive communicates festival, people, culture and place, not a verified
lineup or a gallery alone. Its order is:

1. Archive Hero — Relive 2026 / The first chapter.
2. 2026 in Numbers.
3. Compact, non-sticky archive navigation.
4. Highlights.
5. Artists & 2026 Announcements.
6. Fashion & Visual Culture.
7. Food, Traders & Makers.
8. People & Community.
9. 2026 Partners & Supporters.
10. Gallery.
11. Existing Footer, with historical dates and explicit 2027 ticket wording.

The global Navbar retains its five destinations and existing menu behavior.
On the archive these resolve to `/#festival`, `/#programme`, `/#precinct`,
`/#get-involved` and `/#visit`. The seven archive shortcuts resolve within the
archive. Back to Top is reused. No second sticky navigation is introduced.

The homepage changes are limited to its two archive destinations:
`Relive 2026` and `Explore the 2026 Festival` now open `/2026`. The pending 2027
programme status remains non-interactive. Shared Navbar/Footer defaults retain
the existing homepage content and design.

## Files created and modified

Created:

- `src/app/2026/page.tsx`
- `src/app/2026/Archive.module.css`
- `src/app/2026/opengraph-image.tsx`
- `src/app/data/archive2026.ts`
- `src/app/types/archive.ts`
- `docs/archive2026-inventory.md`
- Sixteen image files under `public/images/2026/archive/`, listed below.

Modified:

- `src/app/data/festival.ts` — the two homepage archive hrefs only.
- `src/app/components/layout/Navbar.tsx` — optional edition-bar and ticket-label context.
- `src/app/components/layout/Navbar.module.css` — archive-only narrow-screen edition-bar wrapping.
- `src/app/components/layout/Footer.tsx` — optional date, location, year, navigation and ticket-label context.
- `src/app/sitemap.ts` — `/2026` entry.

No files were deleted. Source photographs and original artwork were not altered.

## Confirmed facts and their basis

| Fact | Evidence |
| --- | --- |
| Inaugural edition | Approved House 87 copy, also retained in the existing edition configuration |
| 27–28 February 2026 | Supplied customer-information page `11.55.22.jpeg` and announcement artwork |
| Caxton & Burns Streets, Quigney; House 87 and surrounding spaces | Customer-information page `11.55.22.jpeg` |
| More than 1,500 attendees | Approved House 87 edition copy |
| Approximately 75 work and market opportunities | Approved House 87 edition copy |
| Performance, fashion, food, art, markets, people and neighbourhood activity | Supplied photographs, intact announcement artwork and project-owner community context |

The statistics stay attached to 2026. No artist/vendor/stage count has been added.
Visible locality is Quigney, KuGompo City, consistent with the current brand rules.
Historical artwork is intact even where it contains older printed terminology.

## Visual treatment

The street Hero uses an archive-only CSS monochrome treatment. Its original
colour file remains unchanged. Lower-page photographs retain colour where it
communicates clothing, food, artwork, people and neighbourhood activity. The
announcement posters keep their original monochrome/coral design; they have
not been filtered or reconstructed.

Photography is borderless, with short historical captions. Natural image
proportions and `contain` preserve complete scenes, runway subjects, watermarks
and poster credits. Highlights and food use asymmetric compositions; artists
use editorial rules and prominent names; the gallery uses varied natural
proportions rather than a uniform service-card grid.

## Media rendered outside the artist records

Paths below are relative to `public/images`. All are 2026 material according to
the supplied project context, not inferred from the WhatsApp delivery date.

| Asset | Dimensions | Archive use |
| --- | --- | --- |
| `2026/place/quigney-festival-street.jpg` | 1280×854 | Hero; archive-only monochrome |
| `2026/archive/highlights/street-traders.jpg` | 1280×854 | Highlights: street trading and food |
| `2026/archive/highlights/art-stall.jpg` | 1280×920 | Highlights: art and people at a stall |
| `2026/WhatsApp Image 2026-10-06 at 13.27.55.jpeg` | 936×1280 | Neutral live-performance moment, separate from named records |
| `2026/Group_streetrunway.jpeg` | 854×1280 | Fashion: group/runway moment |
| `2026/Blue_dress_fashion.jpeg` | 854×1280 | Fashion: runway portrait |
| `2026/art-story/childrens-book-launch-poster.jpg` | 1280×1600 | Intact historical book-launch announcement |
| `2026/Vendor.jpeg` | 1280×854 | Food/hospitality serving window |
| `2026/markets/local-makers-art-stall.jpg` | 1280×854 | Makers: paintings and handmade work |
| `2026/archive/community/neighbourhood-work.jpg` | 1280×960 | Neighbourhood activity; no inferred worker identity |
| `2026/community/neighbourhood-painting.jpg` | 478×850 | Painting still; no autoplay video |
| `2026/Yellowdress_fashion.jpeg` | 854×1280 | Gallery: runway colour |
| `2026/Friendly_QCF.jpeg` | 1280×854 | Gallery: festival visitors |
| `2026/Bongiwe.jpeg` | 1280×854 | Gallery: performer facing audience; unnamed in public copy |
| `2026/archive/gallery/festival-conversation.jpg` | 1280×854 | Gallery: people talking between festival moments |
| `2026/archive/gallery/wall-painting.jpg` | 960×1280 | Gallery: community painting |

The five new photographic copies come from `Pictures/WhatsApp Image
2026-09-30 at … .jpeg`:

| Source suffix | New local asset |
| --- | --- |
| `13.32.26` | `archive/highlights/street-traders.jpg` |
| `13.32.27` | `archive/highlights/art-stall.jpg` |
| `14.38.40 (2)` | `archive/community/neighbourhood-work.jpg` |
| `13.32.29` | `archive/gallery/festival-conversation.jpg` |
| `14.38.40 (1)` | `archive/gallery/wall-painting.jpg` |

No independent named-vendor feature is inferred from a visible stall or clothing
brand. Food, traders and makers receive their own substantive section using
confirmed activity-based imagery and concise context. The named vendor dataset
remains empty.

## Eleven artist announcement records

Sources below are from `QCF 2026 media scouting materials/WhatsApp Image
2026-09-28 at … .jpeg`. Each is copied intact to
`public/images/2026/archive/announcements/`.

| Name | Source suffix | Local filename | Dimensions | Printed context |
| --- | --- | --- | --- | --- |
| Jabulile Majola | `11.55.18 (1)` | `jabulile-majola.jpg` | 1280×1600 | Announced 28 February 2026 |
| Bongeziwe Mabandla | `11.55.18` | `bongeziwe-mabandla.jpg` | 1350×1688 | Announced 28 February 2026 |
| Andile Yenana | `11.55.19 (1)` | `andile-yenana.jpg` | 1350×1688 | Announced 28 February 2026 |
| Internet Athi | `11.55.19` | `internet-athi.jpg` | 1280×1600 | Announced 28 February 2026 |
| Sisonke Xonti | `11.55.20 (1)` | `sisonke-xonti.jpg` | 1350×1688 | Announced 28 February 2026 |
| Herbie Tsoaeli | `11.55.20 (2)` | `herbie-tsoaeli.jpg` | 1350×1688 | Announced 28 February 2026 |
| Ayanda Sikade | `11.55.20` | `ayanda-sikade.jpg` | 1350×1688 | Announced 28 February 2026 |
| Dumza Maswama | `11.55.25 (1)` | `dumza-maswana.jpg` | 1350×1688 | Music Programme Director; announced 28 February 2026; spelling checked against the artwork during refinement |
| Sakhile Simani | `11.55.25 (2)` | `sakhile-simani.jpg` | 1350×1688 | Announced 28 February 2026 |
| Anita Rula | `11.55.25 (3)` | `anita-rula.jpg` | 1280×1600 | Lead Festival Host; announced 27–28 February 2026 |
| DJ Welo | `11.55.26 (2)` | `dj-welo.jpg` | 1280×1600 | Announced 28 February 2026 |

These are announcement records, **not proof that every artist performed**. The
section says so explicitly. Native `<details>` records default to collapsed;
expanded records show the artwork, an “As announced” date and full-size access.
There are no fabricated biographies, genres, quotes, setlists, venues or House
87 relationship histories. Optional future fields render only when populated.

## Historical partners: association evidence and artwork provenance

Each of the following records contains its own internal evidence reference to
`WhatsApp Image 2026-09-28 at 11.55.16.jpeg`, plus the historical date/context page
`11.55.22.jpeg`. This dataset is independent of the homepage's current list.

| Historical organisation | Identifiable mark in the supplied 2026 footer | Display artwork |
| --- | --- | --- |
| Presidential Employment Stimulus | Green emblem and Presidential Employment Stimulus wordmark | Existing local verified PNG |
| National Arts Council (NAC) | National Arts Council name and NAC mark | Existing local verified PNG |
| Coca-Cola | Coca-Cola script wordmark | Existing local verified PNG |
| Fridge Foods Group (FFG) | FFG / Fridge Foods Group wordmark | Existing local verified PNG |
| House 87 | House 87 wordmark | Text fallback; standalone approved logo still required |
| Cortex Hub | Cortex Hub wordmark | Existing local verified white PNG, dark backing |
| Eastern Cape Arts and Culture Department | Provincial crest and Province of the Eastern Cape Sport, Recreation, Arts & Culture wording | Existing local verified departmental PNG |

The existing `public/images/partners/README.md` records official logo-source
provenance. Official websites establish the artwork, not historical partnership.
The archive wall explicitly says these are historical associations, not a
statement of 2027 partnership status. No homepage partner claims are changed.

Additional marks, including the customer-pack Food Town/Medal wording and
signature-style mark, and poster marks such as iIMBONO/MBS, are not independently
reproduced. Their exact organisation names and supported historical roles require
House 87 confirmation. They remain intact inside original historical artwork.

## Scouting material inspected but reserved

The scouting inventory contains 50 JPEGs and two videos. Decisions below cover
the complete inventory. Source prefixes are `WhatsApp Image 2026-09-28 at ` or
`WhatsApp Video 2026-09-28 at `, with `.jpeg` or `.mp4` extensions.

- **Customer-information graphics, 22 JPEGs:** `11.54.00`, `11.54.00 (1)`,
  `11.54.01`, `11.54.02`; `11.55.16`, `11.55.16 (1)`, `11.55.16 (2)`;
  `11.55.17`, `11.55.17 (1)`, `11.55.17 (2)`; `11.55.21`, `11.55.21 (1)`,
  `11.55.21 (2)`; `11.55.22`, `11.55.22 (1)`, `11.55.22 (2)`;
  `11.55.23`, `11.55.23 (1)`, `11.55.23 (2)`; `11.55.24`, `11.55.24 (1)`,
  `11.55.24 (2)`. Information/evidence only, not public design assets. The pack's
  footer and historical date/location page support claims recorded above.
- **Eleven announcements:** integrated as listed above.
- **Children's book-launch poster, `11.55.26 (1)`:** existing production asset
  reused in the Fashion & Visual Culture section; explicitly an announcement.
- **Table of Belonging, `11.55.26`:** artwork dates it to 31 January 2026. Not
  presented as an activity of the February festival.
- **Historical contact graphic, `11.55.25`:** not published; contains historical
  contact information.
- **Literacy/community photographs, 14 JPEGs:** `12.50.40`, `12.50.46`,
  `12.50.57`, `12.51.08`, `12.51.20`, `12.51.20 (1)`, `12.51.20 (2)`,
  `12.51.21`, `12.51.21 (1)`, `12.51.22`, `12.51.23`, `12.51.24`,
  `12.51.25`, `12.51.26`. House 87 watermark alone does not establish the
  February event/date or participant identity. Reserved for context review.
- **Painting video, `11.55.15.mp4`:** 478×850, approximately 33 seconds,
  7,115,822 bytes. Existing still used; video remains outside production.
- **Brass performance video, `11.55.19.mp4`:** 368×464, approximately 56 seconds,
  8,125,980 bytes. Reserved until publication/credit approval; no public film slot.

Existing material also reviewed but not forced into the archive includes the
2026 overview poster, original crowd alternatives, warm-orange homepage variants,
the superseded `Jabu.jpeg`, illustrative layout-concept map, and additional
uncontextualised portraits. Existing homepage media and the map remain unchanged.

## Data, credits, future content and SEO

`archive2026.ts` centralises copy, facts, media, artists, historical partners and
gallery selections. It is server-only. Modest types reuse `FestivalMedia` and
support artists, vendors, highlights/stories, gallery media, factual evidence and
future videos. Evidence is separate from genuine public credits; no “unknown
photographer” labels or invented credits are shown.

Named vendors and videos remain empty datasets. Missing optional content omits
the associated field, not a visible “coming soon” biography, quote or video box.
No CMS is installed, but recurring records are ready for later content entry.

Metadata includes the factual archive title/description, canonical `/2026`, own
Open Graph/Twitter artwork and sitemap entry. The 2027 scheduled Event structured
data is not mounted here. Internal evidence does not enter public structured data
or the rendered HTML.

The existing environment-driven site URL is unchanged. Locally it falls back to
`http://localhost:3000`, so production canonical/social URLs still require:

`NEXT_PUBLIC_SITE_URL=https://THE_REAL_DEPLOYED_DOMAIN`

No production domain has been guessed.

## Verification and performance

- `npm run typecheck`: **PASS**, exit 0.
- `npm run lint`: **PASS**, exit 0.
- `npm run build`: **PASS**, exit 0; `/2026` and its Open Graph artwork prerender.
  Build used approved network access for the existing Google Fonts. A prior
  sandboxed attempt could not download those fonts; their configuration was not changed.
- Production browser review at **320, 375, 768, 1024 and 1440px**, after display
  fonts loaded: no horizontal overflow, clipped text, duplicate IDs or missing
  internal anchor targets. Mobile edition-bar wrapping is archive-only.
- Mobile menu opens/closes; Escape restores focus with a visible outline.
  Global navigation reaches the five actual homepage sections. Archive shortcuts
  reach their own sections without headings being obscured by the sticky header.
- Both homepage archive links open `/2026`.
- All eleven announcement records were expanded by keyboard and their complete
  posters loaded. Collapsing restores the compact editorial list. No empty
  biography, setlist or quote labels appear.
- Back to Top is keyboard operable, hidden at the top, and visible lower down.
  Existing reduced-motion handling is reused and reviewed in code/CSS; no OS
  preference change or assistive-technology certification was performed.
- Image/DOM checks: all 35 referenced image paths exist; no repeated image path
  within the archive; one Hero image preload and 34 default-lazy images (including
  collapsed poster records and brand marks). No video element/download is added.
- Every photograph/poster has accurate intrinsic dimensions and responsive
  `sizes`; the layout reserves natural ratios and preserves visible artwork.
- Newly copied source assets: **16 files, 2,895,000 bytes** total. This is source
  size, not measured optimised network transfer or a claimed Core Web Vitals score.
  Gallery and announcement media are not preloaded.
- Browser console error/warning review: none observed during the production
  archive/navigation checks. No missing image paths or fabricated fields found.
- Open Graph artwork loaded at 1200×630 with 2026 dates and locality.
- Keyboard focus, one H1, section heading hierarchy, observational alt text,
  external-link semantics and historical/current wording were reviewed. This is
  manual QA, not a complete screen-reader or automated accessibility audit.

Local visual-review images live outside the Git repository in the sibling
`media-review` folder, including `archive-desktop.jpg` and the announcement
contact sheet. No review screenshots are added to the production bundle.

## House 87 confirmations that would improve the next version

1. Final 2026 programme/run sheet: who actually performed, dates, venues and roles.
2. Named vendors, makers and hospitality participants, with participation evidence.
3. Designers/runway participants and confirmed art/book-activation outcomes.
4. Retrospective artist/vendor/community stories, approved quotes and attributions.
5. Exact context/date for the reserved literacy and January activation material.
6. Photography/video credits and approval to publish the remaining footage.
7. Approved standalone House 87 logo and identities/roles for additional historical marks.
8. Approved press/media coverage and links, if available.

Until these arrive, the archive remains an evidence-led first edition with no
invented retrospective details or empty participant/video sections.
