import type { FAQ } from "@/data/faqs";
import { Card } from "@/components/ui/Card";

export function FAQBlock({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="grid">
      {faqs.map((faq) => (
        <Card key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </Card>
      ))}
    </div>
  );
}
