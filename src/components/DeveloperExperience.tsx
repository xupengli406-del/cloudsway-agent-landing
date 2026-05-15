"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, BookOpen } from "lucide-react";

const sdks = [
  {
    lang: "Python",
    install: "pip install cloudsway",
    code: `from cloudsway import Cloudsway

client = Cloudsway()
result = client.run(query="Your research task", mode="deep_research")
print(result.report)`,
  },
  {
    lang: "TypeScript",
    install: "npm install @cloudsway/sdk",
    code: `import { Cloudsway } from "@cloudsway/sdk";

const client = new Cloudsway();
const result = await client.run({ query: "Your research task", mode: "deep_research" });
console.log(result.report);`,
  },
];

export default function DeveloperExperience() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Developer Experience
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Integrate in 3 Lines of Code
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            First-class SDKs for Python and TypeScript. Get your API key and start building in minutes.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {sdks.map((sdk, i) => (
            <motion.div
              key={sdk.lang}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <div className="flex items-center justify-between border-b border-border bg-muted px-6 py-3">
                <span className="text-sm font-semibold text-foreground">{sdk.lang}</span>
                <code className="rounded bg-white px-3 py-1 text-xs text-muted-foreground border border-border">
                  {sdk.install}
                </code>
              </div>
              <div className="bg-[#0f172a] p-5">
                <pre className="overflow-x-auto text-[13px] leading-relaxed">
                  <code className="text-slate-300 whitespace-pre">{sdk.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          <div className="flex items-center gap-3 rounded-xl border border-border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <Terminal size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">One API Key</p>
              <p className="text-sm text-muted-foreground">No complex setup or configuration</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <Zap size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">Streaming Support</p>
              <p className="text-sm text-muted-foreground">Real-time progress and results</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <BookOpen size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">Full Documentation</p>
              <p className="text-sm text-muted-foreground">API reference, guides, and examples</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
