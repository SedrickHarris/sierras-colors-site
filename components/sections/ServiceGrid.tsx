import Link from "next/link";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";

export function ServiceGrid() {
  return (
    <div className="grid">
      {services.map((service) => (
        <Card key={service.slug}>
          <h3><Link href={service.slug}>{service.title}</Link></h3>
          <p>{service.shortDescription}</p>
        </Card>
      ))}
    </div>
  );
}
