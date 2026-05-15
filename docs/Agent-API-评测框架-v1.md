# Cloudsway Agent API — 产品评测框架 v1.0

> **文档目的**：定义 Deep Research Agent API 的产品优化指标体系，用于与研发团队对齐迭代方向、驱动产品优化，并为官网提供评测数据支撑。
>
> **适用产品**：Agent API（含 Deep Research / Deep Analysis 模式）
>
> **文档状态**：待评审
>
> **日期**：2026-05-15

---

## 一、评测目标

1. **定义产品优化指标** — 建立可量化的产品质量基准线，驱动迭代
2. **对接研发优化方向** — 每个指标对应一个可优化方向，研发据此排优先级
3. **产出对外展示数据** — 评测结果用于官网 Performance 区块和竞品对比
4. **建立可复用评测体系** — 支持自动化执行、定期回归

---

## 二、三层评测框架

基于团队共识（5/11 周会："从**轨迹**和 **final results** 两个维度评测"），扩展为三层框架：

```
评测框架
│
├── 第一层：最终结果质量（Final Results Quality）— 权重 50%
│   ├── 准确性 Accuracy — 回答是否事实正确
│   ├── 完整性 Completeness — 是否覆盖问题要求的所有方面
│   ├── 深度 Depth — 分析是否有深度洞察，非表面搜索摘要
│   ├── 引用质量 Source Quality — 信息来源是否权威、可追溯
│   └── 结构化程度 Structure — 输出是否结构化、可读性强
│
├── 第二层：执行过程质量（Trajectory Quality）— 权重 30%
│   ├── 执行效率 Efficiency — 完成任务的步骤数 / model loop 数
│   ├── 工具调用成功率 Tool Success Rate — 工具调用成功次数/总次数
│   ├── 失败恢复能力 Error Recovery — 遇到失败后能否自动修正继续
│   ├── 搜索策略质量 Search Strategy — 关键词选择、多轮搜索策略是否合理
│   └── Plan 合理性 Plan Quality — 任务拆解是否合理（Plan Mode 场景）
│
└── 第三层：工程与体验指标（Engineering & UX Metrics）— 权重 20%
    ├── 端到端延迟 E2E Latency — 从发起请求到返回结果的总耗时
    ├── Token 消耗 Token Usage — 单次任务的 token 消耗量
    ├── 成本效率 Cost Efficiency — 每次任务的 API 成本
    ├── 首字延迟 TTFT — Time to First Token
    └── 并发稳定性 Concurrency — 并发请求下的稳定性
```

---

## 三、各层指标定义

### 3.1 第一层：最终结果质量（权重 50%）

| 指标 | 评分方式 | 评分标准 | 分值范围 |
|------|----------|----------|----------|
| **准确性 Accuracy** | 人工 + LLM-as-Judge | 对照 Ground Truth 评估事实正确性，无编造 | 0-5 分 |
| **完整性 Completeness** | 人工 + Checklist | 问题要求的 N 个方面覆盖了几个 | 覆盖率 0-100% |
| **深度 Depth** | 人工 + LLM-as-Judge | 是否有原创洞察 vs 简单搜索摘要拼接 | 0-5 分 |
| **引用质量 Source Quality** | 自动化 + 人工复核 | 引用源数量、权威性评分、链接可达性 | 0-5 分 |
| **结构化程度 Structure** | 自动化 | 是否有标题/分节/表格/总结等结构 | 0-5 分 |

**第一层综合得分** = (Accuracy + Depth) × 0.3 + Completeness% × 0.2 + Source Quality × 0.1 + Structure × 0.1

**评分细则：**

- **准确性**：
  - 5 = 所有核心事实正确，无任何编造
  - 4 = 有个别细节偏差但核心结论正确
  - 3 = 大部分正确，有 1-2 处明显错误
  - 2 = 存在多处事实错误，影响结论可信度
  - 1 = 大量错误或编造
  - 0 = 完全编造或与事实严重不符

- **完整性**：按 eval_checklist 逐项核对，计算覆盖率

