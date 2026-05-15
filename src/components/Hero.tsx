"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent to-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Cloudsway Agent
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground lg:text-5xl xl:text-[3.25rem]">
              一键调用 AI Agent 执行任意任务，
              <span className="text-primary">无需搭建基础设施</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              全托管 Agent API 服务。AI 自主搜索、分析、执行，交付完整结果。集成只需几分钟。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                申请试用
                <ArrowRight size={16} />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <FileText size={16} />
                查看文档
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <MessageSquare size={16} />
                联系我们
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-[#0f172a] p-5 shadow-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-400">API Request</span>
              </div>
              <pre className="overflow-x-auto text-[13px] leading-relaxed">
                <code className="text-slate-300">
                  <span className="text-green-400">POST</span>{" "}
                  <span className="text-blue-300">https://api.cloudsway.ai/v1/run</span>
                  {"\n\n"}
                  <span className="text-slate-500">{"{"}</span>
                  {"\n"}
                  {"  "}<span className="text-purple-300">&quot;query&quot;</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">&quot;AI Agent API 市场竞争格局分析&quot;</span>
                  <span className="text-slate-500">,</span>
                  {"\n"}
                  {"  "}<span className="text-purple-300">&quot;mode&quot;</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">&quot;deep_research&quot;</span>
                  {"\n"}
                  <span className="text-slate-500">{"}"}</span>
                </code>
              </pre>

              <div className="mt-4 border-t border-slate-700 pt-4">
                <p className="mb-2 text-xs text-slate-400">⟶ Agent 执行中...</p>
                <div className="space-y-1.5 text-xs text-slate-500">
                  <p className="text-emerald-400">✓ 规划研究方案（3 个子任务）</p>
                  <p className="text-emerald-400">✓ 搜索 28 个信息源</p>
                  <p className="text-emerald-400">✓ 交叉验证与综合分析</p>
                  <p className="text-emerald-400">✓ 生成结构化报告（4,200 字，23 条引用）</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
