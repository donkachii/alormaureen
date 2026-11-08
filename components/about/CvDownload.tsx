import { TodoNote } from "@/components/ui/TodoNote";
import { cv } from "@/content/experience";
import { isTodo } from "@/content/types";

export function CvDownload() {
  if (isTodo(cv)) return <TodoNote item={cv} />;
  return (
    <a href={cv.href} download className="tap bg-accent px-6 font-bold text-on-accent">
      {cv.label}
    </a>
  );
}
