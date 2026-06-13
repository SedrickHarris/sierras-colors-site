import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Get a Free Estimate",
  description: "Metadata placeholder for Get a Free Estimate.",
  path: "/free-estimate/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Get a Free Estimate"
      pageType="Conversion Page"
      intro="Placeholder intro for Get a Free Estimate. Final content will be written after verified project details are confirmed."
    />
  );
}
