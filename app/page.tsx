import type { Metadata } from "next";
import { ContactCta } from "@/components/home/ContactCta";
import { FocusList } from "@/components/home/FocusList";
import { Hero } from "@/components/home/Hero";
import { IntroStatement } from "@/components/home/IntroStatement";
import { OrganisationStrip } from "@/components/home/OrganisationStrip";
import { Recognition } from "@/components/home/Recognition";
import { WorkTeaser } from "@/components/home/WorkTeaser";
import { Section } from "@/components/ui/Section";
import { selectedWork } from "@/content/caseStudies";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(site.name, site.description, "/"),
  title: { absolute: site.name },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <OrganisationStrip />
      <Section id="selected-work" title="Selected work.">
        <ul>
          {selectedWork.map((study) => (
            <WorkTeaser key={study.slug} study={study} />
          ))}
        </ul>
      </Section>
      <FocusList />
      <Recognition />
      <ContactCta />
    </>
  );
}
