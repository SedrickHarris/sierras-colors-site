# Agent Instructions

## Project overview

This project is the Sierra’s Colors website scaffold for a Henderson-based residential and commercial painting contractor serving the Las Vegas Valley.

## Build stack

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- GitHub
- Cloudflare Pages

## Route conventions

- Use lowercase, keyword-focused, trailing slash URL paths.
- Use service URLs for core service pages.
- Use `/service-areas/location-nv/` for location pages.
- Use `/service/location-nv/` for service plus location pages.
- Use future audience plus service URLs only when added to the roadmap.

## Content rules

- Do not use em dashes.
- Do not invent facts.
- Do not add fake reviews or testimonials.
- Do not make unverifiable claims.
- Keep copy clear, local, professional, and conversion-focused.
- Use placeholder content until verified details are approved.

## SEO rules

- Build for SEO, GEO, AEO, local intent SERP, rich snippets, featured snippets, People Also Ask, and AI search visibility.
- Use FAQ sections on service and location pages during the final copy phase.
- Keep internal links natural and useful.
- Add schema only when the required facts are verified.

## Component rules

- Prefer existing layout, UI, SEO, and section components.
- Keep components clean, typed, and reusable.
- Do not hardcode final sales copy inside components.

## Deployment target

Cloudflare Pages with static export testing.

## File organization rules

- Store structured site data in `data/`.
- Store reusable helpers in `lib/`.
- Store project documentation in `docs/`.
- Store future static assets in `public/`.