- **深度**：
  - 5 = 有独到洞察，多维度交叉分析，远超搜索摘要
  - 4 = 有分析深度，能看出因果关系和趋势
  - 3 = 中规中矩，有一定分析但不够深入
  - 2 = 基本是搜索结果的整理堆砌
  - 1 = 浅层摘要，无分析
  - 0 = 未回答或完全跑题

### 3.2 第二层：执行过程质量（权重 30%）

| 指标 | 数据来源 | 计算方式 | 优化方向 |
|------|----------|----------|----------|
| **执行步骤数** | Event 日志 | 原子化步骤 count | 越少越好（同等质量下） |
| **Model Loop 数** | Agent 核心层日志 | Loop count | 越少越好 |
| **工具调用成功率** | Tool 模块日志 | 成功数 / 总调用数 × 100% | 越高越好，目标 > 90% |
| **失败重试率** | Event 日志 | 重试次数 / 总步骤数 | 越低越好，目标 < 10% |
| **搜索多样性** | Search 工具日志 | unique query 数 / 总 search 数 | 越高越好，目标 > 70% |
| **Plan 合理性** | Plan Mode 日志 | 人工评估拆解质量 | 0-5 分 |

**关键关注点**：
- 执行效率 ≠ 越快越好。需与结果质量联合看：同等质量下步骤更少 = 更高效
- 工具调用失败原因分类（网络超时 / 参数错误 / 权限问题 / 目标不存在）有助于定位优化方向
- 搜索策略质量可通过对比"最优搜索路径"来评估（需人工标注 baseline）

### 3.3 第三层：工程与体验指标（权重 20%）

| 指标 | 目标值 | 数据来源 | 说明 |
|------|--------|----------|------|
| **E2E 延迟** | 简单 < 120s / 复杂 < 300s | API 网关日志 | 从请求发起到结果完整返回 |
| **TTFT（首字延迟）** | < 3s | API 网关日志 | 用户感知响应速度的关键 |
| **Token 消耗** | 按任务类型建立 baseline | 模型调用日志 | 影响成本和速度 |
| **单次任务成本** | 按任务类型建立 baseline | 计费系统 | API 定价的依据 |
| **并发稳定性** | P99 < 目标延迟 × 1.5 | 压测工具 | 多租户场景下的稳定性 |

**基线建立方式**：
1. 先用当前版本跑完整评测集，记录各指标分布
2. 取 P50 作为 baseline，P90 作为预警线
3. 后续每个版本对比 baseline 看优化/劣化情况

---

## 四、评测集设计

### 4.1 分类与数量

| 类别 | 描述 | 数量 | 示例 |
|------|------|------|------|
| **事实查询型** | 有明确标准答案的调研任务 | 20-30 条 | "2025年全球半导体市场规模及Top 10公司排名" |
| **综合分析型** | 需要多方数据交叉分析 | 15-20 条 | "对比 AWS/Azure/GCP 2025年AI服务定价策略" |
| **深度报告型** | 需要长篇输出的调研报告 | 10-15 条 | "撰写东南亚电商市场进入策略报告" |
| **多语言型** | 中英文等多语言调研 | 10 条 | "日本SaaS市场最新趋势(日文源)" |
| **实时性型** | 需要最新信息的查询 | 10 条 | "本周 AI 领域最重要的 3 个新闻" |
| **边界测试型** | 测试系统极限和容错 | 10 条 | 模糊问题/无解问题/超长上下文 |

> **总计：75-95 条评测用例**，覆盖主要使用场景和难度梯度

### 4.2 难度分级

| 难度 | 定义 | 预期表现 |
|------|------|----------|
| **Easy** | 事实明确，单一来源即可回答 | 准确率 > 90%，延迟 < 60s |
| **Medium** | 需要多源交叉，有一定综合性 | 准确率 > 80%，延迟 < 120s |
| **Hard** | 深度分析，需要推理和综合 | 准确率 > 70%，延迟 < 300s |
| **Edge** | 边界条件，测试容错和幻觉抑制 | 不编造 > 95%，合理拒答 |

### 4.3 评测集格式规范（YAML）

