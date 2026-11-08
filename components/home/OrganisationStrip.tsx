import { Section } from "@/components/ui/Section";
import { organisations } from "@/content/site";

export function OrganisationStrip() {
  return (
    <Section id="organisations" title="Organisations I’ve worked with.">
      <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lead">
        {organisations.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Section>
  );
}
