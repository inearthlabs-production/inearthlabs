"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  GraduationCap,
  BriefcaseBusiness,
  Store,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useState } from "react";

const industries = [
  {
    id: "local",
    number: "01",
    title: "Local Businesses",
    description:
      "Turn enquiries, follow-ups and customer communication into automated workflows.",
    icon: Store,
    workflow: [
      "Customer Enquiry",
      "AI Qualification",
      "WhatsApp Follow-up",
      "Appointment",
      "CRM Updated",
    ],
  },
  {
    id: "realestate",
    number: "02",
    title: "Real Estate",
    description:
      "Capture property leads, qualify prospects and automate follow-ups without manual effort.",
    icon: Building2,
    workflow: [
      "Property Enquiry",
      "AI Lead Qualification",
      "Property Matching",
      "Follow-up",
      "Site Visit",
    ],
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce",
    description:
      "Automate customer support, order communication and marketing workflows at scale.",
    icon: ShoppingBag,
    workflow: [
      "Customer Request",
      "AI Understanding",
      "Order / Product Data",
      "Automated Response",
      "Customer Updated",
    ],
  },
  {
    id: "education",
    number: "04",
    title: "Education",
    description:
      "Automate enquiries, admissions communication, reminders and student engagement.",
    icon: GraduationCap,
    workflow: [
      "Student Enquiry",
      "AI Qualification",
      "Course Information",
      "Follow-up",
      "Admission Lead",
    ],
  },
  {
    id: "professional",
    number: "05",
    title: "Professional Services",
    description:
      "Connect leads, proposals, follow-ups and internal processes into one intelligent system.",
    icon: BriefcaseBusiness,
    workflow: [
      "Lead Captured",
      "AI Analysis",
      "Proposal",
      "Follow-up",
      "Client Onboarded",
    ],
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const active = industries[activeIndustry];
  const ActiveIcon = active.icon;

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-black px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Industries we automate
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Built around your{" "}
            <span className="text-red-500">business.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Every business has different processes. We design intelligent
            workflows around the way your business actually operates.
          </p>
        </motion.div>

        {/* Main experience */}
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] lg:grid-cols-[0.75fr_1.25fr]">
          {/* Industry navigation */}
          <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r lg:p-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = index === activeIndustry;

              return (
                <button
                  key={industry.id}
                  onMouseEnter={() => setActiveIndustry(index)}
                  onClick={() => setActiveIndustry(index)}
                  className={`group relative flex w-full items-center gap-4 rounded-xl px-5 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/50 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      isActive ? "text-black/30" : "text-white/20"
                    }`}
                  >
                    {industry.number}
                  </span>

                  <Icon
                    size={19}
                    className={isActive ? "text-red-600" : ""}
                  />

                  <span className="flex-1 font-medium">
                    {industry.title}
                  </span>

                  <motion.div
                    animate={{
                      x: isActive ? 0 : -5,
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Workflow visual */}
          <div className="relative min-h-[600px] overflow-hidden p-8 sm:p-12">
            {/* Grid background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Ambient glow */}
            <motion.div
              animate={{
                x: [0, 80, -40, 0],
                y: [0, -50, 40, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute right-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-red-600/10 blur-[110px]"
            />

            <div className="relative z-10">
              {/* Industry heading */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="mb-12"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                    <ActiveIcon size={22} />
                  </div>

                  <h3 className="text-3xl font-semibold tracking-tight">
                    {active.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-white/40">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Workflow */}
              <div className="relative">
                <div className="absolute bottom-6 left-[19px] top-6 w-px bg-white/10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative space-y-3"
                  >
                    {active.workflow.map((step, index) => (
                      <motion.div
                        key={`${active.id}-${step}`}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.1,
                        }}
                        className="relative flex items-center gap-5"
                      >
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black text-red-500">
                          <Check size={16} />
                        </div>

                        <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition-colors hover:border-red-500/30">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                                Step {index + 1}
                              </p>

                              <p className="mt-1 font-medium">
                                {step}
                              </p>
                            </div>

                            <span className="hidden text-xs text-white/20 sm:block">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom statement */}
              <motion.div
                key={`bottom-${active.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-12 flex items-center gap-3 text-sm text-white/35"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                Designed around your business workflow
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}