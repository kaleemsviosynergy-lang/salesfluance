"use client";

import React, { useEffect, useState } from "react";
import {
  ClipboardList,
  Search,
  BadgeCheck,
  Mail,
  ThumbsUp,
  Rocket,
  ShieldCheck,
  Briefcase,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Users,
  Zap,
  Target,
  CheckCircle,
  Award,
} from "lucide-react";

type CountUpProps = {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
};

function CountUp({ value, duration = 1500, suffix = "", decimals = 0 }: CountUpProps): React.ReactElement {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const from = 0;
    const to = value;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = from + (to - from) * progress;
      setDisplay(Number(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, decimals]);

  return (
    <span className="font-bold text-3xl md:text-4xl text-white">
      {display.toLocaleString(undefined, { maximumFractionDigits: decimals || 0 })}{suffix}
    </span>
  );
}

export default function Home(): React.ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Qualified Leads Delivered", value: 3200, suffix: "+" },
    { label: "Strategic Partnerships", value: 120, suffix: "+" },
    { label: "Avg MQL → SQL Conversion", value: 40, suffix: "%" },
    { label: "Records Processed", value: 1800000000, suffix: "+" },
  ];

  const services = [
    {
      name: "B2B Lead Generation",
      description: "Targeted outreach to decision-makers in your ICP",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Account Based Marketing",
      description: "Personalized campaigns for high-value accounts",
      image: "https://images.unsplash.com/photo-1520975682509-2f7a2b1f0bdf?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Content Syndication",
      description: "Distribute content to engaged audiences at scale",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "List Building",
      description: "Custom prospect lists built to your specifications",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Data Appending & Cleansing",
      description: "Enrich and validate your existing data",
      image: "https://images.unsplash.com/photo-1581093588401-7b4ac0d3f76c?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "SEO & Content Marketing",
      description: "Organic growth through strategic content",
      image: "https://images.unsplash.com/photo-1508873888654-8df3e2c9f5a9?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Ads & Social Media",
      description: "Multi-channel campaigns across digital platforms",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Telemarketing",
      description: "High-touch outreach with expert sales specialists",
      image: "https://images.unsplash.com/photo-1551836022-2b64f81c5b30?w=1200&q=80&auto=format&fit=crop",
    },
  ];

  const processSteps = [
    { title: "Receive Campaign Specification", icon: ClipboardList },
    { title: "Data Mining & Contact Discovery", icon: Search },
    { title: "Data Verification", icon: BadgeCheck },
    { title: "Email Templates & Scripts", icon: Mail },
    { title: "Client Approval", icon: ThumbsUp },
    { title: "Launch Campaign", icon: Rocket },
    { title: "Quality Audit", icon: ShieldCheck },
    { title: "Qualified Leads", icon: Briefcase },
    { title: "Client Feedback", icon: MessageSquare },
    { title: "A/B Campaign Optimization", icon: BarChart3 },
  ];

  const industries = [
    { name: "SaaS & Cloud", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { name: "Technology", icon: TrendingUp, color: "from-indigo-500 to-purple-500" },
    { name: "Financial Services", icon: Target, color: "from-emerald-500 to-teal-500" },
    { name: "Healthcare & Life Sciences", icon: CheckCircle, color: "from-rose-500 to-pink-500" },
    { name: "Manufacturing & Industrial", icon: Rocket, color: "from-orange-500 to-amber-500" },
    { name: "Professional Services", icon: Award, color: "from-violet-500 to-fuchsia-500" },
  ];

  const testimonials = [
    {
      quote: "SalesFluance delivered high-quality pipeline we could actually convert. Their process is repeatable and scalable.",
      author: "Sarah Johnson",
      company: "Head of Growth, Enterprise SaaS",
      title: "VP Sales Operations",
    },
    {
      quote: "Their data quality and outreach sequences improved our win-rate significantly. Truly enterprise-grade execution.",
      author: "Michael Chen",
      company: "VP Sales, FinTech Company",
      title: "Chief Revenue Officer",
    },
    {
      quote: "Reliable, compliant and results-driven. SalesFluance understands what enterprise demand generation requires.",
      author: "Jennifer Rodriguez",
      company: "CMO, Cloud Platform",
      title: "Senior Director of Demand Gen",
    },
  ];

  const clientLogos = [
    "Acme Corp",
    "TechVision",
    "DataFlow",
    "CloudSync",
    "NextGen AI",
    "Enterprise Pro",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.7s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slide-in { animation: slideInFromLeft 0.6s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.5s ease-out forwards; }
        .hero-image { transition: transform 0.3s ease; }
        .hero-image:hover { transform: scale(1.02); }
        .timeline-item {
          transition: all 0.3s ease;
        }
        .timeline-item:hover {
          transform: translateY(-8px);
        }
        .timeline-item:hover .timeline-circle {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.6);
        }
        .timeline-circle {
          transition: all 0.3s ease;
        }
        .timeline-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .timeline-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 70px rgba(59, 130, 246, 0.18);
        }
        .timeline-badge {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .timeline-badge:hover {
          transform: scale(1.05);
        }
        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(79, 70, 229, 0.15);
        }
      `}</style>

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="rounded-md px-4 py-2 bg-gradient-to-r from-indigo-700 to-sky-700">
                <span className="text-white text-lg font-bold">SalesFluance</span>
              </div>
              <span className="hidden md:inline text-xs text-slate-500 font-medium">Enterprise Demand Generation</span>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="#services" className="text-slate-700 hover:text-indigo-700 transition">Services</a>
              <a href="#process" className="text-slate-700 hover:text-indigo-700 transition">Process</a>
              <a href="#industries" className="text-slate-700 hover:text-indigo-700 transition">Industries</a>
              <a href="#testimonials" className="text-slate-700 hover:text-indigo-700 transition">Testimonials</a>
              <a href="#contact" className="text-slate-700 hover:text-indigo-700 transition">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden md:inline-block px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
                Request Demo
              </button>
              <button className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-600 text-white text-sm font-medium shadow-lg hover:shadow-xl transition">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32 grid gap-12 lg:grid-cols-2 items-center">
          <div className={mounted ? "animate-fade-in-up" : "opacity-0"}>
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
              <span className="text-indigo-400 text-sm font-semibold">Enterprise Demand Generation Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Accelerate Revenue Growth Through Qualified Leads, Strategic Partnerships & AI
            </h1>

            <p className="mt-6 text-lg md:text-xl text-sky-200 max-w-2xl leading-relaxed">
              Helping B2B companies across USA, EMEA and APAC generate qualified opportunities through data-driven demand generation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-indigo-700 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition">
                Get Started
              </button>

              <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition">
                Book Consultation
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  {mounted && <CountUp value={stat.value} duration={2000} suffix={stat.suffix} />}
                  <div className="mt-2 text-xs text-sky-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={mounted ? "animate-fade-in" : "opacity-0"} style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-sky-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop"
                  alt="Enterprise team collaborating"
                  className="hero-image w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl max-w-sm">
                <div className="text-xs text-sky-200 uppercase font-bold">Global Coverage</div>
                <div className="mt-3 flex gap-6 text-sm text-white font-semibold">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/90" /> USA</span>
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/70" /> EMEA</span>
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/70" /> APAC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-sky-600/20 rounded-2xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Founder"
              className="relative rounded-2xl w-full h-96 object-cover shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Founded on Enterprise Expertise</h2>
            <p className="text-lg text-slate-600 mb-4">
              SalesFluance was founded by demand generation veterans with 10+ years of experience building predictable pipeline for Fortune 500 companies. We saw a gap in the market for truly enterprise-grade demand generation—where quality, compliance, and repeatability matter more than volume.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              Our founder led demand generation teams at category leaders like ZoomInfo and Cognism, delivering over $500M in pipeline. Today, we apply those same battle-tested processes and principles to help B2B companies scale revenue responsibly.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Every campaign, every lead, every interaction is measured against one standard: will this create real, qualified opportunity for our clients?
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-indigo-600">10+</div>
                <div className="text-sm text-slate-600 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">$500M+</div>
                <div className="text-sm text-slate-600 mt-1">Pipeline Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">50+</div>
                <div className="text-sm text-slate-600 mt-1">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="bg-gradient-to-r from-slate-50 to-sky-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Industries We Serve</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Industry-specific expertise across enterprise verticals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => {
              const IconComp = industry.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-slate-200 hover:border-indigo-300"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition`}>
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{industry.name}</h3>
                  <p className="text-slate-600 text-sm mt-2">Tailored strategies for {industry.name.toLowerCase()} organizations seeking predictable growth.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">Comprehensive demand generation and data services designed for enterprise B2B companies.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div key={idx} className="service-card group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-lg">{service.name}</h3>
                <p className="mt-2 text-slate-600 text-sm">{service.description}</p>
                <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-center text-sm font-semibold text-slate-600 uppercase tracking-wider mb-8">Trusted by leading enterprises</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center h-16 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition">
                <span className="text-sm font-semibold text-slate-600">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Statistics Section */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">{mounted && <CountUp value={3200} duration={2000} suffix="+" />}</div>
              <p className="text-sky-200 text-lg font-semibold">Qualified Leads Delivered</p>
              <p className="text-sky-300/70 text-sm mt-1">Monthly across our client base</p>
            </div>

            <div>
              <div className="mb-4">{mounted && <CountUp value={98} duration={2000} suffix="%" />}</div>
              <p className="text-sky-200 text-lg font-semibold">Contact Accuracy Rate</p>
              <p className="text-sky-300/70 text-sm mt-1">Industry-leading data quality</p>
            </div>

            <div>
              <div className="mb-4">{mounted && <CountUp value={40} duration={2000} suffix="%" />}</div>
              <p className="text-sky-200 text-lg font-semibold">Avg MQL to SQL</p>
              <p className="text-sky-300/70 text-sm mt-1">Conversion rate across campaigns</p>
            </div>

            <div>
              <div className="mb-4">{mounted && <CountUp value={1800000000} duration={2000} suffix="+" decimals={0} />}</div>
              <p className="text-sky-200 text-lg font-semibold">Records Processed</p>
              <p className="text-sky-300/70 text-sm mt-1">Verified and enriched annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SalesFluance */}
      <section className="bg-gradient-to-r from-slate-50 to-sky-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Why SalesFluance</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-slate-900 text-lg">Data-First Approach</h3>
                <p className="mt-2 text-slate-600">Clean, appended and permissioned datasets tailored to your ideal customer profile.</p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-slate-900 text-lg">Multi-Channel Outreach</h3>
                <p className="mt-2 text-slate-600">ABM, content syndication, ads and telemarketing combined for maximum scale.</p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-slate-900 text-lg">Enterprise Integrations</h3>
                <p className="mt-2 text-slate-600">Seamless CRM and marketing automation integration with comprehensive reporting.</p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-slate-900 text-lg">Compliance & Deliverability</h3>
                <p className="mt-2 text-slate-600">GDPR, CCPA and global data hygiene best practices built into every campaign.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-700 via-sky-700 to-purple-700 text-white rounded-xl p-8 shadow-xl flex flex-col justify-center">
              <h3 className="text-3xl font-bold">Enterprise-Ready Program</h3>
              <p className="mt-4 text-lg text-sky-100">Custom demand generation programs designed for your unique business model and growth targets.</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Predictable Pipeline</div>
                    <div className="text-sm text-sky-100">Monthly MQL and SQL targets with SLA-backed guarantees</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Quality Assurance</div>
                    <div className="text-sm text-sky-100">98%+ contact accuracy and 95%+ email deliverability</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Dedicated Support</div>
                    <div className="text-sm text-sky-100">Account manager and campaign optimization team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Step Lead Generation Process */}
      <section id="process" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900">SalesFluance Lead Generation Roadmap</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">A premium, 10-step enterprise roadmap with proven campaign execution, data verification, and continuous optimization.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute inset-x-0 top-28 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 opacity-40" />

          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, idx) => {
              const IconComponent = step.icon;
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative lg:grid lg:grid-cols-12 lg:items-start">
                  <div className={`lg:col-span-5 ${isLeft ? 'lg:col-start-1 lg:text-right lg:pr-8' : 'lg:col-start-8 lg:text-left lg:pl-8'}`}>
                    <div className="timeline-card group bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-2xl transition">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div>
                          <p className="text-slate-500 uppercase tracking-[0.2em] text-xs">Step {idx + 1}</p>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mt-2">{step.title}</h3>
                        </div>
                        <div className="timeline-badge w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-sky-600 flex items-center justify-center shadow-lg text-white text-lg font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        {idx === 0 && 'Kick off the campaign with precision briefings, target prioritization and enterprise-level strategy alignment.'}
                        {idx === 1 && 'Use advanced intent signals and prospect matching to discover ideal contacts with strong buying potential.'}
                        {idx === 2 && 'Verify contact accuracy with multi-point validation to ensure data quality, deliverability and compliance.'}
                        {idx === 3 && 'Design email copy, sequences and scripts tailored for high-value accounts and executive stakeholders.'}
                        {idx === 4 && 'Secure client approval and align campaign messaging with your brand voice, GTM motion and ICP.'}
                        {idx === 5 && 'Execute campaigns across email, social and teleprospecting with precise cadence and personalization.'}
                        {idx === 6 && 'Run quality audits on every send, refine targeting, and ensure deliverability meets enterprise thresholds.'}
                        {idx === 7 && 'Deliver qualified opportunities and enriched contact insights directly into your CRM or platform.'}
                        {idx === 8 && 'Collect client feedback, build insight loops, and identify high-conversion segments for scaling.'}
                        {idx === 9 && 'Optimize with A/B testing, analytics, and continuous campaign refinement for sustained growth.'}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:col-span-2 lg:items-center lg:justify-center">
                    <div className="relative">
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 h-full w-1 rounded-full bg-gradient-to-b from-sky-400 via-indigo-500 to-purple-500 opacity-60" />
                      <div className="relative w-12 h-12 rounded-full bg-slate-900 border-4 border-white shadow-xl flex items-center justify-center text-white text-lg font-bold">
                        <IconComponent size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="bg-slate-950/5 ring-1 ring-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
            <h4 className="font-bold text-slate-900 text-xl mb-3">Discovery & Validation</h4>
            <p className="text-slate-600">From target research to contact verification, we build the foundation for campaigns that scale with enterprise reliability.</p>
          </div>
          <div className="bg-slate-950/5 ring-1 ring-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
            <h4 className="font-bold text-slate-900 text-xl mb-3">Launch & Optimization</h4>
            <p className="text-slate-600">Launch with precision, monitor performance, and optimize every sequence to improve lead quality and conversion velocity.</p>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-gradient-to-r from-indigo-900 via-sky-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold">Quality Assurance & Data Hygiene</h2>
              <p className="mt-4 text-lg text-sky-200">We enforce strict QA at every stage—validation, deliverability checks, manual verification and continuous optimization.</p>

              <div className="mt-8 space-y-4">
                {[
                  { title: "Manual Verification", desc: "Real humans verify contact intent and accuracy" },
                  { title: "Email Deliverability", desc: "Optimize sending reputation and ESP best-practices" },
                  { title: "GDPR & CCPA Compliance", desc: "Full regulatory compliance for all global campaigns" },
                  { title: "Continuous Optimization", desc: "KPI-driven iterations to improve conversion rates" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-sky-200">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Quality Scorecard</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-sky-200">Contact Accuracy</div>
                  <div className="text-3xl font-bold mt-2">98%</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-sky-200">Email Deliverability</div>
                  <div className="text-3xl font-bold mt-2">95%</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-sky-200">Intent Match Rate</div>
                  <div className="text-3xl font-bold mt-2">87%</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-sky-200">Compliance Rate</div>
                  <div className="text-3xl font-bold mt-2">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Trusted by Enterprise Growth Teams</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-slate-700 italic mb-6">"{testimonial.quote}"</blockquote>
              <div>
                <div className="font-bold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-r from-indigo-700 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Scale Predictable Pipeline?</h2>
              <p className="mt-2 text-lg text-sky-100">Book a demo or talk to our enterprise demand generation team.</p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition">
                Request Demo
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-white font-bold text-lg mb-2">SalesFluance</div>
            <p className="text-sm">Premium B2B demand generation and data services for enterprise growth. 10+ years of expertise building predictable pipeline.</p>
          </div>

          <div>
            <div className="text-white font-bold text-sm mb-4">Services</div>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Lead Generation</a></li>
              <li><a href="#" className="hover:text-white transition">Account Based Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Data Services</a></li>
              <li><a href="#" className="hover:text-white transition">Telemarketing</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold text-sm mb-4">Company</div>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Process</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold text-sm mb-4">Contact</div>
            <div className="text-sm">hello@salesfluance.com</div>
            <div className="text-sm mt-1">+1 (555) 123-4567</div>
            <div className="text-xs text-slate-400 mt-4 font-medium">Serving USA • EMEA • APAC</div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center text-xs text-slate-500">
            <div>© {new Date().getFullYear()} SalesFluance. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}