"use client";

import type { Metadata } from "next";
import type React from "react";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe2,
  Mail,
  PhoneCall,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

// Note: Metadata export will need to be in a separate server component file
// For now, we'll use this in the layout or a separate metadata file

const whyCards = [
  {
    icon: Target,
    title: "Precision & Strategy",
    description:
      "We take time to understand your business, market, and growth challenges before recommending solutions.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Approach",
    description:
      "Every recommendation is backed by data and designed to deliver measurable pipeline growth.",
  },
  {
    icon: CheckCircle,
    title: "Partnership First",
    description:
      "We're invested in your success and treat every client as a long-term strategic partner.",
  },
];

const contactInfo = [
  {
    region: "USA",
    description: "East Coast & West Coast coverage",
  },
  {
    region: "EMEA",
    description: "Europe, Middle East & Africa",
  },
  {
    region: "APAC",
    description: "Asia Pacific expansion support",
  },
];

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  serviceInterested: string;
  message: string;
}

export default function ContactPage(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    serviceInterested: "B2B Lead Generation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        companyName: "",
        businessEmail: "",
        phoneNumber: "",
        serviceInterested: "B2B Lead Generation",
        message: "",
      });
    }, 3000);
  };

  return (
    <main className="bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 px-6 py-20 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-16 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/70 px-4 py-2 text-sm text-sky-200 shadow-lg shadow-slate-950/20 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span>Get in touch with our growth specialists</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let's Start a Conversation
              </h1>
              <p className="text-xl leading-9 text-slate-200 sm:text-2xl">
                Whether you're looking for qualified leads, strategic partnerships, or demand generation support, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Contact Form */}
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
              <h2 className="text-2xl font-semibold text-white">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-400">We typically respond within 24 business hours.</p>

              {submitted ? (
                <div className="mt-8 rounded-3xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                  <div className="flex justify-center">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
                      <CheckCircle className="h-7 w-7 text-green-400" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-green-400">Message sent!</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Thanks for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-200">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-200">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessEmail" className="block text-sm font-medium text-slate-200">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-200">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceInterested" className="block text-sm font-medium text-slate-200">
                      Service Interested In *
                    </label>
                    <select
                      id="serviceInterested"
                      name="serviceInterested"
                      value={formData.serviceInterested}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
                    >
                      <option>B2B Lead Generation</option>
                      <option>Account-Based Marketing</option>
                      <option>Content Syndication</option>
                      <option>Data Appending & Cleansing</option>
                      <option>AI-Powered Outreach</option>
                      <option>Partner Acquisition</option>
                      <option>Business Development Support</option>
                      <option>Strategic Networking</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
                      placeholder="Tell us about your growth goals and challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                  >
                    Send Message
                    <ArrowRight className="ml-3 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
                <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
                <p className="mt-2 text-sm text-slate-400">Reach out to our team directly.</p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/15">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        <a href="mailto:hello@salesfluance.com" className="hover:text-cyan-400 transition">
                          hello@salesfluance.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/15">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Response within 24 business hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/15">
                      <Globe2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Global Coverage</p>
                      <div className="mt-3 space-y-2">
                        {contactInfo.map((info) => (
                          <div key={info.region}>
                            <p className="font-semibold text-white">{info.region}</p>
                            <p className="text-sm text-slate-400">{info.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Quick Facts</p>
                <div className="mt-6 space-y-4">
                  {[
                    "Response within 24 business hours",
                    "No long-term contracts required",
                    "Customized growth strategies",
                    "Transparent pricing & reporting",
                  ].map((fact) => (
                    <div key={fact} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span className="text-slate-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact SalesFluance */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Why Contact Us</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What sets SalesFluance apart
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              We're not just another vendor—we're a strategic growth partner invested in your long-term success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 transition hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-slate-400 leading-7">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-10 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to Accelerate Growth?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Join ambitious B2B companies that are scaling faster with SalesFluance. Let's explore how we can build a custom growth strategy for your team.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <a
                href="mailto:hello@salesfluance.com"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Book a Discovery Call
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
