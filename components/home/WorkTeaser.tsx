import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/types";

export function WorkTeaser({ study }: { study: CaseStudy }) {
  return (
    <li className="border-t border-rule last:border-b">
      <Link
        href={`/work/${study.slug}`}
        className="group grid items-center gap-x-8 gap-y-2 py-8 md:grid-cols-[1fr_auto]"
      >
        <div>
          <h3 className="text-teaser">
            <span className="draw-underline">{study.title}</span>
          </h3>
          <p className="mt-3 max-w-measure text-ink-muted">{study.teaserLine}</p>
        </div>
        {study.teaserPhoto && (
          <div className="teaser-photo hidden w-40 [@media(hover:hover)]:md:block">
            <Image
              src={study.teaserPhoto.src}
              alt=""
              sizes="160px"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        )}
      </Link>
    </li>
  );
}
