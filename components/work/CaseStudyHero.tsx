import { Container } from "@/components/ui/Container";
import { MaybeText } from "@/components/ui/MaybeText";
import { isTodo, type CaseStudy, type Maybe } from "@/content/types";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const facts: { label: string; value: Maybe<string> }[] = [
    { label: "Organisation", value: study.organisation },
    ...(study.programme ? [{ label: "Programme", value: study.programme }] : []),
    { label: "Funder", value: study.funder },
    { label: "Dates", value: study.dates },
    { label: "My role", value: study.role },
  ];

  return (
    <header>
      <Container className="pt-[clamp(2.5rem,8vw,6rem)]">
        <h1 className="max-w-[18ch] text-h1">{study.title}</h1>
        <dl className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-rule pt-3">
              <dt className="text-small text-ink-muted">{fact.label}</dt>
              <dd className="mt-1">
                <MaybeText value={fact.value} />
              </dd>
            </div>
          ))}
          {study.link && (
            <div className="border-t border-rule pt-3">
              <dt className="text-small text-ink-muted">Website</dt>
              <dd className="mt-1">
                {isTodo(study.link) ? (
                  <MaybeText value={study.link} />
                ) : (
                  <a href={study.link.href} className="tap link">
                    {study.link.label}
                  </a>
                )}
              </dd>
            </div>
          )}
        </dl>
      </Container>
    </header>
  );
}
