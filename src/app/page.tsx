"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import WhyInEarthLabs from "@/components/WhyInEarthLabs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto px-4 pt-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
            {/* Logo */}
            <a
              href="/"
              className="group flex flex-col leading-none"
            >
              <span className="text-xl font-bold tracking-[-0.04em] text-white sm:text-2xl">
                <span className="text-red-500">I</span>n
                <span className="text-red-500">E</span>arth
                <span className="text-red-500">L</span>abs
              </span>

              <span
  className="mt-1 self-center text-[10px] italic tracking-wide text-white/70 sm:text-[11px]"
  style={{
    fontFamily: '"Brush Script MT", "Segoe Script", cursive',
  }}
>
  make your steps
</span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#services"
                className="text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#industries"
                className="text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                Industries
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                Contact
              </a>

              <a
                href="#contact"
                className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/5 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-black/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-5">
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 transition hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#industries"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 transition hover:text-white"
                >
                  Industries
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 transition hover:text-white"
                >
                  About
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 transition hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-fit rounded-full bg-red-500 px-5 py-2.5 font-medium text-white transition hover:bg-red-400"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Ambient red glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.07, 0.12, 0.07],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[45%] top-[25%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600 blur-[160px]"
          />

          <motion.div
            animate={{
              opacity: [0.03, 0.07, 0.03],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-red-500 blur-[150px]"
          />
        </div>

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Dark gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,transparent_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.75)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 lg:px-10">
          <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left content */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-red-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400 sm:text-sm">
                  AI • Automation • Growth
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                className="max-w-5xl text-[3.5rem] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[92px]"
              >
                <span className="text-white">Your Business.</span>
                <br />

                <span className="text-white/35">Automated by </span>

                <span className="text-red-500">AI.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25 }}
                className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg"
              >
                We design intelligent automation systems that eliminate
                repetitive work, streamline your operations, and help your
                business grow faster.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.35 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="group flex w-fit items-center justify-center gap-3 rounded-full bg-red-500 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-400 hover:shadow-xl hover:shadow-red-500/20"
                >
                  Automate My Business

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#services"
                  className="flex w-fit items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/75 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.03] hover:text-white"
                >
                  Explore Services
                </a>
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="relative hidden h-[430px] lg:block"
            >
              {/* Main system visualization */}
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

              <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20" />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
              />

              {/* Central node */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(239,68,68,0.08)",
                    "0 0 55px rgba(239,68,68,0.22)",
                    "0 0 20px rgba(239,68,68,0.08)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-red-500/30 bg-black/80"
              >
                <Sparkles className="h-7 w-7 text-red-400" />
              </motion.div>

              {/* Orbit nodes */}
              <div className="absolute left-[13%] top-[25%] h-2 w-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50" />
              <div className="absolute right-[15%] top-[31%] h-1.5 w-1.5 rounded-full bg-white/60" />
              <div className="absolute bottom-[25%] left-[20%] h-1.5 w-1.5 rounded-full bg-white/40" />
              <div className="absolute bottom-[19%] right-[22%] h-2 w-2 rounded-full bg-red-400 shadow-lg shadow-red-500/50" />

              {/* Small labels */}
              <div className="absolute left-[5%] top-[18%] rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/35 backdrop-blur-md">
                Input
              </div>

              <div className="absolute right-[2%] top-[26%] rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/35 backdrop-blur-md">
                AI
              </div>

              <div className="absolute bottom-[17%] right-[8%] rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-red-400/60 backdrop-blur-md">
                Result
              </div>
            </motion.div>
          </div>

          {/* Bottom label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-8 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/25 lg:left-10 lg:right-10"
          >
            <span>InEarthLabs</span>
            <span>Build • Automate • Grow</span>
          </motion.div>
        </div>
      </section>

      {/* ================= WEBSITE SECTIONS ================= */}
      <Services />
      <Industries />
      <HowItWorks />
      <WhyInEarthLabs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}