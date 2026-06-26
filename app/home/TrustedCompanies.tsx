"use client";

import { ShieldCheck, Globe2, Users } from "lucide-react";

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Trusted by Growing Businesses
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Helping Modern B2B Companies Scale Faster
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            SalesFluance partners with startups, agencies and enterprise
            businesses to generate predictable revenue through strategic demand
            generation and partnerships.
          </p>
        </div>

        {/* Logo Row */}

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {[
            "HubSpot",
            "Salesforce",
            "Zoho",
            "Microsoft",
            "Oracle",
            "SAP",
          ].map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-slate-200 bg-slate-50 py-6 text-center text-lg font-semibold text-slate-500 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:text-blue-600"
            >
              {company}
            </div>
          ))}
        </div>

        {/* Trust Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <ShieldCheck className="mb-6 h-10 w-10 text-blue-600" />

            <h3 className="text-xl font-bold text-slate-900">
              9+ Years Experience
            </h3>

            <p className="mt-3 text-slate-600">
              Years of experience in B2B sales, partnerships and revenue growth.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <Globe2 className="mb-6 h-10 w-10 text-orange-500" />

            <h3 className="text-xl font-bold text-slate-900">
              Global Network
            </h3>

            <p className="mt-3 text-slate-600">
              Connecting businesses with qualified decision-makers across industries.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <Users className="mb-6 h-10 w-10 text-blue-600" />

            <h3 className="text-xl font-bold text-slate-900">
              Long-Term Partnerships
            </h3>

            <p className="mt-3 text-slate-600">
              We believe in building relationships—not just generating leads.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}