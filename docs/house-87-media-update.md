# House 87 warm-orange photography update

Reviewed on 7 October 2026. Targeted homepage media update; approved copy, sections, programme information and routes are unchanged. No `/2026` archive was started.

## Asset audit and matching

All ten supplied JPEGs were visually compared with existing homepage media before edits. The supplied list repeats `09.43.20 (1)`; the directory contains ten distinct files, including `09.43.20 (2).jpeg`. All subjects match existing 2026 photographs, so the historical year comes from those existing records, not the October delivery date or identification of people. No supplied file contains EXIF metadata.

Every source name below begins `WhatsApp Image 2026-10-07 at ` and ends `.jpeg`.

| Source suffix | Observed subject | Orientation / dimensions | Year | Best section and decision | Matching existing image |
| --- | --- | --- | --- | --- | --- |
| `09.43.18 (1)` | Paintings and handmade objects at a market table | Landscape, 1280 × 854 | 2026 | Experience / Markets & Makers: selected | `markets/local-makers-art-stall.jpg` |
| `09.43.18 (2)` | Single-storey house, front wall, people at entrance and pavement | Landscape, 1280 × 960 | 2026 | House 87 Culture Lab: selected | `community/neighbourhood-painting-landscape.jpg` |
| `09.43.18` | Tables and umbrellas along the festival street | Landscape, 1280 × 854 | 2026 | Story / Place: selected | `place/quigney-festival-street.jpg` |
| `09.43.19 (1)` | People around outdoor tables in the precinct | Landscape, 1280 × 854 | 2026 | Experience / People & Community: selected | `community/festival-gathering.jpg` |
| `09.43.19 (2)` | Guitar player facing an evening audience | Landscape, 1280 × 854 | 2026 | Experience / Music & Performance: selected | `Bongiwe.jpeg` |
| `09.43.19` | Person painting a wall below a window | Portrait, 478 × 850 | 2026 | Reserve for future `/2026` community coverage | `community/neighbourhood-painting.jpg` (already unused on homepage) |
| `09.43.20 (1)` | Model posing in a patterned dress before seated spectators | Portrait, 854 × 1280 | 2026 | Story / Culture: selected | `Yellowdress_fashion.jpeg` |
| `09.43.20 (2)` | Visitor at the serving window of a food trailer | Landscape, 1280 × 854 | 2026 | Experience / Food & Hospitality: selected | `Vendor.jpeg` |
| `09.43.20` | Model walking in a patterned dress | Portrait, 854 × 1280 | 2026 | Experience / Fashion & Design: selected following the user's screenshot request | Replaces the `Group_streetrunway.jpeg` slot; matches the original `Blue_dress_fashion.jpeg` photograph |
| `09.43.21` | Two smiling festival visitors with face paint | Landscape, 1280 × 854 | 2026 | Story / People: selected | `Friendly_QCF.jpeg` |

Selected files are stored under `public/images/2026/house-87/` with descriptive WebP names. Reserved files are also centrally catalogued but are not rendered or fetched by the homepage. The original supplied JPEGs and existing images remain intact.

## Existing imagery deliberately retained

- Hero: `WhatsApp Image 2026-10-06 at 13.27.42.jpeg`. Already supplied in a warm-orange treatment; the wide crowd view communicates the festival audience better than a portrait or individual subject.
- Story / Street: `WhatsApp Image 2026-10-06 at 13.27.55.jpeg`. Existing warm-orange performance photograph retained as a distinct festival moment, alongside the street view in Place.
- The original `Group_streetrunway.jpeg` is preserved for future archive use. At the user's request, its Experience / Fashion & Design slot now uses the supplied `09.43.20.jpeg` portrait.
- Experience / Art & Story: `art-story/childrens-book-launch-poster.jpg`. Documents the historical storytelling activation. Its whole artwork is preserved using its native portrait ratio; its named artist and partners appear only within clearly labelled 2026 material.
- Festival Map: `maps/festival-layout-concept.jpg`. Informative map artwork retained in full, with its existing illustrative/non-confirmed-2027 caption and full-size link.
- Navbar/Footer festival marks and six partner logos are unchanged. This update introduces no new current-partner claims.

