"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Workflow,
  Settings2,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We map how your business works and identify repetitive processes.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Design",
    description: "We design automation around your actual workflow, tools, and goals.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Automate",
    description: "We connect AI, APIs, and business tools into intelligent workflows.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Scale",
    description: "We expand the system as your business grows and new opportunities appear.",
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 text-black md:py-32"
    >
      {/* Background detail */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/[0.04] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Intro */}
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              About InEarthLabs
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              We build systems that give businesses back their time.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-lg leading-8 text-black/60">
              InEarthLabs helps businesses move from repetitive manual work
              to intelligent, connected systems. We combine AI, automation,
              APIs, and the tools you already use to make everyday operations
              faster and more efficient.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border-b border-black/15 pb-2 text-sm font-semibold">
              <span>Business first. Technology second.</span>
              <ArrowUpRight className="h-4 w-4 text-red-500" />
            </div>
          </motion.div>
        </div>

        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] bg-black p-7 text-white md:p-10 lg:mt-28"
        >
          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Red glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 blur-[100px]"
          />

          <div className="relative">
            <div className="mb-12 max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                Our approach
              </p>

              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                From manual work to intelligent systems.
              </h3>
            </div>

            {/* Process */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-red-500/40 hover:bg-white/[0.07]"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-xs font-medium text-white/35">
                        {step.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition-colors duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/10">
                        <Icon className="h-4 w-4 text-white/70 group-hover:text-red-400" />
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold">{step.title}</h4>

                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {step.description}
                    </p>

                    {index < processSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.4 + index * 0.1,
                        }}
                        className="absolute -right-3 top-1/2 hidden h-px w-6 origin-left bg-red-500/40 lg:block"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom statement */}
            <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-sm leading-6 text-white/45">
                The goal isn't to replace your business with technology.
                It's to remove the work that keeps your team from focusing on
                what matters.
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Built for real businesses
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}