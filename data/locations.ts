export type Location = {
  name: string;
  slug: string;
  launchLocation: boolean;
  matrixPriority: boolean;
};

export const locations: Location[] = [
  { name: "Henderson, NV", slug: "/service-areas/henderson-nv/", launchLocation: true, matrixPriority: true },
  { name: "Las Vegas, NV", slug: "/service-areas/las-vegas-nv/", launchLocation: true, matrixPriority: true },
  { name: "North Las Vegas, NV", slug: "/service-areas/north-las-vegas-nv/", launchLocation: true, matrixPriority: true },
  { name: "Summerlin, NV", slug: "/service-areas/summerlin-nv/", launchLocation: true, matrixPriority: true },
  { name: "Green Valley, NV", slug: "/service-areas/green-valley-nv/", launchLocation: true, matrixPriority: true },
  { name: "Green Valley Ranch, NV", slug: "/service-areas/green-valley-ranch-nv/", launchLocation: false, matrixPriority: true },
  { name: "Anthem, NV", slug: "/service-areas/anthem-nv/", launchLocation: false, matrixPriority: true },
  { name: "Seven Hills, NV", slug: "/service-areas/seven-hills-nv/", launchLocation: false, matrixPriority: true },
  { name: "Enterprise, NV", slug: "/service-areas/enterprise-nv/", launchLocation: false, matrixPriority: true },
  { name: "Paradise, NV", slug: "/service-areas/paradise-nv/", launchLocation: false, matrixPriority: true },
  { name: "Spring Valley, NV", slug: "/service-areas/spring-valley-nv/", launchLocation: false, matrixPriority: true },
  { name: "Summerlin South, NV", slug: "/service-areas/summerlin-south-nv/", launchLocation: false, matrixPriority: true }
];
