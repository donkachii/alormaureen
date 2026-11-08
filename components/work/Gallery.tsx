import Image from "next/image";
import { TodoNote } from "@/components/ui/TodoNote";
import { isTodo, type CaseStudy } from "@/content/types";

export function Gallery({ study }: { study: CaseStudy }) {
  if (isTodo(study.gallery)) return <TodoNote item={study.gallery} />;

  return (
    <>
      {study.galleryNote && (
        <div className="mb-6">
          <TodoNote item={study.galleryNote} />
        </div>
      )}
      <div className="columns-1 gap-6 md:columns-2">
        {study.gallery.map((photo) => (
          <figure key={photo.src.src} className="mb-6 break-inside-avoid">
            <Image
              src={photo.src}
              alt={photo.alt}
              placeholder="blur"
              sizes="(min-width: 768px) 30vw, 90vw"
              className="w-full"
            />
            {photo.credit && (
              <figcaption className="mt-2 text-small text-ink-muted">
                Photo: {photo.credit}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </>
  );
}