```yaml
- id: "{CATEGORY_PREFIX}-{NUMBER}"    # FQ-001, CA-001, DR-001, ML-001, RT-001, BT-001
  category: "事实查询 | 综合分析 | 深度报告 | 多语言 | 实时性 | 边界测试"
  difficulty: "easy | medium | hard | edge"
  query: "用户查询原文"
  context: "（可选）附加上下文或约束条件"
  ground_truth_hints:
    - "验证点1：预期回答应包含的关键信息"
    - "验证点2：预期数据来源"
    - "验证点3：预期分析深度"
  eval_checklist:
    - "核查项1 ✓/✗"
    - "核查项2 ✓/✗"
  expected_behavior: "（边界测试用）预期系统行为"
  tags: ["行业标签", "能力标签"]
```

### 4.4 种子评测集（20 条）

```yaml
# ===== 事实查询型 (6条) =====
- id: FQ-001
  category: 事实查询
  difficulty: easy
  query: "2025年全球智能手机出货量排名前五的品牌及其市场份额"
  ground_truth_hints:
    - 应包含 Samsung, Apple, Xiaomi 等品牌
    - 数据应来自 IDC/Canalys/Counterpoint 等权威机构
    - 应有具体数字而非模糊描述
  eval_checklist:
    - 是否列出 5 个品牌 ✓/✗
    - 是否有具体份额数字 ✓/✗
    - 是否标注数据来源 ✓/✗
  tags: [消费电子, 市场份额]

- id: FQ-002
  category: 事实查询
  difficulty: medium
  query: "目前全球有哪些公司提供 Managed Agent API 服务？对比它们的定价模式和核心能力"
  ground_truth_hints:
    - 应覆盖 Anthropic(Claude), Perplexity, OpenAI 等
    - 应有定价信息对比
    - 应有能力矩阵对比
  eval_checklist:
    - 覆盖公司数 ≥ 5 ✓/✗
    - 是否有定价对比表格 ✓/✗
    - 是否有能力对比维度 ✓/✗
  tags: [AI行业, 竞品分析]

- id: FQ-003
  category: 事实查询
  difficulty: easy
  query: "新加坡目前的企业所得税率是多少？有哪些针对科技创业公司的税收优惠政策？"
  ground_truth_hints:
    - 企业所得税标准税率 17%
    - 应提及 Startup Tax Exemption Scheme
    - 应提及 Pioneer Certificate Incentive 等
  eval_checklist:
    - 税率准确 ✓/✗
    - 列出优惠政策 ≥ 3 项 ✓/✗
    - 信息时效性（2024-2025）✓/✗
  tags: [法务税务, 新加坡]

- id: FQ-004
  category: 事实查询
  difficulty: medium
  query: "列出 2025 年 AI Agent 领域融资金额 Top 10 的公司，包含融资轮次、金额和投资方"
  ground_truth_hints:
    - 应有具体融资数字
    - 应包含 AI Agent 赛道知名公司
    - 数据来源应为 Crunchbase/PitchBook 等
  eval_checklist:
    - 列出公司数 = 10 ✓/✗
    - 每家有金额和轮次 ✓/✗
    - 有投资方信息 ✓/✗
  tags: [AI行业, 融资]

- id: FQ-005
  category: 事实查询
  difficulty: easy
  query: "Python 3.12 相比 3.11 有哪些主要新特性？"
  ground_truth_hints:
    - 应提及 type parameter syntax
    - 应提及 f-string improvements
    - 应提及性能改进
  eval_checklist:
    - 核心特性覆盖 ≥ 5 项 ✓/✗
    - 技术描述准确 ✓/✗
    - 有代码示例 ✓/✗
  tags: [技术, Python]

- id: FQ-006
  category: 事实查询
  difficulty: medium
  query: "当前主流向量数据库（Pinecone, Weaviate, Milvus, Qdrant, ChromaDB）的性能对比和适用场景"
  ground_truth_hints:
    - 应有性能维度对比（延迟/吞吐/索引速度）
    - 应有部署方式对比（SaaS/自托管）
    - 应有推荐场景
  eval_checklist:
    - 覆盖所有 5 个数据库 ✓/✗
    - 有性能对比数据 ✓/✗
    - 有推荐使用场景 ✓/✗
  tags: [技术, 数据库]

# ===== 综合分析型 (5条) =====
- id: CA-001
  category: 综合分析
  difficulty: hard
  query: "分析 AI BPO（AI 业务流程外包）的市场现状，包括主要玩家、商业模式、典型案例和未来趋势"
  ground_truth_hints:
    - 应覆盖 AI BPO 定义和市场规模
    - 应有具体公司案例
    - 应有商业模式分析和趋势预判
  eval_checklist:
    - 市场规模数据 ✓/✗
    - 主要玩家 ≥ 5 ✓/✗
    - 案例分析 ≥ 2 ✓/✗
    - 趋势预判有逻辑支撑 ✓/✗
  tags: [AI行业, BPO]

- id: CA-002
  category: 综合分析
  difficulty: hard
  query: "对比主流 Agent 框架（LangGraph, CrewAI, AutoGen, Claude Agent SDK）的架构设计、适用场景和社区生态"
  ground_truth_hints:
    - 每个框架应有架构描述
    - 应有横向对比表
    - 应有推荐场景
  eval_checklist:
    - 框架覆盖完整 ✓/✗
    - 有对比表格 ✓/✗
    - 技术细节准确 ✓/✗
    - 有社区活跃度数据 ✓/✗
  tags: [AI行业, Agent框架]

- id: CA-003
  category: 综合分析
  difficulty: hard
  query: "分析 2025 年中国 SaaS 出海的主要目标市场、成功案例和失败教训，给出策略建议"
  ground_truth_hints:
    - 应覆盖东南亚、日本、北美等市场
    - 应有具体案例（如 AfterShip, Airgram 等）
    - 应有策略建议
  eval_checklist:
    - 目标市场 ≥ 3 个区域 ✓/✗
    - 成功案例 ≥ 3 ✓/✗
    - 失败教训有具体分析 ✓/✗
    - 策略建议可执行 ✓/✗
  tags: [SaaS, 出海]

- id: CA-004
  category: 综合分析
  difficulty: medium
  query: "对比 OpenAI、Anthropic、Google 三家公司在 2025 年的 AI Agent 产品布局和战略差异"
  ground_truth_hints:
    - 应覆盖各公司 Agent 相关产品
    - 应有战略分析维度
    - 应有时间线信息
  eval_checklist:
    - 三家公司均有详细分析 ✓/✗
    - 产品信息准确且时效 ✓/✗
    - 有战略差异总结 ✓/✗
  tags: [AI行业, 战略分析]

- id: CA-005
  category: 综合分析
  difficulty: medium
  query: "分析 RAG（检索增强生成）技术在 2025 年的最新进展，包括 Agentic RAG、Graph RAG 等新范式的对比"
  ground_truth_hints:
    - 应覆盖 RAG 技术演进路线
    - 应包含 Agentic RAG, Graph RAG, Self-RAG 等
    - 应有技术原理对比
  eval_checklist:
    - 覆盖新范式 ≥ 4 种 ✓/✗
    - 技术原理描述准确 ✓/✗
    - 有适用场景对比 ✓/✗
  tags: [技术, RAG]

# ===== 深度报告型 (3条) =====
- id: DR-001
  category: 深度报告
  difficulty: hard
  query: "撰写一份关于东南亚企业级 SaaS 市场的调研报告，包括市场规模、增长驱动力、主要细分领域、竞争格局和进入建议"
  ground_truth_hints:
    - 报告应有清晰结构（目录/摘要/正文/结论）
    - 应包含数据图表描述
    - 应有可执行的建议
  eval_checklist:
    - 报告结构完整（目录+摘要+正文+结论）✓/✗
    - 字数 ≥ 2000 ✓/✗
    - 数据引用 ≥ 10 处 ✓/✗
    - 有可执行进入建议 ✓/✗
  tags: [SaaS, 东南亚, 市场调研]

- id: DR-002
  category: 深度报告
  difficulty: hard
  query: "撰写一份 AI Agent 产品的技术选型报告，帮助 CTO 决策是自建 Agent 系统还是使用第三方 Agent API 服务"
  ground_truth_hints:
    - 应有自建 vs 第三方的全面对比
    - 应有成本分析（人力/时间/运维）
    - 应有决策矩阵
  eval_checklist:
    - 有成本对比分析 ✓/✗
    - 有技术可行性分析 ✓/✗
    - 有决策建议框架 ✓/✗
    - 考虑不同公司规模场景 ✓/✗
  tags: [技术选型, Agent]

- id: DR-003
  category: 深度报告
  difficulty: hard
  query: "调研全球 AI 安全与对齐（AI Safety & Alignment）领域的最新研究进展、主要机构和开放问题，撰写综述报告"
  ground_truth_hints:
    - 应覆盖主要研究方向
    - 应有机构和团队介绍
    - 应有开放问题和前沿方向
  eval_checklist:
    - 覆盖研究方向 ≥ 5 个 ✓/✗
    - 机构覆盖 ≥ 8 个 ✓/✗
    - 有最新论文/成果引用 ✓/✗
    - 报告长度 ≥ 3000 字 ✓/✗
  tags: [AI Safety, 综述]

# ===== 多语言型 (2条) =====
- id: ML-001
  category: 多语言
  difficulty: medium
  query: "调研日本市场上主要的企业协作 SaaS 产品（如 Cybozu, Sansan 等），分析其产品特点和市场策略（需参考日文原始资料）"
  ground_truth_hints:
    - 应有日本本土 SaaS 公司信息
    - 应参考日文来源
    - 应有市场特点分析
  eval_checklist:
    - 覆盖日本本土公司 ≥ 5 ✓/✗
    - 有日文来源引用 ✓/✗
    - 产品信息准确 ✓/✗
  tags: [SaaS, 日本, 多语言]

- id: ML-002
  category: 多语言
  difficulty: medium
  query: "Research the current state of AI regulation in the European Union, focusing on the AI Act implementation timeline and compliance requirements for AI agent services"
  ground_truth_hints:
    - Should cover EU AI Act key provisions
    - Should have implementation timeline
    - Should address agent-specific compliance
  eval_checklist:
    - AI Act 核心条款覆盖 ✓/✗
    - 时间线准确 ✓/✗
    - 有 Agent 服务相关合规要求 ✓/✗
  tags: [法规, 欧盟, 英文]

# ===== 实时性型 (2条) =====
- id: RT-001
  category: 实时性
  difficulty: medium
  query: "总结过去一周 AI 领域最重要的 5 条新闻，包括发布、融资和政策动态"
  ground_truth_hints:
    - 信息应为最近 7 天内
    - 应覆盖多个子领域
    - 应有来源链接
  eval_checklist:
    - 新闻时效在 7 天内 ✓/✗
    - 覆盖 ≥ 3 个子领域 ✓/✗
    - 每条有来源链接 ✓/✗
  tags: [实时, AI行业]

- id: RT-002
  category: 实时性
  difficulty: medium
  query: "查询今天的美元兑人民币汇率，以及过去一个月的走势分析"
  ground_truth_hints:
    - 应有当天实时汇率
    - 应有近期走势描述
    - 应有影响因素分析
  eval_checklist:
    - 汇率数据为当天 ✓/✗
    - 有走势描述 ✓/✗
    - 有影响因素分析 ✓/✗
  tags: [金融, 实时]

# ===== 边界测试型 (2条) =====
- id: BT-001
  category: 边界测试
  difficulty: edge
  query: "分析一个完全不存在的虚构公司 XyloTech 的商业模式"
  expected_behavior: "应明确告知无法找到该公司信息，而非编造"
  eval_checklist:
    - 未编造虚假信息 ✓/✗
    - 明确说明查无此公司 ✓/✗
  tags: [幻觉抑制, 容错]

- id: BT-002
  category: 边界测试
  difficulty: edge
  query: "请用 500 字以内回答：量子计算对密码学的威胁有多大？要求同时包含技术原理、时间线预测、当前应对方案、各国政策对比、以及对金融行业的具体影响"
  expected_behavior: "在字数限制下合理取舍，或说明无法在字数限制内完整覆盖所有要求"
  eval_checklist:
    - 尝试覆盖多个维度 ✓/✗
    - 字数合理控制 ✓/✗
    - 或合理说明限制 ✓/✗
  tags: [约束条件, 取舍能力]
```

