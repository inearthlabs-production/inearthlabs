"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Megaphone,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Workflow,
    title: "AI Business Automation",
    description:
      "Automate repetitive business operations so your team can focus on work that actually matters.",
    features: [
      "Lead capture",
      "Follow-ups",
      "CRM automation",
      "Notifications",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Agents",
    description:
      "Intelligent AI agents that can communicate, make decisions, retrieve information, and execute business tasks.",
    features: [
      "Customer support",
      "Sales agents",
      "Internal assistants",
      "Knowledge agents",
    ],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Marketing & Content Automation",
    description:
      "Turn your marketing workflow into an automated system for creating, distributing, and measuring content.",
    features: [
      "Social content",
      "AI video",
      "Campaign workflows",
      "Marketing reports",
    ],
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "End-to-End Automation",
    description:
      "Connect your entire business workflow into one intelligent system—from the first lead to the final report.",
    features: [
      "Multi-step workflows",
      "API integrations",
      "Business systems",
      "Automated reporting",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28 text-black sm:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-red-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
            We turn repetitive work
            <br />
            into <span className="text-red-500">intelligent systems.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
            From individual workflows to complete business operations, we
            design AI-powered systems that work behind the scenes and keep
            your business moving.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative bg-white p-8 transition-colors duration-500 hover:bg-black hover:text-white sm:p-10 lg:p-12"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-black/30 transition-colors group-hover:text-white/30">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:border-red-500 group-hover:bg-red-500">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="transition-colors group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-16">
                  <h3 className="max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-6 text-black/55 transition-colors group-hover:text-white/55 sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/55 transition-colors group-hover:border-white/15 group-hover:text-white/60"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-10 flex items-center gap-2 text-sm font-medium text-red-500">
                  Explore service
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-black/50">
            Every business is different. We build automation around your
            existing processes instead of forcing your business into a
            predefined system.
          </p>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Build My Automation
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}