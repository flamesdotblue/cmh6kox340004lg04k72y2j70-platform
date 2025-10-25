import React from 'react';
import { Rocket, Phone } from 'lucide-react';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between backdrop-blur-md/50">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-sky-500 p-[2px]">
            <div className="h-full w-full rounded-full bg-black grid place-items-center">
              <Rocket className="h-5 w-5 text-fuchsia-300 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-widest text-white/60">Agency</div>
            <div className="font-semibold">addisai.no</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#work" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors">
            <Phone className="h-4 w-4" /> <span>Contact</span>
          </a>
          <a href="#cta" className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 px-5 py-2 text-sm font-medium shadow-[0_0_40px_-10px] shadow-fuchsia-500/50 hover:opacity-95 transition-opacity">Let's Build with AI</a>
        </div>
      </div>
    </header>
  );
}
