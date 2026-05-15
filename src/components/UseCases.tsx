"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, Briefcase, Users } from "lucide-react";

const cases = [
  {
    icon: <Layers size={24} />,
    title: "SaaS 公司",
    pain: "想给产品加 AI 能力，自建 Agent 太重",
    solution: "集成 Agent API，产品立刻拥有深度研究和分析能力",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Rocket size={24} />,
    title: "AI 应用公司",
    pain: "搜索 + 模型 + 沙箱分散采购，整合成本高",
    solution: "一个 API 获得完整 Agent 基础设施",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Briefcase size={24} />,
    title: "解决方案商",
    pain: "每个项目重复造轮子",
    solution: "在 Agent API 上封装行业方案，快速交付",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <Users size={24} />,
    title: "AI BPO",
    pain: "标准化任务依赖人力，成本高且不可规模化",
    solution: "用 Agent 替代标准化外包人力，成本降低 10 倍",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Use Cases
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">使用场景</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            从 SaaS 产品集成到企业智能化，Agent API 服务各类客户。
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${c.color}`}>
                {c.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{c.title}</h3>
              <div className="mb-4 rounded-lg bg-red-50 px-4 py-2.5">
                <p className="text-sm text-red-700">
                  <span className="font-medium">痛点：</span>
                  {c.pain}
                </p>
              </div>
              <div className="rounded-lg bg-emerald-50 px-4 py-2.5">
                <p className="text-sm text-emerald-700">
                  <span className="font-medium">方案：</span>
                  {c.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
