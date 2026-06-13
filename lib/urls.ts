export function normalizeSlug(slug: string) {
  if (slug === "/") return "/";
  return `/${slug.replace(/^\/+|\/+$/g, "")}/`;
}

export function serviceUrl(serviceSlug: string) {
  return normalizeSlug(serviceSlug);
}

export function locationUrl(locationSlug: string) {
  return normalizeSlug(`/service-areas/${locationSlug}`);
}

export function serviceLocationUrl(serviceSlug: string, locationSlug: string) {
  return normalizeSlug(`/${serviceSlug}/${locationSlug}`);
}

export function blogUrl(postSlug: string) {
  return normalizeSlug(`/blog/${postSlug}`);
}
