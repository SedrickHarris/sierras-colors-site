import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const launchRoutes = [
  "/",
  "/about/",
  "/free-estimate/",
  "/service-areas/",
  "/painting-contractor/",
  "/residential-painting/",
  "/commercial-painting/",
  "/interior-painting/",
  "/exterior-painting/",
  "/hoa-painting/",
  "/property-management-painting/",
  "/realtor-painting-services/",
  "/service-areas/henderson-nv/",
  "/service-areas/las-vegas-nv/",
  "/service-areas/north-las-vegas-nv/",
  "/service-areas/summerlin-nv/",
  "/service-areas/green-valley-nv/",
  "/exterior-painting/henderson-nv/",
  "/interior-painting/henderson-nv/",
  "/commercial-painting/las-vegas-nv/",
  "/hoa-painting/green-valley-nv/",
  "/property-management-painting/henderson-nv/",
  "/realtor-painting-services/henderson-nv/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  return launchRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-06-12",
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
