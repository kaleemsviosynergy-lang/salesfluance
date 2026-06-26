"use client";

export default function ContactForm() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            SEND US A MESSAGE
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Start Growing Today
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Smith"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Company Name
              </label>

              <input
                type="text"
                placeholder="ABC Technologies"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Business Email
              </label>

              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-medium text-slate-700">
              Service Interested In
            </label>

            <select
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-sky-500"
            >
              <option>Select a Service</option>
              <option>Lead Generation</option>
              <option>Account Based Marketing</option>
              <option>Demand Generation</option>
              <option>Email Marketing</option>
              <option>AI Outreach</option>
              <option>Market Expansion</option>
            </select>

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-medium text-slate-700">
              Tell us about your project
            </label>

            <textarea
              rows={6}
              placeholder="Describe your goals and requirements..."
              className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
            />

          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-orange-600 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Schedule a Discovery Call →
          </button>

        </form>

      </div>
    </section>
  );
}