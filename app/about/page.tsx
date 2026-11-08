import type { Metadata } from "next";
import Image from "next/image";
import { CvDownload } from "@/components/about/CvDownload";
import { EducationList } from "@/components/about/EducationList";
import { Timeline } from "@/components/about/Timeline";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TodoNote } from "@/components/ui/TodoNote";
import { aboutPhotos, interests, story, tools } from "@/content/experience";
import { intro } from "@/content/site";
import { isTodo } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About",
  "Experience, education, courses, tools and interests of Maureen Aggie Alor, a development professional in Abuja, Nigeria.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <Container className="pt-[clamp(2.5rem,8vw,6rem)]">
        <h1 className="text-h1">About.</h1>
        <div className="mt-10 grid items-start gap-x-8 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-[34ch] font-display text-statement">{intro.statement}</p>
            <p className="mt-6 max-w-measure text-lead text-ink-muted">{intro.interests}</p>
            <div className="mt-8">
              {isTodo(story) ? <TodoNote item={story} /> : <p className="max-w-measure">{story}</p>}
            </div>
          </div>
          <div className="md:col-span-5">
            <Image
              src={aboutPhotos.lead.src}
              alt={aboutPhotos.lead.alt}
              placeholder="blur"
              preload
              sizes="(min-width: 768px) 38vw, 90vw"
              className="w-full"
            />
          </div>
        </div>
      </Container>
      <Section id="experience" title="Experience.">
        <Timeline />
      </Section>
      <Section id="education" title="Education.">
        <EducationList />
      </Section>
      <Section id="tools" title="Tools.">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lead">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </Section>
      <Section id="interests" title="Interests.">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lead">
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
        <Image
          src={aboutPhotos.secondary.src}
          alt={aboutPhotos.secondary.alt}
          placeholder="blur"
          sizes="(min-width: 768px) 60vw, 90vw"
          className="mt-10 w-full"
        />
      </Section>
      <Section id="cv" title="CV.">
        <CvDownload />
      </Section>
    </>
  );
}
