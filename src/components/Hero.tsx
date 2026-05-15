"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const codeTabs = [
  {
    id: "curl",
    label: "cURL",
    code: `curl -X POST https://api.cloudsway.ai/v1/run \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "Competitive landscape analysis of AI Agent API market",
    "mode": "deep_research"
  }'`,
  },
  {
    id: "python",
    label: "Python",
    code: `from cloudsway import Cloudsway

client = Cloudsway(api_key="YOUR_API_KEY")

response = client.run(
    query="Competitive landscape analysis of AI Agent API market",
    mode="deep_research"
)

print(response.report)  # Structured report with citations`,
  },
  {
    id: "typescript",
    label: "TypeScript",
    code: `import { Cloudsway } from "@cloudsway/sdk";

const client = new Cloudsway({ apiKey: "YOUR_API_KEY" });

const response = await client.run({
  query: "Competitive landscape analysis of AI Agent API market",
  mode: "deep_research",
});

console.log(response.report);  // Structured report with citations`,
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("python");
  const activeCode = codeTabs.find((t) => t.id === activeTab)!;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent to-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Cloudsway Agent API
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground lg:text-5xl xl:text-[3.25rem]">
              Run AI Agents with a single API call.{" "}
              <span className="text-primary">No infrastructure required.</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Fully managed Agent API. AI autonomously searches, analyzes, and executes — delivering complete results. Integrate in minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://console.cloudsway.ai"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Get Started Free
                <ArrowRight size={16} />
              </a>
              <a
                href="https://docs.cloudsway.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <FileText size={16} />
                Documentation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-[#0f172a] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 flex gap-1">
                  {codeTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-slate-700 text-white"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <pre className="overflow-x-auto text-[13px] leading-relaxed">
                  <code className="text-slate-300 whitespace-pre">{activeCode.code}</code>
                </pre>
              </div>

              <div className="border-t border-slate-700 px-5 pb-5 pt-4">
                <p className="mb-2 text-xs text-slate-400">&#x27F6; Agent executing...</p>
                <div className="space-y-1.5 text-xs text-slate-500">
                  <p className="text-emerald-400">&#x2713; Planning research (3 subtasks)</p>
                  <p className="text-emerald-400">&#x2713; Searching 28 sources</p>
                  <p className="text-emerald-400">&#x2713; Cross-validating and synthesizing</p>
                  <p className="text-emerald-400">&#x2713; Generating structured report (4,200 words, 23 citations)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
