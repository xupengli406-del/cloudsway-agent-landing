"use client";

import { motion } from "framer-motion";
import { Search, Brain, Box, Database, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <ArrowRight size={20} />,
    label: "API Request",
    desc: "One call, submit your task",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Brain size={20} />,
    label: "Agent Core",
    desc: "Plan and decompose subtasks",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Search size={20} />,
    label: "Search",
    desc: "Proprietary search engine",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <Box size={20} />,
    label: "Sandbox",
    desc: "Secure code execution",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: <Database size={20} />,
    label: "Memory",
    desc: "Cross-session persistence",
    color: "bg-pink-50 text-pink-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            One API call. Agent handles everything.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            No need to manage search, models, or execution environments. The Agent automatically plans tasks, invokes tools, synthesizes analysis, and delivers results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-muted p-8 lg:p-12">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-3 flex h-14 w-14 items-center justify-center rounded-xl ${step.color}`}
                    >
                      {step.icon}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{step.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden text-border md:block">
                      <svg width="40" height="20" viewBox="0 0 40 20">
                        <path
                          d="M0 10h32m0 0l-6-6m6 6l-6 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-border bg-white p-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  &#x2713;
                </span>
                <span>
                  <strong className="text-foreground">Structured Result</strong> — Research report + cited sources + execution trace
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
