import type { ReactNode } from "react";
import { RevealLines } from "@/components/motion/RevealLines";
import { Container } from "./Container";

/** A section with its heading in a left rail on wide screens and its content on the right. */
export function Section({
  id,
  title,
  spacing = "wide",
  children,
}: {
  id: string;
  title: string;
  spacing?: "wide" | "tight";
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className={spacing === "wide" ? "mt-section" : "mt-16 md:mt-24"}>
      <Container className="grid gap-x-8 gap-y-8 md:grid-cols-12">
        <h2 id={id} className="self-start text-h2 md:sticky md:top-8 md:col-span-4">
          <RevealLines text={title} />
        </h2>
        <div className="md:col-span-8">{children}</div>
      </Container>
    </section>
  );
}
