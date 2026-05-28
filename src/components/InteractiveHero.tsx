"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Bot,
  Search,
  Code2,
  FileText,
  Brain,
} from "lucide-react";
import { demoCases } from "@/lib/demoData";

const toolsConfig = [
  { id: "Web Search", icon: Search, color: "#2D68FF" },
  { id: "Code Sandbox", icon: Code2, color: "#10B981" },
  { id: "File Processing", icon: FileText, color: "#F59E0B" },
  { id: "Memory", icon: Brain, color: "#8B5CF6" },
];

function PieChart({
  data,
}: {
  data: { label: string; value: number; color: string }[];
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;

  const slices = data.map((d) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360;
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    const x1 = 100 + 80 * Math.cos(startRad);
    const y1 = 100 + 80 * Math.sin(startRad);
    const x2 = 100 + 80 * Math.cos(endRad);
    const y2 = 100 + 80 * Math.sin(endRad);
    return {
      ...d,
      path: `M100,100 L${x1},${y1} A80,80 0 ${largeArc},1 ${x2},${y2} Z`,
    };
  });

  return (
    <svg width="180" height="180" viewBox="0 0 200 200">
      {slices.map((s) => (
        <path
          key={s.label}
          d={s.path}
          fill={s.color}
          stroke="white"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

export default function InteractiveHero() {
  const [activeCase, setActiveCase] = useState(0);
  const [phase, setPhase] = useState<"typing" | "steps" | "results">("typing");
  const [typedChars, setTypedChars] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleRows, setVisibleRows] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentDemo = demoCases[activeCase];

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startAnimation = useCallback(() => {
    clearTimers();
    setPhase("typing");
    setTypedChars(0);
    setCurrentStep(0);
    setVisibleRows(0);

    const prompt = demoCases[activeCase].prompt;
    let charIdx = 0;

    intervalRef.current = setInterval(() => {
      charIdx += 2;
      if (charIdx >= prompt.length) {
        charIdx = prompt.length;
        if (intervalRef.current) clearInterval(intervalRef.current);
        timerRef.current = setTimeout(() => {
          setPhase("steps");
          runSteps();
        }, 400);
      }
      setTypedChars(charIdx);
    }, 30);
  }, [activeCase, clearTimers]);

  function runSteps() {
    const steps = demoCases[activeCase].steps;
    let stepIdx = 0;
    setCurrentStep(0);

    function nextStep() {
      if (stepIdx >= steps.length) {
        setPhase("results");
        revealRows();
        return;
      }
      setCurrentStep(stepIdx);
      timerRef.current = setTimeout(() => {
        stepIdx++;
        nextStep();
      }, steps[stepIdx].duration);
    }
    nextStep();
  }

  function revealRows() {
    const rows = demoCases[activeCase].rows;
    if (!rows || rows.length === 0) return;
    let rowIdx = 0;
    intervalRef.current = setInterval(() => {
      rowIdx++;
      setVisibleRows(rowIdx);
      if (rowIdx >= rows.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 150);
  }

  useEffect(() => {
    if (isAutoplay) {
      startAnimation();
    }
    return clearTimers;
  }, [activeCase, isAutoplay, startAnimation, clearTimers]);

  useEffect(() => {
    if (!isAutoplay) return;
    const autoplay = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % demoCases.length);
    }, 12000);
    return () => clearInterval(autoplay);
  }, [activeCase, isAutoplay]);

  function handleCaseSwitch(idx: number) {
    if (idx === activeCase) return;
    clearTimers();
    setActiveCase(idx);
    if (!isAutoplay) {
      setIsAutoplay(true);
    }
  }

  function handleInputFocus() {
    setIsAutoplay(false);
    clearTimers();
    if (resumeRef.current) clearTimeout(resumeRef.current);
  }

  function handleInputBlur() {
    if (inputValue.trim() === "") {
      resumeRef.current = setTimeout(() => {
        setIsAutoplay(true);
      }, 2000);
    }
  }

  function handleSend() {
    const query = inputValue.trim();
    const url = query
      ? `https://console.cloudsway.ai?q=${encodeURIComponent(query)}`
      : "https://console.cloudsway.ai";
    window.open(url, "_blank");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && inputValue.trim()) {
      handleSend();
    }
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,104,255,0.08),transparent)]" />

      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-28 text-center lg:px-8 lg:pb-24 lg:pt-36">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl lg:text-6xl"
        >
          AI infrastructure for agents
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-gray-500"
        >
          One API for search, research, and code execution
        </motion.p>

        {/* Interactive Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
        >
          {/* Prompt Area */}
          <div className="border-b border-gray-100 px-6 py-5">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 pr-12 text-left text-[15px] text-[#171717] placeholder:text-gray-400 focus:border-[#2D68FF] focus:outline-none focus:ring-1 focus:ring-[#2D68FF]/30"
              />
              {/* Typing animation overlay */}
              {isAutoplay && (
                <div className="pointer-events-none absolute inset-0 flex items-center rounded-xl bg-gray-50 px-5">
                  <span className="text-[15px] text-[#171717]">
                    {currentDemo.prompt.slice(0, typedChars)}
                  </span>
                  {phase === "typing" && (
                    <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-[#2D68FF]" />
                  )}
                </div>
              )}
              {/* Send button */}
              <button
                onClick={handleSend}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-lg bg-[#171717] p-2 text-white transition hover:bg-[#333]"
              >
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-3 py-1 text-xs font-medium text-white">
                <Bot size={12} />
                Agent
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex min-h-[320px]">
            {/* Left: Tools Active */}
            <div className="hidden w-[160px] shrink-0 border-r border-gray-100 px-5 py-5 lg:block">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Tools Active
              </p>
              <div className="flex flex-col gap-2">
                {toolsConfig.map((tool) => {
                  const isActive = currentDemo.tools.includes(tool.id);
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.id}
                      className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] transition ${
                        isActive
                          ? "border-l-2 bg-gray-50 font-medium text-[#171717]"
                          : "text-gray-300"
                      }`}
                      style={
                        isActive ? { borderLeftColor: tool.color } : undefined
                      }
                    >
                      <Icon
                        size={14}
                        style={{ color: isActive ? tool.color : undefined }}
                      />
                      <span>{tool.id}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Results */}
            <div className="flex-1 px-6 py-5">
              <AnimatePresence mode="wait">
                {phase === "steps" && isAutoplay && (
                  <motion.div
                    key="steps"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-3 h-5 w-5 animate-spin rounded-full border-2 border-[#2D68FF] border-t-transparent" />
                      <p className="text-sm text-gray-500">
                        {currentDemo.steps[currentStep]?.label}...
                      </p>
                    </div>
                  </motion.div>
                )}

                {phase === "results" && isAutoplay && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {/* Status */}
                    <div className="mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-sm font-medium text-green-600">
                        {currentDemo.status}
                      </span>
                    </div>

                    {/* Table Result */}
                    {currentDemo.resultType === "table" &&
                      currentDemo.columns &&
                      currentDemo.rows && (
                        <>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-[13px]">
                              <thead>
                                <tr className="border-b border-gray-100">
                                  {currentDemo.columns.map((col) => (
                                    <th
                                      key={col}
                                      className="pb-2 pr-4 font-semibold uppercase tracking-wider text-gray-400"
                                    >
                                      {col}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {currentDemo.rows.map((row, rowIdx) => (
                                  <motion.tr
                                    key={rowIdx}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={
                                      rowIdx < visibleRows
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 6 }
                                    }
                                    transition={{ duration: 0.25 }}
                                    className="border-b border-gray-50"
                                  >
                                    {row.map((cell, cellIdx) => (
                                      <td
                                        key={cellIdx}
                                        className="py-2.5 pr-4 text-[#171717]"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </motion.tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {currentDemo.footer &&
                            visibleRows >= currentDemo.rows.length && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-4 text-sm font-medium text-[#171717]"
                              >
                                {currentDemo.footer}
                              </motion.p>
                            )}
                        </>
                      )}

                    {/* Text Result */}
                    {currentDemo.resultType === "text" &&
                      currentDemo.textResult && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="rounded-lg bg-gray-900 px-5 py-4 font-mono text-[13px] leading-relaxed text-green-400"
                        >
                          <pre className="whitespace-pre-wrap break-all">
                            {currentDemo.textResult}
                          </pre>
                        </motion.div>
                      )}

                    {/* Chart Result */}
                    {currentDemo.resultType === "chart" &&
                      currentDemo.chartData && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center justify-center gap-8"
                        >
                          <PieChart data={currentDemo.chartData} />
                          <div className="flex flex-col gap-2">
                            {currentDemo.chartData.map((slice) => (
                              <div
                                key={slice.label}
                                className="flex items-center gap-2 text-[13px]"
                              >
                                <span
                                  className="inline-block h-3 w-3 rounded-sm"
                                  style={{ backgroundColor: slice.color }}
                                />
                                <span className="text-[#171717]">
                                  {slice.label}
                                </span>
                                <span className="text-gray-400">
                                  {slice.value}%
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                  </motion.div>
                )}

                {((phase === "typing" && isAutoplay) || !isAutoplay) &&
                  phase !== "steps" &&
                  phase !== "results" && (
                    <motion.div
                      key="waiting"
                      className="flex h-full items-center justify-center"
                    >
                      <p className="text-sm text-gray-400">
                        {isAutoplay
                          ? "Waiting for input..."
                          : "Type your task and press Send to try it out"}
                      </p>
                    </motion.div>
                  )}

                {!isAutoplay && (phase === "steps" || phase === "results") && (
                  <motion.div
                    key="user-mode"
                    className="flex h-full items-center justify-center"
                  >
                    <p className="text-sm text-gray-400">
                      Type your task and press Send to try it out
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between border-t border-gray-100 px-6 py-3">
            {/* Case Tabs */}
            <div className="flex items-center gap-1">
              {demoCases.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCaseSwitch(idx)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    idx === activeCase
                      ? "bg-gray-100 text-[#171717]"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {demoCases.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    idx === activeCase ? "bg-[#2D68FF]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
