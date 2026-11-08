# Maureen Aggie Alor: portfolio

A static portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion for React. Every page is generated at build time. The only server code is the contact form's Server Action, which sends email through Resend.

## Before this site goes public

The site shows a visible **TODO** wherever content is still missing, on every build including production. Don't share the link publicly until the [content list](#content-still-needed) is cleared.

## Setup

You need Node 20.9 or newer and pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site runs at http://localhost:3000. It works without environment variables, but the contact form shows its failure message until email is set up.

| Variable                 | What it does                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`         | API key from [Resend](https://resend.com/api-keys).                                                    |
| `CONTACT_TO_EMAIL`       | The inbox that receives messages.                                                                      |
| `CONTACT_FROM_EMAIL`     | The sender, on a domain verified in Resend, for example `Portfolio <hello@your-domain.com>`.           |
| `NEXT_PUBLIC_SITE_URL`   | The public URL with no trailing slash. Used for metadata, the sitemap and JSON-LD.                     |
| `NEXT_PUBLIC_SENTRY_DSN` | Sends errors and traces to Sentry, from the browser and the server. Sentry stays off when it is empty. |
| `SENTRY_AUTH_TOKEN`      | Uploads source maps to Sentry during `pnpm build`, so stack traces stay readable. Secret.              |

Other commands: `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm typecheck`, `pnpm format`.

## Editing content

All content lives in three typed files. There is no CMS or database.

| File                     | Holds                                                                |
| ------------------------ | -------------------------------------------------------------------- |
| `content/site.ts`        | Identity, hero, intro, organisations, focus areas, recognition.      |
| `content/caseStudies.ts` | All 9 case studies. The order here sets the previous and next links. |
| `content/experience.ts`  | Timeline, education, courses, tools, interests, story, CV.           |

To fill in missing content, find its `todo("...")` and replace the whole call with the real text. For example:

```ts
problem: todo("The problem this work set out to solve, in two or three sentences."),
// becomes
problem: "Your two or three sentences.",
```

The TODO disappears from the page, and TypeScript flags any field left in the wrong shape.

**Outcome numbers** count up automatically:

```ts
{ kind: "number", value: 7000, suffix: "+", label: "Clothing items collected for recycling and redistribution." }
```

**Photos** go in `public/images/`. Import the file at the top of the content file, then add it with alt text describing what can be seen:

```ts
{ src: myPhoto, alt: "What the photo shows.", credit: "Photographer's name" }
```

**The CV** goes in `public/cv/`. Then replace `cv` in `content/experience.ts` with `{ href: "/cv/your-file.pdf", label: "Download my CV" }`.

### Content rules

- Keep attribution verbs as they are: "contributed to", "supported", "co-led". Don't upgrade them to "led", "secured" or "delivered".
- Keep qualifiers next to their numbers, such as "at mid-project".
- Don't use donor or partner logos, including in photos. Name organisations in text.
- Don't publish a photo of a child without documented consent.

## Deploying to Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js and pnpm.
2. Add the four environment variables above under **Settings > Environment Variables**.
3. Verify a sending domain in Resend and use it for `CONTACT_FROM_EMAIL`.
4. Deploy, then send a test message through `/contact` and confirm it arrives.

## Content still needed

### Maureen's questionnaire

These answers clear most of the list. Short, plain answers are fine, and "not applicable" is a useful answer too.

**For each of the 9 case studies** (Funding education in Kano, 100 Youth Project, Learning Spaces for SDG 4, Beyond the Ballot, Strive for Five, Hope4PKD, Peace First, PACT / Gatefield Kano Hub, Youth and gender project):

1. What problem was this work trying to solve, and for whom?
2. Who funded it?
3. Who were the partners?
4. What did you learn? One short paragraph.
5. Do you have photos with no donor or partner logos, and permission to use them?

**Specific questions:**

6. _Beyond the Ballot:_ has the November 2026 summit happened, and is "500+ participants" a final count or a target? The site currently avoids saying either way.
7. _Beyond the Ballot:_ can the funder be listed as the European Union?
8. _Beyond the Ballot and 100 Youth Project:_ what is one more thing you did in each role?
9. _Peace First:_ what were the ambassador programme and hackathon, and what is one more thing you did?
10. _Learning Spaces for SDG 4:_ what were the project dates?
11. _Hope4PKD:_ what is it, who does it serve, what are its results so far, and what is the website address?
12. _Youth and gender project:_ which organisation ran it, what was your role, what are the dates, and what did you do? (3 to 5 points.)
13. _Bridge Connect Africa Initiative:_ what was your job title? A fellowship graphic says "Programs Assistant". Is that right for the whole period?
14. _Focus area 06, Reporting, documentation and donor compliance:_ what one line of evidence can the site show?
15. _About page:_ your story in your own words. Where did you start, why this work, and what comes next?
16. _Hero:_ are you happy with "Hello. I'm Maureen. I help programmes reach the people they were built for."?

**Files and details:**

17. Your CV as a PDF.
18. The production domain.

### Photos to confirm

- **Funding education in Kano gallery:** the five photos appear to be from this work but nothing confirms it. Please check they belong here, that the "BCAI/Ahmad Tijjani" credits are right, and that you have permission to use them and consent from other identifiable people. This includes the chamber photo that also appears when hovering over the project on the home page.
- **Radio studio photos (held back):** are they from "From Chalkboard to Creativity"? If so, they could go on the 100 Youth Project page.

### Photos left out on purpose

- **Partner or donor logos:** the EU flag portraits, the EU-SDGN exhibition boards, the DAI registration desk, the SCALE banner, American Spaces and the CODE banners.
- **Possible child safeguarding concern:** the photo with two girls who appear to be school age, and another from the same event.
- **Graphics and broadcast frames:** the International Women's Day and Civic Changemakers graphics, and the TV frame.
- **Work not in the brief:** the gender-based violence work in Kano, American Spaces, the National Peace Committee, YALI Network Kano and the child rights TV appearance. If Maureen wants any of these on the site, send the details and they can become content.

## Technical notes

- **Rate limit:** the contact form allows 5 messages per IP every 10 minutes. It's held in memory, so it applies per server instance and resets on cold starts. It stops casual abuse, not a determined attacker.
- **TypeScript 6:** pinned to 6.0.3 because `typescript-eslint` doesn't support TypeScript 7 yet.
- **Fonts:** Gloock and Public Sans load through `next/font`. `assets/Gloock-Regular.ttf` is used only to generate the Open Graph image and favicon.
