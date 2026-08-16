"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
  Database,
} from "lucide-react";

/**
 * LeadGenerationHeroVisual
 *
 * Visual narrative:
 *
 * Target Market
 *      ↓
 * Research & Enrichment
 *      ↓
 * Verified Contacts
 *      ↓
 * Intent & Engagement
 *      ↓
 * Qualified Opportunities
 *      ↓
 * Sales Pipeline
 *
 * Designed to complement the ABM hero visual while communicating
 * the distinct Lead Generation workflow.
 */
export default function LeadGenerationHeroVisual(): React.JSX.Element {
  const stages = [
    {
      label: "Research & Enrichment",
      description: "Account and contact intelligence",
      icon: Search,
    },
    {
      label: "Verified Contacts",
      description: "Human-checked decision-makers",
      icon: ShieldCheck,
    },
    {
      label: "Engagement",
      description: "Relevant multi-channel outreach",
      icon: MessageSquare,
    },
    {
      label: "Qualified Opportunities",
      description: "Sales-ready conversations",
      icon: Target,
    },
  ];

  return (
    <motion.div
      className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.45,
              staggerChildren: 0.07,
            },
          },
        }}
        className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
      >
        {/* subtle intelligence-grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-indigo-600">
                Pipeline Intelligence
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Research → Qualification → Pipeline
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
          </div>

          {/* Main visual */}
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.05fr_.95fr]">
            {/* Left intelligence panel */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -8 },
                visible: { opacity: 1, x: 0 },
              }}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Database className="h-4 w-4" />
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Target Market
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Defined by ICP
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-slate-400">
                  01
                </span>
              </div>

              <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">
                    Account Fit
                  </span>
                  <span className="text-[10px] font-semibold text-indigo-600">
                    ICP Match
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="h-full rounded-full bg-indigo-600"
                  />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-slate-50 p-2">
                    <p className="text-[9px] uppercase tracking-wide text-slate-400">
                      Accounts
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-900">
                      Prioritized
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-2">
                    <p className="text-[9px] uppercase tracking-wide text-slate-400">
                      Buyers
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-900">
                      Identified
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right pipeline panel */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 8 },
                visible: { opacity: 1, x: 0 },
              }}
              className="rounded-2xl border border-slate-200 bg-white p-3"
            >
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <TrendingUp className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Revenue Motion
                  </p>
                  <p className="text-[10px] text-slate-500">
                    From data to opportunity
                  </p>
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <React.Fragment key={stage.label}>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 6 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                          <Icon className="h-3.5 w-3.5" />
                        </span>

                        <div className="min-w-0">
                          <p className="truncate text-[10px] font-semibold text-slate-900">
                            {stage.label}
                          </p>
                          <p className="truncate text-[9px] text-slate-500">
                            {stage.description}
                          </p>
                        </div>
                      </motion.div>

                      {index < stages.length - 1 ? (
                        <div
                          aria-hidden="true"
                          className="flex justify-center text-[10px] text-indigo-300"
                        >
                          ↓
                        </div>
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom qualification strip */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-3"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                  <Users className="h-4 w-4" />
                </span>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[.16em] text-indigo-500">
                    Qualified Pipeline
                  </p>
                  <p className="truncate text-xs font-semibold text-slate-900">
                    Account → Contact → Engagement → Opportunity
                  </p>
                </div>
              </div>

              <ShieldCheck className="h-5 w-5 shrink-0 text-indigo-600" />
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="h-full rounded-full bg-indigo-600"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}