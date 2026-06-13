import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Sierra’s Colors",
  description: "Metadata placeholder for About Sierra’s Colors.",
  path: "/about/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="About Sierra’s Colors"
      pageType="Foundation Page"
      intro="Placeholder intro for About Sierra’s Colors. Final content will be written after verified project details are confirmed."
    />
  );
}
