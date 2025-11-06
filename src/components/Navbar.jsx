import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Rocket className="w-5 h-5" />
          <span className="font-semibold tracking-tight">CyberSpline</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#cta" className="hover:text-white transition-colors">Get started</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
        >
          Embed Now
        </a>
      </div>
    </header>
  );
}
