import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="pt-[clamp(2.5rem,8vw,6rem)]">
      <h1 className="text-h1">Page not found.</h1>
      <p className="mt-6 max-w-measure text-lead">
        This address doesn’t match a page on this site.
      </p>
      <p className="mt-4">
        <Link href="/" className="tap link">
          Go to the home page
        </Link>
      </p>
    </Container>
  );
}
