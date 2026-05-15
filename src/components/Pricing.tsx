"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Pay As You Go",
    subtitle: "For developers and startups",
    price: "$0.05",
    priceUnit: "per query",
    note: "No minimum commitment",
    highlighted: false,
    features: [
      "Deep Research & Deep Analysis modes",
      "Up to 20 sources per research task",
      "Standard model selection",
      "Community support",
      "1,000 free credits to start",
    ],
    cta: "Get Started Free",
    ctaHref: "https://console.cloudsway.ai",
  },
  {
    name: "Pro",
    subtitle: "For teams and growing products",
    price: "$499",
    priceUnit: "/ month",
    note: "Includes $600 in credits",
    highlighted: true,
    badge: "Popular",
    features: [
      "Everything in Pay As You Go",
      "Unlimited sources per task",
      "Priority model access & faster execution",
      "Cross-session Agent Memory",
      "Dedicated support & SLA guarantee",
      "Custom Agent capabilities on request",
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
      "Custom model fine-tuning",
      "On-premise deployment options",
      "Premium SLA & priority support",
      "Custom integrations & workflows",
    ],
    cta: "Contact Sales",
    ctaHref: "mailto:contact@cloudsway.ai",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Start free and scale as you grow. Pay only for what you use.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-white p-8 lg:p-10 ${
                plan.highlighted
                  ? "border-2 border-primary shadow-lg"
                  : "border border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {plan.badge}
                </div>
              )}
              <h3 className="mb-1 text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{plan.subtitle}</p>

              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.priceUnit && (
                  <span className="text-sm text-muted-foreground">{plan.priceUnit}</span>
                )}
              </div>
              <p className="mb-8 text-xs text-muted-foreground">{plan.note}</p>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                      plan.highlighted
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <Check size={12} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "border border-border bg-white text-foreground hover:bg-muted"
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
