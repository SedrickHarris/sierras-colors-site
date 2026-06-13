import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "HOA Painting Green Valley NV",
  description: "Metadata placeholder for HOA Painting Green Valley NV.",
  path: "/hoa-painting/green-valley-nv/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="HOA Painting Green Valley NV"
      pageType="Service Plus Location Page"
      intro="Placeholder intro for HOA Painting Green Valley NV. Final content will be written after verified project details are confirmed."
    />
  );
}
