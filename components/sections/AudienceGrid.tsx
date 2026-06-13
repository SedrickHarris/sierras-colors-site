import { audiences } from "@/data/audiences";
import { Card } from "@/components/ui/Card";

export function AudienceGrid() {
  return (
    <div className="grid">
      {audiences.map((audience) => (
        <Card key={audience.slug}>
          <h3>{audience.title}</h3>
          <p>{audience.description}</p>
        </Card>
      ))}
    </div>
  );
}