---

## 五、评测执行流程

### 5.1 执行步骤

```
Step 1: 准备
├── 整理评测集（YAML/JSON 格式化）
├── 配置 API 调用参数（model, temperature, max_tokens 等）
├── 准备 Ground Truth / Checklist
└── 确保日志采集 pipeline 就绪

Step 2: 批量执行
├── 批量调用 Agent API 执行评测集
├── 采集执行日志（event / tool / model 各层）
├── 收集最终输出结果
└── 记录执行元数据（时间戳/版本号/配置参数）

Step 3: 自动评分
├── 规则评分：结构化指标自动计算（延迟/token/成功率等）
├── LLM-as-Judge：用 GPT-4o / Claude 对结果质量打分
└── Checklist 半自动打分：按 checklist 逐项核对

Step 4: 人工审核
├── 抽样复核 LLM 评分结果（~20% 样本量）
├── 边界 case 专项审核
├── 记录评分争议与修正
└── 校准 LLM-as-Judge 一致性

Step 5: 报告输出
├── 各维度得分汇总
├── 与上一版本对比（优化/劣化标注）
├── 与竞品对比（同题跑 Perplexity/ChatGPT/Gemini）
├── 优化建议优先级排序
└── 可用于官网展示的数据提取
```

### 5.2 执行频率

