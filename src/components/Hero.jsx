import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  // As the user begins to scroll, sweep a mask to reveal the brand
  const sweep = useTransform(scrollYProgress, [0, 0.12, 0.25], [0, 65, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g2cnMT7B1IgkJ7Ie/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div style={{ opacity }} className="max-w-5xl mx-auto">
          <div className="text-white/70 uppercase tracking-[0.35em] text-xs sm:text-sm mb-4">Futuristic AI Experiences</div>
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 will-change-transform"
              style={{ width: sweep.to(v => `${v}%`) }}
            />
            <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
              addisai.no
            </h1>
          </div>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            We craft premium, interactive 3D web experiences powered by cutting-edge AI. Elevate your brand with a fluid, cinematic website that moves.
          </p>
          <div id="cta" className="mt-8 flex items-center justify-center gap-3">
            <a href="#work" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">View Work</a>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-medium shadow-[0_0_40px_-10px] shadow-fuchsia-500/60 hover:opacity-95 transition-opacity">Let's Build with AI</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
