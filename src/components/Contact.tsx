"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setSubmitting(true);
  setError("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Unable to submit your enquiry.");
    }

    form.reset();
    setSubmitted(true);
  } catch (err) {
    console.error("Contact form error:", err);

    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-24 text-white md:py-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-red-500 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-150px] left-[-120px] h-[400px] w-[400px] rounded-full bg-red-500 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Let&apos;s work together
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Ready to automate your business?
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/50 md:text-lg">
              Tell us what&apos;s slowing your team down. We&apos;ll help you
              identify where AI and automation can make the biggest difference.
            </p>

            <div className="mt-10 border-l border-red-500/50 pl-5">
              <p className="text-sm font-medium text-white/80">
                Tell us about the process, not the technology.
              </p>

              <p className="mt-2 text-sm leading-6 text-white/40">
                You don&apos;t need to know what should be automated. That&apos;s
                what we&apos;re here to help with.
              </p>
            </div>
            {/* Contact details */}
<div className="mt-10 grid gap-5 sm:grid-cols-2">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
      Email
    </p>
    <a
      href="mailto:inearthlabs@gmail.com"
      className="mt-2 block text-sm text-white/70 transition-colors hover:text-red-400"
    >
      inearthlabs@gmail.com
    </a>
  </div>

  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
      Phone
    </p>
    <a
      href="tel:+916382380314"
      className="mt-2 block text-sm text-white/70 transition-colors hover:text-red-400"
    >
      (+91) 6382380314
    </a>
  </div>

  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
      Working hours
    </p>
    <p className="mt-2 text-sm text-white/70">
      9:30 AM – 6:30 PM
    </p>
  </div>

  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
      Location
    </p>
    <p className="mt-2 text-sm leading-6 text-white/70">
      11, Viswanathan Nagar, D.R.O Colony,
      <br />
      K. Pudur, Madurai – 625007
    </p>
  </div>
</div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
          >
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
                  <CheckCircle2 className="h-7 w-7 text-red-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Thanks for reaching out.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                  Your enquiry has been captured. We&apos;ll connect with you
                  to understand your business needs.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium text-red-400 transition hover:text-red-300"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-red-500/50 focus:bg-white/[0.06]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Business email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-red-500/50 focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Company / Business
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Your company or business name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-red-500/50 focus:bg-white/[0.06]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    What would you like to automate?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about the repetitive work, process, or challenge..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-red-500/50 focus:bg-white/[0.06]"
                  />
                </div>

                {/* Submit */}

{error && (
  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3">
    <p className="text-sm text-red-300">{error}</p>
  </div>
)}

<button
  type="submit"
  disabled={submitting}
  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60"
>
  {submitting ? "Sending..." : "Start a conversation"}

  {!submitting && (
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  )}
</button>

                <p className="text-center text-xs leading-5 text-white/30">
                  Share as much or as little as you know. We&apos;ll take it
                  from there.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}