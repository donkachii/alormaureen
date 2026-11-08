import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function ContactCta() {
  return (
    <Section id="contact-cta" title="Contact.">
      <p className="max-w-[30ch] text-lead">
        Write to me about an opportunity, a partnership or speaking.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
        <Link
          href="/contact"
          className="tap bg-accent px-6 font-bold text-on-accent transition-transform duration-200 hover:-translate-y-0.5"
        >
          Send a message
        </Link>
        <a href={`mailto:${site.email}`} className="tap link">
          {site.email}
        </a>
      </div>
    </Section>
  );
}
