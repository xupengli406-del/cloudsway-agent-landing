"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

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
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">灵活的合作模式</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            根据业务需求选择最适合的合作方式。
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border-2 border-primary bg-white p-8 lg:p-10"
          >
            <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              推荐
            </div>
            <h3 className="mb-2 text-2xl font-bold text-foreground">定制化合作</h3>
            <p className="mb-6 text-muted-foreground">国内客户 · 按需配置</p>

            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">✓</span>
                专属技术支持与对接
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">✓</span>
                灵活的 API 配置与调优
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">✓</span>
                SLA 保障与优先响应
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">✓</span>
                按需定制 Agent 能力
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              联系我们
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-white p-8 lg:p-10"
          >
            <div className="mb-2 flex items-center gap-2">
              <Globe size={20} className="text-muted-foreground" />
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                Coming Soon
              </span>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-foreground">自助充值</h3>
            <p className="mb-6 text-muted-foreground">海外客户 · 按量付费</p>

            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">✓</span>
                在线注册，即刻获取 API Key
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">✓</span>
                透明定价，按 query / token 计费
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">✓</span>
                完善的自助文档与 SDK
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">✓</span>
                免费试用额度
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
            >
              加入等候列表
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
