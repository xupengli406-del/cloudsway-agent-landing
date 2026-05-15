"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    dimension: "基础设施",
    selfBuild: "自行搭建维护",
    workflow: "需配置编排",
    cloudsway: "全托管，API 即用",
    cloudswayBest: true,
  },
  {
    dimension: "搜索能力",
    selfBuild: "外采第三方",
    workflow: "外采第三方",
    cloudsway: "自研搜索引擎，原生集成",
    cloudswayBest: true,
  },
  {
    dimension: "执行环境",
    selfBuild: "自建沙箱",
    workflow: "无 / 有限",
    cloudsway: "内置安全沙箱",
    cloudswayBest: true,
  },
  {
    dimension: "模型灵活性",
    selfBuild: "单一绑定",
    workflow: "单一绑定",
    cloudsway: "多模型灵活调度",
    cloudswayBest: true,
  },
  {
    dimension: "任务规划",
    selfBuild: "手动编排",
    workflow: "固定 workflow",
    cloudsway: "Plan Mode 自动拆解并发",
    cloudswayBest: true,
  },
  {
    dimension: "记忆能力",
    selfBuild: "自行实现",
    workflow: "无",
    cloudsway: "内置长期记忆",
    cloudswayBest: true,
  },
  {
    dimension: "上手成本",
    selfBuild: "数周",
    workflow: "数天",
    cloudsway: "分钟级",
    cloudswayBest: true,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            为什么选择 Cloudsway Agent
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            对比自建 Agent、Workflow 编排框架和 Cloudsway Agent API 的全方位差异。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-border bg-white">
            <thead>
              <tr>
                <th className="border-b border-border bg-muted px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  维度
                </th>
                <th className="border-b border-border bg-muted px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  自建 Agent
                </th>
                <th className="border-b border-border bg-muted px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  Workflow 框架
                </th>
                <th className="border-b border-border bg-primary/5 px-6 py-4 text-left text-sm font-semibold text-primary">
                  Cloudsway Agent API ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-muted/50">
                  <td className="border-b border-border px-6 py-4 text-sm font-medium text-foreground">
                    {row.dimension}
                  </td>
                  <td className="border-b border-border px-6 py-4 text-sm text-muted-foreground">
                    {row.selfBuild}
                  </td>
                  <td className="border-b border-border px-6 py-4 text-sm text-muted-foreground">
                    {row.workflow}
                  </td>
                  <td className="border-b border-border bg-primary/5 px-6 py-4 text-sm font-medium text-foreground">
                    {row.cloudsway}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
