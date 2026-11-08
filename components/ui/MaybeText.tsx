import { isTodo, type Maybe } from "@/content/types";
import { TodoNote } from "./TodoNote";

export function MaybeText({ value }: { value: Maybe<string> }) {
  return isTodo(value) ? <TodoNote item={value} inline /> : <>{value}</>;
}
