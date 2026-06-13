import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Interior Painting",
  description: "Metadata placeholder for Commercial Interior Painting.",
  path: "/commercial-painting/interior-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Commercial Interior Painting"
      pageType="Commercial Support Page"
      intro="Placeholder intro for Commercial Interior Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
