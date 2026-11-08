import { z } from "zod";

export const contactReasons = ["Opportunity", "Partnership", "Speaking", "Other"] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name, using at least 2 characters.")
    .max(80, "Use 80 characters or fewer for your name."),
  email: z.email("Enter a valid email address, like name@example.com."),
  organisation: z.string().trim().max(120, "Use 120 characters or fewer.").optional(),
  reason: z.enum(contactReasons, { error: "Choose a reason for getting in touch." }),
  message: z
    .string()
    .trim()
    .min(20, "Write at least 20 characters so I can understand your request.")
    .max(2000, "Use 2,000 characters or fewer."),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;

export type ContactResult =
  | { ok: true }
  | {
      ok: false;
      reason: "invalid" | "rate-limited" | "send-failed";
      fieldErrors?: Partial<Record<ContactField, string>>;
    };
