import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/caseStudies";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/work", "/about", "/contact"];
  return [
    ...paths.map((path) => ({ url: `${site.url}${path}` })),
    ...caseStudies.map((study) => ({ url: `${site.url}/work/${study.slug}` })),
  ];
}
