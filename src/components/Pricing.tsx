"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const models = [
  { name: "Gemini 3 Flash", input: "$0.50", output: "$3.00" },
  { name: "Gemini 3.1 Pro", input: "$2.00", output: "$12.00" },
  { name: "GPT-5.4", input: "$2.50", output: "$15.00" },
  { name: "GPT-5.5", input: "$5.00", output: "$30.00" },
  { name: "Claude Sonnet 4.6", input: "$3.00", output: "$15.00" },
  { name: "Claude Opus 4.7", input: "$5.00", output: "$25.00" },
];

const typicalCosts = [
  { label: "Quick Search", cost: "~$0.02" },
  { label: "Pro Search", cost: "~$0.07" },
  { label: "Deep Research", cost: "~$0.35" },
  { label: "Advanced Deep Research", cost: "~$1.15" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">
            Agent is Free — Only Pay for What You Use
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            Transparent per-use pricing on models, search, and sandbox. No
            platform fees, no hidden costs.
          </p>
        </motion.div>

        {/* Typical Cost Reference */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-primary/10 bg-primary/5 p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <Zap size={16} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">
              Typical Cost Per Request
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {typicalCosts.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-foreground">
                  {item.cost}
                </p>
                <p className="text-[12px] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Model Pricing + Tools/Sandbox Grid */}
        <div className="mb-12 grid gap-6 lg:grid-cols-3">
          {/* Model Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] lg:col-span-2"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Model Pricing
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-3 pr-4 text-left font-semibold text-foreground">
                      Model
                    </th>
                    <th className="pb-3 pr-4 text-left font-semibold text-foreground">
                      Input / 1M tokens
                    </th>
                    <th className="pb-3 text-left font-semibold text-foreground">
                      Output / 1M tokens
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((model) => (
                    <tr
                      key={model.name}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="py-3 pr-4 font-medium text-foreground">
                        {model.name}
                      </td>
                      <td className="py-3 pr-4 font-mono text-sm text-muted-foreground">
                        {model.input}
                      </td>
                      <td className="py-3 font-mono text-sm text-muted-foreground">
                        {model.output}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Tools & Sandbox */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Tools */}
            <div className="rounded-2xl bg-white p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)]">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tools
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Web Search</span>
                  <span className="font-mono text-sm font-semibold text-foreground">
                    $0.005 / call
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">URL Fetch</span>
                  <span className="font-mono text-sm font-semibold text-foreground">
                    $0.0005 / call
                  </span>
                </div>
              </div>
            </div>

            {/* Sandbox */}
            <div className="rounded-2xl bg-white p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)]">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Sandbox
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">CPU</span>
                  <span className="font-mono text-sm font-semibold text-foreground">
                    $0.000014 / sec
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Memory</span>
                  <span className="font-mono text-sm font-semibold text-foreground">
                    $0.0000045 / GB·sec
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Storage</span>
                  <span className="font-mono text-sm font-semibold text-foreground">
                    Free
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Network</span>
                  <span className="font-mono text-sm font-semibold text-foreground">
                    $1.80 / GB
                  </span>
                </div>
              </div>
              <p className="mt-4 text-[12px] text-muted-foreground">
                Per-second billing. Typical task (1 CPU + 1 GB, 30s) ≈ $0.0006
              </p>
            </div>
          </motion.div>
        </div>

        {/* Free Trial + Enterprise */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Free Trial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)]"
          >
            <h3 className="mb-2 text-xl font-bold text-foreground">
              Free Trial
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Start building today
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">$5</span>
              <span className="ml-2 text-sm text-muted-foreground">
                free credits
              </span>
            </div>
            <ul className="mb-8 space-y-2 text-sm text-foreground">
              <li>• 30-day validity</li>
              <li>• All presets and tools included</li>
              <li>• No credit card required</li>
              <li>• Pay-as-you-go after trial</li>
            </ul>
            <a
              href="https://console.cloudsway.ai"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-medium text-white transition-all hover:opacity-80"
            >
              Start Free
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-foreground p-8 text-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.3)]"
          >
            <h3 className="mb-2 text-xl font-bold">Enterprise</h3>
            <p className="mb-6 text-sm text-white/60">
              For large-scale deployments
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mb-8 space-y-2 text-sm text-white/80">
              <li>• Monthly volume &gt;100K calls</li>
              <li>• Dedicated infrastructure</li>
              <li>• Custom model integration</li>
              <li>• On-premise deployment option</li>
              <li>• Premium SLA & priority support</li>
            </ul>
            <a
              href="https://console.cloudsway.ai/demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-foreground transition-all hover:opacity-90"
            >
              Contact Sales
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
