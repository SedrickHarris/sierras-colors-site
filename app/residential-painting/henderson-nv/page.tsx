import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Residential Painting Henderson NV",
  description: "Metadata placeholder for Residential Painting Henderson NV.",
  path: "/residential-painting/henderson-nv/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Residential Painting Henderson NV"
      pageType="Service Plus Location Page"
      intro="Placeholder intro for Residential Painting Henderson NV. Final content will be written after verified project details are confirmed."
    />
  );
}
