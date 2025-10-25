import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HorizontalScroller from './components/HorizontalScroller';
import ParallaxDecor from './components/ParallaxDecor';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-fuchsia-500/40 selection:text-white">
      <Navigation />
      <main className="relative">
        <Hero />
        <ParallaxDecor />
        <HorizontalScroller />
      </main>
    </div>
  );
}
