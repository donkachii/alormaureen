import Image from "next/image";
import { RevealLines } from "@/components/motion/RevealLines";
import { Container } from "@/components/ui/Container";
import { intro, portraitPhoto } from "@/content/site";

export function IntroStatement() {
  return (
    <section aria-label="Introduction" className="mt-section">
      <Container className="grid items-end gap-x-8 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image
            src={portraitPhoto.src}
            alt={portraitPhoto.alt}
            placeholder="blur"
            sizes="(min-width: 768px) 30vw, min(90vw, 384px)"
            className="aspect-4/5 w-full max-w-sm object-cover object-top"
          />
        </div>
        <div className="md:col-span-8">
          <p className="max-w-[34ch] font-display text-statement">
            <RevealLines text={intro.statement} />
          </p>
          <p className="mt-6 max-w-measure text-lead text-ink-muted">{intro.interests}</p>
        </div>
      </Container>
    </section>
  );
}
