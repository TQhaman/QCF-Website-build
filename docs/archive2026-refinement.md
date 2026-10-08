# TQCF 2026 archive refinement — 9 October 2026

## Outcome and scope

The archive now ends after People & Community with a compact coral **The story continues.** treatment. **Explore TQCF 2027 →** is its primary black/cream action to `/`; the existing central FIXR URL supplies the secondary **Get 2027 tickets ↗** link. The homepage's **Relive 2026** headline remains, with a distinct **Explore the 2026 Archive →** button to `/2026`. The whole card is not a link, and the upcoming 2027 card is unchanged.

Rendered Partners and Gallery sections, their anchors, sub-navigation items and presentation CSS have been removed. Their historical datasets, evidence references and media files remain available internally. No current homepage partner configuration, Footer, global Navbar, Back to Top, public types, packages or routes were changed by this refinement. Existing uncommitted first-build work was preserved. No commit, push or deployment was performed.

Final section order: Hero → Numbers → archive sub-navigation → Highlights → Artists & 2026 Announcements → Fashion & Visual Culture → Food, Traders & Makers → People & Community → The story continues → existing Footer.

Final sub-navigation: **Highlights / Artists / Fashion & Art / Food & Makers / Community**.

## Inventory method

The original inventory was captured at 1440px desktop with display fonts loaded and artist records closed. Ordinals describe the editorial photographs/artwork in **visual**, not DOM, order. Brand logos, historical partner marks and artwork inside closed artist records are accounted for separately below. Every path is relative to `public/images/` unless noted.

Source paths and full SHA-256 digests were compared. Tables show the first twelve digest characters for readability. Different hashes do not prove different photographs: original-colour and House 87 warm-orange versions were also compared visually.

### Before — desktop editorial image order

| # | Source | Section | SHA-256 prefix | Shared with homepage? | Disposition |
|---|---|---|---|---|---|
| 1 | `2026/place/quigney-festival-street.jpg` | Hero | `5276bd2b4c28` | Same photograph, warm-orange version | Replace with conversation |
| 2 | `2026/archive/highlights/street-traders.jpg` | Highlights | `95841139c4cf` | No | Move to Food; replace here with street gathering |
| 3 | `2026/archive/highlights/art-stall.jpg` | Highlights | `dc73c89b7eda` | No | Retain |
| 4 | `2026/WhatsApp Image 2026-10-06 at 13.27.55.jpeg` | Artists | `954eadae00ae` | Exact source | Replace with neutral performance photograph |
| 5 | `2026/Group_streetrunway.jpeg` | Fashion | `6d7ff391749a` | No | Retain |
| 6 | `2026/Blue_dress_fashion.jpeg` | Fashion | `6db8296f7c7a` | Same photograph, warm-orange version | Remove under approved two-visual treatment |
| 7 | `2026/art-story/childrens-book-launch-poster.jpg` | Fashion | `53f169d8614e` | Exact artwork | Replace with overview artwork |
| 8 | `2026/Vendor.jpeg` | Food | `34088f46da19` | Same photograph, warm-orange version | Replace with street traders |
| 9 | `2026/markets/local-makers-art-stall.jpg` | Food | `6a75c4ca1132` | Same photograph, warm-orange version | Replace with bead market stall |
| 10 | `2026/archive/community/neighbourhood-work.jpg` | Community | `19f15369e1dd` | No | Retain |
| 11 | `2026/community/neighbourhood-painting.jpg` | Community | `8898a2a3b204` | Not currently rendered there | Replace with House 87 group |
| 12 | `2026/Yellowdress_fashion.jpeg` | Gallery | `4cd0d9290abb` | Same photograph, warm-orange version | Remove with Gallery |
| 13 | `2026/Friendly_QCF.jpeg` | Gallery | `96e5c9dffe8f` | Same photograph, warm-orange version | Remove with Gallery |
| 14 | `2026/archive/gallery/festival-conversation.jpg` | Gallery | `1dfb6a4365d5` | No | Move to Hero only |
| 15 | `2026/Bongiwe.jpeg` | Gallery | `4876108a047d` | Same photograph, warm-orange version | Remove with Gallery |
| 16 | `2026/archive/gallery/wall-painting.jpg` | Gallery | `b7bfc04ef8c1` | No | Retain file, no longer render |

