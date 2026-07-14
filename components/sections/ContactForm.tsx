"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/ui/FadeIn";

const FORM_ENDPOINT = "https://formspree.io/f/mykqrdqg";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-16 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,217,255,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

          {/* LEFT — Context */}
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-base">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Let&apos;s talk about your infrastructure.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Whether you&apos;re evaluating the platform, exploring a pilot
              deployment, or just have questions about how Ambient
              Intelligence fits your environment — reach out and our team
              will follow up directly.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <div className="text-sm font-semibold text-cyan-400">Email</div>
                <div className="mt-1 text-slate-300">info@3rd-ai.com</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-cyan-400">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/company/3rd-ai-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-slate-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  linkedin.com/company/3rd-ai-com
                </a>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — Form */}
          <FadeIn delay={0.15} className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10">
                  <svg
                    className="h-8 w-8 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Message sent
                </h3>
                <p className="mt-2 text-slate-400">
                  Thanks for reaching out — we&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-medium text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-colors duration-300 focus:border-cyan-400/60"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-colors duration-300 focus:border-cyan-400/60"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-colors duration-300 focus:border-cyan-400/60"
                    placeholder="Tell us about your infrastructure and what you're looking to solve."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong sending your message. Please try
                    again, or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