| 场景 | 频率 | 范围 |
|------|------|------|
| **版本发布前** | 每次 | 完整评测集 |
| **日常回归** | 每周 | 核心子集（~30 条） |
| **竞品对比** | 每月 | 完整评测集 |
| **紧急修复验证** | 按需 | 相关子集 |

---

## 六、LLM-as-Judge 评分方案

### 6.1 评分 Prompt 模板

```
你是一个专业的 AI Agent 输出质量评估专家。请对以下 Agent 输出进行严格评分。

【用户查询】
{query}

【Agent 输出】
{agent_output}

【参考信息（如有）】
{ground_truth_hints}

【评估维度与标准】
1. 准确性(0-5)：信息是否事实正确，无编造。如发现明确错误或编造内容，分数不超过2
2. 完整性(0-5)：是否覆盖查询要求的所有方面。按要求覆盖的维度数占比评分
3. 深度(0-5)：分析是否有深度洞察，而非简单搜索摘要的拼接。是否有因果分析、趋势推演、多维对比
4. 引用质量(0-5)：来源是否权威、多元、可追溯。是否标注了具体来源
5. 结构化(0-5)：输出是否有清晰结构（标题/分节/列表/表格/总结），是否易于阅读

请按以下 JSON 格式输出评分：
{
  "accuracy": {"score": X, "reason": "简要说明评分理由"},
  "completeness": {"score": X, "reason": "简要说明评分理由"},
  "depth": {"score": X, "reason": "简要说明评分理由"},
  "source_quality": {"score": X, "reason": "简要说明评分理由"},
  "structure": {"score": X, "reason": "简要说明评分理由"},
  "overall": X.X,
  "highlights": "做得好的方面",
  "improvements": "需要改进的方面",
  "summary": "一句话总结"
}
```

