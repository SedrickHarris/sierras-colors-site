import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description: "Metadata placeholder for Home.",
  path: "/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Home"
      pageType="Foundation Page"
      intro="Placeholder intro for Home. Final content will be written after verified project details are confirmed."
    />
  );
}
