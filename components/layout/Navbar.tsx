import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="3rd-AI"
            width={125}
            height={32}
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

          <a href="#platform" className="transition hover:text-cyan-400">
            Platform
          </a>

          <a href="#technology" className="transition hover:text-cyan-400">
            Technology
          </a>

          <a href="#vision" className="transition hover:text-cyan-400">
            Vision
          </a>

          <a href="#company" className="transition hover:text-cyan-400">
            Company
          </a>

        </nav>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
        >
          Technical Briefing
        </a>

      </div>
    </header>
  );
}