## Homepage media inventory

- Hero: one filled photograph.
- Story: four filled photographs supporting Street, Culture, People and Place.
- Experience: all six categories retain relevant, filled imagery.
- Festival Map: one filled map artwork slot.
- Culture Lab: one filled photograph. The Born at House 87 organiser entry has no existing media slot.
- Editions, Get Involved, Stay Updated, Programme and Visit: no existing media slots; no new images or placeholders were added.
- Existing brand and partner mark slots remain filled. House 87's partner entry is text by design.

## Presentation and metadata

All photographs use `next/image` and `object-fit: cover`. Experience photo frames are borderless; portrait runway and book artwork frames use the original width/height ratio, avoiding stretching, filler and loss of full-body/artwork content. Experience historical captions are restrained text below the frame rather than black overlays. Unavailable optional Experience images omit their figure entirely, so there is no empty placeholder fallback.

Existing central crop positions are preserved for the matching subjects: guitar player at left centre, fashion portrait at centre bottom, other replacements at centre. At desktop widths, feature media sits above its copy within the existing 7/5-column card grid. Music and Markets landscape frames use their native ratio, preserving the audience and display table instead of forcing those scenes into tall portrait crops; portrait frames retain their own native ratio. This targeted media rebalance avoids large filler areas alongside narrow images. Culture Lab media is constrained to its column, and its `sizes` matches the actual frame width.

Central media records include observational alt text, exact original source filenames, 2026 context and credit for the designer-supplied warm-orange treatment. The treatment credit does not assert photographer identity. No CSS filters, artificial orange overlays, recolouring, stretching or added identities were used.

## Performance

WebP conversion uses quality 85 with no resizing or colour adjustment. The nine homepage replacements total **1,747,896 bytes**, compared with **1,819,084 bytes** for the nine previous files: a **3.9% reduction in source-file size**. This is a source-size comparison, not a claim about measured network transfer. Browser requests use Next.js image optimisation and responsive `sizes`. Non-Hero images remain lazy; Hero is the only photograph preloaded. Experience `sizes` follows the 24px mobile shell inset and the final desktop card widths. Only the wall-painting portrait remains reserved from the new supply.

## Verification

The final production build was reviewed in headless Microsoft Edge using fresh pages at each viewport. Screenshots of all rendered main-page images and the Experience section were captured. All 19 images in main (12 photos/artwork slots, one map and six partner marks) loaded at every width; the two Navbar/Footer brand marks were separately inspected in the asset audit. Browser page errors: none.

| Viewport | Result |
| --- | --- |
| 320px | Pass: relevant subjects visible, portrait bodies/artwork complete, no stretched photos or filler, no horizontal page overflow |
| 375px | Pass: same checks |
| 768px | Pass: same checks; narrow Food/Community crops retain their subjects |
| 1024px | Pass: same checks; Culture Lab frame is 407px and requests a 640px optimised image |
| 1440px | Pass: same checks; Music audience and maker display remain visible; Culture Lab requests 384px for its 347px frame |
| 1920px | Pass: same checks beyond the requested desktop width |

The map and poster remain fully visible. Every retained homepage media slot is filled. The existing Cortex Hub mark intentionally scales within an overflow-hidden logo frame; it causes no page overflow and was unchanged. The browser confirmed that all non-Hero images retain lazy loading and that only Hero has an image preload.

Final commands:

- `npm run typecheck`: **PASS**, exit 0.
- `npm run lint`: **PASS**, exit 0.
- `npm run build`: **PASS**, exit 0; homepage and existing metadata routes prerender successfully. The final build used network access for the existing Google Fonts after a sandbox download failed; font configuration was unchanged.
- `git diff --check`: **PASS**.

Local review evidence is retained in the sibling `media-review` directory: `new-assets.png`, `existing-assets.png`, `photos-{width}.png`, `experience-{width}.png`, `responsive-results.json` and the review script. Original source photographs and the pre-existing untracked brand-kit PDF were untouched.
