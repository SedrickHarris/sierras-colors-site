import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "HOA Painting",
  description: "Metadata placeholder for HOA Painting.",
  path: "/hoa-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="HOA Painting"
      pageType="Audience Service Page"
      intro="Placeholder intro for HOA Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
