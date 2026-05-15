"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "95%", label: "Completeness Score", sub: "Research quality benchmark" },
  { value: "<3min", label: "Avg. Completion Time", sub: "End-to-end execution" },
  { value: "20+", label: "Avg. Sources Cited", sub: "Per research task" },
  { value: "10K+", label: "Avg. Output Length", sub: "Words per report" },
];

export default function Performance() {
  return (
    <section id="performance" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Performance
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Performance Highlights
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Based on internal benchmarks covering result quality, execution process, and developer experience.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-gradient-to-b from-accent to-white p-8 text-center"
            >
              <p className="mb-2 text-4xl font-bold text-primary lg:text-5xl">{stat.value}</p>
              <p className="font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://docs.cloudsway.ai/benchmarks"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            View full evaluation report &#x2192;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
