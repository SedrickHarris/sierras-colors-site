import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Interior Painting Henderson NV",
  description: "Metadata placeholder for Interior Painting Henderson NV.",
  path: "/interior-painting/henderson-nv/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Interior Painting Henderson NV"
      pageType="Service Plus Location Page"
      intro="Placeholder intro for Interior Painting Henderson NV. Final content will be written after verified project details are confirmed."
    />
  );
}
