"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Zap,
  TrendingUp,
  Target,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Database,
  ArrowDown,
} from "lucide-react";

/**
 * ABMHeroVisual
 *
 * Premium ABM revenue-intelligence interface for the dedicated ABM hero.
 * The visual deliberately uses the available canvas instead of relying on
 * translucent/blurred decorative space.
 */
export default function ABMHeroVisual(): React.JSX.Element {
  const stakeholders = [
    { id: "economic-buyer", name: "Economic Buyer", role: "VP / Director", tone: "purple", position: "top-left" },
    { id: "technical-evaluator", name: "Technical Evaluator", role: "Manager / Engineer", tone: "blue", position: "top-right" },
    { id: "champion", name: "Champion", role: "Sr. Manager / Leader", tone: "teal", position: "bottom-left" },
    { id: "procurement", name: "Procurement", role: "Procurement Manager", tone: "orange", position: "bottom-right" },
  ] as const;

  const journey = [
    { label: "Intent Signals", detail: "Research & buying intent", icon: Zap },
    { label: "Coordinated Engagement", detail: "Multi-channel outreach", icon: MessageSquare },
    { label: "Qualified Opportunities", detail: "Sales-ready pipeline", icon: BarChart3 },
    { label: "Revenue Growth", detail: "Measurable impact", icon: TrendingUp },
  ];

  const summary = [
    { label: "Decision Makers", value: "98+" },
    { label: "Intent Coverage", value: "Live" },
    { label: "Account Tier", value: "Tier 1" },
  ];

  const toneStyles = {
    purple: { icon: "bg-violet-100 text-violet-600", dot: "bg-violet-500" },
    blue: { icon: "bg-blue-100 text-blue-600", dot: "bg-blue-500" },
    teal: { icon: "bg-emerald-100 text-emerald-600", dot: "bg-emerald-500" },
    orange: { icon: "bg-orange-100 text-orange-600", dot: "bg-orange-500" },
  } as const;

  return (
    <div className="relative mx-auto w-full max-w-[630px] select-none">
      <div className="relative aspect-square overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_28px_80px_rgba(30,41,59,.12)] sm:p-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.04) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.18em] text-indigo-700">
              Account Intelligence
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[.12em] text-emerald-700">
              Live
            </span>
          </div>

          <div className="mt-3 grid flex-1 grid-cols-[1.25fr_0.75fr] gap-3">
            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50/60 p-2">
              <div aria-hidden="true" className="absolute inset-x-[18%] top-[18%] bottom-[18%] rounded-full border border-indigo-100" />
              <div aria-hidden="true" className="absolute inset-x-[29%] top-[29%] bottom-[29%] rounded-full border border-violet-100" />
              <div aria-hidden="true" className="absolute inset-x-[41%] top-[41%] bottom-[41%] rounded-full bg-indigo-50/80" />

              {stakeholders.map((stakeholder, index) => {
                const tone = toneStyles[stakeholder.tone];
                const positionMap = {
                  "top-left": "left-[7%] top-[9%]",
                  "top-right": "right-[7%] top-[13%]",
                  "bottom-left": "left-[9%] bottom-[11%]",
                  "bottom-right": "right-[9%] bottom-[15%]",
                } as const;

                return (
                  <motion.div
                    key={stakeholder.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className={`absolute z-20 w-[126px] rounded-2xl border border-slate-200 bg-white/95 p-2.5 shadow-[0_16px_30px_rgba(15,23,42,.08)] ${positionMap[stakeholder.position]}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}>
                        <Users className="h-[15px] w-[15px]" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold leading-tight text-slate-900">{stakeholder.name}</p>
                        <p className="mt-0.5 text-[8px] leading-tight text-slate-500">{stakeholder.role}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
                      <span className="text-[9px] font-bold uppercase tracking-wide text-slate-500">Influence</span>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className="absolute left-1/2 top-1/2 z-30 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#172554] via-[#312e81] to-[#6d28d9] shadow-[0_18px_45px_rgba(79,70,229,.24)] ring-[8px] ring-violet-100"
              >
                <div className="absolute inset-3 rounded-full border border-white/15" />
                <div className="relative flex flex-col items-center text-center text-white">
                  <Building2 className="mb-2 h-9 w-9" strokeWidth={1.7} />
                  <span className="text-[9px] font-bold uppercase tracking-[.22em] text-indigo-100">Target Account</span>
                  <span className="mt-1 text-[17px] font-bold leading-tight">Strategic Enterprise</span>
                </div>
              </motion.div>
            </div>

            <div className="relative flex flex-col justify-center rounded-[26px] border border-slate-200 bg-white p-3">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <Target className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[.18em] text-violet-600">Revenue Motion</p>
                </div>
              </div>

              <div className="mt-3 flex flex-1 flex-col justify-center">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <React.Fragment key={item.label}>
                      <motion.div
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-2.5 py-2.5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold leading-tight text-slate-900">{item.label}</p>
                        </div>
                      </motion.div>

                      {index < journey.length - 1 && (
                        <div className="flex h-5 items-center justify-center">
                          <ArrowDown className="h-3.5 w-3.5 text-violet-300" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {summary.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-100 bg-slate-50 px-2.5 py-2 text-center">
                <p className="text-sm font-bold text-indigo-700">{item.value}</p>
                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[.08em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/60 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[.18em] text-indigo-600">Revenue Readiness</p>
                <p className="mt-1 truncate text-[11px] font-bold text-slate-900">Account → People → Signals → Revenue</p>
              </div>
              <ShieldCheck className="h-5 w-5 shrink-0 text-indigo-600" />
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}