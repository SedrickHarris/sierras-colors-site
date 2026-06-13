import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Henderson NV Painting Contractor",
  description: "Metadata placeholder for Henderson NV Painting Contractor.",
  path: "/service-areas/henderson-nv/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Henderson NV Painting Contractor"
      pageType="Location Page"
      intro="Placeholder intro for Henderson NV Painting Contractor. Final content will be written after verified project details are confirmed."
    />
  );
}
