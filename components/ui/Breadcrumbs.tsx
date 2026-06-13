import Link from "next/link";

export type Breadcrumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumbs" style={{ marginBottom: "1rem" }}>
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 ? " / " : null}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}