### 6.2 评分一致性保障

- **双 Judge**：同一输出用两个不同模型（如 GPT-4o + Claude）评分
- **偏差阈值**：两个 Judge 评分差 > 1.5 分时，标记为需人工复核
- **校准集**：保留 10 条人工标注 Ground Truth，定期校准 Judge 一致性
- **Position Bias 控制**：竞品对比盲评时，随机打乱输出顺序

---

## 七、竞品对比评测协议

### 7.1 对比产品

| 对比产品 | 调用方式 | 说明 |
|----------|----------|------|
| **Perplexity Pro** | API | Deep Research 直接竞品 |
| **ChatGPT Deep Research** | Web / API | OpenAI 的深度调研能力 |
| **Gemini Deep Research** | Web / API | Google 的深度调研能力 |
| **直接 LLM 调用** | API | Baseline，展示 Agent 相比纯 LLM 的增益 |

### 7.2 对比规则

1. **同一评测集**提交所有系统，统一输入条件
2. **统一评分标准**：用同一 LLM-as-Judge + 同一 Prompt 评分
3. **盲评协议**：评估者（含 LLM Judge）不知输出来源
4. **多轮执行**：每个 query 跑 3 次取平均（消除随机性）
5. **成本归一化**：计算 "每美元质量分"（Quality per Dollar）

