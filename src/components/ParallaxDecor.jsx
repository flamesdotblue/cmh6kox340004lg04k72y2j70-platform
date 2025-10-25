import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxDecor() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <div className="pointer-events-none" aria-hidden>
      <motion.div style={{ y: y1, rotate }} className="fixed top-[20%] -left-24 h-64 w-64 bg-fuchsia-500/20 blur-3xl rounded-full" />
      <motion.div style={{ y: y2 }} className="fixed bottom-[15%] -right-24 h-72 w-72 bg-sky-500/20 blur-3xl rounded-full" />
      <motion.div style={{ y: y1 }} className="fixed top-1/2 left-1/3 h-40 w-40 bg-purple-500/20 blur-2xl rounded-full" />
    </div>
  );
}
