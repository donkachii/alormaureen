"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { sendContactMessage } from "@/app/contact/actions";
import {
  contactReasons,
  contactSchema,
  type ContactField,
  type ContactInput,
  type ContactResult,
} from "@/lib/contactSchema";
import { SuccessMessage } from "./SuccessMessage";

const fieldClass =
  "mt-2 block min-h-tap w-full border border-rule bg-transparent px-3 py-2 aria-invalid:border-error aria-invalid:border-2";

const failureMessages = {
  "send-failed":
    "Your message didn’t send, and what you wrote is still here. Try again, or email me at",
  "rate-limited":
    "Too many messages have come from this connection. Wait a few minutes and try again, or email me at",
  invalid: "Some fields need attention. Check the messages above, or email me at",
} as const;

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: ContactField;
  label: string;
  hint?: string;
  error?: string;
  children: (describedBy: string) => React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-bold">
        {label}
        {hint && <span className="font-normal text-ink-muted"> ({hint})</span>}
      </label>
      {children(`${id}-error`)}
      <p id={`${id}-error`} aria-live="polite" className="mt-1 min-h-6 text-small text-error">
        {error}
      </p>
    </div>
  );
}

export function ContactForm({ email }: { email: string }) {
  const [isSending, startSending] = useTransition();
  const [failure, setFailure] = useState<Exclude<ContactResult, { ok: true }>["reason"] | null>(
    null,
  );
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    trigger,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { name: "", email: "", organisation: "", reason: "Opportunity", message: "" },
  });

  // Validates on blur first. Once a field shows an error, it revalidates as the person types.
  function registerField(name: ContactField): UseFormRegisterReturn {
    return register(name, {
      onChange: () => {
        if (errors[name]) void trigger(name);
      },
    });
  }

  const onSubmit = handleSubmit((values, event) => {
    const honeypot = new FormData(event?.target as HTMLFormElement).get("website");
    setFailure(null);
    startSending(async () => {
      try {
        const result = await sendContactMessage(values, honeypot);
        if (result.ok) {
          setSent(true);
          return;
        }
        for (const [field, message] of Object.entries(result.fieldErrors ?? {})) {
          setError(field as ContactField, { message });
        }
        setFailure(result.reason);
      } catch {
        setFailure("send-failed");
      }
    });
  });

  if (sent) return <SuccessMessage />;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <Field id="name" label="Name" hint="required" error={errors.name?.message}>
        {(describedBy) => (
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy}
            className={fieldClass}
            {...registerField("name")}
          />
        )}
      </Field>
      <Field id="email" label="Email" hint="required" error={errors.email?.message}>
        {(describedBy) => (
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy}
            className={fieldClass}
            {...registerField("email")}
          />
        )}
      </Field>
      <Field
        id="organisation"
        label="Organisation"
        hint="optional"
        error={errors.organisation?.message}
      >
        {(describedBy) => (
          <input
            id="organisation"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.organisation)}
            aria-describedby={describedBy}
            className={fieldClass}
            {...registerField("organisation")}
          />
        )}
      </Field>
      <Field id="reason" label="Reason" error={errors.reason?.message}>
        {(describedBy) => (
          <select
            id="reason"
            aria-invalid={Boolean(errors.reason)}
            aria-describedby={describedBy}
            className={fieldClass}
            {...registerField("reason")}
          >
            {contactReasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        )}
      </Field>
      <Field id="message" label="Message" hint="required" error={errors.message?.message}>
        {(describedBy) => (
          <textarea
            id="message"
            rows={7}
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy}
            className={fieldClass}
            {...registerField("message")}
          />
        )}
      </Field>

      {/* Hidden from people. Bots that fill it in are ignored by the Server Action. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="assertive">
        {failure && (
          <p className="mb-4 border-l-2 border-error pl-3">
            {failureMessages[failure]}{" "}
            <a href={`mailto:${email}`} className="link">
              {email}
            </a>
            .
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSending}
          className="tap cursor-pointer bg-accent px-6 font-bold text-on-accent disabled:cursor-progress disabled:opacity-70"
        >
          {isSending ? "Sending your message" : "Send message"}
        </button>
      </div>
    </form>
  );
}
