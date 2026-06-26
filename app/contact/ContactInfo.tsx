"use client";

import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 832-961-1844",
    href: "tel:+918329611844",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@salesfluance.com",
    href: "mailto:hello@salesfluance.com",
  },
  {
    icon: Globe,
    title: "Website",
    value: "salesfluance.com",
    href: "https://salesfluance.com",
  },
  {
    icon: Globe,
    title: "LinkedIn",
    value: "linkedin.com/company/salesfluance",
    href: "https://www.linkedin.com/company/salesfluance",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pune, Maharashtra, India",
    href: "https://maps.google.com/?q=Pune,Maharashtra",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Saturday | 9:00 AM - 7:00 PM",
    href: "#",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            CONTACT INFORMATION
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Let's Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We'd love to discuss your growth goals and show how SalesFluance
            can help you generate qualified leads, build partnerships, and
            accelerate revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-slate-600">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}