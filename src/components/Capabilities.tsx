"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  GitBranch,
  Quote,
  Brain,
  Globe,
  Code2,
  TrendingUp,
  BarChart3,
  FileInput,
  LayoutList,
  Database,
  FileText,
  Box,
  Cpu,
} from "lucide-react";

const tabs = [
  {
    id: "research",
    label: "Deep Research",
    number: "01",
    title: "Autonomous Research from Question to Report",
    description:
      "提交研究问题，Agent 自主搜索多个信息源、交叉验证、综合分析，输出带引用的结构化研究报告。",
    code: `curl -X POST https://api.cloudsway.ai/v1/run \\
  -H "Authorization: Bearer <your-key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "AI Agent API 市场竞争格局分析",
    "mode": "deep_research"
  }'`,
    features: [
      { icon: <Search size={18} />, title: "多源信息综合", desc: "自动搜索、筛选、交叉验证多个信息源" },
      { icon: <GitBranch size={18} />, title: "计划式执行", desc: "智能规划研究步骤，子任务并行执行" },
      { icon: <Quote size={18} />, title: "引用溯源", desc: "每个结论附带可追溯引用来源" },
      { icon: <Brain size={18} />, title: "长期记忆", desc: "跨会话知识积累，越用越懂你的领域" },
      { icon: <Globe size={18} />, title: "多语言研究", desc: "原生支持中英文及多语言检索与综合" },
    ],
  },
  {
    id: "analysis",
    label: "Deep Analysis",
    number: "02",
    title: "Turn Raw Data into Actionable Insights",
    description:
      "上传数据或描述分析需求，Agent 在安全沙箱中执行代码分析，自动生成可视化图表和结构化洞察报告。",
    code: `curl -X POST https://api.cloudsway.ai/v1/run \\
  -H "Authorization: Bearer <your-key>" \\
  -F "file=@data.csv" \\
  -F 'config={
    "mode": "deep_analysis",
    "goal": "找出销售数据中的季度趋势和异常"
  }'`,
    features: [
      { icon: <Code2 size={18} />, title: "代码执行沙箱", desc: "安全隔离环境运行数据分析代码" },
      { icon: <TrendingUp size={18} />, title: "模式识别", desc: "自动发现数据中的趋势、异常和关联" },
      { icon: <BarChart3 size={18} />, title: "可视化生成", desc: "自动生成图表和可视化报告" },
      { icon: <FileInput size={18} />, title: "多格式输入", desc: "支持 PDF/Word/PPT/CSV/代码等" },
      { icon: <LayoutList size={18} />, title: "结构化输出", desc: "输出可操作的分析结果与建议" },
    ],
  },
];

const baseCapabilities = [
  { icon: <Database size={18} />, title: "Agent Memory", desc: "跨会话持久记忆，积累领域知识，越用越精准" },
  { icon: <FileText size={18} />, title: "文件处理", desc: "PDF/Word/PPT/CSV/代码，多格式无缝导入" },
  { icon: <Box size={18} />, title: "沙箱执行", desc: "安全隔离的代码执行与文件生成环境" },
  { icon: <Cpu size={18} />, title: "多模型支持", desc: "灵活调度最优模型组合，不锁定单一供应商" },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState("research");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="capabilities" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">核心能力</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Deep Research 和 Deep Analysis 两大核心模式，加上完整的基础能力支撑。
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-white p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-white p-8 lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="mb-3 inline-block rounded-md bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  {active.number} {active.label}
                </span>
                <h3 className="mb-4 text-2xl font-bold text-foreground">{active.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{active.description}</p>

                <div className="overflow-hidden rounded-lg bg-[#0f172a] p-4">
                  <pre className="overflow-x-auto text-[13px] leading-relaxed">
                    <code className="text-slate-300 whitespace-pre">{active.code}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                {active.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Base capabilities */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {baseCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                {cap.icon}
              </div>
              <p className="mb-1 font-semibold text-foreground">{cap.title}</p>
              <p className="text-sm text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
