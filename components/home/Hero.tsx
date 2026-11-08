import { Container } from "@/components/ui/Container";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section>
      <Container className="pt-[clamp(2rem,6vw,4rem)]">
        {/* Fills the first screen, so the page's largest element is text that needs no download. */}
        <h1 className="flex min-h-[min(calc(100svh-11rem),52rem)] flex-col justify-between gap-16">
          <span className="hero-line text-hero">{hero.greeting}</span>
          <span
            className="hero-line max-w-[22ch] text-h2"
            style={{ "--line": 1 } as React.CSSProperties}
          >
            {hero.name} {hero.line}
          </span>
        </h1>
      </Container>
    </section>
  );
}
