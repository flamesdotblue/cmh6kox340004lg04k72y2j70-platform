import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import MaskRevealText from './MaskRevealText';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="h-full w-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(168,85,247,0.25),transparent)]" />}> 
          <Spline scene="https://prod.spline.design/g2cnMT7B1IgkJ7Ie/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-white/70 uppercase tracking-[0.35em] text-xs sm:text-sm mb-4">Futuristic AI Experiences</div>
          <MaskRevealText as="h1" className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
            addisai.no
          </MaskRevealText>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            We craft premium, interactive 3D web experiences powered by cutting-edge AI. Elevate your brand with a fluid, cinematic website that moves.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#portfolio" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">View Work</a>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-medium shadow-[0_0_40px_-10px] shadow-fuchsia-500/60 hover:opacity-95 transition-opacity">Let’s Build with AI</a>
          </div>
        </div>
      </div>
    </section>
  );
}
