"use client";

import { motion } from "framer-motion";
import { Search, Brain, Box, Database, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const steps = [
  {
    icon: <ArrowRight size={20} />,
    label: "API Request",
    desc: "One call, submit your task",
  },
  {
    icon: <Brain size={20} />,
    label: "Agent Core",
    desc: "Plan and decompose subtasks",
  },
  {
    icon: <Search size={20} />,
    label: "Search",
    desc: "Proprietary search engine",
  },
  {
    icon: <Box size={20} />,
    label: "Sandbox",
    desc: "Secure code execution",
  },
  {
    icon: <Database size={20} />,
    label: "Memory",
    desc: "Cross-session persistence",
  },
];

const ease = [0.25, 0.4, 0.25, 1] as const;

const stepVariant = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.15, ease },
  }),
};

const arrowVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.15 + 0.2, ease },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">
            One API call. Agent handles everything.
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            No need to manage search, models, or execution environments. The Agent automatically plans tasks, invokes tools, synthesizes analysis, and delivers results.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl bg-accent p-10 lg:p-14">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-5">
                  <motion.div
                    custom={i}
                    variants={stepVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-foreground shadow-sm">
                      {step.icon}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{step.label}</p>
                    <p className="mt-1 text-[12px] text-muted-foreground">{step.desc}</p>
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="hidden text-muted-foreground/30 md:block">
                      <svg width="40" height="20" viewBox="0 0 40 20">
                        <motion.path
                          d="M0 10h32m0 0l-6-6m6 6l-6 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          custom={i}
                          variants={arrowVariant}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-10 rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  &#x2713;
                </span>
                <span>
                  <strong className="text-foreground">Structured Result</strong> — Research report + cited sources + execution trace
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
