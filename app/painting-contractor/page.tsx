import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Full-Service Painting Contractor",
  description: "Metadata placeholder for Full-Service Painting Contractor.",
  path: "/painting-contractor/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Full-Service Painting Contractor"
      pageType="Service Hub"
      intro="Placeholder intro for Full-Service Painting Contractor. Final content will be written after verified project details are confirmed."
    />
  );
}
