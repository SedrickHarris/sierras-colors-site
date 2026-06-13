import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Interior Painting",
  description: "Metadata placeholder for Interior Painting.",
  path: "/interior-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Interior Painting"
      pageType="Service Page"
      intro="Placeholder intro for Interior Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
