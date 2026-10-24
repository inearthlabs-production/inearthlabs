"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Subtle top border */}
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Main footer */}
        <div className="flex flex-col gap-12 py-14 md:py-16 lg:flex-row lg:items-end lg:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <motion.a
              href="#"
              whileHover={{ x: 2 }}
              className="inline-block text-2xl font-bold tracking-tight"
            >
              InEarth<span className="text-red-500">Labs</span>
            </motion.a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
  Intelligent automation systems that help businesses reduce
  repetitive work, connect their operations, and move faster.
</p>

<div className="mt-6 space-y-2 text-sm text-white/40">
  <a
    href="mailto:inearthlabs@gmail.com"
    className="block transition-colors hover:text-white"
  >
    inearthlabs@gmail.com
  </a>

  <a
    href="tel:+916382380314"
    className="block transition-colors hover:text-white"
  >
    (+91) 6382380314
  </a>

  <p className="leading-6">
    11, Viswanathan Nagar, D.R.O Colony,
    <br />
    K. Pudur, Madurai – 625007
  </p>
</div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Explore
            </p>

            <nav className="flex flex-wrap gap-x-7 gap-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  {item.name}

                  <ArrowUpRight className="h-3.5 w-3.5 text-white/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-400" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} InEarthLabs. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-2 transition-colors hover:text-white"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-red-500/50">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}