export type ResultType = "table" | "text" | "chart";

export interface DemoCase {
  id: string;
  label: string;
  prompt: string;
  steps: { label: string; duration: number }[];
  resultType: ResultType;
  status: string;
  tools: string[];
  // table
  columns?: string[];
  rows?: string[][];
  footer?: string;
  // text
  textResult?: string;
  // chart (pie)
  chartData?: { label: string; value: number; color: string }[];
}

export const demoCases: DemoCase[] = [
  {
    id: "ecommerce-pricing",
    label: "E-commerce",
    prompt:
      "Track iPhone 16 Pro pricing across US, Japan, UK retailers — analyze price differentials and recommend optimal price point",
    steps: [
      { label: "Searching retailer websites", duration: 1400 },
      { label: "Fetching exchange rates", duration: 800 },
      { label: "Calculating price differentials", duration: 1000 },
    ],
    resultType: "table",
    status: "Complete — 5 rows",
    tools: ["Web Search", "Code Sandbox"],
    columns: ["RETAILER", "REGION", "LOCAL PRICE", "USD PRICE", "vs MSRP"],
    rows: [
      ["Apple Store", "US", "$1,199", "$1,199", "Baseline"],
      ["Amazon JP", "Japan", "¥189,800", "$1,215", "+1.3%"],
      ["Currys", "UK", "£1,199", "$1,517", "+26.5%"],
      ["Best Buy", "US", "$1,149", "$1,149", "-4.2%"],
      ["Yodobashi", "Japan", "¥186,800", "$1,196", "-0.3%"],
    ],
    footer: "RECOMMENDATION: Optimal price point $1,149 — 4.2% below avg",
  },
  {
    id: "finance-earnings",
    label: "Finance",
    prompt:
      "Analyze Tesla Q4 2024 earnings — revenue vs estimates, and visualize segment breakdown",
    steps: [
      { label: "Searching SEC filings & earnings data", duration: 1600 },
      { label: "Analyzing financial metrics", duration: 1200 },
      { label: "Generating visualization", duration: 800 },
    ],
    resultType: "chart",
    status: "Revenue segment breakdown",
    tools: ["Web Search", "Code Sandbox", "File Processing"],
    chartData: [
      { label: "Automotive", value: 78, color: "#5B8FF9" },
      { label: "Energy & Storage", value: 12, color: "#F56C6C" },
      { label: "Services & Other", value: 10, color: "#67C23A" },
    ],
  },
  {
    id: "legal-compliance",
    label: "Legal",
    prompt:
      "Compare GDPR, CCPA, and PIPL data privacy requirements — generate compliance gap analysis",
    steps: [
      { label: "Searching regulatory databases", duration: 1800 },
      { label: "Cross-referencing requirements", duration: 1400 },
      { label: "Generating compliance matrix", duration: 1000 },
    ],
    resultType: "text",
    status: "Compliance Gap Analysis Complete",
    tools: ["Web Search", "Memory"],
    textResult:
      "GDPR (EU)     — Consent: Explicit opt-in required\nCCPA (US-CA)  — Consent: Opt-out model (right to say no)\nPIPL (China)  — Consent: Separate consent per purpose\n\n⚠ GAP: Cross-border transfer\n  GDPR: Adequacy decision or SCCs required\n  CCPA: No restriction on transfers\n  PIPL: Security assessment mandatory\n\n✓ Generated 12 compliance checkpoints",
  },
];
