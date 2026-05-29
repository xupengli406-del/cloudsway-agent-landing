"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const rows = [
  {
    dimension: "Persistent Memory",
    selfBuild: "Build yourself (complex)",
    workflow: "None or limited",
    cloudsway: "Built-in thread-based memory — agent learns over time",
  },
  {
    dimension: "Output Quality",
    selfBuild: "Depends on your implementation",
    workflow: "Template-based output",
    cloudsway: "Full research reports with citations & charts",
  },
  {
    dimension: "Code Execution",
    selfBuild: "Build sandbox yourself",
    workflow: "None / Plugin-based",
    cloudsway: "Built-in secure sandbox — code, files, visualization",
  },
  {
    dimension: "Search & Data",
    selfBuild: "Third-party procurement",
    workflow: "Third-party procurement",
    cloudsway: "Proprietary engine, natively integrated",
  },
  {
    dimension: "Model Flexibility",
    selfBuild: "Single vendor lock-in",
    workflow: "Single vendor lock-in",
    cloudsway: "Multi-model — GPT-5, Claude Opus, Gemini Pro, and more",
  },
  {
    dimension: "Custom Tools",
    selfBuild: "Full control (high effort)",
    workflow: "Plugin marketplace",
    cloudsway: "Function Call + MCP — bring your own tools",
  },
  {
    dimension: "Infrastructure",
    selfBuild: "Build and maintain everything",
    workflow: "Partial — still need hosting",
    cloudsway: "Fully managed, zero infrastructure",
  },
  {
    dimension: "Time to Integrate",
    selfBuild: "Weeks to months",
    workflow: "Days",
    cloudsway: "Minutes — 3 lines of code",
  },
];

const ease = [0.25, 0.4, 0.25, 1] as const;

const rowVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease },
  }),
};

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Why Us
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">
            Why Cloudsway Agent
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            A full comparison between building your own Agent, workflow orchestration frameworks, and Cloudsway Agent API.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]">
            <thead>
              <tr>
                <th className="bg-accent px-6 py-4 text-left text-[13px] font-medium text-muted-foreground">
                  Dimension
                </th>
                <th className="bg-accent px-6 py-4 text-left text-[13px] font-medium text-muted-foreground">
                  Build Your Own Agent
                </th>
                <th className="bg-accent px-6 py-4 text-left text-[13px] font-medium text-muted-foreground">
                  Coze / Dify / LangGraph
                </th>
                <th className="bg-foreground px-6 py-4 text-left text-[13px] font-semibold text-white">
                  Cloudsway Agent API &#x2726;
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  custom={i}
                  variants={rowVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="transition-colors hover:bg-accent/50"
                >
                  <td className="border-t border-border/50 px-6 py-4 text-sm font-medium text-foreground">
                    {row.dimension}
                  </td>
                  <td className="border-t border-border/50 px-6 py-4 text-sm text-muted-foreground">
                    {row.selfBuild}
                  </td>
                  <td className="border-t border-border/50 px-6 py-4 text-sm text-muted-foreground">
                    {row.workflow}
                  </td>
                  <td className="border-t border-border/50 bg-primary/[0.03] px-6 py-4 text-sm font-medium text-foreground">
                    {row.cloudsway}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
