import type { StaticImageData } from "next/image";

/** Marks content the brief did not supply. Renders as a visible TODO and is listed in the README. */
export type Todo = { readonly todo: string };

export type Maybe<T> = T | Todo;

export const todo = (what: string): Todo => ({ todo: what });

export const isTodo = (value: unknown): value is Todo =>
  typeof value === "object" && value !== null && "todo" in value;

export type Photo = {
  src: StaticImageData;
  alt: string;
  credit?: string;
};

export type Outcome =
  | {
      kind: "number";
      value: number;
      prefix?: string;
      suffix?: string;
      label: string;
    }
  | { kind: "statement"; text: string };

export type CaseStudy = {
  slug: string;
  group: "selected" | "alternate";
  title: string;
  organisation: Maybe<string>;
  programme?: string;
  funder: Maybe<string>;
  dates: Maybe<string>;
  role: Maybe<string>;
  /** One outcome line for teasers. Keeps the attribution verb from the brief. */
  teaserLine: string;
  teaserPhoto?: Photo;
  context: Maybe<string>;
  problem: Maybe<string>;
  whatIDid: Maybe<string>[];
  /** A note under the outcome numbers that qualifies all of them. */
  outcomesNote?: string;
  outcomes: Maybe<Outcome>[];
  partners: Maybe<string>[];
  learned: Maybe<string>;
  gallery: Maybe<Photo[]>;
  /** Shown beside the gallery when photos still need confirming. */
  galleryNote?: Todo;
  link?: Maybe<{ href: string; label: string }>;
};

export type TimelineEntry = {
  role: Maybe<string>;
  organisation: Maybe<string>;
  dates: Maybe<string>;
  caseStudySlug?: string;
};
