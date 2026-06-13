import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description: "Metadata placeholder for Blog.",
  path: "/blog/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Blog"
      pageType="Blog Hub"
      intro="Placeholder intro for Blog. Final content will be written after verified project details are confirmed."
    />
  );
}
