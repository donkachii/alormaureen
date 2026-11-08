import { CountUp } from "@/components/motion/CountUp";
import { TodoNote } from "@/components/ui/TodoNote";
import { isTodo, type Maybe, type Outcome } from "@/content/types";

export function OutcomeCard({ outcome }: { outcome: Maybe<Outcome> }) {
  if (isTodo(outcome)) {
    return (
      <li className="bg-surface p-6">
        <TodoNote item={outcome} />
      </li>
    );
  }

  if (outcome.kind === "statement") {
    return (
      <li className="flex items-center bg-surface p-6">
        <p className="font-display text-h3">{outcome.text}</p>
      </li>
    );
  }

  return (
    <li className="@container bg-surface p-6">
      <p className="font-display text-number text-accent">
        <CountUp value={outcome.value} prefix={outcome.prefix} suffix={outcome.suffix} />
      </p>
      <p className="mt-3 text-ink-muted">{outcome.label}</p>
    </li>
  );
}
