import type { Maybe, Photo } from "./types";
import { todo } from "./types";
import portrait from "@/public/images/maureen-portrait.jpg";
import certificates from "@/public/images/maureen-certificates.jpg";

export const site = {
  name: "Maureen Aggie Alor",
  location: "Abuja, Nigeria",
  email: "alormaureen@gmail.com",
  linkedIn: "https://www.linkedin.com/in/maureenalor/",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  description:
    "Development professional in Abuja, Nigeria, who coordinates donor-funded governance, education and youth-development programmes.",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const hero = {
  greeting: "Hello.",
  name: "I’m Maureen.",
  line: "I help programmes reach the people they were built for.",
} as const;

export const intro = {
  statement:
    "Development professional and Public Administration graduate who coordinates donor-funded governance, education and youth-development programmes in Nigeria.",
  interests:
    "Interested in inclusive public policy, digital development, AI and technology that widens access to opportunity, particularly for women, girls and underserved communities.",
} as const;

export const portraitPhoto: Photo = {
  src: portrait,
  alt: "Maureen smiling outdoors in a leopard-print scarf and burgundy top, holding a phone.",
};

export const certificatesPhoto: Photo = {
  src: certificates,
  alt: "Maureen in a Civic Changemaker cap and T-shirt holding up two certificates bearing her name.",
};

/** Organisations she worked with directly. Funders appear only on case studies, in the brief's wording. */
export const organisations = [
  "Bridge Connect Africa Initiative",
  "Teach the Child Initiative",
  "DAI",
  "Refab Africa Initiative",
  "Hope4PKD",
  "Peace First",
  "PACT",
  "Gatefield",
] as const;

/** Each descriptor is drawn from the case studies, so it says nothing the brief does not. */
export const focusAreas: { title: string; descriptor: Maybe<string> }[] = [
  {
    title: "Programme design and coordination",
    descriptor: "Project Coordinator on the 100 Youth Project, across 21 states at mid-project.",
  },
  {
    title: "Policy advocacy and citizen participation",
    descriptor:
      "Presented a position paper at the Kano State House of Assembly public hearing on the 2023 appropriation bill.",
  },
  {
    title: "Stakeholder and community mobilisation",
    descriptor:
      "Co-led stakeholder consultations in Kano and coordinated a volunteer campaign in Abuja.",
  },
  {
    title: "Education and youth development",
    descriptor: "Facilitator with 90+ learners across three schools in Bwari Area Council.",
  },
  {
    title: "Operations, logistics and procurement",
    descriptor: "Project Administration & Logistics Officer at DAI on EU-SDGN II.",
  },
  {
    title: "Reporting, documentation and donor compliance",
    descriptor: todo("One line of evidence for this focus area."),
  },
];

export const recognition = [
  { title: "Peace First Ambassador", detail: "2023 to 2024" },
  { title: "Civic Changemakers Fellowship Best Participant", detail: "2022" },
  { title: "Bridge Connect Africa Outstanding Excellence commendation", detail: null },
] as const;
