import Link from "next/link";
import { locations } from "@/data/locations";
import { Card } from "@/components/ui/Card";

export function ServiceAreaGrid() {
  return (
    <div className="grid">
      {locations.filter((location) => location.launchLocation).map((location) => (
        <Card key={location.slug}>
          <h3><Link href={location.slug}>{location.name}</Link></h3>
          <p>TODO: Add verified location support content.</p>
        </Card>
      ))}
    </div>
  );
}