### 7.3 对比输出格式

```
【按类别 Win/Tie/Loss】
| 类别 | vs Perplexity | vs ChatGPT | vs Gemini | vs Direct LLM |
|------|---------------|------------|-----------|----------------|
| 事实查询 | W: X% / T: Y% / L: Z% | ... | ... | ... |
| 综合分析 | ... | ... | ... | ... |
| 深度报告 | ... | ... | ... | ... |

【综合维度对比】
| 维度 | Cloudsway | Perplexity | ChatGPT | Gemini |
|------|-----------|------------|---------|--------|
| 准确性 | X.X | X.X | X.X | X.X |
| 完整性 | X.X | X.X | X.X | X.X |
| ... | ... | ... | ... | ... |

【成本效率对比】
| 产品 | 平均单次成本 | 平均质量分 | 每美元质量分 |
|------|--------------|------------|--------------|
| Cloudsway | $X.XX | X.X | X.X |
| ... | ... | ... | ... |
```

### 7.4 结果应用

- **大数字指标** → 填入官网 Performance Highlights
- **雷达图/胜率表** → 填入官网竞品对比区块
- **方法论** → 写成 Blog 文章建立技术信任

---

## 八、与研发团队对接需求

### 8.1 日志规范需求

需要研发在以下三层输出结构化日志：

| 层级 | 需要的字段 | 格式 |
|------|------------|------|
| **Agent 核心层** | event_type, timestamp, step_id, plan_id, status, duration_ms | JSON Lines |
| **Tool 模块** | tool_name, call_id, input_params, output_status, error_type, duration_ms | JSON Lines |
| **Model 调用层** | model_id, prompt_tokens, completion_tokens, latency_ms, temperature | JSON Lines |

**日志示例：**
```json
{"layer": "agent", "event_type": "step_start", "step_id": "s-001", "plan_id": "p-001", "timestamp": "2026-05-15T10:00:00Z"}
{"layer": "tool", "tool_name": "web_search", "call_id": "t-001", "input_params": {"query": "..."}, "output_status": "success", "duration_ms": 2340, "timestamp": "2026-05-15T10:00:01Z"}
{"layer": "model", "model_id": "claude-sonnet-4-6", "prompt_tokens": 1200, "completion_tokens": 800, "latency_ms": 1500, "timestamp": "2026-05-15T10:00:03Z"}
```

### 8.2 评测 API 接口需求

```
POST /api/v1/eval/batch
Content-Type: application/json

{
  "eval_set_id": "v1-full",
  "queries": [
    {
      "id": "FQ-001",
      "query": "...",
      "config": {
        "model": "default",
        "temperature": 0.7,
        "max_tokens": 4096
      }
    }
  ],
  "collect_trajectory": true,
  "callback_url": "https://..."
}
```

**返回：**
```json
{
  "batch_id": "batch-xxx",
  "status": "running",
  "results_url": "https://..."
}
```

### 8.3 核心对接事项清单

| # | 事项 | 负责方 | 优先级 | 说明 |
|---|------|--------|--------|------|
| 1 | 结构化日志输出规范确认 | 研发 | P0 | 评测数据采集的基础 |
| 2 | 批量评测 API 接口提供 | 研发 | P0 | 自动化执行的前提 |
| 3 | Event 日志格式统一 | 研发 | P1 | 轨迹数据自动化解析 |
| 4 | 评测环境隔离 | 研发 | P1 | 避免评测影响线上 |
| 5 | Token/Cost 计量接口 | 研发 | P2 | 成本效率评估所需 |

---

## 九、执行时间线

