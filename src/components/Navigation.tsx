"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#capabilities" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "https://docs.cloudsway.ai", external: true },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-8">
        <a href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
            <rect width="28" height="28" rx="8" fill="#171717" />
            <path d="M8 14l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Cloudsway
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:contact@cloudsway.ai"
            className="px-4 py-2 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <a
            href="https://console.cloudsway.ai"
            className="rounded-full bg-foreground px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-8 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                <a href="mailto:contact@cloudsway.ai" className="px-3 py-2.5 text-[15px] text-muted-foreground">
                  Contact
                </a>
                <a
                  href="https://console.cloudsway.ai"
                  className="rounded-full bg-foreground px-3 py-2.5 text-center text-[14px] font-medium text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
