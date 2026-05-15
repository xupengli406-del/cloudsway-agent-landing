"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, Briefcase, Users } from "lucide-react";

const cases = [
  {
    icon: <Layers size={24} />,
    title: "SaaS Companies",
    pain: "Want to add AI capabilities but building an Agent is too heavy",
    solution: "Integrate Agent API — your product instantly gains deep research and analysis",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Rocket size={24} />,
    title: "AI Application Companies",
    pain: "Search + models + sandbox procured separately, high integration cost",
    solution: "One API for complete Agent infrastructure",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Solution Providers",
    pain: "Reinventing the wheel for every project",
    solution: "Build industry solutions on top of Agent API for fast delivery",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <Users size={24} />,
    title: "AI BPO",
    pain: "Standardized tasks rely on manual labor — expensive and unscalable",
    solution: "Replace standardized outsourced labor with Agent — 10x cost reduction",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Use Cases
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Built for Every Team</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From SaaS product integration to enterprise intelligence, Agent API serves all types of customers.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${c.color}`}>
                {c.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{c.title}</h3>
              <div className="mb-4 rounded-lg bg-red-50 px-4 py-2.5">
                <p className="text-sm text-red-700">
                  <span className="font-medium">Pain: </span>
                  {c.pain}
                </p>
              </div>
              <div className="rounded-lg bg-emerald-50 px-4 py-2.5">
                <p className="text-sm text-emerald-700">
                  <span className="font-medium">Solution: </span>
                  {c.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