Gallery's original CSS placed the conversation photograph before the performance photograph visually, despite their reverse DOM order. The requested positions 14/15 were mapped to those actual sources before removal.

Before: **15 photographs + one cultural poster**, no repeated archive source paths or exact photographic hashes, but **eight photographs shared with the homepage**, plus one shared poster. Eleven unique artist announcement posters existed inside closed records; six historical partner logos and two brand logos were separate from the editorial ordinal list.

### Requested replacement mapping

| Original # | Old source | New source / final disposition | Section |
|---|---|---|---|
| 1 | `quigney-festival-street.jpg` | `archive/gallery/festival-conversation.jpg` | Hero |
| 4 | `WhatsApp Image 2026-10-06 at 13.27.55.jpeg` | `2026/Jabu.jpeg`, described without identifying the performer | Artists |
| 6 | `Blue_dress_fashion.jpeg` | Removed; Fashion uses two visuals | Fashion |
| 7 | `childrens-book-launch-poster.jpg` | `images/qcf/qcf-2026-poster.jpg` | Historical visual identity/artwork |
| 8 | `Vendor.jpeg` | `archive/highlights/street-traders.jpg` | Food |
| 9 | `local-makers-art-stall.jpg` | `archive/food/bead-market-stall.jpg` | Food |
| 11 | `neighbourhood-painting.jpg` | `archive/community/volunteers-house87.jpg` | Community |
| 12 | `Yellowdress_fashion.jpeg` | Removed with Gallery | Gallery |
| 13 | `Friendly_QCF.jpeg` | Removed with Gallery | Gallery |
| 15 | `Bongiwe.jpeg` | Removed with Gallery | Gallery |

The relocated trading image was replaced in Highlights by `street-gathering.jpg`; no duplicate was introduced by relocation. The old conversation Gallery record remains internal but is not rendered again.

### After — desktop visual order at 1440px

| # | Source | Section | Dimensions | SHA-256 prefix |
|---|---|---|---|---|
| 1 | `2026/archive/gallery/festival-conversation.jpg` | Hero | 1280×854 | `1dfb6a4365d5` |
| 2 | `2026/archive/highlights/street-gathering.jpg` | Highlights | 1280×854 | `416338a972e3` |
| 3 | `2026/archive/highlights/art-stall.jpg` | Highlights | 1280×920 | `dc73c89b7eda` |
| 4 | `2026/Jabu.jpeg` | Artists | 1280×854 | `71687280221c` |
| 5 | `qcf/qcf-2026-poster.jpg` | Historical visual identity/artwork | 1500×750 | `ca97f260f3d7` |
| 6 | `2026/Group_streetrunway.jpeg` | Fashion | 854×1280 | `6d7ff391749a` |
| 7 | `2026/archive/highlights/street-traders.jpg` | Food | 1280×854 | `95841139c4cf` |
| 8 | `2026/archive/food/bead-market-stall.jpg` | Makers | 1280×854 | `7de989e504ae` |
| 9 | `2026/archive/community/neighbourhood-work.jpg` | Community | 1280×960 | `19f15369e1dd` |
| 10 | `2026/archive/community/volunteers-house87.jpg` | Community | 960×1280 | `557886f78151` |

Fashion's vertically centred landscape artwork begins higher than its portrait neighbour on desktop; therefore its desktop visual ordinal is 5, although the runway is first in DOM/mobile reading order. Both remain complete rather than cropped.

After: **nine photographs, nine unique photographs, zero duplicate photographic paths/hashes, zero homepage-shared photographs**. There is one overview artwork plus eleven unique announcement posters. With two brand logos, the closed-record DOM contains 23 image elements; the eleven collapsed artworks are not visible until expansion. Logo reuse is intentional and excluded from photographic uniqueness.

### Colour-treated duplicates identified during the audit

