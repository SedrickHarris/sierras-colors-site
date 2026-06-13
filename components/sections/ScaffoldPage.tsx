import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";

export type ScaffoldPageProps = {
  title: string;
  intro?: string;
  pageType?: string;
  relatedLinks?: Array<{ label: string; href: string }>;
};

export function ScaffoldPage({
  title,
  intro = "Placeholder intro. Final SEO, AEO, local search, and conversion copy will be written in a later phase.",
  pageType = "Scaffolded page",
  relatedLinks = []
}: ScaffoldPageProps) {
  return (
    <>
      <Hero title={title} intro={intro} eyebrow={pageType} />
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title, href: "#" }]} />
          <Card>
            <h2>TODO Note</h2>
            <p>Write final page content only after verified Sierra’s Colors details are confirmed.</p>
            <p>Metadata placeholder is included in this route file.</p>
          </Card>
          <div style={{ marginTop: "1.5rem" }}>
            <h2>Internal Link Placeholders</h2>
            <ul>
              <li><Link href="/painting-contractor/">Painting Contractor</Link></li>
              <li><Link href="/service-areas/">Service Areas</Link></li>
              <li><Link href="/free-estimate/">Free Estimate</Link></li>
              {relatedLinks.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <CTA />
        </Container>
      </Section>
    </>
  );
}
