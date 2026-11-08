import { withSentryConfig } from "@sentry/nextjs/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1440, 1920],
    imageSizes: [128, 256, 384],
  },
};

export default withSentryConfig(nextConfig, {
  org: "the-grid-hub",
  project: "alormaureen",
  widenClientFileUpload: true,
  silent: !process.env.CI,
});
