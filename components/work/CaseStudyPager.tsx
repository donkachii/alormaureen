import Link from "next/link";
import { Section } from "@/components/ui/Section";
import type { CaseStudy } from "@/content/types";

export function CaseStudyPager({ previous, next }: { previous: CaseStudy; next: CaseStudy }) {
  return (
    <Section id="next-case-study" title="Next case study.">
      <nav aria-label="Case studies">
        <Link href={`/work/${next.slug}`} rel="next" className="group block">
          <span className="text-teaser font-display">
            <span className="draw-underline">{next.title}</span>
          </span>
          <span className="mt-3 block max-w-measure text-ink-muted">{next.teaserLine}</span>
        </Link>
        <p className="mt-8">
          <span className="text-ink-muted">Previous: </span>
          <Link href={`/work/${previous.slug}`} rel="prev" className="tap link">
            {previous.title}
          </Link>
        </p>
      </nav>
    </Section>
  );
}
