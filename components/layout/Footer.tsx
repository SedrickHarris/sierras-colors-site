import { site } from "@/data/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer" style={{ borderTop: "1px solid var(--border)", padding: "2rem 0" }}>
      <Container>
        <p>{site.businessName} website scaffold prepared by {site.preparedBy}.</p>
        <p>TODO: Add verified contact details, service area details, footer links, and legal links.</p>
      </Container>
    </footer>
  );
}
