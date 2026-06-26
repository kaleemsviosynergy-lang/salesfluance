"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "VP of Sales",
    company: "TechNova Inc.",
    quote:
      "SalesFluance transformed our outbound strategy. Within 90 days we generated 170+ qualified meetings and significantly improved our pipeline quality.",
  },
  {
    name: "Michael Carter",
    position: "Founder & CEO",
    company: "GrowthStack Solutions",
    quote:
      "Their strategic partnership approach helped us enter new markets and build relationships with enterprise decision-makers much faster.",
  },
  {
    name: "Emily Roberts",
    position: "Marketing Director",
    company: "CloudBridge Technologies",
    quote:
      "Professional, transparent and results-driven. The team consistently delivered verified leads that converted into real business opportunities.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            CLIENT SUCCESS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by Growing Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our focus is simple—deliver measurable business growth through
            quality partnerships and predictable demand generation.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="mr-1 h-5 w-5 fill-orange-400 text-orange-400"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600 italic">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="text-slate-500">
                  {testimonial.position}
                </p>

                <p className="font-semibold text-sky-600">
                  {testimonial.company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}