"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Brain, FileText, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const exampleQueries = [
  "Research the top 5 AI search API providers and compare pricing",
  "Analyze Q1 2025 fintech funding trends in Southeast Asia",
  "Generate a competitive positioning report for our new product",
];

const steps = [
  { icon: Brain, label: "Planning research strategy", detail: "Breaking task into 4 subtasks", duration: 1200 },
  { icon: Search, label: "Searching 32 sources", detail: "Web, finance data, academic papers", duration: 1800 },
  { icon: FileText, label: "Analyzing & synthesizing", detail: "Cross-referencing findings, running analysis", duration: 1500 },
  { icon: CheckCircle2, label: "Delivering report", detail: "4,200 words, 23 citations, 3 charts", duration: 1000 },
];

const mockResults = [
  { title: "Perplexity Agent API", snippet: "Multi-provider routing with integrated search. Pricing: $5/1M tokens + $5/1K searches.", tag: "Competitor" },
  { title: "OpenAI Responses API", snippet: "Native tool use with web search. Strong ecosystem but no persistent memory.", tag: "Competitor" },
  { title: "Market Size & Growth", snippet: "AI Agent API market projected to reach $12.8B by 2027, growing at 34% CAGR.", tag: "Insight" },
];

export default function AgentDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState(exampleQueries[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      startDemo();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function startDemo() {
    setIsRunning(true);
    setCurrentStep(0);
    setShowResults(false);

    let stepIndex = 0;
    let totalDelay = 0;

    steps.forEach((step, i) => {
      totalDelay += step.duration;
      setTimeout(() => {
        setCurrentStep(i);
        if (i === steps.length - 1) {
          setTimeout(() => {
            setShowResults(true);
            setIsRunning(false);
          }, 800);
        }
      }, totalDelay);
    });
  }

  function handleRun() {
    setCurrentStep(-1);
    setShowResults(false);
    setTimeout(() => startDemo(), 300);
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Try an Agent Workflow
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            See How the Agent Works
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ask the agent to research a company, compare products, analyze market trends, or generate a structured report.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-white shadow-xl"
        >
          <div className="border-b border-border bg-muted/50 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles size={16} className="text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">Cloudsway Agent</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                Deep Research
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-muted/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Describe your research task..."
              />
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
              >
                Run
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {exampleQueries.map((q) => (
                <button
                  key={q}
                  onClick={() => { setQuery(q); handleRun(); }}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {q.length > 50 ? q.slice(0, 50) + "..." : q}
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                {currentStep >= 0 && !showResults && (
                  <motion.div
                    key="steps"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    {steps.map((step, i) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{
                          opacity: i <= currentStep ? 1 : 0.3,
                          x: 0,
                        }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 rounded-lg border border-border p-3"
                      >
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          i < currentStep
                            ? "bg-emerald-100 text-emerald-600"
                            : i === currentStep
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}>
                          <step.icon size={16} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{step.label}</p>
                          <p className="text-xs text-muted-foreground">{step.detail}</p>
                        </div>
                        {i < currentStep && (
                          <span className="text-xs font-medium text-emerald-600">Done</span>
                        )}
                        {i === currentStep && (
                          <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="h-2 w-2 rounded-full bg-primary"
                          />
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {showResults && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="mb-4 flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span className="font-medium text-emerald-700">Research complete</span>
                      <span className="text-muted-foreground">— 32 sources analyzed, 4.2k words generated</span>
                    </div>
                    {mockResults.map((result) => (
                      <div
                        key={result.title}
                        className="rounded-lg border border-border p-4 transition-colors hover:border-primary/30"
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <p className="text-sm font-semibold text-foreground">{result.title}</p>
                          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            {result.tag}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{result.snippet}</p>
                      </div>
                    ))}
                    <div className="pt-2 text-center">
                      <a
                        href="https://console.cloudsway.ai"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        Try it yourself — Get API key free
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                )}

                {currentStep < 0 && !showResults && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-[280px] items-center justify-center"
                  >
                    <p className="text-sm text-muted-foreground">
                      Click &quot;Run&quot; or select an example query to see the agent in action.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
