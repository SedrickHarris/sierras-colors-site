import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Painting",
  description: "Metadata placeholder for Commercial Painting.",
  path: "/commercial-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Commercial Painting"
      pageType="Service Page"
      intro="Placeholder intro for Commercial Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
