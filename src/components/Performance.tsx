"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "95%", label: "研究完整性评分", sub: "Completeness Score" },
  { value: "<3min", label: "平均研究完成时间", sub: "Avg. Completion Time" },
  { value: "20+", label: "平均引用信源数量", sub: "Avg. Sources Cited" },
  { value: "10K+", label: "平均输出字数", sub: "Avg. Output Length" },
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
            基于内部评测的关键指标。评测框架覆盖最终结果质量、执行过程质量和工程体验三个层次。
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
            href="#contact"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            查看完整评测报告 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
