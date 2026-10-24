"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  MessageSquare,
  Workflow,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Your customer reaches out",
    description:
      "A lead comes through WhatsApp, Instagram, your website, email, or another channel.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "AI understands the request",
    description:
      "An intelligent AI agent analyzes the conversation and determines what needs to happen next.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Automation takes over",
    description:
      "Your workflow connects the right applications and performs the required actions automatically.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Your business gets the result",
    description:
      "The lead is qualified, the customer is updated, your systems are synchronized, and your team gets notified.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.15, 0.75], ["0%", "100%"]);

  const orbY = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-32 text-white sm:py-40"
    >
      {/* Ambient background */}
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-red-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
            From manual work
            <br />
            to <span className="text-red-500">autonomous flow.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            We connect the tools your business already uses and turn scattered
            processes into one intelligent workflow.
          </p>
        </motion.div>

        {/* Main workflow */}
        <div className="relative mt-24">
          {/* Desktop progress line */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-white/10 md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full origin-top bg-red-500"
            />
          </div>

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid gap-8 md:grid-cols-[56px_1fr_280px] md:items-center"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                      <span className="font-mono text-xs text-red-400">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="max-w-2xl">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                        <Icon size={20} className="text-red-400" />
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-white/45 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Side visual */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    {index === 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MessageSquare
                            size={16}
                            className="text-red-400"
                          />
                          <span className="text-sm text-white/70">
                            New enquiry
                          </span>
                        </div>

                        <div className="h-2 w-3/4 rounded-full bg-white/10" />
                        <div className="h-2 w-1/2 rounded-full bg-white/10" />
                      </div>
                    )}

                    {index === 1 && (
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                          <Bot size={21} className="text-red-400" />
                        </div>

                        <div>
                          <p className="text-xs text-white/30">AI STATUS</p>
                          <p className="mt-1 text-sm font-medium">
                            Understanding...
                          </p>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="flex items-center gap-3">
                        <Workflow size={20} className="text-red-400" />

                        <div className="flex flex-1 items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          <div className="h-px flex-1 bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          <div className="h-px flex-1 bg-white/15" />
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                        </div>
                      </div>
                    )}

                    {index === 3 && (
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500">
                          <CheckCircle2 size={20} />
                        </div>

                        <div>
                          <p className="text-xs text-white/30">WORKFLOW</p>
                          <p className="mt-1 text-sm font-medium">
                            Completed
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Automation visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-32 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.06] via-transparent to-transparent" />

          <div className="relative">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-400">
                  Example workflow
                </p>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  One enquiry. Multiple systems. Zero manual work.
                </h3>
              </div>

              <Zap className="text-red-400" size={28} />
            </div>

            {/* Workflow nodes */}
            <div className="mt-12 grid gap-3 sm:grid-cols-5">
              {[
                {
                  icon: MessageSquare,
                  label: "Lead",
                },
                {
                  icon: Bot,
                  label: "AI Agent",
                },
                {
                  icon: Workflow,
                  label: "Automation",
                },
                {
                  icon: Database,
                  label: "CRM",
                },
                {
                  icon: CheckCircle2,
                  label: "Result",
                },
              ].map((node, index) => {
                const NodeIcon = node.icon;

                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.5,
                    }}
                    className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <NodeIcon
                        size={18}
                        className="text-white/60 transition-colors group-hover:text-red-400"
                      />
                    </div>

                    <span className="text-sm font-medium">
                      {node.label}
                    </span>

                    {index < 4 && (
                      <ArrowRight
                        size={15}
                        className="absolute -right-2.5 hidden text-red-500 sm:block"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}