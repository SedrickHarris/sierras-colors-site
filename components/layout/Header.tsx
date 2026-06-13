import Link from "next/link";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="site-header" style={{ borderBottom: "1px solid var(--border)", padding: "1rem 0" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/" aria-label="Sierra’s Colors home" style={{ fontWeight: 800 }}>
            {site.businessName}
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
