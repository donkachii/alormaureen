import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MaybeText } from "@/components/ui/MaybeText";
import { Section } from "@/components/ui/Section";
import { TodoNote } from "@/components/ui/TodoNote";
import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudyPager } from "@/components/work/CaseStudyPager";
import { Gallery } from "@/components/work/Gallery";
import { OutcomeGrid } from "@/components/work/OutcomeGrid";
import { caseStudies, getCaseStudy, getNeighbours } from "@/content/caseStudies";
import { isTodo, type Maybe } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata(study.title, study.teaserLine, `/work/${study.slug}`);
}

function Prose({ value }: { value: Maybe<string> }) {
  if (isTodo(value)) return <TodoNote item={value} />;
  return <p className="max-w-measure text-lead">{value}</p>;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const { previous, next } = getNeighbours(slug);

  return (
    <article>
      <CaseStudyHero study={study} />
      <Section id="context" title="Context." spacing="tight">
        <Prose value={study.context} />
      </Section>
      <Section id="problem" title="The problem." spacing="tight">
        <Prose value={study.problem} />
      </Section>
      <Section id="what-i-did" title="What I did." spacing="tight">
        <ul className="max-w-measure">
          {study.whatIDid.map((item, index) => (
            <li key={index} className="border-t border-rule py-4 last:border-b">
              <MaybeText value={item} />
            </li>
          ))}
        </ul>
      </Section>
      <section aria-labelledby="outcomes" className="mt-section">
        <Container>
          <h2 id="outcomes" className="mb-8 text-h2">
            Outcomes.
          </h2>
          <OutcomeGrid study={study} />
        </Container>
      </section>
      <Section id="partners" title="Partners." spacing="tight">
        <ul className="max-w-measure">
          {study.partners.map((partner, index) => (
            <li key={index} className="py-1">
              <MaybeText value={partner} />
            </li>
          ))}
        </ul>
      </Section>
      <Section id="what-i-learned" title="What I learned." spacing="tight">
        <Prose value={study.learned} />
      </Section>
      <Section id="gallery" title="Gallery." spacing="tight">
        <Gallery study={study} />
      </Section>
      <CaseStudyPager previous={previous} next={next} />
    </article>
  );
}
