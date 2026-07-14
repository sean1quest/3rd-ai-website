import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05070A] py-12">
      <div className="mx-auto max-w-7xl px-8">

        {/* Top row — logo + nav */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Logo + tagline */}
          <div>
            <a href="/" className="inline-flex items-center self-end">
              <Image
                src="/logo.png"
                alt="3rd-AI"
                width={120}
                height={30}
                style={{ width: "120px", height: "auto" }}
              />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Ambient Intelligence for connected environments.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-slate-500">
            <a href="/#architecture" className="transition-colors hover:text-slate-300">Architecture</a>
            <a href="/#platform" className="transition-colors hover:text-slate-300">Platform</a>
            <a href="/#validation" className="transition-colors hover:text-slate-300">Validation</a>
            <a href="/#contact" className="transition-colors hover:text-slate-300">Contact</a>
            <a href="/about" className="transition-colors hover:text-slate-300">About</a>
            <a href="/privacy" className="transition-colors hover:text-slate-300">Privacy Policy</a>
            <a
              href="https://www.linkedin.com/company/3rd-ai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-slate-300"
            >
              LinkedIn
            </a>
          </nav>

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/5" />

        {/* Bottom row — legal */}
        <div className="flex flex-col gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} 3rd-AI Limited. All rights reserved.</p>
          <p className="mt-2 max-w-2xl leading-5 md:mt-0">Projected figures are based on modelled deployment scenarios and do not represent guaranteed outcomes. Statements regarding future capabilities are forward-looking and subject to change.</p>
          <p className="leading-5">
            3rd-AI Limited · Registered in England &amp; Wales · Company No. 16341261
          </p>
        </div>

      </div>
    </footer>
  );
}
