import { site } from "@/data/site";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.businessName
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.businessName,
    url: site.domain
  };
}

export function createPlaceholderServiceSchema(serviceName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@type": "Organization",
      name: site.businessName
    }
  };
}
