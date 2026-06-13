import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Exterior Painting",
  description: "Metadata placeholder for Commercial Exterior Painting.",
  path: "/commercial-painting/exterior-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Commercial Exterior Painting"
      pageType="Commercial Support Page"
      intro="Placeholder intro for Commercial Exterior Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
