"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  GitBranch,
  Quote,
  Brain,
  Globe,
  Code2,
  TrendingUp,
  BarChart3,
  FileInput,
  LayoutList,
  Database,
  FileText,
  Box,
  Cpu,
} from "lucide-react";

const tabs = [
  {
    id: "research",
    label: "Deep Research",
    number: "01",
    title: "Autonomous Research from Question to Report",
    description:
      "Submit a research question — the Agent autonomously searches multiple sources, cross-validates findings, synthesizes analysis, and outputs a structured report with full citations.",
    code: `curl -X POST https://api.cloudsway.ai/v1/run \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "Competitive landscape of AI Agent APIs in 2025",
    "mode": "deep_research"
  }'`,
    features: [
      { icon: <Search size={18} />, title: "Multi-source Synthesis", desc: "Automatically searches, filters, and cross-validates multiple sources" },
      { icon: <GitBranch size={18} />, title: "Plan-based Execution", desc: "Intelligently plans research steps with parallel subtask execution" },
      { icon: <Quote size={18} />, title: "Citation Tracing", desc: "Every conclusion backed by traceable source citations" },
      { icon: <Brain size={18} />, title: "Long-term Memory", desc: "Cross-session knowledge accumulation — gets smarter over time" },
      { icon: <Globe size={18} />, title: "Multi-language Research", desc: "Native support for multilingual retrieval and synthesis" },
    ],
  },
  {
    id: "analysis",
    label: "Deep Analysis",
    number: "02",
    title: "Turn Raw Data into Actionable Insights",
    description:
      "Upload data or describe your analysis needs — the Agent runs code in a secure sandbox, automatically generates visualizations and structured insight reports.",
    code: `curl -X POST https://api.cloudsway.ai/v1/run \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@data.csv" \\
  -F 'config={
    "mode": "deep_analysis",
    "goal": "Find quarterly trends and anomalies in sales data"
  }'`,
    features: [
      { icon: <Code2 size={18} />, title: "Code Execution Sandbox", desc: "Secure isolated environment for running data analysis code" },
      { icon: <TrendingUp size={18} />, title: "Pattern Recognition", desc: "Automatically discovers trends, anomalies, and correlations in data" },
      { icon: <BarChart3 size={18} />, title: "Visualization Generation", desc: "Auto-generates charts and visual reports" },
      { icon: <FileInput size={18} />, title: "Multi-format Input", desc: "Supports PDF, Word, PPT, CSV, and source code" },
      { icon: <LayoutList size={18} />, title: "Structured Output", desc: "Delivers actionable analysis results and recommendations" },
    ],
  },
];

const baseCapabilities = [
  { icon: <Database size={18} />, title: "Persistent Memory", desc: "Thread-based cross-session memory — your agent accumulates knowledge and gets smarter over time" },
  { icon: <Box size={18} />, title: "Secure Sandbox", desc: "Built-in code execution, file processing, and chart generation — no infrastructure to manage" },
  { icon: <FileText size={18} />, title: "Multi-file Processing", desc: "Upload PDFs, spreadsheets, presentations, and code as research context" },
  { icon: <Cpu size={18} />, title: "Multi-model Selection", desc: "Choose the best model for each task — GPT-4, Claude, Gemini, and more" },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState("research");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="capabilities" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Capabilities
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Submit a Task, Get a Deliverable</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Two powerful modes — Deep Research and Deep Analysis — backed by persistent memory and secure execution.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-white p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-white p-8 lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="mb-3 inline-block rounded-md bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  {active.number} {active.label}
                </span>
                <h3 className="mb-4 text-2xl font-bold text-foreground">{active.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{active.description}</p>

                <div className="overflow-hidden rounded-lg bg-[#0f172a] p-4">
                  <pre className="overflow-x-auto text-[13px] leading-relaxed">
                    <code className="text-slate-300 whitespace-pre">{active.code}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                {active.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Base capabilities */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {baseCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                {cap.icon}
              </div>
              <p className="mb-1 font-semibold text-foreground">{cap.title}</p>
              <p className="text-sm text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
