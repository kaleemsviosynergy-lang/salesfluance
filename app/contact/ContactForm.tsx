"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  website: string;
  service: string;
  companySize: string;
  opportunity: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  company: "",
  email: "",
  website: "",
  service: "",
  companySize: "",
  opportunity: "",
};

const services = [
  "Lead Generation",
  "Demand Generation",
  "Account-Based Marketing",
  "Partnership & Market Expansion",
  "Revenue Intelligence",
  "AI-Assisted Sales & Marketing",
  "Other",
];

const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,001+ employees",
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.company.trim()) {
    errors.company = "Please enter your company name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your business email.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    errors.email = "Please enter a valid business email.";
  }

  if (data.website.trim()) {
    try {
      const normalizedUrl = data.website.startsWith("http")
        ? data.website
        : `https://${data.website}`;

      new URL(normalizedUrl);
    } catch {
      errors.website = "Please enter a valid website.";
    }
  }

  if (!data.service) {
    errors.service = "Please select an area.";
  }

  if (!data.companySize) {
    errors.companySize = "Please select your company size.";
  }

  if (!data.opportunity.trim()) {
    errors.opportunity =
      "Please tell us a little about the opportunity.";
  } else if (data.opportunity.trim().length < 20) {
    errors.opportunity =
      "Please provide a little more context about the opportunity.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = React.useState<FormData>(initialForm);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitted, setSubmitted] = React.useState(false);

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    /*
     * Backend submission will be connected in the next step.
     *
     * We intentionally do NOT pretend that the enquiry was delivered.
     * Once the API/email endpoint is connected, this will become:
     *
     * await fetch("/api/contact", ...)
     */

    setSubmitted(true);
  }

  const inputClasses = (field: keyof FormData) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition
    placeholder:text-slate-400
    ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
    }`;

  return (
    <section className="bg-[#F6F8FB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* LEFT — Context */}
          <div className="pt-6 lg:sticky lg:top-24">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-500">
              Discovery
            </p>

            <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 md:text-5xl">
              Bring us the{" "}
              <span className="text-cyan-500">
                commercial problem.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Tell us what you are trying to achieve, what is getting in
              the way, and where you need additional commercial capability.
            </p>

            <div className="mt-10 space-y-7">
              <ContextItem
                number="01"
                title="Start with context"
                description="You do not need a finished brief or perfect requirements."
              />

              <ContextItem
                number="02"
                title="Focus on the opportunity"
                description="We can explore the problem before discussing a solution."
              />

              <ContextItem
                number="03"
                title="Keep it practical"
                description="The conversation should lead to a clear next step."
              />
            </div>

            <div className="mt-12 border-t border-slate-200 pt-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                SalesFluance
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Intelligence. Execution. Verification. Stronger revenue
                relationships.
              </p>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

            {/* Form Header */}
            <div className="relative bg-[#0A0E14] px-8 py-8 text-white md:px-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Contact SalesFluance
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                    Tell us what you're building.
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                    A few details will help us understand the opportunity
                    before the conversation.
                  </p>
                </div>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-cyan-400 sm:flex">
                  <Send className="h-4 w-4" />
                </div>
              </div>
            </div>

            {submitted ? (
              /* Success State */
              <div className="px-8 py-20 text-center md:px-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
                  <CheckCircle2 className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                  Thanks for sharing the opportunity.
                </h3>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
                  Your information has been validated and is ready for
                  the next step. We will connect the enquiry to our
                  submission system shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="px-8 py-8 md:px-9 md:py-9"
              >
                <div className="grid gap-6 md:grid-cols-2">

                  {/* Full Name */}
                  <Field
                    label="Full name"
                    error={errors.fullName}
                  >
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) =>
                        updateField("fullName", e.target.value)
                      }
                      placeholder="Your name"
                      className={inputClasses("fullName")}
                    />
                  </Field>

                  {/* Company */}
                  <Field
                    label="Company"
                    error={errors.company}
                  >
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        updateField("company", e.target.value)
                      }
                      placeholder="Company name"
                      className={inputClasses("company")}
                    />
                  </Field>

                  {/* Email */}
                  <Field
                    label="Work email"
                    error={errors.email}
                  >
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      placeholder="you@company.com"
                      className={inputClasses("email")}
                    />
                  </Field>

                  {/* Website */}
                  <Field
                    label="Company website"
                    optional
                    error={errors.website}
                  >
                    <input
                      type="text"
                      value={form.website}
                      onChange={(e) =>
                        updateField("website", e.target.value)
                      }
                      placeholder="https://company.com"
                      className={inputClasses("website")}
                    />
                  </Field>

                  {/* Service */}
                  <Field
                    label="What can we help with?"
                    error={errors.service}
                  >
                    <select
                      value={form.service}
                      onChange={(e) =>
                        updateField("service", e.target.value)
                      }
                      className={`${inputClasses(
                        "service"
                      )} appearance-none`}
                    >
                      <option value="">Select an area</option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* Company Size */}
                  <Field
                    label="Company size"
                    error={errors.companySize}
                  >
                    <select
                      value={form.companySize}
                      onChange={(e) =>
                        updateField("companySize", e.target.value)
                      }
                      className={`${inputClasses(
                        "companySize"
                      )} appearance-none`}
                    >
                      <option value="">
                        Select company size
                      </option>

                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Opportunity */}
                <div className="mt-6">
                  <Field
                    label="Tell us about the opportunity"
                    error={errors.opportunity}
                  >
                    <textarea
                      rows={6}
                      value={form.opportunity}
                      onChange={(e) =>
                        updateField("opportunity", e.target.value)
                      }
                      placeholder="What are you trying to achieve? Where is the current challenge?"
                      className={`${inputClasses(
                        "opportunity"
                      )} resize-y`}
                    />
                  </Field>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-slate-200" />

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                >
                  Start the conversation
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="mt-4 text-xs leading-5 text-slate-400">
                  By submitting this form, you're asking SalesFluance to
                  review your enquiry and determine the appropriate next
                  step.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Supporting Components                                                       */
/* -------------------------------------------------------------------------- */

function ContextItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300 text-cyan-500">
        <CheckCircle2 className="h-4 w-4" />
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] font-semibold text-slate-400">
            {number}
          </span>

          <h4 className="text-sm font-semibold text-slate-900">
            {title}
          </h4>
        </div>

        <p className="mt-1.5 max-w-md text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-900">
        {label}

        {optional && (
          <span className="ml-1 text-xs font-normal text-slate-400">
            Optional
          </span>
        )}
      </label>

      {children}

      {error && (
        <p className="mt-2 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}