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
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,104,255,0.08),transparent)]" />
      <div className="mx-auto max-w-[1440px] px-8 pb-24 pt-24 lg:pb-32 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[13px] font-medium text-muted-foreground">Cloudsway Agent API</span>
            </div>
            <h1 className="mb-6 text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground lg:text-[4rem]">
              AI Agents that remember, reason, and{" "}
              <span className="text-primary">deliver.</span>
            </h1>
            <p className="mb-10 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
              Submit complex research tasks. Get structured deliverables. Your agent learns and improves with every interaction.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://console.cloudsway.ai"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[15px] font-medium text-white transition-opacity hover:opacity-80"
              >
                Get Started Free
                <ArrowRight size={16} />
              </a>
              <a
                href="https://docs.cloudsway.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:bg-accent"
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
            <div className="overflow-hidden rounded-2xl bg-[#0f0f0f] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-4 flex gap-1">
                  {codeTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-white/10 text-white"
                          : "text-white/40 hover:text-white/70"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto text-[13px] leading-relaxed">
                  <code className="text-white/80 whitespace-pre">{activeCode.code}</code>
                </pre>
              </div>

              <div className="border-t border-white/10 px-6 pb-6 pt-5">
                <p className="mb-3 text-xs text-white/40">&#x27F6; Agent executing...</p>
                <div className="space-y-2 text-[13px]">
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