| 步骤 | 任务 | 负责方 | 预计周期 | 产出物 |
|------|------|--------|----------|--------|
| **E1** | 评测框架评审 & 确认指标 | 产品 + 研发（王真容/权哥） | 2 天 | 评测框架定稿 |
| **E2** | 完善评测集（扩展到 75+ 条） | 产品 | 3-5 天 | 评测集 YAML |
| **E3** | 搭建自动化评测脚本 | 研发 | 3-5 天 | 评测工具代码 |
| **E4** | 接入日志采集（轨迹数据） | 研发（核心层） | 2-3 天 | 日志采集 pipeline |
| **E5** | 第一轮内部评测 | 产品 + 研发 | 2-3 天 | 评测报告 V1 |
| **E6** | 竞品对比评测 | 产品 | 3-5 天 | 竞品对比数据 |
| **E7** | 确定优化目标 & 优先级 | 产品 + 研发 | 1-2 天 | 优化 Roadmap |
| **E8** | 提取可展示数据 → 输入官网 | 产品 | 1 天 | 官网 Benchmark 素材 |

**总周期预估**：3-4 周（E1-E4 可并行）

---

## 十、风险与应对

| 风险 | 影响 | 应对措施 |
|------|------|----------|
| model/memory 模块联调延期 | 评测无法覆盖完整能力 | 先评测已就绪模块，分批迭代 |
| 评测集 Ground Truth 不准确 | 评测结果失真 | 人工抽检 + 多人交叉验证 |
| 竞品 API 调用限制/成本 | 无法完成对比评测 | 提前评估 API 额度和预算 |
| LLM-as-Judge 评分不一致 | 评分信度不足 | 双 Judge + 人工校准 + 校准集 |
| 日志采集不完整 | 轨迹评测无法执行 | 先建 mock 日志验证 pipeline |

---

## 附录 A：指标与优化方向映射

| 评测指标 | 对应的产品/技术优化方向 | 负责模块 |
|----------|--------------------------|----------|
| 准确性低 | 搜索召回质量 / 幻觉抑制 / 事实核查 | Search + Model |
| 完整性低 | Plan 拆解策略 / 多轮搜索深度 | Agent Core |
| 深度不足 | 分析 prompt / 多步推理能力 | Model + Prompt |
| 引用质量差 | 来源筛选策略 / 权威性排序 | Search |
| 结构化差 | 输出格式 prompt / 后处理 | Model + Post-process |
| 步骤数过多 | Plan 优化 / 并发策略 | Agent Core |
| 工具调用成功率低 | Tool 容错 / 参数校验 / 重试策略 | Tool Module |
| E2E 延迟高 | 并发执行 / 模型选择策略 / 缓存 | Agent Core + Infra |
| TTFT 高 | 流式输出优化 / 预热 | Infra |
| 成本高 | Token 压缩 / 模型路由 / 缓存 | Model + Agent Core |

---

## 附录 B：评分汇总模板

```
=== Cloudsway Agent API 评测报告 ===
版本：v{X.Y.Z}
日期：{YYYY-MM-DD}
评测集：{eval_set_id} ({N} 条)

【总分】
综合得分：X.X / 5.0
  - 结果质量（50%）：X.X / 5.0
  - 过程质量（30%）：X.X / 5.0
  - 工程体验（20%）：X.X / 5.0

【按类别得分】
| 类别 | 准确性 | 完整性 | 深度 | 引用 | 结构 | 综合 |
|------|--------|--------|------|------|------|------|
| 事实查询 | X.X | X.X | X.X | X.X | X.X | X.X |
| 综合分析 | X.X | X.X | X.X | X.X | X.X | X.X |
| ... | ... | ... | ... | ... | ... | ... |

【工程指标】
| 指标 | 本版本 | 上版本 | 变化 |
|------|--------|--------|------|
| 平均 E2E 延迟 | Xs | Xs | ↑/↓ X% |
| P95 E2E 延迟 | Xs | Xs | ↑/↓ X% |
| TTFT | Xs | Xs | ↑/↓ X% |
| 平均 Token | X | X | ↑/↓ X% |
| 工具成功率 | X% | X% | ↑/↓ X% |

【Top 3 优化建议】
1. ...
2. ...
3. ...
```

---

*文档版本：v1.0 | 作者：产品团队 | 待评审方：研发团队（王真容/权哥）*
