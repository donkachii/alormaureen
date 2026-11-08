import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { certificatesPhoto, recognition } from "@/content/site";

export function Recognition() {
  return (
    <Section id="recognition" title="Recognition.">
      <div className="grid gap-8 lg:grid-cols-2">
        <ul>
          {recognition.map((item) => (
            <li key={item.title} className="border-t border-rule py-5 last:border-b">
              <p className="text-h3 leading-snug">{item.title}</p>
              {item.detail && <p className="mt-1 text-ink-muted">{item.detail}</p>}
            </li>
          ))}
        </ul>
        <Image
          src={certificatesPhoto.src}
          alt={certificatesPhoto.alt}
          placeholder="blur"
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 60vw, 90vw"
          className="aspect-3/2 w-full object-cover"
        />
      </div>
    </Section>
  );
}
