import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Residential Painting",
  description: "Metadata placeholder for Residential Painting.",
  path: "/residential-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Residential Painting"
      pageType="Service Page"
      intro="Placeholder intro for Residential Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
