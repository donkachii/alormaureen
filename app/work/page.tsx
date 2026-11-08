import type { Metadata } from "next";
import { WorkTeaser } from "@/components/home/WorkTeaser";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { alternateWork, selectedWork } from "@/content/caseStudies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Work",
  "Case studies from governance, education, youth-development and community programmes in Nigeria.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <Container className="pt-[clamp(2.5rem,8vw,6rem)]">
        <h1 className="text-h1">Work.</h1>
      </Container>
      <Section id="selected-work" title="Selected work." spacing="tight">
        <ul>
          {selectedWork.map((study) => (
            <WorkTeaser key={study.slug} study={study} />
          ))}
        </ul>
      </Section>
      <Section id="more-work" title="More work.">
        <ul>
          {alternateWork.map((study) => (
            <WorkTeaser key={study.slug} study={study} />
          ))}
        </ul>
      </Section>
    </>
  );
}
