import type { CaseStudy } from "@/content/types";
import { OutcomeCard } from "./OutcomeCard";

export function OutcomeGrid({ study }: { study: CaseStudy }) {
  return (
    <>
      {study.outcomesNote && <p className="mb-6 text-ink-muted">{study.outcomesNote}</p>}
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {study.outcomes.map((outcome, index) => (
          <OutcomeCard key={index} outcome={outcome} />
        ))}
      </ul>
    </>
  );
}
