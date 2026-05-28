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
  { icon: <Database size={18} />, title: "Persistent Memory", desc: "Thread-based stateful engine that accumulates context across sessions. Agent remembers preferences, research history, and domain knowledge — no need to repeat background." },
  { icon: <Box size={18} />, title: "Secure Code Sandbox", desc: "Built-in isolated execution for Python, data analysis, chart generation, and computational modeling. Supports PDF/Word/PPT/Excel/CSV processing — zero infrastructure to manage." },
  { icon: <FileText size={18} />, title: "End-to-end Delivery", desc: "Submit a task, get a deliverable. Agent autonomously plans steps, searches the web, parses documents, executes code, generates charts, and compiles structured reports." },
  { icon: <Cpu size={18} />, title: "Multi-model Selection", desc: "Choose the best model for each task — GPT-5, Claude Opus, Gemini Pro, and more. Optimized routing for cost and quality." },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState("research");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="capabilities" className="bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Capabilities
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">Submit a Task, Get a Deliverable</h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            Two powerful modes — Deep Research and Deep Analysis — backed by persistent memory, secure sandbox, and end-to-end task delivery.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-foreground text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-white p-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="mb-3 inline-block rounded-full bg-accent px-3.5 py-1 text-[12px] font-semibold text-foreground">
                  {active.number} {active.label}
                </span>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">{active.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{active.description}</p>

                <div className="overflow-hidden rounded-xl bg-[#0f0f0f] p-5">
                  <pre className="overflow-x-auto text-[13px] leading-relaxed">
                    <code className="text-white/80 whitespace-pre">{active.code}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-3">
                {active.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-foreground">
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {baseCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-foreground">
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
