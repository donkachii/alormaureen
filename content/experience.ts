import type { Maybe, Photo, TimelineEntry } from "./types";
import { todo } from "./types";
import meeting from "@/public/images/maureen-meeting.jpg";
import sdgSigns from "@/public/images/maureen-sdg-signs.jpg";

export const timeline: TimelineEntry[] = [
  {
    role: "Co-founder",
    organisation: "Hope4PKD",
    dates: "2025 to present",
    caseStudySlug: "hope4pkd",
  },
  {
    role: "Volunteer campaign coordinator",
    organisation: "Refab Africa Initiative",
    dates: "2025",
    caseStudySlug: "strive-for-five",
  },
  {
    role: "Project Administration & Logistics Officer",
    organisation: "DAI",
    dates: "Nov 2024 to present",
    caseStudySlug: "beyond-the-ballot",
  },
  {
    role: "Ambassador and Hackathon Facilitator",
    organisation: "Peace First",
    dates: "2023 to 2024",
    caseStudySlug: "peace-first",
  },
  {
    role: "Project Coordinator",
    organisation: "Teach the Child Initiative",
    dates: "2023 to 2024",
    caseStudySlug: "100-youth-project",
  },
  {
    role: "Facilitator and grant writer",
    organisation: "Teach the Child Initiative",
    dates: todo("Dates for Learning Spaces for SDG 4."),
    caseStudySlug: "learning-spaces-for-sdg-4",
  },
  {
    role: "Kano Hub Lead",
    organisation: "PACT / Gatefield",
    dates: "Feb 2022 to present",
    caseStudySlug: "pact-gatefield-kano-hub",
  },
  {
    role: todo("Her job title at Bridge Connect Africa Initiative."),
    organisation: "Bridge Connect Africa Initiative",
    dates: "Feb 2021 to May 2023",
    caseStudySlug: "funding-education-in-kano",
  },
  {
    role: todo("Her role on the UNFPA-supported youth and gender project."),
    organisation: todo("The organisation that ran it."),
    dates: todo("Project dates."),
    caseStudySlug: "youth-and-gender-kano",
  },
];

export const education = [
  {
    award: "B.Sc. Public Administration",
    institution: "University of Benin",
    year: "2019",
    note: "Second Class Upper",
  },
  {
    award: "ND Mass Communication",
    institution: "Federal Polytechnic Bauchi",
    year: "2012",
    note: null,
  },
] as const;

export const courses = [
  {
    title: "Using Public Policy for Social Change",
    provider: "University of Michigan",
    year: "2026",
  },
  { title: "AI Career Essentials", provider: "ALX", year: "2024" },
  {
    title: "Understanding International Development",
    provider: "The Open University",
    year: "2023",
  },
  { title: "Civic Changemaker Programme", provider: "TransparencIT", year: "2023" },
  { title: "Solving Public Problems", provider: "The Governance Lab", year: "2022" },
  { title: "UPG Sustainability Leadership", provider: "United People Global", year: "2022" },
] as const;

export const tools = [
  "Microsoft 365",
  "Google Workspace",
  "Asana",
  "ClickUp",
  "Notion",
  "KoboToolbox",
  "Canva",
] as const;

export const interests = [
  "Inclusive public policy",
  "International development",
  "Education",
  "Digital development",
  "AI governance",
  "Gender equality",
  "Climate sustainability",
] as const;

export const story: Maybe<string> = todo(
  "Her story in her own words: where she started, why this work, what comes next.",
);

/** Replace with { href: "/cv/your-file.pdf", label: "Download my CV" } once the PDF is in public/cv/. */
export const cv: Maybe<{ href: string; label: string }> = todo(
  "Her CV as a PDF. Save it to public/cv/ and link it here.",
);

export const aboutPhotos: { lead: Photo; secondary: Photo } = {
  lead: {
    src: sdgSigns,
    alt: "Maureen smiling in a floral dress and headwrap, holding up signs for Sustainable Development Goals 4 and 5, Quality Education and Gender Equality.",
  },
  secondary: {
    src: meeting,
    alt: "Maureen in a yellow and patterned dress listening at a meeting table, pen in hand, chin resting on her hand.",
  },
};
