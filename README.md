# The Quigney Culture Festival

A Next.js App Router, React and TypeScript site for festival discovery, programme, visitor information and the 2026 archive.

| Route | Purpose |
| --- | --- |
| `/` | Festival introduction, editions, planning links and ticket handoff |
| `/festival` | Festival story, experiences and organisers |
| `/programme` | Pre-release information or the published schedule |
| `/visit` | Precinct and practical visitor information |
| `/get-involved` | Artist, trader and partnership pathways |
| `/2026` | Historical archive |

## Development

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the approved public HTTPS origin **at build time**. Local builds default to `http://localhost:3000`. The build fetches the configured Google Fonts.

## Publishing the programme

In `src/app/data/festival.ts`, add only approved records to `programmePreview.entries`. The pre-release view stays visible while the array is empty. Adding entries publishes a chronological schedule without editing the renderer.

- Use a unique `id`, `title`, `category`, configured `day` (exactly as written in `programmePreview.days`) and a 24-hour `startTime` in `HH:MM`.
- Add `endTime`, `venue`, `description` or `ticketUrl` only when confirmed. Event-specific links are optional; the festival ticket link is not substituted.
- Only days with entries are shown. Multiple populated days get in-page jump links. Unsupported days, invalid times, duplicate IDs and invalid ticket URLs fail validation during rendering/build.
- Run the checks above and verify the schedule, links and mobile layout in a production preview.

## Awaiting approval

The site shows 26–27 February 2027; the linked FIXR listing reviewed in the audit advertises 27 February. Confirm day and ticket coverage with the organiser before changing dates or promoting purchases. The map remains illustrative. Operational details, application destinations and the public production origin require approval.