| Original archive source | Homepage version of the same photograph |
|---|---|
| `2026/place/quigney-festival-street.jpg` | `2026/house-87/quigney-festival-street.webp` |
| `2026/Blue_dress_fashion.jpeg` | `2026/house-87/fashion-blue.webp` |
| `2026/Vendor.jpeg` | `2026/house-87/food-vendor.webp` |
| `2026/markets/local-makers-art-stall.jpg` | `2026/house-87/local-makers-art-stall.webp` |
| `2026/Yellowdress_fashion.jpeg` | `2026/house-87/fashion-yellow.webp` |
| `2026/Friendly_QCF.jpeg` | `2026/house-87/festival-visitors.webp` |
| `2026/Bongiwe.jpeg` | `2026/house-87/performance-audience.webp` |

The previous Artist photo was additionally an exact homepage source. `Soley_Crowd.jpeg` and the homepage Hero's warm-orange `13.27.42.jpeg` also show the same underlying crowd photograph; neither is used in the revised archive. The new street-gathering photograph is distinct from the homepage's `festival-gathering.webp` scene, despite similar subjects.

Visual comparisons were reviewed in the existing `media-review/existing-assets.png` and `media-review/new-assets.png` contact sheets outside the Git repository. Different colour treatment was not counted as unique photography.

## New production assets and provenance

Only three new binary files were copied. Each destination matches the full SHA-256 of its supplied original; no source image, watermark, logo or credit was edited.

| Supplied source in `Pictures/` | Production destination | Bytes | Full SHA-256 |
|---|---|---|---|
| `WhatsApp Image 2026-09-30 at 13.32.25.jpeg` | `public/images/2026/archive/highlights/street-gathering.jpg` | 230270 | `416338a972e3bfc6f5ae2bd8ccfdbcfaa375b0e0ca48d3b59cb4309cedc2e9c2` |
| `WhatsApp Image 2026-09-30 at 13.32.28.jpeg` | `public/images/2026/archive/food/bead-market-stall.jpg` | 206458 | `7de989e504ae1622c900828c6bec57ce5b57b4c42b78942e39a64ca57099de58` |
| `WhatsApp Image 2026-09-30 at 14.42.49.jpeg` | `public/images/2026/archive/community/volunteers-house87.jpg` | 255856 | `557886f78151852e9ee0baa4b64099e910892afe0fe953a19f2b5389df205ed0` |

Media, observational alt text, captions and internal evidence are centralised in `archive2026.ts`. No individual, business, sponsor or campaign identity was inferred from a photograph. The two unconfirmed `13.54.54` photographs remain unpublished. Removed imagery remains available for future editorial use, not deleted.

Hero uses the conversation photograph for foreground interaction with visible street activity, rather than the more table-led gathering scene. Its grayscale treatment exists only in archive CSS; the source remains original colour. Lower-page photography remains in original colour.

Fashion has one runway/group image and the intact historical overview poster. Its introduction explicitly calls the poster **original 2026 festival artwork**. The printed 28 February date, original logos and credits remain untouched, with a full-size link. It is not presented as a fashion photograph, a verified run sheet or evidence that every pictured artist performed.

Food receives two distinct visuals: food/trading tents and beaded goods. Community receives neighbourhood work and a separate group beside paint buckets outside House 87. No named vendor stories, retrospective quotes or new programme details were invented.

## Artist presentation and spelling audit

The introduction now balances copy and a landscape performance photograph, capped at 28rem. Native announcement records occupy two independent columns from 768px and one column on mobile. Opening a record expands its own column rather than leaving empty equal-height rows in its neighbour. Condensed names, announcement labels, verified roles and expansion indicators remain; empty fields do not render.

All eleven supplied announcement artworks were checked:

| Public record | Result |
|---|---|
| Jabulile Majola | Matches artwork |
| Bongeziwe Mabandla | Matches artwork |
| Andile Yenana | Matches artwork |
| Internet Athi | Matches artwork |
| Sisonke Xonti | Matches artwork |
| Herbie Tsoaeli | Artwork prints **Tsoaeli**, conflicting with requested **Tsozeli**; printed spelling retained for human review |
| Ayanda Sikade | Matches artwork |
| Dumza Maswama | Corrected from Maswana to **Maswama**, matching supplied `11.55.25 (1)` artwork |
| Sakhile Simani | Matches artwork |
| Anita Rula | Matches artwork |
| DJ Welo | Matches artwork |

