import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-section border-t border-rule">
      <Container className="grid gap-8 py-10 md:grid-cols-12">
        <nav aria-label="Footer" className="md:col-span-4">
          <ul className="flex flex-wrap gap-x-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="tap underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-wrap gap-x-6 md:col-span-5">
          <li>
            <a href={site.linkedIn} className="tap underline-offset-4 hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="tap underline-offset-4 hover:underline">
              {site.email}
            </a>
          </li>
        </ul>
        <p className="tap text-small text-ink-muted md:col-span-3 md:justify-end">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
