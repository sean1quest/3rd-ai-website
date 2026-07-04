import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05070A]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="3rd-AI"
            width={128}
            height={47}
            priority
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">

          <a
            href="#platform"
            className="transition-colors duration-300 hover:text-white"
          >
            Platform
          </a>

          <a
            href="#capabilities"
            className="transition-colors duration-300 hover:text-white"
          >
            Capabilities
          </a>

          <a
            href="#validation"
            className="transition-colors duration-300 hover:text-white"
          >
            Validation
          </a>

          <a
            href="#company"
            className="transition-colors duration-300 hover:text-white"
          >
            Company
          </a>

        </nav>

        {/* CTA */}
        <a
          href="#company"
          className="rounded-full border border-cyan-400/60 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black"
        >
          Schedule a Platform Briefing
        </a>

      </div>
    </header>
  );
}