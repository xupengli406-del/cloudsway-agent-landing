"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Search, Cpu, HardDrive, FileText } from "lucide-react";

const capabilities = [
  { icon: Cpu, name: "Tokens", unit: "per 1M tokens", price: "From $2.50", description: "Input & output tokens for model reasoning" },
  { icon: Search, name: "Search", unit: "per 1K calls", price: "From $5.00", description: "Web search, finance data, people search" },
  { icon: HardDrive, name: "Sandbox", unit: "per hour", price: "From $0.50", description: "Code execution & data processing" },
  { icon: FileText, name: "File Processing", unit: "per 100 files", price: "From $1.00", description: "PDF, PPT, Word, CSV parsing" },
];

const plans = [
  {
    name: "Free Tier",
    subtitle: "For developers exploring",
    price: "$0",
    priceUnit: "to start",
    note: "No credit card required",
    highlighted: false,
    features: [
      "$10 free credits on signup",
      "Deep Research & Deep Analysis",
      "Standard model selection",
      "Community support",
      "Up to 20 sources per task",
    ],
    cta: "Get Started Free",
    ctaHref: "https://console.cloudsway.ai",
  },
  {
    name: "Pro",
    subtitle: "For teams and products",
    price: "$499",
    priceUnit: "/ month",
    note: "Includes $600 in usage credits",
    highlighted: true,
    badge: "Popular",
    features: [
      "Everything in Free Tier",
      "Cross-session Agent Memory",
      "Unlimited sources per task",
      "Priority model access",
      "Custom tools & Function Call",
      "Dedicated support & SLA",
    ],
    cta: "Start Pro Trial",
    ctaHref: "https://console.cloudsway.ai",
  },
  {
    name: "Enterprise",
    subtitle: "For large-scale deployments",
    price: "Custom",
    priceUnit: "",
    note: "Volume discounts available",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "Custom model integration",
      "On-premise deployment",
      "Premium SLA & priority support",
      "Custom workflows & integrations",
    ],
    cta: "Book a Demo",
    ctaHref: "https://console.cloudsway.ai/demo",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
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
            Pay Only for What You Use
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-muted-foreground">
            Usage-based pricing on atomic capabilities. No hidden fees — full transparency on every request.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((cap) => (
            <div key={cap.name} className="rounded-2xl bg-white p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)]">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-foreground">
                <cap.icon size={18} />
              </div>
              <p className="text-sm font-semibold text-foreground">{cap.name}</p>
              <p className="mt-1 text-lg font-bold text-foreground">{cap.price}</p>
              <p className="text-[12px] text-muted-foreground">{cap.unit}</p>
              <p className="mt-2 text-[12px] text-muted-foreground">{cap.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-8 lg:p-10 ${
                plan.highlighted
                  ? "bg-foreground text-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.3)]"
                  : "bg-white shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">
                  {plan.badge}
                </div>
              )}
              <h3 className={`mb-1 text-xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>{plan.name}</h3>
              <p className={`mb-6 text-sm ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>{plan.subtitle}</p>

              <div className="mb-1 flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>{plan.price}</span>
                {plan.priceUnit && (
                  <span className={`text-sm ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>{plan.priceUnit}</span>
                )}
              </div>
              <p className={`mb-8 text-[12px] ${plan.highlighted ? "text-white/50" : "text-muted-foreground"}`}>{plan.note}</p>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm ${plan.highlighted ? "text-white/80" : "text-foreground"}`}>
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                      plan.highlighted
                        ? "bg-white/10 text-white"
                        : "bg-accent text-foreground"
                    }`}>
                      <Check size={12} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium transition-all ${
                  plan.highlighted
                    ? "bg-white text-foreground hover:opacity-90"
                    : "bg-foreground text-white hover:opacity-80"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
