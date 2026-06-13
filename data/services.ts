export type Service = {
  title: string;
  slug: string;
  shortDescription: string;
  audience: string[];
  relatedServices: string[];
  relatedLocations: string[];
  ctaLabel: string;
};

export const services: Service[] = [
  {
    title: "Residential Painting",
    slug: "/residential-painting/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["Residential homeowners"],
    relatedServices: ["Interior Painting", "Exterior Painting"],
    relatedLocations: ["Henderson, NV", "Las Vegas, NV"],
    ctaLabel: "Get a Free Estimate"
  },
  {
    title: "Commercial Painting",
    slug: "/commercial-painting/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["Commercial clients", "Property managers"],
    relatedServices: ["Interior Painting", "Exterior Painting"],
    relatedLocations: ["Las Vegas, NV", "Henderson, NV"],
    ctaLabel: "Get a Free Estimate"
  },
  {
    title: "Interior Painting",
    slug: "/interior-painting/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["Residential homeowners", "Commercial clients"],
    relatedServices: ["Residential Painting", "Commercial Painting"],
    relatedLocations: ["Henderson, NV", "Green Valley, NV"],
    ctaLabel: "Get a Free Estimate"
  },
  {
    title: "Exterior Painting",
    slug: "/exterior-painting/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["Residential homeowners", "HOA communities"],
    relatedServices: ["Residential Painting", "HOA Painting"],
    relatedLocations: ["Henderson, NV", "Summerlin, NV"],
    ctaLabel: "Get a Free Estimate"
  },
  {
    title: "HOA Painting",
    slug: "/hoa-painting/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["HOA communities", "Property managers"],
    relatedServices: ["Exterior Painting", "Commercial Painting"],
    relatedLocations: ["Green Valley, NV", "Henderson, NV"],
    ctaLabel: "Get a Free Estimate"
  },
  {
    title: "Property Management Painting",
    slug: "/property-management-painting/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["Property managers", "Commercial clients"],
    relatedServices: ["Interior Painting", "Exterior Painting"],
    relatedLocations: ["Henderson, NV", "Las Vegas, NV"],
    ctaLabel: "Get a Free Estimate"
  },
  {
    title: "Realtor Painting Services",
    slug: "/realtor-painting-services/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["Realtors", "Residential homeowners"],
    relatedServices: ["Interior Painting", "Exterior Painting"],
    relatedLocations: ["Henderson, NV", "Las Vegas, NV"],
    ctaLabel: "Get a Free Estimate"
  },
  {
    title: "Full-Service Painting Contractor",
    slug: "/painting-contractor/",
    shortDescription: "TODO: Add verified service description.",
    audience: ["Residential homeowners", "Commercial clients", "HOA communities", "Property managers", "Realtors"],
    relatedServices: ["Residential Painting", "Commercial Painting", "Interior Painting", "Exterior Painting"],
    relatedLocations: ["Henderson, NV", "Las Vegas, NV", "North Las Vegas, NV"],
    ctaLabel: "Get a Free Estimate"
  }
];
