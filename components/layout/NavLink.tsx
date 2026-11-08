"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function NavLink({
  href,
  className = "",
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isCurrent = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isCurrent ? "page" : undefined}
      className={`group tap ${className}`}
    >
      <span
        className={`draw-underline ${isCurrent ? "underline decoration-accent decoration-2 underline-offset-4" : ""}`}
      >
        {children}
      </span>
    </Link>
  );
}
