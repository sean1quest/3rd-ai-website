"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/#architecture", label: "Architecture" },
  { href: "/#platform",     label: "Platform" },
  { href: "/#validation",   label: "Validation" },
  { href: "/#contact",      label: "Contact" },
  { href: "/about",         label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05070A]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-28 md:px-8">

          {/* Logo */}
          <a href="/" className="flex items-center md:self-end md:pb-4">
            <Image
              src="/logo.png"
              alt="3rd-AI"
              width={140}
              height={36}
              priority
              style={{ width: "clamp(130px, 13vw, 160px)", height: "auto" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-12 text-sm font-medium text-slate-400 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors duration-300 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/#contact"
            className="hidden rounded-full border border-cyan-400/60 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black md:block"
          >
            Technical Briefing
          </a>

          {/* Mobile — hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>

        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-x-0 top-20 z-40 border-b border-white/5 bg-[#05070A]/95 backdrop-blur-xl transition-all duration-300 md:hidden
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full border border-cyan-400/60 px-5 py-3 text-center text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black"
          >
            Technical Briefing
          </a>
        </nav>
      </div>
    </>
  );
}
