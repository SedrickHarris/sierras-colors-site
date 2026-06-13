import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Medical Office Painting",
  description: "Metadata placeholder for Medical Office Painting.",
  path: "/commercial-painting/medical-office-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Medical Office Painting"
      pageType="Commercial Support Page"
      intro="Placeholder intro for Medical Office Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
