import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Exterior Painting",
  description: "Metadata placeholder for Exterior Painting.",
  path: "/exterior-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Exterior Painting"
      pageType="Service Page"
      intro="Placeholder intro for Exterior Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
