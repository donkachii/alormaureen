import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header>
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="tap font-display text-xl leading-none sm:text-2xl">
          {site.name}
        </Link>
        <div className="flex items-center gap-2 md:gap-6">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <MobileMenu items={nav} />
        </div>
      </Container>
    </header>
  );
}
