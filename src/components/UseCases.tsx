"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, Briefcase, Users } from "lucide-react";

const cases = [
  {
    icon: <Layers size={22} />,
    title: "SaaS Companies",
    description: "Want to add AI capabilities but building an Agent is too heavy? Integrate Agent API — your product instantly gains deep research and analysis.",
  },
  {
    icon: <Rocket size={22} />,
    title: "AI Application Companies",
    description: "Search + models + sandbox procured separately means high integration cost. One API for complete Agent infrastructure.",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Solution Providers",
    description: "Stop reinventing the wheel for every project. Build industry solutions on top of Agent API for fast delivery.",
  },
  {
    icon: <Users size={22} />,
    title: "AI BPO",
    description: "Replace standardized outsourced labor with Agent — 10x cost reduction for tasks that rely on manual labor.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Use Cases
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">Built for Every Team</h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
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
              className="rounded-2xl bg-accent p-8 transition-all hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-foreground shadow-sm">
                {c.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">{c.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
