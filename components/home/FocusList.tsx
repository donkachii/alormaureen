import { Section } from "@/components/ui/Section";
import { TodoNote } from "@/components/ui/TodoNote";
import { focusAreas } from "@/content/site";
import { isTodo } from "@/content/types";

export function FocusList() {
  return (
    <Section id="focus-areas" title="Focus areas.">
      <ol>
        {focusAreas.map((area, index) => (
          <li
            key={area.title}
            className="grid grid-cols-[3rem_1fr] gap-x-2 border-t border-rule py-5 last:border-b sm:grid-cols-[4rem_1fr]"
          >
            <span aria-hidden="true" className="font-display text-h3 text-ink-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-sans text-h3 font-bold">{area.title}</h3>
              <div className="mt-1 text-ink-muted">
                {isTodo(area.descriptor) ? (
                  <TodoNote item={area.descriptor} />
                ) : (
                  <p>{area.descriptor}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
