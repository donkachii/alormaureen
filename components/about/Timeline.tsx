import Link from "next/link";
import { MaybeText } from "@/components/ui/MaybeText";
import { timeline } from "@/content/experience";

export function Timeline() {
  return (
    <ol>
      {timeline.map((entry, index) => (
        <li
          key={index}
          className="grid gap-x-8 gap-y-1 border-t border-rule py-5 last:border-b sm:grid-cols-[1fr_auto]"
        >
          <div>
            <h3 className="font-sans text-h3 font-bold">
              <MaybeText value={entry.role} />
            </h3>
            <p className="mt-1 text-ink-muted">
              <MaybeText value={entry.organisation} />
            </p>
            {entry.caseStudySlug && (
              <Link href={`/work/${entry.caseStudySlug}`} className="tap link">
                Read the case study
              </Link>
            )}
          </div>
          <p className="text-ink-muted sm:text-right">
            <MaybeText value={entry.dates} />
          </p>
        </li>
      ))}
    </ol>
  );
}
