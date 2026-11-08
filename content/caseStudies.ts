import type { CaseStudy } from "./types";
import { todo } from "./types";
import chamberCloseup from "@/public/images/chamber-closeup.jpg";
import chamberWide from "@/public/images/chamber-wide.jpg";
import dialogue from "@/public/images/basic-education-dialogue.jpg";
import roundtable from "@/public/images/speaking-roundtable.jpg";
import microphone from "@/public/images/speaking-microphone.jpg";

const problem = todo("The problem this work set out to solve, in two or three sentences.");
const learned = todo("One short paragraph on what she learned.");
const gallery = todo("Photos for this project, free of donor and partner logos.");
const funder = todo("Who funded this work.");

const bcaiCredit = "BCAI/Ahmad Tijjani";

const chamberPhoto = {
  src: chamberCloseup,
  alt: "Maureen in a green print dress and headwrap, seated at a microphone in a legislative chamber, reading from a sheet of paper.",
  credit: bcaiCredit,
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "funding-education-in-kano",
    group: "selected",
    title: "Funding education in Kano",
    organisation: "Bridge Connect Africa Initiative",
    programme: "Accountability for Good Governance in Education (AGGE) project",
    funder,
    dates: "Feb 2021 to May 2023",
    role: "Presented a position paper at a public hearing; co-led stakeholder consultations",
    teaserLine:
      "Advocacy contributed to a 2% increase in the share of the state budget allocated to education.",
    teaserPhoto: chamberPhoto,
    context:
      "The Accountability for Good Governance in Education (AGGE) project at Bridge Connect Africa Initiative carried out advocacy across five states. In Kano State, that included the House of Assembly public hearing on the 2023 appropriation bill.",
    problem,
    whatIDid: [
      "Presented a position paper at the Kano State House of Assembly public hearing on the 2023 appropriation bill.",
      "Co-led stakeholder consultations.",
      "Supported the USAID/Palladium-funded SCALE project.",
    ],
    outcomes: [
      {
        kind: "number",
        value: 2,
        suffix: "%",
        label:
          "Advocacy contributed to this increase in the share of the state budget allocated to education.",
      },
      { kind: "number", value: 5, label: "States covered by the advocacy." },
      {
        kind: "statement",
        text: "Consultations produced a citizen participation framework adopted by the Kano State Universal Basic Education Board.",
      },
    ],
    partners: [
      "Related work: the USAID/Palladium-funded SCALE project.",
      todo("Confirm any other partners on the AGGE project."),
    ],
    learned,
    gallery: [
      chamberPhoto,
      {
        src: chamberWide,
        alt: "Wide view of a green legislative chamber, with Maureen speaking at a microphone and delegates seated in rows behind her.",
        credit: bcaiCredit,
      },
      {
        src: dialogue,
        alt: "Maureen in a blue outfit and blue glasses speaking into a microphone in a conference room.",
        credit: bcaiCredit,
      },
      {
        src: roundtable,
        alt: "Maureen in a brown patterned dress standing to speak at a meeting table, with two seated colleagues beside her.",
        credit: bcaiCredit,
      },
      {
        src: microphone,
        alt: "Close view of Maureen in a brown patterned dress speaking into a handheld microphone.",
      },
    ],
    galleryNote: todo(
      "Confirm these photos are from this project, that the credits are right, and that permission and consent are in place.",
    ),
  },
  {
    slug: "100-youth-project",
    group: "selected",
    title: "100 Youth Project",
    organisation: "Teach the Child Initiative",
    funder,
    dates: "2023 to 2024",
    role: "Project Coordinator",
    teaserLine:
      "At mid-project: 91 young people, 21 states, 35 schools, 2,518 students and 187 educators.",
    context:
      "The 100 Youth Project ran at Teach the Child Initiative from 2023 to 2024. Every number on this page is from the mid-project point.",
    problem,
    whatIDid: [
      "Worked as Project Coordinator.",
      "Coordinated communications, including an eight-episode radio playlet, “From Chalkboard to Creativity”.",
      todo("One more thing she did on this project."),
    ],
    outcomesNote: "All figures are at mid-project.",
    outcomes: [
      { kind: "number", value: 91, label: "Young people, at mid-project." },
      { kind: "number", value: 21, label: "States, at mid-project." },
      { kind: "number", value: 35, label: "Schools, at mid-project." },
      { kind: "number", value: 2518, label: "Students, at mid-project." },
      { kind: "number", value: 187, label: "Educators, at mid-project." },
    ],
    partners: [todo("Partners on this project.")],
    learned,
    gallery,
  },
  {
    slug: "learning-spaces-for-sdg-4",
    group: "selected",
    title: "Learning Spaces for SDG 4",
    organisation: "Teach the Child Initiative",
    funder,
    dates: todo("Project dates."),
    role: "Facilitator and grant writer",
    teaserLine:
      "90+ learners across three schools, and a successful grant for 30 JSS Dawaki students.",
    context:
      "Learning Spaces for SDG 4 was a Teach the Child Initiative project in Bwari Area Council, using Teaching at the Right Level, play-based learning and digital resources.",
    problem,
    whatIDid: [
      "Worked as a facilitator with 90+ learners across three schools, through Teaching at the Right Level, play-based learning and digital resources.",
      "Capacity-building for 30+ teachers.",
      "Contributed to a policy brief on learner-centred approaches.",
      "Wrote a successful grant that enabled 30 JSS Dawaki students to take part in a virtual-reality museum experience.",
    ],
    outcomes: [
      { kind: "number", value: 90, suffix: "+", label: "Learners." },
      { kind: "number", value: 3, label: "Schools." },
      { kind: "number", value: 30, suffix: "+", label: "Teachers in capacity-building." },
      {
        kind: "number",
        value: 30,
        label: "JSS Dawaki students in a virtual-reality museum experience.",
      },
    ],
    partners: [todo("Partners on this project.")],
    learned,
    gallery,
  },
  {
    slug: "beyond-the-ballot",
    group: "selected",
    title: "Beyond the Ballot",
    organisation: "DAI",
    programme: "EU Support to Democratic Governance in Nigeria (EU-SDGN II)",
    funder,
    dates: "Nov 2024 to present",
    role: "Project Administration & Logistics Officer",
    teaserLine:
      "Supported programme coordination for a national summit on AI and electoral integrity, with 500+ participants.",
    context:
      "This work sits within EU Support to Democratic Governance in Nigeria (EU-SDGN II) at DAI. It includes a November 2026 national summit on AI, foreign information manipulation and interference, and electoral integrity.",
    problem,
    whatIDid: [
      "Supported programme coordination for the November 2026 national summit on AI, foreign information manipulation and interference, and electoral integrity.",
      "Supports activities with INEC, including institutional support to the Office of the INEC Chairman.",
      todo("One more thing she did in this role."),
    ],
    outcomes: [{ kind: "number", value: 500, suffix: "+", label: "Summit participants." }],
    partners: [
      "EU Support to Democratic Governance in Nigeria (EU-SDGN II).",
      "Activities with INEC.",
    ],
    learned,
    gallery,
  },
  {
    slug: "strive-for-five",
    group: "selected",
    title: "Strive for Five",
    organisation: "Refab Africa Initiative",
    programme: "World Cleanup Day 2025, Abuja",
    funder,
    dates: "2025",
    role: "Volunteer campaign coordinator",
    teaserLine: "7,000+ clothing items collected for recycling and redistribution.",
    context:
      "Strive for Five was a Refab Africa Initiative campaign for World Cleanup Day 2025 in Abuja.",
    problem,
    whatIDid: [
      "Worked as volunteer campaign coordinator.",
      "37 volunteers mobilised.",
      "School outreach on refuse, reduce, reuse, recycle.",
    ],
    outcomes: [
      { kind: "number", value: 37, label: "Volunteers mobilised." },
      { kind: "number", value: 1000, suffix: "+", label: "People reached." },
      {
        kind: "number",
        value: 7000,
        suffix: "+",
        label: "Clothing items collected for recycling and redistribution.",
      },
    ],
    partners: [todo("Partners on this campaign.")],
    learned,
    gallery,
  },
  {
    slug: "hope4pkd",
    group: "alternate",
    title: "Hope4PKD",
    organisation: "Hope4PKD",
    funder,
    dates: "2025 to present",
    role: "Co-founder",
    teaserLine:
      "Co-founder. Programme development, the ‘Run for PKD Patients’ fundraising campaign, and website and registration support.",
    context: todo("What Hope4PKD is and who it serves."),
    problem,
    whatIDid: [
      "Programme development.",
      "The ‘Run for PKD Patients’ fundraising campaign.",
      "Website and registration support.",
    ],
    outcomes: [todo("Outcome numbers for Hope4PKD.")],
    partners: [todo("Partners and funders of Hope4PKD.")],
    learned,
    gallery,
    link: todo("Link to the Hope4PKD website."),
  },
  {
    slug: "peace-first",
    group: "alternate",
    title: "Peace First Ambassador and Hackathon Facilitator",
    organisation: "Peace First",
    funder,
    dates: "2023 to 2024",
    role: "Ambassador and Hackathon Facilitator",
    teaserLine:
      "One of 26 from 427 applicants across 15 countries; facilitated 60+ young changemakers.",
    context: todo("What the ambassador programme and hackathon were."),
    problem,
    whatIDid: [
      "Selected as one of 26 from 427 applicants across 15 countries.",
      "Facilitated 60+ young changemakers across sub-Saharan Africa, Asia and Latin America.",
      todo("One more thing she did in this role."),
    ],
    outcomes: [
      {
        kind: "number",
        value: 26,
        label: "Ambassadors from 427 applicants across 15 countries. I was one of them.",
      },
      {
        kind: "number",
        value: 60,
        suffix: "+",
        label: "Young changemakers across sub-Saharan Africa, Asia and Latin America.",
      },
    ],
    partners: [todo("Partners on this work.")],
    learned,
    gallery,
  },
  {
    slug: "pact-gatefield-kano-hub",
    group: "alternate",
    title: "PACT / Gatefield Kano Hub",
    organisation: "PACT / Gatefield",
    funder,
    dates: "Feb 2022 to present",
    role: "Kano Hub Lead",
    teaserLine: "Kano Hub Lead for a youth network of 200+ on clean air and tobacco control.",
    context: "A youth network of 200+ for clean air and tobacco control, with a hub in Kano.",
    problem,
    whatIDid: ["Kano Hub Lead for the youth network.", "Paint the Change.", "#CleanAirNaija."],
    outcomes: [
      {
        kind: "number",
        value: 200,
        suffix: "+",
        label: "Young people in the network for clean air and tobacco control.",
      },
    ],
    partners: [todo("Partners on this work.")],
    learned,
    gallery,
  },
  {
    slug: "youth-and-gender-kano",
    group: "alternate",
    title: "Youth and gender project",
    organisation: todo("The organisation that ran this project."),
    funder: "UNFPA-supported",
    dates: todo("Project dates."),
    role: todo("Her role on this project."),
    teaserLine: "428 beneficiaries across four LGAs in Kano.",
    context: "A UNFPA-supported youth and gender project in four LGAs in Kano.",
    problem,
    whatIDid: [todo("What she did on this project, in 3 to 5 bullets.")],
    outcomes: [
      { kind: "number", value: 428, label: "Beneficiaries." },
      { kind: "number", value: 4, label: "LGAs in Kano." },
    ],
    partners: [todo("Partners on this project.")],
    learned,
    gallery,
  },
];

export const selectedWork = caseStudies.filter((study) => study.group === "selected");
export const alternateWork = caseStudies.filter((study) => study.group === "alternate");

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

/** Previous and next wrap around, so every case study has both. */
export function getNeighbours(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  const count = caseStudies.length;
  return {
    previous: caseStudies[(index - 1 + count) % count]!,
    next: caseStudies[(index + 1) % count]!,
  };
}
