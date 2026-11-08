"use server";

import * as Sentry from "@sentry/nextjs";
import { headers } from "next/headers";
import { Resend } from "resend";
import { contactSchema, type ContactField, type ContactResult } from "@/lib/contactSchema";
import { isRateLimited } from "@/lib/rateLimit";

export async function sendContactMessage(
  input: unknown,
  honeypot: unknown,
): Promise<ContactResult> {
  return Sentry.withServerActionInstrumentation(
    "sendContactMessage",
    { headers: await headers() },
    () => deliverContactMessage(input, honeypot),
  );
}

async function deliverContactMessage(input: unknown, honeypot: unknown): Promise<ContactResult> {
  // Bots that fill the hidden field get a normal-looking success and nothing is sent.
  if (honeypot) return { ok: true };

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    requestHeaders.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) return { ok: false, reason: "rate-limited" };

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField;
      fieldErrors[field] ??= issue.message;
    }
    return { ok: false, reason: "invalid", fieldErrors };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form: email environment variables are not set.");
    Sentry.captureMessage("Contact form: email environment variables are not set.", "error");
    return { ok: false, reason: "send-failed" };
  }

  const { name, email, organisation, reason, message } = parsed.data;
  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `${reason}: message from ${name.replace(/\s+/g, " ")}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || "Not given"}`,
      `Reason: ${reason}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact form: Resend rejected the message.", error.name);
    // Only the error name goes to Sentry, so nothing from the sender's message leaves the app.
    Sentry.captureMessage("Contact form: Resend rejected the message.", {
      level: "error",
      tags: { resend_error: error.name },
    });
    return { ok: false, reason: "send-failed" };
  }

  return { ok: true };
}
