"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  Network,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Business-first automation",
    description:
      "We start with the business problem, then choose the right AI and automation to solve it.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Built around your workflow",
    description:
      "Every business works differently. Our systems are designed around the way your team actually operates.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Connected systems",
    description:
      "AI, APIs, CRM, WhatsApp, email and other tools can work together as one connected business system.",
    icon: Network,
  },
  {
    number: "04",
    title: "Designed to scale",
    description:
      "Start with one workflow and expand gradually into a complete automation ecosystem.",
    icon: TrendingUp,
  },
];

export default function WhyInEarthLabs() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-32 text-black">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Why InEarthLabs
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We don't automate{" "}
              <span className="text-black/30">for the sake of automation.</span>
              <br />
              We automate to{" "}
              <span className="text-red-600">move business forward.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">
              Technology is only useful when it creates a measurable difference.
              We combine AI and automation with a clear understanding of your
              business processes.
            </p>
          </div>
        </motion.div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 overflow-hidden rounded-[2rem] bg-black p-8 text-white sm:p-12 lg:p-16"
        >
          {/* Ambient red glow */}
          <motion.div
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -40, 30, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-red-600/15 blur-[120px]"
          />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Our approach
              </p>

              <h3 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                From manual work to intelligent systems.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/45">
                We identify repetitive processes, connect the systems involved,
                introduce intelligence where it matters and build workflows
                that keep running.
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-10 h-px max-w-md bg-gradient-to-r from-red-500 to-transparent"
              />
            </div>

            {/* Visual */}
            <div className="relative flex min-h-[300px] items-center justify-center">
              <div className="absolute h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute h-40 w-40 rounded-full border border-white/10" />
              <div className="absolute h-24 w-24 rounded-full border border-red-500/30" />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-56 w-56"
              >
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-500"
              >
                <BrainCircuit size={34} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Reasons */}
        <div className="mt-24 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group border-b border-black/10 p-7 sm:border-r lg:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest text-black/25">
                    {reason.number}
                  </span>

                  <Icon
                    size={19}
                    className="text-black/25 transition-colors duration-300 group-hover:text-red-600"
                  />
                </div>

                <h3 className="mt-12 text-lg font-semibold">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/50">
                  {reason.description}
                </p>

                <ArrowUpRight
                  size={18}
                  className="mt-8 text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}