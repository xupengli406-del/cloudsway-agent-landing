"use client";

import { motion } from "framer-motion";
import {
  Search,
  Code2,
  FileText,
  Brain,
  Zap,
  CheckCircle2,
} from "lucide-react";

const scenarios = [
  {
    number: "01",
    icon: <Search size={20} />,
    title: "Deep Research for Reliable Information",
    challenge:
      "AI Agents in long-chain tasks rely on high-quality information sources. Traditional search APIs return fragmented results that can't support deep analysis, leading to inaccurate or incomplete outputs.",
    solution:
      "Agent API's deep research mode automatically searches 50+ sources, cross-validates findings, and generates structured reports with full citations. Streaming output lets you observe research progress in real-time.",
    results: [
      "Research coverage improved to 90%+, reducing hallucination",
      "Every conclusion backed by traceable source citations",
      "Streaming output eliminates long wait times",
    ],
  },
  {
    number: "02",
    icon: <Code2 size={20} />,
    title: "Code Sandbox for Automated Data Analysis",
    challenge:
      "Data analysis tasks require writing code, running models, and generating charts. Traditional LLM APIs cannot execute code — developers must build their own runtime environments and handle security isolation.",
    solution:
      "Agent API includes a built-in secure Python sandbox that automatically writes and executes analysis code, processes CSV/Excel data files, generates Matplotlib/Plotly charts, and outputs complete analysis reports.",
    results: [
      "No need to build code execution infrastructure",
      "One API call completes the full data-to-insight pipeline",
      "Sandbox isolation ensures execution safety with zero data leakage risk",
    ],
  },
  {
    number: "03",
    icon: <FileText size={20} />,
    title: "Multi-file Processing for Document Understanding",
    challenge:
      "Enterprise scenarios require processing large volumes of PDF, Word, and PPT documents. Traditional approaches need multiple tool chains working together, with limited support for complex layouts.",
    solution:
      "Agent API natively supports multi-format document parsing, automatically extracts text, tables, and chart information, performs cross-file correlation analysis, and outputs structured summaries or comparison reports.",
    results: [
      "Single file up to 100MB — covers enterprise-grade needs",
      "Multi-file parallel parsing with cross-document comparison",
      "Reduces document preprocessing development effort by 70%",
    ],
  },
  {
    number: "04",
    icon: <Brain size={20} />,
    title: "Persistent Memory for Cross-session Context",
    challenge:
      "Stateless APIs require passing full context every call, resulting in high token consumption, redundant information, and inability to deliver personalized services.",
    solution:
      "Agent API's Thread-based memory mechanism automatically maintains context across interactions. The Agent remembers user preferences, historical conclusions, and domain knowledge — no need to repeat inputs.",
    results: [
      "Subsequent call token consumption reduced by 60%+",
      "Users never need to repeat background — seamless experience",
      "Enables building long-term memory AI assistants",
    ],
  },
  {
    number: "05",
    icon: <Zap size={20} />,
    title: "Streaming Output for Real-time Progress",
    challenge:
      "Agent tasks take a long time to execute (deep research 30s+). End users receive no feedback during the wait, resulting in poor experience and uncertainty about whether the task is running.",
    solution:
      "Agent API supports real-time streaming output. The Agent's search actions, reasoning steps, and intermediate conclusions return progressively, enabling frontends to display execution progress live.",
    results: [
      "First token latency < 2 seconds — instant feedback",
      "Reasoning process transparent and observable, building user trust",
      "Supports typewriter effects and progress bar displays",
    ],
  },
];

export default function DeveloperExperience() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Developer Scenarios
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">
            Why Developers Choose Agent API
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            From deep research to real-time streaming — solve real
            infrastructure challenges with one API.
          </p>
        </motion.div>

        <div className="space-y-6">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={scenario.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl bg-accent transition-shadow hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]"
            >
              <div className="grid gap-6 p-7 lg:grid-cols-[1fr_1fr_1fr]">
                {/* Title + Challenge */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-foreground shadow-sm">
                      {scenario.icon}
                    </div>
                    <span className="text-[12px] font-semibold text-muted-foreground">
                      {scenario.number}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                    {scenario.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground/70">
                      Challenge:{" "}
                    </span>
                    {scenario.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="flex flex-col justify-center">
                  <p className="text-sm leading-relaxed text-foreground">
                    <span className="font-semibold">Solution: </span>
                    {scenario.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="flex flex-col justify-center">
                  <ul className="space-y-2">
                    {scenario.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-emerald-500"
                        />
                        <span className="text-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
