import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Contact Maureen Aggie Alor about an opportunity, a partnership or speaking.",
  "/contact",
);

export default function ContactPage() {
  return (
    <Container className="pt-[clamp(2.5rem,8vw,6rem)]">
      <h1 className="text-h1">Contact.</h1>
      <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="max-w-[26ch] text-lead">
            Write to me about an opportunity, a partnership or speaking.
          </p>
          <ul className="mt-6">
            <li>
              <a href={`mailto:${site.email}`} className="tap link">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedIn} className="tap link">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="max-w-2xl md:col-span-8">
          <ContactForm email={site.email} />
        </div>
      </div>
    </Container>
  );
}
