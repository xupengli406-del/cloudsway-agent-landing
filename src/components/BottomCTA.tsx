"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function BottomCTA() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-accent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            让 AI Agent 为你工作
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            一次 API 调用，完整研究报告。告别重复劳动，从今天开始。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@cloudsway.ai"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              申请试用
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:contact@cloudsway.ai"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <MessageSquare size={16} />
              联系我们
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
