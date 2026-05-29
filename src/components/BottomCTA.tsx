"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export default function BottomCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 lg:py-32">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0" />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white lg:text-[2.5rem] lg:leading-tight">
            Building an AI demo is easy.
            <br />
            Making it work in the real world is not.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-[17px] text-white/60">
            Everything your agents need to run reliably — from search to secure execution. Try it out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://console.cloudsway.ai"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Get Started Free
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="https://console.cloudsway.ai/demo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              <Calendar size={16} />
              Book a Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
