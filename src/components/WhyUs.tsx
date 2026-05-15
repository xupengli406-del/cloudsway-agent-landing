"use client";

import { motion } from "framer-motion";

const rows = [
  {
    dimension: "Infrastructure",
    selfBuild: "Build and maintain yourself",
    workflow: "Requires configuration",
    cloudsway: "Fully managed, API-ready",
    cloudswayBest: true,
  },
  {
    dimension: "Search",
    selfBuild: "Third-party procurement",
    workflow: "Third-party procurement",
    cloudsway: "Proprietary engine, natively integrated",
    cloudswayBest: true,
  },
  {
    dimension: "Execution Env",
    selfBuild: "Build sandbox yourself",
    workflow: "None / Limited",
    cloudsway: "Built-in secure sandbox",
    cloudswayBest: true,
  },
  {
    dimension: "Model Flexibility",
    selfBuild: "Single vendor lock-in",
    workflow: "Single vendor lock-in",
    cloudsway: "Multi-model orchestration",
    cloudswayBest: true,
  },
  {
    dimension: "Task Planning",
    selfBuild: "Manual orchestration",
    workflow: "Fixed workflow",
    cloudsway: "Auto-decompose & parallel execution",
    cloudswayBest: true,
  },
  {
    dimension: "Memory",
    selfBuild: "Build yourself",
    workflow: "None",
    cloudsway: "Built-in long-term memory",
    cloudswayBest: true,
  },
  {
    dimension: "Time to Integrate",
    selfBuild: "Weeks",
    workflow: "Days",
    cloudsway: "Minutes",
    cloudswayBest: true,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Why Cloudsway Agent
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A full comparison between building your own Agent, workflow orchestration frameworks, and Cloudsway Agent API.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-border bg-white">
            <thead>
              <tr>
                <th className="border-b border-border bg-muted px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  Dimension
                </th>
                <th className="border-b border-border bg-muted px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  Self-built Agent
                </th>
                <th className="border-b border-border bg-muted px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  Workflow Framework
                </th>
                <th className="border-b border-border bg-primary/5 px-6 py-4 text-left text-sm font-semibold text-primary">
                  Cloudsway Agent API &#x2726;
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-muted/50">
                  <td className="border-b border-border px-6 py-4 text-sm font-medium text-foreground">
                    {row.dimension}
                  </td>
                  <td className="border-b border-border px-6 py-4 text-sm text-muted-foreground">
                    {row.selfBuild}
                  </td>
                  <td className="border-b border-border px-6 py-4 text-sm text-muted-foreground">
                    {row.workflow}
                  </td>
                  <td className="border-b border-border bg-primary/5 px-6 py-4 text-sm font-medium text-foreground">
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
