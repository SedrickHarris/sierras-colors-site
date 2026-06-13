import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Office Building Painting",
  description: "Metadata placeholder for Office Building Painting.",
  path: "/commercial-painting/office-building-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Office Building Painting"
      pageType="Commercial Support Page"
      intro="Placeholder intro for Office Building Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
