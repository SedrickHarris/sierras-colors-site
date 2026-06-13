import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <h1>Page Not Found</h1>
        <p>This page is not part of the current Sierra’s Colors scaffold.</p>
        <Link className="btn btn-primary" href="/">Return Home</Link>
      </Container>
    </Section>
  );
}
