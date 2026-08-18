"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Lead Generation",
  "Demand Generation",
  "Account-Based Marketing",
  "Partnership & Market Expansion",
  "Revenue Intelligence",
  "Other / Not Sure Yet",
];

const companySizeOptions = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,000+ employees",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Frontend-only for now.
    // Connect this handler to the production form endpoint
    // once the email/CRM submission workflow is defined.

    setSubmitted(true);
  }

  return (
    <section
      id="contact-form"
      className="border-t border-slate-200 bg-[#F7F9FC] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Left — context */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
              DISCOVERY
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-5xl">
              Bring us the
              <span className="block text-cyan-500">
                commercial problem.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              Tell us what you are trying to achieve, what is getting in the
              way, and where you need additional commercial capability.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Start with context
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    You do not need a finished brief or perfect requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Focus on the opportunity
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    We can explore the problem before discussing a solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Keep it practical
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    The conversation should lead to a clear next step.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                SALESFLUANCE
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Intelligence. Execution. Verification. Stronger revenue
                relationships.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              {/* Form header */}
              <div className="border-b border-slate-200 bg-[#0A0E14] px-7 py-7 md:px-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                      CONTACT SALESFLUANCE
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      Tell us what you&apos;re building.
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                      A few details will help us understand the opportunity
                      before the conversation.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 md:flex">
                    <Send className="h-4 w-4 text-cyan-400" />
                  </div>
                </div>
              </div>

              {submitted ? (
                /* Success state — frontend only until backend is connected */
                <div className="px-7 py-16 text-center md:px-10">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50">
                    <CheckCircle2 className="h-7 w-7 text-cyan-600" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                    Thanks for reaching out.
                  </h3>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
                    Your enquiry has been captured in this preview. The
                    production submission and CRM/email connection still need
                    to be configured.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-7 px-7 py-8 md:px-10 md:py-10"
                >
                  {/* Name + Company */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="mb-2 block text-sm font-medium text-slate-800"
                      >
                        Full name
                      </label>

                      <input
                        id="full-name"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Your name"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-slate-800"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Company name"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>
                  </div>

                  {/* Email + Website */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-800"
                      >
                        Work email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="website"
                        className="mb-2 block text-sm font-medium text-slate-800"
                      >
                        Company website
                        <span className="ml-2 text-xs font-normal text-slate-400">
                          Optional
                        </span>
                      </label>

                      <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://company.com"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>
                  </div>

                  {/* Service + Company size */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-slate-800"
                      >
                        What can we help with?
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      >
                        <option value="" disabled>
                          Select an area
                        </option>

                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="company-size"
                        className="mb-2 block text-sm font-medium text-slate-800"
                      >
                        Company size
                      </label>

                      <select
                        id="company-size"
                        name="companySize"
                        defaultValue=""
                        className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      >
                        <option value="" disabled>
                          Select company size
                        </option>

                        {companySizeOptions.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-800"
                    >
                      Tell us about the opportunity
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="What are you trying to achieve? Where is the current challenge?"
                      className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                    />
                  </div>

                  {/* Submit */}
                  <div className="border-t border-slate-200 pt-7">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    >
                      Start the conversation
                    </Button>

                    <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                      By submitting this form, you&apos;re asking SalesFluance
                      to review your enquiry and determine the appropriate next
                      step.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}