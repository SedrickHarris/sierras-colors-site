import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = cn("btn", variant === "primary" ? "btn-primary" : "btn-secondary");
  if (href) {
    return <Link className={className} href={href}>{children}</Link>;
  }
  return <button className={className}>{children}</button>;
}