Dumza's generated public alt text and evidence now follow the corrected name. Existing `dumza-maswana` record ID and filename were preserved to avoid pointless path changes. Music Programme Director and Lead Festival Host remain the only printed role additions. Announced dates remain announcements, not confirmed completed performance dates.

## Responsive, functional and accessibility review

Production output was reviewed with real display fonts loaded, not fallback-font screenshots.

| Width | Artist record columns | Archive overflow / clipped headings | Homepage archive CTA |
|---|---|---|---|
| 320px | One | None | About 60px tall, clean two-line label |
| 375px | One | None | 48px tall |
| 768px | Two independent columns | None | 48px tall |
| 1024px | Two; balanced introduction | None | 48px tall |
| 1440px | Two; performance image capped at 448px | None | 48px tall |

Reserved intrinsic image dimensions and `height: auto` preserve natural proportions. Meaningful subjects, original watermarking and full poster artwork remain visible; no new cover crop or distortion was introduced. Portrait media is capped rather than stretched into oversized mobile containers.

Verified:

- All five archive sub-navigation links resolve to existing sections; removed Partners/Gallery anchors are absent.
- The global five-link navigation reaches the homepage Festival, Programme, Festival Map, Get Involved and Visit sections. Mobile selection closes the menu.
- Escape closes the menu at 320, 375 and 768px and returns focus to its button.
- All eleven artist records open and close by keyboard; announcement artwork loads and full-size links remain present. Tablet/mobile expansion and visible focus were checked.
- Both homepage archive actions reach `/2026`. The new button, not the whole card, is interactive. The 2027 programme-announcement status remains non-interactive.
- The closing primary link reaches `/`; its secondary ticket link uses the central FIXR URL, `_blank`, `noopener noreferrer` and an accessible external-link name. Ticket purchase was not attempted.
- Full-size historical overview artwork opens the original 1500×750 image in a new tab.
- Back to Top appears lower down, returns to scroll position zero and hides near the top.
- No duplicate IDs, missing local anchor targets, broken editorial images, empty sections or browser console errors/warnings were found.
- Existing heading hierarchy, skip link, semantic figures, historical captions, native disclosure semantics and two-colour focus treatment remain.
- Reduced-motion handling was reviewed in the unchanged BackToTop and global CSS implementation. No operating-system preference was changed; this is not a full accessibility certification.

Proof screenshots are outside Git in the workspace's `media-review/`: `archive-artists-desktop.jpg`, `archive-closing-desktop.jpg`, `archive-closing-mobile.jpg`, and `homepage-archive-button-mobile.jpg`.

## Performance and commands

Next.js Image remains in use with corrected intrinsic dimensions and responsive `sizes`. Only the conversation Hero is image-preloaded. Lower-page editorial imagery and announcement artwork use lazy loading; no videos or social embeds load. Nine distinct photographic sources avoid repeated-photo downloads within the archive. Newly copied original assets total **692584 bytes** before Next image optimisation; no measured Lighthouse/LCP score is claimed.

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed; `/2026` remains statically generated.
- `git diff --check`: passed (only repository line-ending notices).

## Files touched by this refinement

- `src/app/data/archive2026.ts`
- `src/app/2026/page.tsx`
- `src/app/2026/Archive.module.css`
- `src/app/data/festival.ts` — past-edition CTA label only beyond existing first-build archive links
- `src/app/components/sections/EditionBridge.tsx`
- `src/app/components/sections/EditionBridge.module.css`
- `docs/archive2026-inventory.md` — initial-build note and Dumza correction
- This report
- Three production photographs listed above

Pre-existing first-build changes to Navbar, Footer, sitemap, archive metadata/types and assets were not reverted or attributed to this refinement.

## Next confirmations

Resolve the Herbie Tsoaeli/Tsozeli discrepancy with House 87. The final 2026 run sheet, named vendors/designers, retrospective stories, media credits and video approval remain the valuable next content inputs. They are not replaced with invented data or public empty-field labels.
