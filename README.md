# sierras-colors-site

Website scaffold for Sierra’s Colors, prepared by Sirius Systems.

## Stack

- Next.js
- TypeScript
- App Router
- ESLint
- Tailwind CSS
- GitHub
- Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build uses `output: "export"` in `next.config.ts` and generates the static Cloudflare Pages output in:

```bash
out
```

## Deployment target

Cloudflare Pages.

Recommended Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `out`

## Project structure overview

- `app/` contains App Router pages, layout, sitemap, and not found page.
- `components/` contains reusable layout, UI, SEO, and section components.
- `data/` contains structured site, services, locations, audiences, launch pages, and roadmap data.
- `lib/` contains metadata, schema, URL, and utility helpers.
- `docs/` contains the project brief, build list, SEO plan, content rules, schema plan, and deployment notes.
- `public/` contains image folders and future static assets.
- `scripts/` contains future tooling placeholders.
- `out/` contains the generated static export after `npm run build`.

## Future build phases

1. Confirm verified business details.
2. Add final brand assets and imagery.
3. Write launch page copy.
4. Add schema per page type.
5. Connect forms, analytics, CRM workflows, and review automation only after approval.
6. Run prelaunch checks before production deployment.
