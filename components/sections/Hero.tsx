import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero({ title, intro, eyebrow = "Page Scaffold" }: { title: string; intro: string; eyebrow?: string }) {
  return (
    <section className="hero">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <Button href="/free-estimate/">CTA Placeholder</Button>
      </Container>
    </section>
  );
}
