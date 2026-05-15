"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

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
            Let AI Agents Work for You
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            One API call. Complete research report. Say goodbye to repetitive work — start today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://console.cloudsway.ai"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a
              href="https://docs.cloudsway.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <FileText size={16} />
              Read the Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
