"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

function AnimatedValue({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: [0.25, 0.4, 0.25, 1] });
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 95, prefix: "", suffix: "%", label: "Completeness Score", sub: "Research quality benchmark" },
  { display: "<3min", label: "Avg. Completion Time", sub: "End-to-end execution" },
  { value: 20, prefix: "", suffix: "+", label: "Avg. Sources Cited", sub: "Per research task" },
  { value: 10, prefix: "", suffix: "K+", label: "Avg. Output Length", sub: "Words per report" },
];

export default function Performance() {
  return (
    <section id="performance" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="glow glow-purple absolute top-1/3 right-0 h-[500px] w-[500px] translate-x-1/4" />
      <div className="relative mx-auto max-w-[1440px] px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Performance
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-[2.5rem]">
            Performance Highlights
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            Based on internal benchmarks covering result quality, execution process, and developer experience.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)" }}
              className="rounded-2xl bg-accent p-8 text-center"
            >
              <p className="mb-2 text-4xl font-bold text-foreground lg:text-5xl">
                {"value" in stat ? (
                  <AnimatedValue value={stat.value!} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </p>
              <p className="font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-[12px] text-muted-foreground">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://docs.cloudsway.ai/benchmarks"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View full evaluation report &#x2192;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
