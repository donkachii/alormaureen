import type { Todo } from "@/content/types";

/** Marks content still to be supplied. The colours sit outside the brand palette on purpose. */
export function TodoNote({ item, inline = false }: { item: Todo; inline?: boolean }) {
  const Element = inline ? "span" : "p";
  return (
    <Element className="inline-block rounded-sm border border-dashed border-todo-border bg-todo-bg px-2 py-0.5 font-sans text-small text-todo-ink">
      <strong>TODO:</strong> {item.todo}
    </Element>
  );
}
