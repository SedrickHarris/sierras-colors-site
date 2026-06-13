import type { Metadata } from "next";
import { site } from "@/data/site";

export type MetadataInput = {
  title: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({ title, description, path }: MetadataInput): Metadata {
  return {
    title,
    description: description ?? `Placeholder metadata for ${title} from ${site.businessName}.`,
    alternates: path ? { canonical: path } : undefined
  };
}
