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

## 2026-06-12 Dependency registry fix and repository setup

- Diagnosed a failed `npm install` caused by an unreachable internal registry, which had left `node_modules` partially corrupted.
- Repointed `package-lock.json` resolved URLs to the public npm registry with no version changes, since the integrity hashes matched.
- Added a project `.npmrc` setting the registry to the public npm registry.
- Reinstalled dependencies and confirmed `npm run build` compiles, type checks, and statically exports all 34 routes.
- Initialized the git repository, committed the project foundation, and pushed to the `sierras-colors-site` remote.

## 2026-06-12 Imported site-os toolkit

- Copied the reusable Site OS toolkit from the `site-os-master` repository into the project: `.claude` skills, `skills`, `prompts`, `checklists`, `schemas`, `page-templates`, `routing`, `tools`, `token-control`, `efficiency-governor`, and `versions`.
- Merged Site OS reference docs into `docs` without overwriting any existing Sierra's Colors documentation.
- Skipped development artifacts from the source repository: benchmark results, benchmarks, evals, test output, sample projects, and workflow tests.
- Preserved the project's existing `CLAUDE.md`, `README.md`, and `.gitignore`.

## 2026-06-12 Post-import build verification

- Ran `npm run build` after importing the Site OS toolkit to confirm it did not break the build.
- Build compiled, type checked, and statically exported all 34 routes with unchanged bundle sizes.
