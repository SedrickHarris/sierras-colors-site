import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Exterior Painting Henderson NV",
  description: "Metadata placeholder for Exterior Painting Henderson NV.",
  path: "/exterior-painting/henderson-nv/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Exterior Painting Henderson NV"
      pageType="Service Plus Location Page"
      intro="Placeholder intro for Exterior Painting Henderson NV. Final content will be written after verified project details are confirmed."
    />
  );
}
