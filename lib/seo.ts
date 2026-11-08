import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [site.linkedIn],
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Benin" },
      { "@type": "CollegeOrUniversity", name: "Federal Polytechnic Bauchi" },
    ],
  };
}
