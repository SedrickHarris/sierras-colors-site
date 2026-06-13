# Changelog

## 2026-06-12

- Created initial Next.js project scaffold for Sierra’s Colors.
- Added App Router route structure for recommended launch pages and future support pages.
- Added reusable layout, UI, SEO, and section components.
- Added structured data files for site details, services, locations, audiences, launch pages, roadmap, FAQs, and navigation.
- Added project documentation files for brief, build list, launch pages, roadmap, URL strategy, content rules, SEO and AEO strategy, schema plan, GBP and review automation notes, Cloudflare Pages notes, and prelaunch checklist.
- Added README, Claude Code instructions, agent instructions, sitemap, metadata helpers, schema helpers, URL helpers, and not found page.

## 2026-06-12 Setup verification

- Confirmed static export configuration for Cloudflare Pages.
- Added `/out` generation notes to README and Cloudflare Pages documentation.
- Patched `app/sitemap.ts` with `export const dynamic = "force-static"` for static export compatibility.
- Ran `npm install`.
- Ran `npm run build` successfully.
- Confirmed `/out` folder was generated.
