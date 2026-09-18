# QCF Milestone 1 — Visual Foundation

This milestone replaces the generic small-business homepage with a Quigney Culture Festival prototype foundation.

## Built

- QCF-specific navigation and edition bar
- 2027 festival hero with confirmed date/location placeholders and edition direction
- Alternating festival-story section inspired by the team's preferred vertical editorial rhythm
- 2026 → 2027 edition bridge to establish an archive/current-edition content model
- QCF design tokens: cream, ink, coral, green, condensed display typography
- Typed festival content data in `src/app/data/festival.ts`
- Updated metadata, Open Graph image, manifest, and Event structured data
- Mobile-first responsive CSS and reduced-motion support
- 2026 QCF artwork included only in the historical edition section

## Intentionally not built yet

- Final 2027 hero imagery
- Final QCF logo treatment
- Programme cards / schedule
- Experience/category grid
- Quigney precinct section / map
- Get Involved section
- Plan Your Visit section
- CMS integration
- Ticketing integration
- Final contact/social/partner information

These are waiting for approved assets, programme details, and team feedback.

## Development checks

- `npm run typecheck` — passes
- `npm run lint` — passes
- `npm run build` could not be completed in the ChatGPT container because the uploaded `node_modules` came from Windows and Next.js attempted to download the Linux SWC binary, while the container has no external network access. Run `npm run build` locally on your machine before deploying.

## Local run

```bash
npm run dev
```

For production metadata, set:

```env
NEXT_PUBLIC_SITE_URL=https://your-final-domain.example
```

Until then it falls back to `http://localhost:3000`.
