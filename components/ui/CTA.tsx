import { Button } from "./Button";

export function CTA({ label = "Get a Free Estimate", href = "/free-estimate/" }: { label?: string; href?: string }) {
  return (
    <div className="card" style={{ marginTop: "1.5rem" }}>
      <h2>CTA Placeholder</h2>
      <p>TODO: Add final conversion copy and verified contact instructions.</p>
      <Button href={href}>{label}</Button>
    </div>
  );
}
