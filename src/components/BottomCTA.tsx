"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function BottomCTA() {
  return (
    <section id="contact" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white lg:text-[2.5rem]">
            Let AI Agents Work for You
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-[17px] text-white/60">
            One API call. Complete research report. Say goodbye to repetitive work — start today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://console.cloudsway.ai"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a
              href="https://console.cloudsway.ai/demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              <Calendar size={16} />
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
