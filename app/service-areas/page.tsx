import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/sections/ScaffoldPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Service Areas",
  description: "Metadata placeholder for Service Areas.",
  path: "/service-areas/"
});

export default function Page() {
  return (
    <ScaffoldPage
      title="Service Areas"
      pageType="Location Hub"
      intro="Placeholder intro for Service Areas. Final content will be written after verified project details are confirmed."
    />
  );
}
