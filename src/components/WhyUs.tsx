"use client";

import { motion } from "framer-motion";

const rows = [
  {
    dimension: "Persistent Memory",
    selfBuild: "Build yourself (complex)",
    workflow: "None or limited",
    cloudsway: "Built-in thread-based memory — agent learns over time",
    cloudswayBest: true,
  },
  {
    dimension: "Output Quality",
    selfBuild: "Depends on your implementation",
    workflow: "Template-based output",
    cloudsway: "Full research reports with citations & charts",
    cloudswayBest: true,
  },
  {
    dimension: "Code Execution",
    selfBuild: "Build sandbox yourself",
    workflow: "None / Plugin-based",
    cloudsway: "Built-in secure sandbox — code, files, visualization",
    cloudswayBest: true,
  },
  {
    dimension: "Search & Data",
    selfBuild: "Third-party procurement",
    workflow: "Third-party procurement",
    cloudsway: "Proprietary engine, natively integrated",
    cloudswayBest: true,
  },
  {
    dimension: "Model Flexibility",
    selfBuild: "Single vendor lock-in",
    workflow: "Single vendor lock-in",
    cloudsway: "Multi-model — GPT-5, Claude Opus, Gemini Pro, and more",
    cloudswayBest: true,
  },
  {
    dimension: "Custom Tools",
    selfBuild: "Full control (high effort)",
    workflow: "Plugin marketplace",
    cloudsway: "Function Call + MCP — bring your own tools",
    cloudswayBest: true,
  },
  {
    dimension: "Infrastructure",
    selfBuild: "Build and maintain everything",
    workflow: "Partial — still need hosting",
    cloudsway: "Fully managed, zero infrastructure",
    cloudswayBest: true,
  },
  {
    dimension: "Time to Integrate",
    selfBuild: "Weeks to months",
    workflow: "Days",
    cloudsway: "Minutes — 3 lines of code",
    cloudswayBest: true,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
                <tr key={i} className="transition-colors hover:bg-accent/50">
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
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
