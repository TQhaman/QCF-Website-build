# Small Business Website Template

A production-ready `Next.js` + `TypeScript` starter for reusable small business websites. The homepage is assembled from modular sections, business content lives in one config file, and the project ships with SEO foundations out of the box.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Fastest Customization Path

Edit `src/app/config/site.ts`.

That file controls:

- Business name and legal name
- Phone, email, address, and service area
- Hero copy and CTA labels
- Services, about copy, and testimonials
- SEO keywords and social preview text

## Project Structure

```text
src/
  app/
    components/
      layout/
      sections/
      shared/
    config/
      site.ts
    lib/
      site.ts
    types/
      site.ts
    globals.css
    layout.tsx
    page.tsx
    manifest.ts
    opengraph-image.tsx
    robots.ts
    sitemap.ts
```

## What Is Included

- Reusable section components: `Navbar`, `Hero`, `Services`, `About`, `Testimonials`, `Contact`, and `Footer`
- Global styling system with design tokens, layout utilities, and mobile-first spacing
- Config-driven content so the same codebase can be reused for multiple clients
- SEO setup with metadata, JSON-LD, `robots.ts`, `sitemap.ts`, a web manifest, and a generated Open Graph image
- Responsive layout patterns that look polished on mobile first and expand cleanly for larger screens

## Notes

- Replace the demo business information in `src/app/config/site.ts` before launch.
- Update `siteUrl` in the config to match the production domain so the canonical URL, sitemap, and metadata stay correct.
