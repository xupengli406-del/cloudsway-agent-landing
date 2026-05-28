"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, TrendingUp, Scale } from "lucide-react";

const tabs = [
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
  { id: "finance", label: "Finance", icon: TrendingUp },
  { id: "legal", label: "Legal", icon: Scale },
];

const scenarios: Record<
  string,
  { title: string; description: string; capabilities: string[] }[]
> = {
  ecommerce: [
    {
      title: "Competitive Price Monitoring",
      description:
        "Agent automatically tracks competitor pricing across retailers, calculates price elasticity and trends, and generates dynamic pricing recommendations.",
      capabilities: ["Web Search", "Code Sandbox"],
    },
    {
      title: "Review Analysis & Product Insights",
      description:
        "Process thousands of customer reviews, execute sentiment analysis and topic clustering in sandbox, output actionable improvement priorities.",
      capabilities: ["File Processing", "Code Sandbox"],
    },
    {
      title: "Product Copy Generation",
      description:
        "Maintain brand consistency via Thread memory across batches, generate multi-platform product descriptions from specification sheets at scale.",
      capabilities: ["Memory", "File Processing"],
    },
  ],
  finance: [
    {
      title: "Earnings Deep Analysis",
      description:
        "Parse SEC filings and earnings PDFs, extract key metrics, calculate beat/miss vs estimates, and generate charts — all in one API call.",
      capabilities: ["Web Search", "File Processing", "Code Sandbox"],
    },
    {
      title: "Regulatory Policy Tracking",
      description:
        "Continuously search regulatory updates, compare against known policy baseline stored in Thread memory, and flag changes requiring compliance review.",
      capabilities: ["Web Search", "Memory"],
    },
    {
      title: "Investment Due Diligence",
      description:
        "Aggregate target company information from public sources via search and Function Call integrations, compile standardized due diligence memos.",
      capabilities: ["Web Search", "Code Sandbox"],
    },
  ],
  legal: [
    {
      title: "Contract Review & Risk ID",
      description:
        "Parse contract documents, analyze clauses against standard templates using accumulated review experience in memory, flag anomalous terms.",
      capabilities: ["File Processing", "Memory"],
    },
    {
      title: "Case Research & Legal Opinion",
      description:
        "Deep search relevant statutes, judicial interpretations, and precedent cases, then synthesize into a structured legal opinion draft with citations.",
      capabilities: ["Web Search", "Code Sandbox"],
    },
    {
      title: "Multi-jurisdiction Compliance",
      description:
        "Research regulations across multiple jurisdictions, generate structured comparison matrices with compliance gap indicators and action items.",
      capabilities: ["Web Search", "Code Sandbox"],
    },
  ],
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("ecommerce");

  return (
    <section id="use-cases" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Use Cases
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">
            Built for Every Industry
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            From e-commerce intelligence to financial analysis and legal
            research, Agent API delivers end-to-end task automation.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-2 rounded-full bg-accent p-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-foreground text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scenario Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {scenarios[activeTab].map((scenario, i) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col rounded-2xl bg-accent p-7 transition-all hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]"
              >
                <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                  {scenario.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {scenario.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {scenario.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-foreground shadow-sm"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
