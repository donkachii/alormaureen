import * as Sentry from "@sentry/nextjs";
import { sentryDataCollection } from "@/lib/sentryDataCollection";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  dataCollection: sentryDataCollection,
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
});
