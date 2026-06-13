import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Tenant Improvement Painting",
  description: "Metadata placeholder for Tenant Improvement Painting.",
  path: "/commercial-painting/tenant-improvement-painting/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Tenant Improvement Painting"
      pageType="Commercial Support Page"
      intro="Placeholder intro for Tenant Improvement Painting. Final content will be written after verified project details are confirmed."
    />
  );
}
