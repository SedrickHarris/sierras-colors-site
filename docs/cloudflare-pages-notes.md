# Cloudflare Pages Notes

Deployment target: Cloudflare Pages.

## Current setup

`next.config.ts` uses static export settings so `npm run build` generates the `/out` folder.

```ts
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

## Recommended Cloudflare Pages settings

- Build command: `npm run build`
- Output directory: `out`
- Node version: use the version supported by the project environment
- Framework preset: Next.js or None, depending on Cloudflare setup

## Future TODO

- Confirm production domain.
- Confirm final Cloudflare Pages project name.
- Confirm environment variable needs.
- Confirm whether any Cloudflare specific adapter is needed later.
- Add redirects or headers only after launch requirements are confirmed.
